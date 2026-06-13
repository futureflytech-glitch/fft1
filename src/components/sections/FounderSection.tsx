import React from "react";
import { motion } from "framer-motion";
import { User, Quote, ShieldCheck, GraduationCap, Building2 } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">A Message from Our Founder</h2>
        </div>

        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
            
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-4">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <User className="w-16 h-16 text-white/50" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white text-center">Our Founder & CEO</h3>
              <p className="text-primary text-sm font-medium">Future Fly Tech</p>
            </div>

            <div className="flex-grow">
              <Quote className="w-10 h-10 text-white/20 mb-4" />
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic">
                "At Future Fly Tech, we believe every student deserves a career path that aligns with their passion and potential. Whether you're drawn to the world of AI and technology or the dynamic field of aviation and hospitality, we've built a curriculum that bridges the gap between academic learning and real-world application. Our mission is simple: to equip you with the skills, confidence, and connections to launch a career you're proud of."
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="flex flex-col items-center text-center">
                  <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                  <span className="text-xl font-bold text-white">10+</span>
                  <span className="text-xs text-white/50 uppercase">Years Exp</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <GraduationCap className="w-6 h-6 text-secondary mb-2" />
                  <span className="text-xl font-bold text-white">5k+</span>
                  <span className="text-xs text-white/50 uppercase">Mentored</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Building2 className="w-6 h-6 text-accent mb-2" />
                  <span className="text-xl font-bold text-white">100+</span>
                  <span className="text-xs text-white/50 uppercase">Partners</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
