'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import {
    Video,
    BookOpen,
    Compass,
    Map,
    Bus,
    Home,
    Briefcase,
    FileText
} from 'lucide-react';

const activities = [
    {
        icon: Video,
        title: 'Travel Video',
        description: 'Watch stunning travel videos that capture the essence of our destinations, inspiring your next adventure.',
    },
    {
        icon: BookOpen,
        title: 'Free Brochures',
        description: 'Download our detailed and free brochures to help you plan your perfect getaway with ease.',
    },
    {
        icon: Map,
        title: 'Adventure Blog',
        description: 'Read our adventure blog for exciting travel stories, tips, and guides from our team of explorers.',
    },
    {
        icon: Compass,
        title: 'Trip Selector',
        description: 'Use our interactive trip selector to find the perfect journey tailored to your interests and travel style.',
    },
    {
        icon: Bus,
        title: "Transport Routes",
        description: "Comprehensive transportation solutions including scenic routes across breathtaking destinations.",
    },
    {
        icon: Home,
        title: "Housing & Homestays",
        description: "Comfortable accommodations ranging from luxury resorts to authentic local homestays for an immersive experience.",
    },
    {
        icon: Briefcase,
        title: "Tour Packages",
        description: "Carefully curated tour packages designed to showcase the best of each destination with expert local guides.",
    },
    {
        icon: FileText,
        title: "Permits & Documentation",
        description: "Complete assistance with travel permits, documentation, and regulatory requirements for hassle-free journeys.",
    }
];

export default function WhatWeDo() {
    // Helper to format index (e.g. 0 -> 01)
    const formatIndex = (index) => {
        return String(index + 1).padStart(2, '0');
    };

    return (
        <section className="relative py-40 md:py-52 px-6 md:px-12 lg:px-20 bg-slate-950 overflow-hidden flex items-center">
            {/* Full-bleed Background Nature Mountain Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay transition-transform duration-10000 ease-out scale-105"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80')`
                }}
            ></div>

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative z-10 max-w-[1600px] mx-auto w-full">
                {/* Section Header */}
                <div className="max-w-3xl text-left mb-24 px-3">
                    <p className="text-[#fec80a] font-bold text-xs md:text-sm tracking-widest uppercase mb-4 font-sans">
                        02 - Services
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white font-sans uppercase">
                        Every part of the, <br />
                        <span className="text-[#31b7d0]">trip, handled.</span>
                    </h2>
                </div>

                {/* Services Grid (8 elements, 4 columns, 2 rows) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 lg:gap-x-20 gap-y-24 px-3 mt-20">
                    {activities.map((activity, index) => {
                        const IconComponent = activity.icon;
                        return (
                            <div
                                key={index}
                                className="group flex flex-col justify-between text-left h-full"
                            >
                                <div className="flex flex-col">
                                    {/* Header line with Icon and Index */}
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5 transition-colors duration-300 group-hover:border-[#31b7d0]/40">
                                        <IconComponent className="w-6 h-6 text-[#fec80a] transform transition-transform duration-500 group-hover:scale-110" />
                                        <span className="text-[10px] md:text-xs text-white/40 font-bold tracking-widest font-sans group-hover:text-white/80 transition-colors">
                                            {formatIndex(index)}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base font-bold text-white tracking-wide uppercase mb-3 font-sans group-hover:text-[#fec80a] transition-colors duration-300">
                                        {activity.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs md:text-sm text-white/60 font-sans leading-relaxed font-light mb-5">
                                        {activity.description}
                                    </p>
                                </div>

                                {/* Read More Link */}
                                <Link
                                    to="#"
                                    className="inline-flex items-center text-xs font-bold tracking-widest uppercase transition-all duration-300 text-[#31b7d0] hover:text-[#fec80a] font-sans pb-1 w-fit mt-auto border-b border-transparent hover:border-[#fec80a]"
                                >
                                    Read More
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
