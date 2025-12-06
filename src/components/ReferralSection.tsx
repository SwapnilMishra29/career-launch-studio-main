import { Gift, Wallet, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReferralSection = () => {
  const rewards = [
    { package: "Resume (₹299)", reward: "₹100" },
    { package: "Portfolio (₹699)", reward: "₹150" },
    { package: "Combo (₹849)", reward: "₹200" },
  ];

  const rules = [
    { icon: CheckCircle2, text: "Reward paid after full payment & successful delivery", positive: true },
    { icon: CheckCircle2, text: "Paid via UPI within 3 working days", positive: true },
    { icon: CheckCircle2, text: "Reward depends on selected package", positive: true },
    { icon: XCircle, text: "Self-referral is not allowed", positive: false },
  ];

  return (
    <section id="referral" className="py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Referral Program</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Earn Money by Referring <span className="text-coral-light">Your Friends!</span>
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl">
              Share CampusCraft with your classmates and earn up to ₹200 for every successful order. It's that simple!
            </p>

            {/* Rules */}
            <div className="space-y-3 mb-8">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-center gap-3">
                  <rule.icon className={`w-5 h-5 flex-shrink-0 ${rule.positive ? "text-coral-light" : "text-coral-light/60"}`} />
                  <span className="text-sm text-primary-foreground/90">{rule.text}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#order">
                Start Referring
                <Wallet className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Right Content - Reward Cards */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-6 text-center">
                💰 Referral Reward Chart
              </h3>

              <div className="space-y-4">
                {rewards.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-card/10 rounded-xl border border-primary-foreground/10"
                  >
                    <span className="text-primary-foreground/90">{item.package}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-primary-foreground/60">Earn</span>
                      <span className="px-3 py-1 bg-gradient-accent text-accent-foreground font-bold rounded-full text-sm">
                        {item.reward}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-coral/20 rounded-xl text-center">
                <p className="text-sm text-primary-foreground">
                  <strong>Pro Tip:</strong> The more friends you refer, the more you earn! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
