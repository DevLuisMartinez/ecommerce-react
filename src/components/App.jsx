import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';

import Home from '../pages/Home';
import Cart from '../pages/Cart';

export default function App(){

    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                   <Route component={ Home } path="/" exact/>
                   <Route component={ Cart } path="/cart" exact/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}