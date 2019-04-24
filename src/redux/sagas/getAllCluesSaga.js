import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// GET Projects List
function* getAllClues( action ) {
  console.log( 'Hit the getAllClues saga', action );
  try {
    // expecting to get an array of objects from db
    const getResponse = yield axios.get( '/api/clues' );
    console.log( 'GET all clues response:', getResponse );
    action = { type: 'SET_ALL_CLUES', payload: getResponse.data };
    // dispatch action to clues reducer to update list of projects
    yield put( action );
  }
  catch ( error ) {
    console.log( `Couldn't get clues`, error );
    alert( `Sorry, couldn't get the clues. Try again later` );
  }
}

function* getAllCluesSaga() {
  yield takeLatest('GET_ALL_CLUES', getAllClues);
}

export default getAllCluesSaga;