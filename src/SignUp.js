import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';
import { FaSortNumericDown } from 'react-icons/fa';


const SignUp = ({formErrors,handleInput,handleValidation}) => {
  return (
    <div className='h'>
    <Form className='text-center  m-auto bgform p-5 rounded-3 mt-3 bsw2 text-light formsupcont '
    noValidate onSubmit={handleValidation}>
        <div className='c d-lg-flex'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
     <div id='inp1'>
        <Form.Control type="email" className='px-5'name="email" placeholder="Enter emai " 
        onChange={handleInput}/>
        <FaUser id='usericon'/>
        </div>
        <p  className='text-danger mt-2 error'>{formErrors.email}</p>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
     <div id='inp1'>
        <Form.Control type="number" className='px-5' placeholder="Enter Mobile No" 
        onChange={handleInput}/>
        <FaMobile id='usericon'/>
        </div>
        <p className='text-danger mt-2 error'>{formErrors.mobileno}</p>

      </Form.Group>
      </div>

      <div className='c d-lg-flex'>
      <Form.Group className="mb-3 " controlId="formBasicPassword">
      <div id='inp2'>
        <Form.Control type="password" className='px-5'  placeholder="Password" 
        onChange={handleInput}/>
        <FaLock id='lockicon'/>
        </div>
        <p  className='text-danger mt-2 error'>{formErrors.password2}</p>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicPassword">
      <div id='inp2'>
        <Form.Control type="password" className='px-5'  placeholder="Re-Password"
        onChange={handleInput} />
        <FaLock id='lockicon'/>
        </div>
        <p className='text-danger mt-2 error'>{formErrors.password3}</p>
      </Form.Group>
      </div>

      <div className='c d-lg-flex'>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
     <div id='inp1'>
        <Form.Control type="email" className='px-5' placeholder="City" />
        <FaLocationArrow id='usericon'/>
        </div>
        <p className='text-danger mt-2 error'>{formErrors.city}</p>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
     <div id='inp1'>
        <Form.Control type="number" className='px-5' placeholder="Pin Code" />
        < FaSortNumericDown id='usericon'/>
        </div>
        <p className='text-danger mt-2 error'>{formErrors.pincode}</p>
      </Form.Group>
      </div>
      <Form.Group className="mb-3 mxcus" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="i agree with the Terms and conditions" />
      </Form.Group>

      <button className='cusbtn2' type="submit">
        Submit
      </button>
      <p className='mt-3'>Already have an account?<Link to="/signin" className='mx-2'>
        Sign In</Link></p>
    </Form></div>
  )
}

export default SignUp