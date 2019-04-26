import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET Projects List
function* getActiveReward( action ) {
  console.log( 'Hit the getActiveReward saga', action );
  try {
    // expecting to get an item from db
    const getResponse = yield axios.get( '/api/active-content/reward' );
    console.log( 'GET all clues response:', getResponse );
    action = { type: 'SET_ACTIVE_REWARD', payload: getResponse.data };
    // dispatch action to activeReward reducer to update its value
    yield put( action );
  }
  catch ( error ) {
    console.log( `Couldn't get active reward`, error );
    alert( `Sorry, couldn't get the active reward. Try again later` );
  }
}

function* getActiveContentSaga() {
  yield takeLatest( 'GET_ACTIVE_REWARD', getActiveReward );
}

export default getActiveContentSaga;