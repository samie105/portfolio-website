"use client";

export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Thy Richfield",
    "alternateName": "Thy Richfield",
    "url": "https://thyrichfield.me",
    "image": "https://thyrichfield.me/profile-image.jpg",
    "description": "Passionate full-stack developer and creative designer specializing in modern web applications, AI integration, and exceptional digital experiences.",
    "jobTitle": "Full Stack Developer & Designer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": "Your University", // Update with actual education
    "knowsAbout": [
      "React",
      "Next.js", 
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Python",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
      "Database Design",
      "API Development",
      "Cloud Computing",
      "AI Integration"
    ],
    "sameAs": [
      "https://x.com/samsonrichfiel1?t=DzF4TXHtbsiEJoOmylWYwg&s=09",
      "https://www.instagram.com/thy._.ricchiee/",
      "https://wa.me/+2347052915729",
      "mailto:samsonrichfield@gmail.com"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "professional",
      "email": "samsonrichfield@gmail.com",
      "url": "https://thyrichfield.me/#contact"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City", // Update with actual location
      "addressCountry": "Your Country"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Thy Richfield Portfolio",
    "description": "Portfolio website showcasing full-stack development projects and design work",
    "url": "https://thyrichfield.me",
    "author": {
      "@type": "Person",
      "name": "Thy Richfield"
    },
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@type": "Person",
      "name": "Thy Richfield"
    },
    "copyrightYear": "2024",
    "genre": "portfolio",
    "keywords": "full stack developer, web developer, react developer, next.js, typescript, ui/ux designer",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://thyrichfield.me/projects?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const professionalServiceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Thy Richfield Development Services",
    "description": "Professional web development and design services specializing in modern applications",
    "provider": {
      "@type": "Person",
      "name": "Thy Richfield"
    },
    "areaServed": "Worldwide",
    "serviceType": "Web Development",
    "serviceOutput": [
      "Custom Web Applications",
      "E-commerce Solutions", 
      "API Development",
      "UI/UX Design",
      "Database Design",
      "Cloud Solutions"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Custom web development and design services",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceData),
        }}
      />
    </>
  );
}
