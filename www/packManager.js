/* =========================================================================
   packManager.js — Gestion des packs de contenu achetables (StoreKit)
   À charger AVANT le script principal de index.html.
   Fournit : window.PackManager.getUnlockedChallenges()
             window.PackManager.isPurchased(packId)
             window.PackManager.markPurchased(packId)   <- appelé par le pont natif après achat validé
   ========================================================================= */
(function(){
  const BUNDLE_ID = "com.tonstudio.jeudecouple"; // <- adapter à ton App ID réel

  // Catalogue des packs : id -> fichier JSON + statut gratuit + nb de défis (pour affichage)
  const CATALOG = {
    niveau_1:        { free: true,  file: "Packs/niveau_1.json",        count: 125 },
    niveau_2:        { free: true,  file: "Packs/niveau_2.json",        count: 130 },
    niveau_3:        { free: true,  file: "Packs/niveau_3.json",        count: 132 },
    base_aftercare:  { free: true,  file: "Packs/base_aftercare.json",  count: 27  },
    niveau_4:        { free: false, file: "Packs/niveau_4.json",        count: 119 },
    niveau_5:        { free: false, file: "Packs/niveau_5.json",        count: 145 },
    theme_sensoriel:    { free: false, file: "Packs/theme_sensoriel.json",    count: 236 },
    theme_ambiance:     { free: false, file: "Packs/theme_ambiance.json",     count: 95  },
    theme_jeux_legers:  { free: false, file: "Packs/theme_jeux_legers.json",  count: 168 },
    theme_bdsm_avance:  { free: false, file: "Packs/theme_bdsm_avance.json",  count: 181 },
    theme_photo_video:  { free: false, file: "Packs/theme_photo_video.json",  count: 193 },
    theme_qacte:        { free: false, file: "Packs/theme_qacte.json",        count: 64  },
    theme_exterieur:    { free: false, file: "Packs/theme_exterieur.json",    count: 43  },
    megapack:           { free: false, file: null, count: 1244, isBundle: true }, // débloque tous les packs payants d'un coup, ne charge pas de fichier propre
  };

  // Product ID StoreKit = BUNDLE_ID + "." + packId (doit matcher le .storekit / App Store Connect)
  function productId(packId){ return `${BUNDLE_ID}.${packId}`; }

  // --- Persistance locale des achats (à remplacer/compléter par la vérification de reçu côté natif) ---
  const STORAGE_KEY = "jdc_purchased_packs";
  function loadPurchased(){
    try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")); }
    catch(e){ return new Set(); }
  }
  function savePurchased(set){
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  }
  let purchased = loadPurchased();

  function isPurchased(packId){
    const meta = CATALOG[packId];
    if (!meta) return false;
    if (meta.free || purchased.has(packId)) return true;
    if (!meta.isBundle && purchased.has("megapack")) return true; // le mégapack débloque tout le reste
    return false;
  }

  // Appelé par le pont natif iOS (Capacitor/StoreKit) une fois l'achat validé côté serveur/Apple.
  // ex. window.PackManager.markPurchased("niveau_3")
  function markPurchased(packId){
    if (!CATALOG[packId]) { console.warn("Pack inconnu:", packId); return; }
    purchased.add(packId);
    savePurchased(purchased);
  }

  function restorePurchases(packIds){
    packIds.forEach(id => purchased.add(id));
    savePurchased(purchased);
  }

  // Efface tous les achats-tests locaux (pratique en dev — n'a aucun effet sur de vrais reçus StoreKit)
  function resetPurchases(){
    purchased = new Set();
    savePurchased(purchased);
  }

  // --- Sauvegarde portable (palliatif tant qu'il n'y a pas de vrais reçus StoreKit) ---
  // Génère un code que l'utilisateur peut copier et recoller sur un autre navigateur/appareil
  // pour retrouver ses packs débloqués. À remplacer par PackManager de RevenueCat (restauration
  // via l'Apple ID) une fois StoreKit branché — Apple exige un vrai bouton "Restaurer mes achats".
  function exportPurchaseCode(){
    const payload = { v: 1, packs: [...purchased] };
    return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  }
  function importPurchaseCode(code){
    try{
      const payload = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
      if(!payload || !Array.isArray(payload.packs)) throw new Error("format invalide");
      payload.packs.forEach(id => { if(CATALOG[id]) purchased.add(id); });
      savePurchased(purchased);
      return true;
    }catch(e){
      console.error("[PackManager] code de sauvegarde invalide:", e.message);
      return false;
    }
  }

  // --- Langue du contenu ---
  // Le français est la source (Packs/<pack>.json). Une traduction vit dans Packs/<lang>/<pack>.json :
  // même longueur, même ordre, chaque entrée = "texte traduit" ou {text:"..."} (vide → on garde le français).
  let lang = "fr";
  function setLang(l){ lang = l || "fr"; }
  async function loadTranslation(packId){
    if(lang==="fr") return null;
    const meta = CATALOG[packId];
    const url = meta.file.replace(/^Packs\//, `Packs/${lang}/`);
    try{
      const res = await fetch(url);
      if(!res.ok) return null;
      const tr = await res.json();
      return Array.isArray(tr) ? tr : null;
    }catch(e){ return null; }
  }

  // --- Chargement des JSON et fusion dans le pool de défis ---
  const cache = {};
  async function loadPack(packId){
    const key = packId + "@" + lang;
    if (cache[key]) return cache[key];
    const meta = CATALOG[packId];
    try{
      const res = await fetch(meta.file);
      if(!res.ok) throw new Error(`HTTP ${res.status} sur ${meta.file}`);
      let data = await res.json();
      if(!Array.isArray(data)) throw new Error(`JSON inattendu (pas un tableau) dans ${meta.file}`);
      const tr = await loadTranslation(packId);
      if(tr){
        data = data.map((it,i)=>{
          const t = tr[i]; const txt = (t && typeof t==="object") ? t.text : t;
          return (typeof txt==="string" && txt.trim()) ? {...it, text: txt, text_fr: it.text, lang} : it;
        });
      }
      cache[key] = data;
      return data;
    }catch(e){
      console.error(`[PackManager] échec de chargement du pack "${packId}" (${meta.file}):`, e.message);
      return []; // ce pack sera juste vide, le reste continue de charger
    }
  }

  // Retourne la liste complète des défis débloqués (gratuits + achetés),
  // au même format que l'ancien levelsData mais avec un champ .level et .packId
  async function getUnlockedChallenges(){
    const ids = Object.keys(CATALOG).filter(id => isPurchased(id) && !CATALOG[id].isBundle);
    const chunks = await Promise.all(ids.map(async id => {
      const items = await loadPack(id);
      return items.map(it => ({...it, packId: id}));
    }));
    // BUG corrigé : un pack à thème (ex. theme_photo_video) contient des défis balisés
    // level 1 à 5. Posséder ce pack seul ne doit PAS rendre accessibles les défis de
    // niveau 4/5 — ce niveau reste soumis à l'achat séparé de niveau_4 / niveau_5.
    return chunks.flat().filter(it => isPurchased("niveau_"+it.level));
  }

  // Reconstruit un objet {1:[...],2:[...],...} compatible avec l'ancien moteur (levelsData)
  async function getUnlockedLevelsData(){
    const all = await getUnlockedChallenges();
    const out = {1:[],2:[],3:[],4:[],5:[]};
    all.forEach(c => { if (out[c.level]) out[c.level].push(c); });
    return out;
  }

  // Retourne n textes d'exemple d'un pack, achat ou non — pour un aperçu avant achat.
  // Ne marque rien comme possédé, se contente de lire le même fichier public.
  async function previewPack(packId, n=3){
    try{
      const data = await loadPack(packId);
      if(!Array.isArray(data) || !data.length) return [];
      // échantillon dispersé plutôt que les n premiers (plus représentatif)
      const step = Math.max(1, Math.floor(data.length/n));
      const sample = [];
      for(let i=0; i<data.length && sample.length<n; i+=step) sample.push(data[i]);
      return sample.map(x=>x.text);
    }catch(e){
      return [];
    }
  }

  window.PackManager = {
    CATALOG, productId, isPurchased, setLang, get lang(){ return lang; }, markPurchased, restorePurchases, resetPurchases,
    exportPurchaseCode, importPurchaseCode, previewPack,
    getUnlockedChallenges, getUnlockedLevelsData,
  };
})();
