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
      <div id="products-text">
        <h1>Our Products</h1>
      </div>
      {products.length != 0 ? (
        <Row>
          {products.map((value, index) => (
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
    )
}


export default Orders;