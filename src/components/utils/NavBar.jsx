import { useState } from "react";
import { navOptions } from "../screens/Main";
import { LogoSectionHeader } from "./LogoSection";
import ConnectButton from "../buttons/ConnectButton";
import { NavLink } from "react-router-dom";

export const NavBar = ({ active, setActive }) => {
  const [open, setOpen] = useState(false);


  return (
    <div className={`w-full fixed top-0 right-0 z-[9999] h-[15vh] shadow-lg`}>
      <div className="bg-black  text-white h-full px-6 py-0 flex flex-row justify-between items-center">

        <LogoSectionHeader />

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center gap-6 capitalize">
          {navOptions.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `transition-all duration-300 cursor-pointer hover:text-blue-600
       ${isActive ? "text-blue-800 font-bold underline" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="md:block hidden"><ConnectButton /></div>
        </div>

        {/* Mobile Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-white absolute top-[100%] right-0 z-50
  md:hidden flex flex-col shadow-lg w-fit min-w-[180px] p-4 gap-4 capitalize
  transition-all duration-300 ease-in-out
  ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
`}
      >
        {navOptions.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `transition-all duration-300 cursor-pointer hover:text-blue-600
       ${isActive ? "text-blue-800 font-bold underline" : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

