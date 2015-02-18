Créez un serveur Express.js qui traite les requêtes PUT `'/message/:id'`.

Par exemple :

```
PUT /message/526aa677a8ceb64569c9d4fb
```

Comme réponse à ces requêtes, renvoyez le hash SHA1 de la date courante plus
l’ID envoyé :

```js
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')
```

-----------------------------

## CONSEILS

Pour traiter des requêtes PUT utilisez :

```js
app.put('/path/:NAME', function(req, res){...});
```

Pour extraire des paramètres de chemin au sein des gestionnaires de
requête, utilisez :

```js
req.params.NAME
```
