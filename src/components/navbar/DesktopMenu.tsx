
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
      isLight 
        ? "text-luxury-600 hover:text-gold" 
        : "text-white hover:text-dubai-sand"
    }`}
  >
    <span>{children}</span>
  </Link>
);
