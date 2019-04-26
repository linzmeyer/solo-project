import React, {Component} from 'react';
import Nav from '../../Nav/Nav';
import Header from '../../Header/Header';
import CluesWidget from '../../CluesWidget/CluesWidget';
import { connect } from 'react-redux';

class Clue2View extends Component {

  componentDidMount = () => {
    let action = { type: 'GET_ALL_CLUES' };
    this.props.dispatch( action );
  }
  
  render() {
    return (
      <div>
        <Header header="CLUE 2" />
        <Nav />
        <div className="clue-body" >
          <p className="paragraph">{this.props.allClues[1].description}</p>
          <CluesWidget />
          <input className='in' placeholder="Answer here" ></input>
          <button className='btn' >Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ allClues }) => ({ allClues });

export default connect( mapStateToProps )(Clue2View);
