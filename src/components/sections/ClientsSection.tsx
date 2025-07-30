import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users } from "lucide-react";

const ClientsSection = () => {
  const clients = [
    { name: "Britannia", category: "Food & Beverages" },
    { name: "Lupin", category: "Pharmaceuticals" },
    { name: "Glenmark", category: "Pharmaceuticals" },
    { name: "Sozio", category: "Pharmaceuticals" },
    { name: "Sun Pharma", category: "Pharmaceuticals" },
    { name: "Colortek", category: "Chemicals" },
    { name: "Zetts Cosmetics", category: "Cosmetics" },
    { name: "Deepak", category: "Chemicals" },
    { name: "Gold", category: "Pharmaceuticals" },
    { name: "KF Group", category: "Manufacturing" },
    { name: "ZCL Chemicals Limited", category: "Chemicals" },
    { name: "Coromandel", category: "Fertilizers" },
    { name: "Apex Healthcare Limited", category: "Healthcare" },
    { name: "STM", category: "Manufacturing" },
    { name: "K A Malle Pharmaceuticals Ltd", category: "Pharmaceuticals" },
    { name: "RP Industries", category: "Manufacturing" },
    { name: "Samrat Pharmachem Limited", category: "Pharmaceuticals" },
    { name: "Sigachi", category: "Pharmaceuticals" },
    { name: "Siddharth Interchem", category: "Chemicals" },
    { name: "Chemcrux Enterprises Ltd", category: "Chemicals" },
    { name: "Reine Lifescience", category: "Lifesciences" },
    { name: "Surya", category: "Manufacturing" },
    { name: "Techno Drugs & Intermediates Pvt. Ltd.", category: "Pharmaceuticals" },
    { name: "VCPL", category: "Chemicals" },
    { name: "Vihita Chem Pvt. Ltd.", category: "Chemicals" },
    { name: "Prudence Pharma Chem", category: "Pharmaceuticals" },
    { name: "RPG Life Sciences Limited", category: "Lifesciences" },
    { name: "Kumar Organic Products Limited", category: "Chemicals" },
    { name: "Autocal", category: "Manufacturing" }
  ];

  const categories = [
    { name: "Pharmaceuticals", count: 12, color: "text-primary" },
    { name: "Chemicals", count: 8, color: "text-blue" },
    { name: "Manufacturing", count: 5, color: "text-primary" },
    { name: "Lifesciences", count: 2, color: "text-blue" },
    { name: "Healthcare", count: 1, color: "text-primary" },
    { name: "Food & Beverages", count: 1, color: "text-blue" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue/5 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue/10 rounded-full text-blue text-sm font-medium">
            <Users className="h-4 w-4 mr-2" />
            Our Clientele
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Trusted by Industry <span className="text-blue">Leaders</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            It is pleasure to learn & grow with leading pharmaceutical, chemical, 
            and manufacturing companies across India
          </p>

          {/* Categories Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {categories.map((category, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold ${category.color}`}>
                  {category.count}+
                </div>
                <div className="text-sm text-muted-foreground">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:from-primary/10 group-hover:to-blue/10 transition-all duration-300">
                  <div className="text-xl font-bold text-gray-400 group-hover:text-primary transition-colors">
                    {client.name.charAt(0)}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {client.category}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="bg-gradient-primary p-8 md:p-12 rounded-3xl text-center text-white mb-12">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current text-yellow-300" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6 max-w-4xl mx-auto">
            "People do not care how much you know until they know how much you care."
          </blockquote>
          
          <div className="text-lg opacity-90 font-medium">
            — TEDDY ROOSEVELT
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Join Our Growing Clientele?
            </h3>
            <p className="text-muted-foreground">
              Experience the quality and service that industry leaders trust
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="group">
              Become Our Client
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;