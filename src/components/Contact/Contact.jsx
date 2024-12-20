import React from 'react';
import InquiryForm from "../InquiryForm/InquiryForm";

const Contact = () => {
  return (
    <div className='mt-[150px] sm:mt-28 lg:mt-48'>
      {/* Responsive Heading */}
      {/* <h1 className="text-center text-2xl md:text-4xl font-bold mb-8">
        Get in Touch
      </h1> */}
      <InquiryForm />
    </div>
  );
};

export default Contact;
