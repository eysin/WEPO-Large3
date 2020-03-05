import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from "shards-react";

import { getProducts } from '../../services/productService';

const Product = (props) => {
  const [ products, setProducts ] = useState([]);
  
  useEffect(() => {
    getProducts()
    .then(products => {
      console.log(products)
      setProducts(JSON.parse(JSON.stringify(products)))
    })
    
  }, []);
  return (
      <Container>{products.length != 0 ? 
        <Row>
          {products.map((value, index) => 
            <Col sm="4" key={index} className="productContainer">
             <a href={"/products/" + value.id}><h3>{ value.name}</h3></a>
             <img src={value.image}/>
             <p>{value.description}</p>
            </Col>
          )}
         </Row>
          :null}
      </Container>
    )
}

Product.propTypes = {
    //Stores the information on where the customer is 
    location: PropTypes.object.isRequired
}


export default Product;