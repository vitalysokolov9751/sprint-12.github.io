/* eslint-disable linebreak-style */
const express = require('express');

const { PORT = 3000 } = process.env;

const path = require('path');

const app = express();
const cards = require('./routes/cards');
const users = require('./routes/users');
const pages = require('./routes/pages');

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});
app.use('/cards', cards);
app.use('/users', users);
app.use('/users/:id', users);
app.use('*', pages);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
