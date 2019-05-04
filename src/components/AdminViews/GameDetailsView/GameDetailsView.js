import React, { Component } from 'react';
import { connect } from 'react-redux';

import ClueListItem from '../../ClueListItem/ClueListItem';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import './GameDetailsView.css';

class GameDetailsView extends Component {

  componentDidMount() {
    let action = { type: 'GET_ALL_CLUES' };
    this.props.dispatch( action );
    action = { type: 'GET_ALL_ACTIVE_CONTENT' };
    this.props.dispatch( action );
  }

  renderClueList = () => {
    return (
      <div className="clues-grid" >
        { 
          this.props.allClues.map( clue =>
            <ClueListItem key={ clue.clue_number } clue={ clue } />
          )
        }
        <div className="ClueListItem-wrapper" >
          <h3>Final Clue:</h3>
          <p className="clue-description" >{ this.props.allActiveContent.clue }</p>
          <div className="card-bottom" >
            <hr></hr>
            <h4>Answer:</h4>
            <p>{ this.props.allActiveContent.solution }</p>
            <br></br>
            <h4>Reward:</h4>
            <p>{ this.props.allActiveContent.reward }</p>
          </div>
        </div>
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
          { this.renderClueList() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ allClues, allActiveContent }) => ({ allClues, allActiveContent });

export default connect( mapStateToProps )( GameDetailsView );
