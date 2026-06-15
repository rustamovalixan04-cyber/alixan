const featuredProjects = [
  {
    title: "Essential Beauty",
    category: "Website Design",
    image: "assets/essential-beauty.png",
    imagePosition: "50% 8%",
    imageScale: 1.02,
    imageHoverScale: 1.07,
  },
  {
    title: "La Paloma",
    category: "Website Design",
    image: "assets/la-paloma.png",
    imagePosition: "52% 8%",
    imageScale: 1.03,
    imageHoverScale: 1.08,
  },
  {
    title: "Hotel Beach",
    category: "Website Design",
    image: "assets/hotel-beach.jpg",
    imagePosition: "50% 13%",
    imageScale: 1.02,
    imageHoverScale: 1.07,
  },
  {
    title: "Luxury Real Estate",
    category: "Advertising Campaign",
    image: "assets/campaign-luxury-real-estate.png",
    imagePosition: "64% 50%",
    imageScale: 1.02,
    imageHoverScale: 1.07,
  },
  {
    title: "NeoCard",
    category: "Advertising Campaign",
    image: "assets/campaign-neocard.png",
    imagePosition: "52% 55%",
    imageScale: 1.34,
    imageHoverScale: 1.39,
  },
  {
    title: "Aurum Headphones",
    category: "Advertising Campaign",
    image: "assets/campaign-aurum-headphones.png",
    imagePosition: "55% 52%",
    imageScale: 1.22,
    imageHoverScale: 1.27,
  },
];

const websites = [
  {
    title: "Essential Beauty",
    description: "Luxury skincare e-commerce website.",
    url: "https://essentiall.framer.website/",
    image: "assets/essential-beauty.png",
    imagePosition: "50% 9%",
  },
  {
    title: "Zest",
    description: "Modern bakery and dessert brand website.",
    url: "https://zzest.framer.website/",
    image: "assets/zest.png",
    imagePosition: "50% 8%",
  },
  {
    title: "La Paloma",
    description: "Boutique cafe website.",
    url: "https://lapalomaa.framer.website/",
    image: "assets/la-paloma.png",
    imagePosition: "50% 7%",
  },
  {
    title: "Hotel Beach",
    description: "Luxury hotel and resort website.",
    url: "https://hotelex.framer.website/",
    image: "assets/hotel-beach.jpg",
    imagePosition: "50% 8%",
  },
];

const mobileApps = [
  {
    title: "KINETIC",
    category: "Fitness tracking application",
    description:
      "A modern fitness application focused on workout tracking, performance analytics, exercise libraries, and goal-based training.",
    image: "assets/kinetic-app.png",
  },
  {
    title: "Financier",
    category: "Banking and finance application",
    description:
      "A personal finance application designed for transaction management, spending insights, card controls, and banking operations.",
    image: "assets/financier-app.png",
  },
];

const campaigns = [
  {
    title: "Luxury Real Estate",
    category: "Real Estate Advertising",
    image: "assets/campaign-luxury-real-estate.png",
    imagePosition: "50% 50%",
  },
  {
    title: "NeoCard",
    category: "Fintech Advertising",
    image: "assets/campaign-neocard.png",
    imagePosition: "50% 50%",
  },
  {
    title: "Aurum Headphones",
    category: "Product Advertising",
    image: "assets/campaign-aurum-headphones.png",
    imagePosition: "50% 50%",
  },
  {
    title: "Pulse Fitness",
    category: "Fitness App Campaign",
    image: "assets/campaign-pulse-fitness.png",
    imagePosition: "50% 50%",
  },
  {
    title: "TastyGo",
    category: "Food Delivery Campaign",
    image: "assets/campaign-tastygo.png",
    imagePosition: "50% 50%",
  },
  {
    title: "Fashion Collection",
    category: "Fashion Campaign",
    image: "assets/campaign-fashion-collection.png",
    imagePosition: "50% 50%",
  },
];

