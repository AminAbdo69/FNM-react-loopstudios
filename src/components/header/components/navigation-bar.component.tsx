import { useState } from "react";
import { NavItems } from "../../types";
import menu_icon from "../../../assets/icons/icon-hamburger.svg";
import close_icon from "../../../assets/icons/icon-close.svg";

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center gap-6 lg:flex-row">
      {isOpen && (
        <div className="fixed inset-0 bg-black z-10 lg:hidden ">
          <div className="flex flex-col items-start gap-6 mt-[50vh] translate-y-[-50%] ml-6">
            {NavItems.map((item) => (
              <a
                href={item.href}
                className="text-white custom-underline text-[24px] font-light uppercase "
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        className=" cursor-pointer z-20 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={isOpen ? close_icon : menu_icon}
          alt={isOpen ? "close" : "open"}
          className=" lg:hidden"
        />
      </button>
      {NavItems.map((item) => (
        <a
          href={item.href}
          className="hidden cursor-pointer  text-white custom-underline lg:block"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};
