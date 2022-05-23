import { combineReducers } from 'redux';
import basketReducer from './basketReducer/basketReducer';
import cardsReducer from "./cardsReducer/cardsReducer";
import wishlistReducer from "./wishlistReducer/wishlistReducer";

const rootReducer = combineReducers({
    cards: cardsReducer,
    basket: basketReducer,
    wishlist: wishlistReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
