export type Locale = "sq" | "en" | "it" | "de" | "hr";

export interface LocaleOption {
  code: Locale;
  short: string;
  label: string;
  flag: string;
}

export const LOCALE_OPTIONS: LocaleOption[] = [
  { code: "sq", short: "SQ", label: "Shqip", flag: "al" },
  { code: "en", short: "EN", label: "English", flag: "gb" },
  { code: "it", short: "IT", label: "Italiano", flag: "it" },
  { code: "de", short: "DE", label: "Deutsch", flag: "de" },
  { code: "hr", short: "HR", label: "Hrvatski", flag: "hr" },
];

export interface Translation {
  nav: {
    about: string;
    galeria: string;
    lokacioni: string;
    review: string;
    socials: string;
  };
  hero: {
    titlePrefix: string;
    subtitle: string;
  };
  about: {
    heading: string;
    paragraph: string;
    cta: string;
    imageAlt: string;
  };
  galeria: {
    heading: string;
    subtitle: string;
    cta: string;
    alt1: string;
    alt2: string;
    alt3: string;
  };
  locations: {
    heading: string;
    subtitle: string;
    items: { title: string; text: string; cta: string; alt: string }[];
  };
  maps: {
    openPrefix: string;
    hours: string;
    subtitle: string;
  };
  reviews: {
    heading: string;
    subtitle: string;
    items: string[];
    cta: string;
  };
  footer: {
    instagramLabel: string;
    postAlt: string;
    logoAlt: string;
    followUs: string;
    instagramBtn: string;
    copyright: string;
  };
}

