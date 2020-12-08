import React from 'react';
import { Col, ProgressBar } from 'react-bootstrap';

const Stats = ({ hp, defence, attack, infoHp, infoDef, infoAttack }) => {
  return (
    <>
      <Col className='border border-dark rounded p-2 m-1'>
        <p className='text-center'>
          <b>{infoHp}</b>
        </p>
        <ProgressBar variant='danger' animated now={hp} label={hp} />
      </Col>
      <Col className='border border-success rounded p-2  m-1'>
        <p className='text-center'>
          <b>{infoDef}</b>
        </p>
        <ProgressBar variant='primary' animated now={defence} label={defence} />
      </Col>
      <Col className='border rounded border-danger p-2  m-1'>
        <p className='text-center'>
          <b>{infoAttack}</b>
        </p>
        <ProgressBar variant='warning' animated now={attack} label={attack} />
      </Col>
    </>
  );
};

export default Stats;
