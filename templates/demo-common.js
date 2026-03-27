document.documentElement.classList.add("js");

const profile = document.body.dataset.profile || "barber";

function initRevealFallback() {
  const blocks = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  blocks.forEach((block) => io.observe(block));
}

function initProfileMotion() {
  if (!(window.gsap && window.ScrollTrigger)) {
    initRevealFallback();
    return;
  }

  window.gsap.registerPlugin(window.ScrollTrigger);

  const configMap = {
    barber: { y: 26, ease: "power2.out", duration: 0.5, stagger: 0.08 },
    women: { y: 34, ease: "power1.out", duration: 0.8, stagger: 0.12 },
    premium: { y: 20, ease: "power3.out", duration: 0.95, stagger: 0.14 },
  };

  const config = configMap[profile] || configMap.barber;

  window.gsap.utils.toArray(".reveal").forEach((node) => {
    window.gsap.from(node, {
      y: config.y,
      opacity: 0,
      duration: config.duration,
      ease: config.ease,
      scrollTrigger: {
        trigger: node,
        start: "top 84%",
      },
    });
  });

  if (profile === "barber") {
    window.gsap.from(".slot-item", {
      x: -24,
      opacity: 0,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".slot-list",
        start: "top 78%",
      },
    });
  }

  if (profile === "women") {
    window.gsap.to(".floating-shape", {
      y: -18,
      repeat: -1,
      yoyo: true,
      duration: 2.4,
      ease: "sine.inOut",
    });
  }

  if (profile === "premium") {
    window.gsap.from(".quiz-question", {
      x: 18,
      opacity: 0,
      duration: 0.6,
      stagger: 0.11,
      scrollTrigger: {
        trigger: ".quiz-grid",
        start: "top 80%",
      },
    });
  }
}

function initFormFeedback() {
  const form = document.querySelector(".booking-form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submit = form.querySelector('button[type="submit"]');
    if (!submit) {
      return;
    }

    const original = submit.textContent;
    submit.disabled = true;
    submit.textContent = "Köszönjük, hamarosan visszajelzünk.";

    window.setTimeout(() => {
      form.reset();
      submit.disabled = false;
      submit.textContent = original;
    }, 2200);
  });
}

function initPricingCalc() {
  const options = document.querySelectorAll("[data-price]");
  const target = document.getElementById("calcTotal");

  if (!options.length || !target) {
    return;
  }

  function recalc() {
    let total = 0;
    options.forEach((option) => {
      if (option instanceof HTMLInputElement && option.checked) {
        total += Number(option.dataset.price || 0);
      }
    });

    target.textContent = `${new Intl.NumberFormat("hu-HU").format(total)} Ft`;
  }

  options.forEach((option) => option.addEventListener("change", recalc));
  recalc();
}

function initBeforeAfter() {
  const sliders = document.querySelectorAll("[data-ba-slider]");

  sliders.forEach((slider) => {
    const range = slider.querySelector('input[type="range"]');
    const after = slider.querySelector(".ba-after");
    const handle = slider.querySelector(".ba-handle");

    if (
      !(range instanceof HTMLInputElement) ||
      !(after instanceof HTMLElement) ||
      !(handle instanceof HTMLElement)
    ) {
      return;
    }

    function paint() {
      const value = Number(range.value);
      after.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      handle.style.left = `${value}%`;
    }

    range.addEventListener("input", paint);
    paint();
  });
}

function initWomenProfileSelector() {
  if (profile !== "women") {
    return;
  }

  const buttons = document.querySelectorAll("[data-profile-choice]");
  const title = document.getElementById("profileResultTitle");
  const body = document.getElementById("profileResultBody");

  const map = {
    elegance: {
      title: "Elegáns megjelenés csomag",
      body: "Signature vágás + tónusfrissítés + fényzáró finish, 90 perces ajánlott útvonal.",
    },
    volume: {
      title: "Volumen és textúra csomag",
      body: "Réteges vágás + root lift kezelés + otthoni rutin ajánlás.",
    },
    repair: {
      title: "Repair fókusz csomag",
      body: "Mélyhidratáló kezelés + formaigazítás + 4 hetes utánkövetési terv.",
    },
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.profileChoice;
      const result = map[choice];
      if (!result || !title || !body) {
        return;
      }

      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      title.textContent = result.title;
      body.textContent = result.body;
    });
  });
}

function initBarberFunnel() {
  if (profile !== "barber") {
    return;
  }

  const slots = document.querySelectorAll("[data-slot]");
  const selected = document.getElementById("selectedSlot");
  const hidden = document.getElementById("slotInput");

  slots.forEach((slot) => {
    slot.addEventListener("click", () => {
      slots.forEach((item) => item.classList.remove("is-active"));
      slot.classList.add("is-active");

      const value = slot.dataset.slot || "";
      if (selected) {
        selected.textContent = value;
      }
      if (hidden instanceof HTMLInputElement) {
        hidden.value = value;
      }
    });
  });
}

function initPremiumQuiz() {
  if (profile !== "premium") {
    return;
  }

  const button = document.getElementById("quizCalc");
  const scoreTarget = document.getElementById("quizScore");
  const resultTarget = document.getElementById("quizResult");
  const hidden = document.getElementById("scoreInput");

  if (!button || !scoreTarget || !resultTarget) {
    return;
  }

  button.addEventListener("click", () => {
    const checked = document.querySelectorAll(".quiz-grid input:checked");
    let score = 0;

    checked.forEach((item) => {
      if (item instanceof HTMLInputElement) {
        score += Number(item.dataset.score || 0);
      }
    });

    scoreTarget.textContent = `${score} pont`;

    if (hidden instanceof HTMLInputElement) {
      hidden.value = String(score);
    }

    if (score >= 18) {
      resultTarget.textContent =
        "Kiemelten jó illeszkedés. Javasolt: 90 perces concierge konzultáció.";
      return;
    }

    if (score >= 12) {
      resultTarget.textContent =
        "Jó alap. Először egy rövidebb online előhívást ajánlunk, majd személyes időpontot.";
      return;
    }

    resultTarget.textContent =
      "Most még nem ideális high-ticket csomagra. Kezdjünk egy kisebb, alap kezeléssel.";
  });
}

initProfileMotion();
initFormFeedback();
initPricingCalc();
initBeforeAfter();
initWomenProfileSelector();
initBarberFunnel();
initPremiumQuiz();
