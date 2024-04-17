import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchResults(action) {
  try {
    const response = yield axios({
      method: "GET",
      url: `/api/search/?type=${action.payload.type}&q=${action.payload.query}&class=${action.payload.classQuery}`
    })
    // sets reducer depending on pending or completed search
    switch (action.payload.type) {
      case 'pending':
        yield put({ type: 'SET_PENDING_REQUESTS', payload: response.data })
        break;
      case 'completed':
        yield put({ type: 'SET_COMPLETED_REQUESTS', payload: response.data })
        break;
      case 'user':
        yield put({ type: 'SET_ALL_USERS', payload: response.data })
    }
  }
  catch (error) {
    console.error('fetchResults() failed:', error)
  }
}

function* fetchClassFilter(action) {
  try {
    const response = yield axios({
      method: "GET",
      url: `/api/search/class/${action.payload}`
    })
    yield put({ type: 'SET_FILTER_RESULTS', payload: response.data })
  }
  catch (error) {
    console.error('fetchClassFilter() failed:', error)
  }
}

function* searchSaga() {
  yield takeLatest('FETCH_RESULTS', fetchResults);
  yield takeLatest('FETCH_CLASS_FILTER', fetchClassFilter);
}

export default searchSaga;
