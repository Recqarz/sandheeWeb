// src/ExpertiseSection.jsx  
import React from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

const expertiseData = [
      {
            title: 'Arbitration',
            imageUrl: '/expertise/e1.png',  // Use relative path without 'public' for images
            Url: "/arbitration/whatIsArbiration"
      },
      {
            title: 'Meditation',
            imageUrl: '/expertise/e2.png',
            Url: "/mediation"
      },
      {
            title: 'Conciliation',
            imageUrl: '/expertise/e3.png',
            Url: "/Conciliation"
      },
];

const ExpertiseSection = () => {
      return (
            <section className="container mx-auto text-center">
                  <h2 className="expertise mt-20">FIELDS OF EXPERTISE</h2>
                  <p className="vision-textt">VISION MAKES US WHO WE ARE</p>
                  <div className="flex flex-wrap justify-center gap-6">
                        {expertiseData.map((expertise, index) => (
                              <div key={index} className="2xl:w-[454px] 2xl:h-[337px]">
                                    <img
                                          src={expertise.imageUrl}  // Image source corrected
                                          alt={expertise.title}
                                          className="w-full h-full object-contain"
                                    />
                                    <div className="flex justify-center items-start flex-col">
                                          <h3 className="exp-title flex">{expertise.title}</h3>
                                          <a href={expertise.Url} className="learn-text">  {/* Corrected href */}
                                                LEARN MORE
                                                <LuArrowUpRight size={22} className="text-[#BF9874] ml-1" />
                                          </a>
                                    </div>
                              </div>
                        ))}
                  </div>
            </section>
      );
};

export default ExpertiseSection;
