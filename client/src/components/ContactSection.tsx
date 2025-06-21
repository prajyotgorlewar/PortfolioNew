import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form data:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 bg-section-light-alt opacity-0 transform translate-y-5 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Interested in working together? Let's connect and discuss your project!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-6">
              Contact Information
            </h3>
            
            <div className="mb-6">
              <p className="text-foreground/70 mb-6">
                Feel free to reach out to me through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:prajyot@example.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    prajyot@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="text-foreground">Mumbai, India</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold font-poppins text-foreground mb-4">
              Social Profiles
            </h3>
            
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition-transform hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition-transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition-transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transition-transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold font-poppins text-card-foreground mb-6">
                Send Me a Message
              </h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-card-foreground/80 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border-input focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-card-foreground/80 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="border-input focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-card-foreground/80 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  placeholder="Your message"
                  className="w-full border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-primary-hover transition-colors focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
