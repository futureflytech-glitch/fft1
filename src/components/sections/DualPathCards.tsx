import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Laptop, GraduationCap } from "lucide-react";

export default function DualPathCards() {
  const techList = [
    "Artificial Intelligence",
    "Data Science",
    "Software Development",
    "Machine Learning",
    "Generative AI"
  ];

  const vocList = [
    "Cabin Crew Training",
    "Ground Staff Training",
    "Airport Operations",
    "Hospitality Services",
    "Interview Preparation"
  ];

  return (
    <section className="py-20 relative z-10 -mt-10" id="programs">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Tech Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-3xl overflow-hidden glass border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
            <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Laptop className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Tech Programs</h3>
              <p className="text-primary font-medium mb-8 uppercase tracking-wide text-sm">Build. Innovate. Solve Real-World Problems.</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {techList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white text-white group-hover:border-primary transition-all duration-300" variant="outline" data-testid="card-btn-tech">
                Explore Tech Programs <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            {/* Background glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-500" />
          </motion.div>

          {/* Vocational Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative rounded-3xl overflow-hidden glass border-secondary/20 hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(132,204,22,0.15)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-green-400" />
            <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
                <GraduationCap className="text-secondary w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Vocational Programs</h3>
              <p className="text-secondary font-medium mb-8 uppercase tracking-wide text-sm">Train. Serve. Succeed in Essential Industries.</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {vocList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-white/5 border border-white/10 hover:bg-secondary hover:text-white text-white group-hover:border-secondary transition-all duration-300" variant="outline" data-testid="card-btn-vocational">
                Explore Vocational Programs <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            {/* Background glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] group-hover:bg-secondary/30 transition-all duration-500" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
