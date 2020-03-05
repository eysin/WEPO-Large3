import React, { useEffect, useState } from 'react';
import { Container, Form, FormGroup, FormRadio, FormInput, Button } from "shards-react";

const Checkout = () => {
  const [storePickup, setStorePickup] = useState(true);
  const [review, setReview] = useState(false);
  const [ cart, setCart ] = useState([]);
  const [ envelope, setEnvelope ] = useState({});
  const [ total, setTotal ] = useState(0);

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [postcode, setPostCode] = useState("")
  const [telephone, setTelephone] = useState("")
  
  const confirmOrder = () =>{
    fetch("http://localhost:3500/api/orders/" + telephone, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "Order": cart,
        "Buyer": envelope
      })
      
    })
    .then(res =>{
      console.log(res)
      if(res.status !== 200){
        alert(res.statusText)
      }
      else{
        window.localStorage.removeItem("cart")
        window.localStorage.setItem("user", JSON.stringify(envelope))
        window.location.href = "/success";
      }
    })

  }


  const validateCheckout = () =>{
      let alertMessage = ""
      let tempEnvelope = {name: name, telephone: telephone}
      if(name.length === 0){
        alertMessage += "Must Include a Name \n";
      }
      //Telephone can be in numerous formats
      if(telephone.length === 0){
        alertMessage += "Must Include a Telephone number \n";
      }
      if(!storePickup){
        tempEnvelope = {...tempEnvelope, city: city, address: address, postcode: postcode}
        if(city.length === 0){
          alertMessage += "Must Include a City \n";
        }
        if(address.length === 0){
          alertMessage += "Must Include an Address\n";
        }
        if(!isNaN(postcode) || postcode.length === 0){
          alertMessage += "Must Include a Post Code \n";
        }
      }
      if(alertMessage !== ""){
        alert(alertMessage)
      }
      else{
        // Simulate a mouse click:
        setEnvelope(tempEnvelope)
        setReview(true);
      }
  }

  useEffect(() => {
    let localCart = window.localStorage.getItem("cart");
    let tempCart = []
    let tempTotal = 0;
    if(localCart != null){
      localCart = JSON.parse(localCart)
      for(let bubble in localCart){
        tempTotal += (localCart[bubble].price * localCart[bubble].count)
        
        tempCart.push(localCart[bubble])
      }
    }
      setTotal(tempTotal)
      setCart(tempCart)
    }, []);
 

   return(
     <Container>
       <h1>Checkout</h1>
       {review ? 
       <div>
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
              {cart.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.count}</td>
                <td>{value.price}$</td>
                <td>{value.count * value.price}$</td>
              </tr>
              ))}
            
            </tbody>
          </table>
              <p>Total: {total}$</p>
              <input type="button" className="btn btn-success" value="Confirm Order" onClick={() => confirmOrder(cart)}/>
        </div>
       : 
       <Form>
       <FormGroup>
          <FormRadio checked={!storePickup} onChange={() => setStorePickup(false)} inline>Home Delivery</FormRadio>
          <FormRadio checked={storePickup} onChange={() => setStorePickup(true)} inline>Store Pickup</FormRadio>
          
        </FormGroup>
        {!storePickup ? 
            //Store pickup is picked
              <FormGroup>
                <FormGroup>
                  <label htmlFor="#name">Name</label>
                  <FormInput value={name} onChange={e => {setName(e.target.value)}} id="#name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#address">Address</label>
                  <FormInput value={address} onChange={e => {setAddress(e.target.value)}}  id="#address" placeholder="Address" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#city">City</label>
                  <FormInput value={city} onChange={e => {setCity(e.target.value)}}  id="#city" placeholder="City" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#telephone">Telephone</label>
                  <FormInput value={telephone} onChange={e => {setTelephone(e.target.value)}}  id="#telephone" placeholder="Telephone" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#postCode">Postal Code</label>
                  <FormInput value={postcode} onChange={e => {setPostCode(e.target.value)}}  id="#postCode" placeholder="Postal Code" />
                </FormGroup>
              </FormGroup>
          :
              <FormGroup>
                <FormGroup>
                  <label htmlFor="#name">Name</label>
                  <FormInput value={name} onChange={e => {setName(e.target.value)}}  id="#name" placeholder="Name" />
                </FormGroup>
                
                <FormGroup>
                  <label htmlFor="#telephone">Telephone</label>
                  <FormInput value={telephone} onChange={e => {setTelephone(e.target.value)}}  id="#telephone" placeholder="Telephone" />
                </FormGroup>
              </FormGroup>
          } 

          <input type="button" className="btn btn-success" value="Proceed with Checkout" onClick={() => validateCheckout()}></input>
        </Form>
       }
        
     </Container>
   )
 }
  

export default Checkout;
