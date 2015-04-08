撰寫一個會讀取檔案，把檔案內容解析為JSON格式，並把結果輸出給使用者的伺服器。

`process.argv[2]` 會傳入 port，`process.argv[3]` 則傳入檔案名稱。

回應方式如下：

```js
res.json(object)
```

伺服器處理的路徑是「/books」。

-----------------------------

## 提示

要讀取檔案，可以使用 fs 模組，如：

```js
fs.readFile(filename, callback)
```

而解析字串可以用 `JSON.parse` 完成：

```js
object = JSON.parse(string)
```
