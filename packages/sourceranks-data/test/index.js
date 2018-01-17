require('chai').should()

const {describe, it} = require('mocha')
const test = it
const sourceranks = require('..')

describe('sourcerank-data', function () {
  this.timeout(120 * 1000)

  test('.get()', async () => {
    const express = await sourceranks.get('express')
    express.should.be.an('object')
    express.total.should.be.above(25)
  })

  it('exposes a streamable leveldb instance', (done) => {
    let bad = 0
    let good = 0
    var stream = sourceranks.db.createReadStream()
      .on('data', ({key, value}) => {
        value = JSON.parse(value)
        if (value.scores && value.total) {
          good++
        } else {
          bad++
        }
      })
      .on('end', () => {
        good.should.be.above(500 * 1000)
        bad.should.be.above(10 * 1000).and.below(20 * 1000)
        done()
      })
  })
})