
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2834&auto=format&fit=crop)',
          filter: 'brightness(0.6)',
          transition: 'transform 0.5s ease-out'
        }}
      ></div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dubai-night/40 via-dubai-night/20 to-dubai-night/70 z-10"></div>

      {/* Hero content */}
      <div className="relative z-20 flex items-center justify-center h-full w-full">
        <div 
          ref={textRef}
          className="section-container text-center text-white opacity-0"
          style={{ transitionDelay: '300ms' }}
        >
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
              <div className="flex items-center text-sm font-medium">
                <MapPin className="h-4 w-4 mr-2 text-gold" />
                <span>Dubai's Premier Luxury Real Estate</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Discover Extraordinary <span className="text-gold">Luxury</span> Properties in Dubai
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Connecting discerning clients with Dubai's most exclusive properties and investment opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <Button className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 transform hover:translate-y-[-2px]">
                View Properties
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md backdrop-blur-sm">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
