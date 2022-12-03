import { actionTypes } from "../constants/actionTypes"


export const fetchPending = () => {
  return{
    type: actionTypes.FETCH_PENDING
  }
}

export const fetchFulfilled = () => {
  return{
    type: actionTypes.FETCH_FULFILLED
  }
}

export const fetchError = (error) => {
  return{
    type: actionTypes.FETCH_ERROR,
    payload: error
  }
}