import React from "react";
import { motion } from "framer-motion";

export default function StudentJourney() {
  const steps = [
    { num: "01", title: "Enroll", desc: "Choose your path and register for the program." },
    { num: "02", title: "Learn", desc: "Gain knowledge from industry experts." },
    { num: "03", title: "Build Projects", desc: "Apply skills to real-world scenarios." },
    { num: "04", title: "Industry Prep", desc: "Mock interviews and resume building." },
    { num: "05", title: "Career Opps", desc: "Connect with our hiring partners." }
  ];

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Your Path to Success
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 rounded-full" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary -translate-y-1/2 origin-left rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
          />

          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-1 bg-white/10 rounded-full" />
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="lg:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary origin-top rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="flex flex-row lg:flex-col items-center lg:text-center gap-6 lg:gap-4"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary font-bold text-xl lg:text-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)] shrink-0 z-10 relative">
                  {step.num}
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-sm text-white/60">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
