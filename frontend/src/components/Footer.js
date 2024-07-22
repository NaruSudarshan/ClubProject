import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Hotel Booking</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
