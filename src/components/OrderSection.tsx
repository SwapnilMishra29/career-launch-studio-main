import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, CreditCard, ShieldCheck, Clock } from "lucide-react";

const OrderSection = () => {
  const paymentInfo = [
    { icon: CreditCard, text: "0% advance required to start work" },
    { icon: ShieldCheck, text: "100% after demo approval" },
    { icon: Clock, text: "Final files delivered after full payment" },
  ];

  return (
    <section id="order" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Order Now
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to <span className="text-gradient-accent">Launch Your Career?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Fill out our order form and we'll contact you on WhatsApp within 2-4 hours.
            </p>
          </div>

          {/* Order Card */}
          <div className="bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden">
            <div className="p-8 text-center border-b border-border/50">
              <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <ExternalLink className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Place Your Order
              </h3>
              <p className="text-muted-foreground mb-6">
                Click below to fill out our Google Form with your details
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="https://forms.gle/W4heH8eVkx2Exz4H8" target="_blank" rel="noopener noreferrer">
                  Open Order Form
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* What Happens Next */}
            <div className="p-8 bg-muted/30">
              <h4 className="font-display font-bold text-foreground mb-4 text-center">After Submission:</h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal/10 text-teal flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-foreground">We'll contact you on WhatsApp within 2-4 hours</span>
                </div>
                <div className="hidden md:block w-px h-8 bg-border" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-foreground">Advance payment is not mandatory to start work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Policy */}
          <div className="mt-8 p-6 bg-muted/50 rounded-2xl border border-border/50">
            <h4 className="font-display font-bold text-foreground mb-4 text-center">💳 Payment Policy</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              All payments accepted via UPI • No refunds after work has started
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
