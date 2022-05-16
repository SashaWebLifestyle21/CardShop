import { ICards } from "../../actions/cardsActionCreator/cardsActionCreator";
import { TCardWishlistActionTypes } from "../../actions/wishlistActionCreator/wishlistActionCreator";
import { ADD_CARD_WISHLIST, REMOVE_CARD_FROM_WISHLIST } from "../../actions/actions";


const initialStateWishlist = [] as ICards[]

const wishlistReducer = (state = initialStateWishlist, { payload, type }: TCardWishlistActionTypes): ICards[]  => {
    switch (type) {
        case ADD_CARD_WISHLIST:
            return [
                ...state,
                {
                    title: payload.title,
                    price: payload.price,
                    id: payload.id,
                    image: payload.image,
                    isbn13: payload.isbn13,
                    stock: payload.stock,
                    inBasket: payload.inBasket,
                    inWishlist: payload.inWishlist
                }
            ]
        case REMOVE_CARD_FROM_WISHLIST:
            return state.filter(card => card.id !== payload.id)
        default:
            return state
    }
}

export default wishlistReducer