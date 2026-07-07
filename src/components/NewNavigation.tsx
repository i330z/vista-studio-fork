import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Don't show this navbar on the homepage, because the homepage has its own custom transparent header in HeroSection
    if (location.pathname === '/') {
        return null;
    }

    const navItems = [
        { name: 'HOME', url: '/' },
        { name: 'DESTINATIONS', url: '/destinations' },
        // { name: 'EXPERIENCE', url: '/experiences' },
        // { name: 'STAY', url: '/stay' },
        // { name: 'TRANSPORT', url: '/travel' },
        { name: 'CONTACT', url: '/contact' },
        { name: 'OUR STORIES', url: '/our-stories' }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-md border-b border-white/5 px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between transition-all duration-300">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
                <div className="bg-[#fec80a] text-black font-black w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-sm md:text-base font-sans rounded-sm shadow-md transition-transform duration-300 group-hover:scale-105">
                    FE
                </div>
                <span className="text-white font-bold tracking-widest text-xs md:text-sm font-sans transition-colors duration-300 group-hover:text-[#fec80a]">
                    FAR EAST EXPEDITION
                </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.url;
                    return (
                        <Link
                            key={item.name}
                            to={item.url}
                            className={`text-xs font-bold tracking-widest transition-all duration-200 uppercase relative py-1.5 ${isActive
                                    ? 'text-[#fec80a] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#fec80a]'
                                    : 'text-white/80 hover:text-[#fec80a]'
                                }`}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
                <Link
                    to="/create-plan"
                    className="bg-[#fec80a] hover:bg-[#e0b007] text-black font-extrabold px-5 py-2.5 text-xs tracking-widest transition-all duration-300 rounded-sm shadow-md hover:shadow-lg uppercase"
                >
                    Plan My Trip
                </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-white hover:text-[#fec80a] focus:outline-none p-1.5 transition-colors z-50"
                aria-label="Toggle Menu"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Drawer Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-lg flex flex-col justify-center items-center space-y-6 transition-all duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {navItems.map((item) => {
                    const isActive = location.pathname === item.url;
                    return (
                        <Link
                            key={item.name}
                            to={item.url}
                            onClick={toggleMobileMenu}
                            className={`text-base font-bold tracking-widest uppercase transition-colors duration-200 ${isActive ? 'text-[#fec80a]' : 'text-white hover:text-[#fec80a]'
                                }`}
                        >
                            {item.name}
                        </Link>
                    );
                })}
                <Link
                    to="/create-plan"
                    onClick={toggleMobileMenu}
                    className="bg-[#fec80a] hover:bg-[#e0b007] text-black font-extrabold px-8 py-3.5 text-sm tracking-widest rounded-sm uppercase transition-colors duration-200"
                >
                    Plan My Trip
                </Link>
            </div>
        </header>
    );
};

export default Navbar;