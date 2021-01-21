import { combineReducers } from 'redux';
import CartReducer from '../../components/cart/reducer'
import { ProductListReducer } from '../../components/product-list/reducer'

export default combineReducers(
    {
        CartReducer,
        ProductListReducer
    });
