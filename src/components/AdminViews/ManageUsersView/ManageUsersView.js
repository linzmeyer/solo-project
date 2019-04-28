import React, {Component} from 'react';
import { connect } from 'react-redux';

import Header from '../../Header/Header';
import './ManageUsersView.css';
import UserListItem from '../UserListItem/UserListItem';
import Navbar from '../../Navbar/Navbar';

class ManageUsersView extends Component {

  componentDidMount = () => {
    // get all users
    let action = { type: "GET_ALL_USERS" }
    this.props.dispatch( action );
  }

  renderUserList = () => {
    return (
      <div className="userList-wrapper">
        { 
          this.props.allUsers.map( user =>
            <UserListItem key={ user.id } user={ user } />
          )
        }
      </div>
    );
  }

  render() {
    console.log('props:', this.props );
    return (
      <div>
        <Header header="MANAGE USERS" />
        <Navbar currentView="MANAGE USERS" />
        <div className="grid-title">
          <h3>Username</h3>
          <h3>Delete</h3>
        </div>
        <hr></hr>
        { this.renderUserList() }
      </div>
    );
  }
}

const mapStateToProps = ({ allUsers }) => ({ allUsers });

export default connect( mapStateToProps )( ManageUsersView );