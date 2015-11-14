스타일 없는 HTML은 지루합니다. 이 연습 문제에서는 어떻게 Stylus를 Express에서 사용하는지 알려 드리겠습니다.

"스태틱" 연습 문제에 Stylus 미들웨어를 사용해 HTML에 스타일을 넣어보겠습니다.
Stylus <https://github.com/stylus/stylus>는 .styl 파일에서 .css 파일을
생성합니다.

해결책은 `GET` 요청을 처리하기 위해  `process.argv[2]`로 넘겨진 포트 번호를
사용해야 합니다. 요청 중에는 Stylus 미들웨어에서 자동으로 생성된 `main.css`도
있어야 합니다. `index.html`와 `main.styl`은 `process.argv[3]`에서 찾아야 합니다.
(같은 디렉터리에 있어야 합니다.)

그러고 싶다면 파일을 직접 만들어 사용해도 됩니다.

`main.styl` 파일은 이렇습니다.

```stylus
p
  color red
```

`main.styl` 파일은 이렇습니다.

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

`app.use` 사용해 Stylus 미들웨어를 적용할 수 있습니다.
이렇게 하시면 됩니다.

```js
app.use(require('stylus').middleware('/path/to/*.styl'))
```

"스태틱" 연습 문제에서 만든 것 이외에도, 정적 파일을 제공할 필요가 있습니다.
미들웨어는 `app.use`가 불린 순서대로 실행되는 것에 주의하세요!

## 주의

프로젝트에서 사용하려면 다른 의존성과 마찬가지로 Stylus도 설치해야 합니다.

```sh
$ npm install stylus
```
