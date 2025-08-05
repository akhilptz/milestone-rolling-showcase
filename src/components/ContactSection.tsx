import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContactMethod {
  title: string;
  value: string;
  icon: string;
  href: string;
  type: 'phone' | 'email' | 'whatsapp';
}

const contactMethods: ContactMethod[] = [
  {
    title: "Phone",
    value: "+91 7012491144",
    icon: "📞",
    href: "tel:+917012491144",
    type: 'phone'
  },
  {
    title: "Email", 
    value: "info@milestonecp.com",
    icon: "📧",
    href: "mailto:info@milestonecp.com",
    type: 'email'
  },
  {
    title: "WhatsApp",
    value: "+91 7012491144", 
    icon: "💬",
    href: "https://wa.me/917012491144?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
    type: 'whatsapp'
  }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange to-primary bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for career guidance and support. We're here to help you achieve your dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-white to-secondary/30 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-8 text-center relative">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" 
                     style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-lg" />
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:animate-bounce">
                    {method.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-orange transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  {/* Value */}
                  <p className="text-muted-foreground mb-6 group-hover:text-foreground transition-colors duration-300">
                    {method.value}
                  </p>
                  
                  {/* CTA Button */}
                  <Button 
                    asChild
                    variant="outline"
                    className="group-hover:bg-gradient-to-r group-hover:from-orange group-hover:to-primary group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  >
                    <a href={method.href} target={method.type === 'whatsapp' ? '_blank' : undefined}>
                      Contact {method.type === 'whatsapp' ? 'via WhatsApp' : method.type === 'email' ? 'via Email' : 'Now'}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-br from-white to-secondary/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Office</h3>
              <div className="text-muted-foreground space-y-2">
                <p>8B, Sunparul Blueberry Dezira</p>
                <p>Infopark Express way, Kakkanad</p>
                <p>Kerala 682039</p>
                <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-border">
                  <span className="flex items-center space-x-2">
                    <span>📞</span>
                    <span>+91 9074953258</span>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};