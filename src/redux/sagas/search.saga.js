import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchResults (action) {
    try {
        const response = yield axios({
            method: "GET",
            url: `/api/search/?type=${action.payload.type}&q=${action.payload.query}`
        })
        yield put({ type: 'SET_FILTER_RESULTS', payload: response.data})
    }
    catch (error) {
        console.error('fetchResults() failed:', error)
    }
}

function* searchSaga() {
    yield takeLatest('FETCH_RESULTS', fetchResults);
}

export default searchSaga;