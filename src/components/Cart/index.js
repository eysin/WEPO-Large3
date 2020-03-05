import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';
import { getProducts } from '../../services/productService';


const Cart = (props) => {
  const [ cart, setCart ] = useState([]);
  
  useEffect(() => {
	let localCart = window.localStorage.getItem("cart");
	let tempCart = []
	if(localCart != null){
		localCart = JSON.parse(localCart)
		for(let bubble in localCart){
			tempCart.push(localCart[bubble])
		}
		console.log(tempCart)
	}
    setCart(tempCart)
  }, []);
  console.log(cart)
  return (
		<Container>
			<h1>Cart</h1>
			<table className="table">
				<thead>
					<tr>
					<th>Bubble Name</th>
					<th>Price</th>
					<th>Count</th>
					<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{cart.map((value, index) => (
					<tr key={index}>
						<td>{value.name}</td>
						<td>{value.count}</td>
						<td>{value.price}</td>
						<td>{value.count * value.price}</td>
					</tr>
					))}
				
				</tbody>
			</table>
			
			{cart.length === 0 ? 
				<p>Cart is empty</p> :
				<a href="/checkout">Proceed to checkout</a>

			}
		</Container>
        
    )
}

export default Cart;
