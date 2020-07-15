import React from 'react';
import Navbar from './Navbar';

export default function Layout(props){

    const title = 'Ecommerce React';
    return(
        <React.Fragment>
            <Navbar title={title}/>
            {props.children}
        </React.Fragment>
    )
}