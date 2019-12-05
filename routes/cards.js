const cards = require('express').Router();
const path = require('path');
const readDataFromFile = require('./helpers');

cards.get('/', async (_req, res) => {
  try {
    const data = await readDataFromFile(path.resolve(__dirname, '../data/cards.json'));
    return res.send(JSON.parse(data));
  } catch (e) {
    return res.status(500).send({ message: 'Can`t read from cards.json' });
  }
});

module.exports = cards;
