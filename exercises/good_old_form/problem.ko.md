폼은 중요합니다. 이 연습문제는 어떻게 전통적인(ajax가 아닌) 웹 폼을 처리하는지 알려줄 것입니다.

HTML 폼(`<form><input name="str"/></form>`) 입력을 처리하고 `str` 값을 뒤집어
출력하는 `'/form'` 경로를 작성하세요.

POST 요청을 다루기 위해 `get()`과 사용법이 같은 `post()` 메소드를 사용합니다.

```js
app.post('/path', function(req, res){...})
```

Express.js에서 웹 서버에 추가 기능을 넣으려면 미들웨어를 사용하시면 됩니다.

그냥 미들웨어를 넣으세요. 미들웨어는 요청 핸들러가 실행되기 전에 Express.js가
호출하는 함수입니다.

미들웨어는 로그, 정적 파일 제공, 에러 처리같은 많은 종류의 일을 수행할 수 있습니다.

미들웨어는 애플리케이션에서 미들웨어 매개변수와 함께 `use()`를 호출해서 추가할
수 있습니다.

`x-www-form-urlencoded` 요청 몸통을 파싱하기 위해, Express.js에서는 `body-parser`
모듈에 있는 `urlencoded()` 미들웨어를 사용할 수 있습니다.

```js
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: false}))
```

-----------------------------

## 힌트

문자열을 뒤집는 방법은 다음과 같습니다. (그냥 방법중 하나일 뿐입니다)

```js
req.body.str.split('').reverse().join('')
```

extended는 true (qs)나 false (querystring)로 설정해 파서 모듈을 결정합니다.

미들웨어를 연결하는 방법은 여기서 보실 수 있습니다.

  https://github.com/senchalabs/connect#middleware

body-parser 모듈의 문서는 여기서 보실 수 있습니다.

  https://github.com/expressjs/body-parser

----------------------------

## 주의

프로젝트를 처음 만들 때, 터미널에서 npm으로 `body-parser` 의존성을 설치해야 합니다.

```sh
$ npm install body-parser
```

다시 말하지만, 애플리케이션에 {appname}가 `process.argv[2]`로 넘기는 포트를
사용해야 합니다.
