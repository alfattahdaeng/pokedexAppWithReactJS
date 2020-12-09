import React, { useState } from 'react';

import ScreenLayout from '../Components/ScreenLayout';
import FavPokemon from '../Components/FavPokemon';
import Message from '../Components/Message';
import Translator from '../Components/Translator';

import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useSelector } from 'react-redux';

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
              <Translator
                turkish={
                  'Hiç pokemon yakalamamışsın. Pokemon sayfasına gidip yakalamaya başla'
                }
                english={' You dont catched pokemon. Go back'}
              />

              <LinkContainer className='d-inline' to='/'>
                <Nav.Link>
                  <Translator
                    turkish={'Pokemon Sayfası'}
                    english={'Pokemon Screen'}
                  />
                </Nav.Link>
              </LinkContainer>
            </Message>
          </Col>
        </Row>
      ) : (
        <>
          <Card.Header>
            <h4>
              <Translator
                turkish={'Yakalanan Pokemonlar:  '}
                english={'  Catched Pokemons: '}
              />
              <b>{catchedPokemon.length}</b>{' '}
            </h4>
          </Card.Header>
          <Container>
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
                            <Button size='lg'>
                              <Translator
                                turkish={'Daha Fazla Bilgi'}
                                english={'More Info'}
                              />
                            </Button>
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
                <Button onClick={showMoreHandler}>
                  <Translator
                    turkish={'Daha Fazla Pokemon Göster'}
                    english={'Show More'}
                  />
                </Button>
              </div>
            )}
          </Container>
        </>
      )}
    </ScreenLayout>
  );
};

export default CatchedPokemonScreen;
