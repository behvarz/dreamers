import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { DreamersSite } from "../../_components/DreamersSite";
import { getRoom, rooms } from "../../../lib/rooms";

type Props = { params: Promise<{ slug: string }> };

function originFromHeaders(host: string | null, forwardedProto: string | null) {
  const safeHost = host || "localhost:3000";
  const protocol = forwardedProto || (safeHost.includes("localhost") ? "http" : "https");
  return `${protocol}://${safeHost}`;
}

export function generateStaticParams() { return rooms.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  const requestHeaders = await headers();
  const origin = originFromHeaders(requestHeaders.get("host"), requestHeaders.get("x-forwarded-proto"));
  const image = `${origin}${room.image}`;
  const title = `${room.name.en} — Dreamers Hostel Yerevan`;
  const description = room.description.en;
  return {
    title, description,
    openGraph: { title, description, images: [{ url: image, alt: room.name.en }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function RoomPage({ params }: Props) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();
  return <DreamersSite roomSlug={room.slug} />;
}
