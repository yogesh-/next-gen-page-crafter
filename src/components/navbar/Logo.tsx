
import { Link } from "react-router-dom";

interface LogoProps {
  isLight: boolean;
}

export const Logo = ({ isLight }: LogoProps) => (
  <Link to="/" className="flex items-center">
    <img
      src="/lovable-uploads/f8b33a1c-192c-48a3-a888-b41b6ff5e286.png"
      alt="Logo"
      className={`h-16 md:h-20 transition-opacity duration-300 ${
        isLight ? "brightness-0" : "brightness-100"
      }`}
    />
  </Link>
);
