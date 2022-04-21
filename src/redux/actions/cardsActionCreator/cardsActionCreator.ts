import axios from "axios";
import { ActionCreator } from "redux";
import { GET_CARDS_FAILURE, GET_CARDS_STARTED, GET_CARDS_SUCCESS, ADD_ASYNC_CARD } from "../actions";
import { HREF_API } from "../../../constants/href-api";
import { IAxiosResponse } from "../../sagas/cardsSagas/cardsSagas";

export interface IError {
    code: number,
    message: string
}

export interface IBooks {
    title: string,
    price: string
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

export const getCards = () =>
        axios
            .get<IAxiosResponse[]>(HREF_API)

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