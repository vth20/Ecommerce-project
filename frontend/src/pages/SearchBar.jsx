import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center justify-between w-1/3 p-2 bg-white border rounded-md">
      <input
        type="text"
        className="w-full py-2 px-3 border rounded-md"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter" && searchQuery.trim() !== "") {
            handleSearch();
          }
        }}
      />

      <button
        className="ml-2 py-2 px-4 bg-gray-200 rounded-md"
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
