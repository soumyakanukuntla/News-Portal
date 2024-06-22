import React from 'react';

const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

const CategoryDrop = ({ onCategoryChange }) => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <select className="form-select" onChange={handleCategoryChange}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default CategoryDrop;
