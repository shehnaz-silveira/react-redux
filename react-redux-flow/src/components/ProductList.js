import React, { Component } from 'react';
// import Immutable from 'immutable';
// import { setProductCart } from '../actions/ProductActions';
export default class ProductList extends Component {


  addToCart(product) {
    this.props.setProductCart(product);
  }

  render() {
    const { productList } = this.props;
    let list;
    if (!productList) {
      list = null;
    } else {
      list = productList.map(item => (
        <li key={item.id}>
        {item.name}-{item.price}
        <button
          className="btn btn-primary"
          onClick={() => this.addToCart(item)}
          disabled = { (item.inventary > 0) ? '' : 'disabled' }
        > { (item.inventary > 0) ? 'Add To Cart' : 'Sold Out' } </button>
        </li>
      )
    );
    }
    return (
      <section className="main">
      <div>Product List</div>
      <ul>{list}</ul>
      </section>
    );
  }
}
