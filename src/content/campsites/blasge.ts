import type { CampsiteConfig } from "../types";

const IMG = "/campsites/blasge";

const blasge: CampsiteConfig = {
  name: "Camping Blasge",
  shortName: "Blasge",
  slug: "blasge",
  ort: "Bodensdorf am Ossiacher See",
  region: "Kärnten",
  brandKind: "Camping am Ossiacher See",
  see: "Ossiacher See",
  regionLong: "Ossiacher See · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Dein Glücksmoment am Ossiacher See",
  claimEmphasis: "am Ossiacher See",
  emailDetail: "eure hauseigene Sportschule am eigenen Strand",
  intro:
    "Familiär geführt auf rund 1,5 Hektar, direkt am Ossiacher See: ebene Stellplätze in vier Kategorien, moderne Mobilheime und eine hauseigene Sportschule am eigenen Strand — die Gerlitzen Alpe immer im Blick.",

  logo: { src: `${IMG}/logo.png`, alt: "Camping Blasge Logo" },

  statement: {
    text: "Vom Stellplatz sind es nur ein paar Schritte zum eigenen Strand — und zur Sportschule direkt am Wasser.",
    emphasis: "zum eigenen Strand",
  },

  pillars: [
    {
      title: "Eigener Strand & Sportschule",
      text: "Direkt am Campingplatz-Strand bringen dich erfahrene Sportlehrer aufs Wasser — vom ersten Segelschein bis zum Wakeboard-Kick.",
      image: { src: `${IMG}/activity-50bff4ff23.webp`, alt: "Segeln mit Kind in der Sportschule am Strand von Camping Blasge" },
    },
    {
      title: "Komfortable Mobilheime",
      text: "Acht moderne Mobilheime im mittleren Areal — je nach Größe für eine bis zwei Familien, mit überdachter Terrasse von 15 m².",
      image: { src: `${IMG}/accommodation-e21cafdaf3.webp`, alt: "Reihe moderner Mobilheime mit Terrasse am Camping Blasge vor der Gerlitzen Alpe" },
    },
    {
      title: "Aktiv rund um den See",
      text: "Zahlreiche flache Radwege führen rund um den Ossiacher See — mit top-gewarteten Bikes und E-Bikes aus dem hauseigenen Verleih.",
      image: { src: `${IMG}/gallery-308005fa78.webp`, alt: "Familie beim Radfahren rund um den Ossiacher See bei Camping Blasge" },
    },
  ],

  usps: [
    "Direkt am Ossiacher See",
    "Eigener Strand",
    "Hauseigene Sportschule",
    "Hunde willkommen",
    "Gerlitzen Alpe ganz nah",
  ],

  trust: {
    heading: "Klein, fein und direkt am Wasser",
    headingEmphasis: "direkt am Wasser",
    intro:
      "In Familienhand geführt: rund 70 gepflegte Stellplätze, mehrmals täglich gereinigte Sanitäranlagen und kurze Wege auf ebenem Gelände — weit weg vom Massentourismus, mitten am Ossiacher See.",
  },

  awards: [],

  saison: { von: "Ende April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-7e71d2ddc7.webp`, alt: "Liegewiese am Ufer des Ossiacher Sees mit Bergblick beim Camping Blasge" },
  },

  breather: {
    image: { src: `${IMG}/gallery-3552c41085.webp`, alt: "Überdachte Terrasse einer Unterkunft am Camping Blasge" },
    line: "Geschützte Terrassen für lange Sommerabende im Freien.",
  },

  camping: {
    heading: "Camping am CP Blasge",
    intro:
      "Rund 70 Stellplätze in vier Kategorien — gestaffelt nach Nähe zum Seeufer, alle mit Stromanschluss und auf ebenem, kurzwegigem Gelände.",
    features: [
      {
        title: "Vier Stellplatz-Kategorien",
        text: "Von der Premium-Kategorie I nah am Ufer (80–100 m²) bis zur kompakten Kategorie IV — du wählst die Lage nach deiner Wunsch-Entfernung zum See.",
        image: { src: `${IMG}/hero-579f4adfed.webp`, alt: "Stellplätze mit Wohnwagen und Wohnmobil unter Bäumen am Camping Blasge" },
      },
      {
        title: "Ebenes Gelände, kurze Wege",
        text: "Das flache, bequem begehbare Areal erreichst du komplett zu Fuß — ganz ohne anstrengende Steigungen, alle Einrichtungen rasch erreichbar.",
        image: { src: `${IMG}/gallery-3e6090eb44.webp`, alt: "Ebener Weg zwischen den Stellplätzen am Camping Blasge" },
      },
      {
        title: "Stellplatz mit Strom",
        text: "Stromanschluss an jedem Platz und ausreichend Parkmöglichkeiten direkt bei deinem Stellplatz.",
        image: { src: `${IMG}/hero-6a15012280.webp`, alt: "Grüner Stellplatz mit Wohnmobil am Camping Blasge" },
      },
    ],
  },

  mobilheime: {
    heading: "Unterkünfte für jeden Anspruch",
    intro:
      "Lieber feste Wände statt Zelt? Am Areal findest du Zimmer und Ferienwohnungen, geräumige Ferienhäuser samt Bungalows sowie die Frühstückspension Blasge am Hang über dem See.",
    items: [
      {
        name: "Zimmer & Ferienwohnungen",
        kind: "Im ruhigen Camping-Areal",
        text: "Sechs Einheiten im ruhigen Teil des Areals — Garconniere, Doppelzimmer und Ferienwohnungen mit moderner Komplett-Ausstattung, ideal für Familien mit mehreren Kindern.",
        image: { src: `${IMG}/accommodation-a608ab18e8.webp`, alt: "Gebäude mit Ferienwohnungen am Camping Blasge" },
        priceFrom: 49.6,
        features: ["Moderne Ausstattung", "Ruhige Lage", "Ideal für Familien"],
      },
      {
        name: "Ferienhäuser & Bungalows",
        kind: "Für große Familien",
        text: "Ferienhäuser, zwei Bungalows und das Ferienhaus XL — mit eigenem Garten für gesellige Grillabende und Seeblick vom Balkon, nur wenige Gehminuten vom Strand.",
        image: { src: `${IMG}/accommodation-820dc55b0d.webp`, alt: "Ferienhaus mit Garten am Camping Blasge vor Bergkulisse" },
        priceFrom: 57.1,
        features: ["Eigener Garten", "Seeblick vom Balkon", "Ganzjährig buchbar"],
      },
      {
        name: "Pension Blasge",
        kind: "Frühstückspension · Unterberg",
        text: "Auf einer Anhöhe in Unterberg (ca. 1,5 km), mit Ausblick auf See und Ossiacher Alpen: Zimmer mit Frühstück und Ferienwohnungen, ganzjährig buchbar.",
        image: { src: `${IMG}/gallery-479170a13a.webp`, alt: "Frühstückspension Blasge in Unterberg über dem Ossiacher See" },
        priceFrom: 25,
        features: ["Frühstück möglich", "Ausblick auf den See", "Ganzjährig geöffnet"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Sommer-Sportschule am Strand",
    intro:
      "Direkt am Campingplatz-Strand bringen dich erfahrene Sportlehrer aufs Wasser — vom ersten Segelschein bis zum Adrenalinkick. Boote und Räder gibt es im Verleih.",
    items: [
      {
        title: "Kajak & SUP",
        text: "Fast lautlos über den Ossiacher See gleiten und die Tier- und Pflanzenwelt am Ufer hautnah erleben — Kajak und SUP leihst du direkt am Strand.",
        image: { src: `${IMG}/activity-9e8d422c78.webp`, alt: "Gruppe beim Kajakfahren auf dem Ossiacher See bei Camping Blasge" },
      },
      {
        title: "Banane, Reifen & Wasserspaß",
        text: "Für den Familienspaß sorgen rasante Fahrten mit Banane und Reifen, dazu Wasserski, Wakeboard und Parasailing — alles über die Sportschule am Platz.",
        image: { src: `${IMG}/activity-7ca50140c8.webp`, alt: "Kinder beim Reifenfahren auf dem Ossiacher See bei Camping Blasge" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Ossiacher See",
    modes: [
      { title: "Mit dem Auto", text: "Über die A10 (Tauernautobahn) bis Villach, dann auf der B94 Richtung Feldkirchen nach Bodensdorf — die Abfahrt Ossiacher See liegt rund 8 km vom Platz." },
      { title: "Mit der Bahn", text: "Der Bahnhof Bodensdorf liegt nur wenige Gehminuten entfernt — eine entspannte Anreise mit der Bahn ist problemlos möglich." },
      { title: "Vor Ort", text: "Supermärkte, Restaurants, Ärzte und die Schiffsanlegestelle erreichst du in wenigen Minuten zu Fuß — Parkplätze gibt es ausreichend am Platz." },
    ],
  },

  galerie: {
    heading: "Impressionen vom Ossiacher See",
    headingEmphasis: "Ossiacher See",
    intro: "Strand, Stellplätze und Sportschule — ein paar Eindrücke von unserem Platz am Wasser.",
    tag: "Ende April bis Oktober",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Ossiacher See",
    headingEmphasis: "am Ossiacher See",
    intro:
      "Wähle Zeitraum und Kategorie — wir melden uns persönlich mit deiner Verfügbarkeit und den genauen Konditionen.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise pro Nacht laut Website — Stellplätze zzgl. Personen (Erwachsene ab € 8,50) und Ortstaxe € 2,70 p. P.; Endpreis je nach Saison und Kategorie.",
    highlight: { title: "Eigener Strand", text: "Vom Stellplatz sind es nur wenige Schritte zum Campingplatz-Strand und zur Sportschule." },
    categories: [
      { id: "stellplatz-1", label: "Stellplatz Kat. I", perNight: 12, perExtraGuest: 8.5 },
      { id: "stellplatz-4", label: "Stellplatz Kat. IV", perNight: 7.8, perExtraGuest: 6.9 },
      { id: "zelt", label: "Zeltplatz", perNight: 12 },
      { id: "mobilheim", label: "Mobilheim", perNight: 67.6 },
    ],
  },

  kontakt: {
    coords: { lat: 46.678843, lng: 13.970628 },
    tel: "+43 (0) 664 / 22 17 472",
    telHref: "tel:+436642217472",
    mail: "office@blasge.at",
    adresse: "Fischerweg 6 · 9551 Bodensdorf am Ossiacher See · Kärnten",
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Strom", href: "#camping" },
    ]},
    { label: "Unterkünfte", href: "#mobilheime" },
    { label: "Sportschule", href: "#aktivitaeten" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default blasge;
