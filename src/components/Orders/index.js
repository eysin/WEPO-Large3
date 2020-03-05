import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from "shards-react";
import { Link } from 'react-router-dom';
import { getProducts } from '../../services/productService';

const Orders = () => {
  const [ orders, setOrders ] = useState([]);
  const [user, setUser] = useState([])
  
  useEffect(() => {
    let tempUser = window.localStorage.getItem("user");
    if(tempUser !== null){
      tempUser = JSON.parse(tempUser);
      setUser(tempUser)
      console.log(tempUser)
      fetch("http://localhost:3500/api/orders/" + tempUser.telephone)
      .then(res =>{
        if(res.status === 200){
          res.json()
          .then(json =>{
            setOrders(json)
          })
        }
      })
    }
    
  }, []);
  

  const addToCart = (order) => {
    console.log(order)
    window.localStorage.setItem("cart", JSON.stringify(order))
    window.location.href = "/cart";
  }

  return (
    <Container>
      <div id="products-text">
        <h1>Previous orders for {user.name}</h1>
      </div>
      {orders.map((order, index)=>
        <div key={index}>          
        <table className="table">
            <thead>
              <tr>
              <th>Bubble Name</th>
              <th>Count</th>
              <th>Price</th>
              <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.Order.map((value, nindex) => (
              <tr key={index + nindex}>
                <td>{value.name}</td>
                <td>{value.count}</td>
                <td>{value.price}$</td>
                <td>{value.count * value.price}$</td>
              </tr>
              ))}
            
            </tbody>
          </table>
              <input type="button" className="btn btn-success" value="Add Order To Cart" onClick={() => addToCart(order.Order)}/>
        </div>
      )}
     
    </Container>
    )
}


export default Orders;