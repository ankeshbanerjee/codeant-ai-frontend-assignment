import React, { useCallback, useState } from "react";
import { TitleBar } from "../../../../components/titlebar";
import { Tabs } from "../tabs";
import { ImageAssets } from "../../../../assets";
import { LoginButton } from "../loginButton";
import { Divider } from "../../../../components/divider";

const LoginComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-gray-50 py-4 rounded-xl border border-gray-200 flex flex-col items-center w-full min-h-[80%] lg:min-h-[70%] mx-4">
      <TitleBar />
      <p className="text-gray-800 font-semibold text-2xl">
        Welcome to CodeAnt AI
      </p>
      <div className="w-full px-4">
        <Tabs currentIndex={activeTab} setCurrentIndex={setActiveTab} />
      </div>
      <Divider />
      <div className="w-full h-6" />
      {activeTab === 0 ? (
        <>
          <LoginButton
            src={ImageAssets.GithubLogo}
            alt="github_logo"
            btnText="Sign in with Github"
          />
          <LoginButton
            src={ImageAssets.BitbucketLogo}
            alt="bitbucket_logo"
            btnText="Sign in with Bitbucket"
          />
          <LoginButton
            src={ImageAssets.Azure}
            alt="azure_devops_logo"
            btnText="Sign in with Azure DevOps"
          />
          <LoginButton
            src={ImageAssets.Gitlab}
            alt="gitlab_logo"
            btnText="Sign in with Gitlab"
          />
        </>
      ) : (
        <>
          <LoginButton
            src={ImageAssets.Gitlab}
            alt="gitlab_logo"
            btnText="Self Hosted Gitlab"
          />
          <LoginButton
            src={ImageAssets.Sso}
            alt="sso_logo"
            btnText="Sign in with SSO"
          />
        </>
      )}
    </div>
  );
};

export default LoginComponent;
