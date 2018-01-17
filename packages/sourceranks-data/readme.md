# sourceranks-data 

a LevelDB database of detailed 
[libraries.io SourceRank](https://docs.libraries.io/overview#sourcerank) 
data for every package in the npm registry

## Installation

```sh
npm install sourceranks-data --save
```

## Usage

```js
const sourceranks = require('sourceranks-data')

sourceranks.db.createReadStream()
  .on('data', ({key, value}) => {
    value = JSON.parse(value)
    // do something with the data!
  })
  .on('end', () => {
    // reached the end of the stream
  })
```

## License

MIT
