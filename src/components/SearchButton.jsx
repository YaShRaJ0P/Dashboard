"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export const SearchButton = () => {
  const [searchValue, setSearchValue] = useState("");

  const search = (e) => {
    e.preventDefault();
    // Implement search logic here
  };

  return (
    <form
      onSubmit={search}
      className="flex items-center border-gray-400 border-2 rounded-sm max-w-full"
    >
      <button
        type="submit"
        className="p-3 md:p-2 flex items-center justify-center"
      >
        <FiSearch className="text-gray-600" />
      </button>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search users..."
        className="py-2 pr-2 w-64 md:w-40 sm:w-28 max-sm:w-16 h-full text-gray-900 placeholder-gray-400 outline-none rounded-r-sm transition-all duration-200"
      />
    </form>
  );
};
