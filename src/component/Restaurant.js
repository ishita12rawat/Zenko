import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  const fetchRestaurantData = async () => {
    const url = 'https://example-data.draftbit.com/restaurants?_limit=20';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setRestaurants(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  return (
    <div className='container'>
      {restaurants.map((item) => (
        <div key={item.id} className='restaurant-item'>
          <h3 className='restaurant-name'>{item.name}</h3>
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrD7tFDch_wzVpRKJb9hpzs3eX2WBitjTZ3w&s" // Use restaurant's image or placeholder
            alt={item.name || 'Restaurant Image'}
            onClick={() => navigate(`/restro/${item.id}`)} // Correct path for navigation
            className='restaurant-image'
          />
          <p className='restaurant-address'>{item.address}</p>
          <p className='restaurant-website'><strong>Website:</strong> {item.website}</p>
          <p className='restaurant-city'><strong>City:</strong> {item.city}</p>
          <p className='restaurant-country'><strong>Country:</strong> {item.country}</p>
          <p className='restaurant-type'><strong>Type:</strong> {item.type}</p>
        </div>
      ))}
    </div>
  );
}




