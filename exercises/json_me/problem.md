Write a server that, when it recieves a GET, reads a file, parses it to JSON,
and responds with that content to the user.

The server should respond to any GET that matches the `'/books'` resource path.
As always, the port is passed in `process.argv[2]`. The file to read is passed
in `process.argv[3]`.

Respond with:

```js
res.json(object)
```

Everything should match the `'/books'` resource path.


-----------------------------

## HINTS

For reading the file, use the fs module, e.g.,

```js
fs.readFile(filename, callback)
```

While the parsing can be done with `JSON.parse`:

```js
object = JSON.parse(string)
```
