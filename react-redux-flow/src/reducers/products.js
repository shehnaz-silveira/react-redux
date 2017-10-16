// import { List, Map } from 'immutable';
import * as ActionTypes from '../constants/ActionTypes.js';

const initialState = [
  { id: 1, name: 'my first product', price: 200, inventary: 4 },
  { id: 2, name: 'my second product', price: 400, inventary: 5 },
  { id: 3, name: 'my third product', price: 800, inventary: 0 },
  { id: 4, name: 'my fouth product', price: 500, inventary: 3 },
  { id: 5, name: 'my fifth product', price: 700, inventary: 2 },
  { id: 6, name: 'my sixth product', price: 100, inventary: 1 }
];

const initialCartState = {
  cartItems: []
};

export function productList(state = initialState, action = null) {
  const { type } = action;
  switch (type) {
    case ActionTypes.PRODUCT_LIST:
      return initialState;
    case ActionTypes.PRODUCT_ITEM:
      return state;
    default:
      return state;
  }
}

export function productItem(state = 'All', action = null) {
  const { type } = action;
  switch (type) {
    case ActionTypes.PRODUCT_ITEM:
      return state;
    default:
      return state;
  }
}

export function addProductCart(state = initialCartState.cartItems, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.PRODUCT_CART:
      return [...state, payload];
    default:
      return state;
  }
}
