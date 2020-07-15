import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';

import Home from '../pages/Home';

export default function App(){

    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                   <Route component={ Home } path="/" exact/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}