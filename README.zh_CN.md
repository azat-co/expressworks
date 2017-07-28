expressworks
============

从有关 Express.js 最好的书籍[Pro Express.js](http://proexpressjs.com)的作者处学习 Express.js 是个不错的选择。


![Hello World Express.js app](https://raw.github.com/azat-co/expressworks/master/images/screen.png)  

这个 Express.js workshop 是基于 [workshopper](https://github.com/rvagg/workshopper) 并启迪自 [@substack](https://twitter.com/substack) 与 [@maxogden](https://twitter.com/maxogden) 所制作的 [stream-adventure](https://github.com/substack/stream-adventure) 。

ExpressWorks 会提供给您挑战和提示。您针对这些问题写出一个 Express.js app 作为解决方案之后，ExpressWorks 将会验证您的解法是否正确。
[![](https://raw.github.com/azat-co/expressworks/master/images/youtube.png)](https://www.youtube.com/watch?v=C2IqQOLCCoU&list=PLguYmmjtxbWGwQRxXqMTQCj6FNb55aFVo)

**视频截图** 带你熟悉一下安装流程和可能会出现的问题(剧透): [YouTube ExpressWorks](https://www.youtube.com/watch?v=C2IqQOLCCoU&list=PLguYmmjtxbWGwQRxXqMTQCj6FNb55aFVo). 📺💻😁
  
  
这个 workshop 是 [Pro Express.js](http://proexpressjs.com) (Apress 2014)的作者 [Azat Mardan](http://azat.co)带给你的.

[![](https://raw.github.com/azat-co/expressworks/master/images/cover.jpg)](http://proexpressjs.com)   
## 速查表

在开始这段美妙的旅程之前，你可能需要下载 [免费 Express.js 速查表](https://gumroad.com/l/NQiQ/git-874E6FB4)， 或者 [在线浏览](https://gumroad.com/l/NQiQ/git-874E6FB4).
## 语言

* 英语
* 法语
* 简体中文
* 繁体中文
* 韩语
* 日语

## 贡献者

```
95  Azat Mardan
19  Christophe Porteneuve
10  Tyler Moeller
 8  Justin Porter
 6  billy3321
 3  Harry Moreno
 3  Charlotte Spencer
 3  Kohei TAKATA
 2  Julian Mazzitelli
 2  Robbie Holmes
 2  Shim Won
 2  Thomas Burette
 2  Austin Corso
 2  azat-co
 2  Kevin Jayanthan
 2  intrueder
 1  Timothy Gu
 1  Trevor Whitney
 1  Wojciech Gawronski
 1  brownman
 1  raj
 1  Alessandro Lensi
 1  swisherb
 1  Alfredo Miranda
 1  Ayman Mahfouz
 1  Daniel Geier
 1  Dylan Smith
 1  Eddie Hsieh
 1  Finn
 1  Gabe Fernando
 1  Giuseppe
 1  Jessie Shi
 1  Johan Binard
 1  Jonny Arnold
 1  Kevin Kuhl
 1  Louis Pilfold
 1  Rich Trott
 1  Richard Kho
 1  Ryan Kois
```

发给我们一个 Pull Request，就可以看到您的名字出现在这里。 ;-)

PS: 产生自 `git shortlog -n -s`

## 安装 (建议方式)

建议将这个程序装在系统里：

```bash
$ npm install express
$ npm install -g expressworks
$ expressworks
```


如果发生错误，尝试这样安装：

```bash
$ sudo npm install -g expressworks
$ expressworks
```

## 安装在所在目录（高级方式）

执行以下命令以安装在所在目录：

```bash
$ mkdir node_modules
$ npm install expressworks
$ cd node_modules/expressworks
$ node expressworks
```

# 使用方式
*注意* ： ExpressWorks 需要在当前目录复制一份可用的 express 程序。做挑战之前，请确认已经执行以下命令

```
$ npm init
$ npm install express@4.11.2
```

请前往离线安装环节查看更多需要的依赖.

ExpressWorks 可以使用以下命令：

```
Usage

  expressworks
    显示互动式清单，以选择一个 workshop 。
  expressworks list
    显示所有的 workshop，一行一个。
  expressworks select 「workshop 名字」
    选择一个 workshop
  expressworks current
    显示目前已选的 workshop
  expressworks run program.js
    执行您的程序处理选定的輸入
  expressworks verify program.js
    验证您的程序是否有预期的输出
```  
# 离线安装

如果你提前安装所有 node 包，你就可以离线完成这个 workshop。
这是这个 workshop 支持的所有的带版本号的模块：


```bash
$ npm install express@4.11.2
$ npm install pug@2.0.0-beta6
$ npm install body-parser@1.12.0
$ npm install stylus@0.50.0
```

注意: 在安装依赖之前，你需要在你的项目文件夹中包含`node_modules` 或 `packagen.json`
运行`$ mkdir node_modules` 或 `$ npm init` 可以创建它们其中之一。
# 重置

如果您想要重置完成挑战的清单，可以删除 `~/.config/expressworks/completed.json` 文件

![Hello World Express.js app](https://raw.github.com/azat-co/expressworks/master/images/finished.png)

# 更多信息

请参阅 [Express.js Guide](http://expressjsguide.com), [Pro Express.js](http://proexpressjs.com) 和 [FREE Express.js cheatsheet](https://gumroad.com/l/NQiQ/git-874E6FB4)。

# 步骤


## Hello World

制作一个监听在 localhost:3000 ，当有人打开「/home」页面时会输出「Hello World!」的 Express.js app 。

expressworks 会将监听的 port 放在第一个参数 `process.argv[2]` 。

## Pug

制作一个在 Home 页面（/home）以 Pug 模版显示特定信息（toDateString）的 Express.js app 。

## Good Old Form

编写一个可处理 HTML 表单输入 （`<form><input name="str"/></form>`），并接着把字符串倒过来的路由（`/form`）

## Static

不通过任何路由，将静态 middleware 套用至服务器的 index.html 文件。这个 index.html 文件所在位置将会通过 `process.argv[3]` 提供给程序。无论如何，您也可以使用含有以下内容的档案：

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

使用 Stylus middleware 为您之前使用的 HTML 文件加上样式。main.styl 文件的所在位置将会通过 `process.argv[3]` 传给程序，或您也可以用以下的内容建立您自己的文件或目录：

```
  p
    color red
```

index.html 文件：

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

建立一个可以处理 PUT `/message/:id` 请求（如 PUT `/message/526aa677a8ceb64569c9d4fb`）的 Express.js 服务器。

这个请求的回应是 id 的 SHA1 哈希值加上一个日期。

```javascript
  require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString().toString() + id)
    .digest('hex')
```

## What's in Query

编写一个会解析GET `/search` 网址 query 字符串的路由。如 `?results=recent&include_tabs=true` ，并把结果转换成 JSON 格式輸输出。

## JSON Me

编写一个会读入文件（文件名会以 `process.argv[3]` 传给程序），并以 JSON 解析文件内容，然后把内容以 `res.json(object)` 显示出來。
