import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { getFeaturedDestinations } from '@/api/destination';

function TopPlaceSlider() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [destinations, setDestinations] = useState<any>([]);
	const [itemsPerView, setItemsPerView] = useState(3);

	// Fetch featured destinations
	useEffect(() => {
		const fetchDestinations = async () => {
			const data = await getFeaturedDestinations();
			setDestinations(data);
		};

		fetchDestinations();
	}, []);

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
			}, 4000); // Change slide every 4 seconds
		}

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [maxIndex]);

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
	};

	// Format index helper (e.g. 1 -> 01)
	const formatIndex = (index: number) => {
		return String(index + 1).padStart(2, '0');
	};

	// Custom taglines mapping based on destination name/title
	const getSubTitle = (title: string = '') => {
		const lower = title.toLowerCase();
		if (lower.includes('meghalaya')) return 'Cloud Country';
		if (lower.includes('arunachal')) return 'Eastern Himalaya';
		if (lower.includes('assam') || lower.includes('majuli')) return 'River Country';
		return 'Northeast Frontier';
	};

	return (
		<section className="py-24 bg-[#faf9f6]">
			<div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
				
				{/* Section Header */}
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16 px-3">
					<div className="max-w-2xl">
						<p className="text-[#31b7d0] font-bold text-xs md:text-sm tracking-widest uppercase mb-3 font-sans">
							02 - Destinations
						</p>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900 font-sans uppercase">
							Places the map <br />
							<span className="text-[#31b7d0]">forgets to name.</span>
						</h2>
					</div>
					<div className="max-w-md lg:mb-2">
						<p className="text-sm md:text-base text-gray-500 font-serif leading-relaxed">
							A handful of corners of Northeast India worth the long journey east — each one small enough to know by its first name.
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
							{destinations.map((destination: any, index: number) => (
								<div
									key={destination.id || index}
									className="min-w-0 flex-shrink-0 px-3 group"
									style={{ width: `${100 / itemsPerView}%` }}
								>
									<Link 
										to={destination.pdf || `/destination/${destination.slug}`} 
										target={destination.pdf ? '_blank' : undefined}
										className="block"
									>
										<div className="relative h-[32rem] rounded-xl overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 bg-slate-900">
											
											{/* Card Image */}
											<img
												src={destination.images?.[0]?.url || destination.image}
												alt={destination.title || destination.name}
												className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
											/>
											
											{/* Dark Gradient Overlay */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
											
											{/* Content Overlay */}
											<div className="absolute inset-0 p-8 flex flex-col justify-end text-left z-10">
												{/* Tag / Category Line */}
												<div className="flex items-center space-x-2 mb-3">
													<span className="text-[10px] md:text-xs text-[#fec80a] font-bold tracking-widest font-sans">
														{formatIndex(index)}
													</span>
													<span className="w-6 h-[1px] bg-[#fec80a]/50"></span>
													<span className="text-[10px] md:text-xs text-[#fec80a] font-bold tracking-widest uppercase font-sans">
														{getSubTitle(destination.title || destination.name)}
													</span>
												</div>

												{/* Title */}
												<h3 className="text-xl md:text-2xl font-black text-white tracking-wide uppercase mb-3 font-sans leading-tight">
													{destination.title || destination.name}
												</h3>

												{/* Description */}
												<p className="text-xs md:text-sm text-white/70 font-sans leading-relaxed line-clamp-3 font-light">
													{destination.description}
												</p>
											</div>
										</div>
									</Link>
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
}

export default TopPlaceSlider;