Jade 템플릿 엔진으로 렌더되는 홈페이지를 가지는 Express.js 앱을 만드세요.

홈페이지는 `/home`에 응답해야 합니다.

뷰에서 `toDateString`를 이용해 현재 시간을 표시해야 합니다.

-----------------------------

## 힌트

Jade 템플릿 파일 index.jade는 이런 내용으로 이미 제공됩니다.

```jade
h1 Hello World
p Today is #{date}.
```

폴더가 `'templates'`라고 하면 일반적인 Express.js 앱에서 경로를 지정하는 방법은
다음과 같습니다.

```js
app.set('views', path.join(__dirname, 'templates'))
```

하지만, 제공된 `index.jade`를 사용하려면, `index.jade`의 경로는
`process.argv[3]`으로 넘겨야 합니다. 직접 만든 jade 파일을 사용하셔도 됩니다!

Express.js 앱에 어떤 템플릿 엔진을 사용할 지 알리려면, 다음 줄을 Express.js의
설정에 추가하세요.

```js
app.set('view engine', 'jade')
```

헬로우 월드에서 사용한 `res.end()`대신, `res.render()` 함수에 템플릿 이름과
프리젠터 데이터를 받습니다.

```js
res.render('index', {date: new Date().toDateString()})
```

사람이 읽을 수 있는 형식으로 시간을 제외한 날짜를 반환하려면
`toDateString()`를 사용합니다.

--------------------------------

## 주의

처음 프로젝트를 만들 때, npm으로 `jade` 의존성을 설치해야 합니다.

다시 말하지만, 애플리케이션에 {appname}가 `process.argv[2]`로 넘기는 포트를
사용해야 합니다.
