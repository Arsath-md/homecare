import { Link } from "react-router-dom";

export default function Service_card({ service }) {
  return (
    <div
      className="bg-gray-900 rounded p-4 shadow-md text-center text-white flex flex-col justify-center items-center gap-2"
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-duration="600"
      data-aos-easing="ease-out-back"
    >
      {/* Service image */}
      <div className="flex justify-center">
        <img
          src={service.image}
          className="w-48 h-auto object-contain"
          alt={`${service.title} service`}
        />
      </div>

      {/* Service title */}
      <h2 className="text-lg font-semibold">
        {service.title}
      </h2>

      {/* Enquire link (styled as button) */}
      <Link
        to={`/service/${service.title}`}
        state={{ images: service.image }}
        aria-label={`Enquire about ${service.title}`}
        className="text-green-700 ring ring-green-800 rounded p-2 font-semibold focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Enquire now
      </Link>
    </div>
  );
}
