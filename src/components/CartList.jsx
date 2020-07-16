import React, { Component } from 'react';
import Image from '../components/Image';
import imageNoPic from '../images/nopic.png';
import './styles/CartList.css';
import { incrementCart, decrementCart } from '../reducers/Cart';

export default class CartList extends Component{

    decrementHandleClick = id => {
        const { decrementHandleClick } = this.props;
        return decrementHandleClick(id)
    }

    incrementHandleClick = id => {
        const { incrementHandleClick } = this.props;
        return incrementHandleClick(id)
    }

    render(){

        const { product } = this.props;

        return(
            <div className="card">
                <div className="card-body d-flex flex-row justify-content-between">
                    <Image src={imageNoPic} alt="No Image" className="CartList_img img-fluid"/>
                    <div>
                        {product.name}
                    </div>
                    <div className="contador-product">
                        <button onClick={() => this.decrementHandleClick(product.id)} type="button" className="btn btn-primary btn-sm">-</button>
                        <label>{product.quantity}</label>
                        <button onClick={() => this.incrementHandleClick(product.id)} type="button" className="btn btn-primary btn-sm">+</button>
                    </div>
                </div>
            </div> 
        )
    }
}