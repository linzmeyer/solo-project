import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClueListItem from '../../ClueListItem/ClueListItem';
import Header from '../../Header/Header';
import Nav from '../../Nav/Nav';

class GameDetailsView extends Component {

  componentDidMount() {
    let action = { type: 'GET_ALL_CLUES' };
    this.props.dispatch( action );
  }

  renderClueList = () => {
    return (
      <div>
        { 
          this.props.allClues.map( clue =>
            <ClueListItem key={ clue.clue_number } clue={ clue } />
          )
        }
      </div>
    );
  }

  render() {
    console.log((this.props.allClues));
    return (
      <div>
        <Header header="Game Details" />
        <Nav />
        <div>
          <h3>What people will discover:</h3>
          {/* <p>final solution reducer</p> */}
        </div>
        <div>
          {this.renderClueList()}
        </div>
        <div>
          <h3>Reward:</h3>
          {/* reward reducer */}
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ allClues, solution }) => ({ allClues, solution });

export default connect( mapStateToProps )( GameDetailsView );
