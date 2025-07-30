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
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Cleanroom Equipment & Infrastructure",
      description: "Complete cleanroom solutions with advanced equipment and infrastructure products designed for maximum efficiency.",
      stats: "500+ Installations",
      color: "text-primary"
    },
    {
      icon: Wind,
      title: "HVAC Consultants & Contractors", 
      description: "Expert HVAC consulting and contracting services for optimal air quality and environmental control systems.",
      stats: "35+ Projects",
      color: "text-blue"
    },
    {
      icon: Factory,
      title: "Cleanroom Manufacturers & Contractors",
      description: "Manufacturing and contracting services for pharmaceutical, food, and industrial cleanroom applications.",
      stats: "31+ Cleanrooms",
      color: "text-primary"
    },
    {
      icon: Wrench,
      title: "Pharmaceutical Turnkey Projects",
      description: "Complete turnkey solutions for pharmaceutical manufacturing facilities with regulatory compliance.",
      stats: "20+ Turnkey",
      color: "text-blue"
    },
    {
      icon: Network,
      title: "Pre-fabricated Ductings",
      description: "High-quality prefabricated duct systems for heating, cooling, and ventilation applications.",
      stats: "1000+ Units",
      color: "text-primary"
    },
    {
      icon: Cog,
      title: "Process Equipment Manufacturing",
      description: "Custom process equipment including reactors, vessels, blenders, and specialized pharmaceutical machinery.",
      stats: "200+ Equipment",
      color: "text-blue"
    },
    {
      icon: Droplets,
      title: "Purified Water Systems",
      description: "Advanced water purification systems including RO-EDI, WFI generation, and ultrafiltration systems.",
      stats: "50+ Systems",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Comprehensive <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team has a wealth of experience with core strength in the pharmaceutical industry. 
            We provide superior quality products with exceptional service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${
                      service.color === 'text-primary' ? 'from-primary/20 to-primary/10' : 'from-blue/20 to-blue/10'
                    }`}>
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${service.color}`}>
                        {service.stats}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary/5 text-primary hover:text-primary"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground">
              Get in touch with our experts for customized solutions
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Request Consultation
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;