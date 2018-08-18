Crea una aplicación en Express.js que muestre "Hello World! cuando alguien visite `/home`.

El número de puerto te será provisto por {appname} como el primer argumento de
la aplicación, es decir, `process.argv[2]`.


Ejecuta `$ killall node`  antes de verificar los ejercicios (en tu terminal de Mac OS X) para terminar 
cualquier proceso previo.

En Windows, usa "taskkill /IM node.exe" en la Linea de Comandos.

No olvides instalar el módulo de Express si todavía no lo hiciste.

```
$ npm install express --save
```

-----------------------------

## PISTAS

Así es como podemos crear una aplicación de Express.js en el puerto 3000 que
responde con una cadena de caracteres (string) en `'/'`:

```js
const express = require('express')
const app = express()
app.get('/', function(req, res) {
  res.end('Hello World!')
})
app.listen(3000)
```

En tu solución debes usar `process.argv[2]` en vez de un número de puerto fijo:

```js
app.listen(process.argv[2])
```

Videos: http://bit.ly/1jW1sBf.
