スタイルを適用しないHTMLは面白くないので、このエクササイズではExpressとStylusを使用する方法をざっと教えます。

Stylusミドルウェアを使用して、"STATIC"エクササイズのHTMLにスタイルを適用しましょう。
Stylus <https://github.com/stylus/stylus> は `.styl` ファイルから.cssファイルを生成します。

`process.argv[2]` で取得できるポート番号をリッスンして、 `GET` リクエストを受け付けてください。
リクエストのうちの1つは、Stylusミドルウェアから自動的に生成された `main.css` になります。
`index.html` と `main.styl` は `process.argv[3]` で渡されるディレクトリ（同じディレクトリ）にあります。

自分でディレクトリを作成して、それを使用することもできます。以下のようにファイルを作成してください。

`main.styl` ファイル

```stylus
p
  color red
```

`index.html` ファイル

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

`app.use` を再度使用して、Stylusミドルウェアをプラグインとして使用すると思います。
以下のように使用してください。

```js
app.use(require('stylus').middleware('/path/to/*.styl' ))
```

"STATIC"エクササイズで生成したものの他の静的なファイルを渡す必要があります。
ミドルウェアは `app.use` が呼ばれた際に実行されることを覚えておいてください。

## 注意

Stylusは他の依存モジュールと同様にインストールする必要があります。

```sh
$ npm install stylus
```

動画: http://bit.ly/1jW1sBf.
