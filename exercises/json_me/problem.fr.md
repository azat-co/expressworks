Écrivez un serveur qui lit un fichier, le parse en tant que JSON et envoie
le contenu analysé à l’utilisateur.

Le numéro de port sera passé en `process.argv[2]`.  Le nom du fichier à lire
sera passé en `process.argv[3]`.

Répondez à l’aide de :

```js
res.json(object)
```

L’ensemble du traitement doit correspondre au chemin de ressource`'/books'`.


-----------------------------

## CONSEILS

Pour lire un fichier, on a le module noyau `fs`, par exemple :

```js
fs.readFile(filename, callback)
```

Tandis que pour analyser un contenu JSON, on utilise `JSON.parse` :

```js
object = JSON.parse(string)
```
