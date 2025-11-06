"use client";

import { useState } from "react";
import { SectionContainer } from "./section-container";
import { AnimatedSection } from "./animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Linkedin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description:
          "Please try again or email me directly at widorenyin0@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ Contact info with brand colors
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "widorenyin0@gmail.com",
      href: "mailto:widorenyin0@gmail.com",
      description: "Send me an email",
      hoverColor: "group-hover:bg-[#EA4335]/10", // Gmail red
      iconHoverColor: "group-hover:text-[#EA4335]", // Gmail red
      bgHoverColor: "group-hover:bg-[#EA4335]/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Let's Connect",
      href: "https://linkedin.com/in/idorenyin-williams",
      description: "Connect with me professionally",
      hoverColor: "group-hover:bg-[#0A66C2]/10", // LinkedIn blue
      iconHoverColor: "group-hover:text-[#0A66C2]", // LinkedIn blue
      bgHoverColor: "group-hover:bg-[#0A66C2]/20",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nigeria",
      href: "#",
      description: "Available for remote work worldwide",
      hoverColor: "group-hover:bg-[#34A853]/10", // Google Maps green
      iconHoverColor: "group-hover:text-[#34A853]", // Google Maps green
      bgHoverColor: "group-hover:bg-[#34A853]/20",
    },
  ];

  return (
    <SectionContainer id="contact">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatedSection delay={0.2}>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a question, a project idea, or just want to
                connect, feel free to reach out. I&#39;m always excited to
                discuss new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact) => (
                <div
                  key={contact.label}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  {/* Icon container with brand-specific hover colors */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${contact.bgHoverColor}`}
                  >
                    <contact.icon
                      className={`w-6 h-6 text-primary transition-colors duration-300 ${contact.iconHoverColor}`}
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">
                      {contact.label}
                    </p>
                    {contact.href !== "#" ? (
                      <a
                        href={contact.href}
                        target={
                          contact.label === "LinkedIn" ? "_blank" : undefined
                        }
                        rel={
                          contact.label === "LinkedIn"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`font-medium transition-colors duration-300 inline-flex items-center gap-2 ${contact.iconHoverColor}`}
                      >
                        {contact.value}
                        {contact.label === "LinkedIn" && (
                          <span
                            className={`text-xs text-muted-foreground transition-colors duration-300 ${contact.iconHoverColor}`}
                          >
                            →
                          </span>
                        )}
                      </a>
                    ) : (
                      <p
                        className={`font-medium transition-colors duration-300 ${contact.iconHoverColor}`}
                      >
                        {contact.value}
                      </p>
                    )}
                    {contact.description && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {contact.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-primary">24h</p>
                  <p className="text-sm text-muted-foreground">
                    Average Response Time
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">5+ Years</p>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <form
            onSubmit={handleSubmit}
            className="bg-card border rounded-lg p-8 space-y-6 shadow-lg"
          >
            <div className="space-y-2">
              <Label htmlFor="name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">
                Subject <span className="text-destructive">*</span>
              </Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Collaboration / Question"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more about your project or what you'd like to discuss..."
                rows={6}
                required
                disabled={isSubmitting}
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                {formData.message.length} / 500 characters
              </p>
            </div>

            <Button
              type="submit"
              className="w-full gap-2"
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Your information is safe and will only be used to respond to your
              message.
            </p>
          </form>
        </AnimatedSection>
      </div>
    </SectionContainer>
  );
}
