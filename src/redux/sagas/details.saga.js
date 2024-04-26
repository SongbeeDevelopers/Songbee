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

function* acceptRequest (action){
    try {
        const response = yield axios({
            method: "PUT",
            url: `/api/details/accept/${action.payload}`
        })
        yield put ({ type: "FETCH_ARTIST_REQUESTS"})
    } catch (error) {
        console.error('SAGA accept request failed', error)
    }
}

function* denyRequest (action){
    try {
        const response = yield axios({
            method: "PUT",
            url: `/api/details/deny/${action.payload}`
        })
        yield put ({ type: "FETCH_ARTIST_REQUESTS"})
    } catch (error) {
        console.error('SAGA deny request failed', error)
    }
}

function* detailsSaga() {
    yield takeLatest("CREATE_SONG_DETAILS", createSongDetails);
    yield takeLatest("UPDATE_SONG_DETAILS", updateSongDetails);
    yield takeLatest("ACCEPT_REQUEST", acceptRequest);
    yield takeLatest("DENY_REQUEST", denyRequest);
}

export default detailsSaga