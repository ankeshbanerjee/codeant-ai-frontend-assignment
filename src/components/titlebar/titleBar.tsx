import React from "react";
import { CodeAntLogo } from "../../assets";

const TitleBar: React.FC = () => {
  return (
    <div className="flex gap-2 items-center p-4">
      <CodeAntLogo />
      <p className="md:text-lg lg:text-xl font-extralight">CodeAnt AI</p>
    </div>
  );
};

export default TitleBar;
