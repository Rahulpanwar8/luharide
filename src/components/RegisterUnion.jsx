import { useState } from "react";
import emailjs from "emailjs-com";

const RegisterUnion = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    aadharFile: null,
    licenseFile: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const uploadFileToCloud = async (file) => {
    // Replace with real cloud upload logic
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`https://files.example.com/${file.name}`);
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const aadharLink = await uploadFileToCloud(formData.aadharFile);
    const licenseLink = await uploadFileToCloud(formData.licenseFile);

    const form = e.target;

    form.aadhar_url.value = aadharLink;
    form.license_url.value = licenseLink;

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form,
        "your_user_id"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="max-w-xl mx-auto bg-gray-900 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Taxi Union Registration Form
        </h2>

        {submitted ? (
          <div className="text-green-400 text-center font-semibold">
            Thank you! Your details have been submitted successfully. Our team will contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="union_name" required placeholder="Union Name" className={inputClass} />
            <input type="text" name="leader_name" required placeholder="Union Leader's Full Name" className={inputClass} />
            <input type="text" name="pan_number" required placeholder="PAN Card Number" className={inputClass} />
            <input type="text" name="mobile_number" required placeholder="Contact Number" className={inputClass} />
            <input type="email" name="email" required placeholder="Email Address" className={inputClass} />
            <input type="text" name="address" required placeholder="Full Address" className={inputClass} />

            <label className="block text-sm font-medium mt-2">Upload Aadhar Card</label>
            <input type="file" name="aadharFile" accept=".jpg,.jpeg,.png,.pdf" required onChange={handleFileChange} className="w-full p-2 bg-gray-800 text-white rounded" />

            <label className="block text-sm font-medium mt-2">Upload Driving License</label>
            <input type="file" name="licenseFile" accept=".jpg,.jpeg,.png,.pdf" required onChange={handleFileChange} className="w-full p-2 bg-gray-800 text-white rounded" />

            <input type="hidden" name="aadhar_url" />
            <input type="hidden" name="license_url" />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold transition duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const inputClass = "w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400";

export default RegisterUnion;
