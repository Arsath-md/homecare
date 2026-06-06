import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import services from "../datas/servicedata";

export default function Searching() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredServices = services.filter((service) =>
    service.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    const firstMatch = filteredServices[0];

    if (firstMatch) {
      navigate(
        `/service/${firstMatch.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`
      );

      setSearch("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 relative">

      {/* Search Box */}
      <form onSubmit={handleSubmit}>
        <div
          className="
            relative
            bg-white
            rounded-2xl
            shadow-xl
            border
            border-slate-200
            overflow-hidden
            transition-all
            duration-300
            focus-within:ring-4
            focus-within:ring-green-200
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
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search Home Care Services..."
            className="
              w-full
              py-4
              pl-12
              pr-4
              outline-none
              text-base
              md:text-lg
              bg-transparent
            "
          />
        </div>
      </form>

      {/* Search Results */}
      {search.trim() && (
        <div
          className="
            absolute
            left-4
            right-4
            mt-3
            bg-white
            rounded-2xl
            shadow-2xl
            overflow-hidden
            border
            border-slate-100
            z-50
            max-h-[400px]
            overflow-y-auto
          "
        >
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                onClick={() => setSearch("")}
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  hover:bg-green-50
                  transition
                  border-b
                  border-slate-100
                "
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    h-14
                    w-14
                    rounded-xl
                    object-cover
                  "
                />

                <div>
                  <h3
                    className="
                      font-semibold
                      text-slate-800
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div
              className="
                p-5
                text-center
                text-gray-500
              "
            >
              No services found
            </div>
          )}
        </div>
      )}
    </div>
  );
}