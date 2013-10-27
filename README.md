expressworks
============

Express.js workshop based on [workshopper](https://github.com/rvagg/workshopper) and inspired by [stream-adventure](https://github.com/substack/stream-adventure) by [@substack](https://twitter.com/substack) and [@maxogden](https://twitter.com/maxogden).

![Hello World Express.js app](https://raw.github.com/azat-co/expressworks/master/images/hello-world.png)

## Disclaimer

* For your own project, Express must be installed, either locally or globally
```bash
$ npm install -g express
```
* We use Self-executing/Immediate functions, to create scopes around the solutions. It's only porpuse to prevent us from creating unwanted global variables. If you want, you can skip it from your solution.
```js
(function () {
    'use strict';
    //the solution goes here
}();
```
Further reading: http://javascriptplayground.com/blog/2012/04/javascript-variable-scope-this/


## Installation (recommended)

Recommended global installation:

```bash
$ npm install -g expressworks
$ expressworks
```


If you see errors, try:

```bash
$ sudo npm install -g expressworks
```

## Local Installation (advanced)

Run&install locally:

```bash
$ npm install expressworks
$ cd expressworks
$ npm install
$ node expressworks
```

# Usage

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

# Reset

If you want to reset the list of completed tasks, clean the `~/.config/expressworks/completed.json` file.

![Hello World Express.js app](https://raw.github.com/azat-co/expressworks/master/images/finished.png)

# More Information

Check out [Express.js Guide](http://expressjsguide.com).
