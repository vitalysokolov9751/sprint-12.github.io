const users = require('express').Router();
const path = require('path');
const readDataFromFile = require('./helpers.js');

users.get('/', async (req, res) => {
  const data = await readDataFromFile(path.resolve(__dirname, '../data/users.json'));
  res.format({
    // eslint-disable-next-line func-names
    'application/json': function () {
      res.send(data);
    },
  });
});

users.get('/:id', async (req, res) => {
  const { id } = req.params;
  let data = await readDataFromFile(path.resolve(__dirname, '../data/users.json'));
  try {
    data = Object.values(JSON.parse(data)).map((value) => Object.values(value));
  } catch (e) {
    return res.status(500).send({ message: 'Bad users.json' });
  }
  // eslint-disable-next-line no-shadow
  const user = data.find((user) => user[3] === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: `Нет пользователя с id ${id}` });
  }
  return user;
});

module.exports = users;
