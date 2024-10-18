import cartReducer from './cartRedux/cartReduxer'
import  productReducer from './productRedux/productReducer'
import wishlistReducer from './Wishlistredux/wishlistReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
        cart: cartReducer,
        product: productReducer,
        wishlist: wishlistReducer
})


export default rootReducer