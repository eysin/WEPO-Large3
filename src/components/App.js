import React from 'react';

import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Bundles from './Bundles';
import Products from './Products';
import Cart from './Cart';
import NotFound from './NotFound';
import Main from './Main';


const App = () => {
    return (
    <React.Fragment>
        <NavBar />
        <div>
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/products" component={ Products } />
            <Route path="/bundles" component={ Bundles } />
            <Route path="/about" component={ About } />
            <Route path="/cart" component={ Cart } />
            <Route component={ NotFound } />
        </Switch>
        </div>
    </React.Fragment>
    )
    return <p>Start working here!</p>
};

export default App;
