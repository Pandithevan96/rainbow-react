import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaMailchimp } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import Form from 'react-bootstrap/Form';
import { FaUser } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='d-lg-flex justify-content-evenly text-light align-items-center h'>
      <div className='mb-3'>
        <h3 className='text-light '>Reach Us</h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58450930.004023336!2d-160.81837211026735!3d26.598438362397943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c67ec9ee640bf%3A0x9fab613767018c83!2sRainbow%20Gardens!5e0!3m2!1sen!2sin!4v1707671021211!5m2!1sen!2sin" width="340" height="340" className=' bsw rounded-2 '></iframe>
</div>

<div className='contact mb-5 '>
      <h3 className=''>Office</h3>
      <div className='com'>
      <label htmlFor="">Phone No:</label>
      <p>+9163123 12345</p></div>
      <div className='com'>
      <label htmlFor="">Telephone No:</label>
      <p>+9163123 12345</p></div>
      <div className='com'>
      <label htmlFor="">Email:</label>
      <p>rainbowgarden@gmail.com</p>
      </div>
      <div className='d-flex justify-content-evenly fs-1'>
      <FaFacebook id='fb'/> 
      <FaInstagram id='ins'/> 
      <FaWhatsapp id='whapp'/> 
      </div>
   </div>

   <div>
   <Form className='text-center  bgform px-5 py-3 rounded-3 bsw3 '
   action="https://api.web3forms.com/submit" method="POST">
    <h2 className='mb-3 '>Message Us</h2>
    <input type="hidden" name="access_key" value="091922b4-36e5-4a2e-94e6-33afe427f7c7"/>
      <Form.Group className="mb-3" controlId="formBasicText">
     <div id='inp1'>
        <Form.Control type="text" className='px-5'  name="Full_Name" placeholder="Full Name " />
        <FaUser id='usericon'/>
        </div>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
      <div id='inp2'>
        <Form.Control type="text" className='px-5'  name="Email" placeholder="Email" />
        <FaMailBulk  id='lockicon'/>
        </div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" name="Message" placeholder='Your Message ...' rows={3} />
      </Form.Group>
      <button className='cusbtn3' type="submit">
        Submit <FaArrowRight id='arrow'/>
      </button>
    </Form>
   </div>
   </div>
        
        
  )
}

export default Contact