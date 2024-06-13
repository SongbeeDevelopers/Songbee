import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchSchoolData (action) {
    try {
        const schoolData = yield axios({
            method: 'GET',
            url: '/api/schools'
        })
        yield put({ type: 'SET_SCHOOL_DATA', payload: schoolData.data })
    } catch (error) {
        console.error('saga fetchSchoolData() faield:', error)
    }
}

function* requestSaga() {
    yield takeLatest('FETCH_SCHOOL_DATA', fetchSchoolData);
}

export default requestSaga;