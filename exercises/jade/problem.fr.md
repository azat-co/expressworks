Créez une application Express.js avec une page d’accueil rendue par le moteur
de templates Jade.

La page d’accueil devrait répondre à l’URL `/home`.

La vue devrait afficher la date courante en se servant de`toDateString`.

-----------------------------

## CONSEILS

La fichier template Jade `index.jade` est déjà fourni :

```jade
h1 Hello World
p Today is #{date}.
```

Voici comment préciser un dossier de templates dans une appli Express.js
classique :

```js
app.set('views', path.join(__dirname, 'templates'))
```

Toutefois, pour utiliser notre `index.jade`, le chemin de ces fichiers vous
sera fourni dans `process.argv[3]`.  Naturellement, vous pouvez aussi utiliser
votre propre fichier Jade !

Pour dire à Express.js quel moteur de templates à utiliser, appliquez la
ligne de configuration Express.js suivante :

```js
app.set('view engine', 'jade')
```

Au lieu du `res.end()` de « Bonjour, monde ! », nous utiliserons la fonction
`res.render()` avec un nom de template et des données de présentation :

```js
res.render('index', {date: new Date().toDateString()})
```

Nous utilisons `toDateString()` pour obtenir simplement une date lisible par
des humains dénuée de la partie horaire.

--------------------------------

## NOTE

Quand on crée des projets à partir de rien, on a besoin d’installer le module
`jade` avec npm.

Pour rappel, le numéro de port à utiliser vous sera fourni par {appname}
dans `process.argv[2]`.
