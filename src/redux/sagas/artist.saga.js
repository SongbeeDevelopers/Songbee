import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchPendingArtist () {
    try {
        const response = yield axios.get('/api/artist/pending')
        yield put({ type: 'SET_PENDING_ARTISTS', payload: response.data})
    }
    catch (error) {
        console.error('fetchGenres() failed:', error)
    }
}

function* artistSaga() {
    yield takeLatest('FETCH_PENDING_ARTISTS', fetchPendingArtist);
}

export default artistSaga