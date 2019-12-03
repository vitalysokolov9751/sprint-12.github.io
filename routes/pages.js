module.exports = require('express').Router().use('*', (req, res) => {
  res.status(404).send({ error: 'error 404' });
});
