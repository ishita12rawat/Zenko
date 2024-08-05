import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Restodetails() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    const fetchRestaurantData = async () => {
      const url = `https://example-data.draftbit.com/restaurants/${id}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setRestaurant(data);
      } catch (err) {
        console.error(err);
      }
    };

    useEffect(() => {
      fetchRestaurantData();
    }, [id]);

    return (
      <div className='container'>
        {restaurant ? (
          <>
            <h1>{restaurant.name}</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGArhzI4oR15YLNN9IxbsQSBtN6pyz5FkOTg&s" alt={restaurant.name} />
            <p>{restaurant.address}</p>
            <p>{restaurant.website}</p>
            <p>{restaurant.city}</p>
            <p>{restaurant.country}</p>
            <p>{restaurant.type}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}

