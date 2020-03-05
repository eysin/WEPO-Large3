import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Form, FormGroup, FormRadio, FormInput } from "shards-react";
import { Link } from 'react-router-dom';
import { getProducts } from '../../services/productService';

const Checkout = () => {
  const [storePickup, setStorePickup] = useState(false);
  const [formStage, setFormStage] = useState(0);
   
   useEffect(() => {
     
     
   });
 

   return(
     <Container>
       <h1>Checkout</h1>
        <Form>
          <FormGroup>
          <FormRadio id="#username" placeholder="Username" checked={!storePickup} onChange={() => setStorePickup(false)} inline>Store Pickup</FormRadio>
          <FormRadio id="#username" placeholder="Username" checked={storePickup} onChange={() => setStorePickup(true)} inline>Home Delivery</FormRadio>
        </FormGroup>
        {storePickup ? 
            //Store pickup is picked
             <FormGroup>
                <FormGroup>
                  <label htmlFor="#name">Name</label>
                  <FormInput id="#name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#address">Address</label>
                  <FormInput id="#address" placeholder="Address" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#city">City</label>
                  <FormInput id="#city" placeholder="City" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#telephone">Telephone</label>
                  <FormInput id="#telephone" placeholder="Telephone" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#postCode">Postal Code</label>
                  <FormInput id="#postCode" placeholder="Postal Code" />
                </FormGroup>
             </FormGroup>
          :
             <FormGroup>
                <FormGroup>
                  <label htmlFor="#name">Name</label>
                  <FormInput id="#name" placeholder="Name" />
                </FormGroup>
                
                <FormGroup>
                  <label htmlFor="#telephone">Telephone</label>
                  <FormInput id="#telephone" placeholder="Telephone" />
                </FormGroup>
              </FormGroup>
          } 

       
        </Form>
     </Container>
   )
 }
 


export default Checkout;