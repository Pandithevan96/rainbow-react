import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaExclamation } from 'react-icons/fa';



import { FaFacebook } from 'react-icons/fa';
const SignIn = ({handleInput,handleValidation,formErrors}) => {
  
  return (
    <div className='h d-flex align-items-center'> 
    <Form className='text-center  m-auto bgform p-5 rounded-3 mt-3 bsw2 text-light formcont'
   noValidate onSubmit={handleValidation}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
     <div id='inp1'>
        <Form.Control type="email" className='px-5'name='email' placeholder="Enter email "
        onChange={handleInput} />
        <FaUser id='usericon'/>
        </div>
        
        
        <p  className='text-danger mt-2 error'>{formErrors.email}</p>
      

      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
      <div id='inp2'>
        <Form.Control type="password" className='px-5' name='password'  placeholder="Password" 
        noValidate onChange={handleInput}/>
        <FaLock id='lockicon'/>
        </div>
        <p className='text-danger mt-2 error'>{formErrors.password}</p>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="i agree with the Terms and conditions" />
      </Form.Group>
      <button className='cusbtn2' type="submit">
        Submit
      </button>
      <p className='mt-3'>Don't have an account?<Link to="/signup" className='mx-2'>
        Sign Up</Link></p>
    </Form></div>
  )
}

export default SignIn