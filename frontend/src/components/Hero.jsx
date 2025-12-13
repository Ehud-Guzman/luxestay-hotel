import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Award, Star, MapPin } from "lucide-react";



export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/lobby.webp",
      title: "Luxury Redefined",
      subtitle: "Experience unparalleled comfort in our premium suites"
    },
    {
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80",
      title: "Exquisite Dining",
      subtitle: "Savor world-class cuisine in our award-winning restaurants"
    },
    {
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80",
      title: "Tranquil Spa Experiences",
      subtitle: "Rejuvenate your senses with our luxury spa treatments"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden font-montserrat">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        .btn-gold {
          background: linear-gradient(45deg, #d4af37, #f0c05a);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-gold:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4);
        }
        .btn-outline {
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: scale(1.05);
        }
        .slide-transition {
          transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
        }
        .award-badge {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 slide-transition ${
            index === currentSlide ? "opacity-100 z-0 scale-100" : "opacity-0 z-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black-900/50 to-gray-900/20" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center text-center px-8">
        <div className="max-w-4xl mx-auto text-white">
          {/* Award badge */}
          <div className="flex justify-center mb-10 award-badge">
            <div className="flex items-center bg-amber-500/20 backdrop-blur-md px-6 py-3 rounded-full border border-amber-500/40">
              <Award className="h-6 w-6 mr-3 text-amber-500" />
              <span className="text-base font-medium font-montserrat text-amber-500">
                World Luxury Hotel Award 2023
              </span>
            </div>
          </div>

          {/* Title & subtitle */}
       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 tracking-wide">
  {slides[currentSlide].title}
</h1>
<p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 font-montserrat font-light">
  {slides[currentSlide].subtitle}
</p>


          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-gold text-gray-900 px-10 py-4 rounded-lg font-montserrat font-semibold text-lg shadow-xl">
              Book Your Stay
            </button>
            <button className="btn-outline border-2 border-white text-white px-10 py-4 rounded-lg font-montserrat font-semibold text-lg flex items-center">
              <Play className="h-5 w-5 mr-3" />
              Discover More
            </button>
          </div>

          {/* Additional info */}
          <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-8 md:gap-12 text-sm font-montserrat">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-amber-500 mr-2" />
              <span>5-Star Luxury Resort</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-amber-500 mr-2" />
              <span>Breathtaking Ocean Views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 z-30 -translate-y-1/2 p-4 rounded-full bg-gray-900/60 text-amber-500 hover:bg-gray-900/80 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 z-30 -translate-y-1/2 p-4 rounded-full bg-gray-900/60 text-amber-500 hover:bg-gray-900/80 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-amber-500 scale-125" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}