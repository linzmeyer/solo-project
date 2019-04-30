import React, { Component } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import CluesWidget from '../../CluesWidget/CluesWidget';
import { connect } from 'react-redux';
import '../ClueViews.css';

class LettersView extends Component {

  componentDidMount = () => {
    let action = { type: 'GET_USER_CLUE_SCORE' };
    this.props.dispatch( action );
    action = { type: 'GET_ALL_ACTIVE_CONTENT' };
    this.props.dispatch( action );
  }

  renderLetters = () => {
    let solution = this.props.letters;
    let result = [];
    for ( let i = 0; i < (solution.length - 3); i++ ) {
      result.push( <div key={i} >Item number: {solution[i]}</div> )
    }
    return result;
  }

  render() {
    console.log(this.props.letters);
    return (
      <div>
        <Header header="LETTERS" />
        <Navbar currentView="CLUE 1" />
        <div className="clue-body" >
          <p className="paragraph">Unscramble the letters to discover the solution to the final clue.</p>
          <CluesWidget userScore={ this.props.userClueScore } />
          { this.renderLetters() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userClueScore, allActiveContent, letters }) => ({ userClueScore, allActiveContent, letters });

export default connect( mapStateToProps )( LettersView );
