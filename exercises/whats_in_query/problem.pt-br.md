Muitas vezes precisamos processar os dados da string consultando uma URL (urlencoded).

Escreva a rota que extraia os dados da query string na URL acessada por uma requisição GET `/search`
e.g. `?results=recent&include_tabs=true` e então retorna de volta para
o usuário no formato JSON.

Use app.get('/search', function(){...}) para a rota.

No Express.js, para extrair os parâmetros da query string (string de consulta), nós podemos usar (dentro do request handler):

```js
req.query.NAME
```

-----------------------------

## DICAS

Não precisamos instalar o query middleware. Ele já faz parte do Express.js framework.

Para retornar o JSON nos podemos usar:

```js
res.send(object)
```

Videos: http://bit.ly/1jW1sBf.
