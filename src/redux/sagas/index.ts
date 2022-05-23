import { fork, put } from "redux-saga/effects";
import cardsSaga from "./cardsSagas/cardsSagas";
import { addAsyncCard } from "../actions/cardsActionCreator/cardsActionCreator";

export function* rootSaga() {
    yield fork(cardsSaga)
    yield put(addAsyncCard())
}
