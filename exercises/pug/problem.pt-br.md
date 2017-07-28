Crie uma aplicação Express.js com uma página inicial renderizada pelo Pug template engine.

A página inicial deve responder ao caminho `/home`.

A página deve mostrar a data atual usando 'new Date().toDateString()'.

Nós usamos 'toDateString()' para simpliicar o retorno da data sem o horário (human-readable format).

-----------------------------

## DICAS

O arquivo Pug template `index.pug` deve se parecer com isso:

```pug
h1 Hello World
p Today is #{date}.
```

Você pode usar o nosso `index.pug` (recomendado). O caminho para o `index.pug` será fornecido em
`process.argv[3]`. Claro que você pode usar o seu próprio Pug file. Somente tenha certeza que ele é exatamente igual ao nosso.

Assim é como nós especificamos o caminho para os arquivos template no diretório `templates`:

```js
app.set('views', path.join(__dirname, 'templates'))
```

O `__dirname` é um caminho absoluto para esse arquivo e o path.join é usado para produzir um caminho multi-plataforma (Win vs. Linux/Mac).

Para dizer a aplicação Express.js que template engine usar, aplique essa linha na
configuração do Express.js:

```js
app.set('view engine', 'pug')
```

Ao invés de Hello World's `res.end()`, a função `res.render()` aceita
um template name e data (chamados localmente):

```js
res.render('index', {date: new Date().toDateString()})
```

Nós usamos `toDateString()` para simplificar o retorno da data sem o horário ( human-readable format).

--------------------------------

## NOTAS

Ao criar seus projetos pelo scratch, instale o `pug` e suas dependências pelo npm.
Se você rodar `$ npm install` nesse pacote (expressworks), você deve ter o jade instalado.

Novamente, a porta usada é passada por {appname} para a aplicação como `process.argv[2]`.

Se você receber `Error: Cannot find module 'pug'`, é porque o Express está procurando pelo Pug relativo ao caminho. Você pode concertar isso rodando `npm install pug` no seu terminal.

Videos: http://bit.ly/1jW1sBf.
