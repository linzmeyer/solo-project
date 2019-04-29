import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClueListItem from '../../ClueListItem/ClueListItem';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';

class GameDetailsView extends Component {

  componentDidMount() {
    let action = { type: 'GET_ALL_CLUES' };
    this.props.dispatch( action );
    action = { type: 'GET_ALL_ACTIVE_CONTENT' };
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
    console.log((this.props));
    return (
      <div>
        <Header header="GAME DETAILS" />
        <Navbar currentView="GAME DETAILS" />
        <div>
          <h3>What people will discover:</h3>
          <p>{ this.props.allActiveContent.solution }</p>
        </div>
        <div>
          { this.renderClueList() }
        </div>
        <div>
          <h3>Reward:</h3>
          <p>{ this.props.allActiveContent.reward }</p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ allClues, allActiveContent }) => ({ allClues, allActiveContent });

export default connect( mapStateToProps )( GameDetailsView );
