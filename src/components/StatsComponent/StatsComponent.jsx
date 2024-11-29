import React from 'react';

const StatsComponent = () => {
      const stats = [
            { number: 200, label: 'Employees' },
            { number: 340, label: 'Programs' },
            { number: 320, label: 'Cases' },
            { number: 192, label: 'Donations' },
      ];

      return (
            <div className="w-full lg:h-[183px] flex flex-wrap lg:flex-nowrap justify-evenly items-center bg-[#1B314E] px-4 py-6 lg:py-0">
                  <div className="flex flex-wrap justify-center lg:justify-evenly gap-x-[5.1rem]  items-center">
                        {stats.map((stat, index) => (
                              <div
                                    key={index}
                                    className="relative flex flex-col lg:flex-row justify-center items-center gap-[6rem] lg:gap-16 stats--bg"
                              >
                                    <div className="text-[36px] lg:text-[55px] leading-[50px] lg:leading-[82.5px] text-[#BF9874] font-[400]">
                                          {stat.number}
                                    </div>
                                    <div className="text-center lg:text-left">
                                          <p className="text-[18px] lg:text-[29px] text-[#FFFFFF] leading-[24px] lg:leading-[43.5px] font-[300]">
                                                {stat.label}
                                          </p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>

      );
};

export default StatsComponent;