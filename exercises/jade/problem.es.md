Crea una app Express.js con una página home renderizada por el motor de plantillas Jade.

La página home debe responder a `/home`.

La página debe mostrar la fecha actual usando 'new Date.toDateString()'.

Usamos 'toDateString()' para mostrar de forma sencilla la fecha sin la hora, en un formato fácil de leer.

-----------------------------

## PISTAS

El archivo de plantilla Jade, `index.jade`, debe verse de esta manera:

```jade
h1 Hello World
p Today is #{date}.
```

Puedes usar nuestro `index.jade` (recomendado). La ruta al archivo `index.jade` será provista por `process.argv[3]`.
Por supuesto que estás invitado a usar tu propio archivo de Jade si lo deseas. Solo tienes que asegurarte que sea exactamente igual al nuestro.

Así es como puedes especificar la ruta hacia los archivos de plantillas en la carpeta `templates`:

```js
app.set('views', path.join(__dirname, 'templates'))
```

`__dirname` es la ruta completa del archivo y path.json es usado para producir una ruta entre plataformas (Win vs. Linux/Mac).

Para decirle a la aplicación Express.js qué motor de plantilla usar, agrega esta linea a la configuración de Express.js:

```js
app.set('view engine', 'jade')
```

A diferencia de la función `res.end()` que hemos visto en el primer ejercicio, `res.render()` acepta como argumentos
un nombre de plantilla y datos, (llamados locales):

```js
res.render('index', {date: new Date().toDateString()})
```

Usamos 'toDateString()' para mostrar de forma sencilla la fecha sin la hora, en un formato fácil de leer.

--------------------------------

## NOTAS

Cuando crees tus proyectos desde cero, instala la dependencia `jade` con npm.
Si instalaste este paquete (expressworks) usando `$ npm install`, ya deberías tener jade instalado.

Nuevamente, el puerto que debes usar es provisto por `process.argv[2]`.

Si recibes el error `Error: Cannot find module 'jade'`, se debe a que Express está buscando a Jade en relación a su ruta. Puedes arreglar esto ejecutando `npm install jade`.

Videos: http://bit.ly/1jW1sBf.
