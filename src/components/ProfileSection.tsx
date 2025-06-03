import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MailIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Instagram,
  Twitter,
} from "lucide-react";

interface ProfileSectionProps {
  name?: string;
  role?: string;
  location?: string;
  mission?: string;
  avatarUrl?: string;
  email?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
  resumeUrl?: string;
}

const ProfileSection = ({
  name = "Vedant Bathia",
  role = "Graphic Designer and Video Editor",
  location = "Gujarat, India",
  mission = "Welcome to my creative space! I am a 15-year-old passionate graphic designer and video editor from Gujarat, India. Despite my young age, I have completed professional courses in this field.This website is my personal portfolio, created to showcase some of my best works in graphic designing and video editing. Whether it is bringing ideas to life through motion or crafting visually striking graphics, I aim to combine creativity with technical skills to deliver meaningful results.Take a look around, and feel free to reach out if something catches your eye. Let us create something awesome together!",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=design",
  email = "work.vedantbathia@gmail.com",
  socialLinks = {
    linkedin: "https://linkedin.com/in/designer",
    github: "https://github.com/designer",
    instagram:
      "https://www.instagram.com/vedantbathia/?utm_source=ig_web_button_share_sheet",
    twitter: "https://twitter.com/designer",
  },
  resumeUrl = "#",
}: ProfileSectionProps) => {
  return (
    <section className="w-full py-24 bg-black text-white" id="profile">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Panel - Personal Introduction */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
              Hello!
            </h2>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <Avatar className="w-32 h-32 border-2 border-white/10">
                <AvatarImage src={avatarUrl} alt={name} />
                <AvatarFallback className="bg-gray-800 text-white text-xl">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-1">{name}</h3>
                <p className="text-gray-400 mb-1">{role}</p>
                <p className="text-gray-500 mb-4">{location}</p>
              </div>
            </div>

            <p className="text-gray-300 mb-8 text-center md:text-left max-w-md">
              {mission}
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              {resumeUrl && <></>}
            </div>
          </div>

          {/* Right Panel - Contact Information */}
          <div>
            <Card className="bg-gray-900/50 border-gray-800 overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">vv</h3>
                <div>
                  <p className="text-gray-400 mb-2">Contact</p>

                  <a
                    href={`mailto:${email}`}
                    className="flex items-center text-white hover:text-primary transition-colors mb-4"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {email}
                  </a>
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-primary transition-colors"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </a>
                </div>
                <Separator className="bg-gray-800" />
                <div className="space-y-6">
                  <p className="text-gray-400 mb-2">Skills</p>

                  <Separator className="bg-gray-800" />
                  <div></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
