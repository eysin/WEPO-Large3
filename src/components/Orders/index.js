import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from "shards-react";
import { Link } from 'react-router-dom';
import { getProducts } from '../../services/productService';

const Orders = () => {
  const [ orders, setOrders ] = useState([]);
  const [user, setUser] = useState([])
  
  useEffect(() => {
    let userString 

  })
    
  }, []);
  return (
    <Container>
      <div id="products-text">
        <h1>Our Products</h1>
      </div>
    </Container>
    )
}


export default Orders;