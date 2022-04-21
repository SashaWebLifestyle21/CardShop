import { all, fork } from "redux-saga/effects";
import cardsSaga from "./cardsSagas/cardsSagas";

export function* rootSaga() {
    yield all([fork(cardsSaga)]);
}
