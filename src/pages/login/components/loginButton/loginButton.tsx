import React, { useCallback } from "react";
import { useNavigate } from "react-router";

interface Props {
  src: string;
  alt: string;
  btnText: string;
}

const LoginButton: React.FC<Props> = ({ src, alt, btnText }) => {
  const navigate = useNavigate();
  const handleNavigateToDashboard = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);
  return (
    <div
      className="w-11/12 lg:w-2/3 lg:mx-auto rounded-lg border border-gray-200 py-4 flex justify-center items-center gap-4 mb-4 hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer"
      onClick={handleNavigateToDashboard}
    >
      <img src={src} alt={alt} className="w-6 h-6" />
      <p className="text-gray-800 font-medium text-base">{btnText}</p>
    </div>
  );
};

export default LoginButton;
