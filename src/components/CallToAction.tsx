import React from 'react';
import { Link } from 'react-router-dom';

export const CallToAction = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[500px]">
      {/* Left Column: Sunset Boat Image */}
      <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-auto flex">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
          alt="Sunset boat"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Column: Cyan Details Card */}
      <div className="w-full md:w-1/2 bg-[#00bdf2] flex items-center px-8 py-16 md:py-24 lg:px-20 lg:py-28 text-left">
        <div className="max-w-xl">
          {/* Tagline */}
          <p className="text-[#0a314b]/60 font-bold text-xs md:text-sm tracking-widest uppercase mb-4 font-sans">
            04 - Plan Your Trip
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[#0a314b] font-sans uppercase mb-6">
            Tell us your dates. <br />
            We'll shape the rest.
          </h2>

          {/* Subtitle / Description */}
          <p className="text-[#0a314b]/95 text-sm md:text-base font-serif leading-relaxed mb-10 max-w-lg">
            A single form, a real human on the other side. We'll build an itinerary from permits to homestays — routed through the operators we know and trust across the Northeast.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link 
              to="/create-plan"
              className="inline-flex items-center justify-center bg-[#fec80a] hover:bg-[#e0b007] text-black font-extrabold px-6 py-3.5 text-xs md:text-sm tracking-widest transition-all duration-300 rounded-sm shadow-md uppercase hover:shadow-lg"
            >
              Start Planning <span className="ml-2 font-sans">→</span>
            </Link>
            <Link 
              to="/about"
              className="inline-flex items-center justify-center border border-[#0a314b] text-[#0a314b] hover:bg-[#0a314b] hover:text-white font-extrabold px-6 py-3.5 text-xs md:text-sm tracking-widest transition-all duration-300 rounded-sm uppercase"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;