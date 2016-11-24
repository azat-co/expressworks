建立一个可以处理 PUT `'/message/:id'` 请求的 Express.js 服务器。

举个栗子：

```
PUT /message/526aa677a8ceb64569c9d4fb
```

这个请求的响应内容，是当前日期加上请求ID的哈希值（hash value）。

```js
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')
```

-----------------------------

## 提示

要处理这个 PUT 请求，可以用下面的方式：

```js
app.put('/path/:NAME', function(req, res){...});
```

要从请求中解析出传来的参数，可以用：

```js
req.params.NAME
```
