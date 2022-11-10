import { actionTypes } from "../constants/actionTypes"

const initialState = {
  loading: 'idle',
  error: null
}

export const fetchingReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.FETCH_PENDING:
      return {...state, loading: 'pending'}

    case actionTypes.FETCH_FULFILLED:
      return {...state, loading: 'succeded'}

    case actionTypes.FETCH_ERROR:
      return {loading: 'rejected', error: action.payload}
      
    default:
      return state
  }
}