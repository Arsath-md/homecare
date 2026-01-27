import hero from "../assets/project1.png";
import Nav from "../components/Nav";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* navbar */}
      <Nav show={show} setShow={setShow} />

      {/* side menu */}
      <div
        className={`${
          show ? "test-on" : "test-off"
        } flex flex-col justify-center items-center absolute z-20`}
      >
        <div className="flex flex-col gap-8 text-white font-bold">
          <a className="flex items-center gap-3">
            <FontAwesomeIcon icon={faHome} size="2x" />
            <span className="text-xl">Home</span>
          </a>

          <a className="flex items-center gap-3">
            <FontAwesomeIcon icon={faUsers} size="2x" />
            <span className="text-xl">About</span>
          </a>

          <a className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <span className="text-xl">Contact</span>
          </a>
        </div>
      </div>

      {/* hero content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Best home nursing for your loved ones
        </h1>

        <p className="text-lg mb-6">
          With the most talented and experienced nurses
        </p>

        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded bg-green-500 px-4 py-2 font-bold">
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </button>

          <button className="flex items-center gap-2 rounded bg-red-500 px-4 py-2 font-bold">
            <FontAwesomeIcon icon={faPhone} />
            Call Us
          </button>
        </div>
      </div>
    </div>
  );
}
