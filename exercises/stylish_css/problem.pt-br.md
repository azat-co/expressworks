HTML sem estilos são chatos então nesse exercício nós vamos te ensinar como usar o Stylus com Express.

Estilize o HTML vindo do exercício "STATIC" usando Stylus middleware.
Stylus <https://github.com/stylus/stylus> gera arquivos .css de arquivos `.styl`.

Sua solução deve escutar a porta fornecida pelo `process.argv[2]` para
requisições `GET`, um dos quais será para `main.css`, que deve ser
automaticamente gerado pela sua Stylus middleware. `index.html` e `main.styl` podem ser encontrados em `process.argv[3]` (Eles estão no mesmo diretório).

Você pode também criar o seu próprio diretório e usar esses, se você gostar:

O arquivo `main.styl`:

```stylus
p
  color red
```

O arquivo `index.html`:

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

Você vai querer conectar em alguma stylus middleware usando `app.use()` novamente.
Vai ficar parecido com isso:

```js
app.use(require('stylus').middleware('/path/to/folder'))
```

Dica: Você pode utilizar `__dirname` para conseguir o caminho absoluto do arquivo que está rodando atualmente.

O caminho para um diretório não pode ser um caminho absoluto mas um relativo:

```js
app.use(require('stylus').middleware('public'))
```

Além de produzir no exercício "STATIC", você vai precisar servir os arquivos estáticos.
Lembre-se que uma middleware é executada na ordem em que o `app.use`é chamado!

## NOTAS

Para os seus próprios projetos, Stylus precisa ser instalado como qualquer outra dependência:

```sh
$ npm install stylus
```

Videos: http://bit.ly/1jW1sBf.
