import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Translator from './Translator';

import { trLanguage, enLanguage } from '../Actions/action';
import { useDispatch } from 'react-redux';

import './Header.css';
const Header = () => {
  const dispatch = useDispatch();

  const trLanguageHandler = () => {
    dispatch(trLanguage('tr'));
  };
  const enLanguageHandler = () => {
    dispatch(enLanguage('en'));
  };

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
              <Nav.Link>
                <Translator
                  turkish={'Yakalanan Pokemon'}
                  english={'Catched Pokemon '}
                />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/favoritePokemons'>
              <Nav.Link>
                <Translator
                  turkish={'Favori Pokemonlar'}
                  english={' Favorite Pokemon'}
                />
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <div className='ml-auto pr-2 pt-2 d-inline'>
            <div className='text-white d-inline mr-2'>
              <Translator turkish={'Dil: '} english={'Language: '} />
            </div>

            <Button
              className='border p-1 mx-1'
              onClick={() => trLanguageHandler()}
              variant='light'
            >
              TR
            </Button>
            <Button
              className='p-1 mx-1 '
              onClick={() => enLanguageHandler()}
              variant='light'
            >
              EN
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
