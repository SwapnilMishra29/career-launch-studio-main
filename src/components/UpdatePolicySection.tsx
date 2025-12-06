import { RefreshCw, FileText, Globe, Package } from "lucide-react";

const UpdatePolicySection = () => {
  const resumeUpdates = [
    { type: "Minor changes (skills, text, projects)", price: "₹149" },
    { type: "Major redesign / new template", price: "₹299" },
    { type: "Role/Branch change", price: "₹249" },
  ];

  const portfolioUpdates = [
    { type: "Text & image update", price: "₹199" },
    { type: "Add new project/section", price: "₹299" },
    { type: "Full redesign", price: "₹599" },
  ];

  const comboUpdates = [
    { type: "Resume update", price: "₹99" },
    { type: "Portfolio update", price: "₹149" },
  ];

  return (
    <section id="updates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Update & Maintenance
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Keep Your Profile <span className="text-teal">Fresh</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Your first update is absolutely FREE. After that, affordable maintenance rates apply.
          </p>
        </div>

        {/* Free Update Banner */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-4 p-6 bg-gradient-accent text-accent-foreground rounded-2xl">
            <div className="w-14 h-14 rounded-xl bg-accent-foreground/20 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-1">First Update – ABSOLUTELY FREE</h3>
              <p className="text-accent-foreground/90 text-sm">Valid within 7 days of delivery. Make corrections or minor changes at no extra cost.</p>
            </div>
          </div>
        </div>

        {/* Update Pricing Tables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Resume Updates */}
          <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Resume Updates</h3>
            </div>
            <div className="space-y-3">
              {resumeUpdates.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-foreground">{item.type}</span>
                  <span className="text-sm font-bold text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Updates */}
          <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Portfolio Updates</h3>
            </div>
            <div className="space-y-3">
              {portfolioUpdates.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-foreground">{item.type}</span>
                  <span className="text-sm font-bold text-teal">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Combo Updates */}
          <div className="p-6 bg-card rounded-2xl border border-accent shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Combo Client Rates</h3>
                <span className="text-xs text-accent font-medium">Special Discount!</span>
              </div>
            </div>
            <div className="space-y-3">
              {comboUpdates.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent/5 rounded-lg border border-accent/20">
                  <span className="text-sm text-foreground">{item.type}</span>
                  <span className="text-sm font-bold text-accent">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Exclusive rates for Career Launch Pack customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatePolicySection;
