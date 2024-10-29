import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    total: 0
}

const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {

addtocart: (state , data) => {
        state.cart.push(data.payload)
        console.log('Added to cart:', data);
},   

deltocart: (state , data) => {
    state.cart.pop(data.payload)
    console.log('Removed from cart:', data);
},


}})

export const { addtocart, deltocart, decreaseCart, getTotals } = cartSlice.actions
export default cartSlice.reducer