export const translations: Record<Locale, Translation> = {
  sq: {
    nav: {
      about: "Rreth Nesh",
      galeria: "Galeria",
      lokacioni: "Lokacioni",
      review: "Vlerësimet",
      socials: "Rrjetet Sociale",
    },
    hero: {
      titlePrefix: "Mirë se vini në",
      subtitle: "Destinacioni qe do te behet ndalesa jote e përditshme.",
    },
    about: {
      heading: "Rreth Nesh",
      paragraph:
        "është destinacioni juaj për kafe, minimarket dhe snack bar me vetëshërbim, i hapur 24 orë në ditë, 7 ditë në javë. Me kafe cilësore, produkte të përditshme dhe shërbim të shpejtë, jemi gjithmonë gati t'ju mirëpresim – kurdo që ju nevojitet një ndalesë.",
      cta: "Shiko më shumë",
      imageAlt: "Kafe Stop & Go",
    },
    galeria: {
      heading: "Galeria",
      subtitle: "Hidhini një sy hapësirave dhe produkteve tona.",
      cta: "See more",
      alt1: "Hapësira e brendshme Stop & Go",
      alt2: "Tarraca Stop & Go",
      alt3: "Kafe espresso Stop & Go",
    },
    locations: {
      heading: "Locations",
      subtitle: "Na gjeni pranë jush, kudo që po udhëtoni.",
      items: [
        {
          title: "Location 1",
          text: "Lokacioni i parë i Stop & Go, i hapur 24 orë, me hapësirë të jashtme dhe parking të lirë për ndalesa të shpejta.",
          cta: "See map",
          alt: "Lokacioni 1 Stop & Go",
        },
        {
          title: "Location 2",
          text: "Ndalesa e dytë mbi rrugën kombëtare, ideale për udhëtarët që duan kafe dhe snack pa zbritur shumë nga rruga.",
          cta: "See map",
          alt: "Lokacioni 2 Stop & Go",
        },
        {
          title: "Location 3",
          text: "Lokacioni i tretë, me minimarket të plotë dhe snack food, gati t'ju shërbejë në çdo orë të ditës.",
          cta: "See map",
          alt: "Lokacioni 3 Stop & Go",
        },
      ],
    },
    maps: {
      openPrefix: "Open",
      hours: "24 hours",
      subtitle: "Ju mirëpresim!",
    },
    reviews: {
      heading: "REVIEWS",
      subtitle: "Çfarë thonë klientët tanë për ne.",
      items: [
        "Kafe shumë e mirë dhe shërbim i shpejtë. E rekomandoj për të gjithë ata që udhëtojnë natën.",
        "Ambient i pastër, minimarket me gjithçka të nevojshme. Ndalesa ime e preferuar gjatë rrugës.",
        "Stafi shumë i sjellshëm dhe gjithmonë i hapur, edhe vonë natën. Kafja më e mirë në zonë!",
      ],
      cta: "See all",
    },
    footer: {
      instagramLabel: "Instagram",
      postAlt: "Instagram post Stop & Go",
      logoAlt: "Stop & Go",
      followUs: "FOLLOW US",
      instagramBtn: "Instagram",
      copyright: "Të gjitha të drejtat e rezervuara.",
    },
  },

  en: {
    nav: {
      about: "About",
      galeria: "Gallery",
      lokacioni: "Locations",
      review: "Reviews",
      socials: "Socials",
    },
    hero: {
      titlePrefix: "Welcome to",
      subtitle: "The destination that will become your everyday stop.",
    },
    about: {
      heading: "About Us",
      paragraph:
        "is your destination for coffee, a mini-market and a self-service snack bar, open 24 hours a day, 7 days a week. With quality coffee, everyday products and fast service, we're always ready to welcome you – whenever you need a stop.",
      cta: "See more",
      imageAlt: "Coffee at Stop & Go",
    },
    galeria: {
      heading: "Gallery",
      subtitle: "Take a look at our spaces and products.",
      cta: "See more",
      alt1: "Stop & Go indoor space",
      alt2: "Stop & Go terrace",
      alt3: "Stop & Go espresso coffee",
    },
    locations: {
      heading: "Locations",
      subtitle: "Find us near you, wherever you're traveling.",
      items: [
        {
          title: "Location 1",
          text: "The first Stop & Go location, open 24 hours, with outdoor seating and free parking for quick stops.",
          cta: "See map",
          alt: "Stop & Go Location 1",
        },
        {
          title: "Location 2",
          text: "The second stop on the national road, ideal for travelers who want coffee and a snack without going far off the road.",
          cta: "See map",
          alt: "Stop & Go Location 2",
        },
        {
          title: "Location 3",
          text: "The third location, with a full mini-market and snack food, ready to serve you any time of day.",
          cta: "See map",
          alt: "Stop & Go Location 3",
        },
      ],
    },
    maps: {
      openPrefix: "Open",
      hours: "24 hours",
      subtitle: "We welcome you!",
    },
    reviews: {
      heading: "REVIEWS",
      subtitle: "What our customers say about us.",
      items: [
        "Really good coffee and fast service. I recommend it to everyone traveling at night.",
        "Clean atmosphere, mini-market with everything you need. My favorite stop along the way.",
        "Very friendly staff and always open, even late at night. The best coffee in the area!",
      ],
      cta: "See all",
    },
    footer: {
      instagramLabel: "Instagram",
      postAlt: "Instagram post Stop & Go",
      logoAlt: "Stop & Go",
      followUs: "FOLLOW US",
      instagramBtn: "Instagram",
      copyright: "All rights reserved.",
    },
  },

  it: {
    nav: {
      about: "Chi siamo",
      galeria: "Galleria",
      lokacioni: "Posizioni",
      review: "Recensioni",
      socials: "Social",
    },
    hero: {
      titlePrefix: "Benvenuti da",
      subtitle: "La destinazione che diventerà la tua sosta quotidiana.",
    },
    about: {
      heading: "Chi Siamo",
      paragraph:
        "è la tua destinazione per caffè, minimarket e snack bar self-service, aperto 24 ore al giorno, 7 giorni alla settimana. Con caffè di qualità, prodotti quotidiani e servizio rapido, siamo sempre pronti ad accoglierti – ogni volta che hai bisogno di una sosta.",
      cta: "Scopri di più",
      imageAlt: "Caffè da Stop & Go",
    },
    galeria: {
      heading: "Galleria",
      subtitle: "Dai un'occhiata ai nostri spazi e prodotti.",
      cta: "Scopri di più",
      alt1: "Spazio interno Stop & Go",
      alt2: "Terrazza Stop & Go",
      alt3: "Caffè espresso Stop & Go",
    },
    locations: {
      heading: "Posizioni",
      subtitle: "Trovaci vicino a te, ovunque tu stia viaggiando.",
      items: [
        {
          title: "Posizione 1",
          text: "La prima sede di Stop & Go, aperta 24 ore, con spazio esterno e parcheggio gratuito per soste rapide.",
          cta: "Vedi mappa",
          alt: "Stop & Go Posizione 1",
        },
        {
          title: "Posizione 2",
          text: "La seconda sosta sulla strada statale, ideale per i viaggiatori che vogliono un caffè e uno snack senza allontanarsi troppo dalla strada.",
          cta: "Vedi mappa",
          alt: "Stop & Go Posizione 2",
        },
        {
          title: "Posizione 3",
          text: "La terza sede, con minimarket completo e snack, pronta a servirti a qualsiasi ora del giorno.",
          cta: "Vedi mappa",
          alt: "Stop & Go Posizione 3",
        },
      ],
    },
    maps: {
      openPrefix: "Aperto",
      hours: "24 ore",
      subtitle: "Ti aspettiamo!",
    },
    reviews: {
      heading: "RECENSIONI",
      subtitle: "Cosa dicono i nostri clienti di noi.",
      items: [
        "Caffè molto buono e servizio rapido. Lo consiglio a chiunque viaggi di notte.",
        "Ambiente pulito, minimarket con tutto il necessario. La mia sosta preferita durante il viaggio.",
        "Personale molto gentile e sempre aperto, anche a tarda notte. Il miglior caffè della zona!",
      ],
      cta: "Vedi tutte",
    },
    footer: {
      instagramLabel: "Instagram",
      postAlt: "Post Instagram Stop & Go",
      logoAlt: "Stop & Go",
      followUs: "SEGUICI",
      instagramBtn: "Instagram",
      copyright: "Tutti i diritti riservati.",
    },
  },

  de: {
    nav: {
      about: "Über uns",
      galeria: "Galerie",
      lokacioni: "Standorte",
      review: "Bewertungen",
      socials: "Soziales",
    },
    hero: {
      titlePrefix: "Willkommen bei",
      subtitle: "Das Ziel, das zu deinem täglichen Stopp wird.",
    },
    about: {
      heading: "Über Uns",
      paragraph:
        "ist dein Ziel für Kaffee, einen Minimarkt und eine Selbstbedienungs-Snackbar, 24 Stunden am Tag, 7 Tage die Woche geöffnet. Mit hochwertigem Kaffee, Produkten für den täglichen Bedarf und schnellem Service sind wir immer bereit, dich willkommen zu heißen – wann immer du einen Stopp brauchst.",
      cta: "Mehr erfahren",
      imageAlt: "Kaffee bei Stop & Go",
    },
    galeria: {
      heading: "Galerie",
      subtitle: "Schau dir unsere Räume und Produkte an.",
      cta: "Mehr sehen",
      alt1: "Innenbereich von Stop & Go",
      alt2: "Terrasse von Stop & Go",
      alt3: "Espresso-Kaffee von Stop & Go",
    },
    locations: {
      heading: "Standorte",
      subtitle: "Finde uns in deiner Nähe, wo auch immer du unterwegs bist.",
      items: [
        {
          title: "Standort 1",
          text: "Der erste Stop & Go Standort, 24 Stunden geöffnet, mit Außenbereich und kostenlosem Parkplatz für schnelle Stopps.",
          cta: "Karte ansehen",
          alt: "Stop & Go Standort 1",
        },
        {
          title: "Standort 2",
          text: "Der zweite Stopp an der Nationalstraße, ideal für Reisende, die Kaffee und einen Snack wollen, ohne weit von der Straße abzukommen.",
          cta: "Karte ansehen",
          alt: "Stop & Go Standort 2",
        },
        {
          title: "Standort 3",
          text: "Der dritte Standort, mit vollständigem Minimarkt und Snacks, bereit dich zu jeder Tageszeit zu bedienen.",
          cta: "Karte ansehen",
          alt: "Stop & Go Standort 3",
        },
      ],
    },
    maps: {
      openPrefix: "Geöffnet",
      hours: "24 Stunden",
      subtitle: "Wir freuen uns auf dich!",
    },
    reviews: {
      heading: "BEWERTUNGEN",
      subtitle: "Was unsere Kunden über uns sagen.",
      items: [
        "Sehr guter Kaffee und schneller Service. Ich empfehle es allen, die nachts unterwegs sind.",
        "Saubere Atmosphäre, Minimarkt mit allem Nötigen. Mein liebster Stopp auf der Strecke.",
        "Sehr freundliches Personal und immer geöffnet, auch spät in der Nacht. Der beste Kaffee der Gegend!",
      ],
      cta: "Alle ansehen",
    },
    footer: {
      instagramLabel: "Instagram",
      postAlt: "Instagram-Beitrag Stop & Go",
      logoAlt: "Stop & Go",
      followUs: "FOLGE UNS",
      instagramBtn: "Instagram",
      copyright: "Alle Rechte vorbehalten.",
    },
  },

  hr: {
    nav: {
      about: "O nama",
      galeria: "Galerija",
      lokacioni: "Lokacije",
      review: "Recenzije",
      socials: "Društvene mreže",
    },
    hero: {
      titlePrefix: "Dobrodošli u",
      subtitle: "Destinacija koja će postati vaša svakodnevna stanica.",
    },
    about: {
      heading: "O Nama",
      paragraph:
        "je vaša destinacija za kavu, mini-market i samoposlužni snack bar, otvoren 24 sata dnevno, 7 dana u tjednu. S kvalitetnom kavom, svakodnevnim proizvodima i brzom uslugom, uvijek smo spremni dočekati vas – kad god vam zatreba stanka.",
      cta: "Pogledaj više",
      imageAlt: "Kava u Stop & Go",
    },
    galeria: {
      heading: "Galerija",
      subtitle: "Pogledajte naše prostore i proizvode.",
      cta: "Pogledaj više",
      alt1: "Unutrašnji prostor Stop & Go",
      alt2: "Terasa Stop & Go",
      alt3: "Espresso kava Stop & Go",
    },
    locations: {
      heading: "Lokacije",
      subtitle: "Pronađite nas u svojoj blizini, gdje god putujete.",
      items: [
        {
          title: "Lokacija 1",
          text: "Prva Stop & Go lokacija, otvorena 24 sata, s vanjskim prostorom i besplatnim parkingom za brze pauze.",
          cta: "Pogledaj kartu",
          alt: "Stop & Go Lokacija 1",
        },
        {
          title: "Lokacija 2",
          text: "Druga stanica na državnoj cesti, idealna za putnike koji žele kavu i grickalice bez velikog skretanja s puta.",
          cta: "Pogledaj kartu",
          alt: "Stop & Go Lokacija 2",
        },
        {
          title: "Lokacija 3",
          text: "Treća lokacija, s potpunim mini-marketom i snack ponudom, spremna posluživati vas u svako doba dana.",
          cta: "Pogledaj kartu",
          alt: "Stop & Go Lokacija 3",
        },
      ],
    },
    maps: {
      openPrefix: "Otvoreno",
      hours: "24 sata",
      subtitle: "Dočekujemo vas!",
    },
    reviews: {
      heading: "RECENZIJE",
      subtitle: "Što naši kupci kažu o nama.",
      items: [
        "Stvarno dobra kava i brza usluga. Preporučujem svima koji putuju noću.",
        "Čisto okruženje, mini-market sa svime potrebnim. Moja omiljena stanka na putu.",
        "Vrlo ljubazno osoblje i uvijek otvoreno, čak i kasno navečer. Najbolja kava u okolici!",
      ],
      cta: "Pogledaj sve",
    },
    footer: {
      instagramLabel: "Instagram",
      postAlt: "Instagram objava Stop & Go",
      logoAlt: "Stop & Go",
      followUs: "PRATI NAS",
      instagramBtn: "Instagram",
      copyright: "Sva prava pridržana.",
    },
  },
};
