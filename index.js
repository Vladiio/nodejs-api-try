const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');

// db setup
mongoose.connect(
  'mongodb://localhost:27017/auth',
  { useNewUrlParser: true }
);

// app setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on: ', port);
