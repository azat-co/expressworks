Stylez votre HTML de l’exemple précédent à l’aide du middleware Stylus.

Votre solution devra écouter sur le numéro de port fourni par `process.argv[2]`.

Le chemin contenant les fichiers HTML et Stylus sera fourni par `process.argv[3]`
(c’est le même chemin pour les deux). Vous pouvez créer votre propre dossier,
auquel cas utilisez les contenus suivants :

Le fichier `main.styl` :

```stylus
p
  color red
```

Le fichier `index.html` :

```html
<html>
  <head>
    <title>expressworks</title>
    <link rel="stylesheet" type="text/css" href="/main.css"/>
  </head>
  <body>
    <p>I am red!</p>
  </body>
</html>
```

-----------------------------

## CONSEILS

Pour intégrer Stylus, on peut utiliser ce middleware :

```js
app.use(require('stylus').middleware(__dirname + '/public'));
```

Souvenez-vous que vous aurez aussi à servir des fichiers statiques.

## NOTE

Comme on part de zéro sur ce projet, il faudra installer Stylus au même
titre que les autres dépendances :

```sh
npm install stylus
```
