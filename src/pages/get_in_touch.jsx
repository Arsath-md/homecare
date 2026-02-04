// import Customer_support from "../components/customer_support";

export default function GetInTouch() {
  return (
    <>
    <div className="p-1">

      <main className="px-4 py-6 max-w-md mx-auto shadow-xl ">

        {/* Header */}
        <header className="mb-6 ">
          <h1 className="text-2xl font-semibold text-gray-900">
            Get in Touch
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Need home care support? Call or message us anytime.
          </p>
        </header>

        {/* Quick Actions */}
        <section className="space-y-3 mb-6">
          <a
            href="tel:+919999999999"
            className="block w-full text-center bg-green-600 text-white py-3 rounded-lg font-medium"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919999999999"
            className="block w-full text-center bg-green-500 text-white py-3 rounded-lg font-medium"
          >
            💬 WhatsApp Us
          </a>
        </section>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-3 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Contact Form */}
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Request a Call Back
          </h2>

          <form className="space-y-4">

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Mobile number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Service Needed
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>Home Nursing</option>
                <option>Elder Care</option>
                <option>Physiotherapy</option>
                <option>Medical Equipment</option>
                <option>Doctor Visit</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium"
            >
              Request Call Back
            </button>

          </form>
        </section>

        {/* Trust Note */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          ✔ Trained caregivers &nbsp; • &nbsp; ✔ Verified staff &nbsp; • &nbsp; ✔ 24/7 support
        </p>

      </main>
    </div>
     

    </>
  );
}
