import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  image: string;
  description?: string;
  fullImage?: string;
}

interface PortfolioSectionProps {
  title?: string;
  description?: string;
  projects?: Project[];
  columns?: number;
  id?: string;
  showViewAll?: boolean;
}

const PortfolioSection = ({
  title = "Portfolio Section",
  description = "A collection of creative projects showcasing professional design work.",
  projects = [
    {
      id: "1",
      title: "Project 1",
      image:
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
      description: "A minimalist logo design for a modern brand.",
      fullImage:
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=1200&q=90",
    },
    {
      id: "2",
      title: "Project 2",
      image:
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80",
      description: "Brand identity system with logo and color palette.",
      fullImage:
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1200&q=90",
    },
    {
      id: "3",
      title: "Project 3",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      description: "UI/UX design for a mobile application.",
      fullImage:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=90",
    },
    {
      id: "4",
      title: "Project 4",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description: "Icon set design for a tech company.",
      fullImage:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=90",
    },
    {
      id: "5",
      title: "Project 5",
      image:
        "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=800&q=80",
      description: "Poster design for an art exhibition.",
      fullImage:
        "https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=1200&q=90",
    },
    {
      id: "6",
      title: "Project 6",
      image:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80",
      description: "Branding package for a luxury product line.",
      fullImage:
        "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=1200&q=90",
    },
  ],
  columns = 3,
  id = "portfolio",
  showViewAll = true,
}: PortfolioSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <section
      id={id}
      className="w-full py-16 px-4 md:px-8 lg:px-16 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 md:gap-8`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <Card className="overflow-hidden bg-zinc-900 border-zinc-800 h-full">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-medium text-white">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        {showViewAll && (
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-800 text-white group"
            >
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        )}
      </div>

      {/* Project Lightbox Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-zinc-900 text-white border-zinc-800 max-w-4xl p-0">
          {selectedProject && (
            <div className="relative">
              <img
                src={selectedProject.fullImage || selectedProject.image}
                alt={selectedProject.title}
                className="w-full object-contain max-h-[70vh]"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                {selectedProject.description && (
                  <p className="text-gray-300">{selectedProject.description}</p>
                )}
              </div>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-black/50 hover:bg-black/70 border-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevProject();
                  }}
                >
                  <ChevronRight className="h-6 w-6 rotate-180" />
                </Button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-black/50 hover:bg-black/70 border-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextProject();
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
