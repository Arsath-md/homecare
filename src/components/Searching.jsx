import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Searching() {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div
        className="
          relative
          bg-white
          rounded-2xl
          shadow-lg
          border
          border-slate-200
          overflow-hidden
          transition-all
          duration-300
          focus-within:ring-4
          focus-within:ring-green-200
          focus-within:border-green-500
        "
      >
        <FaSearch
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />

        <input
          type="text"
          value={search}
          onChange={handleInput}
          placeholder="Search Home Care Services..."
          className="
            w-full
            py-4
            pl-12
            pr-4
            text-gray-700
            bg-transparent
            outline-none
            text-base
            md:text-lg
          "
        />
      </div>
    </div>
  );
}