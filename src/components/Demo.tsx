import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2, Star } from "lucide-react";
import temp1 from "../../public/ResumeTemplate1.png"
import temp2 from "../../public/ResumeTemplate2.png"
import protfolio from "../../public/Portfolio.jpg"


const DemoPage = () => {
  return (
    <section className="min-h-screen bg-gradient-hero pt-15 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" size="sm" asChild>
            <a href="/">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Home
            </a>
          </Button>

          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              Trusted by 500+ students
            </span>
          </div>
        </div>

        {/* HERO: two-column */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-3">
              CampusCraft Demo
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              A real-world resume & portfolio built for students.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl">
              See exactly what recruiters see: a clean, ATS-ready resume paired with a modern
              portfolio website that showcases projects in one link.
            </p>

            {/* Badges / quick proof */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 text-xs bg-card/60 border border-border/60 rounded-full px-3 py-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Ready for campus placements
              </div>
              <div className="flex items-center gap-2 text-xs bg-card/60 border border-border/60 rounded-full px-3 py-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Works on mobile & desktop
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button variant="accent" size="lg" asChild className="sm:flex-1">
                <a
                  href="https://portfolio-r56i.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  View Full Demo <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="sm:flex-1">
                <a
                  href="https://drive.google.com/file/d/1kuxZ7jd08xiwYc4bxAhS9wpoULno_Nrp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Download Sample Resume
                </a>
              </Button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div>
                <div className="text-lg font-semibold text-foreground">500+</div>
                <div className="text-muted-foreground">Students helped</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">48 hours</div>
                <div className="text-muted-foreground">Average delivery</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-lg font-semibold text-foreground">
                  4.9
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="text-muted-foreground">Average rating</div>
              </div>
            </div>
          </div>

          {/* Right: realistic preview mockup */}
          <div className="relative">
            <div className="absolute -top-10 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-6 w-52 h-52 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative bg-card rounded-3xl shadow-2xl border border-border/60 p-4 md:p-6 flex flex-col gap-4">
              {/* Portfolio preview on top */}
              <div className="rounded-2xl overflow-hidden bg-muted aspect-video border border-border/60">
                <img
                  src={protfolio}
                  alt="Student portfolio website preview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stacked resume thumbnails */}
              <div className="flex gap-4">
                <div className="flex-1 rounded-2xl overflow-hidden bg-muted border border-border/60 aspect-[3/4]">
                  <img
                    src={temp1}
                    alt="Resume template preview 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden bg-muted border border-border/60 aspect-[3/4] hidden sm:block">
                  <img
                    src={temp2}
                    alt="Resume template preview 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-[11px] text-muted-foreground text-center">
                Demo uses real layouts, not wireframes — this is exactly how your profile can look.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary section: 3 realistic cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Resume */}
          <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-5 flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground mb-1">
              ATS‑Friendly Resume
            </h3>
            <p className="text-xs text-muted-foreground">
              Structured for campus and off‑campus hiring with clear sections for education,
              projects, internships, and skills.
            </p>
            <ul className="mt-1 text-xs text-muted-foreground space-y-1">
              <li>• One‑page clean layout recruiters prefer</li>
              <li>• Exportable as PDF and printable</li>
              <li>• Uses real student‑style content</li>
            </ul>
          </div>

          {/* Card 2: Portfolio */}
          <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-5 flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Live Portfolio Website
            </h3>
            <p className="text-xs text-muted-foreground">
              A single link that shows projects, tech stack, achievements, and contact details on
              any device.
            </p>
            <ul className="mt-1 text-xs text-muted-foreground space-y-1">
              <li>• Built with modern frontend stack</li>
              <li>• Sections for projects, about, skills, and contact</li>
              <li>• Optimized for quick recruiter scan</li>
            </ul>
          </div>

          {/* Card 3: What you get */}
          <div className="bg-card rounded-2xl shadow-sm border border-border/60 p-5 flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground mb-1">
              What You Get from CampusCraft
            </h3>
            <p className="text-xs text-muted-foreground">
              A ready‑to‑share package that helps you stand out in placement drives and referral
              shortlists.
            </p>
            <ul className="mt-1 text-xs text-muted-foreground space-y-1">
              <li>• Custom resume + portfolio for your profile</li>
              <li>• Guidance on what content to add</li>
              <li>• Support for minor edits after delivery</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default DemoPage;
