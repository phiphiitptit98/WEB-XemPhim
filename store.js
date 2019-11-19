import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
var redux = require('redux');
const filminitialState = {
    isShow:true,
    data:[],
    firmls: [],
    textSearch:'',
    isShow1:true,
    server : 'phimmoi',
}

const allReducer = (state = filminitialState, action) => {
  switch (action.type) {
  case "CHANGE_FORM":
    return{...state,isShow:!state.isShow}
  case "CHANGE_SERVER_HDO":
    return{...state,server:'HDO'}
  case "CHANGE_SERVER_PHIMMOI":
    return{...state,server:'phimmoi'}
  case "CHANGE_SERVER_PHIMBATHU":
    return{...state,server:'phimbathu'}
  case "CHANGE_FORM1":
  
    return{...state,isShow1:!state.isShow1}
  case "GET_TEXT":
  console.log("2222")
  return{
    textSearch:action.tempValue
  }
    
  default:
    return state
  }
}
var store = redux.createStore(
  allReducer,
  applyMiddleware(thunk)
);
export default store ;