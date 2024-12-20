import React from 'react';

const Location = () => {
  return (
    <div className="flex h-screen flex-col items-center pt-[5rem] justify-center p-4 bg-[#001025]">
      {/* Heading */}
      <h1 className="text-[5%] md:text-[6%] font-bold text-white mb-[4%] text-center">
        Visit Us at Our Location
      </h1>

      {/* Google Map Embed */}
      <div className="w-full max-w-5xl h-[30%] sm:h-[20%] md:h-[25%] lg:h-[40%] 2xl:h-[50%] relative">
        <iframe
          title="293 Second Floor Westend Marg New Delhi Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56100.52126737743!2d77.10618380563224!3d28.501144738348955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce18c2dd89009%3A0x3a82ba0b06437949!2s275%20Empowerers%20Coworking%20City%20Westend%20Marg!5e0!3m2!1sen!2sin!4v1733742790042!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="rounded-lg shadow-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
