import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="h-[10vh]">
      <div className="px-6 py-4">
        <form action="">
          <div className="flex space-x-3">
            <label className="border-[1px] rounded-lg border-gray-700 p-3  flex items-center gap-2 bg-slate-800 w-[80%]  ">
              <input
                type="text"
                className="grow outline one rounded"
                placeholder="Search"
              />
            </label>
            <button>
              <FaSearch className="text-5xl px-2 p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
