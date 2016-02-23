`/home` にアクセスが来た際に"Hello World!"を出力するExpress.jsのアプリケーションを作成しましょう。

ポート番号は {appname} から1つ目の引数として渡されます。すなわち、 `process.argv[2]` として取得できます。

事前に動作させていたプロセスを終了させるために、 `verify` を行う前にMac OS Xのターミナルで `$ killall node`　コマンドを実行してください。
Windowsの場合はコマンドプロンプトで "taskkill /IM node.exe" コマンドを使用してください。

もしまだであれば、以下のコマンドでExpressモジュールをインストールすることを忘れないでください。

```
$ npm install express --save
```

-----------------------------

## ヒント

Express.jsのアプリケーションを3000番ポートで作成する方法は以下の通りです。
`'/'` にアクセスが来た際に文字列を返します。

```js
var express = require('express')
var app = express()
app.get('/', function(req, res) {
  res.end('Hello World!')
})
app.listen(3000)
```

以下のように、回答では固定のポート番号の代わりに `process.argv[2]` を使用してください。

```js
app.listen(process.argv[2])
```

動画: http://bit.ly/1jW1sBf.
