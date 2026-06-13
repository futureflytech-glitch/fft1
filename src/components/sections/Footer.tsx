import React from "react";
import { Instagram, Facebook, Youtube, Linkedin, PlaneTakeoff } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <PlaneTakeoff className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-white">Future Fly Tech</span>
            </div>
            <p className="text-white/60 mb-6 max-w-sm">Turning Dreams Into Reality. Empowering students with cutting-edge tech and elite vocational skills.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors" data-testid="link-social-linkedin"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors" data-testid="link-social-instagram"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors" data-testid="link-social-fb"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors" data-testid="link-social-yt"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">Tech Programs</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">Vocational Programs</a></li>
              <li><a href="#placement" className="hover:text-primary transition-colors">Placement Support</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-white mb-6">Our Programs</h4>
            <ul className="space-y-4 text-white/60">
              <li>AI & ML</li>
              <li>Data Science</li>
              <li>Software Development</li>
              <li>Cabin Crew</li>
              <li>Ground Staff</li>
              <li>Hospitality</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li>Phone: +91 8660668933</li>
              <li>Email: info@futureflytech.com</li>
              <li>Location: India</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2024 Future Fly Tech. All rights reserved.</p>
          <p className="text-white/40 text-sm tracking-widest uppercase">Turning Dreams Into Reality</p>
        </div>
      </div>
    </footer>
  );
}
