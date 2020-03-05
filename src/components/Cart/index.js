import React from 'react';
import { Container, Row, Col } from 'shards-react';

class Cart extends React.Component {
	componentDidMount() {
		let cart = localStorage.getItem('cart');
		if (cart !== undefined) {
			this.setState({
				cart: cart,
			});
		}
	}
	state = {
		cart: [],
	};
	render() {
		const cart = this.state;
		return (
			<h1>Hello Kitty CAT</h1>
			// <Container>
			// 	{cart.length != 0 ? (
			// 		<Row>
			// 			{cart.map((value, index) => (
			// 				<Col sm="4" key={index} className="productContainer">
			// 					<Link
			// 						to={{ pathname: `/products/${value.id}`, product: value }}
			// 					>
			// 						{value.name}
			// 					</Link>
			// 					<img src={value.image} />
			// 					<p>{value.description}</p>
			// 				</Col>
			// 			))}
			// 		</Row>
			// 	) : null}
			// </Container>
		);
	}
}

export default Cart;
