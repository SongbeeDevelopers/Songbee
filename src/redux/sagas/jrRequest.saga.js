import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchUserRequests() {
  try {
    console.log("LLOOOOOOP");
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

function* juniorRequestSaga() {
  yield takeLatest("FETCH_USER_REQUESTS", fetchUserRequests);
  yield takeLatest("FETCH_CURRENT_REQUEST", fetchCurrentRequest);
  yield takeLatest("UPDATE_JR_SONG_REQUEST", updateSongRequest);
  yield takeLatest("ACCEPT_SONG_REQUEST", acceptSongRequest);
  yield takeLatest("COMPLETE_SONG_REQUEST", completeSongRequest);

}

export default juniorRequestSaga;
