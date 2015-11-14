`/home`에 접속하면 "Hello World!"를 출력하는 Express.js 앱을 만드세요.

포트 번호는 {appname}에 넘기는 첫 번째 인자(`process.argv[2]`)로 제공되어야 합니다.

연습 문제를 확인하기 전에 이전의 프로세스를 종료하기 위해 (Mac OS X의 터미널에서) `$ killall node`를 실행하세요.

윈도우에서는 "taskkill /IM node.exe"를 사용하세요.

이미 설치하지 않았다면 Express 모듈을 설치하는 것을 잊지 마세요.

```
$ npm install express --save
```

-----------------------------

## 힌트

3000 포트에서 `'/'`에 응답하는 Express.js 앱을 만드는 방법은 다음과 같습니다.

```js
var express = require('express')
var app = express()
app.get('/', function(req, res) {
  res.end('Hello World!')
})
app.listen(3000)
```

해결책에서는 고정된 포트 번호 대신 `process.argv[2]`를 사용해 주세요.

```js
app.listen(process.argv[2])
```
