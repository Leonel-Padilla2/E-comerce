import { actionTypes } from "../constants/actionTypes";

const initialState = {
  products: []
}

export const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.ADD_PRODUCT_CART:
      const addedProduct = [...state.products, {...action.payload, quantity: 1}]
      return {...state, products: addedProduct}
    
    case actionTypes.REMOVE_PRODUCT_CART:
      const removedProduct = state.products.filter(product => product.id !== action.payload)
      return {...state, products: removedProduct}
    
    case actionTypes.INCREASE_QUANTITY_PRODUCT_CART:
      const increasedQuantity = state.products.map(product => {
        if(product.id === action.payload){
          return {...product, quantity: (product.quantity + 1)}
        }  
        return {...product}
      })
      return {...state, products: increasedQuantity}

    case actionTypes.DECREASE_QUANTITY_PRODUCT_CART:
      const decreasedQuantity = state.products.map(product => {
        if(product.id === action.payload){
          return {...product, quantity: (product.quantity - 1)}
        }  
        return {...product}
      })
      return {...state, products: decreasedQuantity}
    
    default:
      return state
  }
}