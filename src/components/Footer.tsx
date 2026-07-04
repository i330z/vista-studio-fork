import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030f1c] text-white py-16 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Column 1: Brand & Info (50% on desktop) */}
          <div className="md:col-span-6 space-y-6 text-left">
            <Link to="/" className="flex items-center space-x-3 group w-fit">
              <div className="bg-[#fec80a] text-black font-extrabold w-8 h-8 flex items-center justify-center text-sm font-sans rounded-xs shadow-md transition-transform duration-300 group-hover:scale-105">
                FE
              </div>
              <span className="text-white font-bold tracking-widest text-sm font-sans transition-colors duration-300 group-hover:text-[#fec80a]">
                FAR EAST EXPEDITION
              </span>
            </Link>

            <p className="text-white/70 text-sm font-serif leading-relaxed max-w-md font-light">
              A community-led travel collective under North East Sustainable Tourism (NEST),
              building slow, low-impact journeys across the seven sister states of Northeast India.
            </p>
          </div>

          {/* Column 2: Explore Links (25% on desktop) */}
          <div className="md:col-span-3 text-left">
            <h5 className="text-[#fec80a] font-bold text-xs tracking-widest uppercase mb-6 font-sans">
              Explore
            </h5>
            <ul className="space-y-3 font-sans">
              <li>
                <Link to="/destinations" className="text-white/80 hover:text-[#fec80a] text-sm transition-colors duration-200">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-white/80 hover:text-[#fec80a] text-sm transition-colors duration-200">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/travel" className="text-white/80 hover:text-[#fec80a] text-sm transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/create-plan" className="text-white/80 hover:text-[#fec80a] text-sm transition-colors duration-200">
                  Plan a Trip
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#fec80a] text-sm transition-colors duration-200">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (25% on desktop) */}
          <div className="md:col-span-3 text-left">
            <h5 className="text-[#fec80a] font-bold text-xs tracking-widest uppercase mb-6 font-sans">
              Contact
            </h5>
            <div className="space-y-3 font-serif text-sm text-white/80 font-light leading-relaxed">
              <p>
                <a href="mailto:hello@fareastexpedition.com" className="hover:text-[#fec80a] transition-colors">
                  hello@fareastexpedition.com
                </a>
              </p>
              <p>
                Kuala Terengganu, Malaysia
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-white/40 tracking-widest uppercase font-sans space-y-4 md:space-y-0 py-2">
          <p>
            © {currentYear} NEST · FAR EAST EXPEDITION
          </p>
          <p>
            MADE SLOWLY, IN THE NORTHEAST.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;