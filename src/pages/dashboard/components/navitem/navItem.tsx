import React from "react";

interface Props {
  selected?: boolean;
  icon: React.ReactNode;
  title: string;
  onSelect?: () => void;
}

const NavItem: React.FC<Props> = ({
  selected = false,
  icon,
  title,
  onSelect = () => {},
}) => {
  return (
    <div
      className={`flex items-center justify-start gap-3 px-4 py-2 rounded-lg ${
        selected ? "bg-blue-500" : ""
      } cursor-pointer`}
      onClick={() => onSelect()}
    >
      {icon}
      <p
        className={`text-sm font-medium ${
          selected ? "text-white" : "text-gray-700"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default NavItem;
