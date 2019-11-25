const cards = require('express').Router()
const path = require('path')
const readDataFromFile = require('./helpers')

cards.get('/', async function (req, res) {
  const data = await readDataFromFile(path.resolve(__dirname, '../data/cards.json'));
  res.format({
    'application/json': function () {
      res.send(data)
    },
  })
})

module.exports = cards;