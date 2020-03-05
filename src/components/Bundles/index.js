import React from 'react';
import { getBundles, getProducts } from '../../services/bubbleService';
import { Container, Row, Col } from 'shards-react';

class Bundles extends React.Component {
	componentDidMount() {
		let bundles = getBundles();
		let products = getProducts();
		console.log(products.find(obj => obj.id == 1));

		this.setState({
			bundles: bundles,
			products: products,
		});
	}
	state = {
		bundles: [],
		products: [],
	};
	render() {
		const bundles = this.state;

		return (
			<Container>
				<div id="bundles-text">
					<h1>Our Bundles</h1>
				</div>
				{bundles.length != 0 ? (
					<Row>
						{bundles.bundles.map((value, index) => (
							<Col sm="4" key={index} className="productContainer">
								<h3>{value.name}</h3>
								<h3>
									{value.items.map((element, key) => {
										let i = this.state.products.find(i => i.id == element);
										return (
											<div key={key}>
												<img src={i.image} />
												<h3>{i.name}</h3>
											</div>
										);
									})}
								</h3>
							</Col>
						))}
					</Row>
				) : null}
			</Container>
		);
	}
}

export default Bundles;
