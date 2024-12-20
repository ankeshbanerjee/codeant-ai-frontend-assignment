import React, { useState } from "react";
import { NavItem } from "../navitem";
import { HiOutlineHome } from "react-icons/hi";
import { CiCloudOn } from "react-icons/ci";
import { LuBookText } from "react-icons/lu";
import { IoCodeSlashOutline, IoSettingsOutline } from "react-icons/io5";
import { DropDown } from "../dropdown";

const NavBar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>(
    "UtkarshDhairyaPawar"
  );
  return (
    <div className="mt-3">
      <DropDown
        options={["UtkarshDhairyaPanwar", "option 2", "option 3"]}
        selectedOption={selectedOption}
        onOptionSelect={setSelectedOption}
      />
      <NavItem
        icon={
          <HiOutlineHome
            color={selectedIndex === 0 ? "#fff" : "#414651"}
            size={18}
          />
        }
        selected={selectedIndex === 0}
        title="Repositories"
        onSelect={() => setSelectedIndex(0)}
      />
      <NavItem
        icon={
          <IoCodeSlashOutline
            color={selectedIndex === 1 ? "#fff" : "#414651"}
            size={18}
          />
        }
        selected={selectedIndex === 1}
        title="AI Code Review"
        onSelect={() => setSelectedIndex(1)}
      />
      <NavItem
        icon={
          <CiCloudOn
            color={selectedIndex === 2 ? "#fff" : "#414651"}
            size={18}
          />
        }
        selected={selectedIndex === 2}
        title="Cloud Security"
        onSelect={() => setSelectedIndex(2)}
      />
      <NavItem
        icon={
          <LuBookText
            color={selectedIndex === 3 ? "#fff" : "#414651"}
            size={18}
          />
        }
        selected={selectedIndex === 3}
        title="How to use"
        onSelect={() => setSelectedIndex(3)}
      />
      <NavItem
        icon={
          <IoSettingsOutline
            color={selectedIndex === 4 ? "#fff" : "#414651"}
            size={18}
          />
        }
        selected={selectedIndex === 4}
        title="Settings"
        onSelect={() => setSelectedIndex(4)}
      />
    </div>
  );
};

export default NavBar;
