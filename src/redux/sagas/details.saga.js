import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* createSongDetails (action) {
    const headers = {
        'content-type': 'multipart/form-data'
      }
    try {
        const response = yield axios({
            method: "POST",
            url: `/api/details/${action.payload.id}`,
            headers: headers,
            data: action.payload.data
        });
        yield put ({ type: "FETCH_ALL_REQUESTS"})
    }
    catch (error) {
        console.error('Saga createSongDetails() failed:', error)
    }
}

function* updateSongDetails (action) {
    const headers = {
    'content-type': 'multipart/form-data'
    }
    try {
    const response = yield axios({
        method: "PUT",
        url: `/api/details/${action.payload.id}`,
        headers: headers,
        data: action.payload.data
    });
    yield put ({ type: "FETCH_ALL_REQUESTS"})
    }
    catch (error) {
        console.error('Saga updateSongDetails() failed:', error)
    }
}

function* detailsSaga() {
    yield takeLatest("CREATE_SONG_DETAILS", createSongDetails);
    yield takeLatest("UPDATE_SONG_DETAILS", updateSongDetails);
}

export default detailsSaga