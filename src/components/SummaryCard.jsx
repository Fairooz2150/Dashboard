import React from "react";
import { FaUserTie } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { ImSpoonKnife } from "react-icons/im";

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 w-full bg-white rounded-xl">
      
      <div className="p-4 md:p-6 text-center sm:text-left flex items-center space-x-3 md:space-x-4">
        <div className="bg-blue-800 p-2 md:p-3 rounded-full flex items-center justify-center">
          <FaUserTie className="text-white text-xl md:text-2xl" />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm md:text-base">Franchisee</h2>
          <p className="font-bold text-blue-900 text-xl md:text-2xl">932</p>
        </div>
      </div>

      <div className="p-4 md:p-6 text-center sm:text-left flex items-center space-x-3 md:space-x-4">
        <div className="bg-orange-500 p-2 md:p-3 rounded-full flex items-center justify-center">
          <RiUser2Fill className="text-white text-xl md:text-2xl" />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm md:text-base">Dealers</h2>
          <p className="font-bold text-blue-900 text-xl md:text-2xl">754</p>
        </div>
      </div>

      <div className="p-4 md:p-6 text-center sm:text-left flex items-center space-x-3 md:space-x-4">
        <div className="bg-yellow-500 p-2 md:p-3 rounded-full flex items-center justify-center">
          <SlCalender className="text-white text-xl md:text-2xl" />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm md:text-base">Service Providers</h2>
          <p className="font-bold text-blue-900 text-xl md:text-2xl">40</p>
        </div>
      </div>

      <div className="p-4 md:p-6 text-center sm:text-left flex items-center space-x-3 md:space-x-4">
        <div className="bg-blue-900 p-2 md:p-3 rounded-full flex items-center justify-center">
          <ImSpoonKnife className="text-white text-xl md:text-2xl" />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm md:text-base">Users</h2>
          <p className="font-bold text-blue-900 text-xl md:text-2xl">32k</p>
        </div>
      </div>

    </div>
  );
};

export default SummaryCards;
