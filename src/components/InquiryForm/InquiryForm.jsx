import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const InquiryForm = () => {
      const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
      });

      const [errors, setErrors] = useState({});

      const validateForm = () => {
            const newErrors = {};

            if (!formData.name.trim()) {
                  newErrors.name = 'Full Name is required.'
            }
            if (!formData.email.trim()) {
                  newErrors.email = 'Email is required.';
            } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
                  newErrors.email = 'Enter a valid email address.';
            }
            if (!formData.phone.trim()) newErrors.phone = 'Phone is required.';
            if (!formData.company.trim()) newErrors.company = 'Company is required.';
            if (!formData.message.trim()) newErrors.message = 'Message is required.';

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
      };

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
            setErrors({ ...errors, [name]: '' }); // Clear errors as user types
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            if (!validateForm()) return;

            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const userId = import.meta.env.VITE_EMAILJS_USER_ID;

            if (!serviceId || !templateId || !userId) {
                  console.warn('Missing environment variables. Please check your .env file.');
                  alert('Configuration error. Please try again later.');
                  return;
            }

            emailjs
                  .send(
                        serviceId,
                        templateId,
                        {
                              full_name: formData.name,
                              from_email: formData.email,
                              phone: formData.phone,
                              company: formData.company,
                              message: formData.message,
                        },
                        userId
                  )
                  .then(
                        () => {
                              alert('Email sent successfully!');
                              setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                        },
                        (error) => {
                              console.error('Email sending failed:', error);
                              alert('Failed to send the email. Please try again.');
                        }
                  );
      };

      return (
            <div className="text-center inquiry-bg py-10 px-6 lg:px-16">
                  <div className="mb-[222px] mt-[127px]">
                        <h2 className="inquiry--text">MAKE AN INQUIRY</h2>
                        <p className="vision-textt vmb__text">WE WOULD LOVE TO WORK WITH YOU</p>
                        <form className=" w-[320px] md:w-[950px] mx-auto" onSubmit={handleSubmit}>
                              {['Name', 'Email', 'Phone', 'Company', 'Message'].map((field, index) => (
                                    <div className="flex flex-row items-center mt-4" key={index}>
                                          <label
                                                htmlFor={field}
                                                className="w-[200px] text-left text-[#667C99] font-medium text-[20px] after:content-[':'] hidden md:block" // Add colon and hide on mobile
                                          >
                                                {field.charAt(0).toUpperCase() + field.slice(1)}
                                          </label>
                                          {field === 'Message' ? (
                                                <textarea
                                                      id={field}
                                                      name={field.toLowerCase().replace(' ', '')}
                                                      value={formData[field.toLowerCase().replace(' ', '')]}
                                                      onChange={handleChange}
                                                      rows="2"
                                                      className="w-full p-3 border-b border-[#BF9874] placeholder:text-[12px] md:placeholder:text-[20px] bg-transparent focus:outline-none focus:ring-0 focus:border-[#667C99] text-[#667C99] placeholder:absolute placeholder:top-[-8px] text-[20px] font-[500]"
                                                      placeholder={`Your ${field}`}
                                                      // required
                                                      aria-label={field}
                                                />
                                          ) : (
                                                <input
                                                      id={field}
                                                      type={field === 'Email' ? 'email' : 'text'}
                                                      name={field.toLowerCase().replace(' ', '')}
                                                      value={formData[field.toLowerCase().replace(' ', '')]}
                                                      onChange={handleChange}
                                                      className="w-full p-3 border-b border-[#BF9874] placeholder:text-[12px] md:placeholder:text-[20px] bg-transparent focus:outline-none focus:ring-0 focus:border-[#667C99] text-[#667C99] text-[20px] font-[500]"
                                                      placeholder={`Your ${field}`}
                                                      // required
                                                      aria-label={field}
                                                />
                                          )}
                                          {errors[field.toLowerCase().replace(' ', '')] && (
                                                <p className="text-red-500 absolute right-[20px] md:right-[32rem] text-sm mt-1">{errors[field.toLowerCase().replace(' ', '')]}</p>
                                          )}
                                    </div>
                              ))}
                              <button
                                    type="submit"
                                    className=" w-[150px] md:w-[281px] lg:h-[49px] border-[1px] border-[#001025] bg-transparent text-[16px] leading-[17.41px] text-[#001025] font-[600] py-3 px-6 transition duration-300 mt-6"
                              >
                                    Submit
                              </button>
                        </form>

                  </div>
            </div>
      );
};

export default InquiryForm;
