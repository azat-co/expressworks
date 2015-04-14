Write a server that reads a file, parses it to JSON and outputs the content
to the user.

The port is passed in `process.argv[2]`.  The file name is passed in `process.argv[3]`.

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
