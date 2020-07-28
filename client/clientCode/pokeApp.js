import React, { Component } from 'react';
import PokeView from './pokeView'

class PokeApp extends Component {
constructor(props) {
  super(props); 
  this.state = {
    currentPokemon: {}
  }

}

///// during first render of pokeApp i would want a pokemon already up///
componentDidMount() {
  this.firstSearch()
  // .then(pokeData => {
  //   this.setState({
  //     currentPokemon: pokeData
  //   })
  // })
}

firstSearch() {
  const {getPokemon} = this.props
  //// call on a service that take in a number or name of pokemon//////
 //const firstPoke = this.('Typhlosion')
 return getPokemon('typhlosion')
 .then(pokeData => {
  this.setState({
    currentPokemon: pokeData
  })
})
}


  render() {
    console.log(this.state.currentPokemon)
    
    return (
      <div>
        <h1>Pokemon, Team builder!</h1>
        <div className='Pokeinfo'>
          <PokeView pokemon={this.state.currentPokemon}/>
        </div>
     
    

      </div>
    ); 
  } 
} 

export default PokeApp;
