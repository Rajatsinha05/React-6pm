import React from "react";

const Card = ({ title, price, image }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{price}</p>
      <button>Buy </button>
    </div>
  );
};

export default Card;
