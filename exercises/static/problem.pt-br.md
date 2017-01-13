Esse exercício é sobre servir arquivos estáticos ativos como os arquivos HTML.
Há muitas maneiras de se fazer isso mas nós queremos que você use static middleware para servir o arquivo `index.html`.

Por favor não use NENHUMA rota como `app.get`. SOMENTE estático.

Sua solução deve ouvir a porta fornecida pelo `process.argv[2]`.

O arquivo`index.html` é provido e acessado por seu caminho fornecido pelo
`process.argv[3]`. No entanto, você pode usar o seu próprio arquivo com esse conteúdo (cuidado com os espaços em branco):

```html
<html>
  <head>
    <title>expressworks</title>
    <link rel="stylesheet" type="text/css" href="/main.css"/>
  </head>
  <body>
    <p>I am red!</p>
  </body>
</html>
```

-----------------------------

## DICAS

Assim é como você pode chamar static middleware assumindo que a sua pasta com arquivos estáticos é `public` e está na mesma pasta que os arquivos principais do seu projeto:

```js
app.use(express.static('public'))
```

Para esse exercício {appname} nós vamos passar para você o caminho no argumento CLI `process.argv[3]`. Você pode criar uma lógica OU condição para usar o valor fornecido no argumento CLI ou passar o caminho absoluto para a pasta `public`. O caminho é construído com `path.join()`:

```js
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
```

Videos: http://bit.ly/1jW1sBf.
