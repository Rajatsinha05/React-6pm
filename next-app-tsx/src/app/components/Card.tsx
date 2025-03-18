import React, { FC } from "react";
import { product } from "../type/productType";

const Card: FC<product> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Card;
