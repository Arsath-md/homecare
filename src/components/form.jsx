import { useParams } from "react-router-dom";
import { useState } from "react";
import services from "../datas/servicedata";

export default function Forms() {
  const { title } = useParams();

  const service = services.find(
    (item) =>
      item.title
        .toLowerCase()
        .replace(/\s+/g, "-") === title
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    address: "",
    urgency: "Need Immediately",
    notes: "",
  });

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Service Not Found
        </h1>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const message = `
🏥 Velan Home Care Enquiry

📌 Service: ${service.title}

👤 Patient Name: ${formData.name}

📞 Mobile Number: ${formData.phone}

🎂 Age: ${formData.age}

📍 Address:
${formData.address}

⏰ Requirement:
${formData.urgency}

📝 Notes:
${formData.notes}
`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/919363878868?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">

        {/* Service Image */}
        <img
          src={service.image}
          alt={service.title}
          className="
            w-full
            h-64
            md:h-96
            object-cover
            rounded-3xl
            shadow-lg
            mb-8
          "
        />

        {/* Service Title */}
        <h1
          className="
            text-3xl
            md:text-5xl
            font-bold
            text-slate-800
            mb-4
          "
        >
          {service.title}
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          {service.description}
        </p>

        {/* Quick Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

          <a
            href="tel:+919363878868"
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              text-center
              py-4
              rounded-2xl
              font-bold
              text-lg
              transition
            "
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/919363878868"
            target="_blank"
            rel="noreferrer"
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              text-center
              py-4
              rounded-2xl
              font-bold
              text-lg
              transition
            "
          >
            💬 WhatsApp Us
          </a>

        </div>

        {/* Form */}
        <div
          className="
            bg-white
            rounded-3xl
            shadow-xl
            p-6
            md:p-10
          "
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              Request a Call Back
            </h2>

            <p className="text-gray-500 mt-2">
              Fill your details and our team will contact you.
            </p>
          </div>

          <form
            onSubmit={sendWhatsApp}
            className="space-y-5"
          >

            <div>
              <label className="block mb-2 font-medium">
                Patient Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Patient Name"
                className="
                  w-full
                  border
                  rounded-2xl
                  p-4
                  outline-none
                  focus:ring-2
                  focus:ring-green-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Mobile Number
              </label>

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="
                  w-full
                  border
                  rounded-2xl
                  p-4
                  outline-none
                  focus:ring-2
                  focus:ring-green-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Patient Age
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                className="
                  w-full
                  border
                  rounded-2xl
                  p-4
                  outline-none
                  focus:ring-2
                  focus:ring-green-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Village / Address
              </label>

              <textarea
                rows="3"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="Village, Area, Street..."
                className="
                  w-full
                  border
                  rounded-2xl
                  p-4
                  outline-none
                  focus:ring-2
                  focus:ring-green-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Requirement
              </label>

              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-2xl
                  p-4
                  outline-none
                  focus:ring-2
                  focus:ring-green-500
                "
              >
                <option>Need Immediately</option>
                <option>Within 24 Hours</option>
                <option>Within This Week</option>
                <option>Just Enquiry</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Additional Information
              </label>

              <textarea
                rows="3"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Optional"
                className="
                  w-full
                  border
                  rounded-2xl
                  p-4
                  outline-none
                  focus:ring-2
                  focus:ring-green-500
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
                rounded-2xl
                font-bold
                text-lg
                transition
              "
            >
              📩 Submit
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}