Crie uma aplicação Express.js que retorna "Hello World!" quando alguém vai para `/home`.

O número da porta será fornecido a você pelo {appname} como primeiro argumento da aplicação, i.e., `process.argv[2]`.

Rode `$ killall node`  antes de verificar os exercícios (No seu terminal no Mac OS X) para terminal o processo anterior.

Para Windows, use "taskkill /IM node.exe" no seu Prompt de comando.

Não se esqueça de instalar o módulo Express se você ainda não tiver instalado.

```
$ npm install express --save
```

-----------------------------

## DICAS

Assim é como nós criamos uma aplicação Express.js que escuta a porta 3000 e retorna uma string quando acessamos o caminho `'/'`:

```js
const express = require('express')
const app = express()
app.get('/', function(req, res) {
  res.end('Hello World!')
})
app.listen(3000)
```

Na sua solução, por favor use `process.argv[2]`ao invés de passar o número fixo da porta:

```js
app.listen(process.argv[2])
```

Videos: http://bit.ly/1jW1sBf.
