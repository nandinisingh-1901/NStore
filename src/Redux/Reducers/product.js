import { ActionTypes } from "../Constants/action-type";

export const CartReducer = (state = [], {type,payload}) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const filteredList = state.filter((item) => item.id === payload.id)
            if(filteredList.length > 0){
                return state.map((item) => {
                    if(item.id === payload.id){
                        return {...item, quantity: 1,favourite : false}
                    }else{
                        return item;
                    }
                })
            }else{
                return [...state,{...payload, quantity: 1}];
            }

        case ActionTypes.REMOVE_FROM_CART:
            return state.filter((item) => item.id !== payload.id);

        case ActionTypes.INCREASE_QUANTITY:
            state.forEach((item) => {
                if(item.id === payload){
                    item.quantity += 1;
                }
            })
            return state;
        case ActionTypes.DECREASE_QUANTITY:
            state.forEach((item) => {
                if(item.id === payload){
                    item.quantity -= 1;
                }
            })
            return state;   
        case ActionTypes.ADD_TO_CART_FROM_PRODUCT:  
            const filteredList2 = state.filter((item) => item.id === payload.data.id)
            if(filteredList2.length > 0){
                return state.map((item) => {
                    if(item.id === payload.data.id){
                        return {...item, quantity: payload.quantity}
                    }else{
                        return item;
                    }
                })
            }else{
                return [...state,{...payload.data, quantity: payload.quantity}];
            }
        // case ActionTypes.IS_LIKED:
        //     const cart = state.length
        //     if(cart > 0){
        //         return [...state,{...payload}];
        //     }

        default:
            return state;    
    }
}
export const SelectedProductReducer = (state = {}, {type,payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export const FavouriteReducer = (state = [], {type,payload}) => {
    switch(type){
        case ActionTypes.ADD_TO_FAVORITE:
           const filterFav = state.filter((item)=> item.id === payload.id)
           if(filterFav.length > 0){
                 return state
           }
           return [...state, {...payload,favourite : true}]

        case ActionTypes.REMOVE_FROM_FAVORITE:
            const filteredFavouriteItems = state.filter((item)=>  item.id !== payload )
            if(filteredFavouriteItems.length > 0){
                return filteredFavouriteItems
            }else{
                return []
            }
        default:
            return state;
    }
    
}
export const userReducer = (state = {}, {type,payload}) => {
    switch(type){
        case ActionTypes.SET_USER:
            const {displayName,email,photoURL,uid } = payload
            return {...state, displayName,email,photoURL,uid}
        case ActionTypes.LOGOUT:
            return {}
        default:
            return state;
    }
}
export const gridReducer = (state = true, {type,payload}) => {
    switch(type){
        case ActionTypes.SET_GRID_VIEW:
            return true;
        case ActionTypes.SET_LIST_VIEW:
            return false;    
        default:
            return state;
    }
}
export const filterReducer = (state = [], {type,payload}) => {
    switch(type){
        case ActionTypes.FILTER_PRODUCTS:
            return [...payload];
        default:
            return state;
    }
}