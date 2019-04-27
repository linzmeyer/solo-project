import React, { Component } from 'react';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import CluesWidget from '../../CluesWidget/CluesWidget';
import '../ClueViews.css';
import { connect } from 'react-redux';

class Clue1View extends Component {

  state = {
    newUserGuess: ''
  }

  componentDidMount = () => {
    let action = { type: 'GET_ALL_CLUES' };
    this.props.dispatch( action );
  }

  handleChange = propertyName => {
    return (event) => {
      console.log(event.target.value);
      this.setState({
        newUserGuess: {
          ...this.state.newUserGuess,
          [propertyName]: event.target.value,
        }
      });
    }
  }


  render() {
    return (
      <div>
        <Header header="CLUE 1" />
        <Navbar currentView="CLUE 1" />
        <div className="clue-body" >
          <p className="paragraph">{this.props.allClues[0].description}</p>
          <CluesWidget />
          <input
            className='in'
            placeholder="Answer here"
            onChange={ this.handleChange( 'newUserGuess') }
          ></input>
          <button className='btn' >Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ allClues }) => ({ allClues });

export default connect( mapStateToProps )(Clue1View);
