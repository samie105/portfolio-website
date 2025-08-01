"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { startTransition } from "react";

export function usePageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithTransition = (href: string) => {
    // Use React's startTransition for better transition handling
    startTransition(() => {
      router.push(href);
    });
  };

  return { navigateWithTransition, pathname };
}
