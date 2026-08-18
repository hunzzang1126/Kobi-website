import type { MetadataRoute } from "next";

// 정식 도메인 연결 시 이 값만 바꾸면 됨
const BASE_URL = "https://www.kobitoronto.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/menu`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/location`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
