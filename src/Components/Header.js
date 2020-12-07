import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';
const Header = () => {
  return (
    <>
      <Navbar variant='dark' expand='lg' className='navbar-bg' fixed='top'>
        <LinkContainer to='/'>
          <Navbar.Brand>
            {' '}
            <img
              alt=''
              src='/images/pokeball.png'
              width='40'
              height='40'
              className='d-inline-block '
            />{' '}
            <p className='d-inline '>Pokemon</p>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/catchedPokemons'>
              <Nav.Link>Catched Pokemon</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/favoritePokemons'>
              <Nav.Link>Favorite Pokemon</Nav.Link>
            </LinkContainer>
          </Nav>
          <div className='ml-auto pr-2 pt-2 d-inline'>
            <p className='d-inline text-white'>TR</p>
            <label className='switch mx-2'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
            <p className='d-inline text-white'>EN</p>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
