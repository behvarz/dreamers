import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DreamersSite } from "../../_components/DreamersSite";
import { getRoom, rooms, SITE_URL } from "../../../lib/rooms";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return rooms.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  const image = `${SITE_URL}${room.image}`;
  const canonical = `${SITE_URL}/rooms/${room.slug}`;
  const title = `${room.name.en} — Dreamers Hostel Yerevan`;
  const description = room.description.en;
  return {
    title: { absolute: title }, description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, siteName: "Dreamers Hostel", type: "website", locale: "en_US", alternateLocale: ["ru_RU"], images: [{ url: image, alt: `${room.name.en} at Dreamers Hostel Yerevan` }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();
  return <DreamersSite roomSlug={room.slug} />;
}
