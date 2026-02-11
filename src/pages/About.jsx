// import SEO from "../components/Seo";
import service from "../datas/servicedata";
import { useNavigate } from "react-router-dom";
export default function About() {
    const navigate = useNavigate();
  return (
    <>
      {/* <SEO
        title="About Us | Trusted Home Nursing & Patient Care Services"
        description="We provide professional home nursing, elderly care, mother & baby care, tracheostomy care, cancer patient care, oxygen supply, and medical support at home."
        keywords="home nursing care, patient care services, elderly care at home, mother and baby care, tracheostomy care, cancer patient care, oxygen supply"
        canonical="https://yourdomain.com/about"
      /> */}

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          About Us – Trusted Home Nursing & Patient Care Services
        </h1>

        <p className="text-gray-700 mb-6">
          We provide professional, compassionate, and reliable home nursing and
          patient care services to support patients and families in the comfort
          of their own homes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Who We Are
        </h2>
        <p className="text-gray-700">
          We are a dedicated team of trained caregivers and healthcare
          professionals committed to delivering safe, dignified, and
          personalized care at home.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          What We Do
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {service.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 mx-auto object-contain mb-3"
                loading="lazy"
              />
              <p className="text-center font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Why Families Trust Us
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Trained and verified caregivers</li>
          <li>Patient-first and family-focused approach</li>
          <li>Strict hygiene and safety standards</li>
          <li>Reliable communication and support</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          Our Promise
        </h2>
        <p className="text-gray-700">
          We promise care that respects dignity, comfort, and recovery —
          because healing happens best at home.
        </p>
        <button type="button" onClick={()=> navigate(-1)}
          className="border p-2 font-bold rounded-full text-black"
          >
          Back
        </button>
      </section>
    </>
  );
}
