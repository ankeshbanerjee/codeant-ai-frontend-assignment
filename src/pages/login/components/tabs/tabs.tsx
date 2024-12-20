import React, { useImperativeHandle, useState } from "react";

interface Props {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Tabs: React.FC<Props> = ({ currentIndex, setCurrentIndex }) => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-md flex w-full mt-5 mb-9">
      <div
        onClick={() => setCurrentIndex(0)}
        className={`flex-1 flex rounded-lg justify-center items-center cursor-pointer ${
          currentIndex === 0 ? "bg-blue-500" : ""
        } py-4`}
      >
        <p
          className={`text-lg font-semibold ${
            currentIndex === 0 ? "text-white" : "text-gray-700"
          }`}
        >
          SAAS
        </p>
      </div>
      <div
        onClick={() => setCurrentIndex(1)}
        className={`flex-1 flex rounded-md justify-center items-center cursor-pointer ${
          currentIndex === 1 ? "bg-blue-500" : ""
        } py-4`}
      >
        <p
          className={`text-lg font-semibold ${
            currentIndex === 1 ? "text-white" : "text-gray-700"
          }`}
        >
          Self Hosted
        </p>
      </div>
    </div>
  );
};

export default Tabs;
