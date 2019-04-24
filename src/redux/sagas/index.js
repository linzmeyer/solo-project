import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getAllCluesSaga from './getAllCluesSaga';

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    getAllCluesSaga(),
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
