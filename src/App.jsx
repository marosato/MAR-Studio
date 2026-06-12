import { useEffect, useMemo, useState } from "react";
import {
  benefits,
  brand,
  businessTypes,
  faqs,
  packages,
  services,
  whatsappUrl,
} from "./data/siteContent.js";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const calculatorExtras = [
  ["menu", "Menú o catálogo ampliado", 60],
  ["gallery", "Galería cuidada", 50],
  ["copy", "Copywriting comercial", 80],
  ["maintenance", "Mantenimiento mensual opcional", 45],
];

const extraPrices = Object.fromEntries(calculatorExtras.map(([key, , price]) => [key, price]));

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Ir al inicio de MAR Studio">
      <span className="logo-mar">MAR</span>
      <span>Studio</span>
    </a>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`section reveal ${className}`}>
      <div className="section-head">
        {eyebrow && <p className="section-label">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function CtaButton({ children, href = whatsappUrl, variant = "primary", className = "", ...props }) {
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
        →
      </span>
    </a>
  );
}

function CtaStack({ children, note, href = whatsappUrl, variant = "primary", className = "" }) {
  return (
    <div className={`cta-stack ${className}`}>
      <CtaButton href={href} variant={variant}>
        {children}
      </CtaButton>
      {note && <small>{note}</small>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    ["Servicios", "#servicios"],
    ["Paquetes", "#paquetes"],
    ["Calculadora", "#calculadora"],
    ["Proceso", "#proceso"],
    ["FAQ", "#faq"],
  ];

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegación principal">
        <Logo />
        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menú"
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
          <CtaButton className="nav-cta" onClick={() => setOpen(false)}>
            Pedir presupuesto
          </CtaButton>
        </div>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div
      className="hero-visual"
      role="img"
      aria-label="Vista previa de una página web para un local gastronómico"
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
            <p>Menú + reservas</p>
            <h3>Café Brisa</h3>
          </div>
          <span className="mock-whatsapp">WhatsApp</span>
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
          <span>Menú claro</span>
          <span>Mapa</span>
          <span>Consulta</span>
        </div>
      </div>
      <div className="floating-proof">
        <strong>5-7 días</strong>
        <span>para salir online</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <main id="inicio" className="hero">
      <div className="hero-copy reveal is-visible">
        <h1>{brand.promise}</h1>
        <p className="hero-subtitle">{brand.subpromise}</p>
        <p className="hero-detail">
          Especializada en cafeterías, restaurantes, bares, panaderías y pequeños negocios que
          necesitan una presencia online profesional, simple de compartir y preparada para convertir
          visitas en conversaciones reales.
        </p>
        <div className="hero-actions">
          <CtaStack note="Respuesta sin compromiso. Te oriento con el paquete ideal.">
            Pedir presupuesto por WhatsApp
          </CtaStack>
          <a className="btn btn-secondary" href="#paquetes">
            Ver paquetes
          </a>
        </div>
        <div className="hero-notes" aria-label="Datos clave">
          <span>Paquetes desde USD 300</span>
          <span>Entrega en 5 a 7 días hábiles</span>
          <span>WhatsApp directo incluido</span>
        </div>
        <div className="hero-confidence" aria-label="Beneficios principales">
          <p>Más consultas</p>
          <p>Mejor imagen</p>
          <p>Información clara</p>
        </div>
      </div>
      <HeroVisual />
    </main>
  );
}

