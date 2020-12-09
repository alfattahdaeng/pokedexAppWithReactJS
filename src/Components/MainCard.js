import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Translator from './Translator';

const Card = ({ bg, id, name }) => {
  return (
    <>
      <Card
        style={{
          width: '18rem',
          height: '31rem',
          backgroundImage: `url(/images/background${bg}.png)`,
        }}
        className='homescreen-card'
      >
        <div>
          <h1 className=' text-white text-center my-3'>{name}</h1>

          <i className='fas fa-heart fa-3x float-right pr-2 pb-1 homescreen-card__heardIcon' />
        </div>
        <Card.Body>
          <Row>
            <Col md={4} xs={3}>
              <Button> Catch</Button>
            </Col>
            <Col>
              <LinkContainer to={`/details/${id}`}>
                <Button className='ml-3'>
                  <Translator
                    turkish={'Daha fazla bilgi'}
                    english={' More Info'}
                  />
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Card;
