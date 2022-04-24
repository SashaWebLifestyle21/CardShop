import { combineReducers } from 'redux';
import basketReducer from './basketReducer/basketReducer';
import cardsReducer from "./cardsReducer/cardsReducer";

const rootReducer = combineReducers({
    cards: cardsReducer,
    basket: basketReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
