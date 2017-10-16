import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { cartList } = this.props;
    let lists = (cartList.length === 0) ? (<li>Please Add TO Cart</li>) :
    cartList.map((list) => (
            <li>{list.product.name} --{list.product.price} </li>

    ));
    return (
      <section className="main">
      <div>Cart List</div>
      <ul>
      {lists}
      </ul>
      </section>
    );
  }
}