const projectProfiles = {
  "Essential Beauty": {
    category: "Website Design",
    role: "UI/UX Designer",
    goal: "Create a refined skincare e-commerce experience that feels premium, trustworthy, and simple to browse.",
    process:
      "Built a calm product journey around hero storytelling, clear catalog sections, ingredient-led content, and conversion-focused page flow.",
    tools: "Framer, UI Design, Visual Direction, Responsive Web Design",
  },
  Zest: {
    category: "Website Design",
    role: "UI/UX Designer",
    goal: "Shape a memorable bakery and dessert brand website with a bold visual identity and easy content discovery.",
    process:
      "Focused the page around high-impact hero imagery, category previews, brand values, testimonials, and a clean navigation rhythm.",
    tools: "Framer, UI Design, Brand Direction, Responsive Web Design",
  },
  "La Paloma": {
    category: "Website Design",
    role: "UI/UX Designer",
    goal: "Design a boutique cafe website that communicates atmosphere, reservations, and brand personality at a glance.",
    process:
      "Balanced editorial cafe imagery with reservation flows, contact details, storytelling blocks, and soft luxury spacing.",
    tools: "Framer, UI Design, Art Direction, Responsive Web Design",
  },
  "Hotel Beach": {
    category: "Website Design",
    role: "UI/UX Designer",
    goal: "Present a luxury hotel and resort experience with strong destination appeal and premium booking intent.",
    process:
      "Created a resort-focused page structure around immersive hero imagery, amenities, rooms, activities, and destination cues.",
    tools: "Framer, UI Design, Hospitality Web Design, Responsive Layouts",
  },
  KINETIC: {
    category: "Fitness Tracking App",
    role: "Mobile UI/UX Designer",
    goal: "Design a performance-driven fitness app for workout tracking, analytics, exercise libraries, and goal-based training.",
    process:
      "Mapped core fitness flows across onboarding, dashboards, workout discovery, active sessions, and progress analytics.",
    tools: "Figma, Mobile UI Design, Product Strategy, Design Systems",
  },
  Financier: {
    category: "Banking & Finance App",
    role: "Mobile UI/UX Designer",
    goal: "Create a clear personal finance experience for transactions, spending insights, card controls, and daily banking actions.",
    process:
      "Designed practical finance flows for dashboard review, card management, transaction history, transaction details, and controls.",
    tools: "Figma, Mobile UI Design, Fintech UX, Interaction Design",
  },
  "Luxury Real Estate": {
    category: "Real Estate Advertising",
    role: "Advertising Designer",
    goal: "Position a premium residential offer with a high-value visual language and immediate property recognition.",
    process:
      "Composed a campaign visual around architectural presence, city context, premium messaging, and a clear call to action.",
    tools: "Advertising Design, Art Direction, Layout Design, Image Composition",
  },
  NeoCard: {
    category: "Fintech Advertising",
    role: "Advertising Designer",
    goal: "Make a fintech card offer feel modern, credible, and instantly readable in a campaign format.",
    process:
      "Centered the visual hierarchy around the card product, benefit messaging, light-space contrast, and direct conversion language.",
    tools: "Advertising Design, Fintech Campaigns, Visual Direction, Compositing",
  },
  "Aurum Headphones": {
    category: "Product Advertising",
    role: "Advertising Designer",
    goal: "Create a premium product campaign that makes the headphones feel elegant, focused, and desirable.",
    process:
      "Used dark product lighting, spacious composition, minimal messaging, and restrained contrast to emphasize the hero object.",
    tools: "Product Advertising, Art Direction, Visual Design, Image Composition",
  },
  "Pulse Fitness": {
    category: "Fitness App Campaign",
    role: "Advertising Designer",
    goal: "Promote a fitness tracking app with energetic motion, clear benefits, and strong app-product visibility.",
    process:
      "Built a campaign layout around app interface emphasis, performance messaging, feature callouts, and action-driven hierarchy.",
    tools: "Advertising Design, App Campaigns, Visual Direction, Layout Design",
  },
  TastyGo: {
    category: "Food Delivery Campaign",
    role: "Advertising Designer",
    goal: "Create a food delivery campaign that feels appetizing, direct, and conversion-ready.",
    process:
      "Composed the visual around bold food photography, offer messaging, brand presence, and a strong ordering call to action.",
    tools: "Advertising Design, Food Campaigns, Compositing, Layout Design",
  },
  "Fashion Collection": {
    category: "Fashion Campaign",
    role: "Advertising Designer",
    goal: "Develop an editorial fashion campaign with a refined seasonal look and polished collection presentation.",
    process:
      "Combined model imagery, magazine-inspired typography, collection messaging, and premium negative space.",
    tools: "Fashion Advertising, Editorial Layout, Art Direction, Visual Design",
  },
};

