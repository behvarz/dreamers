import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dreamers Hostel Yerevan", short_name: "Dreamers", description: "A green-hearted hostel in central Yerevan.",
    start_url: "/", display: "standalone", background_color: "#fbfff6", theme_color: "#123f34",
    icons: [{ src: "/favicon.png", sizes: "1024x1024", type: "image/png", purpose: "any" }],
  };
}
