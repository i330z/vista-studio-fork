import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Compass, ArrowRight, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDocs, where, query } from "firebase/firestore";
import { destinationRef } from "@/lib/database";

const categoryColors = {
    Adventure: "bg-[#086285] text-white border-transparent",
    Cultural: "bg-[#31b7d0] text-slate-950 border-transparent",
    Nature: "bg-[#fec80a] text-slate-950 border-transparent"
};

export default function Destinations() {
    const navigate = useNavigate();
    const [destinations, setDestinations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const q = query(destinationRef, where("isPublished", "==", true));
                const querySnapshot = await getDocs(q);
                const destinationData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setDestinations(destinationData);
            } catch (err) {
                console.error("Error fetching destinations:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 border-4 border-[#31b7d0] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-600 font-sans font-bold tracking-widest text-xs uppercase animate-pulse">Loading Destinations...</p>
            </div>
        );
    }

    if (!destinations.length) {
        return (
            <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center gap-4">
                <Compass className="w-12 h-12 text-[#31b7d0] animate-bounce" />
                <p className="text-slate-600 font-sans font-bold tracking-widest text-xs uppercase">No destinations found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#faf9f6] text-slate-900">
            {/* Hero Section matching homepage premium theme */}
            <section className="relative w-full min-h-[60vh] flex flex-col justify-center overflow-hidden text-white bg-black">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out scale-105"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/13894718/pexels-photo-13894718.jpeg')`,
                    }}
                ></div>

                {/* Overlays for high contrast and readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/45"></div>

                <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
                    <div className="max-w-4xl text-left">
                        {/* Subtitle / Tagline */}
                        <p className="text-[#fec80a] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in font-sans">
                            NORTH EAST SUSTAINABLE TOURISM - INDIA
                        </p>

                        {/* Main Title Heading */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 font-sans uppercase">
                            EXPLORE THE <br />
                            <span className="text-[#31b7d0]">DESTINATIONS.</span>
                        </h1>

                        {/* Subtext description */}
                        <p className="text-white/90 text-sm md:text-base lg:text-lg mb-8 max-w-2xl font-serif leading-relaxed font-light">
                            Discover amazing and untouched landscapes of Northeast India. We partner with local communities and guides to offer responsible, low-impact travel packages.
                        </p>

                        {/* Features Row */}
                        <div className="flex flex-wrap items-center gap-6 text-white/80">
                            <div className="flex items-center gap-2 text-xs md:text-sm font-sans font-bold tracking-wider uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-sm backdrop-blur-sm">
                                <MapPin className="h-4 w-4 text-[#31b7d0]" />
                                <span>Premium Packages</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs md:text-sm font-sans font-bold tracking-wider uppercase bg-white/5 border border-white/10 px-4 py-2 rounded-sm backdrop-blur-sm">
                                <Shield className="h-4 w-4 text-[#fec80a]" />
                                <span>Safety Assured</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Destinations Grid Section */}
            <section className="py-24 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1600px] mx-auto w-full">
                    {/* section header line */}
                    <div className="flex items-center justify-between gap-4 mb-16">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-wide uppercase font-sans flex-shrink-0">
                            OUR CURRENT <span className="text-[#31b7d0]">EXPEDITIONS.</span>
                        </h2>
                        <div className="flex-grow h-[1px] bg-slate-200"></div>
                        <span className="text-xs font-sans text-slate-400 font-bold tracking-widest uppercase flex-shrink-0">
                            {destinations.length} DESTINATIONS
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((item) => (
                            <Card
                                key={item.id}
                                className="group overflow-hidden border border-gray-200/80 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 rounded-sm flex flex-col h-full bg-white"
                            >
                                {/* Image container */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                                    <img
                                        src={item.images[0]?.url}  // Ensure the URL exists
                                        alt={item.images[0]?.alt || item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-85 z-10"></div>
                                    <div className="absolute top-4 left-4 z-20">
                                        <Badge
                                            variant="outline"
                                            className={`${categoryColors[item.category as keyof typeof categoryColors] || "bg-[#31b7d0] text-slate-950 border-transparent"} font-sans font-bold tracking-widest text-[9px] uppercase px-2.5 py-1 rounded-sm border-0`}
                                        >
                                            {item.category}
                                        </Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6 flex flex-col flex-grow text-left">
                                    {/* Location state banner */}
                                    <div className="flex items-center gap-1.5 mb-2 text-xs font-bold text-[#31b7d0] font-sans tracking-widest uppercase">
                                        <MapPin className="h-3.5 w-3.5" />
                                        <span>{item.state}</span>
                                    </div>

                                    {/* Destination Title */}
                                    <h3 className="text-2xl font-black text-slate-900 tracking-wide uppercase font-sans group-hover:text-[#31b7d0] transition-colors duration-300 mb-3 leading-tight">
                                        {item.title}
                                    </h3>

                                    {/* Destination Description */}
                                    <p className="text-sm text-gray-500 font-serif leading-relaxed mb-8 flex-grow line-clamp-3">
                                        {item.description}
                                    </p>

                                    {/* Action Button matching homepage primary CTA buttons */}
                                    <Button
                                        className="w-full bg-[#fec80a] hover:bg-[#e0b007] text-slate-950 border-0 font-extrabold py-3 text-xs tracking-widest rounded-sm uppercase transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 mt-auto"
                                        onClick={() => navigate(`/destination/${item.slug}`)}
                                    >
                                        Explore Destination <ArrowRight className="w-3.5 h-3.5" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}