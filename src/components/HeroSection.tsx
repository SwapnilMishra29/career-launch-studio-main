import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import logo from "../../public/logo.png"
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const highlights = [
    "Resume + Portfolio in 3 Days",
    "Internship & Placement Ready",
    "Free First Update",
    "Referral Rewards up to ₹200",
  ];

  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-hero pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-slide-up">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-foreground">Trusted by 500+ Students</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up delay-100">
              Your Career,{" "}
              <span className="text-gradient-accent">Professionally Built.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up delay-200">
              We help final year students build ATS-friendly resumes and stunning portfolio websites 
              that get noticed by recruiters. Fast delivery. Affordable pricing.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 mb-8 animate-slide-up delay-300">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href="#order">
                  Order Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button onClick={()=>{navigate("/demo")}} variant="hero-outline" size="xl" asChild>
                <a>View Demos</a>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="flex-1 relative animate-slide-up delay-500">
            <div className="relative max-w-lg mx-auto">
              {/* Main Card */}
              <div className="relative bg-card rounded-2xl shadow-card p-6 border border-border/50">
                {/* Mock Resume Preview */}
   <div className="flex items-start gap-4">
  <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground font-display font-bold text-xl shadow-md">
      <div className="w-15 h-15 rounded-xl bg-gradient-accent flex items-center justify-center">
  <img 
  src={logo} 
  alt="CampusCraft Logo" 
  className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
 />
            </div>
  </div>

  <div className="flex-1">
    <div className="text-sm font-semibold text-foreground">
      CampusCraft Student
    </div>
    <div className="text-xs text-muted-foreground mb-3">
      Full Stack Developer
    </div>

    <div className="flex flex-wrap gap-2">
      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium">
        MERN
      </span>
      <span className="px-2 py-1 bg-teal/10 text-teal text-xs rounded-md font-medium">
        APIs
      </span>
      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
        Cloud
      </span>
    </div>
  </div>
</div>         {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-display font-bold text-foreground">500+</div>
                    <div className="text-xs text-muted-foreground">Happy Students</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-display font-bold text-accent">48h</div>
                    <div className="text-xs text-muted-foreground">Avg Delivery</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-display font-bold text-foreground">4.9★</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-card p-3 border border-border/50 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-teal" />
                  </div>
                  <span className="text-xs font-medium text-foreground">ATS Optimized</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card p-3 border border-border/50 animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Live Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
