import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/config";
import { LeetCodeIcon, WhatsAppIcon } from "@/lib/icons";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const footerStyle: React.CSSProperties = {
    borderTop: "1px solid #e5e7eb", // border-t
  };

  const containerStyle: React.CSSProperties = {
    padding: "1rem 0", // py-4
    display: "flex",
    flexDirection: "column", // flex-col
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "0.875rem", // text-sm
    color: "#6b7280", // text-muted-foreground
    textAlign: "center",
  };

  const socialContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem", // gap-1
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle} className="sm:text-left">
          &copy; {year} Kanish. All rights reserved.
        </p>
        <div style={socialContainerStyle}>
          {socialLinks
            .filter((link) => link.label !== "Kaggle")
            .map(({ href, icon: Icon, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                asChild
                style={{ padding: "0.25rem" }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                >
                  <Icon style={{ width: "1.25rem", height: "1.25rem" }} />
                </a>
              </Button>
            ))}
        </div>
      </div>
    </footer>
  );
}
