
import { useState, useEffect } from "react";
import { Home, Building2, Phone, Key, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/f8b33a1c-192c-48a3-a888-b41b6ff5e286.png"
              alt="Logo"
              className="h-8"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/buy"
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled ? "text-luxury-600 hover:text-luxury-900" : "text-white hover:text-white/80"
              }`}
            >
              <Key className="h-4 w-4" />
              <span>Buy</span>
            </Link>
            <Link
              to="/rent"
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled ? "text-luxury-600 hover:text-luxury-900" : "text-white hover:text-white/80"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Rent</span>
            </Link>
            <Link
              to="/offplan"
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled ? "text-luxury-600 hover:text-luxury-900" : "text-white hover:text-white/80"
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Offplan</span>
            </Link>
            <Link
              to="/contact"
              className={`flex items-center space-x-2 transition-colors ${
                isScrolled ? "text-luxury-600 hover:text-luxury-900" : "text-white hover:text-white/80"
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-luxury-900" : "text-white"}`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/buy"
                className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Key className="h-4 w-4" />
                <span>Buy</span>
              </Link>
              <Link
                to="/rent"
                className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>Rent</span>
              </Link>
              <Link
                to="/offplan"
                className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Building2 className="h-4 w-4" />
                <span>Offplan</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
