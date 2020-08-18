const express = require('express');
const routes = require('./routes');

const app = express();

// Init JSON middleware
app.use(express.json());

// Init routes middleware
app.use(routes);

// Init express server
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
