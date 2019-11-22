const users = require('express').Router();
const path = require('path');
const readDataFromFile = require('./helpers.js');

users.get('/', async function (req, res) {
  res.send(await readDataFromFile(path.resolve(__dirname, '../data/users.json')))
});

users.get('/:id', async function (req, res) {
  const { id } = req.params;
  let data = await readDataFromFile(path.resolve(__dirname, '../data/users.json'));
  try {
    data = JSON.parse(data);
  }
  catch {
    return res.status(500).send({ "message": 'Bad users.json' });
  }
  usersArray = Object.values(data).map(value => Object.values(value));
  const user = usersArray.find(user => {
    return user[3] === id;
  });
  if (user) {
    res.send(user);
  }
  else {
    res.status(404).send({ "message": `Нет пользователя с id ${id}` });
  }
});

module.exports = users;