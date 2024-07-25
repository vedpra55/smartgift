import React from "react";
import Card from "./Card";
import client from "../contentful";

const fetchProducts = async () => {
  try {
    const response = await client.getEntries({
      content_type: "products",
      limit: 5,
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const BesetSeller = async () => {
  const products = await fetchProducts();
  return (
    <>
      {products?.map((item, i) => (
        <Card product={item} key={i} />
      ))}
    </>
  );
};

export default BesetSeller;
