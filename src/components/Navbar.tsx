
import { useState, useEffect } from "react";
import { Home, Building2, Phone, Key, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/f8b33a1c-192c-48a3-a888-b41b6ff5e286.png"
              alt="Logo"
              className={`h-16 md:h-20 transition-opacity duration-300 ${
                isScrolled || isMobileMenuOpen ? "brightness-0" : "brightness-100"
              }`}
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/buy"
              className={`flex items-center space-x-2 transition-colors text-lg ${  /* Added text-lg */
                isScrolled ? "text-luxury-600 hover:text-luxury-900" : "text-white hover:text-white/80"
              }`}
            >
              <Key className="h-5 w-5" /> {/* Increased icon size */}
              <span>Buy</span>
            </Link>
            <Link
              to="/rent"
              className={`flex items-center space-x-2 transition-colors text-lg ${
                isScrolled ? "text-luxury-600 hover:text-luxury-900" : "text-white hover:text-white/80"
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Rent</span>
            </Link>
            <Link
              to="/offplan"
              className={`flex items-center space-x-2 transition-colors text-lg ${
                isScrolled ? "text-luxury-600 hover:text-luxury-900" : "text-white hover:text-white/80"
              }`}
            >
              <Building2 className="h-5 w-5" />
              <span>Offplan</span>
            </Link>
            <Link
              to="/contact"
              className={`flex items-center space-x-2 transition-colors text-lg ${
                isScrolled ? "text-luxury-600 hover:text-luxury-900" : "text-white hover:text-white/80"
              }`}
            >
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            
            <a
              href="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 border-2 border-green-400 text-green-400 font-bold rounded-full transition-all text-lg ${
                isScrolled ? "text-luxury-600 hover:text-luxury-900" : "hover:bg-white hover:text-black"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="24"
                width="24"
                className="flex-shrink-0 text-green-400"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile WhatsApp and Menu buttons */}
          <div className="md:hidden flex items-center space-x-4">
            <a
              href="https://wa.me/+1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isScrolled || isMobileMenuOpen ? "text-luxury-600" : "text-white"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="24"
                width="24"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
              </svg>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled || isMobileMenuOpen ? "text-luxury-900" : "text-white"}`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Full-screen Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <img
                  src="/lovable-uploads/f8b33a1c-192c-48a3-a888-b41b6ff5e286.png"
                  alt="Logo"
                  className="h-8 brightness-0"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-luxury-900"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 flex flex-col space-y-6 p-8">
                <Link
                  to="/buy"
                  className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Key className="h-5 w-5" />
                  <span className="text-xl">Buy</span>
                </Link>
                <Link
                  to="/rent"
                  className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  <span className="text-xl">Rent</span>
                </Link>
                <Link
                  to="/offplan"
                  className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Building2 className="h-5 w-5" />
                  <span className="text-xl">Offplan</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-xl">Contact</span>
                </Link>
                <a
                  href="https://wa.me/+1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-luxury-600 hover:text-luxury-900"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="20"
                    width="20"
                  >
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z" />
                  </svg>
                  <span className="text-xl">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
