import React, { Component } from 'react';
import PokeView from './pokeView'
import PokeTeamView from './teamView'
import axios from 'axios'



class PokeApp extends Component {
constructor(props) {
  super(props); 
  this.state = {
    currentPokemon: {},
    name: '',
    team: []
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.addToTeam = this.addToTeam.bind(this);
  this.remove = this.remove.bind(this)
 
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
// axios.get(`http://localhost:3000/pokemon/pikachu`,{headers: {'Content-Type': 'application/json'}})
//   .then(response => {
//     console.log(response, 'coming from axios get')
//   }, err => {
//     console.log(err, 'error coming from axios get')
//   })
}
///// creating a search function////
handleChange(event) {
  this.setState({
    name: event.target.value
  })
}

handleSubmit(event) {
  ////will send the get request to server/// endpoint /pokemon
  /*
  axios({
    method: 'get',
    url: localhost:3000/pokemon,
    data: {
      name: this.state.name
    }
  })

  axios.get('http://localhost:3000/pokemon, {
    name: this.state.name
  }, headers: {'Content-Type': 'application/json'})
  .then(response => {
    console.log(response)
  }, err => {
    console.log(err)
  })
  */
  event.preventDefault()
  //////working code below//////////
  const {getPokemon} = this.props

  return getPokemon(this.state.name)
 .then(pokeData => {
  this.setState({
    currentPokemon: pokeData
  })
})

}
///////////////making an add to team handle click event///////////
///////////////Handle click will sent a create request to db//////
addToTeam() {

  /*
  axios.post('http://localhost:3000/pokemon', { data: this.state.currentPokemon}, headers: {'Content-Type': 'application/json'})
  .then(res => {
    console.log(res)
  })
  */
 /////////////working code below//////////////
  if(this.state.team.length === 0) {
    this.setState({
      team: [this.state.currentPokemon]
    })
  } else {
    this.setState({
      team: [...this.state.team, this.state.currentPokemon]
    })
  }
}
////////////////Delete from db//////////////////
remove() {
console.log('click')
/*
axios.delete('http://localhost:3000/pokemon', {
  data: this.state.currentPokemon
}, headers: {'Content-Type': 'application/json'})
.then(res => {
  console.log(res)
})
*/
////////////working code below//////////////
const pokemon = this.state.team.find(poke => poke.id === this.state.currentPokemon.id)
const newA = [...this.state.team]
if(pokemon) {
  const index = this.state.team.indexOf(pokemon)
  
  newA.splice(index,1)
  this.setState({
    team: newA
  })
  console.log('complete')
}
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
          <div className='addbutton'>
            <button onClick={this.addToTeam}>Add Pokemon</button>
          </div>
          <div className='remove'>
            <button onClick={this.remove}>Remove Pokemon</button> 
          </div>
          <div className='Team'>
            <PokeTeamView team={this.state.team}/>
          </div>
      </div>
    ); 
  } 
} 

export default PokeApp;