const projectSources = new Map();

[...featuredProjects, ...websites, ...mobileApps, ...campaigns].forEach((project) => {
  const currentProject = projectSources.get(project.title) || {};
  const cleanProject = Object.fromEntries(
    Object.entries(project).filter(([, value]) => value !== undefined),
  );

  projectSources.set(project.title, { ...currentProject, ...cleanProject });
});

const projectDetails = new Map(
  Object.entries(projectProfiles).map(([title, profile]) => {
    const source = projectSources.get(title) || {};

    return [
      title,
      {
        ...source,
        ...profile,
        title,
        category: profile.category || source.category,
      },
    ];
  }),
);

const cardAttributes = (title) =>
  `data-project-title="${title}" role="button" tabindex="0" aria-label="Open ${title} project details"`;

const imageMarkup = ({ image, title, imagePosition, imageScale, imageHoverScale }, className) => `
  <div
    class="${className}"
    style="--image-position: ${imagePosition || "50% 50%"}; --image-scale: ${imageScale || 1.01}; --image-hover-scale: ${imageHoverScale || 1.055}"
  >
    <img src="${image}" alt="${title} project preview" loading="lazy" />
  </div>
`;

const renderFeaturedProjects = () => {
  const grid = document.querySelector("#featured-grid");
  grid.innerHTML = featuredProjects
    .map((project) => {
      const media = project.image
        ? imageMarkup(project, "project-media")
        : `
          <div class="featured-campaign-media" aria-hidden="true">
            <span>${project.category}</span>
            <strong>${project.title}</strong>
          </div>
        `;

      return `
        <article class="project-card reveal" ${cardAttributes(project.title)}>
          ${media}
          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description || project.category}</p>
          </div>
        </article>
      `;
    })
    .join("");
};

const renderWebsites = () => {
  const grid = document.querySelector("#website-grid");
  grid.innerHTML = websites
    .map(
      (site) => `
        <article class="website-card reveal" ${cardAttributes(site.title)}>
          ${imageMarkup(site, "website-preview")}
          <div class="website-content">
            <div>
              <h3>${site.title}</h3>
              <p>${site.description}</p>
            </div>
            <a class="text-link" href="${site.url}" target="_blank" rel="noreferrer">
              Check it out
            </a>
          </div>
        </article>
      `,
    )
    .join("");
};

const renderMobileApps = () => {
  const grid = document.querySelector("#app-grid");
  grid.innerHTML = mobileApps
    .map(
      (app) => `
        <article class="app-card reveal" ${cardAttributes(app.title)}>
          ${imageMarkup(app, "app-preview")}
          <div class="app-content">
            <p class="app-category">${app.category}</p>
            <h3>${app.title}</h3>
            <p>${app.description}</p>
          </div>
        </article>
      `,
    )
    .join("");
};

const renderCampaigns = () => {
  const grid = document.querySelector("#campaign-grid");
  grid.innerHTML = campaigns
    .map(
      (campaign) => `
        <article class="campaign-card reveal" ${cardAttributes(campaign.title)}>
          ${imageMarkup(campaign, "campaign-media")}
          <div class="campaign-content">
            <h3>${campaign.title}</h3>
            <p>${campaign.category}</p>
          </div>
        </article>
      `,
    )
    .join("");
};

const smoothScrollEase = (progress) => 1 - Math.pow(1 - progress, 4);

const loadLenisScript = () =>
  new Promise((resolve) => {
    if (window.Lenis) {
      resolve(true);
      return;
    }

    const existingScript = document.querySelector("[data-lenis-loader]");

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(Boolean(window.Lenis)), { once: true });
      existingScript.addEventListener("error", () => resolve(false), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "vendor/lenis.min.js?v=1.3.23-fallback";
    script.async = true;
    script.dataset.lenisLoader = "true";
    script.addEventListener("load", () => resolve(Boolean(window.Lenis)), { once: true });
    script.addEventListener("error", () => resolve(false), { once: true });
    document.head.append(script);
  });

