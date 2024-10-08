import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes the username and password from the payload to the server
    yield axios.post('/api/user/register', action.payload);
    // if in checkout process, will close login/register modal
    if (action.payload.handleClose) { yield action.payload.handleClose() }
    // automatically log a user in after registration
    yield put({ type: 'LOGIN', payload: action.payload })

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    // yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* registerUserAtCheckout(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes the username and password from the payload to the server
    yield axios.post('/api/user/register', action.payload.userData);

    // automatically log a user in after registration
    yield put({ type: 'LOGIN_AT_CHECKOUT', payload: action.payload });

    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    yield put({ type: 'SET_TO_LOGIN_MODE' });
  } catch (error) {
    console.log('Error with user registration:', error);
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}

function* updateUser (action) {
  try {
  yield axios({
    method: "PUT",
    url: '/api/user/update',
    data: action.payload
  })
  yield put({ type: 'FETCH_USER' });
} catch (error) {
  console.log('Error with user update:', error);
  yield put({ type: 'REGISTRATION_FAILED' });
}
}

function* deleteUser (action) {
  try {
    yield axios({
      method: "DELETE",
      url: '/api/user/delete',
      data: action.payload
    })
  } catch (error) {
    console.error('Saga deleteUser() failed:', error)
  }
}

function* registrationSaga() {
  yield takeLatest('REGISTER', registerUser);
  yield takeLatest('REGISTER_AT_CHECKOUT', registerUserAtCheckout);
  yield takeLatest('UPDATE_USER', updateUser);
  yield takeLatest('DELETE_USER', deleteUser);
}

export default registrationSaga;
