import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchUserSubscriptions () {
  try {
    const response = yield axios.get("/api/jr-request/user");
    yield put({ type: "SET_USER_SUBSCRIPTIONS", payload: response.data });
  } catch (error) {
    console.error("SAGA fetchUserSubscriptions() failed:", error);
  }
}

function* fetchCurrentSubscription (action) {
  try {
    const response = yield axios.get(
      `/api/jr-request/current/${action.payload}`
    );
    yield put({ type: "SET_CURRENT_SUBSCRIPTION", payload: response.data})
  } catch (error) {
    console.error("SAGA fetchCurrentSubscription failed:", error);
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

function* deleteJrRequest (action){
  try {
      const response = yield axios.delete(`/api/jr-request/${action.payload}`)
      yield put({type: "FETCH_ALL_REQUESTS"});
  } catch (error) {
      console.error('SAGA deleteJrRequest() failed:', error)
  }
}

function* fetchAllSubscriptions () {
  try {
      const response = yield axios.get('/api/jr-request/all')
      yield put({ type: 'SET_ACTIVE_SUBSCRIPTIONS', payload: response.data[0]})
      yield put({ type: 'SET_PAUSED_SUBSCRIPTIONS', payload: response.data[1]})
  }
  catch (error) {
      console.error('SAGA fetchAllSubscriptions() failed:', error)
  }
}

function* updateLearningPack (action){
  const headers = {
    'content-type': 'multipart/form-data'
  }
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/jr-request/learning-pack/${action.payload.id}`,
      headers: headers,
      data: action.payload.data
  });
  yield put ({ type: "FETCH_LEARNING_PACKS"})
  } catch (error) {
    console.error('Saga updateLearningPack failed:', error)
  }
}

function* activateLearningPack (action){
  try {
    yield axios.put(`/api/jr-request/active/${action.payload}`)
    yield put({
      type: "FETCH_LEARNING_PACKS"
    })
  } catch (error) {
    console.error("Saga activateLearningPack failed:", error)
  }
}

function* updateSubscriptionPack (action){
  try {
    yield axios({
      method: "PUT",
      url: `/api/jr-request/pack-update/${action.payload.id}`,
      data: {pack: action.payload.pack}
    })
    yield put({
      type: "FETCH_ALL_SUBSCRIPTIONS"
    })
    yield put({
      type: "FETCH_USER_SUBSCRIPTIONS"
    })
  }catch (error) {
    console.error("Saga updateSubscriptionPack failed:", error)
  }
}

function* confirmJrPayment (action) {
  try {
    yield axios({
      method: "PUT",
      url: `/api/jr-request/confirm/${action.payload}`
    })
    yield put({
      type: "FETCH_ALL_SUBSCRIPTIONS"
    })
    yield put({
      type: "FETCH_USER_SUBSCRIPTIONS"
    })
  } catch (error) {
    console.error("Saga confirm JR payment failed:", error)
  }
}

function* juniorRequestSaga() {
  yield takeLatest("FETCH_USER_SUBSCRIPTIONS", fetchUserSubscriptions);
  yield takeLatest("FETCH_CURRENT_SUBSCRIPTION", fetchCurrentSubscription);
  yield takeLatest("UPDATE_JR_SONG_REQUEST", updateSongRequest);
  yield takeLatest("ACCEPT_SONG_REQUEST", acceptSongRequest);
  yield takeLatest("COMPLETE_SONG_REQUEST", completeSongRequest);
  yield takeLatest("FETCH_LEARNING_PACKS", fetchLearningPacks);
  yield takeLatest("FETCH_CURRENT_PACK", fetchCurrentPack);
  yield takeLatest("CREATE_JR_REQUEST", createJrRequest);
  yield takeLatest("FETCH_JR_CHECKOUT", fetchJrCheckout);
  yield takeLatest("DELETE_JR_REQUEST", deleteJrRequest)
  yield takeLatest("FETCH_ALL_SUBSCRIPTIONS", fetchAllSubscriptions);
  yield takeLatest("UPDATE_LEARNING_PACK", updateLearningPack);
  yield takeLatest("ACTIVATE_PACK", activateLearningPack);
  yield takeLatest("UPDATE_SUBSCRIPTION_PACK", updateSubscriptionPack);
  yield takeLatest("CONFIRM_JR_PAYMENT", confirmJrPayment);

}

export default juniorRequestSaga;
