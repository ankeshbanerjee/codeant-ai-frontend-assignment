import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center w-full lg:w-1/3 px-4 py-2 border rounded-lg focus-within:ring-1 focus-within:ring-blue-200 focus-within:border-blue-200 border-gray-300 bg-white">
      <FiSearch className="text-gray-500 text-lg" />
      <input
        type="text"
        placeholder="Search Repositories"
        className="w-full pl-3 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-500"
      />
    </div>
  );
};

export default SearchBar;
