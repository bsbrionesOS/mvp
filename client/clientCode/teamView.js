import React, { Component } from 'react';
import PokeView from './pokeView'

class PokeTeamView extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { team } = this.props
    console.log(this.props, 'coming from team')
    return (
      <div className='team'>
        <div className='teamHeader'>Your Pokemon Team</div>
        
        <div className='poketeam'>
        {team.map(pokemon => {

          return <div className='YourPokemon'>
              <PokeView pokemon={pokemon} />
          </div>

          
         
        })}
        

      </div>
      </div>
    )
  }
}

export default PokeTeamView