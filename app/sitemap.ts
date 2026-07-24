import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content/site";

const routes = [
  "",
  "/features",
  "/dhruv-ai",
  "/doctors",
  "/about",
  "/contact",
  "/legal/privacy-policy",
  "/legal/terms",
  "/legal/medical-disclaimer",
  "/legal/ai-disclaimer",
  "/legal/delete-account",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
