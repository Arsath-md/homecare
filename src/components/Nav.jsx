import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Searching from "./Searching";

export default function Nav() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {/* Navigation bar */}
      <nav
        className="flex justify-between flex-auto p-2 bg-black/10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="z-110 rounded-full h-15 w-15">
          <img
            src="https://ik.imagekit.io/hifi/imgs/hclogo.png?updatedAt=1770127333262"
            alt="Velan Homecare Nursing logo"
          />
        </div>

        {/* Brand name */}
        <div className="text-center z-100">
          <h1
            className="font-bold text-3xl z-110"
            style={{ fontFamily: "cursive", color: "blue" }}
          >
            Velan
          </h1>
          <p className="font-bold text-xl text-white">
            Homecare Nursing
          </p>
        </div>

        {/* Search toggle */}
        <div
          className={`p-1 z-100 rounded-full text-center h-8 w-8 ${
            opened ? "bg-red-600" : "bg-black"
          } transition duration-300`}
        >
          <button
            type="button"
            aria-label={opened ? "Close search" : "Open search"}
            aria-expanded={opened}
            onClick={() => setOpened(!opened)}
            className="w-full h-full flex items-center justify-center focus:outline-none "
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-white"
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>

      {/* Search panel */}
      {opened && (
        <div
          className="flex justify-center transition duration-400"
          role="search"
          aria-label="Site search"
        >
          <Searching />
        </div>
      )}
    </>
  );
}
