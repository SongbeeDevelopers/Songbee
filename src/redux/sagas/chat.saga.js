import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchUserChats () {
    try {
        const response = yield axios.get('/api/chat/user-chats')
        yield put({ type: 'SET_USER_CHATS', payload: response.data})
    }
    catch (error) {
        console.error('fetchUserChats() failed:', error)
    }
}

function* fetchCurrentChat (action){
    try {
        const response = yield axios.get(`/api/chat/user-chat/${action.payload}`)
        yield put({ type: 'SET_CURRENT_CHAT', payload: response.data})
    }
    catch (error) {
        console.error('fetchCurrentChat() failed:', error)
    }
}

function* createChat (action){
    try {
        const response = yield axios({
            method: "POST",
            url: '/api/chat/new-chat',
            data: {user2: action.payload.id}
        })
        yield put ({
            type: "FETCH_CURRENT_CHAT",
            payload: response.data.id
        })
        yield action.payload.history.push(`/chatpage/${response.data.id}`)
    }
    catch (error) {
        console.error('createChat() failed:', error)
    }
}

function* sendMessage (action){
    try {
        const response = yield axios({
            method: "POST",
            url: `/api/chat/message`,
            data: action.payload
        })
        yield put ({
            type: "NEW_MESSAGE",
            payload: action.payload.chat_id
        })
        yield put ({
            type: "FETCH_CURRENT_CHAT",
            payload: action.payload.chat_id
        })
    }
    catch (error) {
        console.error('sendMessage() failed:', error)
    }
}

function* newMessage (action){
    try {
        const response = yield axios({
            method: "PUT",
            url: `/api/chat/new-message/${action.payload}`
        })
    }
    catch (error) {
        console.error('newMessage() failed:', error)
    }
}

function* readMessage (action){
    try {
        const response = yield axios({
            method: "PUT",
            url: `/api/chat/read-message/${action.payload}`
        })
        yield put ({
            type: "FETCH_CURRENT_CHAT",
            payload: action.payload
        })
    }
    catch (error) {
        console.error('readMessage() failed:', error)
    }
}

function* chatSaga() {
    yield takeLatest("FETCH_USER_CHATS", fetchUserChats);
    yield takeLatest("FETCH_CURRENT_CHAT", fetchCurrentChat);
    yield takeLatest("CREATE_CHAT", createChat);
    yield takeLatest("SEND_MESSAGE", sendMessage);
    yield takeLatest("NEW_MESSAGE", newMessage);
    yield takeLatest("READ_MESSAGE", readMessage);
}

export default chatSaga
