Jadeというテンプレートエンジンを使用してホームページのレンダリングを行い、Express.jsのアプリケーションを作成しましょう。

ホームページは `/home` へのアクセスに対してレスポンスを返します。

そして、 'new Date.toDateString()' を使用して現在の日付を表示してください。

人が理解できるフォーマットで時刻を含まない日付を返すために、 シンプルに 'toDateString()' を使用します。

-----------------------------

## ヒント

Jadeのテンプレートファイルであるindex.jadeは以下のような形式です。

```jade
h1 Hello World
p Today is #{date}.
```

{appname} が提供する `index.jade` を使用することをお勧めします。 `index.jade` へのパスは `process.argv[3]` で取得することができます。
もちろん、自身で作成したJadeファイルを使用することもできます。 {appname} が提供するものと完全に同じであることを確認してください。

以下は、テンプレートファイルへのパスを `templates` に指定する方法です。

```js
app.set('views', path.join(__dirname, 'templates'))
```

`__dirname` はjsファイルがあるフォルダへの絶対パスで、 path.join はクロスプラットフォーム(Win と Linux/Mac)のパスを生成するために使用されています。

Express.jsにどのテンプレートエンジンを使用するか設定するために、以下の行を記述してください。

```js
app.set('view engine', 'jade')
```

Hello Worldの `res.end()` の代わりに、 `res.render()` 関数を使用して、テンプレートファイルの名前とデータを取得してください。

```js
res.render('index', {date: new Date().toDateString()})
```

人が理解できるフォーマットで時刻を含まない日付を返すために、 シンプルに 'toDateString()' を使用します。

--------------------------------

## 注意

アプリケーションを新規作成している場合には、 `jade` をnpmを使用してインストールしてください。
作成したjsファイルがあるディレクトリで `$ npm install` コマンドを実行することで、jadeがインストールできます。

再度になりますが、 {appname} からアプリケーションに渡されるポート番号は `process.argv[2]` で取得できます。

`Error: Cannot find module 'jade'` というエラーメッセージが出力された場合は、ExpressはJadeを見つけられていません。
`npm install jade` コマンドを実行することでこれを修正することができます。

Videos: http://bit.ly/1jW1sBf.
