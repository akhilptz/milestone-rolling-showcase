import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'Career Consultation',
    'Job Placement', 
    'Skill Development',
    'Financial Planning'
  ];

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: '💼',
      href: 'https://www.linkedin.com/company/milestone-career-planner',
      color: 'hover:text-blue-600'
    },
    {
      platform: 'Instagram', 
      icon: '📷',
      href: 'https://www.instagram.com/risewithmcp',
      color: 'hover:text-pink-600'
    },
    {
      platform: 'Facebook',
      icon: '📘', 
      href: 'https://www.facebook.com/milestone.career.planner?mibextid=ZbWKwL',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <span className="text-2xl font-bold">Milestone</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering careers and enriching lives through personalized guidance and comprehensive support.
            </p>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-orange hover:to-primary hover:scale-110 ${social.color}`}
                    title={social.platform}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-orange">Address</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <span className="text-orange mt-1">📍</span>
                <div>
                  <p>8B, Sunparul Blueberry Dezira</p>
                  <p>Infopark Express way, Kakkanad</p>
                  <p>Kerala 682039</p>
                </div>
              </div>
              
              <div className="space-y-2 pt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-orange">📞</span>
                  <span>+91 7012491144</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange">📞</span>
                  <span>+91 9074953258</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-orange">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span className="text-orange">▶</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-6 text-orange">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center space-x-2">
                  <span className="text-orange">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} Milestone Career Planner. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-orange text-orange hover:bg-orange hover:text-white transition-all duration-300"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917012491144?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-2xl text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 animate-glow"
        title="Chat with us on WhatsApp"
      >
        💬
      </a>
    </footer>
  );
};