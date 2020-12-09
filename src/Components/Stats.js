import React from 'react';
import Translator from './Translator';
import { Col, ProgressBar } from 'react-bootstrap';

const Stats = ({
  hp,
  defence,
  attack,
  infoHpEn,
  infoDefEn,
  infoAttackEn,
  infoHpTr,
  infoDefTr,
  infoAttackTr,
}) => {
  return (
    <>
      <Col className='border border-dark rounded p-2 m-1'>
        <p className='text-center'>
          <b>
            <Translator turkish={infoHpTr} english={infoHpEn} />
          </b>
        </p>
        <ProgressBar variant='danger' animated now={hp} label={hp} />
      </Col>
      <Col className='border border-success rounded p-2  m-1'>
        <p className='text-center'>
          <b>
            <Translator turkish={infoDefTr} english={infoDefEn} />
          </b>
        </p>
        <ProgressBar variant='primary' animated now={defence} label={defence} />
      </Col>
      <Col className='border rounded border-danger p-2  m-1'>
        <p className='text-center'>
          <b>
            <Translator turkish={infoAttackTr} english={infoAttackEn} />
          </b>
        </p>
        <ProgressBar variant='warning' animated now={attack} label={attack} />
      </Col>
    </>
  );
};

export default Stats;
