"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePageTransition } from "@/hooks/use-page-transition";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useTheme } from "next-themes";
import { useColor } from "@/components/color-provider";
import { 
  Menu, 
  Sun, 
  Moon, 
  Monitor, 
  Palette, 
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
  ArrowRight
} from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { currentColor, setColor, colors, getDisplayColor } = useColor();
  const pathname = usePathname();
  const { navigateWithTransition } = usePageTransition();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState("home");
  const [currentHash, setCurrentHash] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items with their corresponding section IDs (excluding Projects for pill nav)
  const navItems = [
    { label: "Home", id: "home", href: "/" },
    { label: "Tools", id: "tools" },
    { label: "Experience", id: "about" },
    { label: "Strategy", id: "approach" },
    { label: "Contact", id: "contact" }
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const projectsItem = { label: "Projects", id: "projects", href: "/projects" };

  // All navigation items for mobile (excludes Projects)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allNavItems = [
    { label: "Home", id: "home", href: "/" },
    { label: "Tools", id: "tools" },
    { label: "Experience", id: "about" },
    { label: "Strategy", id: "approach" },
    { label: "Contact", id: "contact" }
  ];

  // Mobile Link component that closes sheet after navigation
  const MobileSmoothLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
    const handleClick = (e: React.MouseEvent) => {
      // Close mobile menu
      setMobileMenuOpen(false);
      
      // Handle different navigation types
      if (href === "/projects") {
        // Only use page transition when coming from projects page
        if (pathname === '/projects') {
          e.preventDefault();
          navigateWithTransition("/projects");
        }
        // When on home page, use normal navigation (no transition)
      }
      else if (href.startsWith('/#') && pathname === '/') {
        e.preventDefault();
        const sectionId = href.slice(2); // Remove /#
        scrollToSection(sectionId);
        window.history.pushState(null, '', href);
        setCurrentHash(sectionId);
      }
      // If it's home page and we're already on home, scroll to top
      else if (href === '/' && pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        setCurrentHash('');
      }
      // If it's home page and we're on projects, use page transition
      else if (href === '/' && pathname === '/projects') {
        e.preventDefault();
        navigateWithTransition('/');
      }
    };

    return (
      <Link href={href} onClick={handleClick} className={className}>
        {children}
      </Link>
    );
  };

  // Custom Link component that handles smooth scrolling for hash links
  const SmoothLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
    const handleClick = (e: React.MouseEvent) => {
      // Handle navigation to projects page
      if (href === "/projects") {
        // Only use page transition when coming from projects page
        if (pathname === '/projects') {
          e.preventDefault();
          navigateWithTransition("/projects");
        }
        // When on home page, use normal navigation (no transition)
      }
      // If it's a hash link and we're on the homepage, smooth scroll instead of navigating
      else if (href.startsWith('/#') && pathname === '/') {
        e.preventDefault();
        const sectionId = href.slice(2); // Remove /#
        scrollToSection(sectionId);
        window.history.pushState(null, '', href);
        setCurrentHash(sectionId);
      }
      // If it's home page and we're already on home, scroll to top
      else if (href === '/' && pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        setCurrentHash('');
      }
      // If it's home page and we're on projects page, use page transition
      else if (href === '/' && pathname === '/projects') {
        e.preventDefault();
        navigateWithTransition('/');
      }
    };

    return (
      <Link href={href} onClick={handleClick} className={className}>
        {children}
      </Link>
    );
  };

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // navbar height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation click
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.href) {
      // If it's a route (like /projects), navigate to it
      window.location.href = item.href;
    } else {
      // If it's a section and we're not on homepage, go to homepage first
      if (pathname !== '/') {
        window.location.href = `/#${item.id}`;
      } else {
        // If we're on homepage, just scroll to section
        scrollToSection(item.id);
        // Update the URL hash without reloading
        window.history.pushState(null, '', `#${item.id}`);
      }
    }
  };

  // Active section detection
  useEffect(() => {
    // Only handle hash changes and initial load, no scroll-based updates
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentHash(hash);
      if (hash && allNavItems.find(item => item.id === hash) && pathname === '/') {
        setActiveSection(hash);
      } else if (!hash && pathname === '/') {
        setActiveSection('home');
      }
    };

    // Handle initial hash in URL
    const handleInitialHash = () => {
      const hash = window.location.hash.slice(1);
      setCurrentHash(hash);
      if (hash && allNavItems.find(item => item.id === hash) && pathname === '/' && !mobileMenuOpen) {
        setTimeout(() => {
          scrollToSection(hash);
          setActiveSection(hash);
        }, 100);
      } else if (pathname === '/') {
        setActiveSection('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleInitialHash();
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname, allNavItems, mobileMenuOpen]);

  const ThemeContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`${isMobile ? 'p-4' : 'p-0'}`}>
      {!isMobile && (
        <div className="border-b border-border/30 p-3 bg-muted/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
              <Sun className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-sm">Appearance</h3>
              <p className="text-xs text-muted-foreground">Choose your theme</p>
            </div>
          </div>
        </div>
      )}
      
      {isMobile && (
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-3">
            <Sun className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-1">Appearance</h2>
          <p className="text-sm text-muted-foreground">Choose your theme</p>
        </div>
      )}

      <div className={`${isMobile ? 'space-y-2' : 'p-3 space-y-1.5'}`}>
        {[
          { key: "light", label: "Light", icon: Sun, desc: "Clean and bright interface" },
          { key: "dark", label: "Dark", icon: Moon, desc: "Easy on the eyes" },
        //   { key: "system", label: "System", icon: Monitor, desc: "Follows your device setting" }
        ].map(({ key, label, icon: Icon, desc }) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className={`w-full ${isMobile ? 'p-3' : 'p-2.5'} rounded-md border transition-all duration-200 text-left group hover:scale-[1.01] ${
              theme === key 
                ? 'border-primary/40 bg-primary/5 shadow-sm' 
                : 'border-border/40 hover:border-border/60 hover:bg-muted/40'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className={`${isMobile ? 'w-10 h-10' : 'w-9 h-9'} rounded-md flex items-center justify-center ${
                theme === key ? 'bg-primary text-primary-foreground' : 'bg-muted group-hover:bg-muted/80'
              }`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-xs">{label}</h4>
                  {/* {theme === key && (
                    <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-primary-foreground" />
                    </div>
                  )} */}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const ColorContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`${isMobile ? 'p-4' : 'p-0'}`}>
      {!isMobile && (
        <div className="border-b border-border/30 p-3 bg-muted/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
              <Palette className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-sm">Colors</h3>
              <p className="text-xs text-muted-foreground">Pick your color</p>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-3">
            <Palette className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-1">Colors</h2>
          <p className="text-sm text-muted-foreground">Choose your accent color</p>
        </div>
      )}

      <div className={`${isMobile ? 'space-y-4' : 'p-3'}`}>
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-3' : 'grid-cols-4 gap-2'}`}>
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setColor(color.value)}
              className={`${isMobile ? 'p-3' : 'p-2'} rounded-md border transition-all duration-200 hover:scale-105 group ${
                currentColor === color.value 
                  ? 'border-foreground/50 bg-muted/40 shadow-sm' 
                  : 'border-border/40 hover:border-border/60'
              }`}
            >
              <div className="flex flex-col items-center gap-1.5">
                <div className="relative">
                  <div
                    className={`${isMobile ? 'w-10 h-10' : 'w-7 h-7'} rounded-full border-2 border-background shadow-md`}
                    style={{ backgroundColor: getDisplayColor(color.value) }}
                  />
                  {/* {currentColor === color.value && (
                    <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-foreground rounded-full flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-background" />
                    </div>
                  )} */}
                </div>
                <div className="text-center">
                  <p className={`font-medium ${isMobile ? 'text-xs' : 'text-xs'}`}>
                    {color.name}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const MenuContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`${isMobile ? 'h-full flex flex-col overflow-y-auto' : 'p-0'}`}>
      {!isMobile ? (
        <div className="p-2.5 space-y-0.5">
          <h3 className="px-2 text-xs font-medium text-muted-foreground mb-1.5">Navigation</h3>
          {[
            { label: "Home", icon: "🏠" },
            { label: "Tools", icon: "🛠️" },
            { label: "Experience", icon: "💼" },
            { label: "Strategy", icon: "🎯" },
            { label: "Contact", icon: "📧" }
          ].map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start h-8 px-2 hover:bg-primary/10 text-xs"
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col h-full p-6 pb-8 max-h-screen overflow-y-auto">
          {/* Website Name */}
          <div className="text-center mb-6 flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2 mb-2">
              Thy • Richfield <span className="text-3xl">👑</span>
            </h1>
            <p className="text-sm text-muted-foreground">Full-Stack Developer & Designer</p>
          </div>
          
          {/* Navigation Links */}
          <div className="space-y-2 mb-6 flex-shrink-0">
            {allNavItems.map((item) => {
              // Determine if this nav item is active
              let isActive = false;
              if (item.href) {
                // For Home page
                if (item.id === 'home') {
                  isActive = pathname === '/' && (!currentHash);
                } else {
                  // For other routes
                  isActive = pathname === item.href;
                }
              } else {
                // For sections on homepage - only active if hash matches
                isActive = pathname === '/' && currentHash === item.id;
              }
              
              if (item.href) {
                // For routes like Home, use MobileSmoothLink component
                return (
                  <MobileSmoothLink key={item.id} href={item.href}>
                    <button
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left group ${
                        isActive
                          ? 'bg-card border border-border/30 shadow-sm'
                          : 'hover:bg-accent'
                      }`}
                    >
                      <div>
                        <div className={`font-medium ${
                          isActive ? 'text-foreground' : 'text-foreground'
                        }`}>{item.label}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.id === 'home' && 'Back to homepage'}
                          {item.id === 'projects' && 'View my work'}
                          {item.id === 'tools' && 'Explore my toolkit'}
                          {item.id === 'about' && 'My professional journey'}
                          {item.id === 'approach' && 'My ideas & approach'}
                          {item.id === 'contact' && 'Get in touch'}
                        </div>
                      </div>
                    </button>
                  </MobileSmoothLink>
                );
              } else {
                // For sections, use MobileSmoothLink component with hash
                return (
                  <MobileSmoothLink key={item.id} href={`/#${item.id}`}>
                    <button
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left group ${
                        isActive
                          ? 'bg-card border border-border/30 shadow-sm'
                          : 'hover:bg-accent'
                      }`}
                    >
                      <div>
                        <div className={`font-medium ${
                          isActive ? 'text-foreground' : 'text-foreground'
                        }`}>{item.label}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.id === 'home' && 'Back to homepage'}
                          {item.id === 'projects' && 'View my work'}
                          {item.id === 'tools' && 'Explore my toolkit'}
                          {item.id === 'about' && 'My professional journey'}
                          {item.id === 'approach' && 'My ideas & approach'}
                          {item.id === 'contact' && 'Get in touch'}
                        </div>
                      </div>
                    </button>
                  </MobileSmoothLink>
                );
              }
            })}
          </div>
          
          {/* Social Media */}
          <div className="mb-6 flex-shrink-0">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Connect with me</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { 
                  label: "WhatsApp", 
                  icon: MessageCircle, 
                  color: "text-green-500",
                  href: "https://wa.me/+2347052915729"
                },
                { 
                  label: "Email", 
                  icon: Mail, 
                  color: "text-blue-500",
                  href: "mailto:samsonrichfield@gmail.com"
                },
                { 
                  label: "X (Twitter)", 
                  icon: Twitter, 
                  color: "text-foreground",
                  href: "https://x.com/samsonrichfiel1?t=DzF4TXHtbsiEJoOmylWYwg&s=09"
                },
                { 
                  label: "Instagram", 
                  icon: Instagram, 
                  color: "text-pink-500",
                  href: "https://www.instagram.com/thy._.ricchiee/"
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 text-center group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className={`text-lg mb-1 ${social.color} group-hover:scale-110 transition-transform duration-200`}>
                    <social.icon className="w-5 h-5 mx-auto" />
                  </div>
                  <p className="text-xs text-muted-foreground">{social.label}</p>
                </a>
              ))}
            </div>
          </div>
          
          {/* Projects Button with Multi-color Glow */}
          <div className="mb-4 relative flex-shrink-0">
            <div 
              className="absolute -inset-1 rounded-xl opacity-75 blur animate-pulse"
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 3s ease infinite, pulse 2s ease-in-out infinite alternate'
              }}
            ></div>
            <div 
              className="absolute -inset-0.5 rounded-xl opacity-50 blur-sm"
              style={{
                background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 4s ease infinite reverse'
              }}
            ></div>
            <Button 
              onClick={() => {
                setMobileMenuOpen(false);
                navigateWithTransition("/projects");
              }}
              className="relative w-full h-12 rounded-xl bg-card hover:bg-card/80 text-foreground border border-border/50 font-medium transition-all duration-300 hover:scale-105 z-10"
            >
              Projects
            </Button>
          </div>

          {/* Contact CTA */}
          <div className="flex-shrink-0">
            <Button 
              className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              onClick={() => {
                setMobileMenuOpen(false); // Close mobile menu
                if (pathname === '/') {
                  // If on homepage, scroll to contact section
                  scrollToSection('contact');
                  window.history.pushState(null, '', '#contact');
                  setCurrentHash('contact');
                } else {
                  // If on other page, navigate to homepage with contact hash
                  navigateWithTransition('/#contact');
                }
              }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
      {/* Hidden prefetch links for instant navigation */}
      <Link href="/" prefetch={true} className="hidden" />
      <Link href="/projects" prefetch={true} className="hidden" />
      
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold font-geist text-foreground flex items-center gap-2 hover:text-primary transition-colors">
              <svg width="210" height="30" viewBox="0 0 210 30" xmlns="http://www.w3.org/2000/svg">
                <style>
                  {`

                    text {
                      font-family: var(--font-geist-sans), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
                      font-size: 16px;
                      font-weight: 700;
                      stroke: currentColor;
                      stroke-width: 1;
                      stroke-dasharray: 300;
                      stroke-dashoffset: 300;
                      fill: currentColor;
                      fill-opacity: 0;
                      animation: strokeAnim 10s cubic-bezier(0.25, 0.1, 0.25, 1) infinite, fillAnim 10s cubic-bezier(0.25, 0.1, 0.25, 1) infinite, 20s; 
                      animation-delay: 0s;
                      letter-spacing:3px;
                    }

                    @keyframes strokeAnim {
                      0%   { stroke-dashoffset: 300; }
                      20%  { stroke-dashoffset: 0; }
                      60%  { stroke-dashoffset: 0; }
                      80%  { stroke-dashoffset: 300; }
                      100% { stroke-dashoffset: 300; }
                    }

                    @keyframes fillAnim {
                      0%   { fill-opacity: 0; }
                      20%  { fill-opacity: 1; }
                      25%  { fill-opacity: 1; }
                      60%  { fill-opacity: 1; }
                      65%  { fill-opacity: 0; }
                      100% { fill-opacity: 0; }
                    }
                  `}
                </style>

                <rect width="100" height="30" fill="transparent" />
                
                <text x="5" y="22">   Thy • Richfield 👑</text>
              </svg>
              

          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full p-2 border border-border/50">
            {navItems.map((item) => {
              // Determine if this nav item is active
              let isActive = false;
              if (item.href) {
                // For Home page
                if (item.id === 'home') {
                  isActive = pathname === '/' && (!currentHash);
                } else {
                  // For other routes like /projects
                  isActive = pathname === item.href;
                }
              } else {
                // For sections on homepage - only active if hash matches
                isActive = pathname === '/' && currentHash === item.id;
              }
              
              if (item.href) {
                // For routes like Home, use SmoothLink component for smooth scrolling
                return (
                  <SmoothLink key={item.id} href={item.href}>
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-card text-foreground shadow-sm border border-border/30'
                          : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  </SmoothLink>
                );
              } else {
                // For sections, use SmoothLink component with hash
                return (
                  <SmoothLink key={item.id} href={`/#${item.id}`}>
                    <button
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-card text-foreground shadow-sm border border-border/30'
                          : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  </SmoothLink>
                );
              }
            })}
          </div>
        </div>

        {/* Desktop Settings */}
        <div className="hidden md:flex items-center gap-3">
          {/* Projects Button with Multi-color Glow */}
          <div className="relative">
            <div 
              className="absolute -inset-1 rounded-full opacity-75 blur animate-pulse"
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3, #54a0ff)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 3s ease infinite, pulse 2s ease-in-out infinite alternate'
              }}
            ></div>
            <div 
              className="absolute -inset-0.5 rounded-full opacity-50 blur-sm"
              style={{
                background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 4s ease infinite reverse'
              }}
            ></div>
            <Button 
              onClick={() => navigateWithTransition("/projects")}
              className="relative bg-card hover:bg-card/80 text-foreground border border-border/50 rounded-full px-6 py-2 font-medium transition-all duration-300 hover:scale-105 z-10"
            >
              Projects
            </Button>
          </div>

          {/* CTA Button */}
          <Button 
            size="default" 
            className="p-2 rounded-full"
            onClick={() => {
              if (pathname === '/') {
                // If on homepage, scroll to contact section
                scrollToSection('contact');
                window.history.pushState(null, '', '#contact');
                setCurrentHash('contact');
              } else {
                // If on other page, navigate to homepage with contact hash
                navigateWithTransition('/#contact');
              }
            }}
          >
            Get in touch<ArrowRight className="w-4 h-4" />
          </Button>

          {/* Theme Switch - Popover on Desktop */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                {theme === "light" ? <Sun className="w-4 h-4" /> : 
                 theme === "dark" ? <Moon className="w-4 h-4" /> : 
                 <Monitor className="w-4 h-4" />}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-0" align="end">
              <ThemeContent />
            </PopoverContent>
          </Popover>

          {/* Color Palette - Popover on Desktop */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                <Palette className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-0" align="end">
              <ColorContent />
            </PopoverContent>
          </Popover>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Switch - Drawer on Mobile */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                {theme === "light" ? <Sun className="w-4 h-4" /> : 
                 theme === "dark" ? <Moon className="w-4 h-4" /> : 
                 <Monitor className="w-4 h-4" />}
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[85vh]">
              <DrawerHeader className="sr-only">
                <DrawerTitle>Theme Settings</DrawerTitle>
              </DrawerHeader>
              <ThemeContent isMobile />
            </DrawerContent>
          </Drawer>

          {/* Color Palette - Drawer on Mobile */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                <Palette className="w-4 h-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[85vh]">
              <DrawerHeader className="sr-only">
                <DrawerTitle>Color Settings</DrawerTitle>
              </DrawerHeader>
              <ColorContent isMobile />
            </DrawerContent>
          </Drawer>

          {/* Menu - Sheet on Mobile */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 w-9 p-0">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0 overflow-y-auto max-h-screen">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <MenuContent isMobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
