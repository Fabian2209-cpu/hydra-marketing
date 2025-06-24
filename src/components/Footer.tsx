
import React from "react";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Hydra
              </span>
              <span className="text-white ml-2">Marketing</span>
              <span className="text-gray-400 text-lg ml-2">LLC</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              Unleashing multi-headed marketing power to transform your brand's digital presence. 
              Like the legendary Hydra, we multiply success across every channel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="group bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 transition-all duration-300 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors"></span>
                  Multi-Channel SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors"></span>
                  Content Amplification
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors"></span>
                  Social Ecosystem
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors"></span>
                  Email Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors"></span>
                  PPC Mastery
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Digital Avenue, Marketing District, MD 20001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-cyan-400 transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                <a href="mailto:hello@hydramarketingllc.com" className="text-gray-300 hover:text-cyan-400 transition-colors">hello@hydramarketingllc.com</a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Mon-Fri: 9AM - 6PM</div>
                  <div className="text-sm text-gray-400">Emergency support: 24/7</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Hydra Marketing LLC. All rights reserved. Unleashing digital dominance.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
