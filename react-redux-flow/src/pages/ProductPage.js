import React, { Component } from 'react';
import ProductApp from 'components/ProductApp';
import { connect } from 'react-redux';

export class ProductPage extends Component {
    render() {
        return (<div>
            <ProductApp />
            </div>
        );
    }
}

const mapStateToProps = function mapStateToProps(state) {
  console.log(state)
    return { productList: state.productList, cartList: state.addProductCart};
};
export default connect(mapStateToProps, productActionCreators)(ProductApp);
