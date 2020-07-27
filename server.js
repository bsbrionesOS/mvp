require('dotenv').config();
const express = require('express');
const app = express();
const {PORT} = process.env;

app.listen(PORT, () => console.info(`listing on port:${PORT}`))
