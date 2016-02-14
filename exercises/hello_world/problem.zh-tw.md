製作一個瀏覽 `/home` 頁面時會輸出「Hello World!」的 Express.js app 。

{appname} 會將聆聽的 port 放在第一個參數，如 `process.argv[2]` 。

-----------------------------

## 提示

建立一個聆聽在 port 3000 ，並回應字串在「`/`」的 Express.js app 的程式碼如下：

```js
var express = require('express')
var app = express()
app.get('/', function(req, res) {
  res.end('Hello World!')
})
app.listen(3000)
```

請使用 `process.argv[2]` 取代固定的 port ：

```js
app.listen(process.argv[2])
```
