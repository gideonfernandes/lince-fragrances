const express = require('express');
const { resolve } = require('path');
const routes = require('./routes');
require('./database');

const app = express();

// Init JSON middleware
app.use(express.json());

// Init static files middleware
app.use('/files', express.static(resolve(__dirname, '..', 'uploads')));

// Init routes middleware
app.use(routes);

// Init express server
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
