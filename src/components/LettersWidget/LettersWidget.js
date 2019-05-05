import React, { Component } from 'react';
import { connect } from 'react-redux';

class LettersWidget extends Component {

  componentDidMount = () => {
    let action = { type: 'GET_USER_CLUE_SCORE' };
    this.props.dispatch( action );
    action = { type: 'GET_ALL_ACTIVE_CONTENT' };
    this.props.dispatch( action );
  }

  renderLetters = () => {
    let solution = this.props.letters;

    solution.sort();

    // init an array to hold the letters of the sorted solution
    const lettersToDisplay = [];

    // set the amount of characters to be shown at different stages of the game.
    let stage1 = Math.ceil(solution.length * .2); // 20% of characters
    let stage2 = Math.ceil(solution.length * .4); // 40% of characters
    let stage3 = Math.ceil(solution.length * .6); // 60% of characters
    let stage4 = Math.ceil(solution.length * .8); // 80% of characters
    let stage5 = Math.ceil(solution.length); // all characters
    
    // if userScore is 2, push 20% of the letters into array
    if ( this.props.userClueScore === 2 ) {
      for ( let i = 0; i < stage1; i++ ) {
        lettersToDisplay.push( <div key={i} >{solution[i]}</div> )
      }
    } // if userScore is 3, push 40% of the letters into array
    if ( this.props.userClueScore === 3 ) {
      for ( let i = 0; i < stage2; i++ ) {
        lettersToDisplay.push( <div key={i} >{solution[i]}</div> )
      }
    } // if userScore is 4, push 60% of the letters into array
    if ( this.props.userClueScore === 4 ) {
      for ( let i = 0; i < stage3; i++ ) {
        lettersToDisplay.push( <div key={i} >{solution[i]}</div> )
      }
    } // if userScore is 5, push 80% of the letters into array
    if ( this.props.userClueScore === 5 ) {
      for ( let i = 0; i < stage4; i++ ) {
        lettersToDisplay.push( <div key={i} >{solution[i]}</div> )
      }
    } // if userScore is 1, push 100% of the letters into array
    if ( this.props.userClueScore >= 6 ) {
      for ( let i = 0; i < stage5; i++ ) {
        lettersToDisplay.push( <div key={i} >{solution[i]}</div> )
      }
    }

    // return the letters to display based on user's score
    return lettersToDisplay;
  }

  render() {
    console.log(this.props);
    return (
      <div className="letters-wrapper">
        <div className="letters">
          { this.renderLetters() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userClueScore, allActiveContent, letters }) => ({ userClueScore, allActiveContent, letters });

export default connect( mapStateToProps )( LettersWidget );
