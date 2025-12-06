import { FileText, Globe, Package, RefreshCw, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "ATS-Friendly Resume",
      description: "Professional resume designed in Canva that passes through Applicant Tracking Systems.",
      features: ["Canva Template", "2 Revisions", "PDF + DOCX"],
      status: "available",
    },
    {
      icon: Globe,
      title: "Live Portfolio Website",
      description: "Stunning single-page portfolio with responsive design and free hosting.",
      features: ["Mobile Responsive", "Netlify Hosting", "Free Subdomain"],
      status: "available",
    },
    {
      icon: Package,
      title: "Resume + Portfolio Combo",
      description: "The complete package for students serious about their career.",
      features: ["Best Value", "Priority Support", "3 Revisions"],
      status: "popular",
    },
    {
      icon: RefreshCw,
      title: "Updates & Maintenance",
      description: "Keep your resume and portfolio fresh with our update services.",
      features: ["Quick Turnaround", "Affordable Rates", "Combo Discounts"],
      status: "available",
    },
    {
      icon: Linkedin,
      title: "LinkedIn & Career Guidance",
      description: "Professional LinkedIn optimization and career profile guidance.",
      features: ["Profile Review", "Optimization Tips", "Networking Strategy"],
      status: "coming-soon",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to <span className="text-gradient-accent">Stand Out</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From professional resumes to live portfolio websites, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group p-6 bg-card rounded-2xl border shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                service.status === "popular" ? "border-accent" : "border-border/50"
              }`}
            >
              {/* Popular Badge */}
              {service.status === "popular" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-accent text-accent-foreground text-xs font-bold rounded-full">
                  BEST SELLER
                </div>
              )}

              {/* Coming Soon Badge */}
              {service.status === "coming-soon" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full border border-border">
                  COMING SOON
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                service.status === "popular" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
              }`}>
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4 text-sm">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              {service.status !== "coming-soon" && (
                <Button variant="outline" className="w-full" asChild>
                  <a href="#pricing">View Pricing</a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
