Write a route that extracts data from the query string in the GET `'/search'` URL
route, e.g. `?results=recent&include_tabs=true` and then outputs it back to
the user in JSON format.

-----------------------------

## HINTS

In Express.js, to extract query string parameters, we can use:

```js
req.query.NAME
```

To output JSON we can use:

```js
res.send(object)
```
