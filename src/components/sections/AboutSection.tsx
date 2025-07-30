import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle2,
  ArrowRight 
} from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: Target,
      value: "50+",
      label: "Crore Company Goal",
      description: "Ambitious growth plan by 2030"
    },
    {
      icon: Users,
      value: "52",
      label: "Team Members",
      description: "Skilled professionals across departments"
    },
    {
      icon: Award,
      value: "2019",
      label: "Established",
      description: "Founded by Mr. Vraj Shah"
    },
    {
      icon: TrendingUp,
      value: "Pan India",
      label: "Presence",
      description: "Footprints across multiple cities"
    }
  ];

  const highlights = [
    "Superior quality products and exceptional service",
    "State-of-the-art infrastructure and modern facilities", 
    "Commitment to excellence and customer satisfaction",
    "Comprehensive understanding of customer requirements",
    "Detailed engineering drawing and on-time delivery",
    "Familiar with current CGMP practices and regulatory compliance"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                About SR Cleanroom
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Shaping Controlled <span className="text-primary">Environment</span>
              </h2>
              
              <div className="text-xl text-muted-foreground leading-relaxed">
                SR CLEANROOM & ENGINEERING PROJECT took its first big step in 2019 when the idea was born. 
                It is the brainchild of its founder, Mr. Vraj Shah, who envisioned establishing SR as a superior 
                quality products manufacturer and service provider.
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The company has set an ambitious goal to become a Rs. 50 Crore company by 2030. 
                To realize this mission, the company has a pre-defined plan to fast track its growth 
                in terms of annual turnover and new client acquisition.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                At present, the company has established its footprints in Ankleshwar, Ahmedabad & Vadodara. 
                Today, SR family has grown to 52 team members deployed across various departments including 
                design, purchase & dispatch, finance, production, installation and sales.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="default" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-primary/5"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">
                        {achievement.value}
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {achievement.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center space-y-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Vision & Mission
            </h3>
            <div className="bg-gradient-hero p-8 md:p-12 rounded-3xl text-white">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                "Our philosophy centers around offering a wide array of superior quality products, 
                which enables us in driving customer delight. We take pride in our commitment to 
                excellence and state-of-the-art infrastructure."
              </blockquote>
              <div className="text-lg opacity-90">
                — One Vision, One Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;