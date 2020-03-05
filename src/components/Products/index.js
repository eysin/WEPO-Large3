import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';
import { getProducts } from '../../services/bubbleService';
import { Link } from 'react-router-dom';

class Product extends React.Component {
	componentDidMount() {
		const products = getProducts();

		this.setState({
			products: products,
		});
	}
	state = {
		products: [],
	};
	render() {
		const products = this.state;
		return (
			<Container>
				<h1>Our Products</h1>
				{products.length != 0 ? (
					<Row>
						{products.products.map((value, index) => (
							<Col sm="4" key={index} className="productContainer">
								<h3>
									<Link
										to={{ pathname: `/products/${value.id}`, product: value }}
									>
										{value.name}
									</Link>
								</h3>
								<img src={value.image} />
							</Col>
						))}
					</Row>
				) : null}
			</Container>
		);
	}
}

export default Product;
