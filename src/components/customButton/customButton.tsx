import React from "react";

interface Props {
  mode: "outlined" | "filled";
  icon: React.ReactNode;
  text: string;
}

const CustomButton: React.FC<Props> = ({ mode, icon, text }) => {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer ${
        mode === "outlined"
          ? "border border-gray-500"
          : "bg-blue-500 text-white"
      }`}
    >
      {icon}
      <p
        className={`text-xs ${
          mode === "outlined" ? "text-gray-700" : "text-white"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default CustomButton;
