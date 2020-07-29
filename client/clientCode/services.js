const { pokeUrl } = require('./pokemonApi/pokemonApi')
//// i can make the api request here///////
///////////////axios read?//////////////////////
const getPokemon = function (name) {
  return new Promise ((resolve, reject) => {
    fetch(`${pokeUrl}/${name}`)
    .then(res => res.json())
    .then(data => resolve(data))
  })
}

module.exports.getPokemon = getPokemon