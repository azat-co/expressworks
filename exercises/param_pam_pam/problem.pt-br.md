Esse exercício é sobre usar paramêtro na URL.
Por exemplo, se você tem a URL /message/526aa677a8ceb64569c9d4fb, então você deve saber como
extrair o valor que é o ID da mensagem.

Crie um servidor Express.js que processe requisições do tipo PUT `/message/:id`
e produz um SHA-1 hash da data atual combinado com o ID vindo da URL.

Por exemplo, se o servidor recebe

```
PUT /message/526aa677a8ceb64569c9d4fb
```

ele irá responder com um hash da data atual (como uma string) e o ID.

Uma SHA-1 hash pode ser gerada assim:

```js
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')
```

-----------------------------

## DICAS

Aplicações Express.js também podem ser montadas para caminhos que contêm uma variável
colocando um `:` no início da variável nome. Por exemplo,
o seguinte `app` lida com requisições PUT em um sub-diretório de `/path/`:

```js
app.put('/path/:NAME', function(req, res){ /* ... */ });
```

A variável dada é guardada em `req.params`. Então, para extrair
o parâmetro de dentro do request handlers (manipulador de solicitação), use:

```js
req.params.NAME
```

BONUS

Você pode usar o  req.param middleware para parsear o parâmetro da URL.

Por exemplo,

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
