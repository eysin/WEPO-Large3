import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from "shards-react";

import { getProduct } from '../../services/detailService';

const Product = (props) => {
  const [ product, setProduct ] = useState();
  
  useEffect(() => {
    getProduct(1)
    .then(product => {
      console.log(product)
      setProduct(JSON.parse(JSON.stringify(product)))
    })
    
  }, []);
  return (
      <Container>
   
          
      </Container>
    )
}

Product.propTypes = {
    //Stores the information on where the customer is 
    location: PropTypes.object.isRequired
}


export default Product;