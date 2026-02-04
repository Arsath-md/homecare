export default function News_letter() {
  return (
    <>
    <div className="p-2 text-center ">
         {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 p-4">
          Get Care Updates
        </h2>
         <section className="px-4 py-8 p-6 bg-[#F2F7FB] shadow-lg rounded">
      <div className="max-w-md mx-auto rounded text-center font-bold">

       

        <p className="text-md text-gray-600 mt-2">
          Receive simple health tips, elder care guidance, and service updates.
        </p>

        {/* Form */}
        <form className="mt-4 space-y-3">

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Email address"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 rounded-lg text-sm font-medium"
          >
            Subscribe
          </button>

        </form>

        {/* Trust note */}
        <p className="text-xs text-gray-500 mt-3">
          No spam. Only useful care information. Unsubscribe anytime.
        </p>

      </div>
    </section>
    </div>
    </>
    
  );
}
