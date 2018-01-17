const path = require('path')
const db = require('level')(path.join(__dirname, 'db'))

module.exports = {
  get: async (key) => {
    const data = await db.get(key)
    if (!data) return null
    return JSON.parse(data)
  },

  set: async (key, value) => {
    await db.set(key, JSON.stringify(value, null, 2))
  },

  db: db
}