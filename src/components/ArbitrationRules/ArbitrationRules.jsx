import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { rules } from "./Rules";
import { emergencyRules } from "./EmergencyRules";

const ArbitrationRules = () => {
  return (
    <div className="w-screen  mx-auto p-5 sm:p-10 lg:p-20">
      <h1 className="text-xl  sm:text-2xl mt-44 xl:mt-mt-32 lg:text-[28px] font-bold text-center mb-10 lg:mb-20 text-gray-800">
        Arbitration Rules of ODR
      </h1>

      {/* Regular Arbitration Rules */}
      {rules?.map((rule, index) => (
        <Dropdown
          key={index}
          title={rule.title}
          item={rule.item}
          content={rule.content}
          item1={rule.item1}
          content1={rule.content1}
          item2={rule.item2}
          content2={rule.content2}
          item3={rule.item3}
        />
      ))}

      {/* Emergency Rules Section */}
      <h2 className="text-xl sm:text-2xl mt-20 lg:text-[28px] font-bold text-center mb-8 text-gray-800">
        Emergency Interim Measures Rules
      </h2>
      {emergencyRules?.map((rule, index) => (
        <Dropdown
          key={index}
          title={rule.rulesTitle}
          item={rule.rulesItem}
          content={rule.rulesContent}
        />
      ))}

    </div>
  );
};

const Dropdown = ({ title, item, content, item1, content1, item2, content2, item3 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const safeItem = Array.isArray(item) ? item : [item];
  const safeContent = content || [];
  const safeItem1 = Array.isArray(item1) ? item1 : [item1];
  const safeContent1 = content1 || [];
  const safeItem2 = Array.isArray(item2) ? item2 : [item2];
  const safeContent2 = content2 || [];
  const safeItem3 = Array.isArray(item3) ? item3 : [item3];

  return (
    <div className="border mb-3 rounded-md shadow-sm border-l-2   border-l-[#bf9874] ">
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
          {/* Render main item (item) */}
          {safeItem.map((subItem, index) => (
            <p key={index} className="font-normal lg:font-[500] leading-6 mb-4 text-[14px] lg:text-lg text-[#000]">
              {subItem}
            </p>
          ))}

          {/* Render content (subpoints under item) */}
          {safeContent.length > 0 && (
            <ol className="roman-numerals pl-6 sm:pl-10 ">
              {safeContent.map((text, index) => (
                <li key={index} className="font-normal mb-2 text-[12px] lg:text-base  text-[#000]">
                  {text}
                </li>
              ))}
            </ol>
          )}

          {/* Render second item (item1) */}
          {safeItem1.length > 0 && (
            <div className="mt-4">
              {safeItem1.map((subItem, index) => (
                <p key={index} className=" font-normal lg:font-[500] leading-6 mb-4 text-base sm:text-lg text-[#000]">
                  {subItem}
                </p>
              ))}
            </div>
          )}

          {/* Render second content (content1) under item1 */}
          {safeContent1.length > 0 && (
            <ol className="roman-numerals bg-slate-50 pl-6 sm:pl-10">
              {safeContent1.map((text, index) => (
                <li key={index} className="font-normal mb-2 text-[12px] lg:text-base text-[#000]">
                  {text}
                </li>
              ))}
            </ol>
          )}

          {/* Render third item (item2) */}
          {safeItem2.length > 0 && (
            <div className="mt-4">
              {safeItem2.map((subItem, index) => (
                <p key={index} className="font-[500] leading-6 mb-4 text-base sm:text-lg text-[#000]">
                  {subItem}
                </p>
              ))}
            </div>
          )}

          {/* Render third content (content2) */}
          {safeContent2.length > 0 && (
            <ol className="roman-numerals pl-6 sm:pl-10 ">
              {safeContent2.map((text, index) => (
                <li key={index} className="font-normal mb-4  text-[12px] lg:text-base text-[#000]">
                  {text}
                </li>
              ))}
            </ol>
          )}

          {/* Render fourth item (item3) */}
          {safeItem3.length > 0 && (
            <div className="mt-4">
              {safeItem3.map((subItem, index) => (
                <p key={index} className="font-[500] leading-6 mb-4 text-base sm:text-lg text-[#000]">
                  {subItem}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ArbitrationRules;
