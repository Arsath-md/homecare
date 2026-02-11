import { useLocation, useParams } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";


export default function Forms() {
  const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const imgs = location.state?.images;
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(
      () => alert("Message sent successfully"),
      () => alert("Failed to send")
    );
  };

  return (
    <div className="p-5 flex flex-col gap-4">
      <header className="text-center font-bold text-2xl">
        <h1 id="form-heading">{title}</h1>
      </header>

      {imgs && (
        <img
          src={imgs}
          alt={`Selected service: ${title}`}
          className="mx-auto"
        />
      )}

      <form
        ref={formRef}
        onSubmit={sendEmail}
        aria-labelledby="form-heading"
        className="flex flex-col font-semibold text-lg shadow-md gap-3 p-5"
      >
        {/* PATIENT NAME */}
        <label htmlFor="patient-name" className="text-sm">
          Patient Name
        </label>
        <input
          id="patient-name"
          className="input1"
          type="text"
          name="user_name"
          placeholder="Enter patient name"
          required
        />

        {/* AGE */}
        <label htmlFor="patient-age" className="text-sm">
          Patient Age
        </label>
        <input
          id="patient-age"
          className="input1"
          type="number"
          name="user_age"
          required
        />

        {/* GENDER */}
        <label htmlFor="gender" className="text-sm">
          Gender
        </label>
        <select id="gender" name="user_gender" className="input1" required>
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* ATTENDANT */}
        <label htmlFor="attendant-name" className="text-sm">
          Attendant Name
        </label>
        <input
          id="attendant-name"
          className="input1"
          type="text"
          name="user_atname"
          required
        />

        {/* PHONE */}
        <label htmlFor="phone" className="text-sm">
          Contact Phone Number
        </label>
        <input
          id="phone"
          className="input1"
          type="tel"
          name="user_phone"
          required
        />

        {/* ADDRESS */}
        <label htmlFor="address" className="text-sm">
          Care Location / Address
        </label>
        <input
          id="address"
          className="input1"
          type="text"
          name="user_address"
          required
        />

        {/* SERVICE */}
        <label htmlFor="service" className="text-sm">
          Service Selected
        </label>
        <input
          id="service"
          className="input1"
          type="text"
          name="user_service"
          value={title}
          readOnly
        />

        {/* CARE TYPE */}
        <label htmlFor="care-type" className="text-sm">
          Type of Care Required
        </label>
        <select
          id="care-type"
          name="care_type"
          className="p-2 border border-red-500 rounded"
          required
        >
          <option value="">Select care type</option>
          <option value="24 Hours">24 Hours</option>
          <option value="Day Shift">Day Shift</option>
          <option value="Night Shift">Night Shift</option>
          <option value="Hourly">Hourly</option>
        </select>

        {/* CONDITION */}
        <label htmlFor="condition" className="text-sm">
          Patient Condition
        </label>
        <select
          id="condition"
          name="mobility"
          className="p-2 border border-red-500 rounded"
        >
          <option value="">Select condition</option>
          <option value="Independent">Independent</option>
          <option value="Critical">Critical</option>
          <option value="Bedridden">Bedridden</option>
        </select>

        {/* FEEDING */}
        <label htmlFor="feeding" className="text-sm">
          Feeding Method
        </label>
        <select
          id="feeding"
          name="feeding"
          className="p-2 border border-red-500 rounded"
        >
          <option value="">Select feeding method</option>
          <option value="Normal">Normal</option>
          <option value="Tube Feeding">Tube Feeding</option>
          <option value="IV">IV</option>
        </select>

        {/* EMERGENCY */}
        <label htmlFor="emergency-name" className="text-sm">
          Emergency Contact Name
        </label>
        <input
          id="emergency-name"
          className="input1"
          type="text"
          name="emergency_contact_name"
          required
        />

        <label htmlFor="emergency-phone" className="text-sm">
          Emergency Contact Phone
        </label>
        <input
          id="emergency-phone"
          className="input1"
          type="tel"
          name="emergency_contact_phone"
          required
        />

        {/* NOTES */}
        <label htmlFor="notes" className="text-sm">
          Special Instructions / Notes
        </label>
        <textarea
          id="notes"
          name="special_notes"
          rows="3"
          className="border border-red-500 rounded"
        />

        {/* CONSENT */}
        <label htmlFor="consent" className="flex gap-2 text-sm items-center">
          <input id="consent" type="checkbox" name="consent" required />
          I confirm the information provided is correct
        </label>

        <button
          type="submit"
          className="border p-2 font-semibold rounded-full"
        >
          Send Details
        </button>
        <button type="button" onClick={()=> navigate(-1)}
          className="border p-2 font-bold rounded-full text-black"
          >
          Back
        </button>
      </form>
    </div>
  );
}
