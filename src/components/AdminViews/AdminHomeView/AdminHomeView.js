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
            <Link to="/admin/edit-game" className="nav-item" >
              <FontAwesomeIcon icon={["far", "edit"]} />
              {' '}Edit Discovery Game{' '}
              <FontAwesomeIcon icon={["far", "edit"]} />
            </Link>
          </div>
          <div>
            <Link to="/admin/game-details" className="nav-item" >
              <FontAwesomeIcon icon="scroll" />
              {' '}Current Game Details{' '}
              <FontAwesomeIcon icon="scroll" />
            </Link>
          </div>
          <div>
            <Link to="/admin/manage-users" className="nav-item" >
              <FontAwesomeIcon icon="users" />
              {' '}Manage Users{' '}
              <FontAwesomeIcon icon="users" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, loginMode }) => ({ user, loginMode });

export default connect( mapStateToProps )( AdminHomeView );