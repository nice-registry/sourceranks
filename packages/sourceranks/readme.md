# sourceranks 

[libraries.io SourceRank](https://docs.libraries.io/overview#sourcerank) 
scores for every package in the npm registry

## Installation

```sh
npm install sourceranks --save
```

## Programmatic Usage

This module exports a single object.

Keys are package names. Values are [SourceRank scores](https://docs.libraries.io/overview#sourcerank)

```js
const sourceranks = require('sourceranks')

sourceranks.babel
// 32
```

It includes scoped packages too:

```js
sourceranks['@angular/cli']
// 26
```

## CLI Usage

`sourcenames` is also available as a command-line tool which accepts one or many
package names and prints out their sourcerank scores:

```sh
npm i -g sourcenames
sourcenames choo chai chalk
```

The CLI can also read from newline-delimited standard input.

Pair `sourcenames` with the [`depnames`](https://github.com/nice-registry/depnames)
CLI to view sourceranks for all the dependencies of a given package:

```
npm i -g sourcenames depnames
depnames superagent | sourcenames

component-emitter 24
cookiejar 20
debug 28
extend 25
form-data 25
formidable 24
methods 23
mime 27
qs 25
readable-stream 25
```

## License

MIT
