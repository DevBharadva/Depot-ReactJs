import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART, INCRIMENT_TO_CART, DECRIMENT_TO_CART } from '../Constant'

export const addToCart = (data) => {
    console.log('addtoCart', data);
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
    console.log('removetoCart', data);
    return {
        type: REMOVE_TO_CART,
        data
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_TO_CART
    }
}

export const IncrimentToCart = (data) => {
    return {
        type: INCRIMENT_TO_CART,
        data
    }
}

export const DeincrimentToCart = (data) => {
    return {
        type: DECRIMENT_TO_CART,
        data
    }
}