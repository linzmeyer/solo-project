import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminHomeView.css';


class AdminHomeView extends Component {
  render() {
    return (
      <div>
        <Header header="ADMIN HOME" />
        <Navbar currentView="ADMIN HOME" />
        <h1 id="welcome">Welcome, { this.props.user.username }!</h1>
        <div className="admin-home-links" >
          <div>
            <Link to="/admin/edit-game" >
              <button>Edit Discovery Game</button>
            </Link>
          </div>

          <div>
            <Link to="/admin/game-details" className="nav-item" >
              <button>Current Game Details</button>
            </Link>
          </div>

          <div>
            <Link to="/admin/manage-users" className="nav-item" >
              <button>Manage Users</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, loginMode }) => ({ user, loginMode });

export default connect( mapStateToProps )( AdminHomeView );