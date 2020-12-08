import React, { useState } from 'react';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import FavPokemon from '../Components/FavPokemon';
import ScreenLayout from '../Components/ScreenLayout';
import Message from '../Components/Message';

const CatchedPokemonScreen = () => {
  const catchedPokemon = useSelector((state) => state.catchedPokemon);
  const [visible, setVisible] = useState(30);
  const showMoreHandler = () => {
    setVisible((prevValue) => prevValue + 30);
  };

  return (
    <ScreenLayout>
      {catchedPokemon.length === 0 ? (
        <Row className='mt-3 ml-2'>
          <Col xs={12} md={6}>
            <Message variant='danger'>
              You dont catched pokemon. Go back
              <LinkContainer className='d-inline' to='/'>
                <Nav.Link>Pokemon screen</Nav.Link>
              </LinkContainer>
            </Message>
          </Col>
        </Row>
      ) : (
        <Container>
          <h1 className='mt-2'>You Catched {catchedPokemon.length} Pokemons</h1>
          <Row className='m-2'>
            {catchedPokemon.slice(0, visible).map((pokemon) => {
              return (
                <Col
                  xs={12}
                  md={6}
                  lg={4}
                  key={pokemon.pokemonId}
                  className='mt-3 '
                >
                  <Card
                    style={{
                      width: '18rem',
                      height: '31rem',
                      backgroundImage: 'url(/images/background1.png)',
                    }}
                    className='homescreen-card'
                  >
                    <div>
                      <h1 className=' text-white text-center my-3 text-dark'>
                        {pokemon.pokemon.name}
                      </h1>
                      <Card.Img
                        variant='top'
                        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokemonId}.png`}
                      />
                      <FavPokemon pokeId={pokemon.pokemonId} />
                    </div>

                    <Card.Body>
                      <div className='text-center '>
                        <LinkContainer to={`/details/${pokemon.pokemonId}`}>
                          <Button size='lg'>More Info</Button>
                        </LinkContainer>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {catchedPokemon.length >= 30 && (
            <div className='text-center my-4'>
              <Button onClick={showMoreHandler}>Show More</Button>
            </div>
          )}
        </Container>
      )}
    </ScreenLayout>
  );
};

export default CatchedPokemonScreen;
