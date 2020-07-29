require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {PORT} = process.env;
const {getPokemon} = require('./client/clientCode/services')
const cors = require('cors')

app.use(cors())

/////////////////create schemea for db//////////////////////
// need to add id, name, the whole object?, image, url
///////find, create, update, and delete objects /////////

const Schema = mongoose.Schema

const Pokemon = new Schema({
  id: String,
  Name: String
})

///defining schema //// one to many///// objectid?
///// to hold the team object/////
const pokemonTeam = []




// want to connect to mongodb database using mongoose
mongoose.connect('mongodb://localhost/mvp',{ useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.info('database is connected'))
.catch(error => console.error(error))
/////////////// router that will get data from api???///////// 
app.get('/pokemon', (req, res) => {
  // will call api with the thing
  // will send back thing
  res.send('sending from server.js')})

//////////////router post/create to team db///////////////////
app.post('/pokemon', (req, res) => {

})

/////////////router delete from team to db////////////////////
app.delete('/pokemon', (req, res) => {
  
})

app.listen(PORT, () => console.info(`listing on port:${PORT}`))
