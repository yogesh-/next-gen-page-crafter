
// This is the original code for the desktop menu with icons.


// import { Home, Building2, Phone, Key } from "lucide-react";
// import { Link } from "react-router-dom";
// import { WhatsAppButton } from "./WhatsAppButton";

// interface DesktopMenuProps {
//   isLight: boolean;
// }

// export const DesktopMenu = ({ isLight }: DesktopMenuProps) => (
//   <div className="hidden md:flex items-center space-x-8">
//     <NavLink to="/buy" icon={<Key className="h-5 w-5" />} isLight={isLight}>
//       Buy
//     </NavLink>
//     <NavLink to="/rent" icon={<Home className="h-5 w-5" />} isLight={isLight}>
//       Rent
//     </NavLink>
//     <NavLink to="/offplan" icon={<Building2 className="h-5 w-5" />} isLight={isLight}>
//       Offplan
//     </NavLink>
//     <NavLink to="/contact" icon={<Phone className="h-5 w-5" />} isLight={isLight}>
//       Contact
//     </NavLink>
//     <WhatsAppButton isLight={isLight} />
//   </div>
// );

// interface NavLinkProps {
//   to: string;
//   icon: React.ReactNode;
//   children: React.ReactNode;
//   isLight: boolean;
// }

// const NavLink = ({ to, icon, children, isLight }: NavLinkProps) => (
//   <Link
//     to={to}
//     className={`flex items-center space-x-2 transition-colors text-lg ${
//       isLight ? "text-luxury-600 hover:text-luxury-900" : "text-white hover:text-white/80"
//     }`}
//   >
//     {icon}
//     <span>{children}</span>
//   </Link>
// );


import { Link } from "react-router-dom";
import { WhatsAppButton } from "./WhatsAppButton";

interface DesktopMenuProps {
  isLight: boolean;
}

export const DesktopMenu = ({ isLight }: DesktopMenuProps) => (
  <div className="hidden md:flex items-center space-x-8">
    <NavLink to="/buy"  isLight={isLight}>
      Buy
    </NavLink>
    <NavLink to="/rent"  isLight={isLight}>
      Rent
    </NavLink>
    <NavLink to="/offplan"  isLight={isLight}>
      Offplan
    </NavLink>
    <NavLink to="/contact"  isLight={isLight}>
      Contact
    </NavLink>
    <WhatsAppButton isLight={isLight} />
  </div>
);

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isLight: boolean;
}

const NavLink = ({ to, children, isLight }: NavLinkProps) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 transition-colors text-lg ${
      isLight ? "text-luxury-600 hover:text-luxury-900" : "text-white hover:text-white/80"
    }`}
  >
    <span>{children}</span>
  </Link>
);
