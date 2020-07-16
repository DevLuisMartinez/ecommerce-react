import React, { Component } from 'react';
import CartList from '../components/CartList';
import { connect } from 'react-redux';
import { incrementCart, decrementCart, checkout } from '../reducers/Cart';

class Cart extends Component{

    decrementCart = id => {
        const { decrementCart } = this.props;
        decrementCart(id);

    }

    incrementCart = id => {
        const { incrementCart } = this.props;
        incrementCart(id);
    }

    checkout = () => {
        const { checkout } = this.props;
        checkout();
    }

    render(){

        const { Cart: {products} } = this.props;
        console.log(this.props);
        return(
            <div className="container-fluid pt-5">
                <h2>Cart</h2>
                <div className="d-flex justify-content-between pt-2">
                    <div className="col-8">
                        { products.length > 0 
                            ? products.map( product => { 
                                return(
                                    <CartList product={product} decrementHandleClick={this.decrementCart} incrementHandleClick={this.incrementCart} key={product.id}/>
                                ) 
                            })
                            :
                            <div>
                                <p>Empty Cart...</p>
                            </div>
                        }
                        
                    </div>
                    <div className="col-4">
                        <button type="button" onClick={this.checkout} className="btn btn-outline-dark col-12">Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    incrementCart : payload => dispatch(incrementCart(payload)),
    decrementCart : payload => dispatch(decrementCart(payload)),
    checkout: payload => dispatch(checkout())
});
export default connect(mapStateToProps,mapDispatchToProps)(Cart)