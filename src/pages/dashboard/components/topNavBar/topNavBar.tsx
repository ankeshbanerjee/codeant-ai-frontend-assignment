import React from "react";
import { Divider } from "../../../../components/divider";
import { MdClose, MdMenu, MdOutlineLogout } from "react-icons/md";
import NavBar from "../navbar/navBar";
import { NavItem } from "../navitem";
import { BsTelephone } from "react-icons/bs";
import { TitleBar } from "../../../../components/titlebar";
import { Link } from "react-router";

const TopNavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Prevent body scrolling when menu is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <div className="sticky top-0 w-screen z-50">
        <div className="lg:hidden bg-gray-50 relative">
          <div className="flex justify-between items-center">
            <TitleBar />
            {!open ? (
              <MdMenu
                size={36}
                className="pr-4"
                onClick={() => setOpen(true)}
              />
            ) : (
              <MdClose
                size={36}
                className="pr-4"
                onClick={() => setOpen(false)}
              />
            )}
          </div>
          {open && (
            <div className="bg-gray-50 px-5 w-screen pb-6 absolute left-0 right-0">
              <NavBar />
              <NavItem icon={<BsTelephone />} title="Support" />
              <Link to="/login">
                <NavItem icon={<MdOutlineLogout />} title="Logout" />
              </Link>
            </div>
          )}
          <Divider />
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default TopNavBar;
