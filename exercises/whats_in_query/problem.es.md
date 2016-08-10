A menudo, tenemos la necesidad de procesar la información de la petición que se
encuentra en la URL (urlencoded).

Escribe una aplicación que extraiga la información que se encuentra en la cadena de caracteres (string)
de la petición GET `/search` provista en la URL, por ejemplo `?results=recent&include_tabs=true` y
luego la devuelva al usuario en formato JSON.


Usa app.get('/search', function(){...}) para manipular la URL.

En Express.js, para extraer los parámetros de la petición podemos usar (dentro del controlador de solicitudes):

```js
req.query.NOMBRE
```

-----------------------------

## PISTAS

No necesitamos instalar el middleware query. Ya es parte de Express.js

Para enviar el JSON podemos usar:

```js
res.send(object)
```

Videos: http://bit.ly/1jW1sBf.
