Écrivez une route qui extrait des données de la *query string* dans le
gestionnaire de route pour des requêtes GET sur l’URL `'/search'`, par
exemple `?results=recent&include_tabs=true`, et renvoie ces mêmes données
à l’utilisateur au format JSON.

-----------------------------

## CONSEILS

Dans Express.js, pour extraire les données de la *query string*, on utilise :

```js
req.query.NAME
```

Pour renvoyer un objet au format JSON, on utilise :

```js
res.send(object)
```
