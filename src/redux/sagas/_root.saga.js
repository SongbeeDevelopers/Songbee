import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import genreSaga from './genre.saga';
import requestSaga from './request.saga';
import detailsSaga from './details.saga';
import searchSaga from './search.saga';
import artistSaga from './artist.saga';
import mailchimpSaga from './mailchimp.saga';
import juniorRequestSaga from './jrRequest.saga';
import chatSaga from './chat.saga';
import schoolSaga from './schools.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    genreSaga(),
    requestSaga(),
    detailsSaga(),
    searchSaga(),
    mailchimpSaga(),
    artistSaga(),
    juniorRequestSaga(),
    chatSaga(),
    schoolSaga(),
  ]);
}
