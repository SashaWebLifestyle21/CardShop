import { GET_CARDS_STARTED, GET_CARDS_SUCCESS, GET_CARDS_FAILURE } from "../../actions/actions";
import { ICards, IError, TCardActionTypes } from "../../actions/cardsActionCreator/cardsActionCreator";

interface IInitialState {
    cards: ICards[],
    isLoading: boolean,
    error: IError | null
}

const initialState = {
    cards: [],
    isLoading: false,
    error: null
}

const cardsReducer =(state = initialState,{ payload, type }: TCardActionTypes): IInitialState => {
    switch (type){
        case GET_CARDS_SUCCESS:
            return {
                ...state, cards: [
                    ...payload
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
        default:
            return state
    }
}

export default cardsReducer