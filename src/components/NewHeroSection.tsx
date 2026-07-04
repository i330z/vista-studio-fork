import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/tawang-hero-bg.jpg';

const HeroSection = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden text-white bg-black">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
            ></div>

            {/* Overlays for high contrast and readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>

            {/* Header/Navigation */}
            <header className="relative z-30 w-full px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 group">
                    <div className="bg-[#fec80a] text-black font-black w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-sm md:text-base font-sans rounded-sm shadow-md transition-transform duration-300 group-hover:scale-105">
                        FE
                    </div>
                    <span className="text-white font-bold tracking-widest text-xs md:text-sm font-sans transition-colors duration-300 group-hover:text-[#fec80a]">
                        FAR EAST EXPEDITION
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center space-x-10">
                    <Link to="/destinations" className="text-white/95 hover:text-[#fec80a] text-xs font-bold tracking-widest transition-colors duration-200 uppercase">
                        Destinations
                    </Link>
                    <Link to="/experiences" className="text-white/95 hover:text-[#fec80a] text-xs font-bold tracking-widest transition-colors duration-200 uppercase">
                        Experiences
                    </Link>
                    <Link to="/travel" className="text-white/95 hover:text-[#fec80a] text-xs font-bold tracking-widest transition-colors duration-200 uppercase">
                        Services
                    </Link>
                    <Link to="/create-plan" className="text-white/95 hover:text-[#fec80a] text-xs font-bold tracking-widest transition-colors duration-200 uppercase">
                        Plan a Trip
                    </Link>
                    <Link to="/about" className="text-white/95 hover:text-[#fec80a] text-xs font-bold tracking-widest transition-colors duration-200 uppercase">
                        Our Story
                    </Link>
                </nav>

                {/* Desktop CTA Button */}
                <div className="hidden lg:block">
                    <Link
                        to="/create-plan"
                        className="bg-[#fec80a] hover:bg-[#e0b007] text-black font-extrabold px-6 py-2.5 text-xs tracking-widest transition-all duration-300 rounded-sm shadow-md hover:shadow-lg uppercase"
                    >
                        Plan My Trip
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden z-50 text-white hover:text-[#fec80a] focus:outline-none p-1.5 transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Navigation Drawer */}
            <div
                className={`fixed inset-0 z-40 bg-black/98 backdrop-blur-lg flex flex-col justify-center items-center space-y-8 transition-all duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <Link
                    to="/destinations"
                    onClick={toggleMobileMenu}
                    className="text-white hover:text-[#fec80a] text-lg font-bold tracking-widest uppercase transition-colors duration-200"
                >
                    Destinations
                </Link>
                <Link
                    to="/experiences"
                    onClick={toggleMobileMenu}
                    className="text-white hover:text-[#fec80a] text-lg font-bold tracking-widest uppercase transition-colors duration-200"
                >
                    Experiences
                </Link>
                <Link
                    to="/travel"
                    onClick={toggleMobileMenu}
                    className="text-white hover:text-[#fec80a] text-lg font-bold tracking-widest uppercase transition-colors duration-200"
                >
                    Services
                </Link>
                <Link
                    to="/create-plan"
                    onClick={toggleMobileMenu}
                    className="text-white hover:text-[#fec80a] text-lg font-bold tracking-widest uppercase transition-colors duration-200"
                >
                    Plan a Trip
                </Link>
                <Link
                    to="/about"
                    onClick={toggleMobileMenu}
                    className="text-white hover:text-[#fec80a] text-lg font-bold tracking-widest uppercase transition-colors duration-200"
                >
                    Our Story
                </Link>
                <Link
                    to="/create-plan"
                    onClick={toggleMobileMenu}
                    className="bg-[#fec80a] hover:bg-[#e0b007] text-black font-extrabold px-8 py-3.5 text-sm tracking-widest rounded-sm uppercase transition-colors duration-200"
                >
                    Plan My Trip
                </Link>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 flex-grow flex items-center px-6 md:px-12 lg:px-40 py-16 md:py-24">
                <div className="max-w-4xl w-full text-left gap-y-24">
                    {/* Subtitle / Tagline */}
                    <p className="text-[#fec80a] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in font-sans">
                        NORTH EAST SUSTAINABLE TOURISM - INDIA
                    </p>

                    {/* Main Title Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 font-sans uppercase">
                        What Will <br />
                        <span className="text-[#fec80a]">You Discover?</span>
                    </h1>

                    {/* Subtext description */}
                    <p className="text-white/90 text-sm md:text-base lg:text-lg mb-8 max-w-2xl font-serif leading-relaxed font-light">
                        Slow, sustainable expeditions across the seven sister states of Northeast India — from Meghalaya's cloud forests to Arunachal's Himalayan valleys, planned with the people who live there.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
                        <Link
                            to="/create-plan"
                            className="inline-flex items-center justify-center bg-[#fec80a] hover:bg-[#e0b007] text-black font-extrabold px-7 py-4 text-xs md:text-sm tracking-widest transition-all duration-300 rounded-sm group uppercase shadow-md hover:shadow-lg"
                        >
                            Plan My Trip
                            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/destinations"
                            className="inline-flex items-center justify-start text-white hover:text-[#fec80a] font-extrabold text-xs md:text-sm tracking-widest transition-all duration-300 uppercase border-b-2 border-white hover:border-[#fec80a] pb-1 w-fit"
                        >
                            Explore Destinations
                        </Link>
                    </div>

                    {/* Divider line */}
                    <div className="w-full border-t border-white/20 my-8 md:my-10 max-w-2xl"></div>

                    {/* Statistics Footer */}
                    <div className="flex flex-wrap gap-8 md:gap-16">
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#fec80a] font-sans">7</div>
                            <div className="text-[10px] md:text-xs text-white/60 font-bold tracking-widest uppercase mt-1.5">Sister States</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#fec80a] font-sans">40+</div>
                            <div className="text-[10px] md:text-xs text-white/60 font-bold tracking-widest uppercase mt-1.5">Local Guides</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#fec80a] font-sans">100%</div>
                            <div className="text-[10px] md:text-xs text-white/60 font-bold tracking-widest uppercase mt-1.5">Community-run</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;