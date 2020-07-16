import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductsGrid from '../components/ProductsGrid';
import { getProducts } from '../reducers/Products';
import { addCart } from '../reducers/Cart';

class Home extends Component {

    componentDidMount(){
        const { getProducts } = this.props;
        getProducts();
    }

    addProduct = (product) => {
        const { addCart } = this.props;
        addCart({...product, quantity: 1, product_id: product});
    }

    render(){

        const { Products:{ data: products}} = this.props;
        return(
            <div className="container-fluid pt-5">
                <div className="col-12 text-center">
                    <h2>Our Products</h2>
                </div>
                <ProductsGrid products={products} handleClickAddCart={this.addProduct}/>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    console.log(state);
    return state;
};

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch( getProducts() ),
    addCart: payload => dispatch( addCart(payload) )
});
 
export default connect(mapStateToProps,mapDispatchToProps)(Home);