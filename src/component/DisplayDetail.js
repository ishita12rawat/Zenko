import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for route parameters

export default function DisplayDetail() {
  const [shoe, setShoe] = useState(null);
  const { id } = useParams(); // Get the shoe ID from the route parameters

  const showDetail = async () => {
    let API_URL = `https://example-data.draftbit.com/sneakers/${id}`;

    try {
      let response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('not found');
      }
      let parsed = await response.json();
      console.log(parsed);
      setShoe(parsed);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showDetail();
  }, [id]); // Fetch details whenever the ID changes

  if (!shoe) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{shoe.brand}</h1>
      <img src={shoe.media?.imageUrl} className="card-img-top" alt="Shoe" />
      <p>{shoe.releaseDate}</p>
    </div>
  );
}


