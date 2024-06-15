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

function* updateSchoolData (action) {
    try {
        yield axios({
            method: 'PUT',
            url: '/api/schools',
            data: action.payload
        })
        yield put({type: 'FETCH_SCHOOL_DATA'})
    } catch (error) {
        console.error('saga updateSchoolData() failed:', error)
    }
}

function* addSchoolData (action) {
    try {
        yield axios({
            method: 'POST',
            url: '/api/schools',
            data: action.payload
        })
        yield put({type: 'FETCH_SCHOOL_DATA'})
    } catch (error) {
        console.error('saga addSchoolData failed:', error) 
    }
}

function* deleteSchoolData (action) {
    try {
        yield axios({
            method: 'DELETE',
            url: '/api/schools',
            data: action.payload
        })
        yield put({type: 'FETCH_SCHOOL_DATA'})
    } catch (error) {
        console.error('saga deleteSchoolData failed:', error)
    }
}

function* requestSaga() {
    yield takeLatest('FETCH_SCHOOL_DATA', fetchSchoolData);
    yield takeLatest('UPDATE_SCHOOL_DATA', updateSchoolData);
    yield takeLatest('ADD_SCHOOL_DATA', addSchoolData);
    yield takeLatest('DELETE_SCHOOL_DATA', deleteSchoolData);
}

export default requestSaga;
