import {ICardsBasket, TCardBasketActionTypes} from "../../actions/basketActionCreator/basketActionCreator";
import {ADD_CARD_BASKET, REMOVE_CARD_BASKET} from "../../actions/actions";

const initialStateBasket: ICardsBasket[] = []

const basketReducer = (state = initialStateBasket, { payload, type }: TCardBasketActionTypes): ICardsBasket[] => {
    switch (type) {
        case ADD_CARD_BASKET:
            return [
                ...state, {
                    title: payload.title,
                    price: payload.price,
                    id: payload.id,
                    image: payload.image,
                    isbn13: payload.isbn13,
                    amount: payload.amount,
                    total: payload.total
                }
            ]
        case REMOVE_CARD_BASKET:
            return state.filter(card => card.id !== payload.id)
        default:
            return state
    }
}

export default basketReducer