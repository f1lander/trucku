import { put, takeLatest, all } from "redux-saga/effects";

const baseURL = ".netlify/functions";

function* fetchItems() {
  const json = yield fetch(`${baseURL}/table`).then(response =>
    response.json()
  );

  console.log("JSON", json);
  yield put({ type: "ITEMS_RECEIVED", payload: json });
}

function* actionWatcher() {
  yield takeLatest("GET_ITEMS", fetchItems);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
