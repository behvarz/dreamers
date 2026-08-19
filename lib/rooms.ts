export const BOOKING_URL = "https://www.booking.com/hotel/am/dreamers-hostel-amp-apartment.html?aid=356980&label=gog235jc-10CAsoB0IdZHJlYW1lcnMtaG9zdGVsLWFtcC1hcGFydG1lbnRIM1gDaAeIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AvDjztEGwAIB0gIkMTA2ZDU5ZjYtN2ZjZi00OTA0LTk3ZDgtOWEyOGQ0MWRhZGRh2AIB4AIB-Share-F950ZB%401787131511&sid=cb2cf08abbb0f55ee53f0577e5f47a58&checkin=2026-09-03&checkout=2026-09-08&dest_id=-2325645&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&soh=1&sr_order=popularity&srepoch=1787131531&srpvid=b7a84242977500de&type=total&ucfs=1&#no_availability_msg";
export const MAP_URL = "https://maps.app.goo.gl/ieRK64MhtZdtGS1N7";
export const SITE_URL = "https://www.dreamershostel.am";

export type Language = "en" | "ru";
export type LocalText = { en: string; ru: string };

export type Room = {
  slug: string;
  name: LocalText;
  kicker: LocalText;
  description: LocalText;
  image: string;
  images: string[];
  sleep: LocalText;
  bathroom: LocalText;
  mood: LocalText;
  features: LocalText[];
};

export const rooms: Room[] = [
  {
    slug: "dormitory",
    name: { en: "14-Bed Dormitory", ru: "Общий номер на 14 мест" },
    kicker: { en: "Your social basecamp", ru: "Ваш социальный лагерь" },
    description: { en: "A generous, sun-filled dorm made for easy friendships and genuinely good sleep. Fourteen comfortable beds share two dedicated toilets and showers, with the terrace just steps away.", ru: "Просторный светлый общий номер, где легко знакомиться и хорошо спать. Для 14 удобных кроватей предусмотрены два отдельных туалета и душа, а терраса находится совсем рядом." },
    image: "/images/dormitory.png",
    images: ["/images/dormitory.png", "/images/dormitory2.png", "/images/dormitory3.png", "/images/dormitory4.png", "/images/bathroom.png", "/images/bathroom2.png"],
    sleep: { en: "14 single bunk beds", ru: "14 односпальных мест" },
    bathroom: { en: "2 shared toilets & showers", ru: "2 общих туалета и душа" },
    mood: { en: "Social & spacious", ru: "Общительный и просторный" },
    features: [
      { en: "Air conditioning", ru: "Кондиционер" }, { en: "Fresh bed linen & towels", ru: "Свежее бельё и полотенца" },
      { en: "Terrace access", ru: "Выход на террасу" }, { en: "Free high-speed Wi-Fi", ru: "Бесплатный быстрый Wi-Fi" },
      { en: "Personal storage", ru: "Личное хранение" }, { en: "Breakfast included", ru: "Завтрак включён" },
    ],
  },
  {
    slug: "budget-double",
    name: { en: "Budget Double", ru: "Бюджетный двухместный" },
    kicker: { en: "Simple, private, yours", ru: "Просто, уединённо, ваше" },
    description: { en: "A calm private hideaway for two with everything that matters: a comfortable double bed, air conditioning and your own bathroom. Smart value, zero compromise on warmth.", ru: "Спокойное уединённое пространство для двоих: удобная двуспальная кровать, кондиционер и собственная ванная. Выгодно, уютно и без лишнего." },
    image: "/images/budget-double.png",
    images: ["/images/budget-double.png", "/images/bathroom3.png", "/images/bathroom4.png", "/images/balcony.png"],
    sleep: { en: "1 comfortable double bed", ru: "1 удобная двуспальная кровать" },
    bathroom: { en: "Private bathroom", ru: "Собственная ванная" },
    mood: { en: "Quiet & great value", ru: "Тихо и выгодно" },
    features: [
      { en: "Air conditioning", ru: "Кондиционер" }, { en: "Private toilet & shower", ru: "Собственный туалет и душ" },
      { en: "Fresh bed linen & towels", ru: "Свежее бельё и полотенца" }, { en: "Free high-speed Wi-Fi", ru: "Бесплатный быстрый Wi-Fi" },
      { en: "Wardrobe", ru: "Шкаф" }, { en: "Breakfast included", ru: "Завтрак включён" },
    ],
  },
  {
    slug: "twin-double",
    name: { en: "Twin Double", ru: "Двухместный с 2 кроватями" },
    kicker: { en: "Together, with your own space", ru: "Вместе, но у каждого своё место" },
    description: { en: "Ideal for friends, siblings or travel partners. Two separate beds, a cheerful colour palette and a private bathroom give you an easy, comfortable Yerevan base.", ru: "Идеально для друзей, братьев, сестёр или попутчиков. Две отдельные кровати, яркий интерьер и собственная ванная создают удобную базу в Ереване." },
    image: "/images/double-twin.png",
    images: ["/images/double-twin.png", "/images/double-twin2.png", "/images/bathroom5.png", "/images/bathroom6.png"],
    sleep: { en: "2 separate single beds", ru: "2 отдельные кровати" },
    bathroom: { en: "Private bathroom", ru: "Собственная ванная" },
    mood: { en: "Bright & flexible", ru: "Ярко и удобно" },
    features: [
      { en: "Air conditioning", ru: "Кондиционер" }, { en: "Private toilet & shower", ru: "Собственный туалет и душ" },
      { en: "Fresh bed linen & towels", ru: "Свежее бельё и полотенца" }, { en: "Free high-speed Wi-Fi", ru: "Бесплатный быстрый Wi-Fi" },
      { en: "Wardrobe", ru: "Шкаф" }, { en: "Breakfast included", ru: "Завтрак включён" },
    ],
  },
  {
    slug: "deluxe-double",
    name: { en: "Deluxe Double", ru: "Делюкс двухместный" },
    kicker: { en: "More room to dream", ru: "Больше места для мечтаний" },
    description: { en: "Our most spacious private room pairs a generous double bed with a relaxed, polished feel. Settle in, spread out and enjoy your own private bathroom after a day in Yerevan.", ru: "Наш самый просторный отдельный номер с большой двуспальной кроватью и спокойной атмосферой. Отдохните после прогулок по Еревану в собственной ванной." },
    image: "/images/deluxe-double.png",
    images: ["/images/deluxe-double.png", "/images/bathroom7.png", "/images/bathroom8.png", "/images/public.png"],
    sleep: { en: "1 generous double bed", ru: "1 большая двуспальная кровать" },
    bathroom: { en: "Private bathroom", ru: "Собственная ванная" },
    mood: { en: "Spacious & relaxed", ru: "Просторно и спокойно" },
    features: [
      { en: "Air conditioning", ru: "Кондиционер" }, { en: "Private toilet & shower", ru: "Собственный туалет и душ" },
      { en: "Fresh bed linen & towels", ru: "Свежее бельё и полотенца" }, { en: "Free high-speed Wi-Fi", ru: "Бесплатный быстрый Wi-Fi" },
      { en: "Wardrobe & work space", ru: "Шкаф и рабочее место" }, { en: "Breakfast included", ru: "Завтрак включён" },
    ],
  },
];

export function getRoom(slug: string) { return rooms.find((room) => room.slug === slug); }
export function whatsappUrl(roomName?: string) {
  const message = roomName ? `Hello Dreamers Hostel! I would like to book the ${roomName}.` : "Hello Dreamers Hostel! I would like to book a stay.";
  return `https://wa.me/37493847050?text=${encodeURIComponent(message)}`;
}
