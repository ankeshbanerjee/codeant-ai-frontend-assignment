import React from "react";
import { Repository } from "../../../../data/repositories";
import { GoDatabase, GoDotFill } from "react-icons/go";

interface Props {
  details: Repository;
}

const RepoItem: React.FC<Props> = ({ details }) => {
  const { name, sizeKB, technology, updatedDaysAgo, visibility } = details;
  return (
    <div className="hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer p-6">
      <div className="flex items-center gap-4">
        <p className="text-base">{name}</p>
        <div className="bg-blue-100 flex justify-center items-center rounded-full border border-blue-500 px-1.5 py-0">
          <p className="text-[10px] text-blue-500">{visibility}</p>
        </div>
      </div>
      <div className="flex justify-start items-center gap-6  sm:gap-10 mt-2.5">
        <div className="flex items-center gap-1">
          <p className="text-xs text-gray-500">{technology}</p>
          <GoDotFill color="#1570EF" />
        </div>
        <div className="flex items-center gap-1">
          <GoDatabase color="#181D27" size={12} />
          <p className="text-xs text-gray-500">{sizeKB}</p>
        </div>
        <p className="text-xs text-gray-500">{`Updated ${updatedDaysAgo} days ago`}</p>
      </div>
    </div>
  );
};

export default RepoItem;
