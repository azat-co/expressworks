使用 Stylus middleware 為您之前做的 HTML 加上css。

您的網站必須聆聽程式的第一參數（`process.argv[2]`）所提供的 port。 

而 HTML 網頁和 Stylus 檔案會在在程式的第二參數（`process.argv[3]`）提供（兩個檔案都在同一個資料夾）。您可也可以建立您自己的資料夾，然後使用下面兩個檔案：

`main.styl` 檔案：

```stylus
p
  color red
```

`index.html` 檔案：

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

要使用 stylus 這個 middleware，可以這樣：

```js
app.use(require('stylus').middleware(__dirname + '/public'));
```

您也要記得提供靜態檔案。

## 注意

如果是您自己的專案，需要先安裝 Stylus，就跟其他相依套件一樣：

```sh
npm install stylus
```
