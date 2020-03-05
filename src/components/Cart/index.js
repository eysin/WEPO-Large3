import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';
import { getProducts } from '../../services/productService';


const Cart = (props) => {
  const [ cart, setCart ] = useState([]);
  const [ blindUpdate, updateState] = useState();
  
  useEffect(() => {
	let localCart = window.localStorage.getItem("cart");
	let tempCart = []
	if(localCart != null){
		localCart = JSON.parse(localCart)
		for(let bubble in localCart){
			tempCart.push(localCart[bubble])
		}
	}
    setCart(tempCart)
  }, [blindUpdate]);
  return (
		<Container>
			<h1>Cart</h1>
			<table className="table">
				<thead>
					<tr>
					<th>Bubble Name</th>
					<th>Count</th>
					<th>Price</th>
					<th>Total</th>
					<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{cart.map((value, index) => (
					<tr key={index}>
						<td>{value.name}</td>
						<td><button className="btn btn-link" onClick={() => changeCount(-1, index, cart, updateState)}>-</button>{value.count}<button className="btn btn-link"onClick={() => changeCount(1, index, cart, updateState)}>+</button></td>
						<td>{value.price}$</td>
						<td>{value.count * value.price}$</td>
						<td><button className="btn btn-link" onClick={() => remove(index, cart, updateState)}><i className="fa fa-trash"/></button></td>
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
const changeCount = (count, id, cart, setCart) => {
	cart[id].count += count;
	if(cart[id].count === 0){
		remove(id, cart, setCart);
	}
	else{
		updateCart(cart, setCart)
	}
}
const remove = (id, cart, setCart) => {
	delete cart[id];
	updateCart(cart, setCart);

}

const updateCart = (cart, setCart) => {
	let tempStorage = {};
	for(let i in cart){
		tempStorage[i] = cart[i];
	}
	if(tempStorage === {}){
		window.localStorage.removeItem("cart")
	}
	else{
		window.localStorage.setItem("cart", JSON.stringify(tempStorage))
	}
	setCart(cart)
	
}

export default Cart;
