import { useLoaderData, useLocation, useParams  } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Forms(){
  
            const {title} = useParams();
            const locatin = useLocation();
            const imgs = locatin.state?.images
            // const [ok , setOk] = useState(false)

            // form details
            const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
       import.meta.env.VITE_EMAIL_TEMPLATE_ID,
       formRef.current,
       import.meta.env.VITE_EMAIL_PUBLIC_KEY    )
      .then(
        (result) => {
          console.log("Email sent", result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.error("Email error", error.text);
          alert("Failed to send");
        }
      );
  };
            
    return(
        <>
          <div >
                <div className="p-5 flex flex-col gap-4">
                    <div  className="text-center font-bold text-2xl">
                        <h1 >{title}</h1>
                    </div>

                    <div>
                        <img src={imgs || null} alt="preview" />
                    </div>

                    <div>
                      <form
  ref={formRef}
  onSubmit={sendEmail}
  className="flex flex-col font-semibold text-lg shadow-md gap-3 p-5"
>

  {/* PATIENT NAME */}
  <label className="text-sm">
    Patient Name  </label>

    <input
      className="input1"
      type="text"
      name="user_name"
      placeholder="Enter patient name"
      required
    />

  {/* AGE */}
  <label className="text-sm">
    Patient Age  </label>

    <input
      className="input1"
      type="number"
      name="user_age"
      placeholder="Enter age"
      required
    />

  {/* GENDER */}
  <label className="text-sm p-1">
    Gender  </label>

    <select name="user_gender" className="input1" required>
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>

  {/* ATTENDANT */}
  <label className="text-sm">
    Attendant Name  </label>

    <input
      className="input1"
      type="text"
      name="user_atname"
      placeholder="Enter attendant name"
      required
    />

  {/* PHONE */}
  <label className="text-sm">
    Contact Phone Number  </label>

    <input
      className="input1"
      type="tel"
      name="user_phone"
      placeholder="Enter phone number"
      required
    />

  {/* ADDRESS */}
  <label className="text-sm">
    Care Location / Address  </label>

    <input
      className="input1"
      type="text"
      name="user_address"
      placeholder="Enter address"
      required
    />

  {/* SERVICE */}
  <label className="text-sm">
    Service Selected  </label>

    <input
      className="input1"
      type="text"
      name="user_service"
      value={title}
      readOnly
    />


  {/* CARE TYPE */}
  <label className="text-sm">
    Type of Care Required  </label>

    <select
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

  {/* PATIENT CONDITION */}
  <label className="text-sm">
    Patient Condition  </label>

    <select name="mobility" className="p-2 border border-red-500 rounded">
      <option value="">Select condition</option>
      <option value="Independent">Independent</option>
      <option value="Needs Assistance">Critical</option>
      <option value="Bedridden">Bedridden</option>
    </select>

  {/* FEEDING */}
  <label className="text-sm">
    Feeding Method  </label>

    <select name="feeding" className="p-2 border border-red-500 rounded">
      <option value="">Select feeding method</option>
      <option value="Normal">Normal</option>
      <option value="Tube Feeding">Tube Feeding</option>
      <option value="IV">IV</option>
    </select>

  {/* EMERGENCY CONTACT */}
  <label className="text-sm">
    Emergency Contact Name  </label>

    <input
      className="input1"
      type="text"
      name="emergency_contact_name"
      required
    />

  <label className="text-sm">
    Emergency Contact Phone  </label>

    <input
      className="input1"
      type="tel"
      name="emergency_contact_phone"
      required
    />

  {/* NOTES */}
  <label className="text-sm">
    Special Instructions / Notes  </label>

    <textarea
      className="border border-red-500 rounded"
      name="special_notes"
      rows="3"
    />

  {/* CONSENT */}
  <label className="flex gap-2 text-sm items-center">
    <input type="checkbox" name="consent" required />
    I confirm the information provided is correct
  </label>

  <button
    type="submit"
    className="border p-2 font-semibold rounded-full"
  >
    Send Details
  </button>

</form>


                    </div>
                </div>   
         </div>        
                
        </>
    )
}