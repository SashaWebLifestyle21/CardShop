import { all, put, takeLatest, call } from "redux-saga/effects";
import { ADD_ASYNC_CARD } from "../../actions/actions";
import {
    IError,
    getCardsFailure,
    getCardsStarted,
    getCardsSuccess,
} from "../../actions/cardsActionCreator/cardsActionCreator";
import { getData } from "../../../api/api-utils/api-utils";
import { stockStatus } from "../../../constants/stockStatus";

export interface IAxiosResponse {
    title: string,
    price: string
    id: string
    image: string
    isbn13: string
    stock: string
    inBasket: boolean
}

interface IResponseObject {
    data: { books: IAxiosResponse[] };
    error: IError;
}

function* fetchCardSaga() {
    try {
        yield put(
            getCardsStarted()
        );

        const response: IResponseObject = yield call(getData)
        if (response.data.books) {
            const mappedResponse = response.data.books.map((item: IAxiosResponse) => (
                {
                    ...item,
                    title: item.title,
                    price: item.price.slice(1),
                    id: item.isbn13,
                    image: item.image,
                    isbn13: item.isbn13,
                    stock: stockStatus[Math.floor(Math.random() * (1 - 0 + 1)) + 0],
                    inBasket: false
                }));
            yield put(
                getCardsSuccess(mappedResponse)
            );
        } else if (response.error) {
            yield put(
                getCardsFailure(response.error)
            );
        }
    } catch (e) {
        yield put(
            getCardsFailure(e)
        );
    }
}

function* cardsSaga() {
    yield all([
        takeLatest(ADD_ASYNC_CARD, fetchCardSaga),
    ]);
}

export default cardsSaga;
