import { actionTypes } from "../constants/actionTypes"

/*Verifies if the product is already added, if is, increase it's quantity once.*/
export const addProductCart = () => (dispatch, getState) => {
  const {selectedProduct} = getState().allProducts.allProducts
  const {products} = getState().cart

  if (products.find(product => product.id === selectedProduct.id)){
    dispatch(increaseQuantityProductCart(selectedProduct.id))
  } else {
    dispatch({type: actionTypes.ADD_PRODUCT_CART, payload: selectedProduct})
  }
}

export const removeProductCart = (id) => {
  return{
    type: actionTypes.REMOVE_PRODUCT_CART, 
    payload: id
  }
}

export const increaseQuantityProductCart = (id) => {
  return{
    type: actionTypes.INCREASE_QUANTITY_PRODUCT_CART,
    payload: id
  }
}

export const decreaseQuantityProductCart = (id) => {
  return{
    type: actionTypes.DECREASE_QUANTITY_PRODUCT_CART,
    payload: id
  }
}