# sourceranks 

[libraries.io SourceRank](https://docs.libraries.io/overview#sourcerank) 
scores for every package in the npm registry

## Installation

```sh
npm install sourceranks --save
```

## Usage

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

## License

MIT
