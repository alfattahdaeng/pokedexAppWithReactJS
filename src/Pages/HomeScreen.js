import React, { useState, useEffect } from 'react';
import { Button, Card, CardColumns, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='mt-2'>
      <Card body>
        <CardColumns>
          <Container>
            {pokemons.map((pokemon) => {
              const pokeId = pokemon.url.split('/')[6];
              return (
                <Card style={{ width: '18rem', height: '25rem' }} key={pokeId}>
                  <Card.Img
                    variant='top'
                    src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
                  />
                  <Card.Body>
                    <h2>{pokemon.name}</h2>

                    <Button> Catch</Button>
                    <LinkContainer to={`/details/${pokeId}`}>
                      <Button className='ml-3'>More Info</Button>
                    </LinkContainer>
                    <i className='fas fa-heart' />
                  </Card.Body>
                </Card>
              );
            })}
          </Container>
        </CardColumns>
      </Card>
    </div>
  );
};

export default HomeScreen;
