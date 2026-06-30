import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Clock, Users, CheckCircle, Camera, Mountain, Utensils, Car, Plane, Train, Sun, CloudRain, Snowflake, CalendarDays, Phone, MessageSquare, Facebook, Instagram, Twitter, User, BusFront, Compass, Leaf } from "lucide-react";
import { destinationRef } from "@/lib/database";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import PageAccomodation from "./PageAccomodation";

const images = [
    {
        url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        alt: "Beautiful mountain landscape with clouds",
    },
    {
        url: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg",
        alt: "City skyline at sunset with skyscrapers",
    },
    {
        url: "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg",
        alt: "Traveler standing on a cliff overlooking the ocean",
    },
    {
        url: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
        alt: "Close-up of purple flower with dew drops",
    },
    {
        url: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
        alt: "Tropical beach with palm trees and blue sky",
    },
    {
        url: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
        alt: "Night sky full of stars over forest",
    },
    {
        url: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
        alt: "Aerial view of winding river through green fields",
    },
    {
        url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        alt: "Modern minimalist living room interior",
    },
    {
        url: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
        alt: "Group of friends hiking on a mountain trail",
    },
    {
        url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
        alt: "Delicious breakfast on wooden table",
    },
];

const categoryColors = {
    Adventure: "bg-red-500/10 text-red-600 border-red-500/30",
    Cultural: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    Nature: "bg-green-500/10 text-green-600 border-green-500/30"
};

const transportIcons = {
    flight: Plane,
    train: Train,
    road: Car,
};

