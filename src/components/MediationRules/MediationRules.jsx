import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { meRules } from "../MediationRules/MeRules";
import { mediators } from "../MediationRules/Mediators"

const MediationRules = () => {
      return (
            <div className="w-screen mx-auto p-5 sm:p-10 lg:p-20">
                  <h1 className="text-xl sm:text-2xl mt-44 xl:mt-mt-32 lg:text-[28px] font-bold text-center mb-10 lg:mb-20 text-gray-800">
                        Arbitration Rules of ODR
                  </h1>

                  {/* Regular Arbitration Rules */}
                  {meRules?.map((rule, index) => (
                        <Dropdown key={index} {...rule} />
                  ))}

                  {/* Emergency Rules Section */}
                  <h2 className="text-xl sm:text-2xl mt-20 lg:text-[28px] font-bold text-center mb-8 text-gray-800">
                        Emergency Interim Measures Rules
                  </h2>
                  {mediators?.map((rule, index) => (
                        <Dropdown key={index} title={rule.rulesTitle} item={rule.rulesItem} content={rule.rulesContent} />
                  ))}
            </div>
      );
};

const Dropdown = ({ title, items = [], content = [], item1 = [], content1 = [], item2 = [], content2 = [], item3 = [] }) => {
      const [isOpen, setIsOpen] = useState(false);

      // A helper to render items and content in the dropdown
      const renderContent = (itemList, contentList) => {
            return (
                  <>
                        {itemList.length > 0 && itemList.map((subItem, index) => (
                              <p key={index} className="font-normal lg:font-[500] leading-6 mb-4 text-[14px] lg:text-lg text-[#000]">
                                    {subItem}
                              </p>
                        ))}
                        {contentList.length > 0 && (
                              <ol className="roman-numerals pl-6 sm:pl-10">
                                    {contentList.map((text, index) => (
                                          <li key={index} className="font-normal mb-2 text-[12px] lg:text-base text-[#000]">
                                                {text}
                                          </li>
                                    ))}
                              </ol>
                        )}
                  </>
            );
      };

      return (
            <div className="border mb-3 rounded-md shadow-sm">
                  <div
                        className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200"
                        onClick={() => setIsOpen(!isOpen)}
                  >
                        <h2 className="text-lg sm:text-xl lg:text-[28px] font-[400] text-gray-700">
                              {title}
                        </h2>
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {isOpen && (
                        <div className="px-4 py-3 bg-white text-gray-600">
                              {/* Render content dynamically for each section */}
                              {renderContent(items, content)}
                              {renderContent(item1, content1)}
                              {renderContent(item2, content2)}
                              {renderContent(item3, [])} {/* Handle item3 without content */}
                        </div>
                  )}
            </div>
      );
};

export default MediationRules;
