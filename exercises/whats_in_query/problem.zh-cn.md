
编写一个路由（route），可以解析对 `/search` 网址发起的 GET 请求所带来的查询字符串。如：`?results=recent&include_tabs=true` ，并且把这个字符串以 JSON 格式输出。

-----------------------------

## 提示

在 Express.js 里要解析查询参数，可以用：

```js
req.query.NAME
```

要输出 JSON 格式，可以用：

```js
res.send(object)
```
