import React, {Component} from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import './AboutView.css';
import Nav from '../Nav/Nav';


class AboutView extends Component {

  componentDidMount = () => {
    // Get the reward
    let action = { type: 'GET_ACTIVE_REWARD' }
    this.props.dispatch( action );
  }

  render() {
    return (
      <div className="AboutView-wrapper">
        <Header header="About" />
        <Nav />
        <div className="card" >
          <h2>Your Mission</h2>
          <p>Incididunt fugiat ad est qui aliqua non eu qui et ut et laboris. Ullamco sit exercitation cupidatat enim commodo. Adipisicing eiusmod laboris dolor proident labore sint proident duis sint ad aliquip amet.</p>
        </div>
        <div className="card" >
          <h2>Your Reward</h2>
          { this.props.activeReward }
        </div>
        <div className="card" >
          <h2>About This App</h2>
          <p>Anim nulla cillum id proident proident sint voluptate do nisi in culpa et do ad. Amet voluptate nisi deserunt proident pariatur. In mollit magna qui fugiat eu. Sit fugiat labore aliqua irure tempor. Excepteur sunt enim nisi adipisicing. Esse minim laborum deserunt nostrud excepteur ipsum reprehenderit officia laboris laboris deserunt.</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ activeReward }) => ({ activeReward });

export default connect( mapStateToProps )(AboutView);
