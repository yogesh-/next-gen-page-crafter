
import { Link } from "react-router-dom";

interface LogoProps {
  isLight: boolean;
}

export const Logo = ({ isLight }: LogoProps) => (
  <Link to="/" className="flex items-center">
    <img
      src="/lovable-uploads/31bf8d28-4dc5-4907-87bc-7cb790ff2468.png"
      alt="Logo"
      className={`h-16 md:h-20 transition-opacity duration-300 ${
        isLight ? "brightness-0" : "brightness-100"
      }`}
    />
  </Link>
);
