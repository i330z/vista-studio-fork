import { Navigation } from "@/components/Navigation";
import HeroSection from "@/components/NewHeroSection";
import { TopDestinationsSlider } from "@/components/TopDestinationsSlider";
import { AboutCompany } from "@/components/AboutCompany";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { TourPackages } from "@/components/TourPackages";
import { Accommodations } from "@/components/Accommodations";
import { ExperienceGallery } from "@/components/ExperienceGallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { TopDestinationsShowcase } from "@/components/TopDestinationsShowcase";
import { Footer } from "@/components/Footer";
import { Blog } from "@/components/Blog";
import WhatWeDo from "@/components/WhatWeDo";
import Adventure from "@/components/Adventure";
import ChatCTA from "@/components/ChatCta";
import Why from "@/components/Why"
import TopPlaceSlider from "@/components/TopPlaceSlider";
import OurTeam from "@/components/OurTeam";
import TravelGrid from "@/components/NewGrid";
import ThingsWeDo from "@/components/ThingsWeDo";
import Gallery from "@/components/Gallery";



const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <HeroSection />
      <ChatCTA />
      <TopDestinationsSlider />
      <WhatWeDo />
      <TopPlaceSlider />
      {/* <Adventure /> */}
      {/* <TravelGrid/> */}
      <ThingsWeDo />
      <OurTeam />
      <Gallery />
      {/* <TopDestinationsSlider /> */}
      {/* <AboutCompany /> */}
      {/* <WhatWeOffer /> */}
      {/* <TourPackages /> */}
      <Accommodations />
      <Why />
      <Blog />
      {/* <ExperienceGallery /> */}
      {/* <WhyChooseUs /> */}
      {/* <Testimonials /> */}
      <CallToAction />
      {/* <TopDestinationsShowcase /> */}

    </div>
  );
};

export default Index;
