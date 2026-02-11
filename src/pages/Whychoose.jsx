export default function WhyChooseUs() {
  return (
    <>
      {/* Section heading */}
      <h1
        id="why-choose-us-heading"
        className="text-4xl text-gray-900 text-center font-bold py-3"
      >
        Why Choose Us
      </h1>

      <main
        className="p-5 max-w-3xl mx-auto shadow-md rounded"
        aria-labelledby="why-choose-us-heading"
      >
        {/* Intro */}
        <header className="mb-8">
          <p
            className="text-gray-600 mt-2 font-bold text-center"
            data-aos="fade-up"
          >
            Caring for your loved ones is a responsibility we take seriously.
          </p>
        </header>

        {/* Reasons */}
        <section
          className="space-y-6 rounded shadow-md p-5"
          aria-label="Reasons to choose our home care services"
        >
          <article data-aos="fade">
            <img
              src="https://ik.imagekit.io/hifi/imgs/Health%20professional%20team-amico.svg"
              alt="Professional team of trained and verified caregivers"
            />
            <h2 className="text-xl font-medium text-gray-900">
              Trained & Verified Caregivers
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Our nurses and caregivers are trained, background-verified, and
              experienced in handling patients with care and dignity.
            </p>
          </article>

          <article data-aos="fade">
            <img
              src="https://ik.imagekit.io/hifi/imgs/Nursing%20home-bro.svg"
              alt="Medical care provided comfortably at home"
            />
            <h2 className="text-xl font-medium text-gray-900">
              Care at the Comfort of Home
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              We provide professional medical and personal care services in the
              comfort of your home, helping patients recover in a familiar and
              safe environment.
            </p>
          </article>

          <article data-aos="fade">
            <img
              src="https://ik.imagekit.io/hifi/imgs/Physical%20therapy%20exercise-rafiki.svg"
              alt="Personalized healthcare plans illustration"
            />
            <h2 className="text-xl font-medium text-gray-900">
              Personalized Care Plans
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Every patient is different. We understand your needs and provide
              care plans tailored to your medical condition and daily routine.
            </p>
          </article>

          <article data-aos="fade">
            <img
              src="https://ik.imagekit.io/hifi/imgs/Service%2024_7-rafiki.svg"
              alt="24 by 7 customer support illustration"
            />
            <h2 className="text-xl font-medium text-gray-900">
              24/7 Support & Quick Response
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Our team is available around the clock to support you and respond
              quickly when you need assistance or guidance.
            </p>
          </article>

          <article data-aos="fade">
            <img
              src="https://ik.imagekit.io/hifi/imgs/Nursing%20home-pana.svg"
              alt="Families trusting professional home care services"
            />
            <h2 className="text-xl font-medium text-gray-900">
              Trusted by Families
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Families trust us because we focus on safety, transparency, and
              genuine care — not just services.
            </p>
          </article>
        </section>

        {/* Call to Action */}
        <section className="mt-10 text-center">
          <p className="text-sm text-gray-700 mb-4">
            Need reliable home care for your loved one?
          </p>

          <a
            href="/contact"
            aria-label="Contact us for home care services"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </>
  );
}
