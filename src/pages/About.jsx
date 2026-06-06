import service from "../datas/servicedata";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-slate-50">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-5 py-16">

        {/* Hero */}
        <div className="text-center mb-16">

          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm">
            ❤️ Trusted Home Healthcare
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mt-6">
            About Velan Home Care
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 mt-6 text-lg">
            We provide professional home nursing, patient care,
            elderly care, physiotherapy, baby care and healthcare
            support services to help families receive quality care
            in the comfort of their homes.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-green-600">
              24/7
            </h3>
            <p className="text-gray-600 mt-2">
              Support
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-green-600">
              100+
            </h3>
            <p className="text-gray-600 mt-2">
              Families Served
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-green-600">
              10+
            </h3>
            <p className="text-gray-600 mt-2">
              Care Services
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 text-center">
            <h3 className="text-4xl font-bold text-green-600">
              100%
            </h3>
            <p className="text-gray-600 mt-2">
              Verified Staff
            </p>
          </div>

        </div>

        {/* Who We Are */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">

          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Who We Are
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            Velan Home Care is a dedicated team of trained nurses,
            caregivers and healthcare professionals committed to
            providing safe, compassionate and personalized home
            healthcare services. Our goal is to improve the quality
            of life of patients and support families with reliable
            care solutions.
          </p>

        </div>

        {/* Services */}
        <div className="mb-20">

          <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
            Our Services
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Comprehensive healthcare solutions tailored to your needs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {service.map((item) => (
              <div
                key={item.id}
                className="
                  bg-white
                  rounded-3xl
                  shadow-md
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  p-5
                  text-center
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-20
                    h-20
                    object-contain
                    mx-auto
                    mb-4
                  "
                  loading="lazy"
                />

                <h3 className="font-semibold text-slate-800">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs text-gray-500 mt-2">
                    {item.description}
                  </p>
                )}
              </div>
            ))}

          </div>

        </div>

        {/* Why Trust Us */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">

          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Why Families Trust Us
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="flex gap-4">
              <span className="text-2xl">✔</span>
              <div>
                <h3 className="font-bold">
                  Trained & Verified Caregivers
                </h3>
                <p className="text-gray-600">
                  Experienced and background-verified staff.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">✔</span>
              <div>
                <h3 className="font-bold">
                  Patient First Approach
                </h3>
                <p className="text-gray-600">
                  Every care plan is personalized.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">✔</span>
              <div>
                <h3 className="font-bold">
                  Hygiene & Safety Standards
                </h3>
                <p className="text-gray-600">
                  Strict medical and safety protocols.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">✔</span>
              <div>
                <h3 className="font-bold">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Quick response whenever you need help.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="bg-green-600 text-white rounded-3xl p-10 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Professional Home Care?
          </h2>

          <p className="mb-8 text-green-100">
            Let us help your loved ones receive quality healthcare at home.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="tel:+919363878868"
              className="
                bg-white
                text-green-700
                px-8
                py-4
                rounded-xl
                font-semibold
              "
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919363878868"
              className="
                border
                border-white
                px-8
                py-4
                rounded-xl
                font-semibold
              "
            >
              WhatsApp Us
            </a>

          </div>

        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-12">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              bg-slate-800
              text-white
              px-8
              py-3
              rounded-full
              hover:bg-slate-900
              transition
            "
          >
            ← Back
          </button>

        </div>

      </div>
    </section>
  );
}