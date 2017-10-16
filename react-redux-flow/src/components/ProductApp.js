import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import Cart from './Cart';
import * as productActionCreators from '../actions/ProductActions.js';

export class ProductApp extends Component {
  render() {
    const { productList, setProductCart, cartList } = this.props;
    return (
      <div>
        <ProductList productList={productList} setProductCart={setProductCart} />
        <Cart cartList={cartList} />
      </div>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return { productList: state.productList, cartList: state.addProductCart };
};
export default connect(mapStateToProps, productActionCreators)(ProductApp);
