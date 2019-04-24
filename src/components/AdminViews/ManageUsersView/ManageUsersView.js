import React, {Component} from 'react';
import Nav from '../../Nav/Nav';
import Header from '../../Header/Header';
import './ManageUsersView.css';

class ManageUsersView extends Component {
  render() {
    return (
      <div>
        <Header header="Manage Users" />
        <Nav />
        <div className="card-body">
          <h3>Username</h3>
          <h3>Delete</h3>
          {/* List (map) of users from db */}
        </div>


      </div>
    );
  }
}

export default ManageUsersView;