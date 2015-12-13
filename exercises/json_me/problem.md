Most of the times we're building RESTful API servers with JSON.

Write a server that, when it receives a GET, reads a file, parses it to JSON,
and responds with that content to the user.

The server should respond to any GET that matches the `/books` resource path.
As always, the port is passed in `process.argv[2]`. The file to read is passed
in `process.argv[3]`.

Respond with:

```js
res.json(object)
```

Everything should match the `/books` resource path.


For reading the file, use the `fs` module, e.g.,

```js
fs.readFile(filename, callback)
```

-----------------------------

## HINTS

While the parsing can be done with `JSON.parse`:

```js
object = JSON.parse(string)
```

No need to install the `fs` module. It's part of the core and the Node.js platform.


Videos: http://bit.ly/1jW1sBf.
