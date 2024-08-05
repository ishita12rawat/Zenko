import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Shoesdetails({ media, releaseDate, Brand, colorway, id ,title,retailPrice}) {
  const navigate = useNavigate();
  const imageUrl = media?.imageUrl;

  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            className="card-img-top"
            alt="Shoe"
            onClick={() => navigate(`/shoes/${id}`)}
          />
        ) : (
          <p>No image available</p>
        )}

        <div className="card-body">

          <h5 className="card-title">{Brand}</h5>
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">{colorway}</h5>
          <h5 className="card-title">{releaseDate}</h5>
          <h5 className="card-title">{id}</h5>
          <h5 className="card-title">{retailPrice}</h5>
       

          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

  