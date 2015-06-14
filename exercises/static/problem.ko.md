라우트 없이 `index.html`을 제공하는 정적 미들웨어를 만들어 봅시다.

해결책은 반드시 `process.argv[2]`를 포트 번호로 사용해야 합니다.

`index.html`은 `process.argv[3]`로 받은 경로에서 부를 수 있어야 합니다. 하지만,
이 내용으로 파일을 직접 만드셔서 사용해도 됩니다.

```html
<html>
  <head>
    <title>expressworks</title>
    <link rel="stylesheet" type="text/css" href="/main.css"/>
  </head>
  <body>
    <p>I am red!</p>
  </body>
</html>
```

-----------------------------

## 힌트

정적 미들웨어를 호출하는 방법은 다음과 같습니다.

```js
app.use(express.static(path.join(__dirname, 'public')))
```

이 연습 문제에서는 {appname}가 경로를 넘겨줍니다.

```js
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
```
