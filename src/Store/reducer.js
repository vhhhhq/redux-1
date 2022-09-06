import * as actions from './actionTypes';

const initialState = {
    products: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.RESET_STATE:
            return initialState
        
        case actions.ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload]
            }
        
        
        default:
            return state;
    }
}