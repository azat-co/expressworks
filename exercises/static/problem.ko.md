이 연습 문제는 HTML 파일 같은 정적 애셋 서빙에 관한 것입니다.
이 일을 하는 방법은 많지만, `index.html` 파일을 서빙하기 위해 정적 미들웨어를  적용하길 바랍니다.

`app.get`같은 라우트는 사용하지 마세요. 정적만 사용하셔야 합니다.

해결책은 반드시 `process.argv[2]`를 포트 번호로 사용해야 합니다.

`index.html`은 `process.argv[3]`로 받은 경로에서 부를 수 있어야 합니다. 하지만,
이 내용으로 파일을 직접 만드셔서 사용해도 됩니다.(공백에 주의하세요)

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
