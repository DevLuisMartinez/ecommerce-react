import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentCart } from '../reducers/Cart';
import H4 from './H4';

import './styles/Navbar.css';


class Navbar extends Component{

    componentDidMount(){
        const { getCurrentCart } = this.props;
        getCurrentCart();
    }

    render(){

        const { title, Cart:{ products_quantity } } = this.props;
        const style = { color: "#fff" }

        return(
            <nav className="Navbar navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <H4 style={ style } className={ 'Navbar__title-text' }>{ title }</H4>
                </Link>
                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item active">
                        <Link to="/cart" className="Navbar__option nav-link">Cart <span className="badge badge-warning">{ products_quantity }</span></Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => ({
    getCurrentCart: () => dispatch(getCurrentCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)