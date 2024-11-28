import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-[#0E1926] overflow-hidden text-white py-10 sm:px-6 lg:px-8 siddd__bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex flex-col items-center justify-center mb-6">
                    <div className="w-full sm:w-auto">
                        <h1 className="text-[96px] leading-[144px]  font-[700] text-[#FFFFFF]">
                            ABOUT <span className="text-[#CB935D] text-[96px] leading-[144px]  font-[700]">US</span>
                        </h1>
                    </div>
                    <div className="mt-4 z-10">
                        <p className="mb-4 text-[30px] font-[400] leading-[60px] tracking-[-2%] sm:text-left">
                            Sandhee derives its meaning from the Hindi word संधि.
                        </p>
                        <p className="mb-4 text-[30px] font-[400] leading-[60px] tracking-[-2%] sm:text-left">
                            It signifies an Accord between countries or groups of people. Sandhee is basically a formal agreement between two or more people, organizations, or governments.
                        </p>
                        <p className="text-[30px] font-[400] leading-[60px] tracking-[-2%] sm:text-left">
                            Sandhee aims to revolutionize dispute resolution by providing a timely, affordable, and fair platform; they encourage businesses to settle disagreements efficiently.
                            Sandhee aspires to be India's leading dispute resolution center, recognized globally for its reliability, transparency, advanced technology, streamlined processes, excellent infrastructure, and top-notch administrative support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
