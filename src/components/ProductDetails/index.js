import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'shards-react';

class ProductDetails extends React.Component {
	componentDidMount() {
		const product = this.props.location.product;
		if (product.id !== undefined) {
			this.setState({
				id: product.id,
				name: product.name,
				description: product.description,
				price: product.price,
				image: product.image,
			});
		}
	}
	state = {
		id: '',
		name: '',
		description: '',
		price: '',
		image: '',
	};
	render() {
		const { id, name, description, price, image } = this.state;
		return (
			<Container>
				<h3>{name}</h3>
				<img src={image} />
				<p>{description}</p>
				<p>Price: {price}</p>
			</Container>
		);
	}
}

ProductDetails.prototype = {
	// The Product we are getting details for
	product: PropTypes.object,
};

export default ProductDetails;
