製作一個以 Jade 模版引擎渲染首頁的 Express.js app。

首頁應該要回應在 `/home` 頁面。

顯示的頁面應該用 `toDateString` 顯示正確的日期。


-----------------------------

## 提示

Jade 模版檔 `index.jade` 內容如下：

The Jade template file `index.jade` is already provided:

```jade
h1 Hello World
p Today is #{date}.
```

如果有個資料夾名為「 `templates` 」，在 Express.js app 中指定這個特別路徑的標準作法如下：

```js
app.set('views', path.join(__dirname, 'templates'))
```

不過，如果要使用 {appname} 所提供的 `index.jade`，`index.jade` 的路徑會被放在 `process.argv[3]`。您也可以使用您自己的 jade 檔案！

為了告訴 Express.js app 要使用哪個模版引擎，請把這行放在 Express.js 的設定裡面：

```js
app.set('view engine', 'jade')
```

和 Hello World 範例裡的 `res.end()` 不同的是， `res.render()` 方法接受一個模版檔的名稱，以及要呈現的資料：

```js
res.render('index', {date: new Date().toDateString()})
```

我們使用 `toDateString()` 函式簡單地回傳可閱讀、不含時間的日期

--------------------------------

## 注意

如果您要從頭建立這個專案，請記得用 npm 安裝必備的 `jade` 模版引擎。

port會再一次的被 {appname} 以 `process.argv[2]` 傳給程式。
