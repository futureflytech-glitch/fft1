import React from "react";
import { motion } from "framer-motion";

const techLogos = [
  { name: "Google", color: "#4285F4" },
  { name: "Microsoft", color: "#00A4EF" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Infosys", color: "#007CC3" },
  { name: "TCS", color: "#1E40AF" },
  { name: "Wipro", color: "#341C75" },
  { name: "Accenture", color: "#A100FF" },
  { name: "IBM", color: "#1F70C1" },
  { name: "Cognizant", color: "#1A4CA1" },
  { name: "Capgemini", color: "#003087" },
];

const vocLogos = [
  { name: "IndiGo", color: "#1B1464" },
  { name: "Air India", color: "#C41E3A" },
  { name: "Akasa Air", color: "#FF6B00" },
  { name: "SpiceJet", color: "#E8261A" },
  { name: "Taj Hotels", color: "#8B6914" },
  { name: "Marriott", color: "#9B1B30" },
  { name: "Hilton", color: "#104C97" },
  { name: "Radisson", color: "#003865" },
];

export default function IndustryEcosystem() {
  return (
    <section className="py-24 relative z-10 bg-background/50 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary uppercase tracking-widest text-xs font-semibold mb-3"
        >
          Ecosystem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-4"
        >
          Industry & Ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 max-w-2xl mx-auto"
        >
          Curriculum aligned with industry-relevant skills and employer expectations.
        </motion.p>
      </div>

      <div className="flex flex-col gap-10">
        {/* Tech Marquee — scrolls left */}
        <div className="relative overflow-hidden">
          <div className="text-center mb-4">
            <span className="inline-block bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Technology Ecosystem
            </span>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee-left">
            {[...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-3 mx-3 bg-white/90 rounded-xl shrink-0 shadow-lg"
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: logo.color }}
                />
                <span className="text-gray-900 font-semibold text-sm whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Aviation Marquee — scrolls right */}
        <div className="relative overflow-hidden">
          <div className="text-center mb-4">
            <span className="inline-block bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              Aviation & Hospitality Ecosystem
            </span>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee-right">
            {[...vocLogos, ...vocLogos, ...vocLogos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-3 mx-3 bg-white/90 rounded-xl shrink-0 shadow-lg"
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: logo.color }}
                />
                <span className="text-gray-900 font-semibold text-sm whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
