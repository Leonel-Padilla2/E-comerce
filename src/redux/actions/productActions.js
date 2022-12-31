import { getAllProducts, getProductById } from "../../services/products"
import { actionTypes } from "../constants/actionTypes"
import { fetchError, fetchFulfilled, fetchPending } from "./fetchingActions"

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchPending())

  getAllProducts()
    .then(response => {
      if (response.status !== 200) throw new Error(response.error)
      dispatch({type: actionTypes.FETCH_PRODUCTS, payload: response.data})
    })
    .catch(error => dispatch(fetchError(error.message)))
    .finally(() => dispatch(fetchFulfilled()))
} 

export const fetchSelectedProduct = (id) => (dispatch) => {
  dispatch(fetchPending())
  
  getProductById(id)
    .then(response => {
      if (response.status !== 200) throw new Error(response.error)
      dispatch({type: actionTypes.FETCH_SELECTED_PRODUCT, payload: response.data})
    })
    .catch(error => dispatch(fetchError(error.message)))
    .finally(() => dispatch(fetchFulfilled()))
}

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT
  }
}