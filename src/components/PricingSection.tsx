import { CheckCircle2, Gift, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter Resume",
      price: "₹299",
      description: "Perfect for students who need a professional resume",
      icon: Zap,
      features: [
        "ATS-friendly resume (Canva)",
        "1 professional template",
        "2 revisions included",
        "PDF + Editable DOCX",
        "Delivery in 24–48 hours",
      ],
      referralReward: "₹100",
      popular: false,
      color: "primary",
    },
    {
      name: "Career Launch Pack",
      price: "₹849",
      description: "The complete package for serious career starters",
      icon: Crown,
      features: [
        "ATS Resume + Portfolio",
        "Live Netlify deployment",
        "Priority support",
        "3 total revisions",
        "1 free update within 7 days",
      ],
      referralReward: "₹200",
      popular: true,
      color: "accent",
    },
    {
      name: "Starter Portfolio",
      price: "₹699",
      description: "Showcase your work with a stunning portfolio website",
      icon: Gift,
      features: [
        "1-page portfolio website",
        "Mobile responsive design",
        "Live Netlify deployment",
        "Free subdomain included",
        "1 free update within 7 days",
        "Delivery in 2–3 days",
      ],
      referralReward: "₹150",
      popular: false,
      color: "teal",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, <span className="text-gradient-accent">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the package that fits your needs. No hidden charges.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 lg:p-8 bg-card rounded-2xl border shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular ? "border-accent md:-mt-4 md:mb-4" : "border-border/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-gradient-accent text-accent-foreground text-sm font-bold rounded-full shadow-glow">
                  🔥 BEST SELLER
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                plan.popular ? "bg-accent/10 text-accent" : "bg-muted text-primary"
              }`}>
                <plan.icon className="w-7 h-7" />
              </div>

              {/* Plan Name */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-accent" : "text-teal"}`} />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Referral Reward */}
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg mb-6">
                <Gift className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground">
                  Referral Reward: <strong className="text-accent">{plan.referralReward}</strong>
                </span>
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#order">Order Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
