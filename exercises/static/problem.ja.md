このエクササイズはHTMLファイルのような静的なコンテンツを返すサーバについてです。
様々な方法があるかと思いますが、今回は `index.html` ファイルを返すためにstaticミドルウェアを使用してください。

`app.get` のようなルータは使用しないでください。staticミドルウェアのみを使用してください。

回答は `process.argv[2]` の形で渡されるポート番号をリッスンする必要があります。

`index.html` は {appname} から提供され、 `process.argv[3]` の形で渡されるパスで使用することができます。
しかし、以下の内容のhtmlファイルを作成して、それを使用することもできます（スペースの数も比較対象ですので、気をつけてください）。

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

## ヒント

以下のようにして、staticミドルウェアを呼ぶことができます。

```js
app.use(express.static(path.join(__dirname, 'public')))
```

以下のように、このエクササイズでは {appname} がパスを渡します。

```js
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
```

動画: http://bit.ly/1jW1sBf.
