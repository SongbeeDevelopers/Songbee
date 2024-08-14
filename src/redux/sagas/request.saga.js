import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchAllRequests () {
    try {
        const response = yield axios.get('/api/request/all')
        yield put({ type: 'SET_PENDING_REQUESTS', payload: response.data[0]})
        yield put({ type: 'SET_COMPLETED_REQUESTS', payload: response.data[1]})
        yield put({ type: 'SET_UNAPPROVED_REQUESTS', payload: response.data[2]})
        yield put({ type: 'SET_UNPAID_REQUESTS', payload: response.data[3]})
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

function* fetchArtistRequests (action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `/api/request/artist/pending/${action.payload.id}/${action.payload.vocal_type}`
        })
        yield put({ type: 'SET_ARTIST_REQUESTS', payload: response.data})
    }
    catch (error) {
        console.error('SAGA fetchArtistRequests() failed:', error)
    }
}

function* fetchCompletedArtistRequests (action) {
    try {
        const response = yield axios.get(`/api/request/artist/complete/${action.payload}`)
        yield put({ type: 'SET_COMPLETED_ARTIST_REQUESTS', payload: response.data})
    }
    catch (error) {
        console.error('SAGA fetchArtistRequests() failed:', error)
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
            url: '/api/stripe/checkout',
            data: {
                orderDetails: action.payload.data,
                id: action.payload.id}
        })
        yield window.location.href = stripeResponse.data
    } catch (error) {
        console.error('SAGA fetchCheckout() failed:', error)
    }
}

function* fetchTipCheckout () {
    try {
        const stripeResponse = yield axios({
            method: "POST",
            url: '/api/stripe/tip',
        })
        yield window.location.href = stripeResponse.data
    } catch (error) {
        console.error('SAGA fetchTipCheckout() failed:', error)
    }
}

function* fetchAddonCheckout (action) {
    try {
        const stripeResponse = yield axios({
            method: "POST",
            url: '/api/stripe/addon',
            data: {
                orderDetails: action.payload.data,
                id: action.payload.id}
        })
        // console.log("stripeResponse:", stripeResponse)
        yield window.location.href = stripeResponse.data
    } catch (error) {
        console.error('SAGA fetchAddonCheckout() failed:', error)
    }
}

function* createSongRequest (action){
    try {
        const response = yield axios({
            method: "POST",
            url: "/api/request/create",
            data: action.payload.data
        })
        yield action.payload.history.push(`/finalquestions/${response.data.id}`)
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

function* finishSongRequest (action) {
    try {
        const response = yield axios({
            method: "PUT",
            url: `/api/request/finish/${action.payload.id}`,
            data: action.payload.data
        })
        yield put ({type: 'FETCH_USER_REQUESTS'})
        yield put ({
            type: "FETCH_CHECKOUT",
            payload: { data: action.payload.orderInfo, 
                        id: action.payload.id }
        })
    } catch (error) {
        console.error('SAGA finishSongRequest() failed:', error)
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

function* jrLoadEditPage (action) {
    try {
        const response = yield axios.get(`/api/jr-request/current/${action.payload}`);
        yield put({ type: "SET_JR_REQUEST_DATA", payload: response.data[0]})
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

function* submitRequestEdit (action) {
    try {
        const response = yield axios({
            method: 'PUT',
            url: `/api/request/update/${action.payload.id}`,
            data: action.payload
        })
        yield put({ type: 'FETCH_ALL_REQUESTS'})
    } catch (error) {
        console.error('SAGA submitRequestEdit failed:', error)
    }
}

function* confirmRequestPayment (action) {
    try {
      yield axios({
        method: "PUT",
        url: `/api/request/confirm/${action.payload}`
      })
      yield put({
        type: "FETCH_ALL_REQUESTS"
      })
      yield put({
        type: "FETCH_USER_REQUESTS"
      })
    } catch (error) {
      console.error("Saga confirm request payment failed:", error)
    }
  }

function* updateApproval (action) {
    try {
        yield axios({
            method: 'PUT',
            url: `/api/request/approve/${action.payload.reqId}`,
            data: {approved: action.payload.approved}
        })
        yield put({ type: 'FETCH_ALL_REQUESTS' })
    } catch (error) {
        console.error('Saga updateApproval() failed:', error)
    }
}

function* updateDates (action) {
    try {
        yield axios({
            method: 'PUT',
            url: `/api/request/dates/${action.payload.id}`,
            data: action.payload.data
        })
        yield put ({ type: 'FETCH_ALL_REQUESTS'})
    } catch (error) {
        console.error('SAGA updateDates failed', error)
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
    yield takeLatest('JR_LOAD_EDIT_PAGE', jrLoadEditPage);
    yield takeLatest('LOAD_ADMIN_PAGE', loadAdminPage);
    yield takeLatest('FETCH_CHECKOUT', fetchCheckout);
    yield takeLatest('FETCH_TIP_CHECKOUT', fetchTipCheckout)
    yield takeLatest('FETCH_ADDON_CHECKOUT', fetchAddonCheckout);
    yield takeLatest('FINISH_SONG_REQUEST', finishSongRequest);
    yield takeLatest('SUBMIT_REQUEST_EDIT', submitRequestEdit);
    yield takeLatest('FETCH_ARTIST_REQUESTS', fetchArtistRequests);
    yield takeLatest('FETCH_COMPLETED_ARTIST_REQUESTS', fetchCompletedArtistRequests);
    yield takeLatest('CONFIRM_REQUEST_PAYMENT', confirmRequestPayment);
    yield takeLatest('UPDATE_APPROVAL', updateApproval);
    yield takeLatest('UPDATE_DATES', updateDates);
}

export default requestSaga;
