export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Trained & Verified Caregivers",
      image:
        "https://ik.imagekit.io/hifi/imgs/Health%20professional%20team-amico.svg",
      description:
        "Our nurses and caregivers are professionally trained, verified, and experienced in providing compassionate care.",
    },
    {
      title: "Care at Home",
      image:
        "https://ik.imagekit.io/hifi/imgs/Nursing%20home-bro.svg",
      description:
        "Professional medical and personal care services delivered in the comfort and safety of your home.",
    },
    {
      title: "Personalized Care Plans",
      image:
        "https://ik.imagekit.io/hifi/imgs/Physical%20therapy%20exercise-rafiki.svg",
      description:
        "Every patient receives a customized care plan tailored to their health condition and lifestyle.",
    },
    {
      title: "24/7 Support",
      image:
        "https://ik.imagekit.io/hifi/imgs/Service%2024_7-rafiki.svg",
      description:
        "Round-the-clock assistance and quick response whenever you need support.",
    },
    {
      title: "Trusted by Families",
      image:
        "https://ik.imagekit.io/hifi/imgs/Nursing%20home-pana.svg",
      description:
        "Families trust us because we focus on safety, transparency, reliability, and genuine care.",
    },
    {
      title: "Affordable Services",
      image:
        "https://ik.imagekit.io/hifi/imgs/Nursing%20home-bro.svg",
      description:
        "Quality healthcare services at affordable rates without compromising care standards.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-slate-50">

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm">
            ❤️ Trusted Home Healthcare
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          Caring for your loved ones is a responsibility we take seriously.
          Our experienced caregivers provide compassionate, professional,
          and personalized care right at your doorstep.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="
                group
                bg-white
                rounded-3xl
                p-6
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-3
                border
                border-slate-100
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  h-52
                  mx-auto
                  object-contain
                  mb-5
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />

              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">
                {item.title}
              </h3>

              <p className="text-gray-600 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        {/* Trust Stats */}
        <div className="mt-20">

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

              <div>
                <h3 className="text-4xl font-bold text-green-600">
                  24/7
                </h3>
                <p className="text-gray-600 mt-2">
                  Support
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-600">
                  100+
                </h3>
                <p className="text-gray-600 mt-2">
                  Families Served
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-600">
                  100%
                </h3>
                <p className="text-gray-600 mt-2">
                  Verified Staff
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-green-600">
                  10+
                </h3>
                <p className="text-gray-600 mt-2">
                  Care Services
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            Need Professional Home Care?
          </h3>

          <p className="text-gray-600 mb-6">
            We're ready to help your loved ones receive quality care at home.
          </p>

          <a
            href="/contact"
            className="
              inline-flex
              items-center
              px-8
              py-4
              rounded-xl
              bg-green-600
              hover:bg-green-700
              text-white
              font-semibold
              transition
              shadow-lg
            "
          >
            Get Free Consultation
          </a>

        </div>

      </div>
    </section>
  );
}