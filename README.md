expressworks
============

**Video screencasts** which walk your through setup and problems (spoiler alert): [YouTube ExpressWorks](https://www.youtube.com/watch?v=C2IqQOLCCoU&list=PLguYmmjtxbWGwQRxXqMTQCj6FNb55aFVo). 📺💻😁

Learn Express.js from the author of one of the best books on Express.js—[Pro Express.js](http://proexpressjs.com)—workshop to teach you basics of Express.js.

This workshop is based on [workshopper](https://github.com/rvagg/workshopper) and inspired by [stream-adventure](https://github.com/substack/stream-adventure) by [@substack](https://twitter.com/substack) and [@maxogden](https://twitter.com/maxogden).

ExpressWorks will provide you with tasks and hints. You write the solutions to these problems. Then, after you wrote a solution as an Express.js app, ExpressWorks will verify your solution to the problem.

![Hello World Express.js app](https://raw.github.com/azat-co/expressworks/master/images/screen.png)


[![](https://raw.github.com/azat-co/expressworks/master/images/cover.jpg)](http://proexpressjs.com)



This workshop is brought to you by the author of [Pro Express.js](http://proexpressjs.com) (Apress 2014) [Azat Mardan](http://azat.co).

## Cheatsheet

You might want to download [the free Express.js cheatsheet](https://gumroad.com/l/NQiQ/git-874E6FB4) before embarking on a journey, or [view it online](https://gumroad.com/l/NQiQ/git-874E6FB4).



## Languages

* English
* French
* Traditional Chinese
* Korean
* Japanese

## Contributors


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

Make a PR to see your name here. ;-)

PS: via `$ git shortlog -n -s`. Please add yourself to the list when making a pull request.

## Installation (Recommended)

Recommended global installation:

```bash
$ npm install -g expressworks
$ expressworks
```

If you see errors, try:

```bash
$ sudo npm install -g expressworks
$ expressworks
```

## Local Installation (Advanced)

Run & install locally:

```bash
$ mkdir node_modules
$ npm install expressworks
$ cd node_modules/expressworks
$ node expressworks
```

Optional step that gives your the global command (`expressworks`) in the Terminal/command prompt:

```
$ npm link
$ expressworks
```

# Usage

```
$ expressworks
```

*Note*: ExpressWorks depends on a local copy of Express being available in your project folder.  To do the exercises, make sure to install the Express.js with

```
$ npm init
$ npm install express@4.11.2
```

See Offline Setup for more required dependencies.

ExpressWorks understands these commands:

```
Usage

  expressworks
    Show a menu to interactively select a workshop.
  expressworks list
    Show a newline-separated list of all the workshops.
  expressworks select NAME
    Select a workshop.
  expressworks current
    Show the currently selected workshop.
  expressworks run program.js
    Run your program against the selected input.
  expressworks verify program.js
    Verify your program against the expected output.
```

# Offline Setup

If you would like to setup all node packages beforehand, you can complete this workshop offline. Here are all the modules to install with exact versions that this workshop supports:

```bash
$ npm install express@4.11.2
$ npm install jade@1.9.2
$ npm install body-parser@1.12.0
$ npm install stylus@0.50.0
```

Note: You need to have `node_modules` or `packagen.json` in your project folder before installing dependencies. Run `$ mkdir node_modules` or `$ npm init` to create one of them.


# Reset

If you want to reset the list of completed tasks, clean the `~/.config/expressworks/completed.json` file.

![Hello World Express.js app](https://raw.github.com/azat-co/expressworks/master/images/finished.png)

# More Information

Check out [Express.js Guide](http://expressjsguide.com), [Pro Express.js](http://proexpressjs.com) and [FREE Express.js cheatsheet](https://gumroad.com/l/NQiQ/git-874E6FB4).

# Steps


## Hello World

Create an Express.js app that runs on localhost:3000, and outputs "Hello World!" when somebody goes to root '/home'.

`process.argv[2]` will be provided by expressworks to you, this is the port number.

## Jade

Create an Express.js app with a home page (/home) rendered by jade template engine, that shows current date (toDateString).


## Good Old Form

Write a route ('/form') that processes HTML form input (<form><imput name="str"/></form>) and prints backwards the str value.

## Static

Apply static middleware to server index.html file without any routes. The index.html file is provided and usable via `process.argv[3]` value of the path to it. However, you can use your own file with this content:

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

Style your HTML from previous example with some Stylus middleware. The path to main.styl file is provided in `process.argv[3]` or you can create your own file/folder from these:

```css
  p
    color red
```

The index.html file:

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

Create an Express.js server that processes PUT `/message/:id` requests, e.g., PUT `/message/526aa677a8ceb64569c9d4fb`.

As the response of this request return id SHA1 hashed with a date:

```javascript
  require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString().toString() + id)
    .digest('hex')
```

## What's in Query

Write a route that extracts data from query string in the GET `/search` URL route, e.g., `?results=recent&include_tabs=true`, and then transforms outputs it back to the user in JSON format.

## JSON Me

Write a server that reads a file (file name is passed in `process.argv[3]`), parses it to JSON and outputs the content to the user with `res.json(object)`.
