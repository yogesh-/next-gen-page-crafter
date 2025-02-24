
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import NewProperties from "../components/NewProperties";
import TopDevelopersSection from "../components/sections/TopDevelopersSection";
import CommunitiesSection from "../components/sections/CommunitiesSection";
import StatsSection from "../components/sections/StatsSection";
import NewsletterSection from "../components/sections/NewsletterSection";
import FooterSection from "../components/sections/FooterSection";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection scrollY={scrollY} />
      <NewProperties />
      <TopDevelopersSection />
      <CommunitiesSection />
      <StatsSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default Index;
