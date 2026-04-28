import { ChevronRight, Zap, Shield, MapPin, Users, Wrench, Flame, Waves, Thermometer, BookOpen, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * East Cape Combustion - Premium Industrial Engineering Homepage
 * Design: Matches mockup with dark/light alternating sections
 * - Header: Logo + nav + red CTA
 * - Hero: Dark overlay industrial background
 * - About: Light background, red title, two-column layout
 * - Services: Dark background, 6-card grid
 * - Coverage: Light background with map
 * - Why Partner: Light background with circular icons
 * - Projects: Dark background with 3 cards
 * - Final CTA: Light background with overlay image
 * - Footer: Dark background
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== HEADER / NAVBAR ===== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-black/80"
        }`}
      >
        <div className="container flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/manus-storage/ECOMBUSLOGOTRANSPARENT_b1b96b38.png" alt="East Cape Combustion" className="h-12 w-auto" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-red-600 transition-colors duration-200" style={{color: isScrolled ? '#2c3e50' : 'white'}}>
              Home
            </a>
            <a href="#about" className="text-white hover:text-red-600 transition-colors duration-200" style={{color: isScrolled ? '#2c3e50' : 'white'}}>
              About Us
            </a>
            <a href="#services" className="text-white hover:text-red-600 transition-colors duration-200" style={{color: isScrolled ? '#2c3e50' : 'white'}}>
              Services
            </a>
            <a href="#projects" className="text-white hover:text-red-600 transition-colors duration-200" style={{color: isScrolled ? '#2c3e50' : 'white'}}>
              Projects
            </a>
          </nav>

          {/* CTA Button */}
          <button className="btn-primary">
            Get a Quote
          </button>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="relative w-full pb-12 flex items-center justify-center overflow-hidden"
        style={{minHeight: '600px', paddingTop: '100px'}}
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=700&fit=crop')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Complete Combustion & Steam Solutions Across South Africa
          </h1>
          <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed">
            Burners, Boilers, Steam Reticulation, Insulation, Maintenance. Engineered for Performance, Delivered Nationwide
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary">
              Request a Quote
            </button>
            <button className="btn-secondary">
              Download Our Company Profile
            </button>
          </div>

          {/* Icon Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-col items-center gap-2">
              <Users className="w-6 h-6" style={{color: '#C62828'}} />
              <p className="text-sm font-semibold">Nationwide Service Teams</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap className="w-6 h-6" style={{color: '#C62828'}} />
              <p className="text-sm font-semibold">Turnkey Industrial Solutions</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6" style={{color: '#C62828'}} />
              <p className="text-sm font-semibold">Experienced Combustion Specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-16 bg-white">
        <div className="container max-w-6xl">
          {/* Red Title */}
          <h2 className="text-center text-3xl font-bold mb-12" style={{color: '#C62828'}}>
            About East Cape Combustion
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{color: '#2c3e50'}}>
                Engineering Reliable Steam & Combustion Systems
              </h3>
              <p className="text-base text-foreground/80 mb-6 leading-relaxed">
                Delivering expert industrial solutions across South Africa with a focus on efficiency and reliability.
              </p>
              <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                Our team of experienced engineers and technicians specializes in designing, installing, and maintaining high-performance combustion and steam solutions for businesses nationwide.
              </p>
              <button className="btn-primary">
                View Our Services
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=500&fit=crop"
                alt="Engineers working on industrial equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-16 bg-black text-white">
        <div className="container max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-12">
            Our Industrial Services
          </h2>

          {/* Services Grid - 2 rows of 3 cards, then 1 row of 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Flame,
                title: "Burner & Combustion",
              },
              {
                icon: Thermometer,
                title: "Boiler & Steam Generation",
              },
              {
                icon: Waves,
                title: "Steam & Process Piping",
              },
              {
                icon: Shield,
                title: "Insulation Solutions",
              },
              {
                icon: Wrench,
                title: "Maintenance & Support",
              },
              {
                icon: BookOpen,
                title: "Technical Training",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" style={{color: '#C62828'}} />
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="btn-primary">
              Explore All Services →
            </button>
          </div>
        </div>
      </section>

      {/* ===== COVERAGE SECTION ===== */}
      <section id="coverage" className="py-16 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-12" style={{color: '#2c3e50'}}>
            Supporting Industry Across South Africa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <p className="text-base text-foreground/80 leading-relaxed">
                We provide nationwide service, delivering projects wherever our clients need us.
              </p>
            </div>

            {/* Right Column - Map Placeholder */}
            <div className="relative h-80 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-foreground/60 font-semibold">South Africa Coverage Map</p>
                <p className="text-foreground/50 text-sm mt-2">Nationwide service network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY PARTNER SECTION ===== */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-12" style={{color: '#2c3e50'}}>
            Why Partner With EC Combustion?
          </h2>

          {/* Icon Row with Circular Backgrounds */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {[
              { icon: Zap, title: "Turnkey Project Solutions" },
              { icon: Users, title: "Experience Specialists" },
              { icon: MapPin, title: "Nationwide Coverage" },
              { icon: Shield, title: "Efficiency & Compliance" },
              { icon: Wrench, title: "Proven Reliability" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#f0f0f0', border: '2px solid #e0e0e0'}}>
                  <item.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" style={{color: '#C62828'}} />
                </div>
                <p className="font-semibold text-sm text-foreground">{item.title}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="btn-primary">
              View Our Projects →
            </button>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="py-16 bg-black text-white">
        <div className="container max-w-6xl">
          <h2 className="text-center text-3xl font-bold mb-12">
            Recent Projects & Installations
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Boiler Installation",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
              },
              {
                title: "Steam Piping System",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
              },
              {
                title: "Mobile Boiler Unit",
                image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-gray-800"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="btn-primary">
              View Our Projects →
            </button>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="relative py-16 text-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#2c3e50'}}>
            Need a Reliable Industrial Service Partner?
          </h2>
          <p className="text-base text-foreground/80 mb-8 leading-relaxed">
            Contact our team today to get a tailored quote for your industrial needs.
          </p>
          <button className="btn-primary">
            Request a Quote
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black text-white py-12">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <p className="font-semibold mb-2">Serving Clients Nationwide</p>
              <p className="text-white/70 text-sm">Across South Africa</p>
            </div>

            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4" style={{color: '#C62828'}} />
                <p className="text-sm">+18 741 000X 000X</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{color: '#C62828'}} />
                <p className="text-sm">www.ec-combustion.co.za</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-white/70 text-sm">
                <li><a href="#home" className="hover:text-red-600 transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-red-600 transition-colors">Services</a></li>
                <li><a href="#projects" className="hover:text-red-600 transition-colors">Projects</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2026 East Cape Combustion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
