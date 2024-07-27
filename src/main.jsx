import React, { useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { combineReducers, legacy_createStore as createStore } from 'redux'
import { cloneDeep } from './helpers/utility.jsx'


const userReduser = (state = { username: '', userImg: null},action) => {
  if (action.type === 'LOGIN') {
    const newState = cloneDeep(state);
    newState.username = action.payload.username;
    newState.userImg = action.payload.userImg;
    return newState;
  }

  return state;
}

const cartReduser = (state = { itemList:[]}, action) => {

  if (action.type === 'ADD_TO_CART') {
    const newState = cloneDeep(state);
    newState.itemList.push(action.payload.item);
    return newState;
  }

  return state;
}

const store = createStore(storeReducer);
const storeReducer = combineReducers({
  user: userReduser,
  cart: cartReduser
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
