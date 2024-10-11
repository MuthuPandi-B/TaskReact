
import React from 'react';
import Dropdown from '../Components/Dropdown';

const Navbar = ({ categories, onCategorySelect }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-2xl">Movie Search App</h1>
      <Dropdown  categories={categories} onCategorySelect={onCategorySelect} />
    </nav>
  );
};

export default Navbar;
