import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";

function NavTop() {
  return (
    <Navbar expand="lg bgcus bsw sticky-lg-top"  >
      <Container fluid>
        <Navbar.Brand ><Link to='/' className='text-decoration-none '><h1 className='custext bg-primary'>Rainbow Garden</h1 ></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="  fsc align-items-center fw-bold mx-auto" id='nav'>
            <Nav.Link ><Link to='/' className='text-decoration-none text-light mx-3 '>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/about' className='text-decoration-none text-light mx-3'>About</Link></Nav.Link>
            <Nav.Link ><Link to='/purchase' className='text-decoration-none text-light mx-3 '>Purchase</Link></Nav.Link>
            
            <Link to='/cart' className='text-light'><button class="btn btn-outline-dark text-light mx-3" type="submit" ><FaCartPlus id='fa' />Cart</button></Link>
            <Nav.Link ><Link to='/signin' className='text-decoration-none text-light mx-3 '>Sign in</Link></Nav.Link>
            <Nav.Link ><Link to='/contact' className='text-decoration-none text-light mx-3'>Contact Us</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTop;
    