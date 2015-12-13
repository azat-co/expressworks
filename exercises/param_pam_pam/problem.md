This exercise is about using URL parameters.
For example, if you have /message/526aa677a8ceb64569c9d4fb, then you should know how to
extract that value which is an ID of the message.

Create an Express.js server that processes PUT `/message/:id` requests
and produces a SHA-1 hash of the current date combined with the ID from the URL.

For instance, if the server receives

```
PUT /message/526aa677a8ceb64569c9d4fb
```

it will respond with a hash of the current date (as a string) and the ID.

The SHA-1 can be computed like this:

```js
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')
```

-----------------------------

## HINTS

Express.js apps can also be mounted to paths that contain a variable by
prepending a `:` to the beginning of a variable name. For instance, in
the following, `app` handles PUT requests in any subdirectory of `/path/`:

```js
app.put('/path/:NAME', function(req, res){ /* ... */ });
```

The given variable is then stored in `req.params`. So, to extract
parameters from within the request handlers, use:

```js
req.params.NAME
```

BONUS

You can use req.param middleware to parse the URL parameter.

For example,

app.param('id', function (req, res, next, id) {
  req.id = id
  ...
  next()
})

app.get('/message/:id', function (req, res, next) {
  console.log(req.id)
  next()
})

Videos: http://bit.ly/1jW1sBf.
