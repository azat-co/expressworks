建立一個可以處理 PUT `'/message/:id'` 請求的 Express.js 伺服器。

舉例來說：

```
PUT /message/526aa677a8ceb64569c9d4fb
```

這個請求的回應內容，是當前日期加上請求ID的雜湊值（hash value）。

```js
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')
```

-----------------------------

## 提示

要處理這個 PUT 請求，可以用下面的方式：

```js
app.put('/path/:NAME', function(req, res){...});
```

要從請求中解析出傳來的參數，可以用：

```js
req.params.NAME
```
