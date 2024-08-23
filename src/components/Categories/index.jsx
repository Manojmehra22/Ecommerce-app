import React, { useEffect, useState } from "react";
import Featurescard from "../Featurescard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) return <div>Loading....</div>;

  return <Featurescard cards={categories} />;
};

export default Categories;
