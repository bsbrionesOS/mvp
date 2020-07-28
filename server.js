require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {PORT} = process.env;


// want to connect to mongodb database using mongoose
mongoose.connect('mongodb://localhost/mvp',{ useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.info('database is connected'))
.catch(error => console.error(error))

app.get('/', (req, res) => res.send('sending from server.js'))

app.listen(PORT, () => console.info(`listing on port:${PORT}`))
