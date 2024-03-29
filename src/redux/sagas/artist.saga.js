import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchPendingArtist() {
  try {
    console.log("THIS IS DATA2222");

    const response = yield axios.get("/api/artist/pending");
    console.log("THIS IS DATA", response.data);
    yield put({ type: "SET_PENDING_ARTISTS", payload: response.data });
  } catch (error) {
    console.error("SAGA fetchPendingArtist() failed:", error);
  }
}
// this generator is used to create a new artist
function* createNewArtist(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/artist",
      data: action.payload,
    });
    console.log(response.data);
  } catch (error) {
    console.error("SAGA createNewArtist() failed:", error);
  }
}

function* requestArtistEdit(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/artist/edit",
      data: action.payload,
    });
    console.log(response.data);
  } catch (error) {
    console.error("SAGA createNewArtist() failed:", error);
  }
}

function* approveArtist(action) {
  try {
    yield axios.put(`/api/artist/${action.payload.id}`, {
      user_id: action.payload.user_id,
    });
    yield put({ type: "FETCH_PENDING_ARTISTS" });
  } catch (error) {
    console.error("SAGA approveArtist() failed:", error);
  }
}

function* getArtistDetails() {
  try {
    const response = yield axios.get(`/api/artist/get`);
    yield put({ type: "SET_ARTIST_PROFILE", payload: response.data[0] });
  } catch (error) {
    console.error("SAGA approveArtist() failed:", error);
  }
}

function* getPendingEdits() {
  try {
    const response = yield axios.get(`/api/artist/pending-edits`);
    yield put({ type: "SET_PENDING_EDITS", payload: response.data });
  } catch (error) {
    console.error("SAGA approveArtist() failed:", error);
  }
}

function* approveEditArtistInfo(action) {
  try {
    yield axios.put(`/api/artist/approve/${action.payload.id}`);
    yield put({ type: "GET_ARTIST_PENDING" });
  } catch (error) {
    console.error("SAGA approveArtist() failed:", error);
  }
}

function* denyEditArtistInfo(action) {
    try {
      yield axios.delete(`/api/artist/deny/${action.payload}`);
      yield put({ type: "GET_ARTIST_PENDING" });
    } catch (error) {
      console.error("SAGA approveArtist() failed:", error);
    }
  }

function* deleteArtist(action) {
  try {
    yield axios.delete(`/api/artist/${action.payload}`);
    yield put({ type: "FETCH_PENDING_ARTISTS" });
  } catch (error) {
    console.error("SAGA deleteArtist() failed:", error);
  }
}

function* fetchAllArtists() {
  try {
    const response = yield axios.get("/api/artist/all");
    yield put({
      type: "SET_ALL_ARTISTS",
      payload: response.data,
    });
  } catch (error) {
    console.error("SAGA fetchAllArtists() failed:", error);
  }
}

function* artistSaga() {
  yield takeLatest("CREATE_ARTIST", createNewArtist);
  yield takeLatest("FETCH_PENDING_ARTISTS", fetchPendingArtist);
  yield takeLatest("APPROVE_ARTIST", approveArtist);
  yield takeLatest("DELETE_ARTIST", deleteArtist);
  yield takeLatest("FETCH_ALL_ARTISTS", fetchAllArtists);
  yield takeLatest("APPROVE_EDIT_ARTIST", approveEditArtistInfo);
  yield takeLatest("REQUEST_ARTIST_EDIT", requestArtistEdit);
  yield takeLatest("GET_ARTIST_PROFILE", getArtistDetails);
  yield takeLatest("GET_ARTIST_PENDING", getPendingEdits);
  yield takeLatest("DENY_EDIT_ARTIST", denyEditArtistInfo);

  
}

export default artistSaga;
