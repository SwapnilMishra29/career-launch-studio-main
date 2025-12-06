import { ClipboardList, MessageCircle, CreditCard, Palette, Eye, CheckCircle, RefreshCw, Users, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Fill the Order Form",
      description: "Submit your details and requirements",
    },
    {
      icon: MessageCircle,
      title: "We Contact You",
      description: "Our team reaches out on WhatsApp",
    },
    {
  icon: CreditCard,
  title: "Confirm Your Requirements",
  description: "We finalize details before starting work",
},
    {
      icon: Palette,
      title: "We Create Your Assets",
      description: "Resume & Portfolio in progress",
    },
    {
      icon: Eye,
      title: "Demo for Review",
      description: "Preview before final payment",
    },
    {
      icon: CheckCircle,
      title: "Pay & Receive",
      description: "Final delivery + Live link",
    },
    {
      icon: RefreshCw,
      title: "Free Update",
      description: "1 update included free",
    },
    {
      icon: Users,
      title: "Earn via Referrals",
      description: "Share & earn up to ₹200",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple. Transparent. <span className="text-teal">Professional.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process ensures you get quality work with zero hassle.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number & Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 shadow-card flex items-center justify-center group-hover:border-accent group-hover:shadow-lg transition-all duration-300">
                    <step.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-sm font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border/50 shadow-card">
            <Rocket className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">Ready to get started?</span>
            <a href="#order" className="text-accent font-bold hover:underline">Order Now →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
