import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

const Stats = ( {hp,defence,attack,speed,spdefence,spattack} ) => {
  return (
    <>
      <Row className='stat'>
        <Col xs={2} className=''>
          <p>
            Hp
          </p>
        </Col>
        <Col xs={2} className='text-center'>
          <p>{hp}</p>
        </Col>
        <Col xs={8} className=''>
          <ProgressBar variant='success' animated now={hp} />
        </Col>
      </Row>
      <Row className='stat'>
        <Col xs={2} className=''>
          <p>
            Attack
          </p>
        </Col>
        <Col xs={2} className='text-center'>
          <p>{attack}</p>
        </Col>
        <Col xs={8} className=''>
          <ProgressBar variant='danger' animated now={attack} />
        </Col>
      </Row>
      <Row className='stat'>
        <Col xs={2} className=''>
          <p>
            Defense
          </p>
        </Col>
        <Col xs={2} className='text-center'>
          <p>{defence}</p>
        </Col>
        <Col xs={8} className=''>
          <ProgressBar variant='danger' animated now={defence} />
        </Col>
      </Row>
      <Row className='stat'>
        <Col xs={2} className=''>
          <p>
            Sp.Atk
          </p>
        </Col>
        <Col xs={2} className='text-center'>
          <p>{spattack}</p>
        </Col>
        <Col xs={8} className=''>
          <ProgressBar variant='success' animated now={spattack} />
        </Col>
      </Row>
      <Row className='stat'>
        <Col xs={2} className=''>
          <p>
            Sp.Def
          </p>
        </Col>
        <Col xs={2} className='text-center'>
          <p>{spdefence}</p>
        </Col>
        <Col xs={8} className=''>
          <ProgressBar variant='success' animated now={spdefence} />
        </Col>
      </Row>
      <Row className='stat'>
        <Col xs={2} className=''>
          <p>
            Speed
          </p>
        </Col>
        <Col xs={2} className='text-center'>
          <p>{speed}</p>
        </Col>
        <Col xs={8} className=''>
          <ProgressBar variant='primary' animated now={speed} />
        </Col>
      </Row>
    </>
  );
};

export default Stats;
