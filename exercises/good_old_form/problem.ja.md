フォームは重要です。このエクササイズでは、伝統的な（ajaxを使用しない）ウェブフォームの処理の方法を学べます。

HTMLフォームのインプット(`<form><input name="str"/></form>`)と、
 `str` の値の出力を処理するルーティング(`'/form'`)を記述してください。

POSTリクエストをハンドルするには、以下のように `get()` と同じように使用できる `post()` メソッドを使用してください。

```js
app.post('/path', function(req, res){...})
```

Express.jsはあなたが作成しているウェブサーバーに新たな機能を加えるためにミドルウェアを使用します。

簡単に言うと、そのミドルウェアはExpress.jsによって、自身のリクエストハンドラの前に実行される関数です。

ミドルウェアによって、ロギングや静的なファイルの提供や、エラーハンドリングなど様々な機能が提供されます。

ミドルウェアはアプリケーション上で `use()` メソッドを呼び、パラメーターとして渡すことで追加できます。

`x-www-form-urlencoded` リクエストボディをパースするために、
Express.jsは `body-parser` モジュールの `urlencoded()` ミドルウェアを使用することができます。

```js
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
```


-----------------------------

## ヒント

以下の方法でサーバー側で文字列を出力できます（方法の一例に過ぎません）。

```js
req.body.str.split('').reverse().join('')
```

extendedは `true` か `false` に設定されます。これによって、パーサーのモジュールが決定されます。
（`true` の場合、 `qs` モジュール、 `false` の場合、 `querystring` モジュール）

Connectミドルウェアについては以下を参照してください。

  https://github.com/senchalabs/connect#middleware

body-parser モジュールに関してのドキュメントは以下を参照してください。

  https://github.com/expressjs/body-parser

動画: http://bit.ly/1jW1sBf.

-----------------------------

## 注意

1からアプリケーションを作成している場合には、ターミナルで以下のコマンドを実行して `body-parser` をインストールしてください。

```sh
$ npm install body-parser
```

再度になりますが、 {appname} からアプリケーションに渡されるポート番号は `process.argv[2]` で取得できます。
