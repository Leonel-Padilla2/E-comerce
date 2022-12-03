import {actionTypes} from '../constants/actionTypes'

const initialState = {
  products: [],
  selectedProduct: {}
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {...state, products: action.payload}

      case actionTypes.FETCH_SELECTED_PRODUCT:
        return {...state, selectedProduct: action.payload}

      case actionTypes.REMOVE_SELECTED_PRODUCT:
        return {...state, selectedProduct: {}}  

    default: 
      return state
  }
}