import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Final Year CSE Student",
      college: "VIT University",
      content: "CampusCraft built my resume and portfolio in just 2 days. The quality was exceptional and I got shortlisted for 3 internships within a week!",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Rahul Verma",
      role: "MCA Student",
      college: "Delhi University",
      content: "My internship shortlisting rate increased by 80% after updating my resume through CampusCraft. Totally worth the investment!",
      rating: 5,
      avatar: "RV",
    },
    {
      name: "Ananya Gupta",
      role: "B.Tech Final Year",
      college: "SRM University",
      content: "The portfolio website they created for me looks so professional. My professors were impressed and it helped me stand out during campus placements.",
      rating: 5,
      avatar: "AG",
    },
    {
      name: "Karthik Nair",
      role: "ECE Graduate",
      college: "Anna University",
      content: "Excellent service! The team was responsive on WhatsApp and delivered before the deadline. Highly recommend the Career Launch Pack.",
      rating: 5,
      avatar: "KN",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by <span className="text-gradient-accent">500+ Students</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our happy customers say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-muted/30" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-muted/50 border border-border/50">
            <div className="flex -space-x-2">
              {["AB", "CD", "EF", "GH"].map((initials, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-card flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Join 500+ happy students</p>
              <p className="text-xs text-muted-foreground">4.9/5 average rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
