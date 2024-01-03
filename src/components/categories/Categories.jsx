import React, { useEffect, useState } from "react";
import CategoryBar from "./CategoryBar";
import "./categories.scss";

const Categories = ({ onFilteredItems }) => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    onFilteredItems(filteredItems);
  }, [filteredItems, onFilteredItems]);

  return (
    <div className="categoryBar">
      <h1 className="text-3xl font-bold">Explore Our Projects</h1>
      <CategoryBar onFilterChange={setFilteredItems} />
    </div>
  );
};

export default Categories;
