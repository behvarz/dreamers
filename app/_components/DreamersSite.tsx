"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOKING_URL, getRoom, Language, MAP_URL, rooms, whatsappUrl } from "../../lib/rooms";

const copy = {
  en: {
    navRooms: "Rooms", navHouse: "The house", navLocation: "Yerevan", book: "Book your stay",
    address: "68 Sarmen Street · Yerevan", heroOne: "Come for a bed.", heroTwo: "Stay for the story.",
    heroText: "A bright, green-hearted hostel where slow breakfasts, terrace sunsets and new friendships come naturally.",
    findRoom: "Find your room", seeLife: "See the Dreamers life", dormBeds: "dorm beds", tea: "tea & coffee", terrace: "dreamy terrace",
    urban: "Yerevan’s little urban hideaway", pick: "Pick your kind of dream", sleep: "Sleep your way.", explore: "Explore room",
    dreamLife: "A little place with a big soul", houseTitle: "The good-life house.",
    houseText: "Make breakfast plans with someone you met five minutes ago. Take your coffee into the vines. Swap travel stories at midnight. Dreamers is made for the small moments that become the best memories.",
    kitchen: "A kitchen worth gathering in", kitchenText: "Cook, share and make yourself at home in our fully equipped guest kitchen.",
    terraceTitle: "Sun above. Vines around.", terraceText: "Our terrace and green courtyard are your open-air living room in Yerevan.",
    included: "All the good stuff", includedTitle: "Included, always.", breakfast: "Special free breakfast", wifi: "Fast free Wi-Fi", coffee: "Unlimited tea & coffee", parking: "Free parking", kitchenAmenity: "Shared guest kitchen", aircon: "Air-conditioned rooms",
    breakfastTitle: "Wake up to something lovely.", breakfastText: "Our special breakfast is free with your stay. Pour another coffee, take it slow and plan the day together.",
    mapKicker: "In the heart of the adventure", mapTitle: "Yerevan is right outside.", mapText: "Find us on quiet Sarmen Street, close to the Cascade and a stroll from the Opera. The city’s cafés, museums and late-night energy are within easy reach.",
    openMap: "Open in Google Maps", contact: "Message us", rules: "Good to know", rulesTitle: "House notes.", checkin: "Check-in", checkout: "Check-out", children: "Children", childrenValue: "All ages welcome", payment: "Payment", paymentValue: "Cash at property", pets: "Pets", petsValue: "On request", policyNote: "Cancellation and prepayment conditions vary by room and rate. Confirm the latest terms when booking.",
    whatsapp: "Book on WhatsApp", booking: "Book on Booking.com", backRooms: "All rooms", roomDetails: "Room details", sleeps: "Sleeps", bath: "Bathroom", vibe: "The vibe", everything: "Everything you need", gallery: "A closer look", chooseAnother: "Keep exploring", chooseTitle: "Another dream, maybe?", breakfastIncluded: "Breakfast is on us.", breakfastIncludedText: "Every room includes our special free breakfast, unlimited tea and coffee, and full use of the guest kitchen and terrace.",
    footerLine: "For dreamers, wanderers & curious souls.", rights: "Dreamers Hostel · Yerevan, Armenia", direct: "Direct bookings",
  },
  ru: {
    navRooms: "Номера", navHouse: "Наш дом", navLocation: "Ереван", book: "Забронировать",
    address: "ул. Сармена, 68 · Ереван", heroOne: "Приезжайте за кроватью.", heroTwo: "Оставайтесь ради истории.",
    heroText: "Светлый зелёный хостел, где долгие завтраки, закаты на террасе и новые друзья появляются сами собой.",
    findRoom: "Выбрать номер", seeLife: "Жизнь в Dreamers", dormBeds: "мест в дорме", tea: "чай и кофе", terrace: "уютная терраса",
    urban: "Маленькое городское укрытие в Ереване", pick: "Выберите свой сон", sleep: "Спите по-своему.", explore: "Смотреть номер",
    dreamLife: "Маленькое место с большой душой", houseTitle: "Дом хорошей жизни.",
    houseText: "Планируйте завтрак с тем, с кем познакомились пять минут назад. Пейте кофе среди виноградных лоз. Обменивайтесь историями до полуночи. Dreamers создан для моментов, которые становятся лучшими воспоминаниями.",
    kitchen: "Кухня, где хочется собираться", kitchenText: "Готовьте, делитесь и чувствуйте себя как дома на нашей полностью оборудованной кухне.",
    terraceTitle: "Солнце сверху. Лозы вокруг.", terraceText: "Терраса и зелёный двор — ваша гостиная под открытым небом в Ереване.",
    included: "Всё самое приятное", includedTitle: "Всегда включено.", breakfast: "Особый бесплатный завтрак", wifi: "Быстрый бесплатный Wi-Fi", coffee: "Чай и кофе без ограничений", parking: "Бесплатная парковка", kitchenAmenity: "Общая кухня", aircon: "Кондиционер в номерах",
    breakfastTitle: "Просыпайтесь ради приятного.", breakfastText: "Наш особый завтрак бесплатен для гостей. Налейте ещё кофе, не спешите и спланируйте день вместе.",
    mapKicker: "В центре приключений", mapTitle: "Ереван прямо за дверью.", mapText: "Мы на тихой улице Сармена, рядом с Каскадом и недалеко от Оперы. Кафе, музеи и ночная жизнь города — совсем близко.",
    openMap: "Открыть в Google Maps", contact: "Написать нам", rules: "Полезно знать", rulesTitle: "Правила дома.", checkin: "Заезд", checkout: "Выезд", children: "Дети", childrenValue: "Любого возраста", payment: "Оплата", paymentValue: "Наличными на месте", pets: "Питомцы", petsValue: "По запросу", policyNote: "Условия отмены и предоплаты зависят от номера и тарифа. Уточняйте актуальные условия при бронировании.",
    whatsapp: "Бронь в WhatsApp", booking: "Бронь на Booking.com", backRooms: "Все номера", roomDetails: "О номере", sleeps: "Спальные места", bath: "Ванная", vibe: "Атмосфера", everything: "Всё необходимое", gallery: "Рассмотреть ближе", chooseAnother: "Продолжить выбор", chooseTitle: "Может, другой сон?", breakfastIncluded: "Завтрак за наш счёт.", breakfastIncludedText: "В каждый номер включены особый бесплатный завтрак, неограниченный чай и кофе, а также кухня и терраса.",
    footerLine: "Для мечтателей, странников и любопытных душ.", rights: "Dreamers Hostel · Ереван, Армения", direct: "Прямая бронь",
  },
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export function DreamersSite({ roomSlug }: { roomSlug?: string }) {
  const [lang, setLang] = useState<Language>("en");
  const c = copy[lang];
  const room = roomSlug ? getRoom(roomSlug) : undefined;

  useEffect(() => {
    const saved = window.localStorage.getItem("dreamers-language");
    if (saved === "ru") setLang("ru");
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("dreamers-language", lang);
  }, [lang]);

  const roomName = room?.name[lang];
  const directUrl = whatsappUrl(room?.name.en);

  return (
    <main className={room ? "room-page" : "home-page"}>
      <Header lang={lang} setLang={setLang} c={c} />
      {room ? <RoomView room={room} lang={lang} c={c} directUrl={directUrl} /> : <HomeView lang={lang} c={c} />}
      <Footer lang={lang} c={c} />
      <a className="whatsapp-float" href={directUrl} target="_blank" rel="noreferrer" aria-label={c.whatsapp}>WA</a>
    </main>
  );
}

function Header({ lang, setLang, c }: { lang: Language; setLang: (l: Language) => void; c: typeof copy.en }) {
  return (
    <header className="nav-shell">
      <Link className="brand" href="/" aria-label="Dreamers Hostel home">
        <span className="brand-mark">D</span><span>Dreamers<br /><small>HOSTEL · YEREVAN</small></span>
      </Link>
      <nav aria-label="Main navigation"><Link href="/#rooms">{c.navRooms}</Link><Link href="/#experience">{c.navHouse}</Link><Link href="/#location">{c.navLocation}</Link></nav>
      <div className="nav-actions">
        <div className="language-switch" aria-label="Language"><button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} type="button">EN</button><span>/</span><button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")} type="button">RU</button></div>
        <a className="pill" href={BOOKING_URL} target="_blank" rel="noreferrer">{c.book}</a>
      </div>
    </header>
  );
}