const setupLenisSmoothScroll = () => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let lenis = null;
  let loadingLenis = false;

  const setLenisStatus = (status) => {
    document.documentElement.dataset.lenis = status;
  };

  const destroyLenis = () => {
    if (!lenis) {
      return;
    }

    lenis.destroy();
    lenis = null;
    window.portfolioLenis = null;
  };

  const createLenis = () => {
    if (lenis || motionQuery.matches) {
      return;
    }

    if (!window.Lenis) {
      setLenisStatus("missing");
      return;
    }

    lenis = new window.Lenis({
      duration: 1.18,
      easing: smoothScrollEase,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchMultiplier: 1.08,
      wheelMultiplier: 0.92,
      autoRaf: true,
      anchors: false,
    });
    window.portfolioLenis = lenis;
    setLenisStatus("active");
  };

  const refresh = () => {
    if (motionQuery.matches) {
      destroyLenis();
      setLenisStatus("reduced-motion");
      return;
    }

    if (!window.Lenis) {
      if (loadingLenis) {
        return;
      }

      loadingLenis = true;
      setLenisStatus("loading");
      loadLenisScript().then((loaded) => {
        loadingLenis = false;
        if (!loaded) {
          setLenisStatus("missing");
          return;
        }

        refresh();
      });
      return;
    }

    createLenis();
  };

  const scrollWithKeyboard = (event) => {
    if (!lenis || document.body.classList.contains("modal-open") || event.defaultPrevented) {
      return;
    }

    if (event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }

    if (
      event.target.closest?.(
        "a, button, input, textarea, select, [role='button'], [contenteditable='true']",
      )
    ) {
      return;
    }

    const smallStep = 92;
    const pageStep = window.innerHeight * 0.84;
    const currentScroll = lenis.scroll || window.scrollY;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
    let targetScroll = null;

    if (event.key === "ArrowDown") {
      targetScroll = currentScroll + smallStep;
    } else if (event.key === "ArrowUp") {
      targetScroll = currentScroll - smallStep;
    } else if (event.key === "PageDown" || (event.key === " " && !event.shiftKey)) {
      targetScroll = currentScroll + pageStep;
    } else if (event.key === "PageUp" || (event.key === " " && event.shiftKey)) {
      targetScroll = currentScroll - pageStep;
    } else if (event.key === "Home") {
      targetScroll = 0;
    } else if (event.key === "End") {
      targetScroll = maxScroll;
    }

    if (targetScroll === null) {
      return;
    }

    event.preventDefault();
    lenis.scrollTo(Math.max(0, Math.min(targetScroll, maxScroll)), {
      duration: 1.12,
      easing: smoothScrollEase,
    });
  };

  refresh();
  document.addEventListener("keydown", scrollWithKeyboard);

  if (motionQuery.addEventListener) {
    motionQuery.addEventListener("change", refresh);
  } else {
    motionQuery.addListener(refresh);
  }

  window.addEventListener("load", () => lenis?.resize());
  window.addEventListener("resize", () => lenis?.resize());

  return () => lenis;
};

