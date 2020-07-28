import React, { Component } from 'react';

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
  .then(pokeData => {
    this.setState({
      currentPokemon: pokeData
    })
  })
}

firstSearch() {
  const {getPokemon} = this.props
  //// call on a service that take in a number or name of pokemon//////
 //const firstPoke = this.('Typhlosion')
 return getPokemon('typhlosion')
}


  render() {
    console.log(this.state.currentPokemon)
    return (
    <h1>Pokemon, Team builder!</h1>
    ); 
  } 
} 

export default PokeApp;
