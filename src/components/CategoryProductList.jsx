import client from "../contentful";

import Card from "./Card";

const fetchProducts = async (category) => {
  try {
    const response = await client.getEntries({
      content_type: "category",
      "fields.name": category,
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const CategoryProductList = async ({ category }) => {
  const categories = await fetchProducts(category);

  return (
    <>
      {categories[0].fields.products?.map((item, i) => (
        <Card product={item} key={i} />
      ))}
    </>
  );
};

export default CategoryProductList;
