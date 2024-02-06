import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

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
}

export default artistSaga;
