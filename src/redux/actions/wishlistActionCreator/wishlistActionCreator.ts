import { ADD_CARD_WISHLIST, REMOVE_CARD_FROM_WISHLIST } from "../actions";
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

export type TCardWishlistActionTypes = IAddCardWishlistAction | IRemoveCardWishlistAction

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