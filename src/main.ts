import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Lang = "hu" | "en";
type Niche = "barber" | "salon" | "beauty";

type ProcessStep = {
  stage: string;
  title: string;
  body: string;
  bullets: string[];
};

type Challenge = {
  id: string;
  label: string;
  title: string;
  body: string;
};

type Copy = {
  brandSubline: string;
  nav: { demos: string; outcomes: string; system: string; faq: string; contact: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    points: Array<{ value: string; label: string }>;
    metrics: Array<{ value: string; label: string }>;
  };
  offer: {
    eyebrow: string;
    title: string;
    lead: string;
    stack: Array<{ title: string; body: string }>;
    proof: Array<{ value: string; label: string }>;
  };
  demos: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryAction: string;
    secondaryAction: string;
    cards: Array<{ tag: string; title: string; description: string; bullets: string[]; href: string }>;
  };
  outcomes: {
    eyebrow: string;
    title: string;
    lead: string;
    cards: Array<{ kicker: string; title: string; description: string }>;
  };
  calculator: {
    eyebrow: string;
    title: string;
    lead: string;
    labels: { visits: string; conversion: string; ticket: string; uplift: string };
    resultEyebrow: string;
    extraBookingsLabel: string;
    extraRevenueLabel: string;
    note: string;
  };
  system: {
    eyebrow: string;
    title: string;
    lead: string;
    panelEyebrow: string;
    steps: ProcessStep[];
  };
  brief: {
    eyebrow: string;
    title: string;
    lead: string;
    panelEyebrow: string;
    panelTitle: string;
    panelLead: string;
    recommendationLabel: string;
    challenges: Challenge[];
  };
  faq: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Array<{ question: string; answer: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    note: string;
    labels: { name: string; business: string; niche: string; timing: string; message: string };
    nicheOptions: Record<Niche, string>;
    timingOptions: string[];
    submit: string;
    copy: string;
    previewEyebrow: string;
    previewTitle: string;
    floatingCta: string;
    footer: string;
    mailSubject: string;
    mailIntro: string;
    copySuccess: string;
  };
};

const LANG_STORAGE_KEY = "hajzerstudio-lang";
const BRIEF_STORAGE_KEY = "hajzerstudio-brief";

