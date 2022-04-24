import { ADD_CARD_BASKET, REMOVE_CARD_BASKET } from "../actions";
import { ICards } from "../cardsActionCreator/cardsActionCreator";

export interface ICardsBasket extends ICards {
    amount: number
    total: number
}

interface IAddCardBasketAction {
    type: typeof ADD_CARD_BASKET;
    payload: ICardsBasket;
}

interface IRemoveCardBasketAction {
    type: typeof REMOVE_CARD_BASKET;
    payload: {
        id: string;
    };
}

export type TCardBasketActionTypes = IAddCardBasketAction | IRemoveCardBasketAction

export const addCardBasket = (card: ICardsBasket): TCardBasketActionTypes => {
    return {
        type: ADD_CARD_BASKET,
        payload: {
            ...card
        }
    }
}
export const removeCardBasket = (id: string): TCardBasketActionTypes => {
    return {
        type: REMOVE_CARD_BASKET,
        payload: {
            id
        }
    }
}