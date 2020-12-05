import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import ScreenLayout from '../Components/ScreenLayout';

const CatchedPokemonScreen = () => {
  const dispatch = useDispatch();
  const catchedPokemon = useSelector((state) => state.catchedPokemon);
  console.log(catchedPokemon);
  return (
    <ScreenLayout>
      {catchedPokemon.length === 0 ? (
        <h1>Pokemon yok</h1>
      ) : (
        <Container>
          <Row className='m-2'>
            {catchedPokemon.map((pokemon) => {
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
                      backgroundImage: 'url(/images/background.png)',
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
                      <i className='fas fa-heart fa-3x float-right pr-2 pb-1 text-dark homescreen-card__heardIcon' />
                    </div>

                    <Card.Body>
                      <Row>
                        <Col md={4} xs={3}>
                          <Button> Catch</Button>
                        </Col>
                        <Col>
                          <LinkContainer to={`/details/${pokemon.pokemonId}`}>
                            <Button className='ml-3'>More Info</Button>
                          </LinkContainer>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </ScreenLayout>
  );
};

export default CatchedPokemonScreen;