const setupProjectModal = () => {
  const modal = document.querySelector("#project-modal");

  if (!modal) {
    return;
  }

  const closeButton = modal.querySelector(".modal-close");
  const modalImage = modal.querySelector(".modal-image");
  const modalTitle = modal.querySelector("#modal-title");
  const modalCategory = modal.querySelector(".modal-category");
  const modalVisit = modal.querySelector(".modal-visit");
  const modalFields = {
    role: modal.querySelector("[data-modal-role]"),
    goal: modal.querySelector("[data-modal-goal]"),
    process: modal.querySelector("[data-modal-process]"),
    tools: modal.querySelector("[data-modal-tools]"),
  };
  let activeTrigger = null;
  let imageResetTimer = 0;

  const openModal = (project, trigger) => {
    window.clearTimeout(imageResetTimer);
    activeTrigger = trigger;
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalFields.role.textContent = project.role;
    modalFields.goal.textContent = project.goal;
    modalFields.process.textContent = project.process;
    modalFields.tools.textContent = project.tools;
    modalImage.src = project.image;
    modalImage.alt = `${project.title} project preview`;

    if (project.url) {
      modalVisit.href = project.url;
      modalVisit.classList.remove("is-hidden");
      modalVisit.removeAttribute("aria-hidden");
      modalVisit.tabIndex = 0;
    } else {
      modalVisit.classList.add("is-hidden");
      modalVisit.setAttribute("aria-hidden", "true");
      modalVisit.tabIndex = -1;
    }

    document.body.classList.add("modal-open");
    window.portfolioLenis?.stop();
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
    closeButton.focus({ preventScroll: true });
  };

  const closeModal = () => {
    if (!modal.classList.contains("is-open")) {
      return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    window.portfolioLenis?.start();
    imageResetTimer = window.setTimeout(() => {
      if (!modal.classList.contains("is-open")) {
        modalImage.removeAttribute("src");
      }
    }, 700);

    if (activeTrigger) {
      activeTrigger.focus({ preventScroll: true });
      activeTrigger = null;
    }
  };

  const getProjectFromCard = (card) => projectDetails.get(card.dataset.projectTitle);

  document.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
      return;
    }

    if (event.target.closest(".modal-close")) {
      closeModal();
      return;
    }

    const card = event.target.closest(".project-card, .website-card, .app-card, .campaign-card");

    if (!card || event.target.closest("a, button")) {
      return;
    }

    const project = getProjectFromCard(card);

    if (!project) {
      return;
    }

    openModal(project, card);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      return;
    }

    const card = event.target.closest?.(".project-card, .website-card, .app-card, .campaign-card");

    if (!card || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    const project = getProjectFromCard(card);

    if (project) {
      openModal(project, card);
    }
  });
};

const setupSmoothAnchorScroll = () => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      const lenis = window.portfolioLenis;

      if (lenis && !motionQuery.matches) {
        lenis.scrollTo(targetId, {
          duration: 1.18,
          easing: smoothScrollEase,
        });
      } else {
        target.scrollIntoView({
          behavior: motionQuery.matches ? "auto" : "smooth",
          block: "start",
        });
      }

      window.history.pushState(null, "", targetId);
    });
  });
};

const setupFloatingNavigation = () => {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const updateMetrics = () => {
    const headerHeight = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--nav-placeholder-height", `${headerHeight}px`);
    document.documentElement.style.setProperty("--nav-scroll-offset", `${headerHeight + 32}px`);
  };

  const updateState = () => {
    document.body.classList.toggle("nav-is-floating", window.scrollY > 8);
  };

  updateMetrics();
  updateState();
  window.addEventListener("scroll", updateState, { passive: true });
  const stateInterval = window.setInterval(updateState, 120);
  window.addEventListener("resize", () => {
    updateMetrics();
    updateState();
  });
  window.addEventListener("load", updateMetrics);
  window.addEventListener("pagehide", () => window.clearInterval(stateInterval));
};

const setupHeroAnimation = () => {
  const heroItems = [
    document.querySelector(".hero .eyebrow"),
    document.querySelector(".hero h1"),
    document.querySelector(".hero h2"),
    document.querySelector(".hero-actions"),
    document.querySelector(".hero-visual"),
  ].filter(Boolean);

  heroItems.forEach((item, index) => {
    item.classList.add("hero-animate");
    item.style.setProperty("--hero-delay", `${120 + index * 110}ms`);
  });

  window.requestAnimationFrame(() => {
    document.documentElement.classList.add("hero-ready");
    document.body.classList.add("hero-ready");
  });
};

