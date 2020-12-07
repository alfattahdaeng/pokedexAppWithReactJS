import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useSelector } from 'react-redux';
import { Col, Row, Image, Button } from 'react-bootstrap';
import Stats from '../Components/Stats';
import ScreenLayout from '../Components/ScreenLayout';

import './DetailScreen.css';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import CatchedReleaseBtn from '../Components/CatchedReleaseBtn';

const DetailScreen = (props) => {
  const catchedPokemon = useSelector((state) => state.catchedPokemon);

  const { pokeId } = props.match.params;
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defence, setDefence] = useState(0);
  const [name, setName] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [backImg, setBackImg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((res) => {
        setPokemonDetail(res.data);
        setHp(res.data.stats[0].base_stat);
        setAttack(res.data.stats[1].base_stat);
        setDefence(res.data.stats[2].base_stat);
        setName(res.data.name);
        setHeight(res.data.height);
        setWeight(res.data.weight);
        setBackImg(res.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [pokeId]);

 
  const favPokemonHandler = (pokeId) => {
    for (let i = 0; i < catchedPokemon.length; i++) {
      console.log(catchedPokemon[i].pokemonId);
    }
  };

  return (
    <ScreenLayout>
      <div className='p-5'>
        {pokemonDetail.length === 0 ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'> {error}</Message>
        ) : (
          <>
            <h1>{name}</h1>
            <Row>
              <Col className='pt-2' xs={12} md={6}>
                <Image
                  src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
                  fluid
                />
              </Col>

              <Col className='pt-2' xs={12} md={6}>
                <h2>Stats</h2>
                <Row>
                  <Stats hp={hp} defence={defence} attack={attack} />
                </Row>
                <Row>
                  <Col>
                    <h3>Height: {height} </h3>
                  </Col>
                  <Col>
                    <h3>Weight: {weight}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CatchedReleaseBtn
                      pokeId={pokeId}
                      pokemonDetail={pokemonDetail}
                    />
               
                  </Col>
                  <Col>
                    <Button
                      className='mt-5 ml-2'
                      onClick={() => favPokemonHandler(pokeId)}
                    >
                      Add Favorite Pokemon
                    </Button>
                  </Col>
                </Row>

                <Image className='mt-5 ' src={backImg} />
              </Col>
            </Row>
          </>
        )}
      </div>
    </ScreenLayout>
  );
};

export default DetailScreen;
