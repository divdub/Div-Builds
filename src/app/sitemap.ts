import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://solutions.divyanshdubey.dev",
      lastModified: new Date("2026-11-15"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
