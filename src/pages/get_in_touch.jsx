export default function GetInTouch() {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-50">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            📞 Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4">
            Get In Touch
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Need professional home care support? Our team is available
            24/7 to assist you and your loved ones.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>

            {/* Contact Cards */}
            <div className="space-y-5">

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2">
                  📞 Call Us
                </h3>

                <p className="text-gray-600 mb-4">
                  Speak directly with our care team.
                </p>

                <a
                  href="tel:+919363878868"
                  className="
                    inline-block
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  Call Now
                </a>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2">
                  💬 WhatsApp
                </h3>

                <p className="text-gray-600 mb-4">
                  Chat with us for quick assistance.
                </p>

                <a
                  href="https://wa.me/919363878868"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-block
                    bg-green-500
                    hover:bg-green-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  WhatsApp Us
                </a>
              </div>

            </div>

            {/* Trust Section */}
            <div className="mt-8 bg-white rounded-3xl p-6 shadow-lg">

              <h3 className="font-bold text-xl mb-4">
                Why Families Trust Us
              </h3>

              <div className="grid grid-cols-2 gap-4">

                <div className="text-center">
                  <h4 className="text-3xl font-bold text-green-600">
                    24/7
                  </h4>
                  <p className="text-gray-500">
                    Support
                  </p>
                </div>

                <div className="text-center">
                  <h4 className="text-3xl font-bold text-green-600">
                    100%
                  </h4>
                  <p className="text-gray-500">
                    Verified Staff
                  </p>
                </div>

                <div className="text-center">
                  <h4 className="text-3xl font-bold text-green-600">
                    10+
                  </h4>
                  <p className="text-gray-500">
                    Services
                  </p>
                </div>

                <div className="text-center">
                  <h4 className="text-3xl font-bold text-green-600">
                    Fast
                  </h4>
                  <p className="text-gray-500">
                    Response
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Request a Call Back
              </h3>

              <form className="space-y-5">

                <div>
                  <label className="block mb-2 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      focus:ring-2
                      focus:ring-green-500
                      focus:outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      focus:ring-2
                      focus:ring-green-500
                      focus:outline-none
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Service Needed
                  </label>

                  <select
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      focus:ring-2
                      focus:ring-green-500
                      focus:outline-none
                    "
                  >
                    <option>Patient Care</option>
                    <option>Old Age Care</option>
                    <option>Nursing Care</option>
                    <option>Baby Care</option>
                    <option>Physiotherapy Care</option>
                    <option>Doctor Visit</option>
                    <option>Lab Test</option>
                    <option>Ambulance Service</option>
                    <option>Medicine Delivery</option>
                    <option>Household Care</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell us about your requirement..."
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      resize-none
                      focus:ring-2
                      focus:ring-green-500
                      focus:outline-none
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    py-4
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  Request Call Back
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}