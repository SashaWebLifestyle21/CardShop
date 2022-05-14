import { ActionCreator } from "redux";
import { GET_CARDS_FAILURE, GET_CARDS_STARTED, GET_CARDS_SUCCESS, ADD_ASYNC_CARD } from "../actions";
import { IAxiosResponse } from "../../sagas/cardsSagas/cardsSagas";

export interface IError {
    code: number,
    message: string
}

interface IAddAsyncCardAction {
    type: typeof ADD_ASYNC_CARD;
    payload: {};
}

export interface ICards {
    title: string,
    price: string
    id: string
    image: string
    isbn13: string
    stock: string
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
    | IGetCardsFailureAction
    | IAddAsyncCardAction

export const addAsyncCard = (): TCardActionTypes => {
    return {
        type: ADD_ASYNC_CARD,
        payload: {}
    }
}

export const getCardsSuccess: ActionCreator<TCardActionTypes> = (cards: IAxiosResponse[]) => ({
    type: GET_CARDS_SUCCESS,
    payload: [
        ...cards
    ]
});

export const getCardsStarted: ActionCreator<TCardActionTypes> = () => ({
    type: GET_CARDS_STARTED,
    payload: {}
});

export const getCardsFailure: ActionCreator<TCardActionTypes> = (error: IError) => ({
    type: GET_CARDS_FAILURE,
    payload: {
        error
    }
});