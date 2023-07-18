import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {MDBBtn} from 'mdb-react-ui-kit';



const Heading = ({navValue}) => {
    return(
        <>

        <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="LoginForm">Log In</Nav.Link>
            <Nav.Link href="">
            {navValue}
            </Nav.Link>
            <Nav.Link href="/About">Crud</Nav.Link>
            <Nav.Link href="/Coba">Coba</Nav.Link>
            <Nav.Link href="/Data">Data</Nav.Link>
          </Nav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Input Here' aria-label='Search' />
            <MDBBtn color='dark'>Search</MDBBtn>
          </form>
        </Container>
      </Navbar>
      </>
    )
}

export default Heading;