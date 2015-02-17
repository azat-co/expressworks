Écrivez une route (`'/form'`) qui traite les données d’un formulaire HTML
(`<form><input name="str"/></form>`) en renvoyant le texte du champ
`str` à l’envers.

-----------------------------

## CONSEILS

Pour gérer une requête POST, utilisez la méthode `post()` de la même
façon que vous utilisez `get()` jusqu’à présent :

```js
app.post('/path', function(req, res){...})
```

Express.js utilise des middlewares pour fournir des fonctions supplémentaires
à votre serveur web.

Pour faire simple, un middleware est une fonction invoquée par Express.js avant
votre gestionnaire de requête.

Les middlewares fournissent un large éventail de fonctionnalités telles que
la journalisation (logs), les fichiers statiques ou la gestion des erreurs.

Un middleware est ajouté en appelant `use()` sur l’application et en passant
le middleware en argument.

Pour analyser les corps de requête `x-www-form-urlencoded` que génèrent les
formulaires, Express.js peut recourir au middleware `urlencoded()` fourni par
le module `body-parser`.

```js
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
```

Vous pouvez en apprendre plus sur les middlewares Connect ici :

  https://github.com/senchalabs/connect#middleware

La documentation du module `body-parser` est disponible ici :

  https://github.com/expressjs/body-parser

Et voici comment inverser les caractères d’une `String` :

```js
req.body.str.split('').reverse().join('')
```

-----------------------------

## NOTE

Quand on crée un projet à partir de zéro, on aura besoin d’installer le
module `body-parser` avec npm, en tapant la commande suivante :

```sh
$ npm install body-parser
```

…dans votre terminal.

Pour rappel, le numéro de port à utiliser vous sera fourni par {appname}
dans `process.argv[2]`.
