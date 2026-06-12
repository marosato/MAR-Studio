// Cambiar el numero de WhatsApp aca. Reemplazar 549XXXXXXXXXX por el numero real con codigo de pais.
export const whatsappUrl =
  "https://wa.me/549XXXXXXXXXX?text=Hola%20MAR%20Studio,%20quiero%20pedir%20presupuesto%20para%20una%20p%C3%A1gina%20web";

export const brand = {
  name: "MAR Studio",
  promise: "Páginas web para comercios que quieren verse mejor y recibir más consultas.",
  subpromise:
    "Diseño tu landing moderna, clara y conectada a WhatsApp para que tus clientes encuentren todo rápido y te escriban sin vueltas.",
};

// Cambiar precios aca.
export const packages = [
  {
    id: "basic",
    name: "Básico",
    price: 300,
    description: "Para tener una presencia online prolija, rápida y fácil de compartir.",
    bestFor: "negocios que necesitan una web clara para empezar",
    delivery: "5 a 7 días hábiles",
    sections: "Landing esencial",
    features: [
      "Estructura simple orientada a consulta",
      "Diseño responsive para celular",
      "WhatsApp siempre visible",
      "Ubicación, horarios, redes y contacto",
      "SEO básico para presentar mejor tu negocio",
    ],
  },
  {
    id: "professional",
    name: "Profesional",
    price: 400,
    featured: true,
    description: "El equilibrio ideal para mostrar tu propuesta, productos y contacto con más fuerza.",
    bestFor: "locales gastronómicos y comercios que quieren convertir más visitas",
    delivery: "5 a 7 días hábiles",
    sections: "Landing completa",
    features: [
      "Todo lo del plan Básico",
      "Sección de productos, servicios o menú",
      "Galería visual para mostrar tu local",
      "Formulario o bloque de consulta",
      "Copy comercial y animaciones suaves",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 500,
    description: "Para marcas que quieren una experiencia más cuidada, completa y memorable.",
    bestFor: "negocios con carta amplia, estética premium o más contenido",
    delivery: "5 a 7 días hábiles",
    sections: "Landing avanzada",
    features: [
      "Todo lo del plan Profesional",
      "Más secciones y jerarquía de contenido",
      "Copywriting comercial más profundo",
      "Mayor detalle visual e interacciones",
      "Acompañamiento para publicar online",
    ],
  },
];

export const businessTypes = [
  {
    id: "cafeteria",
    label: "Cafetería",
    message: "Mostrá tu carta, ambiente, horarios y ubicación para que la consulta termine en visita.",
    bullets: ["Carta clara", "Fotos del espacio", "WhatsApp para reservas"],
    recommendation: "professional",
  },
  {
    id: "restaurante",
    label: "Restaurante",
    message: "Reuní menú, reservas, WhatsApp, mapa y fotos en un sitio fácil de compartir.",
    bullets: ["Menú ordenado", "Reservas directas", "Galería de platos"],
    recommendation: "premium",
  },
  {
    id: "bar",
    label: "Bar",
    message: "Comunicá propuesta, tragos, eventos y reservas con una presencia más cuidada.",
    bullets: ["Eventos", "Promos", "Reservas por WhatsApp"],
    recommendation: "professional",
  },
  {
    id: "panaderia",
    label: "Panadería",
    message: "Mostrá productos, pedidos, horarios y sucursales sin depender solo de redes.",
    bullets: ["Catálogo simple", "Pedidos directos", "Horarios visibles"],
    recommendation: "professional",
  },
  {
    id: "tienda",
    label: "Tienda",
    message: "Ordená productos, beneficios y contacto para que consultar sea simple.",
    bullets: ["Productos destacados", "Confianza", "Contacto rápido"],
    recommendation: "basic",
  },
  {
    id: "servicio",
    label: "Servicio profesional",
    message: "Transmití confianza, explicá qué ofrecés y recibí consultas más calificadas.",
    bullets: ["Servicios claros", "Prueba de confianza", "Consulta guiada"],
    recommendation: "basic",
  },
  {
    id: "otro",
    label: "Otro comercio",
    message: "Adaptamos la estructura a tu rubro para que tu negocio se vea serio, claro y accesible.",
    bullets: ["Mensaje claro", "Diseño a medida", "WhatsApp directo"],
    recommendation: "professional",
  },
];

export const services = [
  "Landing page pensada para vender",
  "Diseño responsive mobile-first",
  "Botones y mensajes para WhatsApp",
  "Productos, menú o servicios",
  "Galería visual del local",
  "Mapa, horarios y ubicación",
  "Formulario de consulta",
  "SEO básico inicial",
  "Animaciones suaves",
  "Integración con redes sociales",
  "Dominio y hosting adicional",
  "Mantenimiento opcional",
];

export const benefits = [
  "Tu negocio se ve más profesional cuando alguien te busca o recibe tu link.",
  "Tus clientes encuentran horarios, menú, ubicación y contacto sin preguntarte todo por mensaje.",
  "WhatsApp queda siempre a un toque para pedir presupuesto, reservar o consultar.",
  "Podés compartir una sola página clara en redes, tarjetas, Google Maps y mensajes.",
  "La web funciona como una vidriera digital incluso fuera del horario del local.",
  "Tenés una base propia, más ordenada y más confiable que depender solo de redes.",
];

export const faqs = [
  {
    question: "¿Cuánto tarda la entrega?",
    answer:
      "El plazo estimado es de 5 a 7 días hábiles desde que están definidos los textos, fotos y estructura principal. Si ya tenés material, el proceso suele avanzar más rápido.",
  },
  {
    question: "¿Los precios incluyen dominio y hosting?",
    answer:
      "No. Los paquetes empiezan desde USD 300 y dominio, hosting y mantenimiento mensual son adicionales opcionales. Te puedo orientar para elegir la opción más simple según tu caso.",
  },
  {
    question: "¿Pedir presupuesto me compromete a contratar?",
    answer:
      "No. El primer mensaje es sin compromiso: me contás qué negocio tenés y te respondo con una orientación clara sobre paquete, alcance y próximos pasos.",
  },
  {
    question: "¿Puedo usar la web para recibir pedidos o reservas por WhatsApp?",
    answer:
      "Sí. La página puede incluir botones, textos y secciones preparados para que el cliente consulte, reserve o pida por WhatsApp con menos fricción.",
  },
  {
    question: "¿Necesito tener fotos profesionales?",
    answer:
      "Ayudan mucho, pero no son obligatorias. Si todavía no tenés material, puedo trabajar con una dirección visual limpia y recomendarte qué fotos conviene sumar después.",
  },
  {
    question: "¿La web se ve bien en celular?",
    answer:
      "Sí. La landing se diseña mobile-first para que cargue, se lea y convierta bien desde celular, que es donde la mayoría de los clientes consulta.",
  },
  {
    question: "¿Puedo pedir cambios después de publicada?",
    answer:
      "Sí. Podés contratar mantenimiento mensual opcional para ajustes, actualizaciones de contenido y mejoras sin tener que preocuparte por la parte técnica.",
  },
];
