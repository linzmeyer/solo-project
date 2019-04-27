import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET active reward
function* getActiveReward( action ) {
  console.log( 'Hit the getActiveReward saga', action );
  try {
    // expecting to get an item from db
    const getResponse = yield axios.get( '/api/active-content/reward' );
    console.log( 'getActiveReward response:', getResponse );
    action = { type: 'SET_ACTIVE_REWARD', payload: getResponse.data };
    // dispatch action to activeReward reducer to update its value
    yield put( action );
  }
  catch ( error ) {
    console.log( `Couldn't get active reward`, error );
    alert( `Sorry, couldn't get the active reward. Check console.` );
  }
}

function* getAllActiveContent( action ) {
  console.log( 'Hit the getAllActiveContent saga', action );
  try {
    // expecting to get an item from db
    const getResponse = yield axios.get( '/api/active-content' );
    console.log( 'getAllActiveContent response:', getResponse );
    action = { type: 'SET_ALL_ACTIVE_CONTENT', payload: getResponse.data };
    // dispatch action to allActiveContent reducer to update its value
    yield put( action );
  }
  catch ( error ) {
    console.log( `Couldn't get all active content`, error );
    alert( `Sorry, couldn't get all active content. Check console.` );
  }
}

function* getActiveContentSaga() {
  yield takeLatest( 'GET_ACTIVE_REWARD', getActiveReward );
  yield takeLatest( 'GET_ALL_ACTIVE_CONTENT', getAllActiveContent );
}

export default getActiveContentSaga;