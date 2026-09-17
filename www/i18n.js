/* i18n.js — Traduction de l'interface (FR = source). Chargé avant le script principal.
   - Dictionnaire exact : texte FR → {en, de, es}
   - Motifs (regex) pour les textes construits dynamiquement ("Niveau 3", "Alex joue", …)
   - Traduction automatique du DOM (texte + placeholder/title/aria-label) et de tout nœud ajouté ensuite
   Le contenu des défis n'est PAS traduit ici (voir packManager.setLang + Packs/<lang>/). */
(function(){
  const D = {};
  const add = (fr,en,de,es)=>{ D[fr] = {en,de,es}; };

  // ---------- Accueil / navigation ----------
  add("Retrouvez la complicité, à votre rythme","Rediscover intimacy, at your own pace","Findet eure Nähe wieder, in eurem Tempo","Recuperad la complicidad, a vuestro ritmo");
  add("Retrouvez la complicité","Rediscover intimacy","Findet eure Nähe wieder","Recuperad la complicidad");
  add("Reprendre","Resume","Fortsetzen","Continuar");
  add("Jouer","Play","Spielen","Jugar");
  add("Nouvelle configuration","New setup","Neue Einstellungen","Nueva configuración");
  add("Vos réglages sont mémorisés d'une soirée à l'autre.","Your settings are saved from one night to the next.","Eure Einstellungen bleiben von Abend zu Abend gespeichert.","Vuestros ajustes se guardan de una noche a otra.");
  add("Boutique","Shop","Shop","Tienda");
  add("Favoris","Favorites","Favoriten","Favoritos");
  add("Réglages","Settings","Einstellungen","Ajustes");
  add("Langue","Language","Sprache","Idioma");
  add("Noter l'app","Rate the app","App bewerten","Valorar la app");
  add("Revoir l'introduction","Watch the intro again","Einführung erneut ansehen","Ver la introducción de nuevo");
  add("Navigation principale","Main navigation","Hauptnavigation","Navegación principal");
  add("Retour","Back","Zurück","Atrás");
  add("Fermer","Close","Schließen","Cerrar");
  add("Annuler","Cancel","Abbrechen","Cancelar");
  add("Appliquer","Apply","Anwenden","Aplicar");
  add("Options","Options","Optionen","Opciones");

  // ---------- Nouvelle partie ----------
  add("Nouvelle partie","New game","Neues Spiel","Nueva partida");
  add("Joueurs","Players","Spieler","Jugadores");
  add("Joueur 1","Player 1","Spieler 1","Jugador 1");
  add("Joueur 2","Player 2","Spieler 2","Jugador 2");
  add("Nom du joueur 1","Player 1 name","Name Spieler 1","Nombre del jugador 1");
  add("Nom du joueur 2","Player 2 name","Name Spieler 2","Nombre del jugador 2");
  add("Mode","Mode","Modus","Modo");
  add("Duo","Duo","Duo","Dúo");
  add("Solo","Solo","Solo","Solo");
  add("Marathon","Marathon","Marathon","Maratón");
  add("Roulette","Roulette","Roulette","Ruleta");
  add("Relais","Relay","Staffel","Relevo");
  add("Cachée","Hidden","Verdeckt","Oculta");
  add("Blitz","Blitz","Blitz","Blitz");
  add("à tour de rôle","taking turns","abwechselnd","por turnos");
  add("un seul mène","one player leads","einer führt","uno dirige");
  add("tous les niveaux","all levels","alle Stufen","todos los niveles");
  add("la roue décide","the wheel decides","das Rad entscheidet","la ruleta decide");
  add("changement à mi-chrono","swap at half time","Wechsel zur Halbzeit","cambio a mitad del tiempo");
  add("un seul lit","only one reads","nur einer liest","solo uno lee");
  add("30 secondes","30 seconds","30 Sekunden","30 segundos");
  add("Joueur 1 mène","Player 1 leads","Spieler 1 führt","Jugador 1 dirige");
  add("Joueur 2 mène","Player 2 leads","Spieler 2 führt","Jugador 2 dirige");
  add("Niveau de départ","Starting level","Startstufe","Nivel inicial");
  add("Niveau","Level","Stufe","Nivel");
  add("Connexion","Connection","Verbindung","Conexión");
  add("Tension","Tension","Spannung","Tensión");
  add("Sensualité","Sensuality","Sinnlichkeit","Sensualidad");
  add("Stimulation","Stimulation","Stimulation","Estimulación");
  add("Acte complet","Full act","Voller Akt","Acto completo");
  add("Options avancées","Advanced options","Erweiterte Optionen","Opciones avanzadas");
  add("Packs, accessoires, limites, durées","Packs, accessories, limits, durations","Packs, Accessoires, Grenzen, Dauer","Packs, accesorios, límites, duraciones");
  add("Types de défis affichés","Challenge types shown","Angezeigte Aufgabentypen","Tipos de retos mostrados");
  add("Seules les catégories que tu possèdes s'affichent ici. Décoche pour exclure de la partie (ex. Lieux est décoché par défaut). Vêtements : niveaux 1-2 encore habillés / sous-vêtements. À partir du niveau 3 : plus aucun vêtement (nu). Aftercare décoché = plus de carte calme au hasard, mais une reste toujours déclenchée après un enchaînement intense (sécurité).",
      "Only the categories you own appear here. Uncheck to exclude from the game (e.g. Places is unchecked by default). Clothes: levels 1-2 still dressed / underwear. From level 3: no clothes at all. Aftercare unchecked = no more calm cards.",
      "Nur Kategorien, die du besitzt, erscheinen hier. Abwählen, um sie aus dem Spiel zu nehmen (z. B. Orte ist standardmäßig abgewählt). Kleidung: Stufe 1-2 noch angezogen / Unterwäsche. Ab Stufe 3: ganz nackt. Aftercare abgewählt = keine ruhigen Karten mehr.",
      "Solo aparecen las categorías que posees. Desmarca para excluir de la partida (p. ej. Lugares está desmarcado por defecto). Ropa: niveles 1-2 aún vestidos / ropa interior. Desde el nivel 3: sin ropa. Aftercare desmarcado = no más cartas tranquilas.");
  add("Accessoires","Accessories","Accessoires","Accesorios");
  add("Limites (à exclure)","Limits (to exclude)","Grenzen (ausschließen)","Límites (a excluir)");
  add("Coche ce que vous ne voulez pas voir ce soir.","Check what you don't want to see tonight.","Wähle, was ihr heute Abend nicht sehen wollt.","Marca lo que no queréis ver esta noche.");
  add("Durées","Durations","Dauer","Duraciones");
  add("Défis","Challenges","Aufgaben","Retos");
  add("Partie","Game","Spiel","Partida");
  add("Perso.","Custom","Eigene","Person.");
  add("Secondes","Seconds","Sekunden","Segundos");
  add("Minutes","Minutes","Minuten","Minutos");
  add("On commence déjà nus (même au niveau 1)","We start naked already (even at level 1)","Wir starten schon nackt (auch auf Stufe 1)","Empezamos ya desnudos (incluso en nivel 1)");
  add("Sinon tu pourras le signaler en jeu dès que les vêtements sont partis.","Otherwise you can flag it in-game once the clothes are off.","Sonst kannst du es im Spiel angeben, sobald die Kleidung weg ist.","Si no, podrás indicarlo en el juego cuando la ropa haya desaparecido.");
  add("Lancer la partie","Start the game","Spiel starten","Empezar la partida");
  add("Lancer","Start","Starten","Empezar");

  // ---------- Accessoires / limites / packs ----------
  add("Lubrifiant","Lube","Gleitgel","Lubricante");
  add("Sextoy","Sex toy","Sextoy","Juguete");
  add("Menottes","Handcuffs","Handschellen","Esposas");
  add("Bandeau","Blindfold","Augenbinde","Antifaz");
  add("Plumes","Feathers","Federn","Plumas");
  add("Bougie","Candle","Kerze","Vela");
  add("Glaçons","Ice cubes","Eiswürfel","Hielo");
  add("Huile","Oil","Öl","Aceite");
  add("Fouet","Whip","Peitsche","Látigo");
  add("Pinces","Clamps","Klammern","Pinzas");
  add("Baillon","Gag","Knebel","Mordaza");
  add("Collier","Collar","Halsband","Collar");
  add("Plug","Plug","Plug","Plug");
  add("Cockring","Cock ring","Cockring","Anillo");
  add("Harnais","Harness","Harness","Arnés");
  add("Sangles","Straps","Riemen","Correas");
  add("Miel / crème","Honey / cream","Honig / Sahne","Miel / nata");
  add("Musique","Music","Musik","Música");
  add("Couverture","Blanket","Decke","Manta");
  add("Pas d'anal","No anal","Kein Anal","Sin anal");
  add("Pas de fessées","No spanking","Kein Klapsen","Sin azotes");
  add("Pas de main à la gorge","No hand on the throat","Keine Hand am Hals","Sin mano en la garganta");
  add("Pas de contrôle d'orgasme","No orgasm control","Keine Orgasmuskontrolle","Sin control del orgasmo");
  add("Classique","Classic","Klassisch","Clásico");
  add("Aftercare","Aftercare","Aftercare","Aftercare");
  add("Question + Acte","Question + Act","Frage + Akt","Pregunta + Acto");
  add("Photo / Video","Photo / Video","Foto / Video","Foto / Vídeo");
  add("Lieux (canapé, douche)","Places (sofa, shower)","Orte (Sofa, Dusche)","Lugares (sofá, ducha)");
  add("Lieux","Places","Orte","Lugares");

  // ---------- Boutique ----------
  add("Contenu additionnel","Additional content","Zusätzliche Inhalte","Contenido adicional");
  add("Niveaux 1-3 et Aftercare toujours gratuits, jamais payants (tu peux quand même décocher Aftercare des types de défis affichés si tu ne veux pas en voir). Le reste se débloque pack par pack (achat réel à brancher ensuite — bouton de test ci-dessus en attendant). Les packs thématiques (Sensoriel, BDSM avancé, Photo...) s'appliquent à tous les niveaux possédés, pas un seul en particulier.",
      "Levels 1-3 and Aftercare are always free. The rest unlocks pack by pack. Theme packs (Sensory, Advanced BDSM, Photo…) apply to every level you own.",
      "Stufe 1-3 und Aftercare sind immer kostenlos. Der Rest wird Pack für Pack freigeschaltet. Themenpacks (Sinnlich, BDSM, Foto…) gelten für alle Stufen, die du besitzt.",
      "Niveles 1-3 y Aftercare siempre gratis. El resto se desbloquea pack a pack. Los packs temáticos (Sensorial, BDSM avanzado, Foto…) se aplican a todos los niveles que posees.");
  add("Niveaux","Levels","Stufen","Niveles");
  add("Packs à thème","Theme packs","Themenpacks","Packs temáticos");
  add("Débloqué","Unlocked","Freigeschaltet","Desbloqueado");
  add("Débloquer","Unlock","Freischalten","Desbloquear");
  add("Tout débloquer","Unlock everything","Alles freischalten","Desbloquear todo");
  add("🎁 Mégapack — Tout débloquer","🎁 Megapack — Unlock everything","🎁 Megapack — Alles freischalten","🎁 Megapack — Desbloquear todo");
  add("👁 Aperçu","👁 Preview","👁 Vorschau","👁 Vista previa");
  add("Aperçu indisponible.","Preview unavailable.","Vorschau nicht verfügbar.","Vista previa no disponible.");
  add("↻ Restaurer mes achats","↻ Restore purchases","↻ Käufe wiederherstellen","↻ Restaurar compras");
  add("↺ Réinitialiser les achats-tests","↺ Reset test purchases","↺ Testkäufe zurücksetzen","↺ Restablecer compras de prueba");
  add("Voir mon code (à copier avant de changer d'appareil)","Show my code (copy it before switching device)","Meinen Code anzeigen (vor Gerätewechsel kopieren)","Ver mi código (cópialo antes de cambiar de dispositivo)");
  add("Colle ton code de sauvegarde pour retrouver tes packs sur un autre navigateur :","Paste your backup code to recover your packs on another browser:","Füge deinen Sicherungscode ein, um deine Packs in einem anderen Browser wiederzufinden:","Pega tu código de copia de seguridad para recuperar tus packs en otro navegador:");
  add("sensoriel","sensory","sinnlich","sensorial");
  add("ambiance","ambience","Ambiente","ambiente");
  add("jeux legers","light games","leichte Spiele","juegos ligeros");
  add("bdsm avance","advanced bdsm","BDSM fortgeschritten","bdsm avanzado");
  add("photo video","photo video","Foto Video","foto vídeo");
  add("qacte","question + act","Frage + Akt","pregunta + acto");
  add("exterieur","places","Orte","lugares");
  add("Achat confirmé !","Purchase confirmed!","Kauf bestätigt!","¡Compra confirmada!");
  add("Pack débloqué (test local)","Pack unlocked (local test)","Pack freigeschaltet (lokaler Test)","Pack desbloqueado (prueba local)");
  add("Achats-tests réinitialisés","Test purchases reset","Testkäufe zurückgesetzt","Compras de prueba restablecidas");
  add("Achats restaurés depuis ton compte Apple.","Purchases restored from your Apple account.","Käufe aus deinem Apple-Konto wiederhergestellt.","Compras restauradas desde tu cuenta de Apple.");
  add("Échec de la restauration — réessaie","Restore failed — try again","Wiederherstellung fehlgeschlagen — nochmal versuchen","Error al restaurar — inténtalo de nuevo");
  add("Code invalide.","Invalid code.","Ungültiger Code.","Código no válido.");
  add("Achats restaurés.","Purchases restored.","Käufe wiederhergestellt.","Compras restauradas.");
  add("Ton code est affiché ci-dessus — copie-le avant de changer d'appareil.","Your code is shown above — copy it before switching device.","Dein Code steht oben — kopiere ihn vor dem Gerätewechsel.","Tu código aparece arriba — cópialo antes de cambiar de dispositivo.");

  // ---------- Écran de jeu ----------
  add("On est nus","We're naked","Wir sind nackt","Estamos desnudos");
  add("On est nus ✓","We're naked ✓","Wir sind nackt ✓","Estamos desnudos ✓");
  add("On est nus ?","Naked yet?","Schon nackt?","¿Ya desnudos?");
  add("Prêt ?","Ready?","Bereit?","¿Listos?");
  add("Nouveau défi","New challenge","Neue Aufgabe","Nuevo reto");
  add("Révéler le défi","Reveal the challenge","Aufgabe aufdecken","Revelar el reto");
  add("Cacher (j'ai lu)","Hide (I've read it)","Verbergen (gelesen)","Ocultar (ya lo leí)");
  add("+30 s · 4 pts","+30 s · 4 pts","+30 s · 4 Pkt.","+30 s · 4 pts");
  add("Réussi","Done","Geschafft","Conseguido");
  add("Échec","Failed","Nicht geschafft","Fallado");
  add("Passer","Skip","Überspringen","Pasar");
  add("Safe word · ROUGE","Safe word · RED","Safeword · ROT","Palabra de seguridad · ROJO");
  add("Ajouter aux favoris","Add to favorites","Zu Favoriten hinzufügen","Añadir a favoritos");
  add("Niveau moins","Level down","Stufe runter","Nivel menos");
  add("Niveau plus","Level up","Stufe hoch","Nivel más");
  add("Pendant la partie","During the game","Während des Spiels","Durante la partida");
  add("⏱ +2 min","⏱ +2 min","⏱ +2 Min.","⏱ +2 min");
  add("🔊 Sons","🔊 Sounds","🔊 Töne","🔊 Sonidos");
  add("🔇 Sons coupés","🔇 Muted","🔇 Stumm","🔇 Silenciado");
  add("⭐ Mes favoris","⭐ My favorites","⭐ Meine Favoriten","⭐ Mis favoritos");
  add("Pause","Pause","Pause","Pausa");
  add("Reprise","Resumed","Weiter","Reanudar");
  add("🎡 Roue","🎡 Wheel","🎡 Rad","🎡 Ruleta");
  add("Terminer la partie","End the game","Spiel beenden","Terminar la partida");
  add("Mode, filtre, historique","Mode, filter, history","Modus, Filter, Verlauf","Modo, filtro, historial");
  add("Filtre","Filter","Filter","Filtro");
  add("Tous","All","Alle","Todos");
  add("Sensuel","Sensual","Sinnlich","Sensual");
  add("Oral","Oral","Oral","Oral");
  add("Domination","Domination","Dominanz","Dominación");
  add("Q+Acte","Q+Act","F+Akt","P+Acto");
  add("Q + Acte","Q + Act","F + Akt","P + Acto");
  add("Photo","Photo","Foto","Foto");
  add("Historique","History","Verlauf","Historial");
  add("Aucun défi pour l'instant","No challenges yet","Noch keine Aufgaben","Aún no hay retos");
  add("Reset de la partie","Reset the game","Spiel zurücksetzen","Reiniciar la partida");
  add("ROUE","WHEEL","RAD","RULETA");
  add("Touche pour lancer","Tap to spin","Tippen zum Drehen","Toca para girar");
  add("Approche","Warm-up","Annäherung","Acercamiento");
  add("Dénudé","Undressed","Entblößt","Desnudo");
  add("Vague","Wave","Welle","Ola");
  add("Pic","Peak","Höhepunkt","Pico");
  add("Retour","Come-down","Rückkehr","Vuelta");
  add("Relancer · 8 pts","Redraw · 8 pts","Neu ziehen · 8 Pkt.","Volver a sacar · 8 pts");
  add("Ne pas brûler · 5 pts","Don't burn · 5 pts","Nicht verbrennen · 5 Pkt.","No quemar · 5 pts");
  add("Défi perso · 10 pts","Custom challenge · 10 pts","Eigene Aufgabe · 10 Pkt.","Reto personalizado · 10 pts");
  add("Aperçu · 6 pts","Peek · 6 pts","Vorschau · 6 Pkt.","Vistazo · 6 pts");
  add("On joue celle-là","Let's play this one","Die spielen wir","Jugamos esta");
  add("Écris le défi. Ensuite tu choisis pour qui.","Write the challenge. Then choose who it's for.","Schreib die Aufgabe. Dann wählst du, für wen.","Escribe el reto. Luego eliges para quién.");
  add("Ex. : masse-moi 1 minute sans parler.","E.g.: massage me for 1 minute without talking.","Z. B.: massiere mich 1 Minute ohne zu reden.","Ej.: dame un masaje 1 minuto sin hablar.");
  add("Pour moi","For me","Für mich","Para mí");
  add("Pour l'autre","For my partner","Für den anderen","Para el otro");
  add("Temps écoulé","Time's up","Zeit ist um","Se acabó el tiempo");
  add("+30 secondes","+30 seconds","+30 Sekunden","+30 segundos");
  add("+2 min","+2 min","+2 Min.","+2 min");
  add("Nouvelles cartes","New cards","Neue Karten","Cartas nuevas");
  add("Pas de cartes à relancer","No cards to redraw","Keine Karten zum Neuziehen","No hay cartas que volver a sacar");
  add("Protection déjà active : la carte ouverte ne brûlera pas","Protection already active: the open card won't burn","Schutz schon aktiv: die offene Karte verbrennt nicht","Protección ya activa: la carta abierta no se quemará");
  add("La carte déjà ouverte restera : elle ne brûlera pas","The open card will stay: it won't burn","Die offene Karte bleibt: sie verbrennt nicht","La carta abierta se queda: no se quemará");
  add("Carte précédente sauvée, elle ne brûle pas","Previous card saved, it doesn't burn","Vorherige Karte gerettet, sie verbrennt nicht","Carta anterior salvada, no se quema");
  add("Aperçu · -6 pts · cette carte ne brûle pas l'autre","Peek · -6 pts · this card doesn't burn the other","Vorschau · -6 Pkt. · diese Karte verbrennt die andere nicht","Vistazo · -6 pts · esta carta no quema la otra");
  add("Il faut 6 points (Réussi = +3)","You need 6 points (Done = +3)","Du brauchst 6 Punkte (Geschafft = +3)","Hacen falta 6 puntos (Conseguido = +3)");
  add("Il faut 10 points pour un défi perso","You need 10 points for a custom challenge","Du brauchst 10 Punkte für eine eigene Aufgabe","Hacen falta 10 puntos para un reto personalizado");
  add("Écris le défi d'abord","Write the challenge first","Schreib zuerst die Aufgabe","Escribe el reto primero");
  add("Pas de défi en cours","No challenge in progress","Keine laufende Aufgabe","No hay reto en curso");
  add("Choisis d abord une carte","Pick a card first","Wähle zuerst eine Karte","Elige una carta primero");
  add("Plus aucun défi","No more challenges","Keine Aufgaben mehr","No quedan retos");
  add("Plus de défis","No more challenges","Keine Aufgaben mehr","No quedan retos");
  add("Change de niveau, de pack ou de filtre.","Change level, pack or filter.","Wechsle Stufe, Pack oder Filter.","Cambia de nivel, pack o filtro.");
  add("Aucun défi disponible ici — essaie d'autres accessoires/limites, ou débloque un pack.","No challenge available here — try other accessories/limits, or unlock a pack.","Hier keine Aufgabe verfügbar — probiere andere Accessoires/Grenzen oder schalte ein Pack frei.","No hay retos disponibles aquí — prueba otros accesorios/límites o desbloquea un pack.");
  add("Passe — suivante plus douce","Skipped — next one gentler","Übersprungen — nächste sanfter","Pasado — la siguiente más suave");
  add("Deux défis intenses d'affilée — place à une carte plus calme (aftercare) 💗","Two intense challenges in a row — time for a calmer card (aftercare) 💗","Zwei intensive Aufgaben hintereinander — Zeit für eine ruhigere Karte (Aftercare) 💗","Dos retos intensos seguidos — toca una carta más tranquila (aftercare) 💗");
  add("Rouge — une carte calme ensuite","Red — a calm card next","Rot — danach eine ruhige Karte","Rojo — a continuación una carta tranquila");
  add("Niveau 5 déjà atteint","Level 5 already reached","Stufe 5 schon erreicht","Nivel 5 ya alcanzado");
  add("Déjà au niveau 1","Already at level 1","Schon auf Stufe 1","Ya en el nivel 1");
  add("Son activé","Sound on","Ton an","Sonido activado");
  add("Son coupé","Sound off","Ton aus","Sonido desactivado");
  add("Retiré des favoris","Removed from favorites","Aus Favoriten entfernt","Quitado de favoritos");
  add("Ajouté aux favoris ⭐","Added to favorites ⭐","Zu Favoriten hinzugefügt ⭐","Añadido a favoritos ⭐");
  add("Aucun favori pour l'instant — clique sur ☆ pendant un défi pour le garder.","No favorites yet — tap ☆ during a challenge to keep it.","Noch keine Favoriten — tippe ☆ während einer Aufgabe, um sie zu behalten.","Aún no hay favoritos — toca ☆ durante un reto para guardarlo.");
  add("Erreur de chargement — regarde la console (F12) pour le détail.","Loading error — check the console (F12) for details.","Ladefehler — Details in der Konsole (F12).","Error de carga — mira la consola (F12) para más detalles.");
  add("Aucun défi chargé — vérifie que le dossier packs/ est accessible.","No challenges loaded — check that the packs/ folder is accessible.","Keine Aufgaben geladen — prüfe, ob der Ordner packs/ erreichbar ist.","No se cargó ningún reto — comprueba que la carpeta packs/ es accesible.");
  add("Vidéo : un de vous tient le téléphone. Les deux sont d'accord. Tu filmes sans couper. Cadre ce qui est décrit (visage seulement si le texte le dit).","Video: one of you holds the phone. Both agree. You film without cutting. Frame what is described (face only if the text says so).","Video: einer hält das Handy. Beide sind einverstanden. Du filmst ohne Schnitt. Zeige nur, was beschrieben ist (Gesicht nur, wenn es im Text steht).","Vídeo: uno sostiene el móvil. Los dos están de acuerdo. Grabas sin cortar. Encuadra lo descrito (la cara solo si el texto lo dice).");
  add("Photo : un cliché, les deux sont d'accord. Cadre uniquement ce qui est décrit, pas tout le corps.","Photo: one shot, both agree. Frame only what is described, not the whole body.","Foto: ein Bild, beide sind einverstanden. Zeige nur, was beschrieben ist, nicht den ganzen Körper.","Foto: una sola foto, los dos de acuerdo. Encuadra solo lo descrito, no todo el cuerpo.");
  add("Tout s'arrête un moment. Couverture ou bras autour de {{partner}}. Propose de l'eau. Une seule question : « tu veux rester là, ou reprendre plus tard ? » Pas d'ordre, pas d'acte.","Everything stops for a moment. A blanket or your arms around {{partner}}. Offer some water. One question only: “do you want to stay here, or pick up later?” No orders, no act.","Alles hält kurz an. Decke oder Arme um {{partner}}. Biete Wasser an. Nur eine Frage: „Willst du hier bleiben oder später weitermachen?“ Kein Befehl, kein Akt.","Todo se detiene un momento. Manta o brazos alrededor de {{partner}}. Ofrece agua. Una sola pregunta: «¿quieres quedarte aquí o seguir más tarde?». Sin órdenes, sin acto.");

  // ---------- Modales ----------
  add("Contenu réservé aux adultes","Adults only","Nur für Erwachsene","Contenido solo para adultos");
  add("Cette application contient des thèmes et du contenu à caractère sexuel destinés exclusivement aux adultes consentants. En continuant, vous certifiez avoir","This app contains sexual themes and content intended exclusively for consenting adults. By continuing, you confirm you are","Diese App enthält sexuelle Themen und Inhalte, die ausschließlich für einvernehmlich handelnde Erwachsene bestimmt sind. Indem du fortfährst, bestätigst du, dass du","Esta aplicación contiene temas y contenido sexual destinados exclusivamente a adultos que consienten. Al continuar, certificas que tienes");
  add("18 ans ou plus","18 or older","18 Jahre oder älter bist","18 años o más");
  add("J'ai 18 ans ou plus","I'm 18 or older","Ich bin 18 oder älter","Tengo 18 años o más");
  add("J'ai moins de 18 ans","I'm under 18","Ich bin unter 18","Tengo menos de 18 años");
  add("Accès non autorisé","Access denied","Zugriff verweigert","Acceso no autorizado");
  add("Cette application est réservée aux personnes majeures (18 ans et plus). Merci de fermer cette page.","This app is for adults only (18+). Please close this page.","Diese App ist nur für Erwachsene (18+). Bitte schließe diese Seite.","Esta aplicación es solo para mayores de edad (18+). Por favor, cierra esta página.");
  add("Bienvenue 👋","Welcome 👋","Willkommen 👋","Bienvenidos 👋");
  add("Un jeu à défis progressifs pour couples, en 5 niveaux d'intensité. Choisissez vos joueurs, vos accessoires et votre niveau de départ, puis lancez.","A game of progressive challenges for couples, in 5 intensity levels. Choose your players, accessories and starting level, then start.","Ein Spiel mit steigenden Aufgaben für Paare, in 5 Intensitätsstufen. Wählt Spieler, Accessoires und Startstufe, dann geht's los.","Un juego de retos progresivos para parejas, en 5 niveles de intensidad. Elegid jugadores, accesorios y nivel inicial, y empezad.");
  add("Les niveaux 1 à 3 sont gratuits. Le reste (niveaux 4-5, packs à thème) se débloque dans l'onglet Boutique 🛍️ de l'accueil.","Levels 1 to 3 are free. The rest (levels 4-5, theme packs) unlocks in the Shop 🛍️ tab on the home screen.","Stufe 1 bis 3 sind kostenlos. Der Rest (Stufe 4-5, Themenpacks) wird im Shop-Tab 🛍️ auf dem Startbildschirm freigeschaltet.","Los niveles 1 a 3 son gratis. El resto (niveles 4-5, packs temáticos) se desbloquea en la pestaña Tienda 🛍️ del inicio.");
  add("C'est parti","Let's go","Los geht's","¡Vamos!");
  add("Partie terminée","Game over","Spiel beendet","Partida terminada");
  add("Continuer à discuter","Keep talking","Weiter reden","Seguir hablando");
  add("Retour au menu","Back to menu","Zurück zum Menü","Volver al menú");
  add("Défis réussis","Challenges done","Geschaffte Aufgaben","Retos conseguidos");
  add("Défis ratés","Challenges failed","Nicht geschaffte Aufgaben","Retos fallados");
  add("Défis passés","Challenges skipped","Übersprungene Aufgaben","Retos pasados");
  add("Niveau max atteint","Highest level reached","Höchste Stufe","Nivel máximo alcanzado");
  add("Parties jouées au total","Total games played","Gespielte Spiele insgesamt","Partidas jugadas en total");
  add("Niveau 3","Level 3","Stufe 3","Nivel 3");
  add("À partir d'ici, on est à poil.","From here on, clothes come off.","Ab hier seid ihr nackt.","A partir de aquí, sin ropa.");
  add("Plus de défis avec des habits.","No more challenges with clothes on.","Keine Aufgaben mehr mit Kleidung.","No más retos con ropa.");
  add("C'est noté","Got it","Verstanden","Entendido");
  add("Niveau 5 · Acte complet","Level 5 · Full act","Stufe 5 · Voller Akt","Nivel 5 · Acto completo");
  add("Le palier le plus intense. Rappel : le safe word et vos limites cochées restent actifs à tout moment.","The most intense stage. Reminder: the safe word and your checked limits stay active at all times.","Die intensivste Stufe. Zur Erinnerung: Safeword und eure Grenzen gelten jederzeit.","La etapa más intensa. Recordatorio: la palabra de seguridad y vuestros límites siguen activos en todo momento.");
  add("On y va à votre rythme.","Go at your own pace.","Geht in eurem Tempo.","Vamos a vuestro ritmo.");
  add("On est prêts","We're ready","Wir sind bereit","Estamos listos");

  // ---------- Motifs dynamiques ----------
  const P = [
    [/^Niv\. (\d+)(.*)$/, (m,l,T)=>({en:`Lvl ${m[1]}${m[2]}`,de:`Stufe ${m[1]}${m[2]}`,es:`Niv. ${m[1]}${m[2]}`})[l]],
    [/^Niveau (\d+) · (.+)$/, (m,l,T)=>({en:`Level ${m[1]} · ${T(m[2])}`,de:`Stufe ${m[1]} · ${T(m[2])}`,es:`Nivel ${m[1]} · ${T(m[2])}`})[l]],
    [/^Niveau (\d+) \(auto\)$/, (m,l)=>({en:`Level ${m[1]} (auto)`,de:`Stufe ${m[1]} (auto)`,es:`Nivel ${m[1]} (auto)`})[l]],
    [/^Niveau (\d+) verrouillé — débloque-le.*$/, (m,l)=>({en:`Level ${m[1]} locked — unlock it in the shop.`,de:`Stufe ${m[1]} gesperrt — im Shop freischalten.`,es:`Nivel ${m[1]} bloqueado — desbloquéalo en la tienda.`})[l]],
    [/^Niveau (\d+)$/, (m,l)=>({en:`Level ${m[1]}`,de:`Stufe ${m[1]}`,es:`Nivel ${m[1]}`})[l]],
    [/^Niveau (\d+) \/ 5 · (.+)$/, (m,l,T)=>({en:`Level ${m[1]} / 5 · ${m[2]}`,de:`Stufe ${m[1]} / 5 · ${m[2]}`,es:`Nivel ${m[1]} / 5 · ${m[2]}`})[l]],
    [/^(.+) joue$/, (m,l)=>({en:`${m[1]}'s turn`,de:`${m[1]} ist dran`,es:`Juega ${m[1]}`})[l]],
    [/^(\d+) défis? disponibles? avec ces réglages$/, (m,l)=>({en:`${m[1]} challenge${m[1]==="1"?"":"s"} available with these settings`,de:`${m[1]} Aufgabe${m[1]==="1"?"":"n"} mit diesen Einstellungen verfügbar`,es:`${m[1]} reto${m[1]==="1"?"":"s"} disponible${m[1]==="1"?"":"s"} con estos ajustes`})[l]],
    [/^⚠️ Aucun défi avec ces réglages au niveau (\d+).*$/, (m,l)=>({en:`⚠️ No challenge with these settings at level ${m[1]} — add accessories or change level`,de:`⚠️ Keine Aufgabe mit diesen Einstellungen auf Stufe ${m[1]} — mehr Accessoires wählen oder Stufe ändern`,es:`⚠️ Ningún reto con estos ajustes en el nivel ${m[1]} — añade accesorios o cambia de nivel`})[l]],
    [/^(\d+) défis$/, (m,l)=>({en:`${m[1]} challenges`,de:`${m[1]} Aufgaben`,es:`${m[1]} retos`})[l]],
    [/^(\d+) packs? · (\d+) accessoires? · (\d+) limites? · défi (.+) · partie (\d+) min$/, (m,l)=>({en:`${m[1]} pack${m[1]==="1"?"":"s"} · ${m[2]} accessor${m[2]==="1"?"y":"ies"} · ${m[3]} limit${m[3]==="1"?"":"s"} · challenge ${m[4]} · game ${m[5]} min`,de:`${m[1]} Pack${m[1]==="1"?"":"s"} · ${m[2]} Accessoire${m[2]==="1"?"":"s"} · ${m[3]} Grenze${m[3]==="1"?"":"n"} · Aufgabe ${m[4]} · Spiel ${m[5]} Min.`,es:`${m[1]} pack${m[1]==="1"?"":"s"} · ${m[2]} accesorio${m[2]==="1"?"":"s"} · ${m[3]} límite${m[3]==="1"?"":"s"} · reto ${m[4]} · partida ${m[5]} min`})[l]],
    [/^Acte (.+)$/, (m,l,T)=>({en:`Act: ${T(m[1])}`,de:`Akt: ${T(m[1])}`,es:`Acto: ${T(m[1])}`})[l]],
    [/^Partie lancée · (.+)$/, (m,l,T)=>({en:`Game started · ${T(m[1])}`,de:`Spiel gestartet · ${T(m[1])}`,es:`Partida iniciada · ${T(m[1])}`})[l]],
    [/^Relais ! (.+) prend le relais$/, (m,l)=>({en:`Relay! ${m[1]} takes over`,de:`Staffel! ${m[1]} übernimmt`,es:`¡Relevo! ${m[1]} toma el relevo`})[l]],
    [/^Filtre : (.+)$/, (m,l,T)=>({en:`Filter: ${T(m[1])}`,de:`Filter: ${T(m[1])}`,es:`Filtro: ${T(m[1])}`})[l]],
    [/^Mode (.+)$/, (m,l,T)=>({en:`Mode ${T(m[1])}`,de:`Modus ${T(m[1])}`,es:`Modo ${T(m[1])}`})[l]],
    [/^Défi pour (.+)$/, (m,l)=>({en:`Challenge for ${m[1]==="toi"?"you":m[1]}`,de:`Aufgabe für ${m[1]==="toi"?"dich":m[1]}`,es:`Reto para ${m[1]==="toi"?"ti":m[1]}`})[l]],
    [/^\+3 pour (.+)$/, (m,l)=>({en:`+3 for ${m[1]}`,de:`+3 für ${m[1]}`,es:`+3 para ${m[1]}`})[l]],
    [/^-1 pour (.+)$/, (m,l)=>({en:`-1 for ${m[1]}`,de:`-1 für ${m[1]}`,es:`-1 para ${m[1]}`})[l]],
    [/^\+3 \/ \+1 marathon$/, (m,l)=>({en:"+3 / +1 marathon",de:"+3 / +1 Marathon",es:"+3 / +1 maratón"})[l]],
    [/^Pas assez de points \((\d+) pour (.+)\)$/, (m,l,T)=>({en:`Not enough points (${m[1]} for ${T(m[2])})`,de:`Nicht genug Punkte (${m[1]} für ${T(m[2])})`,es:`No hay puntos suficientes (${m[1]} para ${T(m[2])})`})[l]],
    [/^(.+) lit le défi\. (.+) détourne les yeux\.$/, (m,l)=>({en:`${m[1]} reads the challenge. ${m[2]} looks away.`,de:`${m[1]} liest die Aufgabe. ${m[2]} schaut weg.`,es:`${m[1]} lee el reto. ${m[2]} aparta la mirada.`})[l]],
    [/^Défi caché\. Fais-le sans le dire\. (.+) essaie de deviner\.$/, (m,l)=>({en:`Hidden challenge. Do it without saying it. ${m[1]} tries to guess.`,de:`Verdeckte Aufgabe. Mach es, ohne es zu sagen. ${m[1]} rät.`,es:`Reto oculto. Hazlo sin decirlo. ${m[1]} intenta adivinar.`})[l]],
    [/^(.+) a écrit un défi pour soi : (.+)\n(.+) s'assure que c'est fait\.$/, (m,l)=>({en:`${m[1]} wrote a challenge for themselves: ${m[2]}\n${m[3]} makes sure it gets done.`,de:`${m[1]} hat sich eine Aufgabe geschrieben: ${m[2]}\n${m[3]} passt auf, dass sie erledigt wird.`,es:`${m[1]} escribió un reto para sí: ${m[2]}\n${m[3]} se asegura de que se cumpla.`})[l]],
    [/^(.+) a écrit un défi pour (.+) : (.+)\n(.+) accompagne, (.+) exécute\.$/, (m,l)=>({en:`${m[1]} wrote a challenge for ${m[2]}: ${m[3]}\n${m[4]} assists, ${m[5]} performs.`,de:`${m[1]} hat eine Aufgabe für ${m[2]} geschrieben: ${m[3]}\n${m[4]} begleitet, ${m[5]} führt aus.`,es:`${m[1]} escribió un reto para ${m[2]}: ${m[3]}\n${m[4]} acompaña, ${m[5]} ejecuta.`})[l]],
    [/^(Plus de défis|Défis) avec habits · acte (.+)$/, (m,l,T)=>({en:`${m[1]==="Défis"?"Challenges with clothes":"No more challenges with clothes"} · act ${T(m[2])}`,de:`${m[1]==="Défis"?"Aufgaben mit Kleidung":"Keine Aufgaben mehr mit Kleidung"} · Akt ${T(m[2])}`,es:`${m[1]==="Défis"?"Retos con ropa":"No más retos con ropa"} · acto ${T(m[2])}`})[l]],
    [/^☕ Aftercare \((\d+) défis\) — toujours inclus, jamais payant$/, (m,l)=>({en:`☕ Aftercare (${m[1]} challenges) — always included, never paid`,de:`☕ Aftercare (${m[1]} Aufgaben) — immer dabei, nie kostenpflichtig`,es:`☕ Aftercare (${m[1]} retos) — siempre incluido, nunca de pago`})[l]],
    [/^(\d+) défis d'un coup — les 9 packs payants réunis$/, (m,l)=>({en:`${m[1]} challenges at once — all 9 paid packs together`,de:`${m[1]} Aufgaben auf einmal — alle 9 kostenpflichtigen Packs`,es:`${m[1]} retos de golpe — los 9 packs de pago juntos`})[l]],
    [/^Échec : (.*)$/, (m,l)=>({en:`Failed: ${m[1]}`,de:`Fehler: ${m[1]}`,es:`Error: ${m[1]}`})[l]],
    [/^(\d+) 🏆 record !$/, (m,l)=>({en:`${m[1]} 🏆 record!`,de:`${m[1]} 🏆 Rekord!`,es:`${m[1]} 🏆 ¡récord!`})[l]],
  ];

  let lang = "fr";
  function T(s){
    if(lang==="fr" || typeof s!=="string") return s;
    const key = s.trim();
    if(!key) return s;
    const e = D[key];
    if(e && e[lang]) return s.replace(key, e[lang]);
    for(const [re,fn] of P){
      const m = key.match(re);
      if(m){ try{ const r = fn(m, lang, T); if(r) return s.replace(key, r); }catch(err){} }
    }
    return s;
  }

  // ---------- Traduction du DOM ----------
  const orig = new WeakMap();   // nœud texte → texte FR d'origine
  const origAttr = new WeakMap(); // élément → {attr: valeur FR}
  const ATTRS = ["placeholder","title","aria-label"];
  let muting = false;
  function normalizeWS(s){ return s.replace(/\s+/g," "); }
  function txNode(n){
    if(n.nodeType!==3) return;
    const p = n.parentNode; if(!p) return;
    const tag = p.nodeName;
    if(tag==="SCRIPT"||tag==="STYLE"||tag==="TEXTAREA") return;
    if(!orig.has(n)) orig.set(n, n.nodeValue);
    const src = orig.get(n);
    const out = lang==="fr" ? src : T(/\n/.test(src) ? normalizeWS(src) : src);
    if(out!==n.nodeValue){ muting=true; n.nodeValue=out; muting=false; }
  }
  function txAttrs(el){
    if(el.nodeType!==1) return;
    ATTRS.forEach(a=>{
      if(!el.hasAttribute(a)) return;
      let store = origAttr.get(el); if(!store){ store={}; origAttr.set(el,store); }
      if(!(a in store)) store[a]=el.getAttribute(a);
      const out = lang==="fr" ? store[a] : T(store[a]);
      if(out!==el.getAttribute(a)){ muting=true; el.setAttribute(a,out); muting=false; }
    });
  }
  function walk(root){
    if(!root) return;
    if(root.nodeType===3){ txNode(root); return; }
    if(root.nodeType!==1 && root.nodeType!==9 && root.nodeType!==11) return;
    if(root.nodeType===1) txAttrs(root);
    const it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT);
    let n;
    while((n=it.nextNode())){ if(n.nodeType===3) txNode(n); else txAttrs(n); }
  }
  const mo = new MutationObserver(muts=>{
    if(muting || lang==="fr") return;
    muts.forEach(m=>{
      if(m.type==="characterData"){ orig.set(m.target, m.target.nodeValue); txNode(m.target); }
      else if(m.type==="childList"){ m.addedNodes.forEach(n=>walk(n)); }
      else if(m.type==="attributes"){ const st=origAttr.get(m.target); if(st){ st[m.attributeName]=m.target.getAttribute(m.attributeName); } txAttrs(m.target); }
    });
  });
  function setLang(l){
    lang = (l && D["Jouer"] && ["en","de","es"].includes(l)) ? l : "fr";
    document.documentElement.setAttribute("lang", lang);
    walk(document.body);
    if(lang!=="fr") mo.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTRS});
    else mo.disconnect();
  }
  window.I18N = { T, setLang, get lang(){ return lang; }, dict:D };
  window.T = T;
})();
