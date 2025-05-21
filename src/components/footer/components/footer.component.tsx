import logo from "../../../assets/icons/logo.svg";
import facebook from "../../../assets/icons/icon-facebook.svg";
import instagram from "../../../assets/icons/icon-instagram.svg";
import twitter from "../../../assets/icons/icon-twitter.svg";
import pinterest from "../../../assets/icons/icon-pinterest.svg";
import { NavItems } from "../../types";

export const Footer = () => {
  return (
    <footer>
      <div className="max-w-[1440px] mx-auto bg-black flex flex-col items-center py-16 px-6 lg:flex-row lg:justify-between lg:px-36">
        <div className="flex flex-col items-center gap-10 lg:items-start ">
          <img src={logo} alt="logo" className="h-6" />
          <nav className="flex flex-col items-center gap-6 lg:flex-row">
            {NavItems.map((item) => (
              <a href={item.href} className="text-white custom-underline">
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center mt-10 gap-6 lg:items-end lg:mt-0 lg:justify-start lg:gap-10">
          <nav className="flex gap-4">
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={pinterest} alt="pinterest" />
            </a>
          </nav>
          <p className="text-white">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
