
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500">
              Hydra
            </span>
            <span className="text-gray-800 ml-1">Marketing</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#blog"
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            Contact
          </a>
          <Button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:opacity-90 text-white px-6 py-2 shadow-lg">
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg animate-fade-in">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 px-3 py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:opacity-90 text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
