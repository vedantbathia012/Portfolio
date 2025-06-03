import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ProfileSection from "./ProfileSection";
import PortfolioSection from "./PortfolioSection";
import ProjectLightbox from "./ProjectLightbox";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  additionalImages?: string[];
}

const Home = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Sample portfolio data
  const portfolioData = {
    logofolio: {
      title: "Logofolio",
      description:
        "A collection of logo designs for various brands and businesses.",
      projects: [
        {
          id: "1",
          title: "Abstract Logo",
          category: "logofolio",
          image:
            "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&q=80",
        },
        {
          id: "2",
          title: "Minimalist Mark",
          category: "logofolio",
          image:
            "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80",
        },
        {
          id: "3",
          title: "Geometric Brand",
          category: "logofolio",
          image:
            "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80",
        },
        {
          id: "4",
          title: "Wordmark Design",
          category: "logofolio",
          image:
            "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&q=80",
        },
        {
          id: "5",
          title: "Emblem Logo",
          category: "logofolio",
          image:
            "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&q=80",
        },
        {
          id: "6",
          title: "Monogram Design",
          category: "logofolio",
          image:
            "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80",
        },
      ],
    },
    uiux: {
      title: "UI/UX",
      description: "Website / App / Dashboard Design",
      projects: [
        {
          id: "7",
          title: "Mobile App Interface",
          category: "uiux",
          image:
            "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&q=80",
        },
        {
          id: "8",
          title: "Dashboard Design",
          category: "uiux",
          image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
        },
        {
          id: "9",
          title: "E-commerce Website",
          category: "uiux",
          image:
            "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&q=80",
        },
        {
          id: "10",
          title: "Landing Page",
          category: "uiux",
          image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
        },
      ],
    },
    branding: {
      title: "Branding",
      description: "Complete brand identity systems and applications.",
      projects: [
        {
          id: "11",
          title: "Corporate Identity",
          category: "branding",
          image:
            "https://images.unsplash.com/photo-1600775508114-5c30cf911a40?w=800&q=80",
        },
        {
          id: "12",
          title: "Brand Guidelines",
          category: "branding",
          image:
            "https://images.unsplash.com/photo-1635405074683-96d6b5714921?w=800&q=80",
        },
        {
          id: "13",
          title: "Packaging Design",
          category: "branding",
          image:
            "https://images.unsplash.com/photo-1600775508114-5c30cf911a40?w=800&q=80",
        },
        {
          id: "14",
          title: "Business Stationery",
          category: "branding",
          image:
            "https://images.unsplash.com/photo-1635405074683-96d6b5714921?w=800&q=80",
        },
      ],
    },
    icons: {
      title: "Icon Design",
      description: "Custom icon sets and symbol systems.",
      projects: [
        {
          id: "15",
          title: "Line Icon Set",
          category: "icons",
          image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
        },
        {
          id: "16",
          title: "Filled Icon Collection",
          category: "icons",
          image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
        },
        {
          id: "17",
          title: "App Icon System",
          category: "icons",
          image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
        },
        {
          id: "18",
          title: "Custom Symbols",
          category: "icons",
          image:
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
        },
      ],
    },
    social: {
      title: "Social Media",
      description: "Engaging content for various social platforms.",
      projects: [
        {
          id: "19",
          title: "Instagram Campaign",
          category: "social",
          image:
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
        },
        {
          id: "20",
          title: "Social Media Kit",
          category: "social",
          image:
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
        },
        {
          id: "21",
          title: "Story Templates",
          category: "social",
          image:
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
        },
        {
          id: "22",
          title: "Content Calendar",
          category: "social",
          image:
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
        },
      ],
    },
    posters: {
      title: "Poster Designs",
      description: "Creative poster designs for various purposes.",
      projects: [
        {
          id: "23",
          title: "Event Poster",
          category: "posters",
          image:
            "https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?w=800&q=80",
        },
        {
          id: "24",
          title: "Promotional Poster",
          category: "posters",
          image:
            "https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?w=800&q=80",
        },
        {
          id: "25",
          title: "Art Exhibition",
          category: "posters",
          image:
            "https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?w=800&q=80",
        },
        {
          id: "26",
          title: "Typography Poster",
          category: "posters",
          image:
            "https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?w=800&q=80",
        },
      ],
    },
    illustrations: {
      title: "Illustrations",
      description: "Custom illustrations and artwork.",
      projects: [
        {
          id: "27",
          title: "Digital Illustration",
          category: "illustrations",
          image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        },
        {
          id: "28",
          title: "Character Design",
          category: "illustrations",
          image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        },
        {
          id: "29",
          title: "Editorial Illustration",
          category: "illustrations",
          image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        },
        {
          id: "30",
          title: "Concept Art",
          category: "illustrations",
          image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
        },
      ],
    },
    typography: {
      title: "Typography",
      description: "Creative typography and lettering projects.",
      projects: [
        {
          id: "31",
          title: "Custom Lettering",
          category: "typography",
          image:
            "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=800&q=80",
        },
        {
          id: "32",
          title: "Typography Poster",
          category: "typography",
          image:
            "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=800&q=80",
        },
        {
          id: "33",
          title: "Font Design",
          category: "typography",
          image:
            "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=800&q=80",
        },
        {
          id: "34",
          title: "Calligraphy",
          category: "typography",
          image:
            "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=800&q=80",
        },
      ],
    },
  };

  // Function to handle project click and open lightbox
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setLightboxOpen(true);
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear selected project after animation
  };

  // Navigation sections
  const navSections = [
    { id: "hero", label: "Home" },
    { id: "profile", label: "About" },
    { id: "logofolio", label: "Logofolio" },
    { id: "uiux", label: "UI/UX" },
    { id: "branding", label: "Branding" },
    { id: "icons", label: "Icons" },
    { id: "social", label: "Social Media" },
    { id: "posters", label: "Posters" },
    { id: "illustrations", label: "Illustrations" },
    { id: "typography", label: "Typography" },
  ];

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm p-6 hidden md:block">
        <div className="container mx-auto">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <span className="text-white font-bold text-lg tracking-wider">
                PORTFOLIO
              </span>
            </li>
            {navSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm p-4 md:hidden">
        <div className="overflow-x-auto">
          <ul className="flex gap-4 justify-start min-w-max px-2">
            <li>
              <span className="text-white font-bold text-sm tracking-wider whitespace-nowrap">
                PORTFOLIO
              </span>
            </li>
            {navSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-xs whitespace-nowrap"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20">
        <ProfileSection />
      </section>

      {/* Portfolio Sections */}
      <section id="logofolio" className="py-20">
        <PortfolioSection
          title={portfolioData.logofolio.title}
          description={portfolioData.logofolio.description}
          projects={portfolioData.logofolio.projects}
          onProjectClick={handleProjectClick}
        />
      </section>

      <section id="uiux" className="py-20">
        <PortfolioSection
          title={portfolioData.uiux.title}
          description={portfolioData.uiux.description}
          projects={portfolioData.uiux.projects}
          onProjectClick={handleProjectClick}
        />
      </section>

      <section id="branding" className="py-20">
        <PortfolioSection
          title={portfolioData.branding.title}
          description={portfolioData.branding.description}
          projects={portfolioData.branding.projects}
          onProjectClick={handleProjectClick}
        />
      </section>

      <section id="icons" className="py-20">
        <PortfolioSection
          title={portfolioData.icons.title}
          description={portfolioData.icons.description}
          projects={portfolioData.icons.projects}
          onProjectClick={handleProjectClick}
        />
      </section>

      <section id="social" className="py-20">
        <PortfolioSection
          title={portfolioData.social.title}
          description={portfolioData.social.description}
          projects={portfolioData.social.projects}
          onProjectClick={handleProjectClick}
        />
      </section>

      <section id="posters" className="py-20">
        <PortfolioSection
          title={portfolioData.posters.title}
          description={portfolioData.posters.description}
          projects={portfolioData.posters.projects}
          onProjectClick={handleProjectClick}
        />
      </section>

      <section id="illustrations" className="py-20">
        <PortfolioSection
          title={portfolioData.illustrations.title}
          description={portfolioData.illustrations.description}
          projects={portfolioData.illustrations.projects}
          onProjectClick={handleProjectClick}
        />
      </section>

      <section id="typography" className="py-20">
        <PortfolioSection
          title={portfolioData.typography.title}
          description={portfolioData.typography.description}
          projects={portfolioData.typography.projects}
          onProjectClick={handleProjectClick}
        />
      </section>

      {/* Footer */}
      <footer className="py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-6">Thank You</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Interested in working together? Feel free to reach out through any
            of the channels below.
          </p>

          <div className="flex justify-center gap-6 mb-10">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="sr-only">Email</span>
            </a>
          </div>

          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </motion.div>
      </footer>

      {/* Project Lightbox */}
      {selectedProject && (
        <ProjectLightbox
          project={selectedProject}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Home;
