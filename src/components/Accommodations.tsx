import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

const accommodations = [
  {
    id: 1,
    title: "Camping & Rentals",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Wilderness_Adventure_Camps.jpg",
    description: "Experience the great outdoors with our premium camping equipment and scenic locations"
  },
  {
    id: 2,
    title: "Homestays",
    image: "https://ik.imagekit.io/bbhed67kj/wp-content/uploads/2022/10/Luxury-Sakleshpur-Homestay-Near-Waterfalls-1.jpg",
    description: "Indulge in world-class amenities and breathtaking views at our partner resorts"
  },
  {
    id: 3,
    title: "Resorts & Hotels",
    image: "https://www.orchidhotel.com/static/website/img/hotels/panchgani/homepage_slider/homepage_slider.webp",
    description: "Connect with local culture through our carefully selected homestay experiences"
  },
  {
    id: 4,
    title: "Zostels",
    image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201810121132474064-f2138dc0b69c11e882cb0204e80e7934.jpg",
    description: "Connect with local culture through our carefully selected homestay experiences"
  }
];

export const Accommodations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <SectionTitle title="Accommodations" subtitle="Find your perfect home away from home" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {accommodations.map((accommodation) => (
            <Card
              key={accommodation.id}
              className="group overflow-hidden border-0  transition-all duration-500 hover:-translate-y-3"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img
                  src={accommodation.image}
                  alt={accommodation.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {accommodation.title}
                </h3>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {accommodation.description}
                </p>
                {/* <Button 
                  variant="outline" 
                  className="w-full border-travel-ocean text-travel-ocean hover:bg-travel-ocean hover:text-white group-hover:scale-105 transition-all duration-300"
                >
                  Explore Options
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/stay">
            <Button variant="travel" size="lg" className="px-8 bg-yellow-300 hover:bg-yellow-400 text-black uppercase tracking-wider">
              View All Stays
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};