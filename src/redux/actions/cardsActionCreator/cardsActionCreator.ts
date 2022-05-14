import { ActionCreator } from "redux";
import { GET_CARDS_FAILURE, GET_CARDS_STARTED, GET_CARDS_SUCCESS, ADD_ASYNC_CARD, CHANGE_CARD_STATUS_BASKET } from "../actions";
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
    inBasket: boolean
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

interface IChangeCardStatusBasketAction {
    type: typeof CHANGE_CARD_STATUS_BASKET,
    payload: {
        id: string
    }
}

export type TCardActionTypes =
     IGetCardsSuccessAction
    | IGetCardsStartedAction
    | IGetCardsFailureAction
    | IAddAsyncCardAction
    | IChangeCardStatusBasketAction

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

export const changeCardStatusBasket: ActionCreator<TCardActionTypes> = (id: string) => ({
    type: CHANGE_CARD_STATUS_BASKET,
    payload: {
        id
    }
});