import { combineReducers } from "redux";
import { CartReducer, FavouriteReducer, SelectedProductReducer, filterReducer, gridReducer, userReducer } from "./product";


const reducers = combineReducers({
    cart: CartReducer,
    selectedProduct: SelectedProductReducer,
    favourite : FavouriteReducer,
    user: userReducer,
    isGrid: gridReducer,
    filterArray: filterReducer,
});

export default reducers;