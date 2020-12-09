import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ScreenLayout = ({ children }) => {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: 'url(/images/background6.png)',
      }}
    >
      <Container>
        <div className='pt-5'>
          <Card
            style={{ height: '80vh', overflow: 'auto' }}
            className='bg-muted mt-4'
          >
            {children}
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ScreenLayout;
