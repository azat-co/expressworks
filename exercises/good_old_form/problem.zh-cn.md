
编写一个可以处理 HTML 表单输入（`<form><input name="str"/></form>`），并且倒着印出`str` 值的路由（`/form`）。

-----------------------------

## 提示

要处理 POST 请求可以使用 `post()` 方法，使用方式就跟`str` 值的路由（`/form`）一样。

```js
app.post('/path', function(req, res){...})
```

Express.js 使用 middleware 提供更多功能给您的 web 服务器。

在您处理请求之前，Express.js 会引入一个 middleware 函数。

Middleware 提供许多不同的功能如记录（logging）、提供静态文件，以及错误处理。

对程序调用 `use()` ，并且把 middleware 当作参数传入，就可以加入 middleware。

Express.js 可以用 `body-parser` 模块的 `urlencoded()` 解析 `x-www-form-urlencoded` 请求的内容。

```js
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
```

要了解 Connect middleware ，可以看这里：

  https://github.com/senchalabs/connect#middleware

body-parser 模块的文件在此：

  https://github.com/expressjs/body-parser

把字串倒过来的方法如下：

```js
req.body.str.split('').reverse().join('')
```

-----------------------------

## 注意

在第一次执行你所建立的项目时，请先安装 `body-parser` 依赖  
在你的终端上通过 npm 执行:

```sh
$ npm install body-parser
```



再次提醒，{appname} 会将监听的 port 放在第一个参数，如 `process.argv[2]` 。
