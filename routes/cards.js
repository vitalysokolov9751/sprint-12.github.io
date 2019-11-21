const cards = require('express').Router();
const path = require('path');
const readDataFromFile = require('./helpers');
cards.get('/', (req, res) => {
  const getData = async function () {
    res.send(await readDataFromFile(path.resolve(__dirname, '../data/cards.json')));
  }
  getData();
});
module.exports = cards;