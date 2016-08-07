La mayoría de las veces estamos haciendo servidores de API REST (RESTful) con JSON.

Programa un servidor que, cuando reciba un GET, lea un archivo, lo parsee a JSON
y responda con ese contenido al usuario.

El servidor debe responder a cualquier petición GET que coincida con la ruta de recursos `/books`.

Como siempre, el puerto es provisto en `process.argv[2]`. El archivo a leer se puede encontrar 
en `process.argv[3]`.

Responde con:

```js
res.json(object)
```

Todo debe coicidir con la ruta `/books`.

Para leer el archivo usa el módulo `fs`, por ejemplo,

```js
fs.readFile(filename, callback)
```

-----------------------------

## PISTAS

El parseo a JSON puede hacerse con `JSON.parse`:

```js
object = JSON.parse(string)
```

No hay necesidad the instalar el módulo `fs` ya que es parte de la plataforma de Node.js


Videos: http://bit.ly/1jW1sBf.
