const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes');

const server = express();

server.use(cors());
server.use(express.json());
server.use('/api/v1/users', usersRouter);
server.use('/', (req, res) => res.json({ usersRootOnline: true }));

mongoose
  .connect(/* VARIABLES DE ENTORNO */)
  .then(() => console.log('Users database connected'))
  .catch((err) => console.log(`Fail connection, error: ${err}`));

server.listen(4000, () => console.log('Users server running on port 4000'));
