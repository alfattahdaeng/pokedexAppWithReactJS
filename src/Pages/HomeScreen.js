import React, { useState, useEffect } from 'react';

import ScreenLayout from '../Components/ScreenLayout';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import axios from 'axios';

import './HomeScreen.css';

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [visible, setVisible] = useState(30);
  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=300')
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);
  const showMoreHandler = () => {
    setVisible((prevValue) => prevValue + 30);
  };

  return (
    <ScreenLayout>
      <Container>
        <Row className='m-2'>
          {pokemons.length === 0 ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              {pokemons.slice(0, visible).map((pokemon) => {
                const pokeId = pokemon.url.split('/')[6];
                return (
                  <Col xs={12} md={6} lg={4} key={pokeId} className='mt-3 '>
                    <Card
                      style={{
                        width: '18rem',
                        height: '31rem',
                        backgroundImage: 'url(/images/background3.png)',
                      }}
                      className='homescreen-card'
                    >
                      <div>
                        <h1 className=' text-white text-center my-3'>
                          {pokemon.name}
                        </h1>
                        <Card.Img
                          variant='top'
                          src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
                        />
                      </div>

                      <Card.Body>
                        <div className='text-center mt-4'>
                          <LinkContainer to={`/details/${pokeId}`}>
                            <Button size='lg'>
                            More Info
                            <i className='fas fa-info-circle text-white ml-3' />
                            </Button>
                          </LinkContainer>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </>
          )}
        </Row>
        {pokemons.length >= 30 && (
          <div className='text-center my-4'>
            <Button onClick={showMoreHandler}>Show More</Button>
          </div>
        )}
      </Container>
    </ScreenLayout>
  );
};

export default HomeScreen;
