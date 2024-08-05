import React, { useState, useEffect } from 'react';
import Shoesdetails from './Shoesdetails';

export default function Shoes() {
  const [shoes, setShoes] = useState([]);

  const showDetail = async () => {
    let API_URL = 'https://example-data.draftbit.com/sneakers?_limit=50';
  
    try {
      let response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('not found');
      }
      let parsed = await response.json();
      console.log(parsed);
      setShoes(parsed);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    showDetail();
  }, []);

  return (
    <div className="containeer">
      {shoes.map((shoe) => (
        <Shoesdetails
          key={shoe.id}
          media={shoe.media}
          releaseDate={shoe.releaseDate}
          Brand={shoe.brand}
          colorway={shoe.colorway}
          id={shoe.id}
          title={shoe.title}
          retailPrice={shoe.retailPrice}
        />
      ))}
    </div>
  );
}
