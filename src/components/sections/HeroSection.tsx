import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-cleanroom.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern Cleanroom Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                50+ Successful Projects Completed
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">CONTAMINATION</span>
                <span className="block">CONTROL</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  PROJECTS CO.
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-200 font-medium">
                Pharmaceuticals | Hospitals | Chemicals | Food & Beverages
              </div>
              
              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                Leading provider of cleanroom solutions and contamination control systems. 
                We deliver superior quality products and exceptional service with state-of-the-art 
                infrastructure and commitment to excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Get Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-foreground">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-glow">35+</div>
                <div className="text-sm text-gray-300">HVAC Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-light">31+</div>
                <div className="text-sm text-gray-300">Cleanroom Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-glow">50+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-light">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>

          {/* Right side - could add additional content or keep as visual space */}
          <div className="hidden lg:block">
            {/* Optional: Add floating cards or additional visual elements */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
