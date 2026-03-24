import React, { useState } from "react";
import { services } from "./Main";


export const ContactForm = () => {
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


  return (
    <div className="min-h-screen  flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl">

        {/* Title */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          Request a quote
        </h1>

        <form  action="https://formsubmit.co/gaddamsuneel143@gmail.com"
          method="POST" 
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

          {/* ✅ Redirect to Home Page */}
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3001/"
          />
          {/* <input type="hidden" name="_captcha" value="true" /> */}
          {/* Submit */}
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};