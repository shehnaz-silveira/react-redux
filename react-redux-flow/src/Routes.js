import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './lib/store';
const history = syncHistoryWithStore(hashHistory, store);
import IndexPage from 'pages/IndexPage';
import ProductApp from 'components/ProductApp';
import TodoApp from 'components/TodoApp';


export default class Routes2 extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={IndexPage} />
        <Route path="shopping" component={ProductApp} />
        <Route path="todo" component={TodoApp} />
      </Router>
    );
  }
}
