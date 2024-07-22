import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function BookingForm() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    axios.post(`http://localhost:5000/api/bookings/${id}`, { name, email, checkIn, checkOut }, {
      headers: { 'x-auth-token': token }
    })
      .then(response => alert('Booking confirmed'))
      .catch(error => console.error(error));
  };

  return (
    <Container className="mt-4">
      <h1>Book Hotel</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCheckIn">
          <Form.Label>Check-In Date</Form.Label>
          <Form.Control
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCheckOut">
          <Form.Label>Check-Out Date</Form.Label>
          <Form.Control
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Confirm Booking</Button>
      </Form>
    </Container>
  );
}

export default BookingForm;
