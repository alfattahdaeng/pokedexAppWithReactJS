import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './HomeScreen.css';
import axios from 'axios';

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='mt-3'>
      <Card body style={{ height: '90vh', overflow: 'auto' }}>
        <Container>
          <Row>
            {pokemons.map((pokemon) => {
              const pokeId = pokemon.url.split('/')[6];
              return (
                <Col xs={12} md={6} lg={4} key={pokeId} className='mt-3'>
                  <Card
                    style={{ width: '18rem', height: '30rem' }}
                    className='mainscreen-card'
                  >
                    <div className='bg-dark'>
                      <h1 className='bg-dark text-white text-center my-3'>
                        {pokemon.name}
                      </h1>
                      <Card.Img
                        variant='top'
                        src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
                      />
                      <i className='fas fa-heart fa-3x float-right mr-2 mb-1 mainscreen-card__heardIcon' />
                    </div>

                    <Card.Body>
                      <Row>
                        <Col md={4}>
                          <Button> Catch</Button>
                        </Col>
                        <Col >
                          <LinkContainer to={`/details/${pokeId}`}>
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
      </Card>
    </div>
  );
};

export default HomeScreen;
