import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from "shards-react";
import { Link } from 'react-router-dom';
import { getProducts } from '../../services/productService';

const Orders = () => {
  const [ products, setProducts ] = useState([]);
  
  useEffect(() => {
    getProducts()
    .then(products => {
      console.log(products)
      setProducts(JSON.parse(JSON.stringify(products)))
    })
    
  }, []);
  return (
    <Container>
      <h1>Order Successful :)</h1>
    </Container>
    )
}


export default Orders;