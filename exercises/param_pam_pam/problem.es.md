Este ejercicio trata sobre usar parámetros URL.
Por ejemplo, si tienes /mensaje/526aa677a8ceb64569c9d4fb, entonces tienes que saber
como extraer ese valor, que es un ID, del mensaje.

Crea un servidor Express.js que procese peticiones PUT de la forma `/message/:id`
y produzca un hash SHA-1 de la fecha actual combinada con el ID de la URL.

Por ejemplo, si el servidor recibe

```
PUT /message/526aa677a8ceb64569c9d4fb
```

responderá con un hash de la fecha actual (como una cadena de caracteres (string)) y el ID.

El SHA-1 puede ser calculado de esta forma:

```js
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')
```

-----------------------------

## PISTAS

Las aplicaciones de Express.js también pueden ser montadas a rutas que
contengan una variable anteponiendo `:` al inicio del nombre de una variable.
Puedes verlo en el siguiente ejemplo, donde `app` maneja peticiones PUT en
cualquier subdirectorio de `/path/`:

```js
app.put('/path/:NOMBRE', function(req, res){ /* ... */ });
```

La variable introducida es guardada en `req.params`. Entonces, para extraer
parámetros desde los controladores de solicitudes puedes usar:

```js
req.params.NOMBRE
```

BONUS

Puedes usar el middleware req.param para parsear el parámetro URL.

Por ejemplo,

app.param('id', function (req, res, next, id) {
  req.id = id
  ...
  next()
})

app.get('/message/:id', function (req, res, next) {
  console.log(req.id)
  next()
})

Videos: http://bit.ly/1jW1sBf.
