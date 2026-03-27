const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

if (menuBtn && mainNav) {
  menuBtn.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const sectionTargets = Array.from(navLinks)
  .map((link) => link.getAttribute("href"))
  .filter(Boolean)
  .map((hash) => document.querySelector(hash))
  .filter(Boolean);

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || !entry.target.id) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`,
        );
      });
    });
  },
  {
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0,
  },
);

sectionTargets.forEach((section) => activeObserver.observe(section));

function initHeroParallax() {
  const layers = document.querySelectorAll(".hero-layer");
  const hero = document.querySelector(".hero");
  if (!layers.length || !hero) {
    return;
  }

  window.addEventListener(
    "scroll",
    () => {
      const rect = hero.getBoundingClientRect();
      const center = window.innerHeight * 0.55;
      const offset = rect.top - center;

      layers.forEach((layer) => {
        if (!(layer instanceof HTMLElement)) {
          return;
        }

        const speed = Number(layer.dataset.speed || 0.3);
        layer.style.transform = `translate3d(0, ${offset * -speed}px, 0)`;
      });
    },
    { passive: true },
  );
}

function initStoryProgress() {
  const steps = Array.from(document.querySelectorAll(".story-step"));
  const dotsRoot = document.getElementById("storyDots");
  const fill = document.getElementById("storyProgressFill");

  if (!steps.length || !dotsRoot || !fill) {
    return;
  }

  dotsRoot.innerHTML = steps
    .map((_, index) => {
      return `<span class="story-dot${index === 0 ? " is-active" : ""}" data-dot-index="${index}"></span>`;
    })
    .join("");

  function setProgress(activeIndex) {
    const dots = dotsRoot.querySelectorAll(".story-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index <= activeIndex);
    });

    const percent = ((activeIndex + 1) / steps.length) * 100;
    fill.style.width = `${Math.max(8, percent)}%`;
  }

  setProgress(0);

  return setProgress;
}

function initGsapMotion() {
  const setStoryProgress = initStoryProgress();

  if (!(window.gsap && window.ScrollTrigger)) {
    return;
  }

  window.gsap.registerPlugin(window.ScrollTrigger);

  const heroTl = window.gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTl
    .from(".hero-kicker", { y: 24, opacity: 0, duration: 0.5 })
    .from(
      ".hero-line",
      { y: 34, opacity: 0, duration: 0.62, stagger: 0.12 },
      "-=0.2",
    )
    .from(".hero-lead", { y: 20, opacity: 0, duration: 0.55 }, "-=0.28")
    .from(
      ".hero-actions .btn",
      { y: 18, opacity: 0, duration: 0.45, stagger: 0.08 },
      "-=0.22",
    )
    .from(
      ".hero-stats article",
      { y: 18, opacity: 0, duration: 0.45, stagger: 0.08 },
      "-=0.2",
    )
    .from(".hero-visual", { x: 30, opacity: 0, duration: 0.7 }, "-=0.6");

  window.gsap.utils.toArray(".gsap-reveal").forEach((node) => {
    window.gsap.to(node, {
      y: 0,
      opacity: 1,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: node,
        start: "top 83%",
        once: true,
      },
    });
  });

  const steps = window.gsap.utils.toArray(".story-step");
  const storyImage = document.getElementById("storyImage");
  const storyLabel = document.getElementById("storyLabel");
  const storyTitle = document.getElementById("storyTitle");

  steps.forEach((step, index) => {
    window.gsap.from(step, {
      x: 28,
      opacity: 0,
      duration: 0.55,
      scrollTrigger: {
        trigger: step,
        start: "top 78%",
      },
    });

    window.ScrollTrigger.create({
      trigger: step,
      start: "top center",
      end: "bottom center",
      onEnter: () => activateStep(step, index),
      onEnterBack: () => activateStep(step, index),
    });
  });

  window.ScrollTrigger.create({
    trigger: "#storyLayout",
    start: "top center",
    end: "bottom center",
    onUpdate: (self) => {
      const fill = document.getElementById("storyProgressFill");
      if (!fill) {
        return;
      }
      fill.style.width = `${Math.max(8, Math.round(self.progress * 100))}%`;
    },
  });

  function activateStep(step, index) {
    steps.forEach((item) => item.classList.remove("is-active"));
    step.classList.add("is-active");

    const image = step.dataset.image;
    const label = step.dataset.label;
    const title = step.dataset.title;

    if (storyImage instanceof HTMLImageElement && image) {
      storyImage.src = image;
    }
    if (storyLabel && label) {
      storyLabel.textContent = label;
    }
    if (storyTitle && title) {
      storyTitle.textContent = title;
    }
    if (typeof setStoryProgress === "function") {
      setStoryProgress(index);
    }
  }
}

initHeroParallax();
initGsapMotion();

const contactForm = document.querySelector(".contact-form");
let currentLang = "hu";

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const submit = contactForm.querySelector('button[type="submit"]');
    if (!submit) {
      return;
    }

    const original = submit.textContent;
    submit.disabled = true;
    submit.textContent =
      currentLang === "hu"
        ? "Köszönöm, 1 munkanapon belül jelentkezem."
        : currentLang === "de"
          ? "Danke, ich melde mich innerhalb eines Werktages."
          : "Thanks, I will reply within one business day.";

    window.setTimeout(() => {
      contactForm.reset();
      submit.disabled = false;
      submit.textContent = original;
    }, 2200);
  });
}

const i18n = {
  hu: {
    nav_templates: "Demók",
    nav_story: "Folyamat",
    nav_gallery: "Galéria",
    nav_proof: "Visszajelzés",
    nav_contact: "Kapcsolat",
    hero_kicker: "SZÉPSÉGIPARI PRÉMIUM RENDSZER",
    hero_line_1: "Erős első benyomás.",
    hero_line_2: "Tudatos ügyfélszerzés.",
    hero_line_3: "Valódi márkaérzet.",
    hero_lead:
      "Nem csak egy szép felületet kapsz. Olyan oldalt építünk, amit a vendég könnyen ért, és ezért nagyobb eséllyel foglal.",
    hero_cta_primary: "Demók megnyitása",
    hero_cta_secondary: "Kérek koncepciót",
    stat_1: "eltérő üzleti logika",
    stat_2: "átadás tesztelve mobilra",
    stat_3: "többnyelvű alap",
    founder_badge: "Személyes márka. Kimondottan szépségiparra.",
    templates_kicker: "KIEMELT DEMÓK",
    templates_title: "Nem csak dizájnban, működésben is eltérő rendszerek",
    template_1:
      "Gyors döntés, időablak-foglaló, és azonnali CTA a szabad helyekre.",
    template_2:
      "Stílus-konzultációs logika vendégprofil útvonallal és ajánlott csomagokkal.",
    template_3: "Előszűrő kérdőív pontozással, csak megfelelő lead jut tovább.",
    story_kicker: "STICKY STORYTELLING",
    story_title: "Görgetés közben épülő értékajánlat, valódi haladásjelzővel",
    gallery_kicker: "GALÉRIA",
    gallery_title: "A képi világ is a márkát adja el, nem csak a szöveg",
    proof_kicker: "ÉRTÉKELÉSEK",
    proof_title: "Emberi nyelven, valós problémákról és eredményekről",
    contact_kicker: "KAPCSOLAT",
    contact_title: "Kérj személyre szabott koncepciót a saját niche-edre",
    contact_body:
      "Írj pár sort a szalonodról, és kapsz egy konkrét javaslatot, hogyan nézzen ki nálad az ügyfélszerző útvonal.",
    form_btn: "Koncepciót kérek",
  },
  en: {
    nav_templates: "Demos",
    nav_story: "Process",
    nav_gallery: "Gallery",
    nav_proof: "Reviews",
    nav_contact: "Contact",
    hero_kicker: "PREMIUM BEAUTY SYSTEM",
    hero_line_1: "Strong first impression.",
    hero_line_2: "Intentional client flow.",
    hero_line_3: "Real brand perception.",
    hero_lead:
      "You get more than a pretty site. We build a flow your visitors understand, so they book faster.",
    hero_cta_primary: "Open demos",
    hero_cta_secondary: "Request concept",
    stat_1: "different business logics",
    stat_2: "delivery tested on mobile",
    stat_3: "multi-language base",
    founder_badge: "Personal brand. Built for beauty niche.",
    templates_kicker: "FEATURED DEMOS",
    templates_title: "Different in design and business structure",
    template_1: "Fast booking with time-window slots and direct CTA.",
    template_2: "Style-consult flow with profile path and package suggestion.",
    template_3: "Scored pre-qualification form for premium leads.",
    story_kicker: "STICKY STORYTELLING",
    story_title: "Value proposition builds during scroll with real progress",
    gallery_kicker: "GALLERY",
    gallery_title: "Visual identity sells together with your copy",
    proof_kicker: "REVIEWS",
    proof_title: "Human language about real pain points and results",
    contact_kicker: "CONTACT",
    contact_title: "Request a tailored concept for your niche",
    contact_body:
      "Send a few lines about your salon and you will get a concrete lead-flow direction.",
    form_btn: "Request concept",
  },
  de: {
    nav_templates: "Demos",
    nav_story: "Ablauf",
    nav_gallery: "Galerie",
    nav_proof: "Bewertungen",
    nav_contact: "Kontakt",
    hero_kicker: "PREMIUM-SYSTEM FUR BEAUTY",
    hero_line_1: "Starker erster Eindruck.",
    hero_line_2: "Klarer Kundenfluss.",
    hero_line_3: "Echte Markenwirkung.",
    hero_lead:
      "Mehr als eine schone Website: wir bauen einen klaren Ablauf, den Besucher verstehen und schneller buchen.",
    hero_cta_primary: "Demos offnen",
    hero_cta_secondary: "Konzept anfragen",
    stat_1: "unterschiedliche Logiken",
    stat_2: "mobil getestet",
    stat_3: "mehrsprachige Basis",
    founder_badge: "Personliche Marke. Fur Beauty-Betriebe.",
    templates_kicker: "TOP-DEMOS",
    templates_title: "Unterschiedlich in Design und Logik",
    template_1: "Schnelle Buchung mit Zeitfenster und klarer CTA.",
    template_2: "Style-Beratung mit Profilpfad und Paketen.",
    template_3: "Punktbasierte Vorqualifizierung fur Premium-Leads.",
    story_kicker: "STICKY STORY",
    story_title: "Mehrwert entsteht beim Scrollen mit echtem Fortschritt",
    gallery_kicker: "GALERIE",
    gallery_title: "Bildsprache verkauft gemeinsam mit Text",
    proof_kicker: "BEWERTUNGEN",
    proof_title: "Menschliche Sprache uber echte Ergebnisse",
    contact_kicker: "KONTAKT",
    contact_title: "Individuelles Konzept fur deine Nische",
    contact_body:
      "Schick ein paar Infos zu deinem Salon und du bekommst einen konkreten Vorschlag fur den Kundenfluss.",
    form_btn: "Konzept anfragen",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  const dict = i18n[lang];
  if (!dict) {
    return;
  }

  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (!key || !dict[key]) {
      return;
    }

    element.textContent = dict[key];
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    if (lang) {
      setLanguage(lang);
    }
  });
});
