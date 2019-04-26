import React, {Component} from 'react';
import Navbar from '../../Navbar/Navbar';
import Header from '../../Header/Header';
import CluesWidget from '../../CluesWidget/CluesWidget';
import { connect } from 'react-redux';

class Clue3View extends Component {

  componentDidMount = () => {
    let action = { type: 'GET_ALL_CLUES' };
    this.props.dispatch( action );
  }
  
  render() {
    return (
      <div>
        <Header header="CLUE 3" />
        <Navbar currentView="CLUE 3" />
        <div className="clue-body" >
          <p className="paragraph">{this.props.allClues[2].description}</p>
          <CluesWidget />
          <input className='in' placeholder="Answer here" ></input>
          <button className='btn' >Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ allClues }) => ({ allClues });

export default connect( mapStateToProps )(Clue3View);
