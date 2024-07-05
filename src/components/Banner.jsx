import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
function Banner({query , handleInputChange}) {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary m-3">
        Find your<span className="text-blue"> new job </span>today
      </h1>
      <p className="text-lg text-black/70 mb-8 m-3">
        Thousand of jobs in computer engineering and technology sectors are
        waiting for you{""}
      </p>

      <form>
        <div className="m-3 flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-withi:ring-2 focus-within:ring-inset focus-within:ring-offset-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What position you are looking for"
              className="block flex-1 border-1 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 w-10"
                onChange={handleInputChange}
                value={query}
              />
              <FiSearch className="absolute mt-2.5 ml-2 text-gray-400"/>
          </div>
          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-withi:ring-2 focus-within:ring-inset focus-within:ring-offset-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Location"
              className="block flex-1 border-1 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 w-10"
              />
              <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400"/>
              <button className="bg-blue text-white py-2 px-8 md:rounded-s-none rounded">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Banner;
