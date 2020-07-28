import React, { Component } from 'react';
import PokeView from './pokeView'


class PokeApp extends Component {
constructor(props) {
  super(props); 
  this.state = {
    currentPokemon: {},
    name: ''
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

///// during first render of pokeApp i would want a pokemon already up///
componentDidMount() {
  this.firstSearch()
}
//// creating the first search function
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
///// creating a search function////
handleChange(event) {
  this.setState({
    name: event.target.value
  })
}

handleSubmit(event) {
  event.preventDefault()
  const {getPokemon} = this.props

  return getPokemon(this.state.name)
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
          <div className='form'>
            <form onSubmit={this.handleSubmit}> 
              <label>
                PokeName:
                <input type='text' value={this.state.name} onChange={this.handleChange}/>
              </label>
              <input type='submit' value="Submit" />
            </form>
          </div>
          <PokeView pokemon={this.state.currentPokemon}/>
      </div>
    ); 
  } 
} 

export default PokeApp;
