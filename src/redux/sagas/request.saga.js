import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchAllRequests () {
    try {
        const response = yield axios.get('/api/request/all')
        yield put({ type: 'SET_ALL_REQUESTS', payload: response.data})
    }
    catch (error) {
        console.error('SAGA fetchAllRequests() failed:', error)
    }
}

function* fetchUserRequests () {
    try {
        const response = yield axios.get('/api/request/user')
        yield put({ type: 'SET_USER_REQUESTS', payload: response.data})
    }
    catch (error) {
        console.error('SAGA fetchUserRequests() failed:', error)
    }
}

function* createSongRequest (action){
    try {
        const response = yield axios({
            method: "POST",
            url: "/api/request",
            data: action.payload
        })
        yield put({ })
    } catch (error) {
        console.error('SAGA createSongRequest() failed:', error)
    }
}

function* deleteSongRequest (action){
    try {
        const response = yield axios.delete(`/api/request/${action.payload}`)
    } catch (error) {
        console.error('SAGA deleteSongRequest() failed:', error)
    }
}

function* requestSaga() {
    yield takeLatest('FETCH_ALL_REQUESTS', fetchAllRequests);
    yield takeLatest('FETCH_USER_REQUESTS', fetchUserRequests);
    yield takeLatest('CREATE_SONG_REQUEST', createSongRequest);
    yield takeLatest('DELETE_SONG_REQUEST', deleteSongRequest);
}

export default requestSaga;