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
        <div className='PokeInfo'>
        <div className='sprite'>
          <img src={pokemon.sprites.front_default} />
        </div>
      <div className='id'>{pokemon.id}</div>
      <div className='name'>{pokemon.name}</div>
      <div className='types'>{pokemon.types.map(type => {
        return <div>{type.type.name}</div>
      })}</div>
      <div className='moves'>
        <div className='move'>{pokemon.moves[0].move.name}</div>
        <div className='move'>{pokemon.moves[1].move.name}</div>
        <div className='move'>{pokemon.moves[2].move.name}</div>
        <div className='move'>{pokemon.moves[3].move.name}</div>
      </div>
        </div>
        
      );

    }

  }
}

export default PokeView;