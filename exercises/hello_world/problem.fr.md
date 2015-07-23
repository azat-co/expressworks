Créez une application Express.js qui affiche « Bonjour, monde ! » lorsqu’on
va sur `/home`.

Le numéro de port vous sera fourni par {appname} comme premier argument de la
ligne de commande, donc sur `process.argv[2]`.

-----------------------------

## CONSEILS

Voici comment nous pourrions créer une application Express.js qui écoute sur
le port 3000 et répond aux requêtes sur `'/'` :

```js
var express = require('express')
var app = express()
app.get('/', function(req, res) {
  res.end('Bonjour, monde !')
})
app.listen(3000)
```

Pensez à utiliser `process.argv[2]` plutôt qu’un numéro de port fixe :

```js
app.listen(process.argv[2])
```
