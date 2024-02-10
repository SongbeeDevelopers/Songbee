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

function* fetchCheckout (action) {
    try {
        const stripeResponse = yield axios({
            method: "POST",
            url: '/api/stripe',
            data: {
                id: response.data.id,
                orderDetails: action.payload.data}
        })
        // console.log("stripeResponse:", stripeResponse)
        yield window.location.href = stripeResponse.data
    } catch (error) {
        console.error('SAGA fetchCheckout() failed:', error)
    }
}

function* createSongRequest (action){
    try {
        const response = yield axios({
            method: "POST",
            url: "/api/request/create",
            data: action.payload.data
        })
        yield action.payload.history.push(`requestform/${response.data.id}`)
        // yield action.payload.history.push('/checkout')
        yield put ({ type: 'ADD_ORDER_ID', payload: response.data.id })
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

function* loadEditPage (action) {
    try {
        yield put({type: 'FETCH_GENRES'});
        const response = yield axios.get(`/api/request/current/${action.payload}`);
        yield put({ type: "SET_REQUEST_DATA", payload: response.data[0]})
    } catch (error) {
        console.error('SAGA loadEditPage() failed:', error);
    }
}

function* loadAdminPage (action) {
    try {
        yield put({type: "FETCH_ALL_REQUESTS"})
        yield put({type: "FETCH_ALL_USERS"})
        yield put({type: "FETCH_PENDING_ARTISTS"})
        yield put({
            type: "FETCH_RESULTS",
            payload: {
                type: 'pending',
                query: ''
        }})
    } catch (error) {
        console.error('SAGA loadAdminPage() failed:', error);
    }
}

function* requestSaga() {
    yield takeLatest('FETCH_ALL_REQUESTS', fetchAllRequests);
    yield takeLatest('FETCH_USER_REQUESTS', fetchUserRequests);
    yield takeLatest('CREATE_SONG_REQUEST', createSongRequest);
    yield takeLatest('DELETE_SONG_REQUEST', deleteSongRequest);
    yield takeLatest('FETCH_CURRENT_REQUEST', fetchCurrentRequest);
    yield takeLatest('UPDATE_SONG_REQUEST', updateSongRequest);
    yield takeLatest('LOAD_EDIT_PAGE', loadEditPage);
    yield takeLatest('LOAD_ADMIN_PAGE', loadAdminPage);
    yield takeLatest('FETCH_CHECKOUT', fetchCheckout);
}

export default requestSaga;