const copy: Record<Lang, Copy> = {
  hu: {
    brandSubline: "Beauty niche web rendszerek",
    nav: { demos: "Demók", outcomes: "Eredmény", system: "Rendszer", faq: "GYIK", contact: "Kapcsolat" },
    hero: {
      eyebrow: "Prémium weboldalak beauty vállalkozásoknak",
      title: "Ha a szalonod prémium élőben, legyen az online is erős.",
      lead: "Kifejezetten beauty, szalon és barber niche-ben építek konverzióra tervezett weboldalakat, amelyek több bizalmat és több megkeresést hoznak.",
      primaryCta: "Nézd meg a demó rendszereket",
      secondaryCta: "Kérek ingyenes koncepciót",
      points: [
        { value: "Niche", label: "beauty, barber és prémium szalon fókusz" },
        { value: "Mobile", label: "minden első benyomás mobilon is erős" },
        { value: "Sales", label: "hideg megkeresés után is jobban zár" },
      ],
      metrics: [
        { value: "14 nap", label: "gyors MVP induláshoz" },
        { value: "3 irány", label: "külön üzleti logikájú demó funnel" },
        { value: "100%", label: "egyedileg írt portfólió rendszer" },
      ],
    },
    offer: {
      eyebrow: "Mit kapsz valójában",
      title: "Nem egy sablont. Egy online értékesítési rendszert.",
      lead: "Az oldal célja, hogy cold calling után azonnal látszódjon: érted a szakmát, és nem sablonban gondolkodsz.",
      stack: [
        { title: "Pozicionált hero és ajánlat", body: "Az első képernyő pár másodperc alatt világossá teszi, kinek szól a szolgáltatás és miért éri meg jelentkezni." },
        { title: "Niche-specifikus funnel logika", body: "Más üzleti logikával dolgozik egy barber, egy női szalon és egy prémium beauty stúdió. Az oldal ezt nem mossa össze." },
        { title: "Lead brief flow backend nélkül", body: "A látogató strukturált briefet küld, amit azonnal lehet hívásra, ajánlatra vagy follow-upra használni." },
      ],
      proof: [
        { value: "HU / EN", label: "nyelvi váltó valódi tartalommal" },
        { value: "Local GSAP", label: "CDN nélküli stabil animációs alap" },
      ],
    },
    demos: {
      eyebrow: "Három különböző demó rendszer",
      title: "Nem egyetlen design irányt mutatok. Hanem 3 külön üzleti modellt.",
      lead: "Amikor fodrászt vagy szalont hívsz, sokkal erősebb, ha azonnal tudsz mutatni olyan oldalt, ami a saját helyzetére hasonlít.",
      primaryAction: "Demó megnyitása",
      secondaryAction: "Kapcsolat",
      cards: [
        { tag: "BARBER FUNNEL", title: "Barber shop gyorsfoglalási flow", description: "Gyors döntésre, idősáv-foglalásra és stabil napi kapacitásra optimalizálva.", bullets: ["Azonnali CTA", "Slot választás", "Ár összegzés"], href: "./templates/barber-shop-demo.html" },
        { tag: "STYLE CONSULT", title: "Női szalon konzultációs funnel", description: "Amikor az első lépés nem az árlista, hanem a stílusprofil és a személyre szabott csomagajánlás.", bullets: ["Profil választó", "Csomaglogika", "Prémium flow"], href: "./templates/noi-fodraszat-demo.html" },
        { tag: "CONCIERGE FLOW", title: "Prémium stúdió szelekciós rendszer", description: "High-ticket szolgáltatásokhoz, ahol nem a legtöbb lead kell, hanem a megfelelő lead.", bullets: ["Pontozott előszűrő", "Concierge logika", "Minőségi lead"], href: "./templates/premium-szalon-demo.html" },
      ],
    },
    outcomes: {
      eyebrow: "Mit javít egy erős oldal",
      title: "A legtöbb szalon nem azért vesz el érdeklődőt, mert rossz a szolgáltatás. Hanem mert az online kép nem zár.",
      lead: "A portfólió oldalnak azt kell megmutatnia, hogy nem csak kódolni tudsz, hanem érted a döntési utat is.",
      cards: [
        { kicker: "Első benyomás", title: "Prémium offline, gyenge online", description: "Gyönyörű szolgáltatás, gyenge első kattintás. Itt esik ki a bizalom." },
        { kicker: "Ajánlat tisztaság", title: "Túl sok információ, túl kevés irány", description: "Ha nincs egyértelmű üzenet, a látogató elbizonytalanodik és nem jelentkezik." },
        { kicker: "Konverzió", title: "Megkeresés helyett nézelődés", description: "A jó oldal vezeti a látogatót, és kijelöli a következő lépést." },
      ],
    },
    calculator: {
      eyebrow: "Gyors revenue upside kalkuláció",
      title: "Ennyit jelenthet, ha az oldal kicsit jobban zár.",
      lead: "Már egy mérsékelt konverziós javulás is számottevő havi pluszt adhat egy beauty vállalkozásnak.",
      labels: { visits: "Becsült havi látogató", conversion: "Jelenlegi foglalási arány", ticket: "Átlagos kosárérték", uplift: "Várható javulás az oldallal" },
      resultEyebrow: "Becsült havi plusz",
      extraBookingsLabel: "extra foglalás havonta",
      extraRevenueLabel: "plusz bevétel havonta",
      note: "Ez konzervatív becslés. Jobb positioninggel és gyorsabb kapcsolatfelvétellel a tényleges hatás gyakran erősebb.",
    },
    system: {
      eyebrow: "Hogyan dolgozom",
      title: "Nem random oldalépítés. Letisztult delivery rendszer.",
      lead: "A portfólió azt mutatja, hogy strukturáltan, gyorsan és üzleti logikával dolgozom.",
      panelEyebrow: "Delivery rendszer",
      steps: [
        { stage: "01 / Audit", title: "Gyors niche audit", body: "Először nem dizájnt mutatok, hanem azt, hol veszik el a bizalom és mi lenne a legjobb funnel irány.", bullets: ["Pozicionálás", "Mobil első benyomás", "CTA és kapcsolatfelvételi súrlódás"] },
        { stage: "02 / Koncepció", title: "Irány, wireframe és üzenet", body: "A következő lépés egy tiszta rendszer: milyen hero kell, milyen blokkok zárjanak és hogyan váljon el a szolgáltatási logika.", bullets: ["Funnel döntés", "Hero és bizonyíték", "Mobil prioritás"] },
        { stage: "03 / Építés", title: "Prémium frontend kivitelezés", body: "Gyors, esztétikus és erős szerkezetű oldal készül, nem szerkesztetlen sablon.", bullets: ["Reszponzív frontend", "Célzott animáció", "Valódi CTA-k"] },
        { stage: "04 / Launch", title: "Átadás és továbbfejlesztés", body: "Az oldal erős, mutatható és egyszerűen továbbadható marad a következő hívásokhoz is.", bullets: ["Éles vagy demó link", "Follow-up támogatás", "Valódi visszajelzés alapú iteráció"] },
      ],
    },
    brief: {
      eyebrow: "Instant koncepció builder",
      title: "Jelöld be, hol fáj most a legtöbbet. Megmutatom, milyen oldalirány illik rá.",
      lead: "Ez a rész segít, hogy a prospect gyorsan lássa magát a rendszerben, te pedig jobb briefet kapj.",
      panelEyebrow: "Javasolt irány",
      panelTitle: "A kiválasztott problémák alapján ezt építeném először.",
      panelLead: "Válassz ki néhány valós üzleti problémát, és a rendszer azonnal összerak egy használható irányt.",
      recommendationLabel: "Javaslat",
      challenges: [
        { id: "trust", label: "Gyenge első benyomás", title: "Erősebb prémium hero és social proof nyitás", body: "Itt a hero, a szolgáltatási keret és a fotócentrikus branding adja a legnagyobb javulást." },
        { id: "clarity", label: "Nem értik a csomagokat", title: "Tisztább ajánlatstruktúra és csomaglogika", body: "A szolgáltatásokat külön kell választani, hogy a vendég gyorsabban felismerje, mi való neki." },
        { id: "quality", label: "Rossz leadek jönnek", title: "Előszűrő vagy konzultációs funnel", body: "Nem mindig több kattintás kell, hanem jobb minőségű kapcsolatfelvétel." },
        { id: "mobile", label: "Mobilon gyenge", title: "Mobil-első átstrukturált oldal", body: "A legtöbb beauty forgalom mobilon érkezik. Itt a blokkritmus és a CTA-sűrűség kulcskérdés." },
        { id: "speed", label: "Lassú vagy elavult", title: "Gyorsabb, modernebb frontend", body: "Az oldal érzékelt sebessége és a vizuális minőség egyszerre hat a bizalomra." },
      ],
    },
    faq: {
      eyebrow: "Rövid válaszok",
      title: "A leggyakoribb kérdések, amik egy hívás után fel szoktak jönni.",
      lead: "A portfólió oldalnak a bizonytalanságot is csökkentenie kell. Ezért vannak itt a legfontosabb rövid válaszok.",
      items: [
        { question: "Mennyi idő alatt lehet elindulni?", answer: "Egy egyszerűbb, gyorsan záró MVP irány akár 1-2 hét alatt is összerakható." },
        { question: "Csak design vagy szöveg és struktúra is van benne?", answer: "A hero, a blokkritmus, a CTA-k és a szolgáltatási logika ugyanúgy a munka része." },
        { question: "Ha nincs jelenleg weboldal, az gond?", answer: "Nem gond. Ilyenkor különösen erős lehet egy gyors, niche-specifikus indulóoldal." },
        { question: "Tudsz külön demót mutatni barberre vagy női szalonra?", answer: "Igen. A portfólió direkt úgy készült, hogy azonnal külön útvonalat tudjak mutatni." },
        { question: "Mi történik, ha megváltozik a szolgáltatási ajánlat?", answer: "A rendszer úgy van összerakva, hogy a tartalom és a CTA-k gyorsan módosíthatók legyenek." },
        { question: "Van backend vagy külső rendszer köthető hozzá?", answer: "Igen, de az első cél a meggyőző frontend és a jobb konverzió." },
      ],
    },
    contact: {
      eyebrow: "Kapcsolat és brief",
      title: "Küldd át röviden, mi a helyzet nálatok, és kapsz egy konkrét irányt.",
      lead: "A form nem csak egy hello üzenetet kér. Strukturált email draftot készít, amit egyből tovább lehet küldeni.",
      note: "A küldés jelenleg email draftot nyit meg. Ez portfólió célra gyors, átlátható és backend nélküli megoldás.",
      labels: { name: "Név", business: "Vállalkozás vagy szalon neve", niche: "Niche", timing: "Mikor lenne aktuális", message: "Rövid helyzetkép" },
      nicheOptions: { barber: "Barber shop", salon: "Női vagy prémium szalon", beauty: "Beauty stúdió" },
      timingOptions: ["1-2 héten belül", "Ebben a hónapban", "Még tervezési fázisban"],
      submit: "Email draft megnyitása",
      copy: "Brief másolása",
      previewEyebrow: "Előnézet",
      previewTitle: "Ilyen briefet fogsz kapni vagy küldeni",
      floatingCta: "Kérek koncepciót",
      footer: "© 2026 HajzerStudio. Prémium beauty niche weboldalak, gyorsan mutatható demó rendszerekkel.",
      mailSubject: "Weboldal koncepció kérés",
      mailIntro: "Szia, egy rövid weboldal briefet küldök:",
      copySuccess: "A brief a vágólapra került.",
    },
  },
  en: {
    brandSubline: "Beauty niche web systems",
    nav: { demos: "Demos", outcomes: "Outcomes", system: "System", faq: "FAQ", contact: "Contact" },
    hero: {
      eyebrow: "Premium websites for beauty businesses",
      title: "If your salon feels premium offline, it should feel strong online too.",
      lead: "I build conversion-focused websites for beauty studios, salons and barber shops that create more trust and more enquiries.",
      primaryCta: "See the demo systems",
      secondaryCta: "Request a free concept",
      points: [
        { value: "Niche", label: "beauty, barber and premium salon focus" },
        { value: "Mobile", label: "strong first impression on mobile too" },
        { value: "Sales", label: "closes better after cold outreach" },
      ],
      metrics: [
        { value: "14 days", label: "for a fast MVP launch" },
        { value: "3 paths", label: "different business model demos" },
        { value: "100%", label: "custom-coded portfolio system" },
      ],
    },
    offer: {
      eyebrow: "What you really get",
      title: "Not a template. An online sales system.",
      lead: "The goal is simple: after a cold call, the site should show that you understand the niche and work with a clear system.",
      stack: [
        { title: "Positioned hero and offer", body: "The first screen makes it obvious who the service is for and why it is worth reaching out." },
        { title: "Niche-specific funnel logic", body: "A barber, a women's salon and a premium beauty studio do not sell in the same way. The site respects that difference." },
        { title: "Lead brief flow without backend", body: "The visitor sends a structured brief you can immediately use for a call, proposal or follow-up." },
      ],
      proof: [
        { value: "HU / EN", label: "real multilingual content" },
        { value: "Local GSAP", label: "stable animation stack without CDN risk" },
      ],
    },
    demos: {
      eyebrow: "Three different demo systems",
      title: "I do not show one design direction. I show three business models.",
      lead: "When you reach out to salons or beauty brands, it is much stronger if you can instantly show a demo that feels close to their own situation.",
      primaryAction: "Open demo",
      secondaryAction: "Contact",
      cards: [
        { tag: "BARBER FUNNEL", title: "Barber shop fast-booking flow", description: "Built for speed, slot selection and stable daily booking volume.", bullets: ["Immediate CTA", "Slot picker", "Price summary"], href: "./templates/barber-shop-demo.html" },
        { tag: "STYLE CONSULT", title: "Women's salon consultation funnel", description: "For cases where the first step is not a price list but style profile and tailored package recommendation.", bullets: ["Profile selector", "Package logic", "Premium flow"], href: "./templates/noi-fodraszat-demo.html" },
        { tag: "CONCIERGE FLOW", title: "Premium studio qualification system", description: "For high-ticket services where the goal is not more leads, but better leads.", bullets: ["Scored pre-qualification", "Concierge logic", "Higher quality enquiries"], href: "./templates/premium-szalon-demo.html" },
      ],
    },
    outcomes: {
      eyebrow: "What a stronger site fixes",
      title: "Most salons do not lose leads because the service is weak. They lose them because the online presence does not close.",
      lead: "This portfolio is built to prove that the work is not only visual. It understands how trust, clarity and action fit together.",
      cards: [
        { kicker: "First impression", title: "Premium offline, weak online", description: "A beautiful service with a weak first click creates a trust gap immediately." },
        { kicker: "Offer clarity", title: "Too much information, not enough direction", description: "If the next step is unclear, the visitor hesitates instead of enquiring." },
        { kicker: "Conversion", title: "Browsing instead of enquiring", description: "A strong site guides the visitor and frames the next step clearly." },
      ],
    },
    calculator: {
      eyebrow: "Quick revenue upside calculator",
      title: "This is what a slightly stronger site can mean.",
      lead: "Even a moderate conversion improvement can create meaningful monthly upside for a beauty business.",
      labels: { visits: "Estimated monthly visitors", conversion: "Current booking rate", ticket: "Average ticket value", uplift: "Expected uplift with a stronger site" },
      resultEyebrow: "Estimated monthly upside",
      extraBookingsLabel: "extra bookings per month",
      extraRevenueLabel: "extra revenue per month",
      note: "This is a conservative estimate. Better positioning and faster contact often make the real impact stronger.",
    },
    system: {
      eyebrow: "How I work",
      title: "Not random website building. A clean delivery system.",
      lead: "The portfolio itself should show that the work is structured, fast and commercially aware.",
      panelEyebrow: "Delivery system",
      steps: [
        { stage: "01 / Audit", title: "Fast niche audit", body: "The first step is understanding where trust is lost and which funnel direction fits best.", bullets: ["Positioning", "Mobile first impression", "CTA and contact friction"] },
        { stage: "02 / Concept", title: "Direction, wireframe and message", body: "Next comes a clear system for hero messaging, proof blocks and service separation.", bullets: ["Funnel decision", "Hero and proof", "Mobile-first priority"] },
        { stage: "03 / Build", title: "Premium frontend execution", body: "The outcome is fast, polished and intentionally structured, not a generic template.", bullets: ["Responsive frontend", "Focused motion", "Real CTA structure"] },
        { stage: "04 / Launch", title: "Launch and iteration", body: "The site stays strong, easy to show and easy to improve after real conversations.", bullets: ["Live or demo link", "Follow-up support", "Feedback-based iteration"] },
      ],
    },
    brief: {
      eyebrow: "Instant concept builder",
      title: "Pick the biggest pain point and I will show the page direction that fits it.",
      lead: "This helps a prospect recognise their own problem fast, while giving you a stronger brief.",
      panelEyebrow: "Suggested direction",
      panelTitle: "Based on the selected issues, this is what I would build first.",
      panelLead: "Select a few real business problems and the system will instantly assemble a useful direction.",
      recommendationLabel: "Recommendation",
      challenges: [
        { id: "trust", label: "Weak first impression", title: "Stronger premium hero and social proof opening", body: "Hero framing and image-led branding usually create the biggest upgrade here." },
        { id: "clarity", label: "Packages are confusing", title: "Cleaner offer structure and package logic", body: "Services should be separated so visitors instantly understand what fits them." },
        { id: "quality", label: "Wrong leads are coming in", title: "Pre-qualification or consultation funnel", body: "Sometimes the answer is not more clicks but higher quality contact." },
        { id: "mobile", label: "Weak on mobile", title: "Mobile-first page structure", body: "Most beauty traffic arrives on mobile, so pacing and CTA density matter a lot." },
        { id: "speed", label: "Slow or outdated", title: "Faster, more modern frontend", body: "Perceived speed and visual quality both influence trust." },
      ],
    },
    faq: {
      eyebrow: "Short answers",
      title: "The most common questions that come up after a call.",
      lead: "A portfolio should also reduce uncertainty. That is why the key answers are stated clearly here.",
      items: [
        { question: "How fast can a project start?", answer: "A lean MVP direction can be ready in 1-2 weeks." },
        { question: "Is it only design or also copy and structure?", answer: "Hero messaging, block rhythm, CTA placement and offer logic are part of the work." },
        { question: "What if there is no current website yet?", answer: "That is often the best time to start. A niche-specific launch page can become a strong first asset quickly." },
        { question: "Can you show separate demos for barber or women's salons?", answer: "Yes. The portfolio is designed to show different routes for different beauty business models." },
        { question: "What happens if the offer changes later?", answer: "The structure is built so content and CTA logic can be updated quickly." },
        { question: "Can this connect to backend tools later?", answer: "Yes, but the first goal is a convincing frontend and better conversion." },
      ],
    },
    contact: {
      eyebrow: "Contact and brief",
      title: "Send a short outline of your situation and get a concrete direction back.",
      lead: "The form creates more than a generic hello message. It builds a structured email draft you can send immediately.",
      note: "Submission currently opens an email draft. For a portfolio this keeps the experience fast and transparent.",
      labels: { name: "Name", business: "Business or salon name", niche: "Niche", timing: "Timing", message: "Short context" },
      nicheOptions: { barber: "Barber shop", salon: "Women's or premium salon", beauty: "Beauty studio" },
      timingOptions: ["Within 1-2 weeks", "This month", "Still planning"],
      submit: "Open email draft",
      copy: "Copy brief",
      previewEyebrow: "Preview",
      previewTitle: "This is the kind of brief you will receive or send",
      floatingCta: "Request a concept",
      footer: "© 2026 HajzerStudio. Premium beauty niche websites with sales-ready demos.",
      mailSubject: "Website concept request",
      mailIntro: "Hi, I am sending a short website brief:",
      copySuccess: "The brief was copied to the clipboard.",
    },
  },
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const menuBtn = document.getElementById("menuBtn") as HTMLButtonElement | null;
const mainNav = document.getElementById("mainNav");
const briefPreview = document.getElementById("briefPreview");
const contactForm = document.getElementById("contactForm") as HTMLFormElement | null;
const fieldName = document.getElementById("fieldName") as HTMLInputElement | null;
const fieldBusiness = document.getElementById("fieldBusiness") as HTMLInputElement | null;
const fieldNiche = document.getElementById("fieldNiche") as HTMLSelectElement | null;
const fieldTiming = document.getElementById("fieldTiming") as HTMLSelectElement | null;
const fieldMessage = document.getElementById("fieldMessage") as HTMLTextAreaElement | null;
const copyBriefBtn = document.getElementById("copyBrief") as HTMLButtonElement | null;
const langButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".lang-btn"));
const challengeList = document.getElementById("challengeList");
const processSteps = document.getElementById("processSteps");

