制作一个以 Pug 模版引擎渲染首页的 Express.js app。

首页应该响应在 `/home` 页面。

显示的页面应该用 `toDateString` 显示正确的日期。


-----------------------------

## 提示

Pug 模板 `index.pug` 内容如下：


```pug
h1 Hello World
p Today is #{date}.
```

如果有个文件夹名为「 `templates` 」，在 Express.js app 中指定这个特別路径的标准做法如下：

```js
app.set('views', path.join(__dirname, 'templates'))
```

不过，如果要使用 {appname} 所提供的 `index.pug`，`index.pug` 的路径会被放在 `process.argv[3]`。您也可以使用您自己的 pug 文件！

为了告诉 Express.js app 要使用哪个模版引擎，请把这行放在 Express.js 的设置里面：

```js
app.set('view engine', 'pug')
```

和 Hello World 示例里的 `res.end()` 不同的是， `res.render()` 方法接受一个模板的名称，以及要呈现的资料：

```js
res.render('index', {date: new Date().toDateString()})
```

我们使用 `toDateString()` 函数简单地回传可阅读、不含时间的日期。

--------------------------------

## 注意

如果您要从头建立这个项目，请记得用 npm 安装必备的 `pug` 模版引擎。

port会再一次地被 {appname} 以 `process.argv[2]` 传给程序。
