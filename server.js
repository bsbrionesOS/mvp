require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {PORT} = process.env;
const {getPokemon} = require('./client/clientCode/services')
const cors = require('cors');
const axios = require('axios');

app.use(cors())
app.use(express.json())
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
app.get('/pokemon/:id', (req, res) => {
  // will call api with the thing
  // will send back thing
  // const nameOfPoke = req.params.ID
  // error handling
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
  .then(response => {
    console.log(response.data, 'coming from server axios get')
    res.send(response.data)
    //now that i have the response i want to send it to client
  }, err => {
    console.log(err, 'error coming from server axios get')
  })
  //res.send(response)
  
  //console.log('hello im a request', req.params.id)
 // res.send('THIS IS A STRING IN THE SERVER')
})

//////////////router post/create to team db///////////////////
app.post('/pokemon', (req, res) => {

})

/////////////router delete from team to db////////////////////
app.delete('/pokemon', (req, res) => {
  
})

app.listen(PORT, () => console.info(`listing on port:${PORT}`))
