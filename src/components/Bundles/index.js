import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getBundles, getProducts } from '../../services/productService';
import { Container, Row, Col } from 'shards-react';

const Bundles = () => {
	const [products, setProducts] = useState([]);
	const [bundles, setBundles] = useState([]);

	useEffect(() => {
		getBundles().then(res => {
			setBundles(res);
		});
		getProducts().then(res => {
			setProducts(res);
		});
	}, []);
	return (
		<Container>
			<div id="bundles-text">
				<h1>Our Bundles</h1>
			</div>
			{bundles.length != 0 ? (
				<Row>
					{bundles.map((value, index) => (
						<Col sm="4" key={index} className="productContainer">
							<h3>{value.name}</h3>
							<h3>
								{value.items.map((element, key) => {
									let i = products.find(i => i.id == element);
									if (i != undefined) {
										return (
											<div key={key}>
												<img src={i.image} />
												<h3>{i.name}</h3>
											</div>
										);
									}
								})}
							</h3>
						</Col>
					))}
				</Row>
			) : null}
		</Container>
	);
};

export default Bundles;
