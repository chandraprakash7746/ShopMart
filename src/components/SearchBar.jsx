import React from 'react';
import SearchIcon from '../Icons/SearchIcon';

const SearchBar = ({ placeholder = "Search" }) => {
  return (
    <div className="relative w-full max-w-xl cursor-pointer">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2 pl-4 pr-10 text-sm bg-gray-50 border border-gray-200 rounded-full cursor-pointer focus:cursor-text focus:outline-none focus:ring-2 focus:ring-[#D13B53]/20 focus:border-[#D13B53] transition-all placeholder:text-gray-400 text-gray-700"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
        <SearchIcon className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;