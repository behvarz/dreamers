import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { BOOKING_URL, MAP_URL, SITE_URL } from "../lib/rooms";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700", "800"] });

const title = "Dreamers Hostel — Yerevan";
const description = "Stay at Dreamers Hostel in central Yerevan: bright private rooms and a 14-bed dorm, free breakfast, unlimited tea and coffee, a sunny terrace and fast Wi-Fi.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Dreamers Hostel Yerevan" },
  description,
  applicationName: "Dreamers Hostel",
  authors: [{ name: "Dreamers Hostel", url: SITE_URL }],
  creator: "Dreamers Hostel",
  publisher: "Dreamers Hostel",
  category: "travel",
  keywords: ["Dreamers Hostel", "Yerevan hostel", "hostel in Yerevan", "Yerevan accommodation", "budget rooms Yerevan", "Armenia hostel", "free breakfast Yerevan"],
  alternates: { canonical: "/" },
  formatDetection: { email: false, address: false, telephone: true },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "1024x1024" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "1024x1024", type: "image/png" }],
  },
  openGraph: {
    title, description, url: SITE_URL, siteName: "Dreamers Hostel", type: "website",
    locale: "en_US", alternateLocale: ["ru_RU"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dreamers Hostel in Yerevan — terrace, rooms and free breakfast" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [{ url: "/og.png", alt: "Dreamers Hostel Yerevan" }] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#123f34", colorScheme: "light" };

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Hostel",
  name: "Dreamers Hostel & Hotel Apartment",
  url: SITE_URL,
  image: [`${SITE_URL}/og.png`, `${SITE_URL}/images/yard.png`, `${SITE_URL}/images/dormitory.png`],
  telephone: "+37493847050",
  priceRange: "$",
  address: { "@type": "PostalAddress", streetAddress: "68 Sarmen Street", postalCode: "0014", addressLocality: "Yerevan", addressCountry: "AM" },
  amenityFeature: ["Free Wi-Fi", "Free breakfast", "Unlimited tea and coffee", "Guest kitchen", "Terrace", "Air conditioning"].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  sameAs: [MAP_URL, BOOKING_URL],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />{children}</body></html>;
}
