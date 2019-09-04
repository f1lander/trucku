import { put, takeLatest, all } from 'redux-saga/effects';

const baseURL = 'http://localhost:3004';

function* fetchItems() {
    const json = yield fetch(`${baseURL}/items`)
        .then(response => response.json());

    console.log('JSON', json);
    yield put({ type: "ITEMS_RECEIVED", payload: json });

}
function* actionWatcher() {
    yield takeLatest('GET_ITEMS', fetchItems)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}