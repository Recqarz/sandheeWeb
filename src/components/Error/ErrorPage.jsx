import React, { useState } from 'react';
import ErrorImage from '/public/error1.avif'; // Ensure the correct path to the image

const ErrorPage = () => {
  const [showFullPage, setShowFullPage] = useState(false);

  const handleAreaClick = () => {
    setShowFullPage(true); // Show the button when the background or image is clicked
  };

  return (
    <div 
      className="flex items-center justify-center h-screen" 
      onClick={handleAreaClick}  // This handles clicks on the background
    >
      <div 
        className="w-[1400px] h-[800px] text-center flex items-center justify-center"
      >
        {/* Conditionally render content based on showFullPage state */}
        {!showFullPage ? (
          <img
            src={ErrorImage}
            alt="Error"
            className="w-full h-full mx-auto object-contain cursor-pointer"
            onClick={handleAreaClick}  // This makes the image clickable too
          />
        ) : (
          <>
            {/* Show the button after clicking anywhere */}
            <button
              onClick={() => window.location.href = '/'}
              className="2xl:w-[300px] 2xl:h-[100px] text-[24px] font-[600] bg-[#BF9874] text-[#000] py-2 px-6 rounded-[17px] transition duration-200"
            >
              Go to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