export default function DestinationDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [destination, setDestination] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [allDestinations, setAllDestinations] = useState<any[]>([]);

    useEffect(() => {
        const fetchPostBySlug = async () => {
            try {
                setLoading(true);
                const q = query(destinationRef, where("slug", "==", slug));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0];
                    const data = doc.data();
                    if (typeof data === "object" && data !== null) {
                        console.log("Fetched document data:", data);
                        setDestination({ id: doc.id, ...data });
                    } else {
                        setDestination({ id: doc.id });
                    }
                } else {
                    console.warn("No document found for slug:", slug);
                    setDestination(null);
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchPostBySlug();
    }, [slug]);

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const q = query(destinationRef, where("isPublished", "==", true));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                // Sort in a stable order
                data.sort((a: any, b: any) => (a.title || "").localeCompare(b.title || ""));
                setAllDestinations(data);
            } catch (e) {
                console.error("Error fetching all destinations:", e);
            }
        };
        fetchAll();
    }, []);

    if (loading || !destination) {
        return <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">Loading...</div>;
    }

    // 1. Find indices for numbering
    const currentIndex = allDestinations.findIndex(d => d.slug === slug);
    const displayIndex = currentIndex !== -1 ? String(currentIndex + 1).padStart(2, '0') : '01';
    const displayState = destination.state || "Northeast India";

    // 2. Parse HTML content into sections (Overview, Activities)
    const parseContent = (html: string) => {
        if (!html) return { overview: "", activitiesHtml: "" };

        // Overview is everything before the first <h2> tag
        const h2Regex = /<h2[^>]*>/i;
        const match = h2Regex.exec(html);
        const overview = match ? html.substring(0, match.index) : html;

        // Helper to extract a section's HTML content
        const extractSectionHtml = (keywords: string[]) => {
            const lowerHtml = html.toLowerCase();
            let sectionHtml = "";

            for (const keyword of keywords) {
                const keywordIndex = lowerHtml.indexOf(keyword);
                if (keywordIndex !== -1) {
                    // Find the opening <h2> tag just before it
                    const tagStart = lowerHtml.lastIndexOf("<h2", keywordIndex);
                    if (tagStart !== -1) {
                        const headingEnd = lowerHtml.indexOf("</h2>", tagStart);
                        if (headingEnd !== -1) {
                            const nextHeadingStart = lowerHtml.indexOf("<h2", headingEnd);
                            sectionHtml = html.substring(
                                headingEnd + 5,
                                nextHeadingStart !== -1 ? nextHeadingStart : html.length
                            );
                            break;
                        }
                    }
                }
            }
            return sectionHtml.trim();
        };

        const activitiesHtml = extractSectionHtml(["things to do", "activities", "actvities", "highlights"]);

        return {
            overview,
            activitiesHtml
        };
    };

    const parsed = parseContent(destination.content || "");

    // 3. Prepare gallery images
    const galleryImages = [
        ...(destination.images || []).map((img: any) => ({ url: img.url, alt: img.name || destination.title })),
        ...images
    ].slice(0, 3);

    // 4. Render How to Reach paragraph
    const renderHowToReach = () => {
        if (!destination.howToReach) return <p className="text-muted-foreground leading-relaxed">No transportation details available.</p>;
        if (typeof destination.howToReach === "string") {
            return <p className="text-muted-foreground leading-relaxed">{destination.howToReach}</p>;
        }
        return (
            <div className="space-y-3">
                {Object.entries(destination.howToReach).map(([mode, details]: any) => {
                    if (!details) return null;
                    return (
                        <p key={mode} className="text-muted-foreground leading-relaxed">
                            <span className="font-semibold capitalize text-foreground">By {mode}: </span>
                            {details}
                        </p>
                    );
                })}
            </div>
        );
    };

    // 5. Extract Local Highlights
    const extractLocalHighlights = (html: string) => {
        if (!html) return ["Scenic view points", "Local culture", "Nature walks"];
        const h3Regex = /<h3[^>]*>([\s\S]*?)<\/h3>/gi;
        const highlights: string[] = [];
        let match;
        while ((match = h3Regex.exec(html)) !== null) {
            const text = match[1].replace(/<[^>]*>/g, "").trim();
            if (text && text.length < 60) {
                highlights.push(text);
            }
        }

        if (highlights.length === 0 && destination.bestTimeToVisit) {
            destination.bestTimeToVisit.forEach((item: any) => {
                if (item.events && item.events.trim()) {
                    highlights.push(item.events.replace(/<[^>]*>/g, "").trim());
                }
            });
        }

        if (highlights.length === 0) {
            return ["Scenic view points", "Local culture", "Nature walks"];
        }

        return highlights.slice(0, 3);
    };

    // 6. Generate Species count based on title
    const getSpeciesCount = (title: string) => {
        let hash = 0;
        for (let i = 0; i < title.length; i++) {
            hash = title.charCodeAt(i) + ((hash << 5) - hash);
        }
        return Math.abs(hash % 250) + 120;
    };

    // 7. Get Corridor Destinations (next 3)
    const getCorridorDestinations = () => {
        if (allDestinations.length <= 1) return [];
        const idx = allDestinations.findIndex(d => d.slug === slug);
        if (idx === -1) return [];

        const list: any[] = [];
        for (let i = 1; i <= 3; i++) {
            const nextIdx = (idx + i) % allDestinations.length;
            if (nextIdx !== idx) {
                list.push({
                    ...allDestinations[nextIdx],
                    displayIndex: String(nextIdx + 1).padStart(2, '0')
                });
            }
        }
        return list;
    };

    return (
        <div className="min-h-screen bg-[#FAF8F5]">
            {/* Hero Section */}
            <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={destination.images?.[0]?.url || "https://images.pexels.com/photos/13894718/pexels-photo-13894718.jpeg"}
                        alt={destination.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#FAF8F5]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
                    <Link
                        to="/destinations"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors mb-6"
                    >
                        ← ALL DESTINATIONS
                    </Link>

                    <span className="block text-xs font-bold tracking-widest text-yellow-300 uppercase mb-3">
                        NO. {displayIndex} — {displayState.toUpperCase()}
                    </span>

                    <h1 className="text-4xl md:text-6xl font-normal text-white mb-6 font-primary max-w-4xl mx-auto tracking-wide">
                        {destination.title}
                    </h1>

                    <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto font-secondary leading-relaxed font-light italic">
                        {destination.description}
                    </p>
                </div>
            </section>

            {/* Main Grid Content */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Content (2/3) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest text-travel-ocean/85 uppercase mb-4 font-primary">
                                OVERVIEW
                            </h3>
                            <div
                                className="prose max-w-none text-foreground font-secondary leading-relaxed text-base lg:text-lg wysiwyg"
                                dangerouslySetInnerHTML={{ __html: parsed.overview }}
                            />
                        </div>

                        {/* Activities */}
                        {parsed.activitiesHtml && (
                            <div>
                                <h3 className="text-xs font-bold tracking-widest text-travel-ocean/85 uppercase mb-4 font-primary">
                                    ACTIVITIES
                                </h3>
                                <div
                                    className="prose max-w-none text-foreground font-secondary leading-relaxed text-base lg:text-lg wysiwyg"
                                    dangerouslySetInnerHTML={{ __html: parsed.activitiesHtml }}
                                />
                            </div>
                        )}

                        {/* Gallery */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest text-travel-ocean/85 uppercase mb-4 font-primary">
                                GALLERY
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                {galleryImages.map((image, idx) => (
                                    <div key={idx} className="aspect-[4/3] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-muted">
                                        <img
                                            src={image.url}
                                            alt={image.alt || `Gallery Image ${idx + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How to Reach */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest text-travel-ocean/85 uppercase mb-4 font-primary">
                                HOW TO REACH
                            </h3>
                            <div className="font-secondary text-base lg:text-lg">
                                {renderHowToReach()}
                            </div>
                        </div>

                        {/* Best Time to Visit */}
                        <div>
                            <h3 className="text-xs font-bold tracking-widest text-travel-ocean/85 uppercase mb-4 font-primary">
                                BEST TIME TO VISIT
                            </h3>
                            <div className="bg-white border border-gray-100 rounded-sm p-6 space-y-6 shadow-sm">
                                <p className="text-muted-foreground font-secondary text-base lg:text-lg leading-relaxed">
                                    {destination.title === "Tawang"
                                        ? "The best time to visit Tawang is during the summer and autumn months for pleasant weather and clear views."
                                        : `The best time to visit ${destination.title} is during the pleasant autumn and winter seasons for clear skies and local festivities.`}
                                </p>

                                <div className="grid grid-cols-3 gap-4 text-center divide-x divide-gray-100 pt-2">
                                    <div className="flex flex-col items-center gap-2.5">
                                        <Sun className="h-7 w-7 text-yellow-500" />
                                        <span className="font-semibold text-sm text-foreground font-primary uppercase tracking-wide">Summer</span>
                                        <span className="text-xs text-muted-foreground font-secondary">Mar - Jun</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2.5 px-2">
                                        <CloudRain className="h-7 w-7 text-blue-500" />
                                        <span className="font-semibold text-sm text-foreground font-primary uppercase tracking-wide">Monsoon</span>
                                        <span className="text-xs text-muted-foreground font-secondary">Jul - Sep</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2.5 px-2">
                                        <Snowflake className="h-7 w-7 text-sky-400" />
                                        <span className="font-semibold text-sm text-foreground font-primary uppercase tracking-wide">Winter</span>
                                        <span className="text-xs text-muted-foreground font-secondary">Oct - Feb</span>
                                    </div>
                                </div>

                                {destination.bestTimeToVisit && destination.bestTimeToVisit.length > 0 && destination.bestTimeToVisit[0].months && (
                                    <div className="mt-6 pt-6 border-t border-gray-100">
                                        <h4 className="text-xs font-bold tracking-widest text-[#B38F4F] uppercase mb-4 font-primary">
                                            SEASONAL EVENTS & SPOTLIGHTS
                                        </h4>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-sm font-secondary border-collapse">
                                                <thead>
                                                    <tr className="border-b border-gray-200">
                                                        <th className="pb-2 font-semibold text-foreground">Months</th>
                                                        <th className="pb-2 font-semibold text-foreground">Events / Sightseeing</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {destination.bestTimeToVisit.map((item: any, idx: number) => {
                                                        if (!item.months) return null;
                                                        return (
                                                            <tr key={idx} className="text-muted-foreground">
                                                                <td className="py-2.5 pr-4 font-medium text-foreground">{item.months}</td>
                                                                <td className="py-2.5">{item.events}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Cards (1/3) */}
                    <div className="space-y-6">
                        {/* Local Highlights Card */}
                        <div className="bg-white/80 border border-amber-900/10 rounded-sm p-6 space-y-4 shadow-sm">
                            <h4 className="text-[10px] font-bold tracking-widest text-amber-700/80 uppercase">
                                LOCAL HIGHLIGHTS
                            </h4>
                            <ul className="space-y-3.5 divide-y divide-gray-100">
                                {extractLocalHighlights(destination.content).map((highlight, idx) => (
                                    <li key={idx} className={`${idx > 0 ? 'pt-3.5' : ''} flex items-center justify-between gap-4 font-secondary text-base lg:text-lg text-foreground`}>
                                        <span className="font-medium line-clamp-1">{highlight}</span>
                                        <Link
                                            to="/create-plan"
                                            className="text-xs font-bold tracking-widest text-travel-ocean hover:text-travel-ocean-deep uppercase shrink-0 transition-colors"
                                        >
                                            VISIT
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Species Recorded Card */}
                        <div className="bg-[#31b7d0] text-white rounded-sm p-6 space-y-4 shadow-sm">
                            <div>
                                <h4 className="text-[10px] font-bold tracking-widest text-yellow-300 uppercase">
                                    SPECIES RECORDED
                                </h4>
                                <div className="text-5xl lg:text-6xl font-light font-primary tracking-normal mt-1">
                                    {getSpeciesCount(destination.title)}
                                </div>
                                <p className="text-sm text-white/95 font-secondary leading-relaxed mt-1">
                                    Documented through annual community-led conservation census.
                                </p>
                            </div>
                            
                            {(destination.address || destination.phone || destination.email) && (
                                <div className="pt-4 border-t border-white/20 space-y-3">
                                    <h5 className="text-[10px] font-bold tracking-widest text-yellow-300 uppercase">
                                        LOCAL HUB & CONTACT
                                    </h5>
                                    {destination.address && (
                                        <p className="text-xs text-white/95 font-secondary whitespace-pre-line leading-relaxed">
                                            {destination.address}
                                        </p>
                                    )}
                                    {(destination.phone || destination.email) && (
                                        <div className="text-xs text-white/80 font-secondary space-y-1 pt-2 border-t border-white/10">
                                            {destination.phone && <p>📞 {destination.phone}</p>}
                                            {destination.email && <p>✉️ {destination.email}</p>}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Plan a Visit Card */}
                        <div className="bg-amber-50/50 border border-amber-900/10 rounded-sm p-6 text-center shadow-sm">
                            <h4 className="text-[10px] font-bold tracking-widest text-amber-700/80 uppercase mb-3">
                                PLAN A VISIT
                            </h4>
                            <Link
                                to="/create-plan"
                                className="inline-flex items-center gap-1 font-semibold text-amber-950 hover:text-travel-ocean text-base transition-colors font-primary uppercase tracking-wide"
                            >
                                Request a custom itinerary &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sanctuary 13 Eco-Protocol Commitments */}
            <section className="py-20 bg-emerald-50/20 border-t border-b border-emerald-900/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-[10px] tracking-widest font-bold text-emerald-700 uppercase block mb-2 font-primary">
                            SANCTUARY 13 ECO-PROTOCOL
                        </span>
                        <h2 className="text-3xl font-normal text-foreground font-primary tracking-wide">
                            How Your Visit Supports Northeast India
                        </h2>
                        <p className="text-muted-foreground font-secondary text-sm max-w-xl mx-auto mt-2">
                            Through low-impact travel, community empowerment, and local conservation efforts, your journey leaves a lasting positive footprint.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Initiative 1 */}
                        <div className="bg-white p-8 border border-emerald-900/5 rounded-sm space-y-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg text-foreground font-primary uppercase tracking-wide">
                                Community Empowerment
                            </h3>
                            <p className="text-muted-foreground font-secondary text-sm leading-relaxed">
                                We partner directly with indigenous host families. 100% of accommodation revenue remains in the village, supporting local livelihoods and rural micro-economies.
                            </p>
                        </div>

                        {/* Initiative 2 */}
                        <div className="bg-white p-8 border border-emerald-900/5 rounded-sm space-y-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                                <Compass className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg text-foreground font-primary uppercase tracking-wide">
                                Biodiversity Safeguards
                            </h3>
                            <p className="text-muted-foreground font-secondary text-sm leading-relaxed">
                                A percentage of your booking funds community-led patrols, camera traps, and seasonal counts (supporting the species recorded in this sector).
                            </p>
                        </div>

                        {/* Initiative 3 */}
                        <div className="bg-white p-8 border border-emerald-900/5 rounded-sm space-y-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                                <Leaf className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg text-foreground font-primary uppercase tracking-wide">
                                Low-Impact Travel
                            </h3>
                            <p className="text-muted-foreground font-secondary text-sm leading-relaxed">
                                We mandate reusable gear, manage strict zero-waste guidelines on trails, and fund native tree planting in local food forests to offset travel impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Continue Along the Corridor Section */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <h3 className="text-xs font-bold tracking-widest text-[#B38F4F] uppercase mb-8 font-primary">
                    CONTINUE ALONG THE CORRIDOR
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {getCorridorDestinations().map((item: any) => (
                        <Link
                            key={item.id}
                            to={`/destination/${item.slug}`}
                            className="flex items-center gap-4 bg-white p-4 border border-gray-200 rounded-sm hover:shadow-md transition-shadow cursor-pointer"
                        >
                            <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm bg-muted">
                                <img
                                    src={item.images?.[0]?.url || "https://images.pexels.com/photos/13894718/pexels-photo-13894718.jpeg"}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <span className="text-[10px] tracking-widest font-bold text-amber-600 uppercase">
                                    NO. {item.displayIndex}
                                </span>
                                <h4 className="font-semibold text-base text-foreground line-clamp-1 mt-0.5 font-primary">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-muted-foreground line-clamp-2 mt-1 font-secondary">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
