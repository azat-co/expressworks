Los formularios son importantes. Este ejercicio te enseñará como procesar los formularios web tradicionales (no-AJAX).

Escribe una ruta (`'/form'`) que procese la entrada del formulario HTML
(`<form><input name="str"/></form>`) e imprima el valor de `str` al revés.

Para manipular una solicitud POST, usa el método `post()`, que es utilizado de la misma manera que `get()`:

```js
app.post('/path', function(req, res){...})
```

Espress.js usa middleware para proveer funcionalidades extra a tu servidor web.

En pocas palabras, un middleware es una función invocada por Express.js
antes de tu propio manejador de peticiones (request handler)

Los middleware proveen una gran variedad de funcionalidades como manipulación de registros,
entregar archivos estáticos y manipulación de errores.

Un middleware es agregado invocando `use()` en la aplicación y pasando el middleware
como un parámetro.

Para parsear el contenido de las peticiones `x-www-form-urlencoded`, Espress.js puede usar
el middleware `urlencoded()` del módulo `body-parser`.

```js
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
```


-----------------------------

## PISTAS

Así es como podemos imprimir caracteres al revés (una de las formas de hacerlo):

```js
req.body.str.split('').reverse().join('')
```

El parámetro extended pasado como true (qs) o false (querystring) determina el módulo del parser.

Puedes leer más sobre el middleware Connect en este link (inglés):

  https://github.com/senchalabs/connect#middleware

La documentación (en inglés) del módulo body-parser puede ser encontrada aquí:

  https://github.com/expressjs/body-parser

Videos: http://bit.ly/1jW1sBf.

-----------------------------

## NOTA
Cuando crees tus proyectos desde cero, instala la dependencia `body-parser` con
npm tipeando en tu terminal:

```sh
$ npm install body-parser
```
Nuevamente, el puerto que debes usar es provisto por `process.argv[2]`.
