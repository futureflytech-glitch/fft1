import React from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 relative z-10" id="contact">
      <div className="container mx-auto px-4">
        <div className="glass rounded-3xl p-10 md:p-20 text-center relative overflow-hidden max-w-5xl mx-auto border-primary/30">
          
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background to-secondary/20 opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get Free Career Counselling Today</h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Talk to our experts and find the right career path for you. Call us or WhatsApp us now.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                onClick={() => window.location.href = "tel:8660668933"}
                data-testid="btn-call"
              >
                <Phone className="mr-2 w-5 h-5" /> Call Now
              </Button>
              
              <Button 
                size="lg" 
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white h-14 px-8 text-lg rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                onClick={() => window.open("https://wa.me/918660668933", "_blank")}
                data-testid="btn-whatsapp"
              >
                <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Now
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-lg rounded-xl"
                data-testid="btn-book"
              >
                <Calendar className="mr-2 w-5 h-5" /> Book Counselling
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
