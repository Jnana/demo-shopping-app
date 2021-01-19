import { UpdateMode } from "../action/constants";

const initialState = {
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UpdateMode.ADD:
            return state.items.push(action.payload)
        case UpdateMode.REMOVE:
            return state.items.shift(action.payload)
        default: return state
    }
}
export default reducer;