import React from 'react';

const Location = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#001025]">
      <h1 className="text-3xl font-semibold text-[#fff]  mb-6">Our Location</h1>
      <div className="w-full max-w-4xl mb-6">
        <img 
          src="https://via.placeholder.com/800x400" 
          alt="Map location" 
          className="w-full rounded-lg shadow-md" 
        />
      </div>
      <p className="text-base text-[#fff] max-w-2xl text-center leading-relaxed mb-6">
        We are located at 1234 Example St, City, Country. Feel free to visit us or contact us for more information.
      </p>
      <div className="text-center">
        <a href="mailto:contact@example.com" className="text-lg text-blue-600 hover:underline">
          contact@example.com
        </a>
      </div>
    </div>
  );
}

export default Location;
