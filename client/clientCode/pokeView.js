import React, { Component } from 'react';


class PokeView extends Component { 
  constructor(props) {
    super(props)
    
  }

  render () {
    console.log(this.props, 'coming from pokeview')
    const {pokemon} = this.props
    if(Object.keys(pokemon).length === 0 ){
      return (
        <h2>pokemon rendering</h2>
      )
    } else{
      return (
        <div className='sprite'>
          <img src={pokemon.sprites.front_default} />
        </div>
      );

    }

  }
}

export default PokeView;