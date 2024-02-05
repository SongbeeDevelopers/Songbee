import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchGenres () {
    try {
        const response = yield axios.get('/api/genres')
        yield put({ type: 'SET_GENRES', payload: response.data})
    }
    catch (error) {
        console.error('fetchGenres() failed:', error)
    }
}

function* searchSaga() {
}

export default searchSaga;