import React from 'react';
const Arbitration = () => {
      return (
            <>
                  <div className="bg-[#0E1926] 2xl:w-screen pt-[150px] overflow-x-hidden flex justify-center items-center">
                        <div className="max-w-[1782px] h-[1489px] arbirato_bg overflow-x-hidden  ">
                              <div className="w-full h-full bg-[rgba(249,247,245,0.5)] bg-arbittt py-8 px-20 overflow-x-hidden">
                                    <div className="flex justify-between items-center mt-0 2xl:mb-16 2xl:mt-10">
                                          <button className="btnAtmtct">ARBITRATION</button>
                                    </div>

                                    <div className="mt-10">
                                          <p className="arbtration-text mb-5">
                                                Arbitration is a private, consensual process where parties resolve disputes outside of traditional courts. It involves appointing one or more
                                                neutral arbitrators who hold hearings, consider evidence, and issue a binding decision called an arbitral award. This process is often
                                                preferred for its flexibility, confidentiality, and potential for faster resolution compared to litigation. Arbitration is commonly used in
                                                commercial, construction, and international trade disputes.
                                          </p>
                                    </div>

                                    <div className="mb-5">
                                          <h3 className="arbtration-heading mb-5">1. Institutional Arbitration:</h3>
                                          <p className="arbtration-text mb-5">
                                                Conducted under the rules of an established arbitral institution like the International Chamber of Commerce (ICC), the American Arbitration
                                                Association (AAA), or the Singapore International Arbitration Centre (SIAC).
                                          </p>

                                          <div className="ml-5">
                                                <div className="mt-5 mb-5">
                                                      <ul className="list-disc list-inside space-y-4 mb-5">
                                                            <li className="arbtration-text">
                                                                  These institutions provide a structured framework for the arbitration process, including rules for appointing arbitrators, conducting <br />
                                                                  <span className='arbtration-text pl-[31px]  '>hearings, and issuing awards.</span>
                                                            </li>
                                                            <li className="arbtration-text">
                                                                  Offers benefits like efficiency, neutrality, and enforceability of awards.
                                                            </li>
                                                      </ul>

                                                      <h3 className="arbtration-heading mb-5">2. Ad Hoc Arbitration:</h3>
                                                      <ul className="list-disc list-inside space-y-4">
                                                            <li className="arbtration-text">Parties agree to arbitrate without involving a formal institution.</li>
                                                            <li className="arbtration-text">They create their own rules and procedures for the arbitration process.</li>
                                                            <li className="arbtration-text">
                                                                  Provides flexibility but requires careful planning and attention to detail to ensure a fair and efficient process.
                                                            </li>
                                                      </ul>
                                                </div>

                                                <div>
                                                      <h3 className="arbtration-heading mb-5">Other Types of Arbitration:</h3>
                                                </div>
                                                <div>
                                                      <h3 className="arbtration-heading mb-5">3. Commercial Arbitration</h3>
                                                      <ul className="list-disc list-inside space-y-4">
                                                            <li className="arbtration-text mb-5">Resolves disputes between businesses.</li>
                                                      </ul>
                                                </div>
                                                <div>
                                                      <h3 className="arbtration-heading mb-5">4. Investor-State Arbitration</h3>
                                                      <ul className="list-disc list-inside space-y-4">
                                                            <li className="arbtration-text mb-5">Resolves disputes between investors and states.</li>
                                                      </ul>
                                                </div>
                                                <div>
                                                      <h3 className="arbtration-heading mb-5">5. Sports Arbitration</h3>
                                                      <ul className="list-disc list-inside space-y-4">
                                                            <li className="arbtration-text mb-5">Resolves disputes in the sports industry.</li>
                                                      </ul>
                                                </div>
                                                <div>
                                                      <h3 className="arbtration-heading mb-5">6. Construction Arbitration</h3>
                                                      <ul className="list-disc list-inside space-y-4 mb-5">
                                                            <li className="arbtration-text">
                                                                  Resolves disputes in construction projects. The choice between institutional and ad hoc arbitration depends on various factors,
                                                                  including the complexity of the dispute, the desired level of formality, and the parties' preferences.
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Arbitration;