function Opportunity() {
  return (
    <Section id="oportunidad" eyebrow="Oportunidad" title="Que tu cliente entienda, confíe y te escriba.">
      <div className="opportunity-grid">
        <div className="opportunity-copy">
          <p>
            Cuando alguien descubre tu comercio, la decisión empieza con detalles simples: qué
            ofrecés, cómo se ve tu propuesta, dónde estás, cuándo abrís y cómo puede contactarte.
            Si esa información está clara, pedir o reservar se siente natural.
          </p>
          <p>
            MAR Studio crea páginas pensadas para negocios reales: visuales, rápidas de recorrer y
            conectadas a WhatsApp para transformar interés en una conversación.
          </p>
        </div>
        <div className="signal-list">
          {["Tu propuesta se entiende en segundos", "WhatsApp queda siempre a un toque", "Tu local se percibe más profesional", "Tus clientes encuentran todo sin fricción"].map(
            (item) => (
              <div key={item} className="signal-item">
                <span aria-hidden="true">✓</span>
                <p>{item}</p>
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="servicios" eyebrow="Servicios" title="Todo lo necesario para que tu página venda mejor.">
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service}>
            <span className="service-icon" aria-hidden="true" />
            <h3>{service}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Packages() {
  return (
    <Section id="paquetes" eyebrow="Paquetes" title="Planes simples, claros y pensados para comercios.">
      <div className="pricing-grid">
        {packages.map((plan) => (
          <article className={`price-card ${plan.featured ? "featured" : ""}`} key={plan.id}>
            {plan.featured && <p className="plan-tag">Recomendado</p>}
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <div className="price">desde {currency.format(plan.price)}</div>
            <div className="plan-meta" aria-label={`Detalles del plan ${plan.name}`}>
              <span>{plan.sections}</span>
              <span>{plan.delivery}</span>
            </div>
            <p className="best-for">Recomendado para {plan.bestFor}.</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <CtaStack
              variant={plan.featured ? "primary" : "outline"}
              note="Te ayudo a confirmar si este plan encaja con tu negocio."
            >
              Quiero mi página web
            </CtaStack>
          </article>
        ))}
      </div>
      <p className="pricing-note">
        Dominio, hosting y mantenimiento mensual son adicionales opcionales. El presupuesto final
        depende del alcance, cantidad de secciones y contenido disponible, pero siempre vas a saber
        qué incluye antes de avanzar.
      </p>
    </Section>
  );
}

function BusinessSelector() {
  const [selected, setSelected] = useState(businessTypes[0]);
  const recommended = packages.find((plan) => plan.id === selected.recommendation);
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
    const nextIndex = (index + direction + businessTypes.length) % businessTypes.length;
    const nextType = businessTypes[nextIndex];
    setSelected(nextType);
    requestAnimationFrame(() => {
      document.getElementById(`business-tab-${nextType.id}`)?.focus();
    });
  };

  return (
    <Section
      id="tipo-negocio"
      eyebrow="Selector"
      title="Contame qué tipo de negocio tenés y te muestro el enfoque ideal."
    >
      <div className="selector-layout">
        <div className="business-buttons" role="tablist" aria-label="Tipo de negocio">
          {businessTypes.map((type, index) => (
            <button
              key={type.id}
              id={`business-tab-${type.id}`}
              className={selected.id === type.id ? "active" : ""}
              type="button"
              role="tab"
              aria-selected={selected.id === type.id}
              aria-controls="business-panel"
              onClick={() => setSelected(type)}
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
            Para este caso, el paquete sugerido suele ser <strong>{recommended?.name}</strong>,
            porque equilibra claridad, estética y conversión a WhatsApp sin complicar el proceso.
          </p>
          <div className="selector-actions">
            <CtaButton href="#calculadora" variant="secondary">
              Calcular estimado
            </CtaButton>
            <CtaButton>Consultar por WhatsApp</CtaButton>
          </div>
        </article>
      </div>
    </Section>
  );
}

function Calculator() {
  const [planId, setPlanId] = useState("professional");
  const [extras, setExtras] = useState({
    menu: true,
    gallery: true,
    copy: false,
    maintenance: false,
  });

  const selectedPlan = packages.find((plan) => plan.id === planId);
  const total = useMemo(() => {
    const extrasTotal = Object.entries(extras).reduce(
      (sum, [key, enabled]) => sum + (enabled ? extraPrices[key] : 0),
      0
    );
    return selectedPlan.price + extrasTotal;
  }, [extras, selectedPlan.price]);

  const toggleExtra = (key) => {
    setExtras((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <Section id="calculadora" eyebrow="Calculadora" title="Calculá un estimado rápido y pedí una orientación real.">
      <div className="calculator">
        <div className="calculator-controls">
          <fieldset>
            <legend>Paquete base</legend>
            <div className="plan-options">
              {packages.map((plan) => (
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
                    {plan.featured && <em>Recomendado</em>}
                  </span>
                  <strong>{currency.format(plan.price)}</strong>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Extras posibles</legend>
            <div className="extra-options">
              {calculatorExtras.map(([key, label, price]) => (
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
          <p>Estimado inicial</p>
          <strong>{currency.format(total)}</strong>
          <div className="estimate-plan">
            <span>Base seleccionada</span>
            <b>{selectedPlan.name}</b>
          </div>
          <span>
            No es un precio cerrado: es una referencia para que sepas desde dónde partir. Por
            WhatsApp revisamos alcance, secciones y material disponible sin compromiso.
          </span>
          <CtaStack note="Te respondo con próximos pasos claros.">
            Pedir presupuesto por WhatsApp
          </CtaStack>
        </aside>
      </div>
    </Section>
  );
}

function BeforeAfter() {
  return (
    <Section id="antes-despues" eyebrow="Antes / Después" title="De datos sueltos a una página que guía la consulta.">
      <div className="before-after">
        <article className="before-panel">
          <h3>Antes</h3>
          <p>Mensajes repetidos, horarios perdidos en historias, menú difícil de encontrar y clientes con dudas.</p>
          <div className="messy-lines">
            <span />
            <span />
            <span />
            <span />
          </div>
        </article>
        <article className="after-panel">
          <h3>Después</h3>
          <p>Una página ordenada con propuesta, productos, fotos, mapa y botón de WhatsApp siempre visible.</p>
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

function Process() {
  const steps = [
    ["1", "Me escribís por WhatsApp", "Me contás tu rubro, qué necesitás mostrar y si ya tenés fotos o textos."],
    ["2", "Definimos el alcance", "Te recomiendo paquete, estructura y prioridades para que la web sea clara y vendedora."],
    ["3", "Diseño y desarrollo", "Creo la landing responsive, moderna y conectada a WhatsApp."],
    ["4", "Revisamos y publicamos", "Ajustamos detalles finales y te dejo una página lista para compartir."],
  ];

  return (
    <Section id="proceso" eyebrow="Proceso" title="Cómo pasamos de idea a web publicada.">
      <div className="process-line">
        {steps.map(([number, title, text]) => (
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

function AboutAndBenefits() {
  return (
    <section className="about-band reveal">
      <div id="sobre-mar" className="about-copy">
        <p className="section-label">Sobre MAR Studio</p>
        <h2>Diseño web pensado para negocios que quieren transmitir confianza desde el primer clic.</h2>
        <p>
          MAR Studio crea páginas web modernas para comercios y pequeños negocios que quieren una
          presencia digital clara, estética y vendedora. La idea es simple: que tu cliente entienda
          rápido qué ofrecés, confíe en tu marca y pueda escribirte sin fricción.
        </p>
      </div>
      <div className="benefit-list">
        {benefits.map((benefit) => (
          <div className="benefit-item" key={benefit}>
            <span aria-hidden="true">+</span>
            <p>{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" eyebrow="FAQ" title="Preguntas frecuentes antes de pedir presupuesto.">
      <div className="faq-list">
        {faqs.map((item, index) => {
          const open = index === openIndex;
          const answerId = `faq-answer-${index}`;
          return (
            <article className={`faq-item ${open ? "open" : ""}`} key={item.question}>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={answerId}
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">+</span>
              </button>
              <div className="faq-answer" id={answerId}>
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="faq-cta">
        <p>¿Tenés una duda puntual sobre tu negocio?</p>
        <CtaStack note="Primer mensaje sin compromiso.">
          Hacer una consulta por WhatsApp
        </CtaStack>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta reveal">
      <div>
        <h2>Tu próxima web puede empezar con un mensaje simple.</h2>
        <p>
          Contame qué negocio tenés, qué querés mostrar y si ya tenés fotos o textos. Te respondo
          con una orientación clara, sin compromiso y con el paquete que mejor encaje.
        </p>
      </div>
      <CtaStack note="Sin formularios largos. Sin compromiso.">
        Pedir presupuesto por WhatsApp
      </CtaStack>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Pedir presupuesto por WhatsApp">
      WhatsApp
    </a>
  );
}

function App() {
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
      <Header />
      <Hero />
      <Opportunity />
      <Services />
      <Packages />
      <BusinessSelector />
      <Calculator />
      <BeforeAfter />
      <Process />
      <AboutAndBenefits />
      <FAQ />
      <FinalCTA />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
