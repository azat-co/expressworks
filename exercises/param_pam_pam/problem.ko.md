이 연습문제는 URL 파라메터 사용법에 대한 것입니다.
예를 들어, /message/526aa677a8ceb64569c9d4fb가 있으면, 메시지의 아이디를
추출하는 법을 알아야 합니다.

PUT `/message/:id` 요청을 처리하는 Express.js 서버를 만드세요.
URL에서 현재 날짜와 아이디가 조합된 SHA-1 해시를 처리해야 합니다.

예를 들어, 서버가 다음 요청을 받으면,

```
PUT /message/526aa677a8ceb64569c9d4fb
```

현재 날짜(문자열)와 아이디의 해시로 응답해야 합니다.

SHA-1은 이렇게 계산할 수 있습니다.

```js
require('crypto')
  .createHash('sha1')
  .update(new Date().toDateString() + id)
  .digest('hex')
```

-----------------------------

## 힌트

Express.js 앱은 변수 이름 앞에 `:`를 붙여 변수가 포함된 경로로도 마운트 할 수
있습니다. 예를 들어, 뒤의 `app`은 `/path/`의 모든 하위 디렉터리를 PUT 요청으로
처리합니다.

```js
app.put('/path/:NAME', function(req, res){ /* ... */ });
```

주어진 변수는 `req.params`에 저장됩니다. 그래서, 리퀘스트 핸들러 안에서
매개변수를 추출하려면 이렇게 하면 됩니다.

```js
req.params.NAME
```

## 보너스

URL 파라메터를 파싱할 때 req.param 미들웨어를 사용할 수 있습니다.

예를 들어,

```js
app.param('id', function (req, res, next, id) {
  req.id = id
  ...
  next()
})

app.get('/message/:id', function (req, res, next) {
  console.log(req.id)
  next()
})
```
