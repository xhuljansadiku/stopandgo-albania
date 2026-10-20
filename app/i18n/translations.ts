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

export const INSTAGRAM_URL = "https://instagram.com";

/** Service names are part of the storefront signage, so they stay untranslated. */
export const SERVICES = ["Caffe Shop", "Minimarket", "Snack Food"] as const;

interface Heading {
  start: string;
  accent: string;
}

export interface Translation {
  nav: {
    about: string;
    services: string;
    galeria: string;
    lokacioni: string;
    review: string;
    cta: string;
    menu: string;
    close: string;
  };
  hero: {
    lines: [string, string, string];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    openNow: string;
    localTime: string;
    scroll: string;
  };
  marquee: string[];
  about: {
    heading: Heading;
    paragraph: string;
    stats: { value: number | string; label: string }[];
    cta: string;
    imageAlt: string;
    imageAlt2: string;
    badge: string;
  };
  services: {
    eyebrow: string;
    heading: Heading;
    subtitle: string;
    items: { text: string; points: string[] }[];
  };
  galeria: {
    heading: Heading;
    subtitle: string;
    alts: string[];
    close: string;
    prev: string;
    next: string;
  };
  locations: {
    heading: Heading;
    subtitle: string;
    open: string;
    showOnMap: string;
    directions: string;
    items: { title: string; text: string }[];
  };
  reviews: {
    heading: Heading;
    subtitle: string;
    items: { text: string; role: string }[];
  };
  footer: {
    heading: Heading;
    text: string;
    instagramBtn: string;
    directionsBtn: string;
    navTitle: string;
    hoursTitle: string;
    hoursDays: string;
    hoursTime: string;
    followTitle: string;
    tagline: string;
    copyright: string;
    backToTop: string;
  };
}

