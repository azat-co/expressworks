자주 url 인코드된 URL 쿼리 문자열에서 데이터를 처리해야 합니다.

쿼리 문자열에서 날짜를 추출하는 GET `/search` URL 경로를 작성하세요. 예를
들어 `?results=recent&include_tabs=true`가 오면 출력은 JSON 형식으로 돌려줘야
합니다.

라우트에 app.get('/search', function(){...})를 사용하세요.

Express.js에서 쿼리 문자열 매개변수를 추출하려면 요청 핸들러 안에서 이렇게 하면 됩니다.

```js
req.query.NAME
```

-----------------------------

## 힌트

쿼리 middleware는 Express.js 프레임워크의 일부입니다. 따로 설치할 필요가 없습니다.

출력 JSON은 이렇게 반환합니다.

```js
res.send(object)
```
