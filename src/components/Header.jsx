import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header(){
    return <div className = "header">

      <div>
         <Navbar bg="dark" variant="dark">
     <Navbar.Brand href="#home">Social-Scheduler </Navbar.Brand>
     <Nav className="mr-auto">
       <Nav.Link href="/">Home</Nav.Link>
       <Nav.Link href="/about">About</Nav.Link>
       <Nav.Link href="/Contact">Contact Us</Nav.Link>
     </Nav>
     <Form inline>
       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
       <Button variant="outline-info">Search</Button>
     </Form>
   </Navbar>
   <br />


    </div>;

 </div>  
}

export default Header