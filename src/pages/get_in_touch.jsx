export default function GetInTouch() {
  return (
    <div className="p-1">
      <main
        className="px-4 py-6 max-w-md mx-auto shadow-xl"
        data-aos="fade-up"
        aria-labelledby="get-in-touch-heading"
      >
        {/* Header */}
        <header className="mb-6">
          <h1
            id="get-in-touch-heading"
            className="text-2xl font-bold text-gray-900"
          >
            Get in Touch
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Need home care support? Call or message us anytime.
          </p>
        </header>

        {/* Quick Actions */}
        <section className="space-y-3 mb-6" aria-label="Quick contact options">
          <a
            href="tel:+919999999999"
            aria-label="Call us now"
            className="block w-full text-lg text-center bg-green-600 text-white py-3 rounded-lg font-bold"
          >
            <span aria-hidden="true">📞</span> Call Now
          </a>

          <a
            href="https://wa.me/919999999999"
            aria-label="Contact us on WhatsApp"
            className="block w-full text-center text-lg bg-green-500 text-white py-3 rounded-lg font-bold"
          >
            <span aria-hidden="true">💬</span> WhatsApp Us
          </a>
        </section>

        {/* Divider */}
        <div className="flex items-center my-6" aria-hidden="true">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-3 text-lg text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Contact Form */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Request a Call Back
          </h2>

          <form
            className="space-y-4"
            aria-label="Callback request form"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-lg text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="Mobile number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-lg text-gray-700 mb-1"
              >
                Service Needed
              </label>
              <select
                id="service"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="home-nursing">Home Nursing</option>
                <option value="elder-care">Elder Care</option>
                <option value="physiotherapy">Physiotherapy</option>
                <option value="equipment">Medical Equipment</option>
                <option value="doctor-visit">Doctor Visit</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold"
            >
              Request Call Back
            </button>
          </form>
        </section>

        {/* Trust Note */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          <span aria-hidden="true">✔</span> Trained caregivers &nbsp; • &nbsp;
          <span aria-hidden="true">✔</span> Verified staff &nbsp; • &nbsp;
          <span aria-hidden="true">✔</span> 24/7 support
        </p>
      </main>
    </div>
  );
}
