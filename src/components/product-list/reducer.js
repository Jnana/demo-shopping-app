import { ADD_TO_CART, REMOVE_FROM_CART } from './action'

const initialState = {
    items: []
}

export const ProductListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return state.items.push(action.payload)
        case REMOVE_FROM_CART:
            return state.items.shift(action.payload)
        default: return state
    }
}