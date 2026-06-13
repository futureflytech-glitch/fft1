import React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "AI & ML Graduate",
      quote: "Future Fly Tech transformed my understanding of AI. The hands-on projects prepared me for real industry challenges. I'm now working in a leading tech firm."
    },
    {
      name: "Rahul Mehta",
      course: "Cabin Crew Graduate",
      quote: "The grooming and communication training at Future Fly Tech was exceptional. The program felt very professional and real-world focused."
    },
    {
      name: "Anjali Singh",
      course: "Data Science Graduate",
      quote: "The curriculum was industry-aligned and the mentorship was outstanding. I gained confidence through practical projects and mock interviews."
    },
    {
      name: "Karan Patel",
      course: "Ground Staff Graduate",
      quote: "The airport operations training was incredibly realistic. I feel fully prepared for a career in aviation thanks to Future Fly Tech."
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-background/50 border-y border-white/5">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Student Success Stories</h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4">
                  <div className="glass p-8 rounded-2xl h-full flex flex-col relative border-white/10 hover:border-primary/30 transition-colors">
                    <Quote className="w-10 h-10 text-white/10 absolute top-6 right-6" />
                    <p className="text-white/80 text-lg mb-8 flex-grow">"{t.quote}"</p>
                    <div>
                      <h4 className="text-lg font-bold text-white">{t.name}</h4>
                      <p className="text-sm text-primary">{t.course}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white/5 border-white/10 text-white hover:bg-primary hover:text-white"
              onClick={scrollPrev}
              data-testid="btn-testim-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white/5 border-white/10 text-white hover:bg-primary hover:text-white"
              onClick={scrollNext}
              data-testid="btn-testim-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
