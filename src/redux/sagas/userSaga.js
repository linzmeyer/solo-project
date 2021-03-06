import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch ( error ) {
    console.log('User get request failed', error);
  }
}

function* deleteUser( action ) {
  try {
    // action.payload = user.id
    yield axios.delete( `api/user/delete/${ action.payload }` )
    yield put( { type: 'GET_ALL_USERS' });
  } catch ( error ) {
    console.log( 'Problem with userSaga DELETE_USER', error );
  }
}

function* updateUserClueScore( action ) {
  try {
    console.log('hit updateUserClueScore. Payload:', action.payload );
    // action.payload is an object with the user id and new score value
    yield axios.put( `/api/user-clue-score`, action.payload );
    action = { type: 'GET_USER_CLUE_SCORE' }
    yield put( action );
  } catch ( error ) {
    console.log( 'Problem with userSaga UPDATE_USER_CLUE_SCORE', error );
  }
}

function* getUserClueScore( action ) {
  try {
    console.log( 'hit getUserClueScore.' );
    // action.payload is an object with the user id
    const getResponse = yield axios.get( `/api/user-clue-score` );
    action = {type: 'SET_USER_CLUE_SCORE', payload: getResponse.data.clue_score};
    yield put( action );
  } catch ( error ) {
    console.log( 'Problem with userSaga GET_USER_CLUE_SCORE', error );
  }
}

function* userSaga() {
  yield takeLatest( 'FETCH_USER', fetchUser );
  yield takeLatest( 'DELETE_USER', deleteUser );
  yield takeLatest( 'UPDATE_USER_CLUE_SCORE', updateUserClueScore );
  yield takeLatest( 'GET_USER_CLUE_SCORE', getUserClueScore );
}

export default userSaga;
