使用 Stylus middleware 为您之前做的 HTML 加上css。

您的网站必须监听程序的第一个参数（`process.argv[2]`）所提供的 port。

而 HTML 网页和 Stylus 文件会在程式的第二个参数（`process.argv[3]`）提供（两个文件都在同一个文件夹）。您可也可以建立您自己的文件夹，然后使用下面两个文件：

`main.styl` 文件：

```stylus
p
  color red
```

`index.html` 文件：

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

要使用 stylus 这个 middleware，可以这样：

```js
app.use(require('stylus').middleware(__dirname + '/public'));
```

您也要记得提供静态文件。

## 注意

如果是您自己的项目，需要先安裝 Stylus，就跟其他依赖一样：

```sh
npm install stylus
```
