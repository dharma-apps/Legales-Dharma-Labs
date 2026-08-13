(() => {
  const supported = new Set(["es", "en"]);
  const interfaceCopy = {
    "Saltar al contenido": "Skip to content",
    "Centro legal": "Legal center",
    Privacidad: "Privacy",
    Términos: "Terms",
    "Cuentas y datos": "Accounts and data",
    Aplicaciones: "Applications",
    Inicio: "Home",
    Contacto: "Contact",
    "Repositorio público": "Public repository",
    Ficha: "App page",
    "Laboratorio de aplicaciones y productos digitales · Uruguay":
      "Application and digital product lab · Uruguay",
    "Documentos públicos vigentes · Uruguay":
      "Current public documents · Uruguay",
    "Registro legal público · Uruguay": "Public legal registry · Uruguay",
    "Ficha legal de producto · Uruguay": "Product legal entry · Uruguay",
  };
  const ariaCopy = {
    "Navegación legal": "Legal navigation",
    "Navegacion legal": "Legal navigation",
    Idioma: "Language",
    "Enlaces de pie": "Footer links",
  };
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("lang");
  const stored = window.localStorage.getItem("dharma-legal-language");
  const browser = navigator.language?.toLowerCase().startsWith("en")
    ? "en"
    : "es";
  let active = supported.has(requested)
    ? requested
    : supported.has(stored)
      ? stored
      : browser;

  const interfaceElements = document.querySelectorAll(
    ".skip-link, .brand small, .site-nav a, .footer-links a, .site-footer p",
  );
  interfaceElements.forEach((element) => {
    element.dataset.copyEs = element.textContent.trim();
  });
  const labelledElements = document.querySelectorAll(
    ".site-nav[aria-label], .language-switcher[aria-label], .footer-links[aria-label]",
  );
  labelledElements.forEach((element) => {
    element.dataset.ariaEs = element.getAttribute("aria-label") ?? "";
  });

  function applyInterfaceLanguage(language) {
    interfaceElements.forEach((element) => {
      const spanish = element.dataset.copyEs ?? element.textContent.trim();
      element.textContent =
        language === "en" ? (interfaceCopy[spanish] ?? spanish) : spanish;
    });
    labelledElements.forEach((element) => {
      const spanish = element.dataset.ariaEs ?? "";
      element.setAttribute(
        "aria-label",
        language === "en" ? (ariaCopy[spanish] ?? spanish) : spanish,
      );
    });
  }

  function applyLanguage(language, updateUrl = false) {
    active = supported.has(language) ? language : "es";
    document.documentElement.lang = active;

    document.querySelectorAll("[data-copy-language]").forEach((section) => {
      section.hidden = section.getAttribute("data-copy-language") !== active;
    });

    document.querySelectorAll("[data-set-language]").forEach((button) => {
      const selected = button.getAttribute("data-set-language") === active;
      button.setAttribute("aria-pressed", String(selected));
    });

    applyInterfaceLanguage(active);

    const title = document.body.getAttribute(`data-title-${active}`);
    if (title) document.title = title;
    window.localStorage.setItem("dharma-legal-language", active);

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", active);
      window.history.replaceState({}, "", url);
    }
  }

  document.querySelectorAll("[data-set-language]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.getAttribute("data-set-language"), true);
    });
  });

  applyLanguage(active);
})();
