import type { MetadataRoute } from "next";
import { rooms, SITE_URL } from "../lib/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...rooms.map((room) => ({ url: `${SITE_URL}/rooms/${room.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
