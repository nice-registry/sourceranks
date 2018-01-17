#!/usr/bin/env node

const db = require('level')('./db')
const fs = require('fs')
const path = require('path')
const totals = []
const outputFile = path.join(__dirname, '../../sourceranks/index.json')

db.createReadStream()
  .on('data', async ({key, value}) => {
    value = JSON.parse(value)
    if (value.total) {
      totals.push({
        name: key,
        total: value.total
      })
    }
  })
  .on('end', () => {
    const output = totals
      .sort((a, b) => b.total - a.total)
      .reduce((acc, curr) => {
        console.log(curr.name, curr.total)
        acc[curr.name] = curr.total
        return acc
      }, {})

    fs.writeFileSync(outputFile, JSON.stringify(output, null, 2))
    const count = Object.keys(output).length
    console.log(`Wrote ${count} sourceranks to ${outputFile}`)
  })