このエクササイズはURLパラメータについてです。
例えば、 `/message/526aa677a8ceb64569c9d4fb` のようなリクエストを受けた際に、
メッセージのIDとなる値を抽出する方法を知っていないといけません。

`/message/:id` というPUTリクエストを処理するExpress.jsのサーバーを作成し、
現在日時とURLから取得したIDを組み合わせたSHA-1ハッシュを生成してください。

例えば、サーバーが

```
PUT /message/526aa677a8ceb64569c9d4fb
```

というリクエストを受けた際に、（文字列としての）現在日時とIDのハッシュを返します。

SHA-1は以下のようにして計算できます。

```js
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')
```

-----------------------------

## ヒント

Express.jsのアプリケーションは変数名の頭に `:` を付けることで変数を含むパスを待ち受けることができます。
例えば、以下の例では、 `app` は `/path/` 以下のどのサブディレクトリに対するPUTリクエストもハンドルします。

```js
app.put('/path/:NAME', function(req, res){ /* ... */ });
```

与えられた変数は `req.params` に保存されます。
リクエストハンドラの中でパラメータを抽出するには、以下のようにしてください。

```js
req.params.NAME
```

ボーナス

URLパラメータをパースするのに req.param ミドルウェアを使用できます。

例えば、

app.param('id', function (req, res, next, id) {
  req.id = id
  ...
  next()
})

app.get('/message/:id', function (req, res, next) {
  console.log(req.id)
  next()
})

動画: http://bit.ly/1jW1sBf.
