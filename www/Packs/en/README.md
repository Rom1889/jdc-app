# Traductions du contenu

Le français (`Packs/<pack>.json`) est la source de vérité (métadonnées : need, cat, pack, level, partner).
Une traduction = `Packs/<lang>/<pack>.json` : un tableau de même longueur et même ordre que le fichier
français, chaque entrée étant soit une chaîne (le texte traduit), soit `{"text": "..."}`.
Une entrée vide ou manquante → le texte français est conservé pour ce défi.
Les placeholders `{{partner}}`, `{{time}}`, `{{il}}`, `{{l}}`, `{{le_sexe}}`… doivent être conservés tels quels.
