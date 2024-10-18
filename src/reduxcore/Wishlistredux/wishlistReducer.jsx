import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from '../Constant'

const getdatafromlocalstroage = () => {
    const wishlistdata = localStorage.getItem('wishlist')
    return wishlistdata ? JSON.parse(wishlistdata) : []
}


const wishlistReducer = (data = getdatafromlocalstroage, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            console.log('AddtoWishlistreducer', action);

            const exitingProduct = data.findIndex(item => item.id === action.data.id)

            let updateWishlist;

            if (exitingProduct >= 0) {

                updateWishlist = data.map((item) => item.id === action.data.id ? { ...item, quantity: item.quantity += 1 } : item)
                localStorage.setItem('wishlist', JSON.stringify(updateWishlist))

            } else {
                updateWishlist = [{ ...action.data, quanitity: 1 }, ...data]
            }

            localStorage.setItem('wishlist', JSON.stringify(updateWishlist))

            return updateWishlist


        case REMOVE_TO_WISHLIST:

            console.log('RemoveWishlistReducer', action);
                
            const removeitem = data.filter((item)=> item.id !== action.data)
            localStorage.setItem('wishlist', JSON.stringify(removeitem))
            return removeitem

        case EMPTY_WISHLIST: return {

        }
        case WISHLIST_TO_CART: return {
                
        }
        default: return []
    }
}

export default wishlistReducer