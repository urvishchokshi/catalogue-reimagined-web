import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Wind, 
  Factory, 
  Wrench, 
  Network, 
  Cog, 
  Droplets,
  CheckCircle2,
  ArrowRight,
  Download
} from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Comprehensive <span className="text-primary-glow">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            From cleanroom equipment to pharmaceutical turnkey projects, 
            we provide end-to-end contamination control solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
              <Download className="h-5 w-5 mr-2" />
              Download Brochure
            </Button>
            <Button variant="hero" size="lg">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const DetailedServicesSection = () => {
  const serviceDetails = [
    {
      icon: Building2,
      title: "Cleanroom Equipment & Infrastructure",
      description: "Complete cleanroom solutions including passbox, LAF/RLAF, fumehood, lab furniture, air shower, and bio safety cabinets.",
      features: [
        "Passbox Systems",
        "LAF / RLAF Units", 
        "Fumehood Installation",
        "Lab Furniture",
        "Air Shower Systems",
        "Bio Safety Cabinets"
      ],
      stats: "500+ Installations",
      color: "primary"
    },
    {
      icon: Wind,
      title: "HVAC Consultants & Contractors",
      description: "Leading manufacturers and suppliers of Air Handling Units (AHU) with comprehensive HVAC consulting services.",
      features: [
        "AHU Manufacturing",
        "Utility Piping",
        "HVAC Turnkey Projects", 
        "Ducting Works",
        "Insulation Works",
        "System Commissioning"
      ],
      stats: "35+ Projects",
      color: "blue"
    },
    {
      icon: Factory,
      title: "Cleanroom Manufacturers & Contractors",
      description: "Scientific doors and windows preferred by leading pharmaceutical and food companies for clean room applications.",
      features: [
        "Cleanroom Wall Panels",
        "Cleanroom Ceiling Panels",
        "View Panels",
        "Cleanroom Light Fixtures",
        "Cleanroom Doors",
        "Complete Installation"
      ],
      stats: "31+ Cleanrooms",
      color: "primary"
    },
    {
      icon: Wrench,
      title: "Pharmaceutical Turnkey Projects",
      description: "Domain expertise in handling prestigious projects with turnkey installation services and regulatory compliance.",
      features: [
        "Cleanroom Design",
        "HVAC Design", 
        "Project Management Services",
        "Regulatory Compliance Design",
        "Utilities Design",
        "Complete Installation"
      ],
      stats: "20+ Turnkey",
      color: "blue"
    },
    {
      icon: Network,
      title: "Pre-fabricated Ductings",
      description: "High-quality prefabricated ducts with MS angles for commercial, institutional and residential buildings.",
      features: [
        "Galvanized Iron Ducts",
        "UV Stabilized Plastic Ducts",
        "Stainless Steel Ducts", 
        "Fabric Ducts",
        "Custom Fabrication",
        "Quality Assurance"
      ],
      stats: "1000+ Units",
      color: "primary"
    },
    {
      icon: Cog,
      title: "Process Equipment Manufacturing",
      description: "Manufacturing of pharmaceutical process equipment including reactors, vessels, blenders and specialized machinery.",
      features: [
        "Reactors & Vessels",
        "Blenders and Sifters",
        "Dryers",
        "Tablet & Capsule Lines",
        "External Preparation Formulation Lines",
        "Custom Equipment"
      ],
      stats: "200+ Equipment",
      color: "blue"
    },
    {
      icon: Droplets,
      title: "Purified Water Systems",
      description: "Advanced water purification systems providing reliable solutions for high purity water and clean utilities.",
      features: [
        "Purified Water Generation",
        "RO-EDI Systems",
        "Purified Water Storage & Distribution",
        "WFI Generation, Storage & Distribution", 
        "Ultrafiltration Systems",
        "System Validation"
      ],
      stats: "50+ Systems",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {serviceDetails.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${
                      service.color === 'primary' ? 'from-primary/20 to-primary/10' : 'from-blue/20 to-blue/10'
                    }`}>
                      <Icon className={`h-8 w-8 ${service.color === 'primary' ? 'text-primary' : 'text-blue'}`} />
                    </div>
                    <div className={`text-sm font-bold ${service.color === 'primary' ? 'text-primary' : 'text-blue'}`}>
                      {service.stats}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="default" className="group">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="bg-gradient-section border-0 p-8">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                        <Icon className={`h-24 w-24 ${service.color === 'primary' ? 'text-primary' : 'text-blue'} opacity-20`} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServiceHero />
        <DetailedServicesSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;