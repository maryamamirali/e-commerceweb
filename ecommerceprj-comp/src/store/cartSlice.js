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


decreaseCart(state, action) {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );
},


deltocart: (state , data) => {
    state.cart.pop(data.payload)
    console.log('Removed from cart:', data);
},


getTotals(state, action) {
    let { total, quantity } = state.cartItems.reduce(
      (cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;

        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    state.cartTotalQuantity = quantity;
    state.cartTotalAmount = total;
  },
},
})

export const { addtocart, deltocart, decreaseCart, getTotals } = cartSlice.actions
export default cartSlice.reducer