import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* updateGame(action) {
  try {
    console.log('hit updateGameSaga:', action.payload );
    yield axios.put('/api/admin-changes', action.payload);

    
  } catch (error) {
      console.log('Error with updateGameSaga:', error);
      alert(`Error updating game. Check console.`);
  }
}

function* updateGameSaga() {
  yield takeLatest('UPDATE_GAME', updateGame);
}

export default updateGameSaga;