import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';


class AdminHomeView extends Component {
  render() {
    return (
      <div>
        <Header header="ADMIN HOME" />
        <h1 id="welcome">
          Welcome, { this.props.user.username }!
        </h1>
        <p>Your ID is: {this.props.user.id}</p>
        <p>Your login mode is: {this.props.loginMode}</p>
        <img src="./bridge.jpg" alt="Bridge in nature preserve" />
        <div>
          <Link to='/admin/game-details'><button>GAME DETAILS</button></Link>
        </div>
        <div>
          <Link to='/admin/edit-game'><button>EDIT GAME</button></Link>
        </div>
        <div>
          <Link to="/admin/manage-users"><button>MANAGE USERS</button></Link>
        </div>
        <div>
          <Link to="/trail-map" >
            <button>TRAIL MAP</button>
          </Link>
        </div>
        <div>
          <Link
            to="/"
            onClick={ () => this.props.dispatch({ type: 'LOGOUT' }) }
          >Sign Out</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, loginMode }) => ({ user, loginMode });

export default connect( mapStateToProps )( AdminHomeView );