// src/ArbitrationCard.jsx  
import React from 'react';

const ArbitrationCard = () => {
      return (
            <div className="bg-[#1b1c2e] bgg_aa overflow-hidden flex flex-col gap-[70px] justify-center items-center text-white p-8 relative">
                  <div className='bgg__Arbtraction w-[1614px] h-[977px] flex justify-center items-center  '>
                        <div className='bg-[#F9F7F5] w-[1377px] h-[858px] opacity-80'>
                              <div className="flex justify-center items-center  py-10">
                                    <button className="w-[600px] h-[155px] rounded-[45px] text-center text-[64px] font-medium bg-[#CB935D] text-[#191A23] border-b-2 border-black shadow-lg opacity-[initial]">
                                    ARBITRATION 
                                    </button>


                              </div>
                              <div className="mb-4 px-10">
                                    <p className='font-medium text-[32px] text-[#000000]'>
                                          Arbitration is a private, consensual process where parties resolve disputes outside of traditional courts. It involves appointing one or more neutral arbitrators who hold hearings, consider evidence, and issue a binding decision called an arbitral award. This process is often preferred for its flexibility, confidentiality, and potential for faster resolution compared to litigation. Arbitration is commonly used in commercial, construction, and international trade disputes.
                                    </p>
                              </div>
                        </div>
                  </div>
                  <div className='bgg__MEDIATION w-[1614px] h-[977px] flex justify-center items-center  '>
                        <div className='bg-[#F9F7F5] w-[1377px] h-[858px] opacity-80'>
                              <div className="flex justify-center items-center  py-10">
                                    <button className="w-[600px] h-[155px] rounded-[45px] text-center text-[64px] font-medium bg-[#CB935D] text-[#191A23] border-b-2 border-black shadow-lg opacity-[initial] ">
                                    MEDIATION
                                    </button>

                              </div>
                              <div className="mb-4 px-10">
                                    <p className='font-medium text-[32px] text-[#000000]'>
                                          Mediation is a voluntary, confidential process where a neutral third party, the
                                          mediator, facilitates communication and negotiation between disputing parties.
                                          The mediator does not impose a solution but helps parties reach a mutually
                                          agreeable settlement by exploring interests, options, and potential compromises.
                                          Mediation is often faster and less expensive than litigation, and it can preserve
                                          relationships by fostering understanding and cooperation between the parties.
                                    </p>
                              </div>
                        </div>
                  </div>
                  <div className='bgg__CONCILIATION w-[1614px] h-[977px] flex justify-center items-center  '>
                        <div className='bg-[#F9F7F5] w-[1377px] h-[858px] opacity-80'>
                              <div className="flex justify-center items-center  py-10">
                                    <button className="w-[600px] h-[155px] rounded-[45px] text-center text-[64px] font-medium bg-[#CB935D] text-[#191A23] border-b-2 border-black shadow-lg opacity-[initial]">
                                    CONCILIATION 
                                    </button>

                              </div>
                              <div className="mb-4 px-10">
                                    <p className='font-medium text-[32px] text-[#000000]'>

                                          Conciliation is a voluntary, confidential process where a neutral third party, the
                                          conciliator, assists disputing parties in reaching a mutually agreeable settlement.
                                          Unlike mediation, the conciliator may suggest solutions or propose terms of
                                          settlement, but the final decision-making power rests with the parties themselves.
                                          Conciliation is often used in labour disputes, family law matters, and commercial
                                          disagreements.
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default ArbitrationCard;