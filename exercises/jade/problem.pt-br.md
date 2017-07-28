Crie uma aplicação Express.js como uma página inicial renderizadoe rendered por um template Jade engine.

A página inicial deve responder a rota `/home`.

A view deve mostrar a data atual usando 'new Date().toDateString()'.

Nós usamos 'toDateString()' para simplificar o retorno da data sem mostrar o horário, um formato usual para nós humanos. 

-----------------------------

## DICAS

O arquivo Jade `index.jade` deve ser parecer com isso:

```jade
h1 Hello World
p Today is #{date}.
```

Você pode usar o `index.jade` (recomendado). O caminho para `index.jade` será fornecido no
`process.argv[3]`. Claro que você pode usar o seu próprio arquivo Jade, somente tenha certeza que ele é exatamente igual ao nosso.

É assim que você pode especificar o caminho para os arquivos template na pasta `templates`:

```js
app.set('views', path.join(__dirname, 'templates'))
```

O `__dirname` é o caminho absoluto desse arquivo e path.join é usado para produzir um caminho multi-plataforma (Win vs. Linux/Mac).

Para dizer a aplicação Express.js o que o template engine deve usar, aplique essa linha nas configurações do Express.js:

```js
app.set('view engine', 'jade')
```

Ao invés de  Hello World's `res.end()`, a função `res.render()` aceita um template e data (chamados localmente):

```js
res.render('index', {date: new Date().toDateString()})
```

Nós usamos `toDateString()` para simplificar o retorno da data sem o horário, um formato mais comum para nós humanos.

--------------------------------

## NOTAS

Ao criar seus projetos pelo scratch, instale o `jade` e suas dependências pelo npm.
Se você rodar `$ npm install` nesse pacote (expressworks), você deve ter o jade instalado.

Novamente, a porta usada é passada por {appname} para a aplicação como `process.argv[2]`.

Se você receber `Error: Cannot find module 'jade'`, é porque o Express está procurando pelo Jade relativo ao caminho. Você pode concertar isso rodando `npm install jade` no seu terminal.

Videos: http://bit.ly/1jW1sBf.