const calculatorInputs = {
  visits: document.getElementById("inputVisits") as HTMLInputElement | null,
  conversion: document.getElementById("inputConversion") as HTMLInputElement | null,
  ticket: document.getElementById("inputTicket") as HTMLInputElement | null,
  uplift: document.getElementById("inputUplift") as HTMLInputElement | null,
};

const state = {
  lang: getSavedLang(),
  activeStep: 0,
  activeChallenges: new Set<string>(["trust", "clarity"]),
};

function byId(id: string): HTMLElement {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Missing element: ${id}`);
  }
  return element;
}

function getSavedLang(): Lang {
  const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
  return saved === "en" ? "en" : "hu";
}

function formatNumber(value: number) {
  return new Intl.NumberFormat(state.lang === "hu" ? "hu-HU" : "en-US").format(value);
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat(state.lang === "hu" ? "hu-HU" : "en-US", {
    style: "currency",
    currency: state.lang === "hu" ? "HUF" : "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function createCard(title: string, body: string, className: string) {
  const article = document.createElement("article");
  article.className = className;
  article.innerHTML = `<strong>${title}</strong><p>${body}</p>`;
  return article;
}

function renderHero(langCopy: Copy) {
  byId("brandSubline").textContent = langCopy.brandSubline;
  byId("navDemos").textContent = langCopy.nav.demos;
  byId("navOutcomes").textContent = langCopy.nav.outcomes;
  byId("navSystem").textContent = langCopy.nav.system;
  byId("navFaq").textContent = langCopy.nav.faq;
  byId("navContact").textContent = langCopy.nav.contact;

  byId("heroEyebrow").textContent = langCopy.hero.eyebrow;
  byId("heroTitle").textContent = langCopy.hero.title;
  byId("heroLead").textContent = langCopy.hero.lead;
  byId("heroPrimaryCta").textContent = langCopy.hero.primaryCta;
  byId("heroSecondaryCta").textContent = langCopy.hero.secondaryCta;

  const points = byId("heroPoints");
  points.innerHTML = "";
  langCopy.hero.points.forEach((item) => {
    const article = document.createElement("article");
    article.className = "hero-point";
    article.innerHTML = `<span>${item.value}</span><p>${item.label}</p>`;
    points.appendChild(article);
  });

  const metrics = byId("heroMetrics");
  metrics.innerHTML = "";
  langCopy.hero.metrics.forEach((item) => {
    const article = document.createElement("article");
    article.className = "metric-card";
    article.innerHTML = `<span>${item.value}</span><p>${item.label}</p>`;
    metrics.appendChild(article);
  });

  byId("offerEyebrow").textContent = langCopy.offer.eyebrow;
  byId("offerTitle").textContent = langCopy.offer.title;
  byId("offerLead").textContent = langCopy.offer.lead;

  const offerStack = byId("offerStack");
  offerStack.innerHTML = "";
  langCopy.offer.stack.forEach((item) => {
    const article = document.createElement("article");
    article.className = "offer-item";
    article.innerHTML = `<strong>${item.title}</strong><p>${item.body}</p>`;
    offerStack.appendChild(article);
  });

  byId("proofStatAValue").textContent = langCopy.offer.proof[0].value;
  byId("proofStatALabel").textContent = langCopy.offer.proof[0].label;
  byId("proofStatBValue").textContent = langCopy.offer.proof[1].value;
  byId("proofStatBLabel").textContent = langCopy.offer.proof[1].label;
}

function renderDemos(langCopy: Copy) {
  byId("demosEyebrow").textContent = langCopy.demos.eyebrow;
  byId("demosTitle").textContent = langCopy.demos.title;
  byId("demosLead").textContent = langCopy.demos.lead;

  const grid = byId("demoGrid");
  grid.innerHTML = "";
  langCopy.demos.cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "demo-card reveal";
    article.innerHTML = `
      <span class="card-tag">${card.tag}</span>
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <ul class="card-list">${card.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
      <div class="demo-actions">
        <a class="btn btn-primary" href="${card.href}">${langCopy.demos.primaryAction}</a>
        <a class="btn btn-secondary" href="#contact">${langCopy.demos.secondaryAction}</a>
      </div>
    `;
    grid.appendChild(article);
  });
}

function renderOutcomes(langCopy: Copy) {
  byId("outcomesEyebrow").textContent = langCopy.outcomes.eyebrow;
  byId("outcomesTitle").textContent = langCopy.outcomes.title;
  byId("outcomesLead").textContent = langCopy.outcomes.lead;

  const grid = byId("valueGrid");
  grid.innerHTML = "";
  langCopy.outcomes.cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "value-card reveal";
    article.innerHTML = `<strong>${card.kicker}</strong><h3>${card.title}</h3><p>${card.description}</p>`;
    grid.appendChild(article);
  });
}

function renderCalculator(langCopy: Copy) {
  byId("calculatorEyebrow").textContent = langCopy.calculator.eyebrow;
  byId("calculatorTitle").textContent = langCopy.calculator.title;
  byId("calculatorLead").textContent = langCopy.calculator.lead;
  byId("labelVisits").textContent = langCopy.calculator.labels.visits;
  byId("labelConversion").textContent = langCopy.calculator.labels.conversion;
  byId("labelTicket").textContent = langCopy.calculator.labels.ticket;
  byId("labelUplift").textContent = langCopy.calculator.labels.uplift;
  byId("calculatorResultEyebrow").textContent = langCopy.calculator.resultEyebrow;
  byId("resultExtraBookingsLabel").textContent = langCopy.calculator.extraBookingsLabel;
  byId("resultExtraRevenueLabel").textContent = langCopy.calculator.extraRevenueLabel;
  byId("calculatorNote").textContent = langCopy.calculator.note;
  updateCalculator();
}

function renderSystem(langCopy: Copy) {
  byId("systemEyebrow").textContent = langCopy.system.eyebrow;
  byId("systemTitle").textContent = langCopy.system.title;
  byId("systemLead").textContent = langCopy.system.lead;
  byId("processPanelEyebrow").textContent = langCopy.system.panelEyebrow;

  if (!processSteps) {
    return;
  }

  processSteps.innerHTML = "";
  langCopy.system.steps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `process-step${state.activeStep === index ? " is-active" : ""}`;
    button.innerHTML = `<p>${step.stage}</p><strong>${step.title}</strong><span>${step.body}</span>`;
    button.addEventListener("click", () => {
      state.activeStep = index;
      render(copy[state.lang]);
    });
    processSteps.appendChild(button);
  });

  updateProcessPanel();
}

function renderBrief(langCopy: Copy) {
  byId("briefEyebrow").textContent = langCopy.brief.eyebrow;
  byId("briefTitle").textContent = langCopy.brief.title;
  byId("briefLead").textContent = langCopy.brief.lead;
  byId("briefPanelEyebrow").textContent = langCopy.brief.panelEyebrow;
  byId("briefPanelTitle").textContent = langCopy.brief.panelTitle;
  byId("briefPanelLead").textContent = langCopy.brief.panelLead;

  if (!challengeList) {
    return;
  }

  challengeList.innerHTML = "";
  langCopy.brief.challenges.forEach((challenge) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `btn btn-secondary challenge-chip${
      state.activeChallenges.has(challenge.id) ? " is-active" : ""
    }`;
    button.textContent = challenge.label;
    button.addEventListener("click", () => {
      if (state.activeChallenges.has(challenge.id)) {
        state.activeChallenges.delete(challenge.id);
      } else {
        state.activeChallenges.add(challenge.id);
      }
      renderBrief(copy[state.lang]);
      updateBriefPreview();
    });
    challengeList.appendChild(button);
  });

  updateChallengePanel();
}

function renderFaq(langCopy: Copy) {
  byId("faqEyebrow").textContent = langCopy.faq.eyebrow;
  byId("faqTitle").textContent = langCopy.faq.title;
  byId("faqLead").textContent = langCopy.faq.lead;

  const grid = byId("faqGrid");
  grid.innerHTML = "";
  langCopy.faq.items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "faq-card reveal";
    article.innerHTML = `<h3>${item.question}</h3><p>${item.answer}</p>`;
    grid.appendChild(article);
  });
}

function renderContact(langCopy: Copy) {
  byId("contactEyebrow").textContent = langCopy.contact.eyebrow;
  byId("contactTitle").textContent = langCopy.contact.title;
  byId("contactLead").textContent = langCopy.contact.lead;
  byId("contactNote").textContent = langCopy.contact.note;
  byId("labelName").textContent = langCopy.contact.labels.name;
  byId("labelBusiness").textContent = langCopy.contact.labels.business;
  byId("labelNiche").textContent = langCopy.contact.labels.niche;
  byId("labelTiming").textContent = langCopy.contact.labels.timing;
  byId("labelMessage").textContent = langCopy.contact.labels.message;
  byId("submitBrief").textContent = langCopy.contact.submit;
  byId("copyBrief").textContent = langCopy.contact.copy;
  byId("previewEyebrow").textContent = langCopy.contact.previewEyebrow;
  byId("previewTitle").textContent = langCopy.contact.previewTitle;
  byId("floatingCta").textContent = langCopy.contact.floatingCta;
  byId("footerCopy").textContent = langCopy.contact.footer;

  if (fieldNiche) {
    fieldNiche.innerHTML = `
      <option value="barber">${langCopy.contact.nicheOptions.barber}</option>
      <option value="salon">${langCopy.contact.nicheOptions.salon}</option>
      <option value="beauty">${langCopy.contact.nicheOptions.beauty}</option>
    `;
  }

  if (fieldTiming) {
    fieldTiming.innerHTML = langCopy.contact.timingOptions
      .map((item, index) => `<option value="${index + 1}">${item}</option>`)
      .join("");
  }

  restoreDraft();
  updateBriefPreview();
}

function render(langCopy: Copy) {
  document.documentElement.lang = state.lang === "hu" ? "hu" : "en";
  document.title =
    state.lang === "hu"
      ? "HajzerStudio | Prémium beauty weboldalak"
      : "HajzerStudio | Premium beauty websites";

  renderHero(langCopy);
  renderDemos(langCopy);
  renderOutcomes(langCopy);
  renderCalculator(langCopy);
  renderSystem(langCopy);
  renderBrief(langCopy);
  renderFaq(langCopy);
  renderContact(langCopy);
  syncLanguageButtons();
  initRevealFallback();
}

function updateCalculator() {
  const visits = Number(calculatorInputs.visits?.value || 0);
  const conversion = Number(calculatorInputs.conversion?.value || 0);
  const ticket = Number(calculatorInputs.ticket?.value || 0);
  const uplift = Number(calculatorInputs.uplift?.value || 0);

  byId("outputVisits").textContent = formatNumber(visits);
  byId("outputConversion").textContent = `${conversion}%`;
  byId("outputTicket").textContent = formatCurrency(ticket);
  byId("outputUplift").textContent = `${uplift}%`;

  const currentBookings = visits * (conversion / 100);
  const improvedBookings = currentBookings * (1 + uplift / 100);
  const extraBookings = Math.max(0, improvedBookings - currentBookings);
  const extraRevenue = extraBookings * ticket;

  byId("resultExtraBookings").textContent = extraBookings.toFixed(1);
  byId("resultExtraRevenue").textContent = formatCurrency(extraRevenue);
}

function updateProcessPanel() {
  const langCopy = copy[state.lang];
  const step = langCopy.system.steps[state.activeStep] || langCopy.system.steps[0];
  byId("processStage").textContent = step.stage;
  byId("processPanelTitle").textContent = step.title;
  byId("processPanelCopy").textContent = step.body;
  byId("processBullets").innerHTML = step.bullets.map((item) => `<li>${item}</li>`).join("");
}

function updateChallengePanel() {
  const langCopy = copy[state.lang];
  const selected = langCopy.brief.challenges.filter((challenge) =>
    state.activeChallenges.has(challenge.id),
  );
  const tags = byId("briefTags");
  const recommendations = byId("briefRecommendations");
  tags.innerHTML = "";
  recommendations.innerHTML = "";

  if (!selected.length) {
    const placeholder =
      state.lang === "hu"
        ? "Válassz ki legalább egy problémát a jobb oldali ajánláshoz."
        : "Select at least one challenge to see a recommendation.";
    recommendations.appendChild(
      createCard(langCopy.brief.recommendationLabel, placeholder, "brief-recommendation"),
    );
    return;
  }

  selected.forEach((item) => {
    const tag = document.createElement("span");
    tag.className = "challenge-chip is-active";
    tag.textContent = item.label;
    tags.appendChild(tag);
    recommendations.appendChild(
      createCard(`${langCopy.brief.recommendationLabel}: ${item.title}`, item.body, "brief-recommendation"),
    );
  });
}

function buildBriefText() {
  const langCopy = copy[state.lang];
  const nicheValue = fieldNiche?.value as Niche | undefined;
  const timingIndex = Math.max(0, Number(fieldTiming?.value || 1) - 1);
  const timingLabel = langCopy.contact.timingOptions[timingIndex] || "";
  const nicheLabel = nicheValue ? langCopy.contact.nicheOptions[nicheValue] : "";
  const selected = langCopy.brief.challenges
    .filter((challenge) => state.activeChallenges.has(challenge.id))
    .map((challenge) => `- ${challenge.label}`)
    .join("\n");

  return [
    langCopy.contact.mailIntro,
    "",
    `${langCopy.contact.labels.name}: ${fieldName?.value || "-"}`,
    `${langCopy.contact.labels.business}: ${fieldBusiness?.value || "-"}`,
    `${langCopy.contact.labels.niche}: ${nicheLabel || "-"}`,
    `${langCopy.contact.labels.timing}: ${timingLabel || "-"}`,
    `${langCopy.contact.labels.message}: ${fieldMessage?.value || "-"}`,
    "",
    `${langCopy.brief.panelEyebrow}:`,
    selected || "-",
  ].join("\n");
}

function updateBriefPreview() {
  const text = buildBriefText();
  if (briefPreview) {
    briefPreview.textContent = text;
  }

  window.localStorage.setItem(
    BRIEF_STORAGE_KEY,
    JSON.stringify({
      name: fieldName?.value || "",
      business: fieldBusiness?.value || "",
      niche: fieldNiche?.value || "barber",
      timing: fieldTiming?.value || "1",
      message: fieldMessage?.value || "",
      challenges: Array.from(state.activeChallenges),
    }),
  );
}

function restoreDraft() {
  const raw = window.localStorage.getItem(BRIEF_STORAGE_KEY);
  if (!raw) {
    return;
  }

  try {
    const draft = JSON.parse(raw) as {
      name?: string;
      business?: string;
      niche?: Niche;
      timing?: string;
      message?: string;
      challenges?: string[];
    };

    if (fieldName && draft.name) fieldName.value = draft.name;
    if (fieldBusiness && draft.business) fieldBusiness.value = draft.business;
    if (fieldNiche && draft.niche) fieldNiche.value = draft.niche;
    if (fieldTiming && draft.timing) fieldTiming.value = draft.timing;
    if (fieldMessage && draft.message) fieldMessage.value = draft.message;
    if (draft.challenges?.length) {
      state.activeChallenges = new Set(draft.challenges);
    }
  } catch {
    window.localStorage.removeItem(BRIEF_STORAGE_KEY);
  }
}

function syncLanguageButtons() {
  langButtons.forEach((button) => {
    const active = button.dataset.lang === state.lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function initLanguageSwitch() {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const next = button.dataset.lang === "en" ? "en" : "hu";
      if (next === state.lang) {
        return;
      }

      state.lang = next;
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
      render(copy[state.lang]);
      initMotion();
    });
  });
}

function initMenu() {
  if (!menuBtn || !mainNav) {
    return;
  }

  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("is-open", !expanded);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    });
  });
}

function initActiveNav() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".main-nav a"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const id = entry.target.getAttribute("id");
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { threshold: 0.45 },
  );

  sections.forEach((section) => observer.observe(section));
}

function initRevealFallback() {
  const blocks = document.querySelectorAll<HTMLElement>(".reveal");
  blocks.forEach((node) => node.classList.remove("is-visible"));

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  blocks.forEach((block) => io.observe(block));
}

function initMotion() {
  if (prefersReducedMotion) {
    document.querySelectorAll<HTMLElement>(".reveal").forEach((node) => node.classList.add("is-visible"));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf([".site-header", ".hero-copy > *", ".hero-panel", ".reveal"]);

  gsap.set(".hero-copy > *", { clearProps: "all" });
  gsap.set(".hero-panel", { clearProps: "all" });
  document.querySelectorAll<HTMLElement>(".reveal").forEach((node) => node.classList.remove("is-visible"));

  gsap.fromTo(".site-header", { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", clearProps: "transform,opacity" });
  gsap.fromTo(".hero-copy > *", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.78, stagger: 0.08, ease: "power3.out", clearProps: "transform,opacity" });
  gsap.fromTo(".hero-panel", { x: 22, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, delay: 0.14, ease: "power3.out", clearProps: "transform,opacity" });

  gsap.utils.toArray<HTMLElement>(".reveal").forEach((node) => {
    gsap.to(node, {
      y: 0,
      opacity: 1,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: node,
        start: "top 84%",
        once: true,
        onEnter: () => node.classList.add("is-visible"),
      },
    });
  });
}

function initCalculator() {
  Object.values(calculatorInputs).forEach((input) => input?.addEventListener("input", updateCalculator));
}

function initContact() {
  [fieldName, fieldBusiness, fieldNiche, fieldTiming, fieldMessage].forEach((field) => {
    field?.addEventListener("input", updateBriefPreview);
    field?.addEventListener("change", updateBriefPreview);
  });

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(copy[state.lang].contact.mailSubject);
    const body = encodeURIComponent(buildBriefText());
    window.location.href = `mailto:hello@hajzerstudio.hu?subject=${subject}&body=${body}`;
  });

  copyBriefBtn?.addEventListener("click", async () => {
    const original = copyBriefBtn.textContent;
    await navigator.clipboard.writeText(buildBriefText());
    copyBriefBtn.textContent = copy[state.lang].contact.copySuccess;
    window.setTimeout(() => {
      copyBriefBtn.textContent = original || copy[state.lang].contact.copy;
    }, 1500);
  });
}

function initTsMarker() {
  document.querySelector("main")?.setAttribute("data-ts-ready", "ready");
}

render(copy[state.lang]);
initLanguageSwitch();
initMenu();
initActiveNav();
initCalculator();
initContact();
initMotion();
initTsMarker();
