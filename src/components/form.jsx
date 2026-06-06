import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Forms() {
  const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const imgs = location.state?.images;
  const formRef = useRef();

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const message = `
🏥 *New Service Enquiry*

📌 Service: ${formData.get("user_service")}

👤 Patient Name: ${formData.get("user_name")}
🎂 Age: ${formData.get("user_age")}
⚧ Gender: ${formData.get("user_gender")}

👨 Attendant Name: ${formData.get("user_atname")}
📞 Phone: ${formData.get("user_phone")}

📍 Address:
${formData.get("user_address")}

🩺 Care Type:
${formData.get("care_type")}

❤️ Patient Condition:
${formData.get("mobility")}

🍽 Feeding Method:
${formData.get("feeding")}

🚨 Emergency Contact:
${formData.get("emergency_contact_name")}

📞 Emergency Phone:
${formData.get("emergency_contact_phone")}

📝 Notes:
${formData.get("special_notes")}
`;

    const whatsappUrl = `https://wa.me/919363878868?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto p-5">

      {/* Header */}
      <div className="text-center mb-6">
        <h1
          id="form-heading"
          className="text-3xl font-bold text-slate-800"
        >
          {title}
        </h1>
      </div>

      {/* Service Image */}
      {imgs && (
        <div className="flex justify-center mb-6">
          <img
            src={imgs}
            alt={title}
            className="w-40 h-40 object-contain"
          />
        </div>
      )}

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={sendWhatsApp}
        aria-labelledby="form-heading"
        className="
          bg-white
          shadow-xl
          rounded-3xl
          p-6
          md:p-8
          space-y-5
        "
      >

        {/* Patient Name */}
        <div>
          <label className="block mb-2 font-medium">
            Patient Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            placeholder="Enter patient name"
            className="w-full border rounded-xl p-3"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block mb-2 font-medium">
            Patient Age
          </label>
          <input
            type="number"
            name="user_age"
            required
            className="w-full border rounded-xl p-3"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-2 font-medium">
            Gender
          </label>
          <select
            name="user_gender"
            required
            className="w-full border rounded-xl p-3"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Attendant */}
        <div>
          <label className="block mb-2 font-medium">
            Attendant Name
          </label>
          <input
            type="text"
            name="user_atname"
            required
            className="w-full border rounded-xl p-3"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-medium">
            Contact Phone Number
          </label>
          <input
            type="tel"
            name="user_phone"
            required
            className="w-full border rounded-xl p-3"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-2 font-medium">
            Care Location / Address
          </label>
          <input
            type="text"
            name="user_address"
            required
            className="w-full border rounded-xl p-3"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block mb-2 font-medium">
            Service Selected
          </label>
          <input
            type="text"
            name="user_service"
            value={title}
            readOnly
            className="w-full border rounded-xl p-3 bg-gray-100"
          />
        </div>

        {/* Care Type */}
        <div>
          <label className="block mb-2 font-medium">
            Type of Care Required
          </label>
          <select
            name="care_type"
            required
            className="w-full border rounded-xl p-3"
          >
            <option value="">Select Care Type</option>
            <option>24 Hours</option>
            <option>Day Shift</option>
            <option>Night Shift</option>
            <option>Hourly</option>
          </select>
        </div>

        {/* Condition */}
        <div>
          <label className="block mb-2 font-medium">
            Patient Condition
          </label>
          <select
            name="mobility"
            className="w-full border rounded-xl p-3"
          >
            <option value="">Select Condition</option>
            <option>Independent</option>
            <option>Critical</option>
            <option>Bedridden</option>
          </select>
        </div>

        {/* Feeding */}
        <div>
          <label className="block mb-2 font-medium">
            Feeding Method
          </label>
          <select
            name="feeding"
            className="w-full border rounded-xl p-3"
          >
            <option value="">Select Feeding</option>
            <option>Normal</option>
            <option>Tube Feeding</option>
            <option>IV</option>
          </select>
        </div>

        {/* Emergency Contact */}
        <div>
          <label className="block mb-2 font-medium">
            Emergency Contact Name
          </label>
          <input
            type="text"
            name="emergency_contact_name"
            required
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Emergency Contact Phone
          </label>
          <input
            type="tel"
            name="emergency_contact_phone"
            required
            className="w-full border rounded-xl p-3"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block mb-2 font-medium">
            Special Instructions / Notes
          </label>
          <textarea
            name="special_notes"
            rows="4"
            className="w-full border rounded-xl p-3"
          />
        </div>

        {/* Consent */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="consent"
            required
          />
          <span>
            I confirm the information provided is correct
          </span>
        </label>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">

          <button
            type="submit"
            className="
              flex-1
              bg-green-600
              hover:bg-green-700
              text-white
              py-3
              rounded-xl
              font-semibold
            "
          >
            Send via WhatsApp
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              flex-1
              bg-slate-800
              hover:bg-slate-900
              text-white
              py-3
              rounded-xl
              font-semibold
            "
          >
            Back
          </button>

        </div>

      </form>
    </div>
  );
}