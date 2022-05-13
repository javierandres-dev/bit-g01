const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes');

const server = express();

server.use(express.json());
server.use('/api/v1/users', usersRouter);
server.use('/', (req, res) => res.json({ usersRootOnline: true }));

mongoose
  .connect('mongodb://localhost/bitUsers')
  .then(() => console.log('Users database connected'))
  .catch((err) => console.log(`Fail connection, error: ${err}`));

server.listen(4100, () => console.log('Users server running on port 4100'));
