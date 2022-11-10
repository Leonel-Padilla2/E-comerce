import { getAllProducts, getProductById } from "../../services/products"
import { actionTypes } from "../constants/actionTypes"

export const fetchProducts = () => (dispatch) => {
  getAllProducts()
    .then(response => {
      if (response.status !== 200) throw new Error(response.error)
      dispatch({type: actionTypes.FETCH_PRODUCTS, payload: response.data})
    })
} 

export const fetchSelectedProduct = (id) => (dispatch) => {
  getProductById(id)
    .then(response => {
      if (response.status !== 200) throw new Error(response.error)
      dispatch({type: actionTypes.FETCH_SELECTED_PRODUCT, payload: response.data})
    })
}

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT
  }
}