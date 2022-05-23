import { ADD_CARD_WISHLIST, REMOVE_CARD_FROM_WISHLIST, CHANGE_STATUS_INBASKET } from "../actions";
import { ICards } from "../cardsActionCreator/cardsActionCreator";

interface IAddCardWishlistAction {
    type: typeof ADD_CARD_WISHLIST;
    payload: ICards;
}

interface IRemoveCardWishlistAction {
    type: typeof REMOVE_CARD_FROM_WISHLIST;
    payload: {
        id: string
    };
}

interface IChangeStatusInBasketAction {
    type: typeof CHANGE_STATUS_INBASKET;
    payload: {
        id: string
    };
}

export type TCardWishlistActionTypes =
    IAddCardWishlistAction
    | IRemoveCardWishlistAction
    | IChangeStatusInBasketAction

export const addCardWishlist = (card: ICards): TCardWishlistActionTypes => {
    return {
        type: ADD_CARD_WISHLIST,
        payload: {
            ...card
        }
    }
}

export const removeCardWishlist = (id: string): TCardWishlistActionTypes => {
    return {
        type: REMOVE_CARD_FROM_WISHLIST,
        payload: {
            id
        }
    }
}

export const changeStatusInBasket = (id: string): TCardWishlistActionTypes => {
    return {
        type: CHANGE_STATUS_INBASKET,
        payload: {
            id
        }
    }
}