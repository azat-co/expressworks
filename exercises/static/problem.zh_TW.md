不用任何的路由（route），使用 static middleware 回傳 `index.html` 檔案。

您的網站必須聆聽程式的第一參數（`process.argv[2]`）所提供的 port。 


程式的第二個參數（`process.argv[3]`）是 `index.html` 檔案所在的路徑。不過，您也可以使用您自己的檔案，內容如下：

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

## 提示

呼叫 static middleware 的方式如下：

```js
app.use(express.static(path.join(__dirname, 'public')));
```

在這個作業中，{appname} 會傳給您路徑，所以您可以這樣用：

```js
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
```
