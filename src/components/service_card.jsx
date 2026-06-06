import { Link } from "react-router-dom";

export default function Service_card({ service }) {
  const slug = service.title
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <div
      data-aos="fade-up"
      className="
        group
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-3
        border
        border-slate-100
        h-full
        flex
        flex-col
      "
    >
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="
            w-full
            h-52
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div
          className="
            absolute
            top-4
            left-4
            bg-green-500
            text-white
            text-xs
            px-3
            py-1
            rounded-full
          "
        >
          Home Care
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-slate-800 mb-3">
          {service.title}
        </h2>

        <p className="text-gray-600 text-sm flex-grow">
          {service.description}
        </p>

        <Link
          to={`/service/${slug}`}
          className="
            mt-5
            w-full
            text-center
            py-3
            rounded-xl
            bg-green-600
            hover:bg-green-700
            text-white
            font-semibold
            transition
          "
        >
          Enquire Now →
        </Link>
      </div>
    </div>
  );
}