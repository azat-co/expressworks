expressworks
============

這個 Express.js workshop 是基於 [workshopper](https://github.com/rvagg/workshopper) 並啟迪自 [@substack](https://twitter.com/substack) 與 [@maxogden](https://twitter.com/maxogden) 所製作的 [stream-adventure](https://github.com/substack/stream-adventure) 。ExpressWorks 會提供您任務與提示。您針對這些問題寫出一個 Express.js app 作為解決方案之後，ExpressWorks 將會驗證您的解法是否正確。

![Hello World Express.js app](https://raw.github.com/azat-co/expressworks/master/images/hello-world.png)

## 貢獻者

```
    19  Christophe Porteneuve
     3  Harry Moreno
     3  Charlotte Spencer
     2  Thomas Burette
     2  intrueder
     2  Kevin Jayanthan
     1  Louis Pilfold
     1  Rich Trott
     1  Richard Kho
     1  Ryan Kois
     1  Timothy Gu
     1  Wojciech Gawronski
     1  brownman
     1  Alessandro Lensi
     1  raj
     1  Ayman Mahfouz
     1  Daniel Geier
     1  Dylan Smith
     1  Finn
     1  Giuseppe
     1  Jessie Shi
     1  Jonny Arnold
```

發給我們一個 Pull Request，就可以看到您的名字出現在這裡。 ;-)

PS: 產生自 `git shortlog -n -s`

## 安裝 (建議方式)

建議將這個程式裝在系統裡：

```bash
$ npm install express
$ npm install -g expressworks
$ expressworks
```


如果發生錯誤，嘗試這樣安裝：

```bash
$ sudo npm install -g expressworks
```

## 安裝在所在目錄（進階方式）

執行以下命令以安裝在所在目錄：

```bash
$ mkdir node_modules
$ npm install expressworks
$ cd node_modules/expressworks
$ node expressworks
```

# 使用方式
*注意* ： ExpressWorks 需要在當前目錄複製一份可用的 express 程式。請確認執行過 `npm install express` 以完成作業。

ExpressWorks 可以使用以下命令：

```
Usage

  expressworks
    顯示互動式清單，以選擇一個 workshop 。
  expressworks list
    顯示所有的 workshop，一行一個。
  expressworks select 「workshop 名字」
    選擇一個 workshop
  expressworks current
    顯示目前已選的 workshop
  expressworks run program.js
    執行您的程式處理選定的輸入
  expressworks verify program.js
    驗證您的程式是否有預期的輸出
```

# 重設

如果您想要重設完成作業的清單，可以清除 `~/.config/expressworks/completed.json` 檔案

![Hello World Express.js app](https://raw.github.com/azat-co/expressworks/master/images/finished.png)

# 更多資訊

可閱讀 [Express.js Guide](http://expressjsguide.com) 這本書

# 步驟


## Hello World

製作一個聆聽在 localhost:3000 ，當有人打開「/home」頁面時會輸出「Hello World!」的 Express.js app 。

expressworks 會將聆聽的 port 提供在程式的 `process.argv[2]` 。

## Jade

製作一個在 Home 頁面（/home）以 Jade 模版顯示特定資料（toDateString）的 Express.js app 。

## Good Old Form

撰寫一個可處理 HTML 表單輸入 （<form><imput name="str"/></form>），並接著把字串倒過來顯示的路由（`/form`）

## Static

不透過任何路由，將靜態 middleware 套用至伺服器的 index.html 檔案。這個 index.html 檔案所在位置將會透過 `process.argv[3]` 提供給程式。無論如何，您也可以使用含有以下內容的檔案：

```html
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="/main.css"/>
    </head>
    <body>
      <p>I am red!</p>
    </body>
  </html>
```

## Stylish CSS

使用 Stylus middleware 為您之前使用的 HTML 檔案套上樣式。main.styl 檔案的所在位置將會透過 `process.argv[3]` 傳給程式，或您也可以用以下的內容建立您自己的檔案或目錄：

```css
  p
    color red
```

index.html 檔案：

```html
  <html>
    <head>
      <title>expressworks</title>
      <link rel="stylesheet" type="text/css" href="/main.css"/>
    </head>
    <body>
      <p>I am red!</p>
    </body>
  </html>
```

## Param Pam Pam

建立一個可以處理 PUT `/message/:id` 請求（如 PUT `/message/526aa677a8ceb64569c9d4fb`）的 Express.js 伺服器。

這個請求的回應是 id 的 SHA1 雜湊值加上一個日期。

```javascript
  require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString().toString() + id)
    .digest('hex')
```

## What's in Query

撰寫一個會解析GET `/search` 網址 query 字串的路由。如 `?results=recent&include_tabs=true` ，並把結果轉換成 JSON 格式輸出。

## JSON Me

撰寫一個會讀入檔案（檔名會以 `process.argv[3]` 傳給程式），並以 JSON 解析檔案內容，然後把內容以 `res.json(object)` 顯示出來。


