import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET Projects List
function* getAllUsers( action ) {
  console.log( 'Hit the getAllUsers saga', action );
  try {
    // expecting to get an array of objects from db
    const getResponse = yield axios.get( '/api/all-users' );
    console.log( 'getAllUsers response:', getResponse );
    action = { type: 'SET_ALL_USERS', payload: getResponse.data };
    // dispatch action to allUsers reducer to update list of users
    yield put( action );
  }
  catch ( error ) {
    console.log( `Problem with getAllUsers saga`, error );
    alert( `Sorry, couldn't get the users. Try again later` );
  }
}

function* getAllUsersSaga() {
  yield takeLatest('GET_ALL_USERS', getAllUsers);
}

export default getAllUsersSaga;