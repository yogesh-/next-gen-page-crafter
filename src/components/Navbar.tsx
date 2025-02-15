
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScroll } from "../hooks/useScroll";
import { Logo } from "./navbar/Logo";
import { DesktopMenu } from "./navbar/DesktopMenu";
import { MobileMenu } from "./navbar/MobileMenu";
import { WhatsAppButton } from "./navbar/WhatsAppButton";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScroll(100);
  const isLight = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo isLight={isLight} />
          <DesktopMenu isLight={isLight} />

          {/* Mobile WhatsApp and Menu buttons */}
          <div className="md:hidden flex items-center space-x-4">
            <WhatsAppButton isLight={isLight} isMobile />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isLight ? "text-luxury-900" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
