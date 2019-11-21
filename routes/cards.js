const cards = require('express').Router();
const path = require('path');
const readDataFromFile = require('./helpers');

cards.get('/', async function (req, res) {
  res.send(await readDataFromFile(path.resolve(__dirname, '../data/cards.json')))
});
module.exports = cards;