Apply static middleware to serve `index.html` file without any routes.

Your solution must listen on the port number supplied by `process.argv[2]`.

The `index.html` file is provided and usable via the path supplied by
`process.argv[3]`. However, you can use your own file with this content:

```html
<html>
  <head>
    <title>expressworks</title>
  </head>
  <body>
    <p>I am red!</p>
  </body>
</html>
```

-----------------------------

## HINTS

This is how you can call static middleware:

```js
app.use(express.static(path.join(__dirname, 'public')));
```

For this exercise {appname} will pass you the path:

```js
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
```
