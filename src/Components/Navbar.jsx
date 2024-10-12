import React from "react";
import Dropdown from "../Components/Dropdown";

const Navbar = ({ categories, onCategorySelect }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-yellow-500 text-white">
      <span className="flex gap-4">
        <img
          className="h-10"
          src="https://cdn-icons-png.flaticon.com/512/10045/10045941.png"
          alt="Icon"
        />
        <h1 className="text-2xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-900 from-10% via-black via-30% to-red-900 to-90% ...">
          Click & Play
        </h1>
      </span>

      <Dropdown categories={categories} onCategorySelect={onCategorySelect} />
    </nav>
  );
};

export default Navbar;
