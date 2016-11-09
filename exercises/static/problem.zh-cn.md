不用任何的路由（route），使用 static middleware 回传 `index.html` 文件。

您的网站必须监听程序的第一个参数（`process.argv[2]`）所提供的 port。


程序的第二个参数（`process.argv[3]`）是 `index.html` 文件所在的路径。不过，您也可以使用您自己的文件，内容如下：

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

调用 static middleware 的方式如下：

```js
app.use(express.static(path.join(__dirname, 'public')));
```

在这个作业中，{appname} 会传给您路径，所以您可以这样用：

```js
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
```
