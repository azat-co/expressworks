HTML sin estilos es algo aburrido así que en este ejercicio vamos a enseñarte como usar Stylus con Express sobre la marcha.

Estilizá el HTML del ejercicio "STATIC" usando el middleware Stylus.
Stylus <https://github.com/stylus/stylus> genera archivos .css sobre la marcha usando archivos `.styl` .

Tu solución debe eschuchar en el puerto provisto por `process.argv[2]` por peticiones `GET`, una de las cuales
será por `main.css`, que debe ser automáticamente generado por el middleware Stylus.
`index.html` y `main.styl` pueden ser encontrados en `process.argv[3]` (están en el mismo directorio).

También si lo deseas puedes crear tu propia carpeta y usar estos:

El archivo `main.styl`:

```stylus
p
  color red
```

El archivo `index.html`:

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

Vas a querer incorporar un poco del middleware Stylus usando `app.use()` otra vez.
Se parecerá a algo como esto:

```js
app.use(require('stylus').middleware('/ruta/hacia/carpeta'))
```

Pista: Puedes utilizar `__dirname` para obtener una ruta absoluta al archivo que se está ejecutando en el momento.

La ruta a la carpeta puede no ser solamente una ruta absoluta, también puede ser una relativa:

```js
app.use(require('stylus').middleware('public'))
```

Además de producir en el ejercicio "STATIC", también debes entregar archivos estáticos.
No olvides que el middleware es ejecutado en el orden que `app.use` es invocado!

## NOTA

Para tus propios proyectos, Stylus debe ser instalado como cualquier otra dependencia:

```sh
$ npm install stylus
```

Videos: http://bit.ly/1jW1sBf.
