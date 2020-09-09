import React from 'react';

const Card = (props) => {
  const { image, name } = props;
  return (
    <div className="col-sm-12 col-md-4 margin-bottom">
      <div className="card text-center">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text bold">{name}</p>
          <p className="card-text italic">Contributer</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
