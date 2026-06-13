import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "What programs does Future Fly Tech offer?",
      a: "We offer programs in two main tracks: Technology (AI, ML, Data Science, Software Development) and Vocational (Cabin Crew, Ground Staff, Hospitality)."
    },
    {
      q: "Are the programs suitable for freshers?",
      a: "Yes, our programs are designed from the ground up to take freshers and build their skills to an industry-ready level."
    },
    {
      q: "How long are the courses?",
      a: "Course durations vary from 3 months to 12 months depending on the specific program and track chosen."
    },
    {
      q: "What kind of support do you offer after the program?",
      a: "We provide dedicated placement support, resume building, mock interviews, and access to our network of hiring partners."
    },
    {
      q: "Is certification provided after course completion?",
      a: "Yes, all students receive a recognized certificate upon successful completion of their program."
    },
    {
      q: "How can I enroll in a program?",
      a: "You can apply through our website or contact our counseling team directly via phone or WhatsApp for guidance."
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass border-white/10 rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-white hover:no-underline hover:text-primary text-left font-semibold text-lg py-6" data-testid={`faq-trigger-${i}`}>
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-base pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
