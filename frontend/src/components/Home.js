import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';



function Home() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/hotels', {
      params: { name: search, minPrice, maxPrice, rating, location }
    })
      .then(response => setHotels(response.data))
      .catch(error => console.error(error));
  }, [search, minPrice, maxPrice, rating, location]);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Featured Hotels</h1>
      <Form className="mb-4">
        <Form.Group controlId="formSearch">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name"
          />
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
        </Form.Group>
        <Form.Group controlId="formMinPrice">
          <Form.Label>Min Price</Form.Label>
          <Form.Control
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min Price"
          />
        </Form.Group>
        <Form.Group controlId="formMaxPrice">
          <Form.Label>Max Price</Form.Label>
          <Form.Control
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max Price"
          />
        </Form.Group>
        <Form.Group controlId="formRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Rating (0-5)"
            min="0"
            max="5"
          />
        </Form.Group>
      </Form>
      <Row>
        {hotels.map(hotel => (
          <Col md={4} key={hotel._id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={hotel.image} />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>{hotel.description}</Card.Text>
                <Card.Text><strong>Price:</strong> ${hotel.price}</Card.Text>
                <Card.Text><strong>Rating:</strong> {hotel.rating}</Card.Text>
                <Link to={`/hotel/${hotel._id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        

      </Row>
    </Container>
  );
}

export default Home;
