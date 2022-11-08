import {actionTypes} from '../constants/actionTypes'

const initialState = {
  products: [],
  selectedProduct: {}
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {...state, products: action.payload}

      case actionTypes.SELECTED_PRODUCT:
        return {...state, selectedProduct: action.payload}

    default: 
      return state
  }
}