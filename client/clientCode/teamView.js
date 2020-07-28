import React, { Component } from 'react';

class PokeTeamView extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log(this.props, 'coming from team')
    return (
      <div>THIS IS TEAM</div>
    )
  }
}

export default PokeTeamView