En este ejercicio vamos a proveer archivos estáticos como por ejemplo documentos HTML.

Hay muchas formas de hacerlo, pero lo que queremos es aplicar middleware estático para devolver el archivo `index.html`.

Por favor, no uses NINGUNA ruta como `app.get`. SOLAMENTE vamos a usar métodos estáticos.

Tu solución debe escuchar el número de puerto provisto por `process.argv[2]`.

El archivo `index.html` es provisto y usable a través de la ruta dada en `process.argv[3]`.
Sin embargo, puedes usar tu propio archivo con este contenido (atención con los espacios en blanco):

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

## PISTAS

Así es como puedes invocar el middleware estático asumiendo que tu carpeta estática es `public` y se encuentra en la misma carpeta que el archivo principal del proyecto:
```js
app.use(express.static('public'))
```

Para este ejercicio {appname} proveerá la ruta en el argumento `process.argv[3]` de la CLI. Puedes crear una condición lógica OR para usar el valor de `process.argv[3]` o recurrir a la ruta completa hacia la carpeta `public`. La ruta es construida con `path.join()`:
```js
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
```

Videos: http://bit.ly/1jW1sBf.
