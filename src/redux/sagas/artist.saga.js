import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchPendingArtist () {
    try {
        const response = yield axios.get('/api/artist/pending')
        yield put({ type: 'SET_PENDING_ARTISTS', payload: response.data})
    }
    catch (error) {
        console.error('fetchGenres() failed:', error)
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
    console.error("SAGA createSongRequest() failed:", error);
  }
}

function* artistSaga() {
  yield takeLatest("CREATE_ARTIST", createNewArtist);
  yield takeLatest('FETCH_PENDING_ARTISTS', fetchPendingArtist);
}

export default artistSaga;
