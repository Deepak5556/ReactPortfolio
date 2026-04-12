import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeNames = {
  "/": "Home",
  "/about": "About",
  "/education": "Education",
  "/projects": "Projects",
  "/contact": "Contact",
  "/certificate": "Certifications",
  "/internship": "Experience",
  "/mywork": "Projects",
};

const DynamicBreadcrumbs = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    // Default to 'Home' if the route is somehow not in the map, 
    // or just bail. For SEO it's better to bail if the route isn't recognized.
    if (!routeNames[currentPath]) return;

    const origin = window.location.origin;

    const itemListElement = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${origin}/`,
      }
    ];

    // If it's not the home page, add the second Breadcrumb level
    if (currentPath !== "/") {
      itemListElement.push({
        "@type": "ListItem",
        position: 2,
        name: routeNames[currentPath],
        item: `${origin}${currentPath}`,
      });
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    };

    // Clean up duplicate or previous schema scripts
    const existingScripts = document.querySelectorAll('script[data-breadcrumb="true"]');
    existingScripts.forEach((script) => script.remove());

    // Create and inject the new structured data script
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-breadcrumb", "true");
    script.textContent = JSON.stringify(breadcrumbSchema);

    document.head.appendChild(script);

    // Cleanup function when component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[data-breadcrumb="true"]');
      scripts.forEach((s) => s.remove());
    };
  }, [location.pathname]);

  return null; // Head injection only, no UI rendered
};

export default DynamicBreadcrumbs;
