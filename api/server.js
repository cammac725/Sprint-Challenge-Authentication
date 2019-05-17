const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')

const configureRoutes = require('../config/auth-routes');
const userRouter = require('../users/users-router')

const server = express();

server.use(morgan('dev'))
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', userRouter)

configureRoutes(server);

server.get('/', (req, res) => {
  res.send('Warp factor 12, Mr. Sulu!')
})

module.exports = server;
