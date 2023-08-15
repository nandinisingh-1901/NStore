import data from "../../API/products"
import { ActionTypes } from "../Constants/action-type"

export const addToCart = (data) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: data,
    }
}

export const increaseQuantity = (id) => {
    return {
        type: ActionTypes.INCREASE_QUANTITY,
        payload: id,
    }
}
export const decreaseQuantity = (id) => {
    return {
        type: ActionTypes.DECREASE_QUANTITY,
        payload: id,
    }
}
export const addSelectedProduct = (data) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: data,
    }
}
export const addToCartFromProduct = (data,quantity=1) => {
    return {
        type: ActionTypes.ADD_TO_CART_FROM_PRODUCT,
        payload: {
            data: data,
            quantity: quantity,
        }
    }
}
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const addToFavorite = (data) => {
    return {
        type: ActionTypes.ADD_TO_FAVORITE,
        payload: data,
    }
}
export const removeFromFavorite = (id) => {
    return {
        type: ActionTypes.REMOVE_FROM_FAVORITE,
        payload: id,
    }
}
export const setLiked = (id) => {
    return {
        type: ActionTypes.IS_LIKED,
        payload: id,
    }
}
export const setUser = (user) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user,
    }
}
export const setLogout = () => {
    return {
        type: ActionTypes.LOGOUT,
    }
}
export const setGridView = () => {
    return {
        type: ActionTypes.SET_GRID_VIEW,
    }
}
export const setListView = () => {
    return {
        type: ActionTypes.SET_LIST_VIEW,
    }
}

export const setFilterProducts = (data) => {
    return {
        type: ActionTypes.FILTER_PRODUCTS,
        payload:data
    }
}