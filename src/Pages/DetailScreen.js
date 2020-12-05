import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { catchPokemon, releasePokemon } from '../Actions/action';
import { Col, Row, Image, Button } from 'react-bootstrap';
import Stats from '../Components/Stats';
import ScreenLayout from '../Components/ScreenLayout';

import './DetailScreen.css';

const DetailScreen = (props) => {
  const dispatch = useDispatch();
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
      });
  }, [pokeId]);

  const catchPokemonHandler = (pokemonDetail) => {
    dispatch(catchPokemon(pokemonDetail));
  };

  const releasePokemonHandler = (pokemonDetail) => {
    dispatch(releasePokemon(pokemonDetail));
  };
  const favPokemonHandler = () => {
    console.log('store', catchedPokemon);
  };
  return (
    <ScreenLayout>
      <div className='p-5'>
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
                <Button
                  className='mt-5 ml-2'
                  onClick={() => catchPokemonHandler(pokemonDetail)}
                >
                  Catch pokemon
                </Button>
                <Button
                  className='mt-5 ml-2'
                  onClick={() => releasePokemonHandler(pokemonDetail)}
                >
                  Release pokemon
                </Button>
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
      </div>
    </ScreenLayout>
  );
};

export default DetailScreen;
