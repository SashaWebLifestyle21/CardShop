import {
    GET_CARDS_STARTED,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAILURE,
    CHANGE_CARD_STATUS_BASKET,
    CHANGE_CARD_STATUS_WISHLIST
} from "../../actions/actions";
import { ICards, IError, TCardActionTypes } from "../../actions/cardsActionCreator/cardsActionCreator";

export interface IInitialState {
    cards: ICards[],
    isLoading: boolean,
    error: IError | null
}

export const initialState = {
    cards: [] as ICards[],
    isLoading: false,
    error: null
}

const cardsReducer =(state = initialState,{ payload, type }: TCardActionTypes): IInitialState => {
    switch (type){
        case GET_CARDS_SUCCESS:
            return {
                ...state, cards: [
                    ...payload as ICards[]
                ], isLoading: false
            }
        case GET_CARDS_STARTED:
            return {
                ...state, isLoading: true
            }
        case GET_CARDS_FAILURE:
            return {
                ...state, error: payload.error, isLoading: false,
            };
        case CHANGE_CARD_STATUS_BASKET:
            return {
                ...state,
                cards: state.cards.map(card => card.id === payload.id ? { ...card, inBasket: !card.inBasket } : { ...card })
            }
        case CHANGE_CARD_STATUS_WISHLIST:
            return {
                ...state,
                cards: state.cards.map(card => card.id === payload.id ? { ...card, inWishlist: !card.inWishlist } : { ...card })
            }
        default:
            return state
    }
}

export default cardsReducer