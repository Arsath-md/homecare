import service from "../datas/servicedata";
import Service_card from "../components/service_card";

export default function Services() {
  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-green-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span
            className="
              px-5
              py-2
              rounded-full
              bg-green-100
              text-green-700
              font-semibold
              text-sm
            "
          >
            🏥 Professional Home Care Services
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            text-center
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-slate-800
            mb-4
          "
        >
          Our Services
        </h2>

        <p
          className="
            max-w-3xl
            mx-auto
            text-center
            text-gray-600
            text-base
            sm:text-lg
            mb-12
          "
        >
          Compassionate and professional healthcare services
          delivered at your doorstep with trained caregivers,
          nurses and healthcare professionals.
        </p>

        {/* Service Count */}
        <div className="flex justify-center mb-12">
          <div
            className="
              bg-white
              px-8
              py-4
              rounded-2xl
              shadow-lg
              border
              border-green-100
            "
          >
            <span className="text-3xl font-bold text-green-600">
              {service.length}+
            </span>

            <span className="ml-2 text-gray-600">
              Specialized Services
            </span>
          </div>
        </div>

     {/* MOBILE VIEW */}
<div className="lg:hidden">

  <div
    className="
      overflow-x-auto
      custom-scroll
      pb-3
    "
  >
    <div
      className="
        grid
        grid-rows-2
        grid-flow-col
        gap-4
        w-max
        pr-4
      "
    >
      {service.map((item) => (
        <div
          key={item.id}
          className="w-[250px]"
        >
          <Service_card service={item} />
        </div>
      ))}
    </div>
  </div>

  <div className="mt-3 text-center">
    <span
      className="
        inline-flex
        items-center
        gap-2
        text-sm
        text-gray-500
      "
    >
      ← Swipe to view more services →
    </span>
  </div>

</div>

{/* DESKTOP VIEW */}
<div
  className="
    hidden
    lg:grid
    lg:grid-cols-3
    xl:grid-cols-4
    gap-8
  "
>
  {service.map((item) => (
    <Service_card
      key={item.id}
      service={item}
    />
  ))}
</div>

        {/* DESKTOP VIEW */}
        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-3
            xl:grid-cols-4
            gap-8
          "
        >
          {service.map((item) => (
            <Service_card
              key={item.id}
              service={item}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">

          <h3
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-slate-800
              mb-4
            "
          >
            Need Immediate Care Assistance?
          </h3>

          <p className="text-gray-600 mb-8">
            Our healthcare professionals are available 24/7.
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-4
            "
          >
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8
                py-4
                rounded-xl
                bg-green-600
                hover:bg-green-700
                text-white
                font-semibold
                transition
              "
            >
              WhatsApp Now
            </a>

            <a
              href="tel:+919999999999"
              className="
                px-8
                py-4
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                transition
              "
            >
              Call Now
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}