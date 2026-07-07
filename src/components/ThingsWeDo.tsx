import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bike, Mountain, Leaf, Compass } from 'lucide-react';

import Image1 from "@/assets/tabs/1.jpg"
import Image2 from "@/assets/tabs/2.jpg"
import Image3 from "@/assets/tabs/3.jpg"
import Image4 from "@/assets/tabs/4.jpg"
import Image5 from "@/assets/tabs/5.jpg"
import Image6 from "@/assets/tabs/6.jpg"
import Image7 from "@/assets/tabs/7.jpg"
import Image8 from "@/assets/tabs/8.jpg"
import Image9 from "@/assets/tabs/9.jpg"
import Adv1 from "@/assets/tabs/A1.jpg"
import Adv2 from "@/assets/tabs/A2.JPG"
import Adv3 from "@/assets/tabs/A3.jpg"
import Adv4 from "@/assets/tabs/A4.jpg"
import Adv5 from "@/assets/tabs/A5.jpg"
import s1 from "@/assets/tabs/s1.jpg"
import s2 from "@/assets/tabs/s2.jpg"
import s3 from "@/assets/tabs/s3.jpg"
import s4 from "@/assets/tabs/s4.jpg"
import s5 from "@/assets/tabs/s5.jpg"

const tabData = {
    cycling: [
        {
            title: "Mountain Biking",
            image: Image3,
        },
        {
            title: "Road Cycling",
            image: Image2,
        },
        {
            title: "City Ride",
            image: Image5,
        },
        {
            title: "Gravel Path",
            image: s2
        },
        {
            title: "Downhill Race",
            image: Image7
        },
        {
            title: "BMX Tricks",
            image: Image8
        },
    ],
    hiking: [
        {
            title: "Forest Trail",
            image: Image8
        },
        {
            title: "Mountain Peak",
            image: "https://www.swantour.com/blogs/wp-content/uploads/2019/01/How-to-Reach-North-East-India.jpg",
        },
        {
            title: "Coastal Walk",
            image: "https://static.wixstatic.com/media/11062b_65a97671b8d64580af34a8cd40a55e40~mv2.jpeg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_65a97671b8d64580af34a8cd40a55e40~mv2.jpeg",
        },
        {
            title: "Desert Trek",
            image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/12/North-East-India-Trekking.jpg?resize=800%2C517&ssl=1",
        },
        {
            title: "Waterfall Discovery",
            image: "https://media1.thrillophilia.com/filestore/9vo5a62jnvrpkkswa81cy7oo556k_1623305706_moderate_trek.png?w=400&dpr=2",
        },
        {
            title: "Winter Expedition",
            image: "https://unconventionalandvivid.com/wp-content/uploads/2018/07/IMG_5629-01-1024x682.jpeg",
        },
    ],
    sustainability: [
        {
            title: "Eco-friendly Stay",
            image: s1,
        },
        {
            title: "Community Work",
            image: s2,
        },
        {
            title: "Renewable Energy",
            image: s3,
        },
        {
            title: "Local Farming",
            image: s4,
        },
        {
            title: "Wildlife Conservation",
            image: s5,
        },
        {
            title: "Tree Planting",
            image: Image8,
        },
    ],
    adventure: [
        {
            title: "River Rafting",
            image: Adv1,
        },
        {
            title: "Paragliding",
            image: Adv2,
        },
        {
            title: "Kayaking",
            image: Adv3,
        },
        {
            title: "Rock Climbing",
            image: Adv4,
        },
        {
            title: "Zip Lining",
            image: Adv5,
        },
        {
            title: "Scuba Diving",
            image: s4,
        },
    ],
};

const TravelGrid = () => {
    return (
        <section className='bg-[#faf9f6] py-28 px-4'>
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
                
                {/* Header matching site layout style */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16 px-3">
                    <div className="max-w-2xl">
                        <p className="text-xs md:text-sm font-bold tracking-widest text-[#31b7d0] uppercase mb-4 font-sans">
                            03 · THINGS TO DO
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900 font-sans uppercase">
                            Active trails. <br />
                            <span className="text-[#31b7d0]">Slow travels.</span>
                        </h2>
                    </div>
                    <div className="max-w-md lg:mb-2">
                        <p className="text-sm md:text-base text-gray-500 font-serif leading-relaxed">
                            From cycling across river islands to high-altitude treks, we organize small-group explorations centered around community and environment.
                        </p>
                    </div>
                </div>

                <Tabs defaultValue="cycling" className="w-full">
                    {/* Premium tab selectors list */}
                    <TabsList className="flex flex-wrap items-center justify-start gap-3 bg-transparent mb-12 h-auto p-0 border-b border-gray-200 pb-4">
                        <TabsTrigger 
                            value="cycling" 
                            className="group px-5 py-3 text-xs font-bold tracking-widest uppercase rounded-sm border border-gray-200 bg-white text-gray-600 data-[state=active]:bg-[#fec80a] data-[state=active]:text-slate-950 data-[state=active]:border-[#fec80a] hover:bg-gray-50 transition-all duration-300"
                        >
                            <Bike className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-slate-950" />
                            Cycling
                        </TabsTrigger>
                        <TabsTrigger 
                            value="hiking" 
                            className="group px-5 py-3 text-xs font-bold tracking-widest uppercase rounded-sm border border-gray-200 bg-white text-gray-600 data-[state=active]:bg-[#fec80a] data-[state=active]:text-slate-950 data-[state=active]:border-[#fec80a] hover:bg-gray-50 transition-all duration-300"
                        >
                            <Mountain className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-slate-950" />
                            Hiking
                        </TabsTrigger>
                        <TabsTrigger 
                            value="sustainability" 
                            className="group px-5 py-3 text-xs font-bold tracking-widest uppercase rounded-sm border border-gray-200 bg-white text-gray-600 data-[state=active]:bg-[#fec80a] data-[state=active]:text-slate-950 data-[state=active]:border-[#fec80a] hover:bg-gray-50 transition-all duration-300"
                        >
                            <Leaf className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-slate-950" />
                            Sustainability
                        </TabsTrigger>
                        <TabsTrigger 
                            value="adventure" 
                            className="group px-5 py-3 text-xs font-bold tracking-widest uppercase rounded-sm border border-gray-200 bg-white text-gray-600 data-[state=active]:bg-[#fec80a] data-[state=active]:text-slate-950 data-[state=active]:border-[#fec80a] hover:bg-gray-50 transition-all duration-300"
                        >
                            <Compass className="mr-2 h-4 w-4 transition-colors group-data-[state=active]:text-slate-950" />
                            Adventure
                        </TabsTrigger>
                    </TabsList>
                    
                    {Object.entries(tabData).map(([key, items]) => (
                        <TabsContent key={key} value={key} className="focus-visible:outline-none">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {items.map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        className="relative overflow-hidden group rounded-sm aspect-[4/3] bg-slate-900 shadow-md cursor-pointer"
                                    >
                                        {/* Image */}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                        
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-90 z-10"></div>
                                        
                                        {/* Content */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                                            <h3 className="text-xl font-black text-white tracking-wide uppercase font-sans group-hover:text-[#fec80a] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <span className="text-[10px] font-bold tracking-widest text-[#31b7d0] uppercase mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
                                                Discover Experience <span className="text-xs">↗</span>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default TravelGrid;