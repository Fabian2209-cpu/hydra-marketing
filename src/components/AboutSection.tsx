
import React from "react";
import { Button } from "@/components/ui/button";
import { Shield, Target, Zap, Award } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-r from-cyan-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left part - Visual */}
          <div className="lg:w-1/2 reveal">
            <div className="relative">
              {/* Main visual element */}
              <div className="relative z-10 bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl overflow-hidden aspect-video backdrop-blur-sm">
                  <div className="h-full w-full bg-gradient-to-br from-purple-600/80 via-blue-600/80 to-cyan-600/80 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-2">HYDRA</div>
                      <div className="text-xl">Marketing LLC</div>
                      <div className="text-sm opacity-75 mt-2">Multi-Headed Marketing Power</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 w-36 h-36 flex flex-col items-center justify-center animate-float border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-1">250+</div>
                <div className="text-xs text-center text-gray-600 font-medium">Campaigns Launched</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 w-36 h-36 flex flex-col items-center justify-center animate-float border border-cyan-100" style={{ animationDelay: "1.5s" }}>
                <div className="text-3xl font-bold text-cyan-600 mb-1">∞</div>
                <div className="text-xs text-center text-gray-600 font-medium">Growth Possibilities</div>
              </div>

              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-4 w-32 h-32 flex flex-col items-center justify-center animate-float" style={{ animationDelay: "0.7s" }}>
                <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-xs text-center text-gray-600 font-medium">Client Retention</div>
              </div>
            </div>
          </div>
          
          {/* Right part - Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6 reveal">
              <Shield className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium text-sm">ABOUT HYDRA MARKETING</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 reveal leading-tight">
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">Legendary</span> Marketing Meets Modern Strategy
            </h2>
            
            <p className="text-gray-700 text-lg mb-6 reveal leading-relaxed">
              Inspired by the mythical Hydra's regenerative power, Hydra Marketing LLC transforms 
              challenges into opportunities. When one marketing channel succeeds, we multiply that 
              success across your entire digital ecosystem.
            </p>
            
            <p className="text-gray-700 text-lg mb-8 reveal leading-relaxed">
              Our team of digital strategists, creative visionaries, and data scientists work in 
              perfect harmony to create marketing campaigns that don't just grow—they evolve, 
              adapt, and multiply their impact across every touchpoint.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start reveal">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mr-4 shadow-lg">
                  <Target className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Strategic Precision</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Every campaign is crafted with surgical precision and strategic foresight</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-4 shadow-lg">
                  <Zap className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Rapid Adaptation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">We evolve with market changes faster than your competition</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center mr-4 shadow-lg">
                  <Award className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Proven Excellence</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Award-winning campaigns with measurable results</p>
                </div>
              </div>
              
              <div className="flex items-start reveal">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mr-4 shadow-lg">
                  <Shield className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Brand Protection</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Safeguarding your reputation while amplifying your message</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:opacity-90 text-white px-8 py-4 text-lg rounded-xl shadow-xl reveal">
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
