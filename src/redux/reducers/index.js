import {combineReducers} from "redux";
import { fetchingReducer } from "./fetchingReducer";
import {productReducer} from './productReducer'

export const reducers = combineReducers({
  allProducts: combineReducers({
    allProducts: productReducer,
    status: fetchingReducer
  })
})