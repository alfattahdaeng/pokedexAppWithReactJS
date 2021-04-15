import React from 'react';
import { Container } from 'react-bootstrap';

const ScreenLayout = ({ children }) => {
  return (
    <main className="main"
    >

      <Container>
            {children}
      </Container>
    </main>
  );
};

export default ScreenLayout;
