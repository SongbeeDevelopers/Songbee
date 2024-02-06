import axios from "axios";
import { takeLatest } from "redux-saga/effects";

function* addEmail (action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/mailchimp',
            data: action.payload
        })
    }
    catch (error) {
        console.error('Saga addEmail() failed:', error)
    }
}

function* mailchimpSaga() {
    yield takeLatest("ADD_EMAIL", addEmail)
}

export default mailchimpSaga
