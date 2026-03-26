import React, { useState } from "react";
import { comapanyContactEmail, services } from "./Main";
import { useNavigate } from "react-router-dom";


export const ContactForm = () => {
  const navigate=useNavigate()
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
setLoading(true);
  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${comapanyContactEmail}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Quote Request from VRGT Global Technology Website",
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      navigate('/form-success-view')

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: services?.[0] || "",
        message: "",
      });
    } else {
      alert("❌ Something went wrong. Try again.");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Network error");
  }finally{
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen  flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          Request a quote
        </h1>

        <form  onSubmit={handleSubmit}
          className="space-y-4 bg-gray-200 p-4 rounded-lg">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Your Email ID</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Your Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="block text-sm mb-1">Service</label>
            <select
              name="service"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.service}
              onChange={handleChange}
            >
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-1">
              Your message (optional)
            </label>
            <textarea
              name="message"
              rows="6"
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {/* ✅ Set Email Subject */}
          <input
            type="hidden"
            name="_subject"
            value="New Quote Request from VRGT Global Technology Website"
          />

          {/* <input type="hidden" name="_captcha" value="true" /> */}
          {/* Submit */}
         <button
  type="submit"
  disabled={loading}
  className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition flex items-center justify-center gap-2 disabled:opacity-70"
>
  {loading ? (
    <>
      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
      Submitting...
    </>
  ) : (
    "SUBMIT"
  )}
</button>
        </form>
      </div>
    </div>
  );
};