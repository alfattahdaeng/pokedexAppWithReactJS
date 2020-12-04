import React from 'react';
import { Col, ProgressBar } from 'react-bootstrap';

const Stats = ({ hp, defence, attack }) => {
  return (
    <>
      <Col>
        <ProgressBar variant='danger' animated now={hp} label={hp} />
        <p>Health Point</p>
      </Col>
      <Col>
        <ProgressBar variant='primary' animated now={defence} label={defence} />
        <p>Deffence</p>
      </Col>
      <Col>
        <ProgressBar variant='warning' animated now={attack} label={attack} />
        <p>Attack</p>
      </Col>
    </>
  );
};

export default Stats;