function HomeView({ lang, c }: { lang: Language; c: typeof copy.en }) {
  const perks = [["☀", c.breakfast], ["⌁", c.wifi], ["∞", c.coffee], ["P", c.parking], ["⌂", c.kitchenAmenity], ["✣", c.aircon]];
  return <>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">{c.address}</p><h1>{c.heroOne}<br /><em>{c.heroTwo}</em></h1><p className="lede">{c.heroText}</p>
        <div className="hero-cta"><a className="button primary" href="#rooms">{c.findRoom} <Arrow /></a><a className="text-link" href="#experience">{c.seeLife} ↓</a></div>
        <div className="hero-stats"><span><strong>14</strong>{c.dormBeds}</span><span><strong>∞</strong>{c.tea}</span><span><strong>1</strong>{c.terrace}</span></div>
      </div>
      <div className="hero-visual"><div className="spark spark-one">✦</div><div className="spark spark-two">✦</div><div className="photo-card photo-main"><Image src="/images/yard.png" alt="Sunny green terrace at Dreamers Hostel" fill priority sizes="(max-width: 900px) 90vw, 46vw" /></div><div className="photo-card photo-small"><Image src="/images/dormitory3.png" alt="Bright dormitory" fill sizes="220px" /></div><div className="floating-note"><span>✦</span>{c.urban}</div></div>
    </section>

    <section className="room-intro" id="rooms"><div className="section-heading"><div><p className="eyebrow">{c.pick}</p><h2>{c.sleep}</h2></div><p>01 — 04</p></div>
      <div className="room-grid">{rooms.map((item, index) => <Link className="room-card" href={`/rooms/${item.slug}`} key={item.slug}><div className="room-photo"><Image src={item.image} alt={item.name[lang]} fill sizes="(max-width: 700px) 90vw, 25vw" /></div><span className="room-number">0{index + 1}</span><h3>{item.name[lang]}</h3><p>{item.kicker[lang]}</p><i>{c.explore} <Arrow /></i></Link>)}</div>
    </section>

    <div className="marquee" aria-hidden="true"><span>BREAKFAST ON US ✦ TERRACE SUNSETS ✦ UNLIMITED COFFEE ✦ NEW FRIENDS ✦ </span><span>BREAKFAST ON US ✦ TERRACE SUNSETS ✦ UNLIMITED COFFEE ✦ NEW FRIENDS ✦ </span></div>

    <section className="experience" id="experience"><div className="experience-copy"><p className="eyebrow">{c.dreamLife}</p><h2>{c.houseTitle}</h2><p>{c.houseText}</p><a className="button dark" href={whatsappUrl()} target="_blank" rel="noreferrer">{c.contact} <Arrow /></a></div>
      <div className="experience-collage"><div className="collage-main"><Image src="/images/kitchen.png" alt="Fully equipped guest kitchen" fill sizes="50vw" /></div><div className="collage-side"><Image src="/images/entrance-yard.png" alt="Green courtyard entrance" fill sizes="30vw" /></div><div className="collage-badge">68<br /><small>SARMEN ST.</small></div></div>
    </section>

    <section className="story-split"><article><div className="story-photo"><Image src="/images/kitchen3.png" alt="Dreamers Hostel kitchen and dining space" fill sizes="50vw" /></div><div><span>01 / KITCHEN</span><h3>{c.kitchen}</h3><p>{c.kitchenText}</p></div></article><article className="pink-story"><div className="story-photo"><Image src="/images/balcony.png" alt="Dreamers Hostel sunny terrace" fill sizes="50vw" /></div><div><span>02 / OUTSIDE</span><h3>{c.terraceTitle}</h3><p>{c.terraceText}</p></div></article></section>

    <section className="perks"><p className="eyebrow">{c.included}</p><h2>{c.includedTitle}</h2><div className="perk-grid">{perks.map(([icon, label]) => <div className="perk" key={label}><b>{icon}</b><span>{label}</span></div>)}</div></section>

    <section className="breakfast-section"><div className="breakfast-photo"><Image src="/images/kitchen5.png" alt="Bright shared kitchen at Dreamers Hostel" fill sizes="60vw" /></div><div className="breakfast-copy"><span className="sun-icon">☀</span><p className="eyebrow">GOOD MORNING, DREAMER</p><h2>{c.breakfastTitle}</h2><p>{c.breakfastText}</p><a className="button primary" href={BOOKING_URL} target="_blank" rel="noreferrer">{c.book} <Arrow /></a></div></section>

    <section className="location" id="location"><div className="location-copy"><p className="eyebrow">{c.mapKicker}</p><h2>{c.mapTitle}</h2><p>{c.mapText}</p><address>Dreamers Hostel & Hotel Apartment<br />68 Sarmen St, 0014 Yerevan<br /><a href="tel:+37493847050">+374 93 847050</a></address><a className="button dark" href={MAP_URL} target="_blank" rel="noreferrer">{c.openMap} <Arrow /></a></div><div className="map-wrap"><iframe title="Dreamers Hostel location map" src="https://www.google.com/maps?q=Dreamers+Hostel+%26+Hotel+Apartment,+68+Sarmen+St,+Yerevan&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></section>

    <section className="rules"><div className="rules-title"><p className="eyebrow">{c.rules}</p><h2>{c.rulesTitle}</h2><p>{c.policyNote}</p></div><div className="rules-grid"><Rule label={c.checkin} value="12:00 — 23:30" /><Rule label={c.checkout} value="10:00 — 12:00" /><Rule label={c.children} value={c.childrenValue} /><Rule label={c.payment} value={c.paymentValue} /><Rule label={c.pets} value={c.petsValue} /></div></section>
  </>;
}

