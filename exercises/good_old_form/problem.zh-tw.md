Write a route (`'/form'`) that processes HTML form input
(`<form><input name="str"/></form>`) and prints backwards the `str` value.

撰寫一個可以處理 HTML 表單輸入（`<form><input name="str"/></form>`），並且倒著印出 `str` 值的路由（`/form`）。

-----------------------------

## 提示

要處理 POST 請求可以使用 `post()` 方法，使用方式就跟 `get()` 一樣：

```js
app.post('/path', function(req, res){...})
```

Express.js 使用 middleware 提供更多功能給您的 web 伺服器。

在您處理請求之前，Express.js 會引入一個 middleware 函式。

Middleware 提供許多不同的功能如記錄（logging）、提供靜態檔案，以及錯誤處理。

對程式呼叫 `use()` ，並且把 middleware 當做參數傳入，就可以加入 middleware。

Express.js 可以用 `body-parser` 模組的 `urlencoded()` 解析 `x-www-form-urlencoded` 請求的內容。

```js
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
```

要了解 Connect middleware ，可以看這裡：

  https://github.com/senchalabs/connect#middleware

body-parser 模組的文件在此：

  https://github.com/expressjs/body-parser

把字串倒過來的方法如下：

```js
req.body.str.split('').reverse().join('')
```

-----------------------------

## 注意

在第一次執行你所建立的專案時，請先安裝 `body-parser` 相依套件
在你的終端機上透過 npm 執行:

```sh
$ npm install body-parser
```



再次提醒，{appname} 會將聆聽的 port 放在第一個參數，如 `process.argv[2]` 。
