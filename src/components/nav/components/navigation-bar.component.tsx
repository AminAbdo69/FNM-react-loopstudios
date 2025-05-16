import { useState, useMemo } from "react";
import menu_icon from "../../../assets/icons/menu.svg";
import close_icon from "../../../assets/icons/close.svg";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Careers",
    href: "#",
  },
  {
    name: "Events",
    href: "#",
  },
  {
    name: "Products",
    href: "#",
  },
  {
    name: "Support",
    href: "#",
  },
];

const MobileMenu = ({
  isOpen,
  onClose,
  items,
}: {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="lg:hidden fixed inset-0 bg-black z-10"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className="flex flex-col items-start gap-6 mt-[50vh] translate-y-[-50%] ml-[24px]">
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
  const memoizedNavItems = useMemo(() => navItems, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="flex flex-col items-center gap-6 lg:flex-row"
      role="navigation"
      aria-label="Main navigation"
    >
      <MobileMenu
        isOpen={isOpen}
        onClose={closeMenu}
        items={memoizedNavItems}
      />

      <button
        className="lg:hidden cursor-pointer z-20"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <img
          src={isOpen ? close_icon : menu_icon}
          alt={isOpen ? "close" : "open"}
          className="lg:hidden"
        />
      </button>

      {memoizedNavItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="hidden lg:block text-white custom-underline"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};
