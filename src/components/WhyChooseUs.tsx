import { FileCheck, Globe, IndianRupee, Zap, Gift, MessageCircle } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: FileCheck,
      title: "ATS-Optimized Resumes",
      description: "Professional resumes built to pass Applicant Tracking Systems and land interviews.",
      color: "coral",
    },
    {
      icon: Globe,
      title: "Live Portfolio Website",
      description: "Get a stunning portfolio with free hosting and a custom subdomain.",
      color: "teal",
    },
    {
      icon: IndianRupee,
      title: "Student-Friendly Pricing",
      description: "Affordable packages designed specifically for college students.",
      color: "gold",
    },
    {
      icon: Zap,
      title: "Fast & Reliable Delivery",
      description: "Get your resume in 24-48 hours and portfolio in 2-3 days.",
      color: "coral",
    },
    {
      icon: Gift,
      title: "First Update FREE",
      description: "Make changes to your resume or portfolio absolutely free within 7 days.",
      color: "teal",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Direct communication with our team for quick responses and updates.",
      color: "gold",
    },
  ];

  const colorClasses = {
    coral: "bg-accent/10 text-accent",
    teal: "bg-teal/10 text-teal",
    gold: "bg-gold/10 text-gold",
  };

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why CampusCraft?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Focus on <span className="text-gradient-accent">Results</span>, Not Just Design
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to kickstart your career, built by students for students.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
