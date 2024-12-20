import React from "react";
import { LoginComponent } from "./components/loginComponent";
import { CodeAntLogoBig, LoginScreenVisual } from "../../assets";

const LoginPage: React.FC = () => {
  return (
    <div className="bg-gray-100 w-screen h-screen grid grid-cols-2">
      <div className="hidden lg:flex relative lg:col-span-1 bg-gray-50 border-r border-gray-200 justify-center items-center">
        <LoginScreenVisual />
        <div className="bg-transparent absolute bottom-0 left-0">
          <CodeAntLogoBig />
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1 justify-center items-center flex mb-8">
        <LoginComponent />
        <p className="absolute bottom-16 lg:bottom-28 self-center text-sm">
          By signing up you agree to the <strong>Privacy Policy</strong>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
