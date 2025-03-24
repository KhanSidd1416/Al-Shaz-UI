import React from 'react';
import { ReactComponent as SearchIcon } from "../assets/SearchIcon.svg";

const SearchBox = ({ searchQuery, setSearchQuery, placeholder = 'Search' }) => {
  return (
    <div className="relative flex bg-wab-stroke-175 w-full items-center rounded-3xl p-[0.0625rem]">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="outline:none shadow-dark-inset bg-gradient-light-gray w-full rounded-3xl px-[1.625rem] py-2 text-white outline-none backdrop-blur-[27px] placeholder:text-white/80 md:py-3"
      />
      <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80" />
    </div>
  );
};

export default SearchBox;
