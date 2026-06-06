import type { CampsiteConfig } from "../types";

/**
 * Camping Blasge — Bodensdorf am Ossiacher See, Kärnten.
 * Alle Texte/Fakten belegt aus blasge.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Blasge-Fotos in /public/campsites/blasge/
 * (laut Impressum von Frank Lampl / pixelworld.at, Arno Blasge & RDH Websolutions).
 * EHRLICH: Der Platz liegt DIREKT am Ossiacher See mit eigenem Strand
 * ("Camping direkt am See", erste Reihe Kat. I 1–14/21/22). Eigene Sportschule
 * am Strand belegt. Keine eindeutige Auszeichnung auf der Quelle → awards leer.
 * Preise = reale Listenpreise 2026 (Saisontabellen der Detailseiten), "ab"-Werte
 * aus der Nebensaison; Personen-, Strom-, Ortstaxe-/Endreinigungszuschläge offen
 * im priceNote ausgewiesen.
 */
const IMG = "/campsites/blasge";

export const blasge: CampsiteConfig = {
  name: "Camping Blasge",
  shortName: "Blasge",
  slug: "blasge",
  ort: "Bodensdorf am Ossiacher See",
  region: "Kärnten",
  brandKind: "Camping & Ferienhäuser",
  see: "Ossiacher See",
  regionLong: "Urlaubsregion Ossiacher See · Gerlitzen Alpe · Kärnten · Österreich",

  claim: "Ihr Glücksmoment am Ossiacher See",
  claimEmphasis: "am Ossiacher See",
  intro:
    "Familiär geführter Campingplatz direkt am Ossiacher See – mit eigenem Strand, hauseigener Sportschule, modernen Mobilheimen, Ferienwohnungen und Pension, am Fuße der Gerlitzen Alpe in Kärnten.",

  logo: { src: `${IMG}/logo-a06e3b9770.png`, alt: "Camping Blasge Logo" },

  statement: {
    text: "Klein, fein und direkt am Wasser – weit weg vom Massentourismus ist Urlaub bei uns noch Familiensache.",
    emphasis: "noch Familiensache",
  },

  pillars: [
    {
      title: "Direkt am Ossiacher See",
      text: "Unser ca. 1,5 Hektar großes, ebenflächiges Areal liegt mit eigenem Strand direkt am traumhaften Ossiacher See – alles bequem zu Fuß erreichbar.",
      image: { src: `${IMG}/gallery-e6254bc083.webp`, alt: "Luftaufnahme von Camping Blasge direkt am Ossiacher See" },
    },
    {
      title: "Action & Wassersport",
      text: "Banane, Reifen, Wasser-Karussell, Wasserski & Wakeboard, dazu Boots- und Radverleih – für Wasserratten und Abenteurer direkt am Strand.",
      image: { src: `${IMG}/activity-7ca50140c8.webp`, alt: "Wasserspaß auf dem Reifen am Ossiacher See bei Camping Blasge" },
    },
    {
      title: "Unterkünfte für jede Familie",
      text: "Vom Stellplatz über Mobilheime und Ferienwohnungen bis zu geräumigen Ferienhäusern und der Pension Blasge – die volle Auswahl in zentraler Lage am Wasser.",
      image: { src: `${IMG}/accommodation-ab1a555377.webp`, alt: "Ferienhäuser von Camping Blasge mit Blick auf die Berge" },
    },
  ],

  usps: [
    "Familiär geführt",
    "Direkt am See mit eigenem Strand",
    "Hauseigene Sportschule am Strand",
    "Hunde willkommen (Leinenpflicht)",
    "Kostenloses WLAN am ganzen Platz",
    "Gerlitzen Alpe nur 6 km · Gratis-Skibus im Winter",
  ],

  trust: {
    heading: "Worauf Sie sich am Camping Blasge verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich und familiär geführt, mit gepflegten Anlagen, die laufend modernisiert und mehrmals täglich gereinigt werden, einer Sportschule direkt am Strand und freundlicher, individueller Betreuung vom ersten Moment an.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: {
      src: `${IMG}/hero-7e71d2ddc7.webp`,
      alt: "Blick vom Camping Blasge über den Ossiacher See auf die Berge",
    },
  },

  camping: {
    heading: "Camping direkt am See",
    intro:
      "Naturnah und zugleich sportlich: rund 1,5 Hektar mit etwa 70 Stellplätzen auf flachem, bequem begehbarem Gelände – in vier Kategorien, je nach gewünschter Entfernung zum Seeufer.",
    features: [
      {
        title: "Stellplätze in vier Kategorien",
        text: "Premium-Plätze auf ca. 80–100 m² mit Stromanschluss bis zu ruhigen Plätzen im hinteren Bereich – für Wohnmobil, Wohnwagen und Zelt.",
        image: { src: `${IMG}/hero-579f4adfed.webp`, alt: "Stellplätze mit Wohnmobilen am Camping Blasge" },
      },
      {
        title: "Erste Reihe am eigenen Strand",
        text: "Die Plätze der Kategorie I liegen in begehrter erster Reihe – nur wenige Schritte trennen Sie vom erfrischenden Wasser und der Sportschule am Strand.",
        image: { src: `${IMG}/gallery-35dc5a2dba.webp`, alt: "Eigener Badestrand von Camping Blasge am Ossiacher See" },
      },
      {
        title: "Gepflegte, moderne Infrastruktur",
        text: "Neu renovierte Sanitäranlagen, WC getrennt für Damen und Herren, Stromanschlüsse über den ganzen Platz, eingezäunt und gesichert – laufend gewartet.",
        image: { src: `${IMG}/gallery-3e6090eb44.webp`, alt: "Gepflegte Stellplätze am Camping Blasge" },
      },
      {
        title: "Ruhige Plätze & Hunde willkommen",
        text: "Im hinteren Bereich genießen Sie besonders entspannte Atmosphäre. Auch Ihre Vierbeiner sind gern gesehene Gäste (wir bitten um Beachtung der Leinenpflicht).",
        image: { src: `${IMG}/hero-6a15012280.webp`, alt: "Ruhiger Stellplatz mit Wohnmobil am Camping Blasge" },
      },
    ],
  },

  mobilheime: {
    heading: "Unterkünfte für jeden Geschmack",
    intro:
      "Lieber feste Wände? Acht moderne Mobilheime, voll ausgestattete Ferienwohnungen, gemütliche Zimmer, geräumige Ferienhäuser und unsere Frühstückspension – vieles davon ganzjährig buchbar.",
    items: [
      {
        name: "Mobilheime (Typ A / B / C)",
        kind: "Mobilheim · Saison Mai–Okt · in Hauptsaison ab 7 Nächte",
        text: "Acht moderne Mobilheime im Herzen des Areals mit gemütlicher Wohnküche, je nach Typ mit Klimaanlage und einer zusätzlich 15 m² großen, überdachten Veranda.",
        image: { src: `${IMG}/accommodation-6fd4788569.webp`, alt: "Moderne Mobilheime mit überdachter Terrasse am Camping Blasge" },
        priceFrom: 68,
        features: ["32–35,5 m²", "2–6 Personen", "Wohnküche & Veranda"],
      },
      {
        name: "Ferienwohnungen",
        kind: "Ferienwohnung · ganzjährig buchbar",
        text: "Voll ausgestattete Ferienwohnungen von kompakt bis großzügig (bis 120 m²), viele mit eigener Küche und Balkon mit Seeblick – ideal für Familien.",
        image: { src: `${IMG}/hero-67e4056ef2.webp`, alt: "Wohnküche einer Ferienwohnung am Camping Blasge" },
        priceFrom: 61,
        features: ["23–120 m²", "bis 10 Personen", "Balkon mit Seeblick"],
      },
      {
        name: "Ferienhäuser & Bungalows",
        kind: "Ferienhaus · ganzjährig buchbar",
        text: "Ferienhäuser, zwei Bungalows und das Ferienhaus XL für große Familien – mit eigenem Garten für gesellige Grillabende und Balkon mit Blick auf den See.",
        image: { src: `${IMG}/gallery-450f52b60c.webp`, alt: "Ferienhaus mit Garten und Balkon am Camping Blasge" },
        features: ["Eigener Garten", "Balkon mit Seeblick", "wenige Gehminuten zum Strand"],
      },
      {
        name: "Zimmer & Garconniere",
        kind: "Zimmer & FeWo · im Haupthaus",
        text: "Gemütliche Doppelzimmer und Garconniere im ersten Stock des Haupthauses, zentral am Areal – mit eigenem Balkon und traumhaftem Blick auf den See.",
        image: { src: `${IMG}/accommodation-63b3140085.webp`, alt: "Haupthaus mit Balkonen am Camping Blasge" },
        priceFrom: 50,
        features: ["ca. 16–25 m²", "Balkon · WLAN inkl.", "Blick auf den See"],
      },
      {
        name: "Pension Blasge",
        kind: "Frühstückspension · ganzjährig",
        text: "In Unterberg (ca. 1,5 km vom Campingplatz) liegt auf einer Anhöhe unsere Frühstückspension mit Zimmern und Ferienwohnungen – atemberaubender Blick auf See und Ossiacher Alpen.",
        image: { src: `${IMG}/accommodation-2ddab2b179.webp`, alt: "Frühstückspension Blasge in Unterberg mit Seeblick" },
        priceFrom: 50,
        features: ["Zimmer mit Frühstück", "ca. 1,5 km vom Platz", "Seeblick & Gerlitzen-Nähe"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Sport, Action & Erholung am See",
    intro:
      "In unserer hauseigenen Sportschule direkt am Strand stehen Ihnen Profis zur Seite – vom ruhigen Naturerlebnis bis zum Adrenalinkick ist für jeden etwas dabei.",
    items: [
      {
        title: "Segeln & Surfen",
        text: "Nachmittags meist leichte, thermische Winde – ideal für Anfänger. Machen Sie bei uns den international gültigen Grundschein direkt am See.",
        image: { src: `${IMG}/activity-50bff4ff23.webp`, alt: "Segelkurs der Sportschule am Ossiacher See" },
      },
      {
        title: "Kajak & SUP",
        text: "Gleiten Sie beinahe lautlos über den See und erleben Sie die Tier- und Pflanzenwelt hautnah – pures Naturerlebnis für die ganze Familie.",
        image: { src: `${IMG}/activity-9e8d422c78.webp`, alt: "Kajak & SUP am Ossiacher See bei Camping Blasge" },
      },
      {
        title: "Windsurfen & Baden",
        text: "Eigener Badestrand direkt am Ossiacher See – einsteigen, abkühlen und das lebendige Treiben auf dem Wasser genießen.",
        image: { src: `${IMG}/gallery-ac73a2b8b1.webp`, alt: "Windsurfer auf dem Ossiacher See vor Camping Blasge" },
      },
      {
        title: "Wasserski, Wakeboard & Banane",
        text: "Der Adrenalinkick beim Wasserski und Wakeboarden oder eine rasante Fahrt mit Banane, Reifen und Wasser-Karussell – Familienspaß pur.",
        image: { src: `${IMG}/gallery-bf1cc9d85e.webp`, alt: "Bananaboot-Fahrt am Ossiacher See bei Camping Blasge" },
      },
      {
        title: "Rad- & E-Bike-Verleih",
        text: "Zahlreiche Strecken rund um den See laden zum Radeln ein. Top-gewartete Bikes und E-Bikes, dazu geführte Mountainbike-Touren (E-Bike ab € 47,– pro Tag).",
        image: { src: `${IMG}/gallery-308005fa78.webp`, alt: "Familie beim Radfahren rund um den Ossiacher See" },
      },
    ],
  },

  anreise: {
    heading: "So finden Sie zu uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Richtung Ossiacher See nach Bodensdorf – Fischerweg 6. Ausreichend Parkmöglichkeiten sind direkt am Gelände vorhanden.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Eine Bahnanreise ist problemlos möglich: Bahnhof, Supermärkte, Banken, Arzt und Apotheke sind in wenigen Minuten erreichbar.",
      },
      {
        title: "Im Winter zur Gerlitzen",
        text: "Die Gerlitzen Alpe ist nur 6 km entfernt. Ein kostenloser Skibus bringt Sie direkt zur Talstation der Kanzelbahn in Annenheim.",
      },
    ],
  },

  galerie: {
    heading: "Impressionen von unserem Paradies",
    headingEmphasis: "Paradies",
    intro:
      "See, Strand, Sport und gemütliche Unterkünfte – ein paar Eindrücke von Camping Blasge in Bodensdorf am Ossiacher See.",
    tag: "April bis Oktober",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-77da7464b6.webp`, alt: "Blick vom Steg über den Ossiacher See bei Camping Blasge" },
      { src: `${IMG}/gallery-7c633f0adf.webp`, alt: "Ferienhäuser mit Liegen auf der Wiese am Camping Blasge" },
      { src: `${IMG}/gallery-76e87dcf8c.webp`, alt: "Gemütliche Unterkunft mit Terrasse am Camping Blasge" },
      { src: `${IMG}/hero-d45cb8f4ba.webp`, alt: "Gemütliches Doppelzimmer am Camping Blasge" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Unterkunft und Personen – wir melden uns mit Ihrer persönlichen Verfügbarkeit und einem unverbindlichen Angebot.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise 2026 ab Nebensaison · Stellplatz zzgl. Personen, Ortstaxe (2,70 €/Pers./Nacht) & Strom · Unterkünfte zzgl. Endreinigung, Strom & Ortstaxe · in der Hauptsaison Mindestaufenthalt",
    highlight: {
      title: "Direkt am See mit eigenem Strand",
      text: "Camping in erster Reihe, hauseigene Sportschule am Strand und kostenloses WLAN am ganzen Platz – Ihr Logenplatz am Ossiacher See.",
    },
    categories: [
      // Reale Preisliste Blasge 2026 (Detailseiten). Stellplatz = Platz (ab Kat. IV, Nebensaison € 7,80)
      // + 2 Erwachsene (à € 6,90) ≈ € 21,60 → ab 22; perExtraGuest ≈ Erwachsener Nebensaison € 6,90.
      { id: "stellplatz", label: "Stellplatz", perNight: 22, perExtraGuest: 7 },
      { id: "mobilheim", label: "Mobilheim", perNight: 68 },
      { id: "ferienwohnung", label: "Ferienwohnung", perNight: 61 },
      { id: "pension", label: "Pension + Frühstück", perNight: 50 },
    ],
  },

  kontakt: {
    coords: { lat: 46.678843, lng: 13.970628 },
    tel: "+43 664 42 32 006",
    telHref: "tel:+436644232006",
    mail: "office@blasge.at",
    adresse: "Fischerweg 6 · 9551 Bodensdorf am Ossiacher See · Kärnten",
  },

  languages: ["DE"],

  nav: [
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Mobilheime", href: "#mobilheime" },
        { label: "Ferienwohnungen", href: "#mobilheime" },
        { label: "Ferienhäuser", href: "#mobilheime" },
        { label: "Pension Blasge", href: "#mobilheime" },
      ],
    },
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Eigener Strand", href: "#camping" },
        { label: "Infrastruktur", href: "#camping" },
      ],
    },
    {
      label: "Sport & Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Segeln & Surfen", href: "#aktivitaeten" },
        { label: "Kajak & SUP", href: "#aktivitaeten" },
        { label: "Rad- & E-Bike-Verleih", href: "#aktivitaeten" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Kontakt",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default blasge;
