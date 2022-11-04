import {actionTypes} from '../constants/actionTypes'

const initialState = {
  products: [{
    id: 1,
    title: 'Dipesh',
    category: 'Programmer'
  }]
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return state

    default: 
      return state
  }
}