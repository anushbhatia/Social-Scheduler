import React from 'react';

const Card = (props) => {
  return (
    <div className="col-sm-12 col-md-4">
      <div className="card text-center">
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            <b>{props.name}</b>
          </p>
          <p className="card-text">
            <i>Contributer</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
