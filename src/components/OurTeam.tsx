import React from "react";
import { Mail, Instagram, Facebook } from "lucide-react";
import Team13 from "@/assets/team/t13.jpg";
import Team16 from "@/assets/team/t16.jpg";
import Team11 from "@/assets/team/t11.jpg";
import Team5 from "@/assets/team/t5.jpg";

const members = [
    {
        id: 1,
        name: "Sameer",
        role: "Sikkim",
        img: Team13,
        socials: {
            instagram: "#",
            facebook: "#",
            email: "mailto:sameer@fareastexpedition.com"
        }
    },
    {
        id: 2,
        name: "Subradip",
        role: "Tripura",
        img: Team16,
        socials: {
            instagram: "#",
            facebook: "#",
            email: "mailto:subradip@fareastexpedition.com"
        }
    },
    {
        id: 4,
        name: "Rudrangshu",
        role: "Assam",
        img: Team11,
        socials: {
            instagram: "#",
            facebook: "#",
            email: "mailto:rudrangshu@fareastexpedition.com"
        }
    },
    {
        id: 5,
        name: "Gitartha",
        role: "Assam",
        img: Team5,
        socials: {
            instagram: "#",
            facebook: "#",
            email: "mailto:gitartha@fareastexpedition.com"
        }
    },
];

export default function OurTeam() {
    return (
        <section 
            id="our-team" 
            className="relative py-28 text-white overflow-hidden"
            style={{
                backgroundColor: "#05131b",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M0 40 Q 20 30, 40 40 T 80 40' fill='none' stroke='rgba(49,183,208,0.03)' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
            }}
        >
            {/* Background glowing gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#31b7d0]/5 rounded-full filter blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fec80a]/5 rounded-full filter blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Header matching site layout style */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-20 px-3">
                    <div className="max-w-2xl">
                        <p className="text-xs md:text-sm font-bold tracking-widest text-[#fec80a] uppercase mb-4 font-sans">
                            04 · THE EXPEDITION TEAM
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white font-sans uppercase">
                            Guides who know <br />
                            <span className="text-[#31b7d0]">every backyard.</span>
                        </h2>
                    </div>
                    <div className="max-w-md lg:mb-2">
                        <p className="text-sm md:text-base text-white/80 font-serif leading-relaxed">
                            Our team members are native to the hills, valleys, and forests they guide you through. They connect you with local families, explain local customs, and show you trails that aren't on any map.
                        </p>
                    </div>
                </div>

                {/* Team grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-3">
                    {members.map((m) => (
                        <div 
                            key={m.id}
                            className="group flex flex-col bg-slate-900/40 border border-white/10 rounded-sm overflow-hidden backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 shadow-lg hover:border-[#31b7d0]/30"
                        >
                            {/* Image wrapper */}
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                                <img
                                    src={m.img}
                                    alt={`${m.name} - ${m.role}`}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10"></div>
                            </div>

                            {/* Card Details */}
                            <div className="p-6 flex flex-col justify-between bg-slate-950/70 border-t border-white/5 relative z-20">
                                <div>
                                    <h3 className="text-xl font-black text-white tracking-wide uppercase font-sans group-hover:text-[#fec80a] transition-colors duration-300">
                                        {m.name}
                                    </h3>
                                    <p className="text-xs font-bold text-[#31b7d0] font-sans tracking-widest uppercase mb-4 mt-1">
                                        {m.role}
                                    </p>
                                </div>

                                {/* Divider line before social icons */}
                                <div className="w-full h-[1px] bg-white/10 mb-4 mt-2"></div>

                                {/* Social handles */}
                                <div className="flex items-center gap-4">
                                    <a 
                                        href={m.socials.instagram} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label={`${m.name} on Instagram`}
                                        className="text-white/60 hover:text-[#fec80a] transition-colors duration-300"
                                    >
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                    <a 
                                        href={m.socials.facebook} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label={`${m.name} on Facebook`}
                                        className="text-white/60 hover:text-[#fec80a] transition-colors duration-300"
                                    >
                                        <Facebook className="w-4 h-4" />
                                    </a>
                                    <a 
                                        href={m.socials.email} 
                                        aria-label={`Email ${m.name}`}
                                        className="text-white/60 hover:text-[#fec80a] transition-colors duration-300"
                                    >
                                        <Mail className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}