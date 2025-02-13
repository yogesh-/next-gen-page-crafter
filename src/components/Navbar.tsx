
import { Home, Building2, Phone, Key } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* Placeholder for logo - update src when logo is provided */}
            <span className="text-2xl font-semibold text-luxury-900">LOGO</span>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/buy"
              className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900 transition-colors"
            >
              <Key className="h-4 w-4" />
              <span>Buy</span>
            </Link>
            <Link
              to="/rent"
              className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900 transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Rent</span>
            </Link>
            <Link
              to="/offplan"
              className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900 transition-colors"
            >
              <Building2 className="h-4 w-4" />
              <span>Offplan</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
