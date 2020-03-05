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
				{bundles.length != 0 ? (
					<Row>
						{bundles.bundles.map((value, index) => (
							<Col sm="4" key={index} className="productContainer">
								<h3>{value.name}</h3>
								<p>
									{value.items.map((element, key) => {
										let i = this.state.products.find(i => i.id == element);

										return (
											<div key={key}>
												<img src={i.image} />
												<p>{i.name}</p>
											</div>
										);
									})}
								</p>
							</Col>
						))}
					</Row>
				) : null}
			</Container>
		);
	}
}

export default Bundles;
