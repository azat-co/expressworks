Write a server that responds to a GET by reading a file, parsing it to JSON,
and sending that content to the user.

The server should respond to any GET that matches the `'/books'` resource path.
As always, the port is passed in `process.argv[2]`. The file to read is passed in `process.argv[3]`.

Respond with:

```js
res.json(object)
```

Everything should match the `'/books'` resource path.


-----------------------------

## HINTS

For reading, there's an fs module, e.g.,

```js
fs.readFile(filename, callback)
```

While the parsing can be done with `JSON.parse`:

```js
object = JSON.parse(string)
```
