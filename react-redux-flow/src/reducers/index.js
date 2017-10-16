import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { todos, filter } from './todos.js';
import { productList, productItem, addProductCart } from './products.js';

const rootReducer = combineReducers({
  todos,
  filter,
  productList,
  productItem,
  addProductCart,
  routing: routerReducer
});

export default rootReducer;
