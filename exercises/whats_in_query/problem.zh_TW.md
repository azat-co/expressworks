
撰寫一個路由（route），可以解析對 `/search` 網址發起的 GET 請求所帶來的查詢字串。如：`?results=recent&include_tabs=true` ，並且把這個字串以 JSON 格式輸出。

-----------------------------

## 請求

在 Express.js 裡要解析查詢查詢參數，可以用：

```js
req.query.NAME
```

要輸出 JSON 格式，可以用：

```js
res.send(object)
```
