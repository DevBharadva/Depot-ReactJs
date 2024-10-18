import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_TO_CART, INCRIMENT_TO_CART, DECRIMENT_TO_CART } from "../Constant";


const getdatafromlocalstroage = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : []
}


const cartReducer = (data = getdatafromlocalstroage(), action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('AddtoCartReducer', action);

            const exitingProduct = data.findIndex(item => item.id === action.data.id)

            let updatedCart;

            if (exitingProduct >= 0) {

                updatedCart = data.map((item) => item.id === action.data.id ? { ...item, quantity: item.quantity += 1 } : item)

                localStorage.setItem('cart', JSON.stringify(updatedCart))

            } else {
                updatedCart = [{ ...action.data, quantity: 1 }, ...data]
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart))

            return updatedCart

        case REMOVE_TO_CART:
            console.log('RemoveCartReducer', action);
            // data.length = data.length - 1
            // data.length = data.length ? data.length - 1 : [] 
            const removeitem = data.filter((item) => item.id !== action.data)

            localStorage.setItem('cart', JSON.stringify(removeitem))

            return removeitem



        case "EMPTY_TO_CART":
            console.log('EmptyCartReducer', action);

            return data = []


        case DECRIMENT_TO_CART: 
            let  updatedDecriment = data.map((item) => item.id === action.data && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)

            return updatedDecriment;

        
        case INCRIMENT_TO_CART: 
            let updatedIncriment = data.map((item) => item.id === action.data? { ...item, quantity: item.quantity + 1 } : item)

            return updatedIncriment;
        
        default: return data
    }
}

export default cartReducer