import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'shards-react';
import NavBar from './components/NavBar';
import About from './components/About';
import Bundles from './components/Bundles';
import Products from './components/Products';
import Cart from './components/Cart';
import Main from './components/Main';

const App = () => (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/products" component={ Products } />
          <Route path="/bundles" component={ Bundles } />
          <Route path="/about" component={ About } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </Container>
    </>
  );
  
export default App;
