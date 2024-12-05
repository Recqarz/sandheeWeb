import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { rules } from "./Rules"; // Ensure your data is properly imported

const ArbitrationRules = () => {
  return (
    <div className="px-20 py-20 w-screen mx-auto">
      <h1 className="text-[28px] font-bold text-center mb-20 text-gray-800">
        Arbitration Rules of ODR
      </h1>
      {rules?.map((rule, index) => (
        <Dropdown
          key={index}
          title={rule.title}
          item={rule.item}
          content={rule.content}
          item1={rule.item1}
          content1={rule.content1}
          item2={rule.item2}
        />
      ))}
    </div>
  );
};

const Dropdown = ({ title, item, content, item1, content1, item2 }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Safely handle the data arrays, defaulting to empty arrays if not provided
  const safeItem = Array.isArray(item) ? item : [item];
  const safeContent = content || [];
  const safeItem1 = Array.isArray(item1) ? item1 : [item1];
  const safeContent1 = content1 || [];
  const safeItem2 = Array.isArray(item2) ? item2 : [item2];

  return (
    <div className="border mb-3 rounded-md shadow-sm">
      <div
        className="flex justify-between items-center px-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-[38px] font-medium text-gray-700">{title}</h2>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div className="px-4 bg-white text-gray-600">
          {/* Render main item (item) */}
          {safeItem.map((subItem, index) => (
            <p key={index} className="font-[600] leading-10 mb-10 py-0 text-[18px] text-[#000]">
              {subItem}
            </p>
          ))}

          {/* Render content (subpoints under item) */}
          {safeContent.length > 0 && (
            <ol className="roman-numerals px-10 py-0 pb-10 space-y-2">
              {safeContent.map((text, index) => (
                <li key={index} className="font-[400] mb-5 px-5 text-[16px] text-[#000]">
                  {text}
                </li>
              ))}
            </ol>
          )}

          {/* Render second item (item1) */}
          {safeItem1.length > 0 && (
            <div className="mt-5">
              {safeItem1.map((subItem, index) => (
                <p key={index} className="font-[600] leading-10 mb-10 py-0 text-[18px] text-[#000]">
                  {subItem}
                </p>
              ))}
            </div>
          )}

          {/* Render second content (content1) under item1 */}
          {safeContent1.length > 0 && (
            <ol className="roman-numerals px-10 py-0 pb-10 space-y-2">
              {safeContent1.map((text, index) => (
                <li key={index} className="font-[400] mb-5 px-5 text-[16px] text-[#000]">
                  {text}
                </li>
              ))}
            </ol>
          )}

          {/* Render third item (item2) */}
          {safeItem2.length > 0 && (
            <div className="mt-5">
              {safeItem2.map((subItem, index) => (
                <p key={index} className="font-[600] leading-10 mb-10 py-0 text-[18px] text-[#000]">
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
