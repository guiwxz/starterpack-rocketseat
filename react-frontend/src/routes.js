import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}></Route>
                <Route path='/product/:id' component={Product}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;