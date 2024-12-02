import React from "react";
import aboutImage from "/public/about/about.png";
import DirectionalIndicator from "../DirectionalIndicator/DirectionalIndicator";

const AboutUs = () => {
      return (
            <>
                  <div className="bg-[#001025] pt-[150px] ">
                        <section className="flex flex-col md:flex-row items-start justify-between py-8 bg-[#001025] text-white bg-cover bg-center" style={{ backgroundImage: "url('/public/about/bg.png')" }}>
                              <div className=" lg:w-[696px] lg:h-[728px] md:w-1/2 icons__aboutt">
                                    <img src={aboutImage} alt="Meeting" className="w-full h-full object-contain shadow-lg" />
                              </div>
                              <div className="md:w-1/2 2xl:mt-12   about__conttts">
                                    <h2 className="mb-10">ABOUT US</h2>
                                    <div className="2xl:mb-20 mb-10 2xl:pr-[20px]">
                                          <p> Sandhée derives its meaning from the Hindi word <strong>संधि</strong>.</p>
                                          <p> It signifies an accord between countries or groups of people.</p>
                                          <p> Sandhée is basically a formal agreement between two or more people, organizations, or governments.</p>

                                    </div>
                                    <div className="2xl:mb-10 md:mb-5 ">
                                          <p>
                                                Sandhée aims to revolutionize dispute resolution by providing a timely, affordable, and fair platform.
                                                They encourage businesses to settle disagreements efficiently.
                                                Sandhée aspires to be India’s leading dispute resolution center, recognized globally for its reliability,
                                                transparency, advanced technology, streamlined processes, excellent infrastructure, and top-notch administrative support.
                                          </p>
                                    </div>

                                    <div>
                                          <DirectionalIndicator />
                                    </div>
                              </div>
                        </section>
                  </div>
            </>
      );
};

export default AboutUs;