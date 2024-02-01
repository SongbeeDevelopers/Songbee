import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchAllRequests () {
    try {
        const response = yield axios.get('/api/request/all')
        yield put({ type: 'SET_PENDING_REQUESTS', payload: response.data[0]})
        yield put({ type: 'SET_COMPLETED_REQUESTS', payload: response.data[1]})
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

function* fetchCurrentRequest (action){
    try {
        const response = yield axios.get(`/api/request/current/${action.payload}`);
        yield put({ type: "SET_CURRENT_REQUEST", payload: response.data[0]})
    }
    catch (error) {
        console.error('SAGA fetchCurrentRequest() failed:', error)
    }
}

function* createSongRequest (action){
    try {
        const response = yield axios({
            method: "POST",
            url: "/api/request/create",
            data: action.payload.data
        })
        yield action.payload.history.push(`/requestform/${response.data.id}`)
    } catch (error) {
        console.error('SAGA createSongRequest() failed:', error)
    }
}

function* updateSongRequest (action) {
    try {
        const response = yield axios({
            method: "PUT",
            url: `/api/request/update/${action.payload.id}`,
            data: action.payload.data
        })
        yield action.payload.history.push('/user')
    } catch (error) {
        console.error('SAGA updateSongRequest() failed:', error)
    }
}

function* deleteSongRequest (action){
    try {
        const response = yield axios.delete(`/api/request/${action.payload}`)
        yield put({type: "FETCH_ALL_REQUESTS"});
    } catch (error) {
        console.error('SAGA deleteSongRequest() failed:', error)
    }
}

function* requestSaga() {
    yield takeLatest('FETCH_ALL_REQUESTS', fetchAllRequests);
    yield takeLatest('FETCH_USER_REQUESTS', fetchUserRequests);
    yield takeLatest('CREATE_SONG_REQUEST', createSongRequest);
    yield takeLatest('DELETE_SONG_REQUEST', deleteSongRequest);
    yield takeLatest('FETCH_CURRENT_REQUEST', fetchCurrentRequest);
    yield takeLatest('UPDATE_SONG_REQUEST', updateSongRequest);
}

export default requestSaga;