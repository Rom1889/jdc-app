/* =========================================================================
   revenuecat-bridge.js — Pont entre RevenueCat (StoreKit) et packManager.js
   Chargé APRÈS packManager.js et APRÈS le SDK Capacitor.
   Ne fait rien dans un navigateur classique (web) : le système de test
   local de packManager.js (markPurchased/localStorage) continue de
   fonctionner tel quel pour le développement/preview web.
   ========================================================================= */
(function(){
  // Clé API RevenueCat (publique, sûre à exposer côté client) — à remplacer
  // par ta vraie clé "Apple App Store" depuis le dashboard RevenueCat.
  const REVENUECAT_API_KEY = "appl_REMPLACE_MOI";

  const isNative = () => !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());

  async function getPurchasesPlugin(){
    // Le plugin s'enregistre sous window.Capacitor.Plugins.Purchases une fois le SDK chargé
    if(window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Purchases){
      return window.Capacitor.Plugins.Purchases;
    }
    return null;
  }

  // Synchronise l'état RevenueCat -> PackManager (marque comme achetés tous les
  // packs dont le productID RevenueCat a été acheté, actif ou non — cohérent
  // avec des achats non-consommables qui ne "expirent" jamais).
  async function syncFromCustomerInfo(customerInfo){
    if(!window.PackManager || !customerInfo) return;
    const owned = new Set(customerInfo.allPurchasedProductIdentifiers || []);
    Object.keys(window.PackManager.CATALOG).forEach(packId=>{
      const pid = window.PackManager.productId(packId);
      if(owned.has(pid)) window.PackManager.markPurchased(packId);
    });
  }

  async function init(){
    if(!isNative()) return; // rien à faire en navigateur web (mode test local)
    const Purchases = await getPurchasesPlugin();
    if(!Purchases){ console.warn("[RCBridge] Plugin Purchases introuvable — vérifie l'installation native."); return; }
    try{
      await Purchases.configure({ apiKey: REVENUECAT_API_KEY });
      const { customerInfo } = await Purchases.getCustomerInfo();
      await syncFromCustomerInfo(customerInfo);
    }catch(e){
      console.error("[RCBridge] échec configure/getCustomerInfo:", e);
    }
  }

  // Lance un vrai achat StoreKit pour le pack demandé.
  async function purchase(packId){
    const Purchases = await getPurchasesPlugin();
    if(!Purchases) throw new Error("Plugin Purchases indisponible");
    const pid = window.PackManager.productId(packId);
    const { products } = await Purchases.getProducts({ productIdentifiers: [pid] });
    if(!products || !products.length){
      throw new Error(`Produit introuvable côté StoreKit : ${pid} (vérifie qu'il est "Ready to Submit" sur App Store Connect et synchronisé dans RevenueCat)`);
    }
    const { customerInfo } = await Purchases.purchaseStoreProduct({
      product: products[0]
    });
    await syncFromCustomerInfo(customerInfo);
    return true;
  }

  // Restaure les achats déjà faits par ce compte Apple (obligatoire côté App Store).
  async function restore(){
    const Purchases = await getPurchasesPlugin();
    if(!Purchases) throw new Error("Plugin Purchases indisponible");
    const { customerInfo } = await Purchases.restorePurchases();
    await syncFromCustomerInfo(customerInfo);
    return true;
  }

  window.RCBridge = { isNative, purchase, restore, init };
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
