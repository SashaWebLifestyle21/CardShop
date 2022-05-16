import { IBasket, TCardBasketActionTypes } from "../../actions/basketActionCreator/basketActionCreator";
import { ADD_CARD_BASKET, INCREASE_CARD_AMOUNT, REMOVE_CARD_FROM_BASKET, DECREASE_CARD_AMOUNT } from "../../actions/actions";

const initialStateBasket: IBasket = { totalPrice: 0, cards: [] }

const basketReducer = (state = initialStateBasket, { payload, type }: TCardBasketActionTypes): IBasket => {
    switch (type) {
        case ADD_CARD_BASKET:
            return {
                cards: [
                    ...state.cards, {
                            title: payload.title,
                            price: payload.price,
                            id: payload.id,
                            image: payload.image,
                            isbn13: payload.isbn13,
                            stock: payload.stock,
                            amount: payload.amount,
                            total: payload.total,
                            inBasket: payload.inBasket,
                            inWishlist: payload.inWishlist
                    }
                ],
                totalPrice: state.totalPrice + payload.total
            }
        case REMOVE_CARD_FROM_BASKET:
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== payload.id),
                totalPrice: state.totalPrice - payload.total
            }
        case INCREASE_CARD_AMOUNT:
            return {
                ...state,
                cards: state.cards.map(card => card.id === payload.id ? {...card, amount: card.amount + 1, total: card.total + Number(card.price)} : {...card}),
                totalPrice: state.totalPrice + Number(payload.price)
            }
        case DECREASE_CARD_AMOUNT:
            return {
                ...state,
                cards: state.cards.map(card => card.id === payload.id ? {...card, amount: card.amount - 1, total: card.total - Number(card.price)} : {...card}),
                totalPrice: state.totalPrice - Number(payload.price)
            }
        default:
            return {
                ...state
            }
    }
}

export default basketReducer