import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = activeSection;

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < 120) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-6 py-2">
        <div className="relative flex items-center h-12">

          {/* LEFT — Portfolio */}
          <div className="font-bold text-lg text-foreground tracking-wide">
            PORTFOLIO
          </div>

          {/* CENTER — Nav */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors
                  ${activeSection === link.href.substring(1)
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground/80 hover:bg-muted/70 hover:text-primary"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* RIGHT — Controls */}
          <div className="ml-auto flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/90 backdrop-blur-md border-b shadow-md">
            <div className="flex flex-col gap-3 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors
                    ${activeSection === link.href.substring(1)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
