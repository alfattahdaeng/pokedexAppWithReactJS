import React, { useState, useEffect } from 'react';

import ScreenLayout from '../Components/ScreenLayout';
import AddToListBtn from '../Components/AddToListBtn';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import Stats from '../Components/Stats';
import { Col, Row, Image, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {padNumber} from '../utils';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import axios from 'axios';


const DetailScreen = (props) => {
  const { pokeId } = props.match.params;
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [hp, setHp] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [attack, setAttack] = useState(0);
  const [spattack, setSPAttack] = useState(0);
  const [defence, setDefence] = useState(0);
  const [spdefence, setSPDefence] = useState(0);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [egg, setEgg] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [ability, setAbility] = useState(0);
  const [ability2, setAbility2] = useState(0);

  const [error, setError] = useState('');
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((res) => {
        setPokemonDetail(res.data);
        setHp(res.data.stats[0].base_stat);
        setAttack(res.data.stats[1].base_stat);
        setDefence(res.data.stats[2].base_stat);

        setSPAttack(res.data.stats[3].base_stat);
        setSPDefence(res.data.stats[4].base_stat);
        setSpeed(res.data.stats[5].base_stat);

        setName(res.data.name);
        setType(res.data.types[0].type.name);

        setAbility(res.data.abilities[0].ability.name);
        setAbility2(res.data.abilities[1].ability.name);

        setHeight(res.data.height);
        setWeight(res.data.weight);



      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [pokeId]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokeId}`)
      .then((result) => {
        setPokemonDetail(result.data);

        setEgg(result.data.egg_groups[0].name);
        
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [pokeId]);
  return (
    <ScreenLayout>
      <div className={`cardDetailBg ${type}`}>
       <div className='navi detail'>
            <LinkContainer to='/'>
              <Nav.Link>
                <i className="fas fa-long-arrow-alt-left"></i>
              </Nav.Link>
            </LinkContainer>
            <div className='ml-auto'>
              <AddToListBtn
                  pokeId={pokeId}
                  pokemonDetail={pokemonDetail}
              />
            </div>
          </div>
      <div className='detailCard'>
        {pokemonDetail.length === 0 ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'> {error}</Message>
        ) : (
          <>
            <Row className='px-3 align-items-center'>
              <Col md={9}>
                <div className='detailHead'>
                  <h1 className='detail-name'>{name}</h1>
                  <div className="detail-type mt-3">
                    <div className={`badgeType d-inline-block ${type}`}><p>{type}</p></div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="tags text-right">
                  <p>#{padNumber(pokeId, 3)}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='pt-4 detailImg px-0' xs={12}>
                <Image
                  src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`}
                  fluid
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} className='detailInfo'>
                <div>
                  <Tabs className='detailTabs'>
                    <TabList>
                      <Tab>About</Tab>
                      <Tab>Base Stats</Tab>
                      <Tab>Evolution</Tab>
                      <Tab>Moves</Tab>
                    </TabList>

                    <TabPanel>
                      <Row className='abt'>
                        <Col xs={4} className=''>
                          <p>
                            Height
                          </p>
                        </Col>
                        <Col xs={8} className='text-lowercase'>
                        {((height / 10)*3.2808).toFixed(1)} ft ({(height / 10).toFixed(1)}m)
                        </Col>
                      </Row>
                      <Row className='abt'>
                        <Col xs={4} className=''>
                          <p>
                            Weight
                          </p>
                        </Col>
                        <Col xs={8} className='text-lowercase'>
                          {((weight / 10)/0.454).toFixed(1)} lbs ({(weight / 10).toFixed(1)}kg)
                        </Col>
                      </Row>
                      <Row className='abt'>
                        <Col xs={4} className=''>
                          <p>
                          Abilities
                          </p>
                        </Col>
                        <Col xs={8} className=''>
                        {ability}, {ability2}
                        </Col>
                      </Row>
                      <Row className='abt'>
                        <Col xs={4} className=''>
                          <p>
                          Egg Groups
                          </p>
                        </Col>
                        <Col xs={8} className=''>
                        {egg}
                        </Col>
                      </Row>
                    </TabPanel>
                    <TabPanel>
                      <div className='mt-3'>
                          <Stats
                            hp={hp}
                            attack={attack}
                            defence={defence}
                            spattack={spattack}
                            spdefence={spdefence}
                            speed={speed}
                          />
                        </div>
                    </TabPanel>
                    <TabPanel>
                      <p className="text-center">Not Available Now</p>
                    </TabPanel>
                    <TabPanel>
                      <p className="text-center">Not Available Now</p>
                    </TabPanel>
                  </Tabs>
                </div>
              </Col>
            </Row>
            
          </>
        )}
      </div>
    </div>
    </ScreenLayout>
  );
};

export default DetailScreen;
