"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Heart,
  Mail,
  MessageCircle,
  Instagram,
  Sparkles,
  Send
} from "lucide-react";
import { BackgroundLines } from "./ui/background-lines";
import { toast } from "sonner";
import { VanishingTextarea } from "./ui/vanishing-textarea";
import { useState, useRef } from "react";
import { sendContactEmail } from "@/lib/actions";

// X (Twitter) SVG Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const projectPlaceholders = [
    "I need a website that makes people say 'WOW!' 🤯\nThinking something modern, sleek, and absolutely stunning...",
    "I've got this crazy idea for an app 💡\nImagine if Netflix met Instagram, but for... well, let me explain...",
    "My current website looks like it's from 2003 😅\nTime for a complete makeover that screams 'I'm awesome!'",
    "I need an e-commerce store that converts like crazy 🚀\nSomething that makes buying irresistible...",
    "Picture this: a dashboard that makes data look sexy 📊✨\nNumbers have never looked so good...",
    "I want to automate everything in my business 🤖\nLet's build something that works while I sleep...",
    "My competitors are eating my lunch 😤\nI need a digital weapon of mass attraction...",
    "I have zero budget but infinite dreams 🌟\n(Just kidding about the budget... or am I? 😏)",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    // Simple validation
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Add message to formData since it's controlled by state
    formData.set('message', message);

    // Send email using server action
    const sendEmailPromise = sendContactEmail(formData);

    toast.promise(
      sendEmailPromise,
      {
        loading: 'Sending your message...',
        success: (result) => {
          if (result.success) {
            // Reset form on success with null check
            if (formRef.current) {
              formRef.current.reset();
            }
            setMessage("");
            return `Thanks ${name}! Your message has been sent. I'll get back to you soon!`;
          } else {
            throw new Error(result.error);
          }
        },
        error: (error) => {
          return error.message || 'Failed to send message. Please try again.';
        },
      }
    );
  };

  const handleVanishSubmit = () => {
    // This will be called when the vanishing animation completes
    // The form submission will be handled by the main form submit
  };

  const socials = [
    { 
      name: "WhatsApp", 
      icon: MessageCircle, 
      color: "text-green-500 hover:text-green-400",
      bgColor: "hover:bg-green-500/10",
      href: "https://wa.me/+2347052915729" 
    },
    { 
      name: "Email", 
      icon: Mail, 
      color: "text-blue-500 hover:text-blue-400",
      bgColor: "hover:bg-blue-500/10",
      href: "mailto:samsonrichfield@gmail.com" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      color: "text-pink-500 hover:text-pink-400",
      bgColor: "hover:bg-pink-500/10",
      href: "https://www.instagram.com/thy._.ricchiee/" 
    },
    { 
      name: "X", 
      icon: XIcon, 
      color: "text-foreground hover:text-foreground/80",
      bgColor: "hover:bg-foreground/10",
      href: "https://x.com/samsonrichfiel1?t=DzF4TXHtbsiEJoOmylWYwg&s=09" 
    }
  ];

  return (
    <footer id="contact" className="relative w-full">
      <BackgroundLines className="w-full">
        <div className="relative">
          {/* Contact Section */}
          <div className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
            <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2 text-sm text-muted-foreground mb-6">
              <Sparkles className="w-4 h-4" />
              Let&apos;s Connect
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          {" Let's Build Together"}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s bring your ideas to life! Whether it&apos;s a stunning website, a powerful web app, 
              or something completely custom – I&apos;m here to make it happen.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mb-12"
            >
              {/* <Button 
                size="lg" 
                className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg"
              >
            
                Let's Work Together
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button> */}
            </motion.div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true }}
                    className={`p-4 rounded-2xl border border-border/50 ${social.bgColor} ${social.color} transition-all duration-300 group`}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 max-w-md mx-auto"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3">Send me a message</h3>
                <p className="text-muted-foreground">
                  Got a project in mind? Let&apos;s start the conversation.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.them"
                    className="h-12 rounded-xl bg-background/50 border-border/50 focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                   Leave me a message
                  </Label>
                  <VanishingTextarea
                    id="message"
                    name="message"
                    placeholders={projectPlaceholders}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onSubmit={handleVanishSubmit}
                    rows={4}
                    required
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>by</span>
              <span className="font-medium text-foreground">
                Thy • Richfield <span className="text-lg">👑</span>
              </span>
            </div>
          </div>
        </div>
        </div></div>
      </BackgroundLines>
    </footer>
  );
}
