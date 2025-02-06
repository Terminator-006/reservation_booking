import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Booking System</h1>
      <Link to="/confirmed-slots">View Available Slots</Link>
    </div>
  );
};

export default Home;