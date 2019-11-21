const page404 = require('express').Router();

page404.get('*', (req, res) => {
  res.status(404).send({ "error": `error 404` });
});

module.exports = page404;