# Le Corps Du Z

Visualisation pédagogique en 3D du trajet du produit de contraste iodé au scanner : injection, phases d'acquisition, protocoles, split bolus, occlusions et coupe axiale.

Conception : Zyyan Ahamada.

## Mise en ligne (GitHub Pages)

1. Déposer tout le contenu de ce dossier à la racine d'un dépôt GitHub.
2. Settings > Pages > Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. Ouvrir l'adresse indiquée, puis sur iPhone : Safari > Partager > « Sur l'écran d'accueil ».

Après la première ouverture, l'appli fonctionne hors ligne.

Pour publier une mise à jour, remplacer les fichiers et changer `VERSION` dans `sw.js` (par exemple `corps-du-z-v2`), sinon les téléphones garderont l'ancienne version en cache.

## Crédits et licences

- Anatomie : [Z-Anatomy](https://www.z-anatomy.com), licence CC BY-SA 4.0. Les fichiers `model.*`, `arttree.*` et `axial.*` sont dérivés de cet atlas et restent sous la même licence.
- Rendu 3D : [three.js](https://threejs.org) r128, licence MIT.
- Modèle de rehaussement pédagogique, bâti sur des délais usuels : ce n'est pas une simulation pharmacocinétique ni un outil d'aide à la décision clinique.
