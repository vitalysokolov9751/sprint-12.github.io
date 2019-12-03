const cards = require('express').Router();
const path = require('path');
const readDataFromFile = require('./helpers');

cards.get('/', async (_req, res) => {
  const data = await readDataFromFile(path.resolve(__dirname, '../data/cards.json'));
  res.send(JSON.parse(data));
});

module.exports = cards;
