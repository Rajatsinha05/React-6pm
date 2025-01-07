import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
  let [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios.get("https://dummyjson.com/products");

    setData(res.data.products);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map(({ title }) => (
        <h1>{title}</h1>
      ))}
    </div>
  );
};

export default Api;
