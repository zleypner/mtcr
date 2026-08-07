import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { treatmentsData } from "@/lib/data/treatments";
import { getAllBlogArticles } from "@/lib/content-parser";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/treatments",
    "/destinations",
    "/hospitals",
    "/clinics",
    "/doctors",
    "/faq",
    "/costs",
    "/insurance",
    "/guides",
    "/patient-stories",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Treatment categories
  const treatmentCategories = Object.keys(treatmentsData).map((cat) => ({
    url: `${baseUrl}/treatments/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Procedures
  const procedureRoutes: MetadataRoute.Sitemap = [];
  Object.keys(treatmentsData).forEach((catKey) => {
    treatmentsData[catKey].procedures.forEach((proc) => {
      procedureRoutes.push({
        url: `${baseUrl}/treatments/${catKey}/${proc.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    });
  });

  // Cities
  const cityRoutes = ["san-jose", "escazu"].map((slug) => ({
    url: `${baseUrl}/cities/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog articles
  const blogRoutes = getAllBlogArticles().map((art) => ({
    url: `${baseUrl}/blog/${art.frontmatter.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...treatmentCategories,
    ...procedureRoutes,
    ...cityRoutes,
    ...blogRoutes,
  ];
}
