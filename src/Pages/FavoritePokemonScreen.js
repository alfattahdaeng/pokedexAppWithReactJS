import React, { useState } from 'react';
import ScreenLayout from '../Components/ScreenLayout';
import Message from '../Components/Message';
import Translator from '../Components/Translator';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import FavPokemon from '../Components/FavPokemon';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const FavoritePokemonScreen = () => {
  const catchedPokemons = useSelector((state) => state.catchedPokemon);
  const favPokemons = useSelector((state) => state.favPokemon);
  const [visible, setVisible] = useState(30);

  const showMoreHandler = () => {
    setVisible((prevValue) => prevValue + 30);
  };
  return (
    <ScreenLayout>
      {favPokemons.length === 0 ? (
        <Row className='mt-3 ml-2'>
          <Col xs={12} md={6}>
            <Message variant='danger'>
              <Translator
                turkish={
                  'Favori pokemonun bulunmuyor. Hemen pokemon yakalama sayfasına git.'
                }
                english={'You dont have favorite pokemon. Go back'}
              />

              <LinkContainer className='d-inline' to='/catchedPokemons'>
                <Nav.Link>
                  <Translator
                    turkish={'Yakalanan Pokemonlar'}
                    english={'Catched Pokemon'}
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
                turkish={'Favori pokemonlar: '}
                english={'Favorite Pokemons:'}
              />
              <b>{favPokemons.length}</b>
            </h4>
          </Card.Header>

          <Container>
            <Row className='m-2'>
              {favPokemons.slice(0, visible).map((favPokemon) => (
                <div key={favPokemon.favPokemonId}>
                  {catchedPokemons.map(
                    (catchPokemon) =>
                      catchPokemon.pokemonId === favPokemon.favPokemonId && (
                        <Col
                          xs={12}
                          md={6}
                          lg={4}
                          key={catchPokemon.pokemonId}
                          className='mt-3 '
                        >
                          <Card
                            style={{
                              width: '18rem',
                              height: '31rem',
                              backgroundImage: 'url(/images/background9.png)',
                            }}
                            className='homescreen-card'
                          >
                            <div>
                              <h1 className=' text-white text-center my-3 text-dark'>
                                {catchPokemon.pokemon.name}
                              </h1>
                              <Card.Img
                                variant='top'
                                src={`https://pokeres.bastionbot.org/images/pokemon/${catchPokemon.pokemonId}.png`}
                              />
                              <FavPokemon pokeId={catchPokemon.pokemonId} />
                            </div>

                            <Card.Body>
                              <div className='text-center '>
                                <LinkContainer
                                  to={`/details/${catchPokemon.pokemonId}`}
                                >
                                  <Button size='lg'>More Info</Button>
                                </LinkContainer>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      )
                  )}
                </div>
              ))}
            </Row>
            {favPokemons.length >= 30 && (
              <div className='text-center my-4'>
                <Button onClick={showMoreHandler}>Show More</Button>
              </div>
            )}
          </Container>
        </>
      )}
    </ScreenLayout>
  );
};

export default FavoritePokemonScreen;
