import logo from "../../../assets/icons/logo.svg";
import { NavigationBar } from "./navigation-bar.component";

export const Header = () => {
  return (
    <header className="max-w-[1440px] mx-auto relative">
      <div className="absolute inset-0 px-6 lg:px-[170px] mx-auto mt-10">
        <div className="flex justify-between items-center w-full">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Loop studios"
              className="h-[24px] z-20"
              width="144"
              height="24"
            />
          </div>
          <NavigationBar />
        </div>
      </div>
    </header>
  );
};
