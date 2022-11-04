import { actionTypes } from "../constants/ActionTypes"

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products
  }
}

export const selectedProducts = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product
  }
}