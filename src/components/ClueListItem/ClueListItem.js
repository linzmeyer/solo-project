import React, { Component } from 'react';

class ClueListItem extends Component {

  render () {
    return (
      <div>
        <h3>Clue {this.props.clue.clue_number}</h3>
        <p>{this.props.clue.description}</p>
        <p>{this.props.clue.answer}</p>
        
        <h4>Location:</h4>
        <p>{this.props.clue.location}</p>
        <hr></hr>
      </div>
		);
  }
}

export default( ClueListItem );