import axios from "axios";
import { Dispatch } from "react";
import { ActionCreator } from "redux";
import { GET_CARDS_FAILURE, GET_CARDS_STARTED, GET_CARDS_SUCCESS } from "../actions";
import { HREF_API } from "../../../constants/href-api";

export interface IError{
    code: number,
    message: string
}

interface IBooks{
    title: string,
    price: string
}

export interface IAxiosResponse {
    books: IBooks[]
}

export interface ICards {
    title: string,
    price: string
    id: string
    image: string
    isbn13: string
}

interface IGetCardsSuccessAction {
    type: typeof GET_CARDS_SUCCESS,
    payload: ICards[]
}

interface IGetCardsStartedAction {
    type: typeof GET_CARDS_STARTED,
    payload: {}
}

interface IGetCardsFailureAction {
    type: typeof GET_CARDS_FAILURE,
    payload: {
        error: IError
    }
}

export type TCardActionTypes =
     IGetCardsSuccessAction
    | IGetCardsStartedAction
    | IGetCardsFailureAction; // объединение экшнов, относящихся
// к одной логической области

export const getCards = () => {
    return (dispatch: Dispatch<TCardActionTypes>) => {
        dispatch(getCardsStarted()); // диспатчится обычный синхронный экшн, который означает
        // начало отправки запроса на сервер
        axios
            .get<IAxiosResponse>(HREF_API)
            .then(res => {
                const mappedResponse = res.data.books.map(item => ({...item, title: item.title, price: item.price}))
                dispatch(getCardsSuccess(mappedResponse));
            })
            .catch(err => {
                dispatch(getCardsFailure(err.message));
            });
    };
};

const getCardsSuccess: ActionCreator<TCardActionTypes> = (cards: ICards[]) => ({
    type: GET_CARDS_SUCCESS,
    payload: [
        ...cards
    ]
});

const getCardsStarted: ActionCreator<TCardActionTypes> = () => ({
    type: GET_CARDS_STARTED,
    payload: {}
});

const getCardsFailure: ActionCreator<TCardActionTypes> = (error: IError) => ({
    type: GET_CARDS_FAILURE,
    payload: {
        error
    }
});