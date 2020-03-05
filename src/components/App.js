import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { Container } from 'shards-react';

import NavBar from './NavBar';
import About from './About';
import Bundles from './Bundles';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import NotFound from './NotFound';
import Orders from './Orders';
import Checkout from './Checkout';
import Success from './Success';
import Main from './Main';

const App = () => {
	return (
		<React.Fragment>
			<NavBar />
			<Container>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/products/:productId" component={ProductDetails} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/bundles" component={Bundles} />
					<Route exact path="/about" component={About} />
					<Route exact path="/orders" component={Orders} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/success" component={Success} />
					<Route exact path="/cart" component={Cart} />
					<Route component={NotFound} />
				</Switch>
			</Container>
		</React.Fragment>
	);
};

export default App;
