import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import allClues from './allCluesReducer';
import activeReward from './activeRewardReducer';
import allUsers from './allUsersReducer';
import allActiveContent from './allActiveContentReducer';
import userClueScore from './userClueScoreReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  activeReward, // contains the current reward for the game
  allActiveContent, // contains an object of the active solution
  allClues, // contains data from clues table in db
  allUsers, // contains array of data from users table in db
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  userClueScore,
});

export default rootReducer;
