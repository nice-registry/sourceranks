const {describe, it} = require('mocha')
const {expect} = require('chai')
const sourceranks = require('..')

describe('sourceranks', function () {
  this.timeout(30 * 1000)

  it('is an object', () => {
    expect(sourceranks).to.be.an('object')
  })

  it('has hella keys', () => {
    expect(Object.keys(sourceranks).length).to.be.above(194 * 1000)
  })

  it('assigns a high rank to known healthy packages', () => {
    expect(sourceranks.express).to.be.above(28)
    expect(sourceranks.mocha).to.be.above(28)
    expect(sourceranks.react).to.be.above(28)
  })

  it('includes scoped packages', () => {
    const scopes = Object.keys(sourceranks).filter(name => name.startsWith('@'))
    expect(scopes.length).to.be.above(550)
    expect(scopes).to.include('@linclark/pkg')
  })

  it('sorts keys by rank', () => {
    const values = Object.values(sourceranks)
    const sample = [
      values[0],
      values[100],
      values[500],
      values[1000],
      values[1001],
      values[2000],
      values[20000],
      values[50000],
      values[90000],
      values[100 * 1000],
      values[200 * 1000],
      values[300 * 1000],
      values[400 * 1000],
      values[500 * 1000]
    ]
    const sortedSample = sample.slice(0).sort((a, b) => b - a)
    expect(sample).to.deep.equal(sortedSample)
  })
})
