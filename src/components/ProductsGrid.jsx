import React, { Component } from 'react';
import Image from './Image';
import imageNoPic from '../images/nopic.png';
import './styles/ProductGrid.css';

export default class ProductsGrid extends Component {

    render() {
        const { products, handleClickAddCart } = this.props;
        return(
            <div className="ProductGrid d-flex flex-wrap">
                {
                    products.map( product => {
                        return(
                            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
                                <ProductGridItem product={product} handleClickAddCart={handleClickAddCart}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export class ProductGridItem extends Component{

    handleClickAddCart = product => e => {
        const { handleClickAddCart } = this.props;
        return handleClickAddCart(product);
    }

    render() {
        const { product } = this.props
        return(
            <div className="ProductGridItem">
                <Image src={imageNoPic} alt="No Image" className="ProductGridItem__image img-fluid"/>
                <div className="ProductGridItem__info d-flex flex-column">
                    <div>
                        <h5>{ product.name }</h5>
                        <label>SKU - { product.sku }</label>
                    </div>
                    <button onClick={ this.handleClickAddCart(product) } type="button" className="btn btn-warning">Add to Cart</button>
                </div>
            </div>
        )
    }
}