export const translations: Record<Locale, Translation> = {
  sq: {
    nav: {
      about: "Rreth Nesh",
      services: "Shërbimet",
      galeria: "Galeria",
      lokacioni: "Lokacionet",
      review: "Vlerësimet",
      cta: "Gjej ndalesën",
      menu: "Hap menunë",
      close: "Mbyll menunë",
    },
    hero: {
      lines: ["Ndalo.", "Shijo.", "Vazhdo."],
      subtitle:
        "Kafe, minimarket dhe snack food — 24 orë në ditë, 7 ditë në javë. Destinacioni që do të bëhet ndalesa jote e përditshme.",
      ctaPrimary: "Gjej ndalesën më të afërt",
      ctaSecondary: "Shiko galerinë",
      openNow: "Hapur tani",
      localTime: "Ora në Shqipëri",
      scroll: "Lëviz poshtë",
    },
    marquee: ["Espresso", "Cappuccino", "Minimarket", "Snack Food", "Hapur 24/7", "Parking falas", "Take away"],
    about: {
      heading: { start: "Më shumë se një", accent: "ndalesë." },
      paragraph:
        "Stop & Go është destinacioni juaj për kafe, minimarket dhe snack bar me vetëshërbim, i hapur 24 orë në ditë, 7 ditë në javë. Me kafe cilësore, produkte të përditshme dhe shërbim të shpejtë, jemi gjithmonë gati t'ju mirëpresim – kurdo që ju nevojitet një ndalesë.",
      stats: [
        { value: "24/7", label: "Hapur pa pushim" },
        { value: 3, label: "Lokacione" },
        { value: 365, label: "Ditë në vit" },
      ],
      cta: "Zbulo shërbimet",
      imageAlt: "Cappuccino me latte art në Stop & Go",
      imageAlt2: "Espresso duke u përgatitur në Stop & Go",
      badge: "HAPUR 24/7 • KAFE • SNACK • ",
    },
    services: {
      eyebrow: "Çfarë ofrojmë",
      heading: { start: "Tre gjëra,", accent: "një ndalesë." },
      subtitle: "Gjithçka që të duhet për rrugën, nën të njëjtin çati.",
      items: [
        {
          text: "Kafe italiane e përgatitur me kujdes, nga espresso e shpejtë te cappuccino për t'u shijuar në tarracë.",
          points: ["Espresso & cappuccino", "Take away", "Tarracë e jashtme"],
        },
        {
          text: "Produkte të përditshme dhe pije të ftohta, gati për çdo udhëtim — ditë apo natë.",
          points: ["Pije të ftohta", "Produkte të përditshme", "Gjithçka për rrugën"],
        },
        {
          text: "Snack të freskëta me vetëshërbim, për një pushim të shpejtë pa humbur kohë.",
          points: ["Vetëshërbim", "Snack të freskëta", "Ëmbëlsira"],
        },
      ],
    },
    galeria: {
      heading: { start: "Hidhini një", accent: "sy." },
      subtitle: "Hapësirat dhe produktet tona, ashtu siç janë — sidomos natën.",
      alts: [
        "Fasada e Stop & Go natën me tabelën neon",
        "Espresso duke rrjedhur në filxhan",
        "Cappuccino me latte art",
        "Tarraca e Stop & Go me ulëse të jashtme",
      ],
      close: "Mbyll",
      prev: "Foto e mëparshme",
      next: "Foto tjetër",
    },
    locations: {
      heading: { start: "Gjithmonë", accent: "afër teje." },
      subtitle: "Zgjidh një lokacion për ta parë në hartë, ose merr drejtimin direkt.",
      open: "Hapur 24/7",
      showOnMap: "Shiko në hartë",
      directions: "Merr drejtimin",
      items: [
        {
          title: "Lokacioni 1",
          text: "Lokacioni i parë i Stop & Go, i hapur 24 orë, me hapësirë të jashtme dhe parking të lirë për ndalesa të shpejta.",
        },
        {
          title: "Lokacioni 2",
          text: "Ndalesa e dytë mbi rrugën kombëtare, ideale për udhëtarët që duan kafe dhe snack pa zbritur shumë nga rruga.",
        },
        {
          title: "Lokacioni 3",
          text: "Lokacioni i tretë, me minimarket të plotë dhe snack food, gati t'ju shërbejë në çdo orë të ditës.",
        },
      ],
    },
    reviews: {
      heading: { start: "Fjala e", accent: "klientëve." },
      subtitle: "Çfarë thonë ata që ndalojnë te ne.",
      items: [
        {
          text: "Kafe shumë e mirë dhe shërbim i shpejtë. E rekomandoj për të gjithë ata që udhëtojnë natën.",
          role: "Udhëtar nate",
        },
        {
          text: "Ambient i pastër, minimarket me gjithçka të nevojshme. Ndalesa ime e preferuar gjatë rrugës.",
          role: "Klient i rregullt",
        },
        {
          text: "Stafi shumë i sjellshëm dhe gjithmonë i hapur, edhe vonë natën. Kafja më e mirë në zonë!",
          role: "Banor i zonës",
        },
      ],
    },
    footer: {
      heading: { start: "Ndalesa jote e radhës", accent: "të pret." },
      text: "Drita është gjithmonë ndezur. Kalo kur të duash.",
      instagramBtn: "Na ndiq në Instagram",
      directionsBtn: "Gjej ndalesën",
      navTitle: "Navigim",
      hoursTitle: "Orari",
      hoursDays: "E hënë – E diel",
      hoursTime: "00:00 – 24:00",
      followTitle: "Na ndiq",
      tagline: "Caffe Shop · Minimarket · Snack Food",
      copyright: "Të gjitha të drejtat e rezervuara.",
      backToTop: "Kthehu lart",
    },
  },

  en: {
    nav: {
      about: "About",
      services: "Services",
      galeria: "Gallery",
      lokacioni: "Locations",
      review: "Reviews",
      cta: "Find a stop",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      lines: ["Stop.", "Sip.", "Go."],
      subtitle:
        "Coffee, mini-market and snack food — 24 hours a day, 7 days a week. The destination that will become your everyday stop.",
      ctaPrimary: "Find your nearest stop",
      ctaSecondary: "View gallery",
      openNow: "Open now",
      localTime: "Local time in Albania",
      scroll: "Scroll",
    },
    marquee: ["Espresso", "Cappuccino", "Minimarket", "Snack Food", "Open 24/7", "Free parking", "Take away"],
    about: {
      heading: { start: "More than just a", accent: "stop." },
      paragraph:
        "Stop & Go is your destination for coffee, a mini-market and a self-service snack bar, open 24 hours a day, 7 days a week. With quality coffee, everyday products and fast service, we're always ready to welcome you – whenever you need a stop.",
      stats: [
        { value: "24/7", label: "Always open" },
        { value: 3, label: "Locations" },
        { value: 365, label: "Days a year" },
      ],
      cta: "Explore services",
      imageAlt: "Cappuccino with latte art at Stop & Go",
      imageAlt2: "Espresso being brewed at Stop & Go",
      badge: "OPEN 24/7 • COFFEE • SNACKS • ",
    },
    services: {
      eyebrow: "What we offer",
      heading: { start: "Three things,", accent: "one stop." },
      subtitle: "Everything you need for the road, under one roof.",
      items: [
        {
          text: "Italian coffee made with care, from a quick espresso to a cappuccino to enjoy on the terrace.",
          points: ["Espresso & cappuccino", "Take away", "Outdoor terrace"],
        },
        {
          text: "Everyday products and cold drinks, ready for any journey — day or night.",
          points: ["Cold drinks", "Everyday essentials", "Road-trip ready"],
        },
        {
          text: "Fresh self-service snacks for a quick break without losing time.",
          points: ["Self-service", "Fresh snacks", "Sweets"],
        },
      ],
    },
    galeria: {
      heading: { start: "Take a", accent: "look." },
      subtitle: "Our spaces and products, just as they are — especially at night.",
      alts: [
        "Stop & Go storefront at night with neon sign",
        "Espresso pouring into a cup",
        "Cappuccino with latte art",
        "Stop & Go terrace with outdoor seating",
      ],
      close: "Close",
      prev: "Previous photo",
      next: "Next photo",
    },
    locations: {
      heading: { start: "Always", accent: "close by." },
      subtitle: "Pick a location to see it on the map, or get directions straight away.",
      open: "Open 24/7",
      showOnMap: "Show on map",
      directions: "Get directions",
      items: [
        {
          title: "Location 1",
          text: "The first Stop & Go location, open 24 hours, with outdoor seating and free parking for quick stops.",
        },
        {
          title: "Location 2",
          text: "The second stop on the national road, ideal for travelers who want coffee and a snack without going far off the road.",
        },
        {
          title: "Location 3",
          text: "The third location, with a full mini-market and snack food, ready to serve you any time of day.",
        },
      ],
    },
    reviews: {
      heading: { start: "In our guests'", accent: "words." },
      subtitle: "What people who stop by say about us.",
      items: [
        {
          text: "Really good coffee and fast service. I recommend it to everyone traveling at night.",
          role: "Night traveler",
        },
        {
          text: "Clean atmosphere, mini-market with everything you need. My favorite stop along the way.",
          role: "Regular guest",
        },
        {
          text: "Very friendly staff and always open, even late at night. The best coffee in the area!",
          role: "Local resident",
        },
      ],
    },
    footer: {
      heading: { start: "Your next stop is", accent: "waiting." },
      text: "The lights are always on. Drop by whenever you like.",
      instagramBtn: "Follow us on Instagram",
      directionsBtn: "Find a stop",
      navTitle: "Navigate",
      hoursTitle: "Hours",
      hoursDays: "Monday – Sunday",
      hoursTime: "00:00 – 24:00",
      followTitle: "Follow us",
      tagline: "Caffe Shop · Minimarket · Snack Food",
      copyright: "All rights reserved.",
      backToTop: "Back to top",
    },
  },

  it: {
    nav: {
      about: "Chi siamo",
      services: "Servizi",
      galeria: "Galleria",
      lokacioni: "Sedi",
      review: "Recensioni",
      cta: "Trova una sosta",
      menu: "Apri menu",
      close: "Chiudi menu",
    },
    hero: {
      lines: ["Fermati.", "Gusta.", "Riparti."],
      subtitle:
        "Caffè, minimarket e snack food — 24 ore al giorno, 7 giorni su 7. La destinazione che diventerà la tua sosta quotidiana.",
      ctaPrimary: "Trova la sosta più vicina",
      ctaSecondary: "Vedi la galleria",
      openNow: "Aperto ora",
      localTime: "Ora locale in Albania",
      scroll: "Scorri",
    },
    marquee: ["Espresso", "Cappuccino", "Minimarket", "Snack Food", "Aperto 24/7", "Parcheggio gratuito", "Take away"],
    about: {
      heading: { start: "Più di una semplice", accent: "sosta." },
      paragraph:
        "Stop & Go è la tua destinazione per caffè, minimarket e snack bar self-service, aperto 24 ore al giorno, 7 giorni alla settimana. Con caffè di qualità, prodotti quotidiani e servizio rapido, siamo sempre pronti ad accoglierti – ogni volta che hai bisogno di una sosta.",
      stats: [
        { value: "24/7", label: "Sempre aperto" },
        { value: 3, label: "Sedi" },
        { value: 365, label: "Giorni all'anno" },
      ],
      cta: "Scopri i servizi",
      imageAlt: "Cappuccino con latte art da Stop & Go",
      imageAlt2: "Espresso in preparazione da Stop & Go",
      badge: "APERTO 24/7 • CAFFÈ • SNACK • ",
    },
    services: {
      eyebrow: "Cosa offriamo",
      heading: { start: "Tre cose,", accent: "una sosta." },
      subtitle: "Tutto ciò che ti serve per il viaggio, sotto lo stesso tetto.",
      items: [
        {
          text: "Caffè italiano preparato con cura, da un espresso veloce a un cappuccino da gustare in terrazza.",
          points: ["Espresso & cappuccino", "Take away", "Terrazza esterna"],
        },
        {
          text: "Prodotti quotidiani e bevande fresche, pronti per ogni viaggio — di giorno o di notte.",
          points: ["Bevande fresche", "Prodotti quotidiani", "Tutto per il viaggio"],
        },
        {
          text: "Snack freschi self-service per una pausa veloce senza perdere tempo.",
          points: ["Self-service", "Snack freschi", "Dolci"],
        },
      ],
    },
    galeria: {
      heading: { start: "Dai un'", accent: "occhiata." },
      subtitle: "I nostri spazi e prodotti, così come sono — soprattutto di notte.",
      alts: [
        "Facciata di Stop & Go di notte con insegna al neon",
        "Espresso che scende nella tazzina",
        "Cappuccino con latte art",
        "Terrazza di Stop & Go con tavoli all'aperto",
      ],
      close: "Chiudi",
      prev: "Foto precedente",
      next: "Foto successiva",
    },
    locations: {
      heading: { start: "Sempre", accent: "vicino a te." },
      subtitle: "Scegli una sede per vederla sulla mappa, oppure ottieni subito le indicazioni.",
      open: "Aperto 24/7",
      showOnMap: "Vedi sulla mappa",
      directions: "Indicazioni",
      items: [
        {
          title: "Sede 1",
          text: "La prima sede di Stop & Go, aperta 24 ore, con spazio esterno e parcheggio gratuito per soste rapide.",
        },
        {
          title: "Sede 2",
          text: "La seconda sosta sulla strada statale, ideale per i viaggiatori che vogliono un caffè e uno snack senza allontanarsi troppo dalla strada.",
        },
        {
          title: "Sede 3",
          text: "La terza sede, con minimarket completo e snack, pronta a servirti a qualsiasi ora del giorno.",
        },
      ],
    },
    reviews: {
      heading: { start: "Parola ai", accent: "clienti." },
      subtitle: "Cosa dice chi si ferma da noi.",
      items: [
        {
          text: "Caffè molto buono e servizio rapido. Lo consiglio a chiunque viaggi di notte.",
          role: "Viaggiatore notturno",
        },
        {
          text: "Ambiente pulito, minimarket con tutto il necessario. La mia sosta preferita durante il viaggio.",
          role: "Cliente abituale",
        },
        {
          text: "Personale molto gentile e sempre aperto, anche a tarda notte. Il miglior caffè della zona!",
          role: "Residente della zona",
        },
      ],
    },
    footer: {
      heading: { start: "La tua prossima sosta", accent: "ti aspetta." },
      text: "Le luci sono sempre accese. Passa quando vuoi.",
      instagramBtn: "Seguici su Instagram",
      directionsBtn: "Trova una sosta",
      navTitle: "Naviga",
      hoursTitle: "Orari",
      hoursDays: "Lunedì – Domenica",
      hoursTime: "00:00 – 24:00",
      followTitle: "Seguici",
      tagline: "Caffe Shop · Minimarket · Snack Food",
      copyright: "Tutti i diritti riservati.",
      backToTop: "Torna su",
    },
  },

  de: {
    nav: {
      about: "Über uns",
      services: "Angebot",
      galeria: "Galerie",
      lokacioni: "Standorte",
      review: "Bewertungen",
      cta: "Stopp finden",
      menu: "Menü öffnen",
      close: "Menü schließen",
    },
    hero: {
      lines: ["Stopp.", "Genieß.", "Weiter."],
      subtitle:
        "Kaffee, Minimarkt und Snacks — 24 Stunden am Tag, 7 Tage die Woche. Das Ziel, das zu deinem täglichen Stopp wird.",
      ctaPrimary: "Nächsten Stopp finden",
      ctaSecondary: "Galerie ansehen",
      openNow: "Jetzt geöffnet",
      localTime: "Ortszeit in Albanien",
      scroll: "Scrollen",
    },
    marquee: ["Espresso", "Cappuccino", "Minimarkt", "Snack Food", "24/7 geöffnet", "Gratis Parken", "Take away"],
    about: {
      heading: { start: "Mehr als nur ein", accent: "Stopp." },
      paragraph:
        "Stop & Go ist dein Ziel für Kaffee, einen Minimarkt und eine Selbstbedienungs-Snackbar, 24 Stunden am Tag, 7 Tage die Woche geöffnet. Mit hochwertigem Kaffee, Produkten für den täglichen Bedarf und schnellem Service sind wir immer bereit, dich willkommen zu heißen – wann immer du einen Stopp brauchst.",
      stats: [
        { value: "24/7", label: "Immer geöffnet" },
        { value: 3, label: "Standorte" },
        { value: 365, label: "Tage im Jahr" },
      ],
      cta: "Angebot entdecken",
      imageAlt: "Cappuccino mit Latte Art bei Stop & Go",
      imageAlt2: "Espresso wird bei Stop & Go zubereitet",
      badge: "24/7 GEÖFFNET • KAFFEE • SNACKS • ",
    },
    services: {
      eyebrow: "Unser Angebot",
      heading: { start: "Drei Dinge,", accent: "ein Stopp." },
      subtitle: "Alles, was du für unterwegs brauchst, unter einem Dach.",
      items: [
        {
          text: "Italienischer Kaffee mit Sorgfalt zubereitet, vom schnellen Espresso bis zum Cappuccino auf der Terrasse.",
          points: ["Espresso & Cappuccino", "Take away", "Außenterrasse"],
        },
        {
          text: "Produkte für den täglichen Bedarf und kalte Getränke, bereit für jede Reise — Tag und Nacht.",
          points: ["Kalte Getränke", "Täglicher Bedarf", "Alles für unterwegs"],
        },
        {
          text: "Frische Snacks zur Selbstbedienung für eine schnelle Pause ohne Zeitverlust.",
          points: ["Selbstbedienung", "Frische Snacks", "Süßes"],
        },
      ],
    },
    galeria: {
      heading: { start: "Wirf einen", accent: "Blick." },
      subtitle: "Unsere Räume und Produkte, so wie sie sind — besonders bei Nacht.",
      alts: [
        "Stop & Go Fassade bei Nacht mit Neonschild",
        "Espresso läuft in die Tasse",
        "Cappuccino mit Latte Art",
        "Stop & Go Terrasse mit Außensitzplätzen",
      ],
      close: "Schließen",
      prev: "Vorheriges Foto",
      next: "Nächstes Foto",
    },
    locations: {
      heading: { start: "Immer", accent: "in deiner Nähe." },
      subtitle: "Wähle einen Standort, um ihn auf der Karte zu sehen, oder starte direkt die Route.",
      open: "24/7 geöffnet",
      showOnMap: "Auf Karte zeigen",
      directions: "Route planen",
      items: [
        {
          title: "Standort 1",
          text: "Der erste Stop & Go Standort, 24 Stunden geöffnet, mit Außenbereich und kostenlosem Parkplatz für schnelle Stopps.",
        },
        {
          title: "Standort 2",
          text: "Der zweite Stopp an der Nationalstraße, ideal für Reisende, die Kaffee und einen Snack wollen, ohne weit von der Straße abzukommen.",
        },
        {
          title: "Standort 3",
          text: "Der dritte Standort, mit vollständigem Minimarkt und Snacks, bereit dich zu jeder Tageszeit zu bedienen.",
        },
      ],
    },
    reviews: {
      heading: { start: "Was Gäste", accent: "sagen." },
      subtitle: "Stimmen von Menschen, die bei uns anhalten.",
      items: [
        {
          text: "Sehr guter Kaffee und schneller Service. Ich empfehle es allen, die nachts unterwegs sind.",
          role: "Nachtreisender",
        },
        {
          text: "Saubere Atmosphäre, Minimarkt mit allem Nötigen. Mein liebster Stopp auf der Strecke.",
          role: "Stammgast",
        },
        {
          text: "Sehr freundliches Personal und immer geöffnet, auch spät in der Nacht. Der beste Kaffee der Gegend!",
          role: "Anwohner",
        },
      ],
    },
    footer: {
      heading: { start: "Dein nächster Stopp", accent: "wartet." },
      text: "Das Licht ist immer an. Komm vorbei, wann du willst.",
      instagramBtn: "Folge uns auf Instagram",
      directionsBtn: "Stopp finden",
      navTitle: "Navigation",
      hoursTitle: "Öffnungszeiten",
      hoursDays: "Montag – Sonntag",
      hoursTime: "00:00 – 24:00",
      followTitle: "Folge uns",
      tagline: "Caffe Shop · Minimarket · Snack Food",
      copyright: "Alle Rechte vorbehalten.",
      backToTop: "Nach oben",
    },
  },

  hr: {
    nav: {
      about: "O nama",
      services: "Ponuda",
      galeria: "Galerija",
      lokacioni: "Lokacije",
      review: "Recenzije",
      cta: "Pronađi stanicu",
      menu: "Otvori izbornik",
      close: "Zatvori izbornik",
    },
    hero: {
      lines: ["Stani.", "Uživaj.", "Kreni."],
      subtitle:
        "Kava, mini-market i snack food — 24 sata dnevno, 7 dana u tjednu. Destinacija koja će postati vaša svakodnevna stanica.",
      ctaPrimary: "Pronađi najbližu stanicu",
      ctaSecondary: "Pogledaj galeriju",
      openNow: "Sada otvoreno",
      localTime: "Lokalno vrijeme u Albaniji",
      scroll: "Pomakni",
    },
    marquee: ["Espresso", "Cappuccino", "Mini-market", "Snack Food", "Otvoreno 24/7", "Besplatan parking", "Take away"],
    about: {
      heading: { start: "Više od obične", accent: "stanke." },
      paragraph:
        "Stop & Go je vaša destinacija za kavu, mini-market i samoposlužni snack bar, otvoren 24 sata dnevno, 7 dana u tjednu. S kvalitetnom kavom, svakodnevnim proizvodima i brzom uslugom, uvijek smo spremni dočekati vas – kad god vam zatreba stanka.",
      stats: [
        { value: "24/7", label: "Uvijek otvoreno" },
        { value: 3, label: "Lokacije" },
        { value: 365, label: "Dana u godini" },
      ],
      cta: "Otkrij ponudu",
      imageAlt: "Cappuccino s latte artom u Stop & Go",
      imageAlt2: "Priprema espressa u Stop & Go",
      badge: "OTVORENO 24/7 • KAVA • SNACK • ",
    },
    services: {
      eyebrow: "Što nudimo",
      heading: { start: "Tri stvari,", accent: "jedna stanica." },
      subtitle: "Sve što vam treba za put, pod jednim krovom.",
      items: [
        {
          text: "Talijanska kava pripremljena s pažnjom, od brzog espressa do cappuccina za uživanje na terasi.",
          points: ["Espresso & cappuccino", "Take away", "Vanjska terasa"],
        },
        {
          text: "Svakodnevni proizvodi i hladna pića, spremni za svako putovanje — danju ili noću.",
          points: ["Hladna pića", "Svakodnevni proizvodi", "Sve za put"],
        },
        {
          text: "Svježi samoposlužni snackovi za brzu pauzu bez gubljenja vremena.",
          points: ["Samoposluživanje", "Svježi snackovi", "Slatkiši"],
        },
      ],
    },
    galeria: {
      heading: { start: "Bacite", accent: "pogled." },
      subtitle: "Naši prostori i proizvodi, baš kakvi jesu — posebno noću.",
      alts: [
        "Pročelje Stop & Go noću s neonskim natpisom",
        "Espresso se toči u šalicu",
        "Cappuccino s latte artom",
        "Terasa Stop & Go s vanjskim sjedenjem",
      ],
      close: "Zatvori",
      prev: "Prethodna fotografija",
      next: "Sljedeća fotografija",
    },
    locations: {
      heading: { start: "Uvijek", accent: "blizu vas." },
      subtitle: "Odaberite lokaciju da je vidite na karti ili odmah zatražite upute.",
      open: "Otvoreno 24/7",
      showOnMap: "Prikaži na karti",
      directions: "Upute za put",
      items: [
        {
          title: "Lokacija 1",
          text: "Prva Stop & Go lokacija, otvorena 24 sata, s vanjskim prostorom i besplatnim parkingom za brze pauze.",
        },
        {
          title: "Lokacija 2",
          text: "Druga stanica na državnoj cesti, idealna za putnike koji žele kavu i grickalice bez velikog skretanja s puta.",
        },
        {
          title: "Lokacija 3",
          text: "Treća lokacija, s potpunim mini-marketom i snack ponudom, spremna posluživati vas u svako doba dana.",
        },
      ],
    },
    reviews: {
      heading: { start: "Riječ naših", accent: "gostiju." },
      subtitle: "Što kažu oni koji svrate kod nas.",
      items: [
        {
          text: "Stvarno dobra kava i brza usluga. Preporučujem svima koji putuju noću.",
          role: "Noćni putnik",
        },
        {
          text: "Čisto okruženje, mini-market sa svime potrebnim. Moja omiljena stanka na putu.",
          role: "Stalni gost",
        },
        {
          text: "Vrlo ljubazno osoblje i uvijek otvoreno, čak i kasno navečer. Najbolja kava u okolici!",
          role: "Lokalni stanovnik",
        },
      ],
    },
    footer: {
      heading: { start: "Vaša sljedeća stanica", accent: "čeka." },
      text: "Svjetla su uvijek upaljena. Svratite kad god želite.",
      instagramBtn: "Pratite nas na Instagramu",
      directionsBtn: "Pronađi stanicu",
      navTitle: "Navigacija",
      hoursTitle: "Radno vrijeme",
      hoursDays: "Ponedjeljak – Nedjelja",
      hoursTime: "00:00 – 24:00",
      followTitle: "Pratite nas",
      tagline: "Caffe Shop · Minimarket · Snack Food",
      copyright: "Sva prava pridržana.",
      backToTop: "Natrag na vrh",
    },
  },
};
