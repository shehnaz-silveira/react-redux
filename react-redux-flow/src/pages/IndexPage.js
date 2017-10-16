import React, { Component } from 'react';
import { Link } from 'react-router';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Link to="/todo">Go to TodoList</Link>
        <h2>Shopping Cart</h2>
        <Link to="/shopping">Go to shopping cart</Link>
      </div>
    );
  }
}
