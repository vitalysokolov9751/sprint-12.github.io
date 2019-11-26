module.exports = require('express').Router().get('*', (req, res) => {
  res.status(404).send({ error: 'error 404' });
});
