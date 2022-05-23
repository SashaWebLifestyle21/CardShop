import { ADD_CARD_BASKET, REMOVE_CARD_FROM_BASKET, INCREASE_CARD_AMOUNT, DECREASE_CARD_AMOUNT } from "../actions";
import { ICards } from "../cardsActionCreator/cardsActionCreator";

export interface ICardsBasket extends ICards {
    amount: number
    total: number
}

export interface IBasket {
    cards: ICardsBasket[],
    totalPrice: number
}

interface IAddCardBasketAction {
    type: typeof ADD_CARD_BASKET;
    payload: ICardsBasket;
}

interface IRemoveCardBasketAction {
    type: typeof REMOVE_CARD_FROM_BASKET;
    payload: ICardsBasket;
}

interface IIncreaseCardAmountAction {
    type: typeof INCREASE_CARD_AMOUNT;
    payload: ICardsBasket;
}

interface IDecreaseCardAmountAction {
    type: typeof DECREASE_CARD_AMOUNT;
    payload: ICardsBasket;
}

export type TCardBasketActionTypes = IAddCardBasketAction | IRemoveCardBasketAction | IIncreaseCardAmountAction | IDecreaseCardAmountAction

export const addCardBasket = (card: ICardsBasket): TCardBasketActionTypes => {
    return {
        type: ADD_CARD_BASKET,
        payload: {
            ...card
        }
    }
}

export const removeCardBasket = (card: ICardsBasket): TCardBasketActionTypes => {
    return {
        type: REMOVE_CARD_FROM_BASKET,
        payload: {
            ...card
        }
    }
}

export const increaseCardAmount = (card: ICardsBasket): TCardBasketActionTypes => {
    return {
        type: INCREASE_CARD_AMOUNT,
        payload: {
            ...card
        }
    }
}

export const decreaseCardAmount = (card: ICardsBasket): TCardBasketActionTypes => {
    return {
        type: DECREASE_CARD_AMOUNT,
        payload: {
            ...card
        }
    }
}