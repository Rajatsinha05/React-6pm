"use client";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { product } from "../type/productType";
import Card from "../components/Card";

const page: FC = () => {
  const [product, setProduct] = useState<product[]>([]);
  const getProduct = async (): Promise<void> => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProduct(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {product.map((product) => (
        <Card {...product} />
      ))}
    </div>
  );
};

export default page;
