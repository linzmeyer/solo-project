import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './AboutView.css';


class AboutView extends Component {

  componentDidMount = () => {
    // Get the reward
    let action = { type: 'GET_ACTIVE_REWARD' }
    this.props.dispatch( action );
  }

  render() {
    return (
      <div className="AboutView-wrapper">
        <Header header="ABOUT" />
        <Navbar currentView="ABOUT" />

        <div>
          <h2 className="about-title" >
            <hr></hr>
            <FontAwesomeIcon icon="compass" spin />
            {' '}Your Mission{' '}
            <FontAwesomeIcon icon="compass" spin />
          </h2>
          <p>
            Find clues throughout the park. They are trivial facts about the oakdale nature preserve. They touch on the environment and ecology of this park. There is so much to learn about our often over-looked world.
          </p>
          <p>
            Each clue will prompt you to answer a question. The answer to the clue can be found by inspecting the different areas of the park. Pay attention to the hints. When the question is answered, you will unlock the next clue. Unlock and answer all of the clues in order to discover the final mystery solution. If you figure out the final solution, you will be rewarded! HAPPY HUNTING!
          </p>
        </div>

        <div>
          <hr></hr>
          <h2 className="about-title" >
            <FontAwesomeIcon icon="trophy" />
            {' '}Your Reward{' '}
            <FontAwesomeIcon icon="trophy" />
          </h2>
          <p>
            { this.props.activeReward }
          </p>
        </div>

        <div>
          <hr></hr>
          <h2 className="about-title" >
            <FontAwesomeIcon icon="microchip" />
            {' '}Tech Used To Create This App{' '}
            <FontAwesomeIcon icon="microchip" />
          </h2>
          <ul className="about-list" >
            <li><FontAwesomeIcon icon={['fab', 'react']} spin /> React / JSX</li>
            <li><FontAwesomeIcon icon="globe" /> React-Redux</li>
            <li><FontAwesomeIcon icon="retweet" /> Redux-Saga</li>
            <li><FontAwesomeIcon icon={['fab', 'node']} /> Node | npm</li>
            <li><FontAwesomeIcon icon="shipping-fast" /> Express</li>
            <li><FontAwesomeIcon icon="database" /> Postgresql</li>
            <li><FontAwesomeIcon icon="th" /> CSS Grids</li>
            <li><FontAwesomeIcon icon={['fab', 'fort-awesome']} /> Font Awesome</li>
          </ul>
        </div>

        <div>
          <hr></hr>
          <h2 className="about-title" >
            <FontAwesomeIcon icon="hourglass-start" />
            {' '}Future Features{' '}
            <FontAwesomeIcon icon="hourglass-end" />
          </h2>
          <ul className="about-list" >
            <li>Admin chooses clue count</li>
            <li>Admin can save game setups</li>
            <li>Location tracker for trail map</li>
          </ul>
        </div>

        <div>
          <hr></hr>
          <h2 className="about-title" >
            <FontAwesomeIcon icon="people-carry" />
            {' '}THANKS FOR THE SUPPORT!{' '}
            <FontAwesomeIcon icon="people-carry" />
          </h2>
          <ul className="about-list" >
            <li>Family: Laura and Monty</li>
            <li>Cohorts: Atbash, Affine, Baconia, Zaurak</li>
            <li>Prime Staff: I appreciate this awesome opportunity!</li>
            <li>And I am thankful for you!</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ activeReward }) => ({ activeReward });

export default connect( mapStateToProps )(AboutView);
