import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row, Image } from 'react-bootstrap';
import Stats from '../Components/Stats';
import ScreenLayout from '../Components/ScreenLayout';
import Message from '../Components/Message';
import Loader from '../Components/Loader';
import CatchedReleaseBtn from '../Components/CatchedReleaseBtn';

import './DetailScreen.css';

const DetailScreen = (props) => {
  const { pokeId } = props.match.params;
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [hp, setHp] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [attack, setAttack] = useState(0);
  const [attack2, setAttack2] = useState(0);
  const [defence, setDefence] = useState(0);
  const [defence2, setDefence2] = useState(0);
  const [name, setName] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [backImg, setBackImg] = useState('');
  const [frontImg, setFrontImg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((res) => {
        setPokemonDetail(res.data);
        setHp(res.data.stats[0].base_stat);
        setAttack(res.data.stats[1].base_stat);
        setDefence(res.data.stats[2].base_stat);

        setSpeed(res.data.stats[5].base_stat);
        setAttack2(res.data.stats[3].base_stat);
        setDefence2(res.data.stats[4].base_stat);

        setName(res.data.name);
        setHeight(res.data.height);
        setWeight(res.data.weight);
        setFrontImg(res.data.sprites.front_default);
        setBackImg(res.data.sprites.back_default);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [pokeId]);

  return (
    <ScreenLayout>
      <div className='px-5'>
        {pokemonDetail.length === 0 ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'> {error}</Message>
        ) : (
          <>
            <div className='text-center '>
              <Image className='pb-4' src={frontImg} />
              <h1 className='detail-name d-inline'>{name}</h1>
              <Image className='pb-4' src={backImg} />
            </div>
            <Row>
              <Col className='pt-2 border' xs={12} md={6}>
                <Image
                  src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
                  fluid
                />
              </Col>

              <Col xs={12} md={6}>
                <div className='border  p-4'>
                  <div className='text-center'>
                    <h2>Stats</h2>
                  </div>
                  <Row className='mt-3 border'>
                    <Stats
                      hp={hp}
                      defence={defence}
                      attack={attack}
                      infoHp='Health Point'
                      infoDef='Defence'
                      infoAttack='Attack'
                    />
                  </Row>
                  <Row className='mt-3 border'>
                    <Stats
                      hp={speed}
                      defence={defence2}
                      attack={attack2}
                      infoHp='Speed'
                      infoDef='Special Defence'
                      infoAttack='Special Attack'
                    />
                  </Row>
                </div>
                <Row className='border p-4 m-1 mt-4'>
                  <Col>
                    <h3>Height: {(height / 10).toFixed(1)} m </h3>
                  </Col>
                  <Col>
                    <h3>Weight: {(weight / 10).toFixed(1)} kg</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CatchedReleaseBtn
                      pokeId={pokeId}
                      pokemonDetail={pokemonDetail}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        )}
      </div>
    </ScreenLayout>
  );
};

export default DetailScreen;
