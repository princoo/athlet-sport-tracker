import React from 'react';
import { IoMdSearch } from "react-icons/io";

export default function SearchBox() {
  return (
    <div className="w-full md:w-1/2">
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IoMdSearch className="text-theme-light" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-theme-light text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
}