const prepareRevealAnimations = () => {
  document.querySelectorAll("main > section:not(.hero)").forEach((section) => {
    section.classList.add("section-reveal");
  });

  document
    .querySelectorAll(".featured-grid, .website-grid, .app-grid, .campaign-grid, .contact-links")
    .forEach((grid) => {
      grid.classList.add("reveal-grid");
      [...grid.children].forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${index * 85}ms`);
      });
    });
};

const revealOnScroll = () => {
  const elements = document.querySelectorAll(".reveal, .section-reveal, .reveal-grid");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("reveal-grid")) {
            [...entry.target.children].forEach((child) => child.classList.add("is-visible"));
          } else {
            entry.target.classList.add("is-visible");
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((element) => observer.observe(element));
};

const setupAmbientBackground = () => {
  const background = document.querySelector(".ambient-background");

  if (!background) {
    return;
  }

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const sectionTones = [
    { element: document.querySelector(".hero"), tone: "hero" },
    { element: document.querySelector("#work"), tone: "work" },
    { element: document.querySelector("#websites"), tone: "websites" },
    { element: document.querySelector("#mobile-apps"), tone: "mobileApps" },
    { element: document.querySelector("#campaigns"), tone: "campaigns" },
    { element: document.querySelector("#about"), tone: "about" },
    { element: document.querySelector("#contact"), tone: "contact" },
  ].filter(({ element }) => element);
  const tones = {
    hero: {
      primary: "rgba(255, 122, 26, 0.2)",
      secondary: "rgba(245, 184, 95, 0.13)",
      tertiary: "rgba(215, 153, 59, 0.08)",
    },
    work: {
      primary: "rgba(151, 92, 34, 0.17)",
      secondary: "rgba(215, 153, 59, 0.1)",
      tertiary: "rgba(91, 52, 22, 0.14)",
    },
    websites: {
      primary: "rgba(245, 184, 95, 0.15)",
      secondary: "rgba(255, 122, 26, 0.1)",
      tertiary: "rgba(127, 83, 31, 0.1)",
    },
    mobileApps: {
      primary: "rgba(179, 122, 44, 0.14)",
      secondary: "rgba(245, 184, 95, 0.09)",
      tertiary: "rgba(80, 55, 24, 0.16)",
    },
    campaigns: {
      primary: "rgba(255, 122, 26, 0.18)",
      secondary: "rgba(177, 88, 28, 0.12)",
      tertiary: "rgba(245, 184, 95, 0.08)",
    },
    about: {
      primary: "rgba(172, 105, 38, 0.14)",
      secondary: "rgba(245, 184, 95, 0.08)",
      tertiary: "rgba(76, 46, 19, 0.16)",
    },
    contact: {
      primary: "rgba(255, 122, 26, 0.2)",
      secondary: "rgba(245, 184, 95, 0.14)",
      tertiary: "rgba(215, 153, 59, 0.1)",
    },
  };
  let frame = 0;
  let activeTone = "";

  const applyTone = (toneName) => {
    if (toneName === activeTone) {
      return;
    }

    const tone = tones[toneName] || tones.hero;
    activeTone = toneName;
    document.documentElement.style.setProperty("--ambient-primary", tone.primary);
    document.documentElement.style.setProperty("--ambient-secondary", tone.secondary);
    document.documentElement.style.setProperty("--ambient-tertiary", tone.tertiary);
  };

  const getActiveTone = () => {
    const viewportCenter = window.scrollY + window.innerHeight * 0.52;
    let currentTone = sectionTones[0]?.tone || "hero";

    sectionTones.forEach(({ element, tone }) => {
      if (element.offsetTop <= viewportCenter) {
        currentTone = tone;
      }
    });

    return currentTone;
  };

  const setStaticPosition = () => {
    background.style.setProperty("--ambient-primary-x", "0px");
    background.style.setProperty("--ambient-primary-y", "0px");
    background.style.setProperty("--ambient-secondary-x", "0px");
    background.style.setProperty("--ambient-secondary-y", "0px");
    background.style.setProperty("--ambient-tertiary-x", "0px");
    background.style.setProperty("--ambient-tertiary-y", "0px");
    background.style.setProperty("--ambient-scale", "1");
  };

  const update = () => {
    frame = 0;
    applyTone(getActiveTone());

    if (motionQuery.matches) {
      setStaticPosition();
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = scrollY / maxScroll;
    const drift = Math.sin(progress * Math.PI * 1.7);
    const counterDrift = Math.cos(progress * Math.PI * 1.25);

    background.style.setProperty("--ambient-primary-x", `${drift * 54}px`);
    background.style.setProperty("--ambient-primary-y", `${scrollY * -0.035}px`);
    background.style.setProperty("--ambient-secondary-x", `${counterDrift * -42}px`);
    background.style.setProperty("--ambient-secondary-y", `${scrollY * 0.024}px`);
    background.style.setProperty("--ambient-tertiary-x", `${Math.sin(progress * Math.PI * 2.2) * 36}px`);
    background.style.setProperty("--ambient-tertiary-y", `${scrollY * -0.018}px`);
    background.style.setProperty("--ambient-scale", `${1 + progress * 0.055}`);
  };

  const requestUpdate = () => {
    if (frame) {
      return;
    }

    frame = window.requestAnimationFrame(update);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  if (motionQuery.addEventListener) {
    motionQuery.addEventListener("change", requestUpdate);
  } else {
    motionQuery.addListener(requestUpdate);
  }

  update();
};

const setupEmailLink = () => {
  const emailLink = document.querySelector("[data-email-link]");

  if (!emailLink) {
    return;
  }

  emailLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = emailLink.href;
  });
};

const setupCustomCursor = () => {
  const desktopQuery = window.matchMedia("(min-width: 981px)");
  const hoverTargets =
    "a, button, .project-card, .website-card, .app-card, .campaign-card, .contact-item";
  let dot;
  let outline;
  let enabled = false;
  let animationFrame = 0;
  let targetX = 0;
  let targetY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let cursorScale = 1;

  const setHoverState = (isHovering) => {
    cursorScale = isHovering ? 1.65 : 1;
    outline.classList.toggle("is-hovering", isHovering);
  };

  const animate = () => {
    cursorX += (targetX - cursorX) * 0.18;
    cursorY += (targetY - cursorY) * 0.18;
    outline.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%) scale(${cursorScale})`;
    animationFrame = window.requestAnimationFrame(animate);
  };

  const onPointerMove = (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;

    if (!outline.classList.contains("is-visible")) {
      cursorX = targetX;
      cursorY = targetY;
      dot.classList.add("is-visible");
      outline.classList.add("is-visible");
    }

    setHoverState(Boolean(document.elementFromPoint(targetX, targetY)?.closest(hoverTargets)));
  };

  const onPointerOver = (event) => {
    if (!event.target.closest(hoverTargets)) {
      return;
    }

    setHoverState(true);
  };

  const onPointerOut = (event) => {
    if (!event.target.closest(hoverTargets)) {
      return;
    }

    setHoverState(false);
  };

  const enable = () => {
    if (enabled || !desktopQuery.matches) {
      return;
    }

    dot = dot || document.createElement("div");
    outline = outline || document.createElement("div");
    dot.className = "custom-cursor-dot";
    outline.className = "custom-cursor-outline";

    if (!dot.isConnected) {
      document.body.append(dot, outline);
    }

    document.body.classList.add("custom-cursor-active");
    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    animationFrame = window.requestAnimationFrame(animate);
    enabled = true;
  };

  const disable = () => {
    if (!enabled) {
      return;
    }

    document.body.classList.remove("custom-cursor-active");
    dot.classList.remove("is-visible");
    outline.classList.remove("is-visible", "is-hovering");
    window.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerover", onPointerOver);
    document.removeEventListener("pointerout", onPointerOut);
    window.cancelAnimationFrame(animationFrame);
    cursorScale = 1;
    enabled = false;
  };

  const refresh = () => {
    if (desktopQuery.matches) {
      enable();
      return;
    }

    disable();
  };

  desktopQuery.addEventListener("change", refresh);
  refresh();
};

renderFeaturedProjects();
renderWebsites();
renderMobileApps();
renderCampaigns();
document.querySelector("#current-year").textContent = new Date().getFullYear();
setupLenisSmoothScroll();
setupSmoothAnchorScroll();
setupFloatingNavigation();
setupHeroAnimation();
prepareRevealAnimations();
setupEmailLink();
setupProjectModal();
setupAmbientBackground();
setupCustomCursor();
revealOnScroll();
