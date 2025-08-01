"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, X, Settings, Palette, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("portfolio-cookie-consent");
    if (!consentGiven) {
      // Show consent after a brief delay for better UX
      setTimeout(() => setShowConsent(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("portfolio-cookie-consent", "accepted");
    setShowConsent(false);
  };

  const handleReject = () => {
    // Clear any existing preferences if user rejects
    localStorage.removeItem("portfolio-theme");
    localStorage.removeItem("portfolio-color");
    localStorage.setItem("portfolio-cookie-consent", "rejected");
    setShowConsent(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showConsent && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            onClick={() => setShowConsent(false)}
          />

          {/* Cookie Consent Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[101]"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Enhance Your Experience
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We use cookies to remember your preferences
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  We'd like to save your theme and color palette preferences to provide you with a personalized experience on future visits.
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Monitor className="w-4 h-4 text-primary" />
                    <span>Remember your dark/light mode preference</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Palette className="w-4 h-4 text-primary" />
                    <span>Save your chosen accent color</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Settings className="w-4 h-4 text-primary" />
                    <span>Provide a seamless browsing experience</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-11"
                >
                  Accept Preferences
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="flex-1 border-border hover:bg-muted rounded-xl h-11"
                >
                  Continue Without
                </Button>
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground/80 mt-4 text-center">
                No personal data is collected. Only design preferences are stored locally.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
