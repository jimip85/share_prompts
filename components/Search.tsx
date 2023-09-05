import React from "react";

interface SearchProps {
  searchText: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ searchText, handleSearchChange }) => {
  return (
    <>
      <div className="absolute animate-pulse -inset-0.5 bg-gradient-to-r from-purple-900 to-black rounded-lg blur opacity-75 group-hover:opacity-100 transition group-hover:duration-200 animate-tilt"></div>
      <input
        type="text"
        placeholder="Search for a tag or a username"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input relative"
      />
    </>
  );
};

export default Search;
