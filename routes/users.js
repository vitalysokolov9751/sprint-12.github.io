const users = require('express').Router();
const path = require('path');
const readDataFromFile = require('./helpers.js');
users.get('/', (req, res) => {
  const getData = async function () {
    res.send(await readDataFromFile(path.resolve(__dirname, '../data/users.json')));
  }
  getData();
});
users.get('/:id', (req, res) => {
  const { id } = req.params;
  const getData = async function () {
    let usersArray = JSON.parse(await readDataFromFile(path.resolve(__dirname, '../data/users.json')));
    usersArray = Object.values(usersArray).map(value => Object.values(value));
    const user = usersArray.find(user => {
      return user[3] === id;
    });
    if (user) {
      res.send(user);
    }
    else {
      res.status(404).send({ "message": `Нет пользователя с id ${id}` });
    }
  }
  getData();
});
module.exports = users;