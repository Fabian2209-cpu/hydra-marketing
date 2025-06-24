
import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Mail, Globe, PenTool, BarChart, Share2, Target, Zap, Users, Award } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const services = [
    {
      title: "Multi-Channel SEO",
      description: "Dominate search results across all platforms with our comprehensive SEO strategies that adapt and multiply.",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      title: "Content Amplification",
      description: "Create compelling content that spreads across channels like wildfire, establishing thought leadership.",
      icon: PenTool,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Social Ecosystem",
      description: "Build interconnected social presence that grows stronger with each interaction and platform.",
      icon: Share2,
      color: "from-cyan-500 to-cyan-700",
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-100",
    },
    {
      title: "Email Automation",
      description: "Deploy intelligent email campaigns that nurture leads automatically across multiple touchpoints.",
      icon: Mail,
      color: "from-indigo-500 to-indigo-700",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
    },
    {
      title: "PPC Mastery",
      description: "Maximize ROI with strategic paid campaigns that scale and adapt across all major advertising platforms.",
      icon: Target,
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      title: "Advanced Analytics",
      description: "Get comprehensive insights that reveal growth opportunities across your entire marketing ecosystem.",
      icon: BarChart,
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-4 reveal">
            <Zap className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-purple-700 font-medium text-sm">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 reveal">
            Multi-Headed{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500">
              Marketing Power
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 reveal leading-relaxed">
            Like the legendary Hydra, our marketing approach grows stronger with each channel. 
            One strategy becomes many, multiplying your brand's reach and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 hover:-translate-y-3 reveal border border-gray-100 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-gray-700" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-900 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <Button 
                variant="ghost" 
                className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 p-0 font-semibold group-hover:translate-x-2 transition-transform duration-300"
              >
                Learn more →
              </Button>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center reveal">
          <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Multiply Your Marketing Impact?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let Hydra Marketing unleash your brand's true potential across all digital channels.
              </p>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white px-8 py-6 text-lg shadow-xl">
                Start Your Transformation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
