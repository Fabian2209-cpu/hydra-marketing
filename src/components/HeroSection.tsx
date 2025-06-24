
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, Target, Zap } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-float blur-xl" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-float blur-xl" style={{ animationDelay: "2s" }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm font-medium">Multi-Headed Marketing Power</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              Unleash Your Brand's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 animate-gradient-x">
                Digital Dominance
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-gray-300 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Like the mythical Hydra, we multiply your marketing impact across all channels. 
              Strategic, powerful, and relentlessly effective.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:opacity-90 text-white group px-8 py-6 text-lg shadow-2xl">
                Transform Your Brand
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/30 px-8 py-6 text-lg backdrop-blur-sm">
                See Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-sm text-gray-400">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">Brands Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Campaign Monitoring</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* Main Dashboard */}
              <div className="w-[400px] h-[400px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl relative z-10 p-6 animate-float shadow-2xl border border-white/20">
                <div className="h-1/3 bg-gradient-to-r from-purple-500/80 via-blue-500/80 to-cyan-500/80 rounded-2xl flex items-center justify-center mb-4">
                  <h3 className="text-2xl font-bold text-white">Hydra Analytics</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-white font-medium">Conversions</span>
                    </div>
                    <span className="text-green-400 font-bold">+287%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-white font-medium">Reach</span>
                    </div>
                    <span className="text-blue-400 font-bold">2.3M</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="h-16 bg-gradient-to-t from-purple-500/50 to-purple-400/30 rounded-lg flex items-end justify-center pb-2">
                      <div className="w-2 h-8 bg-purple-400 rounded-full"></div>
                    </div>
                    <div className="h-16 bg-gradient-to-t from-blue-500/50 to-blue-400/30 rounded-lg flex items-end justify-center pb-2">
                      <div className="w-2 h-12 bg-blue-400 rounded-full"></div>
                    </div>
                    <div className="h-16 bg-gradient-to-t from-cyan-500/50 to-cyan-400/30 rounded-lg flex items-end justify-center pb-2">
                      <div className="w-2 h-10 bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center animate-float border border-purple-400/30" style={{ animationDelay: "0.5s" }}>
                <div className="text-2xl font-bold text-purple-400">94%</div>
                <div className="text-xs text-center text-purple-300">Client Satisfaction</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center animate-float border border-cyan-400/30" style={{ animationDelay: "1.5s" }}>
                <div className="text-2xl font-bold text-cyan-400">∞</div>
                <div className="text-xs text-center text-cyan-300">Growth Potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
