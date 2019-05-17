const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')

const configureRoutes = require('../config/auth-routes');

const server = express();

server.use(morgan('dev'))
server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);

module.exports = server;
