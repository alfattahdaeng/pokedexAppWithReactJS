import React, { useState } from 'react';

import ScreenLayout from '../Components/ScreenLayout';
import Message from '../Components/Message';

import { Button, Col, Container, Nav, Row, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useSelector } from 'react-redux';

const MyPokemonScreen = () => {
  const catchedPokemon = useSelector((state) => state.catchedPokemon);
  const [visible, setVisible] = useState(30);
  const showMoreHandler = () => {
    setVisible((prevValue) => prevValue + 30);
  };

  return (
    <ScreenLayout>
      <div className='navi pokedex'>
            <LinkContainer to='/'>
              <Nav.Link>
                <i className="fas fa-long-arrow-alt-left"></i>
              </Nav.Link>
            </LinkContainer>
            <div className='ml-auto'>
              <LinkContainer to='/favorites'>
                <Nav.Link>
                  <i className="fas fa-list"></i>
                </Nav.Link>
              </LinkContainer>
            </div>
          </div>
      {catchedPokemon.length === 0 ? (
        <Row className='mt-3'>
          <Col xs={12}>
            <Message variant='danger'>
              You dont have any favorite pokemon. Go back
              <LinkContainer className='d-inline' to='/'>
                <Nav.Link>
                Pokemon List
                </Nav.Link>
              </LinkContainer>
            </Message>
          </Col>
        </Row>
      ) : (
        <>
          <Container className='p-0 mt-4'>
            <h3 className="mb-4 px-3 font-weight-bold">My Pokemon ({catchedPokemon.length})</h3>
            <Row className='m-0 px-2'>
              {catchedPokemon.slice(0, visible).map((pokemon) => {
                return (
                  <Col
                    md={6} 
                    xs={12}
                    key={pokemon.pokemonId}
                    className='mb-3 px-2'
                  >
                    <LinkContainer to={`/pokemon/details/${pokemon.pokemonId}`}>
                      <div className="main-card">
                          <div className="card-details">
                            <h3>{pokemon.pokemon.name}</h3>
                          </div>
                          <div className="card-image">
                            <Image
                              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokemonId}.png`}
                            />
                          </div>
                      </div>
                    </LinkContainer>
                  </Col>
                );
              })}
            </Row>
            {catchedPokemon.length >= 30 && (
              <div className='text-center my-4'>
                <Button onClick={showMoreHandler}>
                  Show More
                </Button>
              </div>
            )}
          </Container>
        </>
      )}
    </ScreenLayout>
  );
};

export default MyPokemonScreen;
