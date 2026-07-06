import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Up1 from "@/assets/upcoming/up1.jpeg";
import Up2 from "@/assets/upcoming/up2.jpeg";
import Up3 from "@/assets/upcoming/up3.jpeg";
import Up4 from "@/assets/upcoming/up4.jpeg";

const destinations = [
	{
		id: 1,
		name: "Biodiversity Meet",
		title: "BIODIVERSITY MEET",
		number: "01",
		tag: "CONSERVATION",
		tagBg: "bg-[#fec80a]",
		date: "12 - 15 FEB 2026",
		location: "SHILLONG · MEGHALAYA",
		description: "A gathering of conservationists, researchers, and community leaders to discuss the unique flora and fauna of the Northeast.",
		image: Up1,
	},
	{
		id: 2,
		name: "EagleNest Bird",
		title: "EAGLENEST BIRD FESTIVAL",
		number: "02",
		tag: "WILDLIFE",
		tagBg: "bg-[#fec80a]",
		date: "COMING SOON 2026",
		location: "EAGLENEST WLS · ARUNACHAL PRADESH",
		description: "A slow migration through cloud-forest trails with birders, red pandas and the hornbill's morning call.",
		image: Up2,
	},
	{
		id: 3,
		name: "Pakke Paga Hornbill",
		title: "PAKKE PAGA HORNBILL FESTIVAL",
		number: "03",
		tag: "CULTURE",
		tagBg: "bg-[#fec80a]",
		date: "18 - 20 JAN 2026",
		location: "SEIJOSA · ARUNACHAL PRADESH",
		description: "Nyishi community, conservationists and travellers gather to celebrate the great hornbill and its forests.",
		image: Up3,
	},
	{
		id: 4,
		name: "Honoring Heroes",
		title: "63RD WALONG DAY",
		number: "04",
		tag: "HERITAGE",
		tagBg: "bg-[#fec80a]",
		date: "22 OCT - 16 NOV 2025",
		location: "WALONG, ANJAW · ARUNACHAL PRADESH",
		description: "A quiet tribute to the soldiers of 1962, walked through the Lohit valley alongside local hosts.",
		image: Up4,
	},
];

export const TopDestinationsSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerView, setItemsPerView] = useState(3);

	// Handle responsive items per view
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setItemsPerView(1);
			} else if (window.innerWidth < 1024) {
				setItemsPerView(2);
			} else {
				setItemsPerView(3);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const maxIndex = Math.max(0, destinations.length - itemsPerView);

	// Auto-loop logic
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (maxIndex > 0) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
			}, 3500); // Change slide every 3.5 seconds
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [maxIndex]);

	useEffect(() => {
		if (currentIndex > maxIndex) {
			setCurrentIndex(maxIndex);
		}
	}, [maxIndex, currentIndex]);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
	};

	return (
		<section className="py-24 bg-[#f7f4eb]">
			<div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
				{/* Section Header */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 px-3">
					<div className="max-w-xl">
						<p className="text-xs md:text-sm font-bold tracking-widest text-[#31b7d0] uppercase mb-3 font-sans">
							ON NOW · NORTHEAST
						</p>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900 font-sans uppercase">
							Upcoming Events <br />
							& Activities.
							<span className="block w-12 h-1.5 bg-[#fec80a] mt-3"></span>
						</h2>
					</div>
					<div className="max-w-md md:mb-2">
						<p className="text-sm md:text-base text-gray-500 font-serif leading-relaxed">
							Festivals, remembrance days and field gatherings across the seven sisters — the short list worth planning a trip around.
						</p>
					</div>
				</div>

				{/* Slider Area */}
				<div className="relative px-3">
					<div className="overflow-hidden py-4">
						<div
							className="flex transition-transform duration-500 ease-in-out gap-0"
							style={{
								transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
							}}
						>
							{destinations.map((destination) => (
								<div
									key={destination.id}
									className="min-w-0 flex-shrink-0 px-3 group"
									style={{ width: `${100 / itemsPerView}%` }}
								>
									<Card className="flex flex-col h-full bg-white border border-[#e5dfd3] hover:border-[#31b7d0] shadow-none hover:shadow-lg transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden rounded-none">
										<div className="p-4 flex flex-col h-full bg-white">
											{/* Framed Image Container */}
											<div className="relative overflow-hidden aspect-[4/5] bg-[#faf9f6] border border-slate-100 flex items-center justify-center">
												<img
													src={destination.image}
													alt={destination.name}
													className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
												/>
												{/* Tag/Badge overlapping top-left of the image */}
												<span className={`absolute top-3 left-3 ${destination.tagBg} text-slate-900 text-[10px] font-black tracking-widest uppercase px-3 py-1 shadow-sm rounded-none`}>
													{destination.tag}
												</span>
											</div>

											{/* Divider Line */}
											<div className="border-t border-slate-100 mt-5 pt-4 flex flex-col flex-1">
												{/* Meta Row */}
												<div className="flex justify-between items-center text-[11px] font-sans text-slate-400 font-bold tracking-widest mb-3">
													<span>{destination.number}</span>
													<span>{destination.date}</span>
												</div>

												{/* Title */}
												<h3 className="text-xl font-black text-slate-900 tracking-wide uppercase mb-1 leading-tight font-sans">
													{destination.title}
												</h3>

												{/* Location */}
												<p className="text-[11px] font-sans text-[#31b7d0] font-bold tracking-widest uppercase mb-4">
													{destination.location}
												</p>

												{/* Description */}
												<p className="text-xs md:text-sm text-gray-500 font-serif leading-relaxed mb-5 line-clamp-3">
													{destination.description}
												</p>

												{/* Action */}
												<div className="text-xs font-sans text-[#31b7d0] font-bold tracking-widest uppercase flex items-center gap-1.5 mt-auto group-hover:text-slate-900 transition-colors duration-300">
													JOIN THIS TRIP <span className="text-sm">↗</span>
												</div>
											</div>
										</div>
									</Card>
								</div>
							))}
						</div>
					</div>

					{/* Slider Navigation Buttons */}
					{maxIndex > 0 && (
						<>
							<Button
								variant="outline"
								size="icon"
								className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-slate-200 text-slate-800 hover:bg-[#31b7d0] hover:text-white hover:border-[#31b7d0] z-10 shadow-md transition-all duration-300"
								onClick={prevSlide}
								disabled={currentIndex === 0}
							>
								<ChevronLeft className="h-5 w-5" />
							</Button>

							<Button
								variant="outline"
								size="icon"
								className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-slate-200 text-slate-800 hover:bg-[#31b7d0] hover:text-white hover:border-[#31b7d0] z-10 shadow-md transition-all duration-300"
								onClick={nextSlide}
								disabled={currentIndex === maxIndex}
							>
								<ChevronRight className="h-5 w-5" />
							</Button>
						</>
					)}
				</div>
			</div>
		</section>
	);
};