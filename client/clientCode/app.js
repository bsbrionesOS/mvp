import React from 'react';
import { render } from 'react-dom';

import PokeApp from './pokeApp';
import { pokeUrl } from './pokemonApi/pokemonApi';
import {getPokemon} from './services';

render(<PokeApp getPokemon={getPokemon}/>, document.getElementById('app-root'));