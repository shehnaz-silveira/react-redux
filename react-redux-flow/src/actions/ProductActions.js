import {
  PRODUCT_LIST,
  PRODUCT_ITEM,
  PRODUCT_CART
} from '../constants/ActionTypes';

export function getProductList() {
  return {
    type: PRODUCT_LIST,
    payload: {
      name: false
    }
  };
}

export function getProductItem(id) {
  return {
    type: PRODUCT_ITEM,
    payload: {
      id
    }
  };
}

export function setProductCart(product) {
  return {
    type: PRODUCT_CART,
    payload: {
      product
    }
  };
}
