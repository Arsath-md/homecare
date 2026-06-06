import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import Searching from "./Searching";

export default function Nav({ onMenuClick }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          bg-black/30
          backdrop-blur-xl
          border-b
          border-white/10
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-2
            sm:px-6
            lg:px-8
            h-15
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="
                h-12
                w-12
                sm:h-14
                sm:w-14
                rounded-full
                overflow-hidden
                bg-white
                shadow-lg
                shrink-0
              "
            >
              <img
                src="/logovels.png"
                alt="Velan Homecare Nursing"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h1
                className="
                  text-lg
                  sm:text-2xl
                  font-bold
                  text-white
                "
              >
                Velan
              </h1>

              <p
                className="
                  text-[11px]
                  sm:text-sm
                  text-green-300
                "
              >
                Homecare Nursing
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              type="button"
              onClick={() => setOpened(!opened)}
              aria-label="Search"
              className="
                h-11
                w-11
                rounded-full
                bg-white/10
                hover:bg-green-500
                text-white
                transition-all
                duration-300
                flex
                items-center
                justify-center
              "
            >
              <FontAwesomeIcon
                icon={
                  opened
                    ? faXmark
                    : faMagnifyingGlass
                }
              />
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              aria-label="Open Menu"
              onClick={onMenuClick}
              className="
                h-11
                w-11
                rounded-full
                bg-green-500
                hover:bg-green-600
                text-white
                transition
                flex
                items-center
                justify-center
              "
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Search Panel */}
      <div
        className={`
          fixed
          top-24
          left-0
          right-0
          z-40
          px-4
          transition-all
          duration-300
          ${
            opened
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }
        `}
      >
        <div className="max-w-4xl mx-auto">
          <Searching />
        </div>
      </div>
    </>
  );
}