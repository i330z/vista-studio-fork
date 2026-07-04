import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return null;
    }

    const navItems = [
        { name: 'HOME', url: '/' },
        { name: 'DESTINATIONS', url: '/destinations' },
        { name: 'EXPERIENCE', url: '/experiences' },
        // { name: 'VEHICLES', url: '/travel' },
        { name: 'STAY', url: '/stay' },
        // { name: 'ACCOMMODATIONS', url: '/stay/list' },
        { name: 'TRANSPORT', url: '/travel' },
        { name: 'CONTACT', url: '/contact' },
        { name: 'OUR STORIES', url: '/our-stories' }
        // { name: 'PLAN MY TRIP', url: '/create-plan' }
    ];

    return (
        <div className="w-full">
            {/* Top Banner */}
            <div className="bg-cyan-500 py-6 flex justify-center items-center">
                <div className="flex flex-col items-center space-x-2">
                    <svg
                        className="w-12 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5M2 12l10 5 10-5M2 7v5l10 5 10-5V7M2 12v5l10 5 10-5V12" />
                    </svg>
                    <span className="text-white font-bold text-2xl uppercase tracking-widest">North East Sustainable Tourism
                    (NEST)</span>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-black text-white">
                <ul className="flex justify-center space-x-1 leading-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.url}
                                className={`py-2 px-8 font-medium transition-colors duration-300 block ${location.pathname === item.url
                                        ? 'bg-yellow-400 text-black'
                                        : 'hover:bg-gray-800'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;