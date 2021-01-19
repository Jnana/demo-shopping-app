import { UpdateMode } from "./constants";

export function addToCart(item) {
    return {
        type: UpdateMode.ADD,
        payload: item
    }
}

export function removeFromCart(item) {
    return {
        type: UpdateMode.REMOVE,
        payload: item
    }
}
