import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Footer from '../Footer/Footer';
import AboutView from '../AboutView/AboutView';
import HomeView from '../HomeView/HomeView';
import AdminHomeView from '../AdminViews/AdminHomeView/AdminHomeView';
import EditGameView from '../AdminViews/EditGameView/EditGameView';
import GameDetailsView from '../AdminViews/GameDetailsView/GameDetailsView';
import ManageUsersView from '../AdminViews/ManageUsersView/ManageUsersView';
import Clue1View from '../ClueViews/Clue1View/Clue1View';
import Clue2View from '../ClueViews/Clue2View/Clue2View';
import Clue3View from '../ClueViews/Clue3View/Clue3View';
import Clue4View from '../ClueViews/Clue4View/Clue4View';
import Clue5View from '../ClueViews/Clue5View/Clue5View';
import TrailMapView from '../TrailMapView/TrailMapView';
import pathNotFound from '../../modules/pathNotFound.js';

import './App.css';
import FinalClueView from '../ClueViews/FinalClueView/FinalClueView';
import LettersView from '../ClueViews/LettersView/LettersView';
import ProtectedRouteAdmin from '../ProtectedRouteAdmin/ProtectedRouteAdmin';
import CongratsView from '../ClueViews/CongratsView/CongratsView';

class App extends Component {
  
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div className="App-body">
          <div className="App-wrapper" >
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />

              {/* Shared Routes */}
              <Route exact path="/about" component={AboutView} />
              <Route exact path="/trail-map" component={TrailMapView} />

              {/* Admin Routes */}
              <ProtectedRouteAdmin exact path="/admin/home" component={AdminHomeView} />
              <ProtectedRouteAdmin exact path="/admin/edit-game" component={EditGameView} />
              <ProtectedRouteAdmin exact path="/admin/game-details" component={GameDetailsView} />
              <ProtectedRouteAdmin exact path="/admin/manage-users" component={ManageUsersView} />
              
              {/* User Routes */}
              <ProtectedRoute exact path="/home" component={HomeView} />
              <ProtectedRoute exact path="/clues/1" component={Clue1View} />
              <ProtectedRoute exact path="/clues/2" component={Clue2View} />
              <ProtectedRoute exact path="/clues/3" component={Clue3View} />
              <ProtectedRoute exact path="/clues/4" component={Clue4View} />
              <ProtectedRoute exact path="/clues/5" component={Clue5View} />
              <ProtectedRoute exact path="/clues/final" component={FinalClueView} />
              <ProtectedRoute exact path="/clues/congrats" component={CongratsView} />
              <ProtectedRoute exact path="/clues/letters" component={LettersView} />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <div>{ pathNotFound() }</div>} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
  )}
}

export default connect()(App);
