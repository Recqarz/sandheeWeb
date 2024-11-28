// src/ServiceCards.jsx  
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const services = [
      {
            title: 'Arbitration',
            description: 'Learn more',
            icon: '/public/m1.png', // Replace with your actual icon URL  
            bgColor: '#000',  // Example unique color
      },
      {
            title: 'Mediation',
            description: 'Learn more',
            icon: '/public/m2.png',
            bgColor: '#0E1926',  // Example unique color
      },
      {
            title: 'Conciliation',
            description: 'Learn more',
            icon: '/public/m2.png',
            bgColor: '#0E1926',  // Example unique color
      },
];

const ServiceCards = () => {
      return (
            <div className="bg-white p-10 bg-iconss">
                  <h2 className="text-[96px] leading-[144px] font-[400] text-black text-center mb-8">
                        <span className="text-[96px] text-[#CB935D] leading-[144px]  font-[400] text-center">Our</span> Services
                  </h2>
                  <div className="grid grid-cols-1 py-[100px] sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                              <div
                                    key={index}
                                    className="text-white rounded-lg p-5 flex justify-between items-center z-10"
                                    style={{ backgroundColor: service.bgColor }}  // Dynamically applying bgColor
                              >
                                    <div className='flex justify-between items-baseline gap-[100px] flex-col'>
                                          <h3 className="text-xl w-[208px] text-center h-[45px] rounded-[7px] bg-[#CB935D] font-[500] text-[30px] leading-[45px]">
                                                {service.title}
                                          </h3>
                                          <a href="#" className="text-[#fff] text-[20px] leading-[28px] font-[700] flex items-center underline">
                                                <span className="bg-[#CB935D] p-2 rounded-full flex items-center justify-center mr-2">
                                                      <FiArrowUpRight className="text-white " />
                                                </span>
                                                Learn more
                                          </a>
                                    </div>
                                    <img src={service.icon} alt={service.title} className="w-[297px] h-[198px] mb-4 object-contain" />
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default ServiceCards;
