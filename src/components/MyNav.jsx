import React from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/epibooks.svg.svg'; 

function MyNav({ search, setSearch }) {
  return (
  <Container>
   <Navbar expand="lg" className="bg-white">
   <Link to="/">
          <Navbar.Brand href="#">
            <img
              src={logo} 
              alt="EpiBooks Logo"
              style={{ width: '100px', height: 'auto' }} 
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/">About</Link>
            <Link className="nav-link" to="/">Browse</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
        </Navbar>
      </Container>

  );
}

export default MyNav;
