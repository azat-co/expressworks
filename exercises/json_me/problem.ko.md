대부분의 경우 RESTful API 서버는 JSON으로 만듭니다.

GET 요청을 받아 파일을 읽고 JSON으로 변환해 그 내용을 응답하는 서버를
작성하세요.

서버는 `/books` 리소스 경로에 매칭하는 모든 GET에 응답해야 합니다.
항상 그랬듯이, 포트는 `process.argv[2]`로 넘겨진 것을 사용합니다. 읽을 파일은
`process.argv[3]`로 넘겨집니다.

응답은 이렇게 하세요.

```js
res.json(object)
```

모두 `/books` 리소스 경로에 매치해야 합니다.

이 파일을 읽으려면 fs 모듈을 사용하면 됩니다.

```js
fs.readFile(filename, callback)
```

-----------------------------

## 힌트

`JSON.parse`를 이용해 변환을 할 수 있습니다.

```js
object = JSON.parse(string)
```

`fs` 모듈을 설치할 필요는 없습니다. `fs`는 Node.js 플랫폼 핵심의 일부입니다.
