import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchUserRequests() {
  try {
    const response = yield axios.get("/api/jr-request/user");
    console.log("imm data",response.data);
    yield put({ type: "SET_JUNIOR_USER_REQUESTS", payload: response.data });
  } catch (error) {
    console.error("SAGA fetchUserRequests() failed:", error);
  }
}

function* fetchCurrentRequest(action) {
  try {
    const response = yield axios.get(
      `/api/jr-request/current/${action.payload}`
    );
  } catch (error) {
    console.error("SAGA fetchCurrentRequest() failed:", error);
  }
}

function* acceptSongRequest(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/jr-request/accept/${action.payload}`,
      data: action.payload.data,
    });
    yield put({ type: "FETCH_USER_REQUESTS"});
  } catch (error) {
    console.error("SAGA updateSongRequest() failed:", error);
  }
}

function* completeSongRequest(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/details/jr_request/${action.payload.id}`,
      data: action.payload.data,
    });
    yield put({ type: "FETCH_USER_REQUESTS"});
  } catch (error) {
    console.error("SAGA updateSongRequest() failed:", error);
  }
}

function* updateSongRequest(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/jr-request/update/${action.payload.id}`,
      data: action.payload.data,
    });
    yield put({ type: "FETCH_USER_REQUESTS"});
  } catch (error) {
    console.error("SAGA updateSongRequest() failed:", error);
  }
}

function* fetchLearningPacks(){
  try {
    const response = yield axios.get('/api/jr-request/learning-packs')
    yield put({ type: 'SET_LEARNING_PACKS', payload: response.data})
}
catch (error) {
    console.error('fetchLearningPacks() failed:', error)
}
}

function* fetchCurrentPack(action) {
  try {
    const response = yield axios.get(`/api/jr-request/current-pack/${action.payload}`)
    yield put({
      type: "SET_CURRENT_PACK",
      payload: response.data
    })
  } catch (error) {
    console.error("SAGA fetchCurrentArtist failed:", error)
  }
}

function* createJrRequest (action){
  try {
      const response = yield axios({
          method: "POST",
          url: "/api/jr-request/create",
          data: action.payload.data
      })
      yield put ({
          type: "FETCH_JR_CHECKOUT",
          payload: { data: action.payload.data, 
                      id: response.data.id }
      })
  } catch (error) {
      console.error('SAGA createSongRequest() failed:', error)
  }
}


function* fetchJrCheckout (action) {
  try {
      const stripeResponse = yield axios({
          method: "POST",
          url: '/api/stripe/jrcheckout',
          data: {
              orderDetails: action.payload.data,
              id: action.payload.id}
      })
      yield window.location.href = stripeResponse.data
  } catch (error) {
      console.error('SAGA fetchCheckout() failed:', error)
  }
}

function* juniorRequestSaga() {
  yield takeLatest("FETCH_USER_REQUESTS", fetchUserRequests);
  yield takeLatest("FETCH_CURRENT_REQUEST", fetchCurrentRequest);
  yield takeLatest("UPDATE_JR_SONG_REQUEST", updateSongRequest);
  yield takeLatest("ACCEPT_SONG_REQUEST", acceptSongRequest);
  yield takeLatest("COMPLETE_SONG_REQUEST", completeSongRequest);
  yield takeLatest("FETCH_LEARNING_PACKS", fetchLearningPacks);
  yield takeLatest("FETCH_CURRENT_PACK", fetchCurrentPack);
  yield takeLatest("CREATE_JR_REQUEST", createJrRequest);
  yield takeLatest("FETCH_JR_CHECKOUT", fetchJrCheckout);

}

export default juniorRequestSaga;
