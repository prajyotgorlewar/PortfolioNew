import { useState, useEffect } from "react";
import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActive = "";
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 100) {
          currentActive = section.getAttribute("id") || "";
        }
      });
      
      if (currentActive && currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header className="fixed w-full z-50 transition-colors duration-300 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold font-poppins text-foreground">
            PORTFOLIO
          </a>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
            
            <ThemeToggle />
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground/80" />
            ) : (
              <Menu className="h-6 w-6 text-foreground/80" />
            )}
          </Button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${
                    activeSection === link.href.substring(1)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  } transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex items-center">
                <span className="text-foreground/80 mr-3">Dark Mode</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
