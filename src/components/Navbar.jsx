import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import H4 from './H4';

import './styles/Navbar.css';


export default class Navbar extends Component{

    render(){

        const { title } = this.props;
        
        const style = { color: "#fff" }

        return(
            <nav className="Navbar navbar navbar-dark bg-dark">
                <Link className="navbar-brand" href="#" to="/">
                    <H4 style={ style } className={ 'Navbar__title-text' }>{ title }</H4>
                </Link>
            </nav>
        )
    }
}