function Rule({ label, value }: { label: string; value: string }) { return <div className="rule"><span>{label}</span><strong>{value}</strong></div>; }

function RoomView({ room, lang, c, directUrl }: { room: NonNullable<ReturnType<typeof getRoom>>; lang: Language; c: typeof copy.en; directUrl: string }) {
  const others = rooms.filter((item) => item.slug !== room.slug).slice(0, 3);
  return <>
    <section className="room-hero"><div className="room-hero-image"><Image src={room.image} alt={room.name[lang]} fill priority sizes="(max-width: 850px) 100vw, 55vw" /></div><div className="room-hero-copy"><Link className="back-link" href="/#rooms">← {c.backRooms}</Link><p className="eyebrow">{room.kicker[lang]}</p><h1>{room.name[lang]}</h1><p>{room.description[lang]}</p><div className="room-actions"><a className="button primary" href={directUrl} target="_blank" rel="noreferrer">{c.whatsapp} <Arrow /></a><a className="button outline" href={BOOKING_URL} target="_blank" rel="noreferrer">{c.booking} <Arrow /></a></div></div></section>

    <section className="room-facts"><p className="eyebrow">{c.roomDetails}</p><div><Fact number="01" label={c.sleeps} value={room.sleep[lang]} /><Fact number="02" label={c.bath} value={room.bathroom[lang]} /><Fact number="03" label={c.vibe} value={room.mood[lang]} /></div></section>

    <section className="room-gallery"><div className="section-heading"><div><p className="eyebrow">{c.gallery}</p><h2>{room.name[lang]}</h2></div><span>✦ DREAMERS</span></div><div className="gallery-grid">{room.images.slice(1).map((image, index) => <div className={`gallery-image gallery-${index + 1}`} key={image}><Image src={image} alt={`${room.name[lang]} — ${index + 2}`} fill sizes="(max-width: 700px) 90vw, 45vw" /></div>)}</div></section>

    <section className="room-amenities"><div><p className="eyebrow">{c.everything}</p><h2>{c.breakfastIncluded}</h2><p>{c.breakfastIncludedText}</p></div><ul>{room.features.map((feature) => <li key={feature.en}><span>✦</span>{feature[lang]}</li>)}</ul></section>

    <section className="room-booking"><div className="room-booking-photo"><Image src="/images/yard.png" alt="Dreamers Hostel terrace" fill sizes="50vw" /></div><div><span>READY WHEN YOU ARE</span><h2>{lang === "en" ? "Your Yerevan story starts here." : "Ваша ереванская история начинается здесь."}</h2><p>+374 93 847050</p><div className="room-actions"><a className="button primary" href={directUrl} target="_blank" rel="noreferrer">{c.whatsapp} <Arrow /></a><a className="button outline-light" href={BOOKING_URL} target="_blank" rel="noreferrer">{c.booking} <Arrow /></a></div></div></section>

    <section className="other-rooms"><p className="eyebrow">{c.chooseAnother}</p><h2>{c.chooseTitle}</h2><div className="other-grid">{others.map((item) => <Link href={`/rooms/${item.slug}`} key={item.slug}><div><Image src={item.image} alt={item.name[lang]} fill sizes="30vw" /></div><h3>{item.name[lang]}</h3><span>{c.explore} <Arrow /></span></Link>)}</div></section>
  </>;
}

function Fact({ number, label, value }: { number: string; label: string; value: string }) { return <article><span>{number}</span><small>{label}</small><strong>{value}</strong></article>; }

function Footer({ lang, c }: { lang: Language; c: typeof copy.en }) {
  return <footer><div className="footer-top"><div><Link className="footer-brand" href="/">Dreamers<span>✦</span></Link><p>{c.footerLine}</p></div><div><small>{c.direct}</small><a href="tel:+37493847050">+374 93 847050</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div><div><small>{c.navRooms}</small>{rooms.map((room) => <Link href={`/rooms/${room.slug}`} key={room.slug}>{room.name[lang]}</Link>)}</div></div><div className="footer-bottom"><span>{c.rights}</span><span>68 Sarmen Street · 0014</span><a className="powered-by" href="https://orscale.com" target="_blank" rel="noreferrer">Powered by <strong>orscale.ai</strong> <Arrow /></a></div></footer>;
}
