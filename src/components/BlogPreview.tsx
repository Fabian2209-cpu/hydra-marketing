
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Wordpress } from "lucide-react";

const BlogPreview: React.FC = () => {
  const blogPosts = [
    {
      title: "The Multi-Channel Marketing Revolution: Why Single-Platform Strategies Are Dead",
      description: "Discover how modern brands are leveraging interconnected marketing ecosystems to dominate their markets.",
      category: "Strategy",
      date: "Dec 20, 2024",
      author: "Hydra Team",
      image: "bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500",
      readTime: "8 min read"
    },
    {
      title: "AI-Powered Content That Converts: The Future of Digital Storytelling",
      description: "Learn how artificial intelligence is transforming content creation and driving unprecedented engagement rates.",
      category: "Content Marketing",
      date: "Dec 15, 2024",
      author: "Sarah Chen",
      image: "bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500",
      readTime: "6 min read"
    },
    {
      title: "Social Media Domination: Building Communities That Drive Revenue",
      description: "Master the art of community building across platforms and turn followers into loyal customers.",
      category: "Social Media",
      date: "Dec 10, 2024",
      author: "Marcus Rodriguez",
      image: "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500",
      readTime: "10 min read"
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-4 reveal">
            <Wordpress className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-purple-700 font-medium text-sm">HYDRA BLOG</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 reveal">
            Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500">Intelligence</span> Hub
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 reveal leading-relaxed">
            Cutting-edge insights, proven strategies, and industry secrets from our team of 
            marketing experts. Stay ahead of the curve with our WordPress-powered blog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 reveal bg-white">
              <div className={`h-64 ${post.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold bg-white/90 text-gray-800 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="text-xs font-medium bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                    {post.readTime}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-gray-600 leading-relaxed">
                  {post.description}
                </p>
              </CardContent>
              
              <CardFooter>
                <Button variant="ghost" className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 p-0 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* WordPress Integration CTA */}
        <div className="mt-16 text-center reveal">
          <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Wordpress className="w-12 h-12 text-cyan-400 mr-4" />
                <h3 className="text-3xl font-bold">Powered by WordPress</h3>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive blog runs on WordPress, delivering fresh insights, case studies, 
                and actionable marketing strategies weekly. Subscribe to stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 text-white px-8 py-4 text-lg shadow-xl">
                  Subscribe to Blog
                </Button>
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/30 px-8 py-4 text-lg backdrop-blur-sm">
                  View All Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
