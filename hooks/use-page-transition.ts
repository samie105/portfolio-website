"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { startTransition, useEffect } from "react";

export function usePageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  // Prefetch critical routes on mount for instant navigation
  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/projects");
  }, [router]);

  const navigateWithTransition = (href: string) => {
    // Use React's startTransition for better transition handling
    startTransition(() => {
      router.push(href);
    });
  };

  return { navigateWithTransition, pathname };
}
