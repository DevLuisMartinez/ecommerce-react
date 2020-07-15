import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductsGrid from '../components/ProductsGrid';
import { getProducts } from '../reducers/Products';

class Home extends Component {

    componentDidMount(){
        const { getProducts } = this.props;
        getProducts();
    }


    render(){

        const { Products:{ data: products}} = this.props;
        return(
            <div className="container-fluid pt-5">
                <div className="col-12 text-center">
                    <h2>Our Products</h2>
                </div>
                <ProductsGrid products={products}/>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch( getProducts() )
});
 
export default connect(mapStateToProps,mapDispatchToProps)(Home);