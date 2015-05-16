Style the html from the example "STATIC" using Stylus middleware. [Stylus]
(https://github.com/stylus/stylus) generates .css files on the fly from
.styl files.

Your solution should listen on the port supplied by `process.argv[2]` for
`GET` requests. It should return the HTML `index.html` styled with `main.styl` in
the directory `process.argv[3]` (they are in the same directory). You could also
create your own folder and use these, if you like:

The `main.styl` file:

```stylus
p
  color red
```

The `index.html` file:

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

-----------------------------

## HINTS

You'll want to plug in some stylus middleware using the `app.use` again.
It'll look something like this:

```js
app.use(require('stylus').middleware( "/path/to/*.styl" ));
```

In addition to producing in the "STATIC" exercise, you'll need to serve static files.
Remember that middleware is executed in the order `app.use` is called!

## NOTE

For your own projects, Stylus requires to be installed like any other
dependency:

```sh
npm install stylus
```
