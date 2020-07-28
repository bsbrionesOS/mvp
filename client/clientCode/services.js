import { pokeUrl } from './pokemonApi/pokemonApi'

export function getPokemon (name) {
  return new Promise ((resolve, reject) => {
    fetch(`${pokeUrl}/${name}`)
    .then(res => res.json())
    .then(data => resolve(data))
  })
}

