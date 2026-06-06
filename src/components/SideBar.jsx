import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaQuestionCircle,
  FaFileContract,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar({
  content,
  setSidebarOpen,
}) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`
          fixed inset-0 z-[300]
          bg-black/50 backdrop-blur-sm
          transition-all duration-300
          ${
            content
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-[280px]
          bg-white
          shadow-2xl
          z-[320]
          transition-transform
          duration-300
          flex
          flex-col
          overflow-y-auto
          overscroll-contain
          scrollbar-hide
          ${
            content
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div
          className="
            bg-gradient-to-r
            from-green-600
            to-green-500
            text-white
            p-6
            relative
            flex-shrink-0
          "
        >
          <button
            onClick={() => setSidebarOpen(false)}
            className="
              absolute
              top-4
              right-4
              text-xl
              hover:rotate-90
              transition
            "
          >
            <FaTimes />
          </button>

          <div className="flex justify-center mb-4">
            <img
              src="https://ik.imagekit.io/hifi/imgs/hclogo.png?updatedAt=1770127333262"
              alt="Velan Home Care"
              className="
                h-20
                w-20
                rounded-full
                bg-white
                p-2
                shadow-lg
              "
            />
          </div>

          <h2 className="text-center text-xl font-bold">
            Velan Home Care
          </h2>

          <p className="text-center text-sm mt-2 opacity-90">
            We Care Like Family ❤️
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-5 overflow-y-auto">
          <ul className="space-y-3">

            <li>
              <Link
                to="/"
                onClick={() => setSidebarOpen(false)}
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-green-50
                  hover:text-green-600
                  transition
                "
              >
                <FaHome />
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setSidebarOpen(false)}
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-green-50
                  hover:text-green-600
                  transition
                "
              >
                <FaInfoCircle />
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setSidebarOpen(false)}
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-green-50
                  hover:text-green-600
                  transition
                "
              >
                <FaPhoneAlt />
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/faq"
                onClick={() => setSidebarOpen(false)}
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-green-50
                  hover:text-green-600
                  transition
                "
              >
                <FaQuestionCircle />
                FAQ
              </Link>
            </li>

            <li>
              <Link
                to="/terms"
                onClick={() => setSidebarOpen(false)}
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-green-50
                  hover:text-green-600
                  transition
                "
              >
                <FaFileContract />
                Terms & Conditions
              </Link>
            </li>

          </ul>
        </nav>

        {/* Footer */}
        
      </aside>
    </>
  );
}