import { ADD_TO_WISHLIST, REMOVE_TO_WISHLIST, EMPTY_WISHLIST, WISHLIST_TO_CART } from "../Constant";

export const addToWishList = (data) => {
    console.log('addtoWishlist', data);
    return {
        type:ADD_TO_WISHLIST,
        data
    }
}

export const removeToWishList = (data) => {
    console.log('removeToWishlist', data);

    return {
        type:REMOVE_TO_WISHLIST,
        data
    }
}

export const emptyWishlist = (data) => {
    return {
        type:EMPTY_WISHLIST,
        data
        
    }
}

export const wishListToCart = (data) => {
    return {
        type:WISHLIST_TO_CART,
        data
    }
}
