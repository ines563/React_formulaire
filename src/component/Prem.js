import React from 'react'
import {Form, Button } from 'react-bootstrap';
import logo from '../logo.svg';
const Prem = () => {
    return (
        
<div className="signUpSection">
           
            <Form className='info'>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="outline-light" >
    Submit
  </Button>
</Form>
<div className='info'>
<img src ={logo} className="App-logo" alt="logo" />
</div>
        </div>
    )
}

export default Prem
