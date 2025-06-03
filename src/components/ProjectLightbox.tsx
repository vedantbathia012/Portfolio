import React, { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  tags?: string[];
  client?: string;
  year?: string;
}

interface ProjectLightboxProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  project?: Project;
  projects?: Project[];
  onNavigate?: (direction: "prev" | "next") => void;
}

const ProjectLightbox = ({
  isOpen = false,
  onOpenChange = () => {},
  project = {
    id: "1",
    title: "Sample Project",
    category: "Branding",
    description:
      "This is a sample project description. It showcases the design process and final outcomes of this creative work.",
    images: [
      "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    ],
    tags: ["Branding", "Logo Design", "Identity"],
    client: "Sample Client",
    year: "2024",
  },
  projects = [],
  onNavigate = () => {},
}: ProjectLightboxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const currentProjectIndex = projects.findIndex((p) => p.id === project.id);
  const hasPrevProject = currentProjectIndex > 0;
  const hasNextProject =
    currentProjectIndex < projects.length - 1 && currentProjectIndex !== -1;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] p-0 bg-zinc-900 border-zinc-800 text-white overflow-hidden">
        <div className="relative flex flex-col h-full bg-zinc-900">
          {/* Close button */}
          <DialogClose className="absolute top-4 right-4 z-50">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 hover:bg-black/70 text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </DialogClose>

          {/* Main content */}
          <div className="flex flex-col md:flex-row h-full overflow-auto">
            {/* Image section */}
            <div className="relative w-full md:w-2/3 h-[50vh] md:h-auto bg-black flex items-center justify-center">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />

              {/* Image navigation */}
              {project.images.length > 1 && (
                <>
                  <Button
                    onClick={handlePrevImage}
                    disabled={currentImageIndex === 0}
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white disabled:opacity-30"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={handleNextImage}
                    disabled={currentImageIndex === project.images.length - 1}
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white disabled:opacity-30"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}

              {/* Image counter */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full text-xs">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>

            {/* Info section */}
            <div className="w-full md:w-1/3 p-6 md:p-8 overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-zinc-400">{project.category}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium">About</h4>
                  <p className="text-zinc-300">{project.description}</p>
                </div>

                {(project.client || project.year) && (
                  <div className="grid grid-cols-2 gap-4">
                    {project.client && (
                      <div>
                        <h5 className="text-sm text-zinc-400">Client</h5>
                        <p>{project.client}</p>
                      </div>
                    )}
                    {project.year && (
                      <div>
                        <h5 className="text-sm text-zinc-400">Year</h5>
                        <p>{project.year}</p>
                      </div>
                    )}
                  </div>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div>
                    <h5 className="text-sm text-zinc-400 mb-2">Tags</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-zinc-800 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project navigation */}
          {projects.length > 1 && (
            <div className="flex justify-between p-4 border-t border-zinc-800 bg-zinc-900">
              <Button
                onClick={() => onNavigate("prev")}
                disabled={!hasPrevProject}
                variant="ghost"
                className="text-zinc-400 hover:text-white disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous Project
              </Button>
              <Button
                onClick={() => onNavigate("next")}
                disabled={!hasNextProject}
                variant="ghost"
                className="text-zinc-400 hover:text-white disabled:opacity-30"
              >
                Next Project
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectLightbox;
