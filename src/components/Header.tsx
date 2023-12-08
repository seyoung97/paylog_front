import { useState } from "react";
import Menu from "./Menu";
import logo from "../assets/images/logo/paylog_logo.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full border-b border-gray-200 shadow-sm">
        <div className="w-1/12 mx-4 py-3">
          <img src={logo} className="w-full"></img>
        </div>
        {isMenuOpen ? (
          <IoClose size="2rem" className="mr-4" onClick={handleMenu} />
        ) : (
          <IoMenu size="2rem" className="mr-4" onClick={handleMenu} />
        )}
      </div>
      <Menu isMenuOpen={isMenuOpen} />
    </>
  );
}
