import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCalendarAlt, FaAward } from "react-icons/fa";
import { SiAndroid, SiUnity, SiFigma, SiGoogle, SiMicrosoft, SiCoursera } from "react-icons/si";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: "android" | "unity" | "design" | "general";
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Android Developer Nanodegree",
    issuer: "Google / Udacity",
    issueDate: "October 2024",
    credentialId: "AND-2024-12345",
    verificationUrl: "#",
    description: "Comprehensive program covering Android app development, UI/UX design, and Google Play Store deployment.",
    icon: SiAndroid,
    category: "android"
  },
  {
    id: 2,
    title: "Unity Certified User: Programmer",
    issuer: "Unity Technologies",
    issueDate: "September 2024",
    credentialId: "UCU-P-2024-67890",
    verificationUrl: "#",
    description: "Certification demonstrating proficiency in Unity engine programming, game mechanics, and C# scripting.",
    icon: SiUnity,
    category: "unity"
  },
  {
    id: 3,
    title: "UI/UX Design Specialization",
    issuer: "California Institute of the Arts",
    issueDate: "August 2024",
    credentialId: "COURSERA-UX-11223",
    verificationUrl: "#",
    description: "Complete specialization covering user research, wireframing, prototyping, and visual design principles.",
    icon: SiFigma,
    category: "design"
  },
  {
    id: 4,
    title: "Google Play Console Basics",
    issuer: "Google",
    issueDate: "July 2024",
    credentialId: "GPC-2024-44556",
    verificationUrl: "#",
    description: "Certification covering app publishing, monetization strategies, and Play Console management.",
    icon: SiGoogle,
    category: "android"
  }
];

export default function CertificatesSection() {
  const { ref, isVisible } = useScrollAnimation();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "android":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "unity":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "design":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "general":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "android":
        return "Android";
      case "unity":
        return "Unity";
      case "design":
        return "Design";
      case "general":
        return "General";
      default:
        return "Certificate";
    }
  };

  return (
    <section
      id="certificates"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 opacity-0 transform translate-y-5 transition-all duration-1000 ease-out bg-background dark:bg-slate-950 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            Certificates
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-card rounded-lg shadow-lg p-6 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <certificate.icon className="text-2xl text-primary" />
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(certificate.category)}`}>
                      {getCategoryLabel(certificate.category)}
                    </span>
                  </div>
                </div>
                {certificate.verificationUrl && (
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
                {certificate.title}
              </h3>

              <p className="text-primary font-medium mb-3">
                {certificate.issuer}
              </p>

              <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-xs" />
                  <span>{certificate.issueDate}</span>
                </div>
                {certificate.credentialId && (
                  <div className="flex items-center gap-1">
                    <FaAward className="text-xs" />
                    <span>ID: {certificate.credentialId}</span>
                  </div>
                )}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed">
                {certificate.description}
              </p>

              {certificate.verificationUrl && (
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <span>Verify Certificate</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60 text-sm">
            All certificates are verified and can be validated through the issuing organizations
          </p>
        </div>
      </div>
    </section>
  );
}