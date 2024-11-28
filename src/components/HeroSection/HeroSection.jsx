import React from 'react';
import Header from '../Header/Header';

const HeroSection = () => {
      return (
            <div
                  className="flex items-center flex-col justify-center w-full h-screen bg-cover bg-center"
                  style={{
                        backgroundImage: "url('/bg-1.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                  }}
            >
                  {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

                  {/* Header on top of the background */}
                  <Header />

                  <div className=" container relative text-left top-[80px] z-10">
                        <h1 className="text-[50px] text-left    leading-[75px]   font-[500] mb-4 text-[#FFFFFF]">
                              A state of an art ODR <br />
                              (Online Dispute Resolution) platform <br />
                              empowered by cutting-edge <br /> technology
                        </h1>
                        <p className="mb-6 text-left text-[23px] leading-[34.5px]  text-[#FFFFFF]">
                              Businesses using Sandhee save significant time and money on legal cases, <br />
                              while also avoiding harmful adversarial processes that can damage <br />
                              customer relationships.
                        </p>
                        <button className="bg-[#CB935D] w-[231px] h-[60px] text-white font-[400] text-[24px] leading-[36px]">
                              Enroll Now
                        </button>
                  </div>
            </div>
      );
};

export default HeroSection;
