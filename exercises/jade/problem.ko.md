Jade 템플릿 엔진으로 렌더되는 홈페이지를 가지는 Express.js 앱을 만드세요.

홈페이지는 `/home`에 응답해야 합니다.

뷰에서 'new Date.toDateString()'를 이용해 현재 시간을 표시해야 합니다.

'toDateString()'를 사용해 간단히 시간을 재외하고 사람이 읽을 수 있는 형식으로
날짜를 반환할 수 있습니다.

-----------------------------

## 힌트

Jade 템플릿 파일 `index.jade` 는 이런 내용이어야 합니다.

```jade
h1 Hello World
p Today is #{date}.
```

제공된 `index.jade`를 사용할 수 있습니다.(추천) `index.jade`의 경로는 `process.argv[3]`에 제공될 것입니다.
물론, Jade을 직접 만드셔도 됩니다. 제공된 것과 완전히 같은지만 확인하세요.

폴더가 `'templates'`라고 하면 일반적인 Express.js 앱에서 경로를 지정하는 방법은 다음과 같습니다.

```js
app.set('views', path.join(__dirname, 'templates'))
```

`__dirname`은 이 파일의 절대 경로고 path.join은 크로스 플렛폼 경로를 만드는데 사용합니다.(Win vs. Linux/Mac)

Express.js 앱에 어떤 템플릿 엔진을 사용할 지 알리려면, 다음 줄을 Express.js의
설정에 추가하세요.

```js
app.set('view engine', 'jade')
```

헬로우 월드에서 사용한 `res.end()`대신, `res.render()` 함수에 템플릿 이름과
데이터(locals라 부름)를 받습니다.

```js
res.render('index', {date: new Date().toDateString()})
```

사람이 읽을 수 있는 형식으로 시간을 제외한 날짜를 반환하려면
`toDateString()`를 사용합니다.

--------------------------------

## 주의

처음 프로젝트를 만들 때, npm으로 `jade` 의존성을 설치해야 합니다.
이 패키지(expressworks)에 `$ npm install`을 실행하려면, jade를 설치해둘 필요가 있습니다.

다시 말하지만, 애플리케이션에 {appname}가 `process.argv[2]`로 넘기는 포트를
사용해야 합니다.

`Error: Cannot find module 'jade'`라는 에러가 나왔다면, Express가 지금 경로에서 Jade를 찾기 때문입니다. `npm install jade`를 실행해 이 문제를 고칠 수 있습니다.
