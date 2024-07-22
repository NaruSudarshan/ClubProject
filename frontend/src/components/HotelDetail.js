import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

function HotelDetail() {
  const [hotel, setHotel] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/hotels/${id}`)
      .then(response => setHotel(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!hotel) return <div>Loading...</div>;

  return (
    <Container className="mt-4">
      <h1>{hotel.name}</h1>
      <p>{hotel.description}</p>
      <p><strong>Price:</strong> ${hotel.price}</p>
      <p><strong>Rating:</strong> {hotel.rating}</p>
      <p><strong>Location:</strong> {hotel.location}</p>
      <Link to={`/book/${hotel._id}`}>
        <Button variant="primary">Book Now</Button>
      </Link>
    </Container>
  );
}

export default HotelDetail;
