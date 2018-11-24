Formulários são importantes. Esse exercício irá te mostrar como funciona um tradicional formulário web (sem AJAX).

Escreva uma rota (`'/form'`) que processará o input do formulário HTML.
(`<form><input name="str"/></form>`) e printe o valor do campo input `str` ao contrário.

Para lidar com uma requisição POST, use o método `post()`. Ele é usado da mesma maneira que o método `get()`:

```js
app.post('/path', function(req, res){...})
```

Express.js usa um middleware para fornecer funcionalidades extras para o seu servidor web.

Simplificando, um middleware é uma função invocada pelo  Express.js antes do próprio lidar com a sua solicitação.

Middleware fornece uma larga variedade de funcionalidades como logar, servir arquivos estáticos e gerenciar erros.

Um middleware é adicionado chamando `use()` na sua aplicação e passando para o middleware como um parâmetro.

Para parsear `x-www-form-urlencoded` as requisições bodies, Express.js pode usar o middleware `urlencoded()`
do módulo `body-parser`.

```js
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
```


-----------------------------

## DICAS

Aqui está como nós podemos printar os caractéres invertidos (somente uma maneira de fazer isso):

```js
req.body.str.split('').reverse().join('')
```

O conjunto extendido para true (qs) ou false (querystring) determina o módulo parser.

Leia mais sobre o Connect middleware aqui:

  https://github.com/senchalabs/connect#middleware

A documentação do módulo body-parser pode ser encontrada aqui:

  https://github.com/expressjs/body-parser

Videos: http://bit.ly/1jW1sBf.

-----------------------------

## NOTAS

Ao criar os seus projetos pelo scratch, instale o módulo `body-parser` e suas dependências usando o npm rodando o seguinte código:

```sh
$ npm install body-parser
```

…no seu terminal.

Novamente, a porta usada será passada {appname} para a sua aplicação pelo `process.argv[2]`.
