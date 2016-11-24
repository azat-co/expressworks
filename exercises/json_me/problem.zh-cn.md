编写一个会读取文件，把文件内容解析为JSON格式，并把结果输出给使用者的服务器。

`process.argv[2]` 会传入 port，`process.argv[3]` 则传入文件名称。

返回方式如下：

```js
res.json(object)
```

服务器处理的路径是「/books」。

-----------------------------

## 提示

要读取文件，可以使用 fs 模块，如：

```js
fs.readFile(filename, callback)
```

而解析字符串可以用 `JSON.parse` 完成：

```js
object = JSON.parse(string)
```
