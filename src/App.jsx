import { useEffect, useMemo, useState } from "react";
import { siteContent, whatsappUrl } from "./data/siteContent.js";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function Logo({ copy }) {
  return (
    <a className="logo" href="#inicio" aria-label={copy.ui.homeLabel}>
      <span className="logo-mar">MAR</span>
      <span>Studio</span>
    </a>
  );
}

function BrandText({ children }) {
  if (typeof children !== "string" || !children.includes("MAR Studio")) return children;

  return children.split("MAR Studio").map((part, index, parts) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && <strong className="brand-strong">MAR Studio</strong>}
    </span>
  ));
}

function ThemeIcon({ type }) {
  if (type === "sun") {
    return (
      <svg className="switch-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
      </svg>
    );
  }

  return (
    <svg className="switch-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M18.4 14.2A7.2 7.2 0 0 1 9.8 5.6 8 8 0 1 0 18.4 14.2Z" />
    </svg>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`section reveal ${className}`}>
      <div className="section-head">
        {eyebrow && <p className="section-label"><BrandText>{eyebrow}</BrandText></p>}
        <h2><BrandText>{title}</BrandText></h2>
      </div>
      {children}
    </section>
  );
}

function CtaButton({ children, href = whatsappUrl, variant = "primary", className = "", arrow = "→", ...props }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      className={`btn btn-${variant} ${className}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      {...props}
    >
      <span>{children}</span>
      <span className="btn-arrow" aria-hidden="true">
        {arrow}
      </span>
    </a>
  );
}

function CtaStack({ children, note, href = whatsappUrl, variant = "primary", className = "", arrow }) {
  return (
    <div className={`cta-stack ${className}`}>
      <CtaButton href={href} variant={variant} arrow={arrow}>
        {children}
      </CtaButton>
      {note && <small>{note}</small>}
    </div>
  );
}

function SwitchControl({ label, checked, onClick, leftLabel, rightLabel, className = "" }) {
  return (
    <button
      className={`switch-control ${checked ? "is-on" : ""} ${className}`}
      type="button"
      aria-label={label}
      aria-pressed={checked}
      onClick={onClick}
    >
      <span className="switch-label">{leftLabel}</span>
      <span className="switch-label">{rightLabel}</span>
      <span className="switch-thumb" aria-hidden="true" />
    </button>
  );
}

function Header({ copy, language, theme, onLanguageToggle, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    [copy.nav.services, "#servicios"],
    [copy.nav.websites, "#paginas-web"],
    [copy.nav.packages, "#paquetes"],
    [copy.nav.calculator, "#calculadora"],
    [copy.nav.process, "#proceso"],
    [copy.nav.faq, "#faq"],
  ];

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegación principal">
        <Logo copy={copy} />
        <button
          className="menu-toggle"
          type="button"
          aria-label={copy.ui.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <div className="nav-controls" aria-label={copy.ui.preferencesLabel}>
            <SwitchControl
              label={copy.ui.themeLabel}
              checked={theme === "dark"}
              onClick={onThemeToggle}
              leftLabel={<ThemeIcon type="sun" />}
              rightLabel={<ThemeIcon type="moon" />}
              className="theme-switch"
            />
            <SwitchControl
              label={copy.ui.languageLabel}
              checked={language === "en"}
              onClick={onLanguageToggle}
              leftLabel="ES"
              rightLabel="EN"
              className="language-switch"
            />
            <button
              className="control-pill"
              type="button"
              aria-label={copy.ui.themeLabel}
              aria-pressed={theme === "dark"}
              onClick={onThemeToggle}
            >
              <span aria-hidden="true">{theme === "dark" ? "☾" : "☼"}</span>
              {theme === "dark" ? copy.ui.dark : copy.ui.light}
            </button>
            <button
              className="control-pill"
              type="button"
              aria-label={copy.ui.languageLabel}
              onClick={onLanguageToggle}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>
          <CtaButton className="nav-cta" onClick={() => setOpen(false)} arrow={copy.ui.next}>
            {copy.nav.budget}
          </CtaButton>
        </div>
      </nav>
    </header>
  );
}

function HeroVisual({ copy }) {
  return (
    <div
      className="hero-visual"
      role="img"
      aria-label={copy.hero.visualLabel}
    >
      <div className="water-orbit orbit-one" />
      <div className="water-orbit orbit-two" />
      <div className="browser-card">
        <div className="browser-top">
          <span />
          <span />
          <span />
        </div>
        <div className="mock-hero">
          <div>
            <p>{copy.hero.mock.small}</p>
            <h3>{copy.hero.mock.title}</h3>
          </div>
          <span className="mock-whatsapp">{copy.ui.whatsapp}</span>
        </div>
        <div className="mock-grid">
          <div className="mock-photo large" />
          <div className="mock-stack">
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="mock-list">
          {copy.hero.mock.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="floating-proof">
        <strong>{copy.hero.mock.proof}</strong>
        <span>{copy.hero.mock.proofText}</span>
      </div>
    </div>
  );
}

function Hero({ copy }) {
  return (
    <main id="inicio" className="hero">
      <div className="hero-copy reveal is-visible">
        <h1>{copy.brand.promise}</h1>
        <p className="hero-subtitle">{copy.brand.subpromise}</p>
        <p className="hero-detail">{copy.hero.detail}</p>
        <div className="hero-actions">
          <CtaStack note={copy.hero.ctaNote} arrow={copy.ui.next}>
            {copy.ui.quoteWhatsapp}
          </CtaStack>
          <a className="btn btn-secondary" href="#paquetes">
            {copy.ui.viewPackages}
          </a>
        </div>
        <div className="hero-notes" aria-label={copy.ui.keyFacts}>
          {copy.hero.notes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
        <div className="hero-confidence" aria-label={copy.ui.keyBenefits}>
          {copy.hero.benefits.map((benefit) => (
            <p key={benefit}>{benefit}</p>
          ))}
        </div>
      </div>
      <HeroVisual copy={copy} />
    </main>
  );
}

function Opportunity({ copy }) {
  return (
    <Section id="oportunidad" eyebrow={copy.opportunity.eyebrow} title={copy.opportunity.title}>
      <div className="opportunity-grid">
        <div className="opportunity-copy">
          {copy.opportunity.paragraphs.map((paragraph) => (
            <p key={paragraph}><BrandText>{paragraph}</BrandText></p>
          ))}
        </div>
        <div className="signal-list">
          {copy.opportunity.signals.map((item) => (
            <div key={item} className="signal-item">
              <span aria-hidden="true">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ServiceIcon({ index }) {
  const icons = [
    <path key="landing" d="M5 7h14M7 11h6M7 15h10M5 3h14v18H5z" />,
    <path key="mobile" d="M8 3h8v18H8zM11 18h2" />,
    <path key="chat" d="M4 6h16v10H9l-5 4zM8 10h8M8 13h5" />,
    <path key="menu" d="M5 7h14M5 12h14M5 17h10" />,
    <path key="gallery" d="M4 5h16v14H4zM7 15l3-3 2 2 3-4 3 5" />,
    <path key="map" d="M9 18l-5 2V6l5-2 6 2 5-2v14l-5 2zM9 4v14M15 6v14" />,
    <path key="form" d="M6 4h12v16H6zM9 8h6M9 12h6M9 16h4" />,
    <path key="seo" d="M10 17a7 7 0 1 1 5-2l4 4M8 12l2 2 4-5" />,
    <path key="motion" d="M4 12h6l-2-3M10 12l-2 3M14 6h6M14 12h6M14 18h6" />,
    <path key="social" d="M8 12a3 3 0 1 0 0-1M16 7a3 3 0 1 0 0-1M16 18a3 3 0 1 0 0-1M10 11l4-3M10 13l4 3" />,
    <path key="hosting" d="M5 6h14v5H5zM5 13h14v5H5zM8 8h1M8 15h1" />,
    <path key="maintenance" d="M14 6l4 4-8 8H6v-4zM15 7l2 2" />,
  ];

  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        {icons[index % icons.length]}
      </svg>
    </span>
  );
}

function Services({ copy }) {
  return (
    <Section id="servicios" eyebrow={copy.servicesSection.eyebrow} title={copy.servicesSection.title}>
      <p className="section-intro"><BrandText>{copy.servicesSection.intro}</BrandText></p>
      <div className="service-grid">
        {copy.services.map((service, index) => (
          <article className="service-card" key={service}>
            <ServiceIcon index={index} />
            <h3>{service}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}

function WebsiteShowcase({ copy }) {
  return (
    <Section
      id="paginas-web"
      eyebrow={copy.websiteExamples.eyebrow}
      title={copy.websiteExamples.title}
      className="showcase-section"
    >
      <div className="showcase-layout">
        <div className="showcase-copy">
          <p>{copy.websiteExamples.subtitle}</p>
          <div className="showcase-functions" aria-label={copy.websiteExamples.functionsLabel}>
            {copy.websiteExamples.functions.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <CtaButton href="#calculadora" variant="secondary" arrow={copy.ui.next}>
            {copy.ui.calculateEstimate}
          </CtaButton>
        </div>
        <div className="website-preview-grid">
          {copy.websiteExamples.items.map((item, index) => (
            <article className={`website-preview-card preview-${index + 1}`} key={item.title}>
              <div className="preview-image" aria-hidden="true">
                <div className="preview-browser">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="preview-hero-block">
                  <span>{item.tag}</span>
                  <strong>{item.title}</strong>
                </div>
                <div className="preview-content">
                  <div className="preview-photo" />
                  <div className="preview-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="preview-chips">
                  {item.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </div>
              <div className="preview-caption">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Packages({ copy }) {
  return (
    <Section id="paquetes" eyebrow={copy.packagesSection.eyebrow} title={copy.packagesSection.title}>
      <div className="pricing-grid">
        {copy.packages.map((plan) => (
          <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.id}>
            {plan.featured && <p className="plan-tag">{copy.ui.recommended}</p>}
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <div className="price">{copy.packagesSection.pricePrefix} {currency.format(plan.price)}</div>
            <div className="plan-meta" aria-label={`${copy.ui.planDetails} ${plan.name}`}>
              <span>{plan.sections}</span>
              <span>{plan.delivery}</span>
            </div>
            <p className="best-for">{copy.packagesSection.bestForPrefix} {plan.bestFor}.</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <CtaStack
              variant={plan.featured ? "primary" : "outline"}
              note={copy.packagesSection.ctaNote}
              arrow={copy.ui.next}
            >
              {copy.ui.wantWebsite}
            </CtaStack>
          </article>
        ))}
      </div>
      <p className="pricing-note">{copy.packagesSection.note}</p>
    </Section>
  );
}

function BusinessSelector({ copy }) {
  const [selectedId, setSelectedId] = useState(copy.businessTypes[0].id);
  const selected = copy.businessTypes.find((type) => type.id === selectedId) ?? copy.businessTypes[0];
  const recommended = copy.packages.find((plan) => plan.id === selected.recommendation);
  const selectedTabId = `business-tab-${selected.id}`;

  const handleBusinessKeyDown = (event, index) => {
    const directions = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
    };
    const direction = directions[event.key];

    if (!direction) return;

    event.preventDefault();
    const nextIndex = (index + direction + copy.businessTypes.length) % copy.businessTypes.length;
    const nextType = copy.businessTypes[nextIndex];
    setSelectedId(nextType.id);
    requestAnimationFrame(() => {
      document.getElementById(`business-tab-${nextType.id}`)?.focus();
    });
  };

  return (
    <Section
      id="tipo-negocio"
      eyebrow={copy.selector.eyebrow}
      title={copy.selector.title}
    >
      <div className="selector-layout">
        <div className="business-buttons" role="tablist" aria-label={copy.selector.aria}>
          {copy.businessTypes.map((type, index) => (
            <button
              key={type.id}
              id={`business-tab-${type.id}`}
              className={selected.id === type.id ? "active" : ""}
              type="button"
              role="tab"
              aria-selected={selected.id === type.id}
              aria-controls="business-panel"
              onClick={() => setSelectedId(type.id)}
              onKeyDown={(event) => handleBusinessKeyDown(event, index)}
            >
              <span className="business-dot" aria-hidden="true" />
              {type.label}
            </button>
          ))}
        </div>
        <article
          className="selector-result"
          id="business-panel"
          role="tabpanel"
          aria-labelledby={selectedTabId}
        >
          <p className="result-kicker">{selected.label}</p>
          <h3>{selected.message}</h3>
          <div className="result-bullets">
            {selected.bullets.map((bullet) => (
              <span key={bullet}>{bullet}</span>
            ))}
          </div>
          <p>
            {copy.selector.resultPrefix} <strong>{recommended?.name}</strong>, {copy.selector.resultSuffix}
          </p>
          <div className="selector-actions">
            <CtaButton href="#calculadora" variant="secondary" arrow={copy.ui.next}>
              {copy.ui.calculateEstimate}
            </CtaButton>
            <CtaButton arrow={copy.ui.next}>{copy.ui.consultWhatsapp}</CtaButton>
          </div>
        </article>
      </div>
    </Section>
  );
}

function Calculator({ copy }) {
  const [planId, setPlanId] = useState("professional");
  const [extras, setExtras] = useState({
    menu: true,
    gallery: true,
    copy: false,
    maintenance: false,
  });

  const selectedPlan = copy.packages.find((plan) => plan.id === planId);
  const extraPrices = useMemo(
    () => Object.fromEntries(copy.calculator.options.map(([key, , price]) => [key, price])),
    [copy.calculator.options]
  );
  const total = useMemo(() => {
    const extrasTotal = Object.entries(extras).reduce(
      (sum, [key, enabled]) => sum + (enabled ? extraPrices[key] : 0),
      0
    );
    return selectedPlan.price + extrasTotal;
  }, [extras, extraPrices, selectedPlan.price]);

  const toggleExtra = (key) => {
    setExtras((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <Section id="calculadora" eyebrow={copy.calculator.eyebrow} title={copy.calculator.title}>
      <div className="calculator">
        <div className="calculator-controls">
          <fieldset>
            <legend>{copy.calculator.base}</legend>
            <div className="plan-options">
              {copy.packages.map((plan) => (
                <label key={plan.id} className={planId === plan.id ? "checked" : ""}>
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    checked={planId === plan.id}
                    onChange={(event) => setPlanId(event.target.value)}
                  />
                  <span>
                    {plan.name}
                    {plan.featured && <em>{copy.ui.recommended}</em>}
                  </span>
                  <strong>{currency.format(plan.price)}</strong>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>{copy.calculator.extras}</legend>
            <div className="extra-options">
              {copy.calculator.options.map(([key, label, price]) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    checked={extras[key]}
                    onChange={() => toggleExtra(key)}
                  />
                  <span>{label}</span>
                  <strong>+{currency.format(price)}</strong>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <aside className="estimate-card" aria-live="polite">
          <p>{copy.calculator.estimated}</p>
          <strong>{currency.format(total)}</strong>
          <div className="estimate-plan">
            <span>{copy.calculator.selectedBase}</span>
            <b>{selectedPlan.name}</b>
          </div>
          <span>{copy.calculator.note}</span>
          <CtaStack note={copy.calculator.ctaNote} arrow={copy.ui.next}>
            {copy.ui.quoteWhatsapp}
          </CtaStack>
        </aside>
      </div>
    </Section>
  );
}

function BeforeAfter({ copy }) {
  return (
    <Section id="antes-despues" eyebrow={copy.beforeAfter.eyebrow} title={copy.beforeAfter.title}>
      <div className="before-after">
        <article className="before-panel">
          <h3>{copy.beforeAfter.beforeTitle}</h3>
          <p>{copy.beforeAfter.beforeText}</p>
          <div className="messy-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </article>
        <article className="after-panel">
          <h3>{copy.beforeAfter.afterTitle}</h3>
          <p>{copy.beforeAfter.afterText}</p>
          <div className="clean-preview">
            <span />
            <span />
            <span />
          </div>
        </article>
      </div>
    </Section>
  );
}

function Process({ copy }) {
  return (
    <Section id="proceso" eyebrow={copy.process.eyebrow} title={copy.process.title}>
      <div className="process-line">
        {copy.process.steps.map(([number, title, text]) => (
          <article className="step-card" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function AboutAndBenefits({ copy }) {
  return (
    <section className="about-band reveal">
      <div id="sobre-mar" className="about-copy">
        <p className="section-label"><BrandText>{copy.about.eyebrow}</BrandText></p>
        <h2><BrandText>{copy.about.title}</BrandText></h2>
        <p><BrandText>{copy.about.text}</BrandText></p>
      </div>
      <div className="benefit-list">
        {copy.benefits.map((benefit) => (
          <div className="benefit-item" key={benefit}>
            <span aria-hidden="true">+</span>
            <p>{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ({ copy }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" eyebrow={copy.faqSection.eyebrow} title={copy.faqSection.title}>
      <div className="faq-list">
        {copy.faqs.map(([question, answer], index) => {
          const open = index === openIndex;
          const answerId = `faq-answer-${index}`;
          return (
            <article className={`faq-item ${open ? "open" : ""}`} key={question}>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={answerId}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span>{question}</span>
                <span aria-hidden="true">+</span>
              </button>
              <div className="faq-answer" id={answerId}>
                <p>{answer}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="faq-cta">
        <p>{copy.faqSection.ctaText}</p>
        <CtaStack note={copy.faqSection.ctaNote} arrow={copy.ui.next}>
          {copy.ui.askWhatsapp}
        </CtaStack>
      </div>
    </Section>
  );
}

function FinalCTA({ copy }) {
  return (
    <section className="final-cta reveal">
      <div>
        <h2>{copy.finalCta.title}</h2>
        <p>{copy.finalCta.text}</p>
      </div>
      <CtaStack note={copy.finalCta.note} arrow={copy.ui.next}>
        {copy.ui.quoteWhatsapp}
      </CtaStack>
    </section>
  );
}

function FloatingWhatsApp({ copy }) {
  return (
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={copy.ui.quoteWhatsapp}>
      {copy.ui.whatsapp}
    </a>
  );
}

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("mar-language") || "es");
  const [theme, setTheme] = useState(() => localStorage.getItem("mar-theme") || "light");
  const copy = siteContent[language] ?? siteContent.es;

  useEffect(() => {
    document.documentElement.lang = copy.locale;
    document.documentElement.dataset.theme = theme;
    document.title = copy.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.seo.description);
    document.querySelector('meta[name="keywords"]')?.setAttribute("content", copy.seo.keywords);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", copy.seo.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", copy.seo.description);
    localStorage.setItem("mar-language", language);
    localStorage.setItem("mar-theme", theme);
  }, [copy.locale, copy.seo.description, copy.seo.keywords, copy.seo.title, language, theme]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header
        copy={copy}
        language={language}
        theme={theme}
        onLanguageToggle={() => setLanguage((current) => (current === "es" ? "en" : "es"))}
        onThemeToggle={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
      />
      <Hero copy={copy} />
      <Opportunity copy={copy} />
      <Services copy={copy} />
      <WebsiteShowcase copy={copy} />
      <Packages copy={copy} />
      <BusinessSelector copy={copy} />
      <Calculator copy={copy} />
      <BeforeAfter copy={copy} />
      <Process copy={copy} />
      <AboutAndBenefits copy={copy} />
      <FAQ copy={copy} />
      <FinalCTA copy={copy} />
      <FloatingWhatsApp copy={copy} />
    </>
  );
}

export default App;
