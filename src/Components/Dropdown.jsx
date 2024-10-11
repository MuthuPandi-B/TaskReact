
import React, { useState } from 'react';

const Dropdown = ({ categories, onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    onCategorySelect(e.target.value);
  };

  return (
    <select
      value={selectedCategory}
      onChange={handleChange}
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring text-black"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
