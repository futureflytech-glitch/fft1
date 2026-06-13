import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Code2, Plane, Briefcase, Coffee } from "lucide-react";

export default function ProgramPillars() {
  const techPillars = [
    {
      title: "ARTIFICIAL INTELLIGENCE",
      icon: <Brain className="w-8 h-8 text-primary" />,
      topics: ["Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Generative AI", "AI Automation", "AI Projects"]
    },
    {
      title: "DATA SCIENCE",
      icon: <Database className="w-8 h-8 text-primary" />,
      topics: ["Data Analytics", "Data Visualization", "Big Data", "Business Intelligence", "Predictive Analytics", "Real-World Projects"]
    },
    {
      title: "SOFTWARE DEVELOPMENT",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      topics: ["Full-Stack Development", "Frontend Development", "Backend Development", "Mobile App Development", "Python Programming", "Deployment & DevOps"]
    }
  ];

  const vocPillars = [
    {
      title: "CABIN CREW TRAINING",
      icon: <Plane className="w-8 h-8 text-secondary" />,
      topics: ["Grooming & Etiquette", "In-Flight Service", "Safety Procedures", "Communication Skills", "Interview Preparation", "Industry Training"]
    },
    {
      title: "GROUND STAFF TRAINING",
      icon: <Briefcase className="w-8 h-8 text-secondary" />,
      topics: ["Airport Operations", "Ticketing & Reservations", "Baggage Handling", "Passenger Assistance", "Airline Systems", "Real-World Simulations"]
    },
    {
      title: "HOSPITALITY SERVICES",
      icon: <Coffee className="w-8 h-8 text-secondary" />,
      topics: ["Guest Relations", "Customer Experience", "Front Office Operations", "Hospitality Management", "Professional Etiquette", "Career Readiness"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Program Pillars</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Industry-focused training with in-depth curriculum designed to make you career-ready.
          </p>
        </div>

        {/* Tech Programs */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-white">Tech Programs</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {techPillars.map((pillar, i) => (
              <motion.div key={i} variants={item} className="glass rounded-2xl p-8 border-t-2 border-t-primary/50 hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-6 bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-6 tracking-wide">{pillar.title}</h4>
                <ul className="space-y-3">
                  {pillar.topics.map((topic, j) => (
                    <li key={j} className="text-sm text-white/70 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vocational Programs */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-bold text-white">Vocational Programs</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-secondary/50 to-transparent"></div>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {vocPillars.map((pillar, i) => (
              <motion.div key={i} variants={item} className="glass rounded-2xl p-8 border-t-2 border-t-secondary/50 hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-6 bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-6 tracking-wide">{pillar.title}</h4>
                <ul className="space-y-3">
                  {pillar.topics.map((topic, j) => (
                    <li key={j} className="text-sm text-white/70 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0"></div>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
