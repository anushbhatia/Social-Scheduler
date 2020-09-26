import React from 'react';

const CardItem = ({ image, name, profileurl }) =>
	(
    <div className="col-sm-12 col-md-4 margin">
      <a className="card-url" href={profileurl} target="_blank">
        <div className="card text-center">
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text bold">{name}</p>
          </div>
        </div>
      </a>
    </div>
	)
export default CardItem;
