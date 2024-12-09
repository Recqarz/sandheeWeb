import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const InquiryForm = () => {
      const [formData, setFormData] = useState({
            fullName: "",
            email: "",
            business: "",
            message: "",
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
            e.preventDefault();

            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const userId = import.meta.env.VITE_EMAILJS_USER_ID;

            if (!serviceId || !templateId || !userId) {
                  console.warn("Missing environment variables. Please check your .env file.");
                  alert("Configuration error. Please try again later.");
                  return;
            }

            const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email);
            if (!isValidEmail) {
                  alert("Please enter a valid email address.");
                  return;
            }

            console.log("Sending email to:", "gauraav@sandhee.com");
            console.log("Form Data:", formData);

            emailjs
                  .send(
                        serviceId,
                        templateId,
                        {
                              to_email: "gauraav@sandhee.com",
                              full_name: formData.fullName,
                              from_email: formData.email,
                              reply_to: formData.email,
                              message: formData.message,
                        },
                        userId
                  )
                  .then(
                        () => {
                              alert("Email sent successfully!");
                              setFormData({ fullName: "", email: "", business: "", message: "" });
                        },
                        (error) => {
                              console.error("Email sending failed:", error);
                              alert("Failed to send the email. Please try again.");
                        }
                  );
      };

      return (
            <div className={`text-center  inquiry-bg py-10 px-6 lg:px-16`}>
                  <div className="mb-[222px] mt-[127px]">
                        <h2 className="inquiry--text">MAKE AN INQUIRY</h2>
                        <p className="vision-textt vmb__text">WE WOULD LOVE TO WORK WITH YOU</p>

                        <form className="lg:w-[1212px] mx-auto" onSubmit={handleSubmit}>
                              <div className="flex flex-col md:flex-row md:gap-4">
                                    <div className="w-full">
                                          <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                className="w-full p-3 border-b border-[#BF9874] bg-transparent focus:outline-none focus:ring-0 focus:border-[#667C99] text-[#667C99] text-[20px] font-[500]"
                                                placeholder="Full Name"
                                                required
                                                aria-label="Full Name"
                                          />
                                    </div>

                                    <div className="w-full mt-4 md:mt-0">
                                          <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full p-3 border-b border-[#BF9874] bg-transparent focus:outline-none focus:ring-0 focus:border-[#667C99] text-[#667C99] text-[20px] font-[500]"
                                                placeholder="E-mail"
                                                required
                                                aria-label="Email Address"
                                          />
                                    </div>
                              </div>

                              <div className="w-full mt-6">
                                    <select
                                          name="business"
                                          value={formData.business}
                                          onChange={handleChange}
                                          className="w-full p-3 border-b border-[#BF9874] bg-transparent focus:outline-none focus:ring-0 focus:border-[#667C99] text-[#667C99] text-[20px] font-[500]"
                                          required
                                          aria-label="Select your business"
                                    >
                                          <option value="" disabled hidden>
                                                Select your business
                                          </option>
                                          <option value="business1">Business 1</option>
                                          <option value="business2">Business 2</option>
                                          <option value="business3">Business 3</option>
                                    </select>
                              </div>

                              <div className="w-full mt-6">
                                    <textarea
                                          name="message"
                                          value={formData.message}
                                          onChange={handleChange}
                                          className="w-full p-3 border-b border-[#BF9874] placeholder:text-[#667C99] placeholder:relative placeholder:top-[-18px] bg-transparent focus:outline-none focus:ring-0 focus:border-[#667C99] text-[#667C99] text-[20px] font-[500] leading-[1.5] box-border"
                                          rows="4" // Ensures the textarea has a proper height
                                          placeholder="Your message"
                                          required
                                          aria-label="Your Message"
                                    />

                              </div>

                              <button
                                    type="submit"
                                    className="lg:w-[281px] lg:h-[49px] border-[1px] border-[#001025] bg-transparent text-[16px] leading-[17.41px] text-[#001025] font-[600] py-3 px-6 transition duration-300 mt-6"
                              >
                                    REQUEST AN APPOINTMENT
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default InquiryForm;
