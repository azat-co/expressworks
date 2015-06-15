쿼리 문자열에서 날짜를 추출하는 GET `'/search'` URL 경로를 작성하세요. 예를
들어 `?results=recent&include_tabs=true`가 오면 출력은 JSON 형식으로 돌려줘야
합니다.

-----------------------------

## 힌트

Express.js에서 쿼리 문자열 매개변수를 추출하려면 이렇게 하면 됩니다.

```js
req.query.NAME
```

출력 JSON은 이렇게 반환합니다.

```js
res.send(object)
```
