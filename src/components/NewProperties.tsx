
import { useState } from "react";
import { motion } from "framer-motion";

// Types for our property data
interface Property {
  id: string;
  name: string;
  type: string;
  price: string;
  images: string[];
  highlights: string[];
}

interface PropertyTab {
  [key: string]: string[];
}

// This will be replaced with API data in the future
const propertyTabs: PropertyTab = {
  "OFF-PLAN": ["NAD AL SHEBA GARDENS PHASE 7", "GOLF DALE AT EMAAR SOUTH", "GOLF ACRES AT EMAAR SOUTH"],
  "RESALES & RENTALS": ["DOWNTOWN VIEWS", "MARINA HEIGHTS", "PALM RESIDENCE"],
  "EXCLUSIVE": ["JUMEIRAH BAY", "ZABEEL PALACE", "EMIRATES HILLS"],
};

const NewProperties = () => {
  const defaultTab = "OFF-PLAN";
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [activeProperty, setActiveProperty] = useState(propertyTabs[defaultTab][0]);

  // When tab changes, update activeProperty to first item of new tab
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setActiveProperty(propertyTabs[tab][0]);
  };

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center font-light mb-12 text-luxury-900"
        >
          NEW PROPERTIES IN DUBAI
        </motion.h2>
        
        {/* Property Type Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {Object.keys(propertyTabs).map((type) => (
            <button
              key={type}
              onClick={() => handleTabChange(type)}
              className={`px-3 py-1 rounded-full text-xs md:text-sm transition-all duration-300 
                ${type === activeTab 
                  ? "bg-golden-500 text-luxury-900" 
                  : "bg-transparent border border-luxury-200 text-luxury-600 hover:bg-golden-50"}`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Property Display Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-golden-200"
        >
          {/* Property Navigation */}
          <div className="border-b border-golden-200 overflow-x-auto">
            <div className="flex min-w-max p-4 gap-4">
              {propertyTabs[activeTab].map((property) => (
                <button
                  key={property}
                  onClick={() => setActiveProperty(property)}
                  className={`px-4 py-2 text-sm transition-all duration-300 rounded-md whitespace-nowrap
                    ${property === activeProperty 
                      ? "bg-golden-500 text-luxury-900" 
                      : "bg-transparent border border-luxury-200 text-luxury-600 hover:bg-golden-50"}`}
                >
                  {property}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="relative min-w-[280px]">
              <img
                src="/lovable-uploads/97b27f15-e5ad-41be-bea9-42336cd58679.png"
                alt="Nad Al Sheba Gardens"
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-golden-50">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-golden-50">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-luxury-900">Key Highlights</h3>
              <ul className="space-y-4 text-luxury-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-golden-500 shrink-0"></span>
                  <span>Exquisite 3-bedroom townhouses and 4 to 7-bedroom villas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-golden-500 shrink-0"></span>
                  <span>Swimmable lagoon surrounded by lush greenery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-golden-500 shrink-0"></span>
                  <span>Architectural designs with bronze accents and large windows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-golden-500 shrink-0"></span>
                  <span>G+1 and G+2 townhouse layouts available.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-golden-500 shrink-0"></span>
                  <span>Double-height ceilings and open-plan layouts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-golden-500 shrink-0"></span>
                  <span>Exclusive community amenities including yoga lawns wave pools.</span>
                </li>
              </ul>

              <div className="pt-6">
                <h3 className="text-2xl font-light mb-2 text-luxury-900">Nad Al Sheba Gardens Phase 7</h3>
                <p className="text-luxury-600 mb-4">3-7 Bedroom spacious Villa, Townhouse</p>
                <p className="text-2xl font-light mb-6 text-golden-600">AED 6.8 M</p>
                <div className="flex flex-row gap-2 md:gap-4">
                  <button className="flex-1 md:flex-none px-2 py-1 md:px-8 md:py-3 bg-golden-500 text-luxury-900 rounded hover:bg-golden-600 transition-colors text-sm md:text-base font-medium">
                    REGISTER NOW
                  </button>
                  <button className="flex-1 md:flex-none px-2 py-1 md:px-8 md:py-3 bg-luxury-50 text-luxury-900 rounded hover:bg-golden-50 transition-colors flex items-center justify-center gap-1 text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Floorplans
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewProperties; 
