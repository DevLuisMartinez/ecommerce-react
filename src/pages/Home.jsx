import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Toast from '../components/Toast';
import ProductsGrid from '../components/ProductsGrid';
import { getProducts } from '../reducers/Products';
import { loading, disabled, toast } from '../reducers/Notify';
import { addCart, existProductInCart, incrementQuantityProductInCart, saveProductsInCart, cleanCart } from '../reducers/Cart';

class Home extends Component {

    constructor(props){
        super(props);
        const { loading } = this.props;
        loading(true);
    }

    componentDidMount(){
        const { getProducts } = this.props;
        getProducts();

    }

    addProduct = (product) => {
        const { addCart, incrementQuantityProductInCart, saveProductsInCart, disabled } = this.props;
        disabled('disabled');
        if(!this.verifyProductExist(product.id)){
            addCart({...product, quantity: 1, product_id: product})
            saveProductsInCart();
        }else{
            incrementQuantityProductInCart(product.id)
        };
        
        //addCart({...product, quantity: 1, product_id: product});
    }

    verifyProductExist = (productId) => {
        const { existProductInCart } = this.props;
        return existProductInCart(productId);
    }

    render(){

        const { 
            Products:{ data: products}, 
            Notify:{ loading, disabled, toast }
        } = this.props;

        console.log(this.props);
        return(
            <div className="container-fluid pt-5">
                <Toast {...toast}/>
                <div className="col-12 text-center">
                    <h2>Our Products</h2>
                </div>
                { loading
                    ? <Loading/>
                    : <ProductsGrid products={products} handleClickAddCart={this.addProduct} disabled={disabled}/>}
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch( getProducts() ),
    addCart: payload => dispatch( addCart(payload) ),
    existProductInCart: payload => dispatch(existProductInCart(payload)),
    incrementQuantityProductInCart: payload => dispatch(incrementQuantityProductInCart(payload)),
    saveProductsInCart: payload => dispatch(saveProductsInCart(payload)),
    loading: payload => dispatch(loading(payload)),
    disabled: payload => dispatch(disabled(payload)),
    toast: payload => dispatch(toast(payload)),
});
 
export default connect(mapStateToProps,mapDispatchToProps)(Home);