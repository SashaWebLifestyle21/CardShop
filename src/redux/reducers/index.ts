import { combineReducers } from 'redux';
import cardsReducer from "./cardsReducer/cardsReducer";

const rootReducer = combineReducers({
    cards: cardsReducer,
});



export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
