import { useRef, useState } from "react";
import Tent from "@/assets/icons/tent.png"
import ValueForMoney from "@/assets/icons/exchange.png"
import Experience from "@/assets/icons/landscape.png"
import Bags from "@/assets/icons/luggage.png"
import { Recycle, Sprout, Sun, Play } from "lucide-react";

function FarEast() {
    const [playingVideo1, setPlayingVideo1] = useState(false);
    const [playingVideo2, setPlayingVideo2] = useState(false);

    const sustainabilityItems = [
        {
            id: 1,
            title: "Waste Management",
            number: "01",
            icon: Recycle,
            description: "We take efforts to promote and help channelize better waste management, food-securing methods, water preservation plans and secure livelihoods.",
            image: 'https://t3.ftcdn.net/jpg/05/73/57/76/360_F_573577614_3xNASp9y2eCUSXstGdXf9sKlW3ZYVyUr.jpg'
        },
        {
            id: 2,
            title: "Tree Plantation",
            number: "02",
            icon: Sprout,
            description: "Community-led planting drives across the seven sisters — restoring native forest cover alongside the villages who steward the land.",
            image: 'https://holdenfg.org/wp-content/uploads/2022/04/CMHA_tree_planting_523-1-scaled.jpg'
        },
        {
            id: 3,
            title: "Renewable Energy",
            number: "03",
            icon: Sun,
            description: "Small-scale solar and micro-hydro projects that bring clean power to remote hamlets — designed and maintained by local hands.",
            image: 'https://knowledge.wharton.upenn.edu/wp-content/uploads/2015/04/2015-04-19-IGEL-banner-art.jpg'
        },
    ];

    return (
        <section 
            id="sustainability" 
            className="relative py-24 text-white overflow-hidden"
            style={{
                backgroundColor: "#086285",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100' viewBox='0 0 160 100'%3E%3Cpath d='M0 50 Q 40 35, 80 50 T 160 50' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1.2'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
            }}
        >

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <p className="text-xs md:text-sm font-bold tracking-widest text-[#fec80a] uppercase mb-4 font-sans">
                        05 · SUSTAINABILITY
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase font-sans mb-6">
                        Sustainable <br />
                        <span className="text-[#fec80a]">Northeast India.</span>
                    </h2>
                    <p className="text-sm md:text-base text-white/80 font-serif leading-relaxed">
                        Support community-led climate action to minimise the impact on climate change in India — and the rest of the planet.
                    </p>
                </div>

                {/* Video Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
                    {/* Video 1 Card */}
                    <div className="relative aspect-[16/9] border border-white/20 bg-slate-950 overflow-hidden shadow-2xl group">
                        {playingVideo1 ? (
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/hcU8fU0RnKM?autoplay=1"
                                title="Jemeithang – The Realm of Peace"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div 
                                className="absolute inset-0 w-full h-full cursor-pointer flex flex-col justify-between"
                                onClick={() => setPlayingVideo1(true)}
                            >
                                {/* Thumbnail Image */}
                                <img 
                                    src="https://img.youtube.com/vi/hcU8fU0RnKM/maxresdefault.jpg" 
                                    alt="Jemeithang Thumbnail" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-0" />

                                {/* Card Header Overlay */}
                                <div className="relative z-10 p-4 md:p-6 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
                                    <div>
                                        <h4 className="text-xs md:text-sm font-bold tracking-wider text-white font-sans uppercase">
                                            JEMEITHANG – THE REALM OF PEACE
                                        </h4>
                                        <p className="text-[10px] font-sans text-white/60 tracking-wider uppercase mt-1">
                                            GREEN HUB VIDEO DIARY
                                        </p>
                                    </div>
                                    <span className="text-xs md:text-sm font-bold text-[#fec80a] font-sans">
                                        01
                                    </span>
                                </div>

                                {/* Central Play Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-[#fec80a] text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                                    <Play className="fill-slate-900 stroke-none w-6 h-6 translate-x-[2px]" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Video 2 Card */}
                    <div className="relative aspect-[16/9] border border-white/20 bg-slate-950 overflow-hidden shadow-2xl group">
                        {playingVideo2 ? (
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/d_-ueA_BBks?autoplay=1"
                                title="Sacred Grove – Where Nature & Well-being Unite"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div 
                                className="absolute inset-0 w-full h-full cursor-pointer flex flex-col justify-between"
                                onClick={() => setPlayingVideo2(true)}
                            >
                                {/* Thumbnail Image */}
                                <img 
                                    src="https://img.youtube.com/vi/d_-ueA_BBks/maxresdefault.jpg" 
                                    alt="Sacred Grove Thumbnail" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-0" />

                                {/* Card Header Overlay */}
                                <div className="relative z-10 p-4 md:p-6 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
                                    <div>
                                        <h4 className="text-xs md:text-sm font-bold tracking-wider text-white font-sans uppercase">
                                            SACRED GROVE – WHERE NATURE & WELL-BEING UNITE
                                        </h4>
                                        <p className="text-[10px] font-sans text-white/60 tracking-wider uppercase mt-1">
                                            GREEN HUB VIDEO DIARY
                                        </p>
                                    </div>
                                    <span className="text-xs md:text-sm font-bold text-[#fec80a] font-sans">
                                        02
                                    </span>
                                </div>

                                {/* Central Play Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-[#fec80a] text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                                    <Play className="fill-slate-900 stroke-none w-6 h-6 translate-x-[2px]" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Commitment Block */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto pt-12 border-t border-white/20 mb-24">
                    <div className="md:col-span-4 flex flex-col justify-start">
                        <p className="text-xs font-bold tracking-widest text-[#fec80a] uppercase font-sans">
                            OUR COMMITMENT
                        </p>
                        <div className="w-12 h-[1px] bg-white/25 mt-3"></div>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-sm md:text-base text-white/80 font-serif leading-relaxed">
                            Our commitment extends beyond showcasing the stunning landscapes of Northeast India. We're dedicated to responsible tourism that empowers local communities and preserves the natural environment for generations to come. We actively partner with local experts and communities to drive sustainable initiatives — projects fundamental to our mission, ensuring every journey contributes positively to the region and its inhabitants.
                        </p>
                    </div>
                </div>

                {/* Ongoing Projects Header */}
                <div className="flex items-center justify-between gap-4 max-w-6xl mx-auto mb-12">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-wide uppercase font-sans flex-shrink-0">
                        OUR ONGOING <span className="text-[#fec80a]">PROJECTS.</span>
                    </h3>
                    <div className="flex-grow h-[1px] bg-white/20"></div>
                    <span className="text-xs font-sans text-white/60 tracking-widest uppercase flex-shrink-0">
                        03 INITIATIVES
                    </span>
                </div>

                {/* Ongoing Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {sustainabilityItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div 
                                className="flex flex-col bg-[#f9f6ef] border border-[#e5dfd3] shadow-md text-slate-900 group hover:-translate-y-2 transition-all duration-500 overflow-hidden" 
                                key={item.id}
                            >
                                <div className="p-4 flex flex-col h-full">
                                    {/* Image Holder */}
                                    <div className="relative overflow-hidden aspect-[16/10] bg-[#faf9f6] border border-slate-100 flex items-center justify-center mb-5">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                                        />
                                        {/* Icon Badge overlapping top-left of image */}
                                        <span className="absolute top-3 left-3 bg-[#fec80a] text-slate-900 p-2 shadow-sm flex items-center justify-center">
                                            <IconComponent className="w-4 h-4" />
                                        </span>
                                    </div>

                                    {/* Divider Line */}
                                    <div className="border-t border-[#e5dfd3]/60 pt-4 flex flex-col flex-1">
                                        {/* Meta Row */}
                                        <div className="flex justify-between items-center text-[11px] font-sans text-slate-400 font-bold tracking-widest mb-3">
                                            <span>{item.number}</span>
                                            <span>PROJECT</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-black text-slate-900 tracking-wide uppercase mb-1 leading-tight font-sans">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-xs md:text-sm text-gray-500 font-serif leading-relaxed mb-5 line-clamp-3">
                                            {item.description}
                                        </p>

                                        {/* Action */}
                                        <div className="text-xs font-sans text-[#31b7d0] font-bold tracking-widest uppercase flex items-center gap-1.5 mt-auto hover:text-slate-900 transition-colors duration-300">
                                            GET INVOLVED <span className="text-sm">↗</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FarEast;