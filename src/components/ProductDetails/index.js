
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from "shards-react";
import { getProducts } from '../../services/productService';


const Product = (props) => {
  const [ product, setProduct ] = useState();
  
  useEffect(() => {
    getProducts(props.match.params.productId)
    .then(res =>{
      setProduct(res)
    })
    
  }, []);
  console.log(product)
  return (
    <Container>
        {product != undefined ?
          <div>
            <h3>{product.name}</h3>
            <img src={product.image} />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <input type="button" value="Add to Cart" onClick={() => addToCart(product)}/>
          </div>
        :
        <p>Fetching</p>
        }
        </Container>
        
    )
}


const addToCart = (product) =>{
  //This circular thing is here to ensure the parsing doesn't crash when cart is empty
  let cart = window.localStorage.getItem("cart")
  if(window.localStorage.getItem("cart") === null){
      cart = JSON.stringify({})
  }
  cart = JSON.parse(cart)


  if(cart[product.id] === undefined){
    
    cart[product.id] = product
    cart[product.id].count = 1
  }
  else{
    cart[product.id].count += 1
  }

  window.localStorage.setItem("cart", JSON.stringify(cart))

}

Product.propTypes = {
    //Stores the information on where the customer is 
    location: PropTypes.object.isRequired
}


export default Product;