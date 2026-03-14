import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { siteData } from "@/content/data";

export default function Footer() {
  const socials = siteData.socialLinks;

  const iconMap: Record<string, React.ReactNode> = {
    github: <Github size={18} />,
    linkedin: <Linkedin size={18} />,
    twitter: <Twitter size={18} />,
    email: <Mail size={18} />,
  };

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.name === "email" ? undefined : "_blank"}
                rel={social.name === "email" ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                {iconMap[social.name] || social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
