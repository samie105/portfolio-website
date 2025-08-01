"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemo() {
  const images = [
    // CapitalNexus Project
    "/projects/capitalnexus/landingpage.png",
    "/projects/capitalnexus/dashboard-section.png",
    "/projects/capitalnexus/copytraders-section.png",
    "/projects/capitalnexus/perfomancestatistics.png",
    "/projects/capitalnexus/sponsors-testimonials.png",
    
    // DeliveryUno Project
    "/projects/deliveryuno/hero-section.png",
    "/projects/deliveryuno/services.png",
    "/projects/deliveryuno/tracking-section.png",
    "/projects/deliveryuno/testimonials.png",
    "/projects/deliveryuno/about-us-section.png",
    
    // NFT Project
    "/projects/nft-project/landingpage.png",
    "/projects/nft-project/nft-project-dashboard.png",
    "/projects/nft-project/nft-project-collection.png",
    "/projects/nft-project/nft-project-profile.png",
    "/projects/nft-project/nft-project-section.png",
    
    // TruBank Project
    "/projects/trubank/trubank-hero.png",
    "/projects/trubank/trubank-overview-dashboard.png",
    "/projects/trubank/trubank-customer dashboard.png",
    "/projects/trubank/trubank-feature-section.png",
    "/projects/trubank/trubank-testimonial-section.png",
    
    // WilsonBank Project
    "/projects/wilsonbank/hero-section.png",
    "/projects/wilsonbank/dashboard-page.png",
    "/projects/wilsonbank/features-section.png",
    "/projects/wilsonbank/services-section.png",
    "/projects/wilsonbank/testimonials-section.png",
    "/projects/wilsonbank/contact-page.png",
    "/projects/wilsonbank/settings-page-dashboard.png",
  ];
  return (
    <div className="mx-auto max-w-7xl/ rounded-3xl ">
      <ThreeDMarquee images={images} />
    </div>
  );
}
