import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Plane, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,1)_80%)] z-0" />
        
        {/* Animated grid/particles pseudo-effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-medium text-white/80 uppercase tracking-widest">Admissions Open 2024</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            <span className="text-white">Launch a Future-Proof Career in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient block mt-2">Technology</span>
            <span className="text-white"> & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-300 block mt-2">Essential Industries</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Choose your path. Build practical skills. Prepare for real-world opportunities through industry-focused training.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary-foreground text-sm flex items-center gap-2">
              <Code size={16} className="text-primary" />
              AI • Data Science • Software
            </div>
            <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-white text-sm flex items-center gap-2">
              <Plane size={16} className="text-secondary" />
              Cabin Crew • Ground Staff • Hospitality
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 h-14 rounded-xl text-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] group" data-testid="button-explore-tech">
              Explore Tech Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-secondary/50 text-white hover:bg-secondary/10 hover:border-secondary px-8 h-14 rounded-xl text-lg group" data-testid="button-explore-vocational">
              Explore Vocational Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-secondary" />
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
