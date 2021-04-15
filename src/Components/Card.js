import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpinningWheel from './SpinningWheel';

import { Col, Image} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Card = props => {
  const pokemonMonsterUrl = `https://pokeapi.co/api/v2/pokemon/${props.name}`
  const [pokemonData, setPokemonData] = useState(null)
  const [maintype, setMainType] = useState('');


  useEffect(()=>{
      axios(pokemonMonsterUrl)
        .catch(err => {
          console.error(err)
        })
        .then(res => {
            setPokemonData(res.data)
            setMainType(res.data.types[0].type.name);

        })
  },[pokemonMonsterUrl])

  return (
    pokemonData ? 
        <Col md={6} xs={12} key={pokemonData.name} className='mb-3 px-2'>
            <LinkContainer to={`/pokemon/details/${pokemonData.id}`}>
                      <div className={`main-card ${maintype}`}>
                          <div className="card-details">
                            <h3>{pokemonData.name}</h3>
                            <div className={`badgeType home d-inline-block ${maintype}`}><p>{maintype}</p></div>
                          </div>
                          <div className="card-image">
                            <Image
                              src={pokemonData.sprites.other["official-artwork"].front_default}
                            />
                          </div>
                      </div>
            </LinkContainer>
        </Col>
    : <SpinningWheel />
  );
};

export default Card;