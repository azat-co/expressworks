Na maioria das vezes nos estamos construindo uma RESTful API servers com JSON.

Escreva um servidor que quando recebe uma requisição GET, lê o arquivo, parsea ele para JSON
e responde esse conteúdo para o usuário.

O servidor deve responder a qualquer requisição GET que corresponda ao caminho `/books`.
Como sempre, a porta é passada em `process.argv[2]`. O arquivo para ler é passado
em `process.argv[3]`.

Responda usando:

```js
res.json(object)
```

Tudo deve corresponder ao caminho `/books`.


Para ler o arquivo use o módulo `fs`, e.g.,

```js
fs.readFile(filename, callback)
```

-----------------------------

## DICAS

Por enquanto a análise (parse) pode ser feita usando `JSON.parse`:

```js
object = JSON.parse(string)
```

Não é necessário instalar o módulo `fs`. Ele é parte do core da plataforma Node.js.


Videos: http://bit.ly/1jW1sBf.
