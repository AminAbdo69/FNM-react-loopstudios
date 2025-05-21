import { useState, useMemo } from "react";
import menu_icon from "../../../assets/icons/icon-hamburger.svg";
import close_icon from "../../../assets/icons/icon-close.svg";
import { NavItems, type navItemType } from "../../types";

const MobileMenu = ({
  isOpen,
  onClose,
  items,
}: {
  isOpen: boolean;
  onClose: () => void;
  items: navItemType[];
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="lg:hidden fixed inset-0 bg-black z-10"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className="flex flex-col items-start gap-6 mt-[20vh] ml-6">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-white custom-underline text-[24px] font-light uppercase"
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const memoizedNavItems = useMemo(() => NavItems, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="flex items-center justify-end w-full"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-8">
        <div className="hidden lg:flex items-center gap-8">
          {memoizedNavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white custom-underline"
            >
              {item.name}
            </a>
          ))}
        </div>

        {isOpen ? (
          <button
            className="lg:hidden cursor-pointer z-20"
            onClick={closeMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Close menu"
          >
            <img src={close_icon} alt="close" className="lg:hidden" />
          </button>
        ) : (
          <button
            className="lg:hidden cursor-pointer z-20"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <img src={menu_icon} alt="open" className="lg:hidden" />
          </button>
        )}
      </div>

      <MobileMenu
        isOpen={isOpen}
        onClose={closeMenu}
        items={memoizedNavItems}
      />
    </nav>
  );
};
