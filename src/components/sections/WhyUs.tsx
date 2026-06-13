import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Code, LineChart, Network, Award } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      title: "Industry-Oriented Curriculum",
      desc: "Skills designed with industry needs in mind",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      color: "primary"
    },
    {
      title: "Expert Trainers & Mentorship",
      desc: "Learn from industry professionals",
      icon: <Users className="w-6 h-6 text-secondary" />,
      color: "secondary"
    },
    {
      title: "Hands-On Learning & Projects",
      desc: "Practical training with real-world projects",
      icon: <Code className="w-6 h-6 text-primary" />,
      color: "primary"
    },
    {
      title: "Placement Support & Guidance",
      desc: "Dedicated support for your career success",
      icon: <LineChart className="w-6 h-6 text-secondary" />,
      color: "secondary"
    },
    {
      title: "Connections & Partnerships",
      desc: "Strong network for better opportunities",
      icon: <Network className="w-6 h-6 text-primary" />,
      color: "primary"
    },
    {
      title: "Certification & Recognition",
      desc: "Earn recognized certifications",
      icon: <Award className="w-6 h-6 text-secondary" />,
      color: "secondary"
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-background/50 border-y border-white/5" id="about">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Why Choose Future Fly Tech?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-${feature.color}`} />
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-white/60">{feature.desc}</p>
                </div>
              </div>
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${feature.color}/10 rounded-full blur-[40px] group-hover:bg-${feature.color}/20 transition-colors`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
