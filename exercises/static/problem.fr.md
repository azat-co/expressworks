Utilisez le middleware `static` pour servir le fichier `index.html` sans
avoir besoin de définir une route.

Votre solution devra écouter sur le numéro de port fourni dans `process.argv[2]`.

Le fichier `index.html` est fourni et utilisable dans le chemin indiqué par
`process.argv[3]`.  Toutefois, si vous souhaitez utiliser votre propre fichier,
utilisez le contenu suivant :

```html
<html>
  <head>
    <title>expressworks</title>
  </head>
  <body>
    <p>I am red!</p>
  </body>
</html>
```

-----------------------------

## CONSEILS

Voici comment « monter » le middleware `static` :

```js
app.use(express.static(path.join(__dirname, 'public')));
```

Pour cet exercice, {appname} vous fournira le chemin à utiliser :

```js
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
```
