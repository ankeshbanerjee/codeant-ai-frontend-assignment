import React from "react";
import NavBar from "./components/navbar/navBar";
import { CustomButton } from "../../components/customButton";
import { FiRefreshCw } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { SearchBar } from "./components/searchbar";
import { Divider } from "../../components/divider";
import repositories from "../../data/repositories";
import RepoItem from "./components/repoItem/repoItem";
import { NavItem } from "./components/navitem";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { TopNavBar } from "./components/topNavBar";
import { TitleBar } from "../../components/titlebar";
import { Link } from "react-router";

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-gray-100 w-screen grid grid-cols-6 lg:gap-1">
      {/* left column */}
      <div className="hidden lg:col-span-1 p-4 border-r border-gray-300 lg:flex lg:flex-col">
        <TitleBar />
        <NavBar />
        <div className="flex-1" />
        <NavItem icon={<BsTelephone />} title="Support" />
        <Link to="/login">
          <NavItem icon={<MdOutlineLogout />} title="Logout" />
        </Link>
      </div>
      {/* right column */}
      <div className="bg-gray-50 col-span-6 lg:col-span-5 lg:rounded-md lg:m-2 lg:border lg:border-gray-300 h-screen overflow-y-scroll">
        {/* top navbar */}
        <TopNavBar />
        <div>
          <div className="flex justify-between items-center p-4 flex-wrap gap-3">
            <div>
              <p className="text-xl font-semibold mb-1">Repositories</p>
              <p className="text-xs font-light text-gray-700">
                33 total repositories
              </p>
            </div>
            <div className="flex gap-2">
              <CustomButton
                mode="outlined"
                icon={<FiRefreshCw />}
                text={"Refresh all"}
              />
              <CustomButton
                mode="filled"
                icon={<IoAdd />}
                text={"Add repository"}
              />
            </div>
          </div>
          <div className="px-4 mb-4">
            <SearchBar />
          </div>
          <Divider />
          {repositories.map((repo, index) => {
            return (
              <div key={index}>
                <RepoItem details={repo} />
                <Divider />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
