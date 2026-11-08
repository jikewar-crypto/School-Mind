/* School Mind · datos base: cursos, plataformas, prueba de ubicación y glosario */
window.SM_COURSES = [
  { id: 'p', name: 'Principiante', short: 'Desde cero',
    who: 'Nunca has vendido por internet o apenas estás empezando.',
    gets: 'Entiendes el negocio, eliges tu plataforma, haces tus números, encuentras un producto y vendes por WhatsApp sin romper la ley.' },
  { id: 'i', name: 'Intermedio', short: 'Vender con método',
    who: 'Ya tienes cuenta en una plataforma o ya hiciste tus primeras ventas.',
    gets: 'Conectas tu tienda, montas tu portafolio de Meta, lanzas campañas, lees resultados y operas pedidos, novedades y billetera cada día.' },
  { id: 'a', name: 'Avanzado', short: 'Escalar y automatizar',
    who: 'Ya vendes cada semana y quieres crecer sin perder margen.',
    gets: 'Mides rentabilidad por ciudad y transportadora, escalas campañas, automatizas con APIs e IA, negocias con proveedores y armas tu equipo.' }
];

window.SM_PLATFORMS = {
  dropi: {
    name: 'Dropi', site: 'https://dropi.co/', register: 'https://app.dropi.co/auth/register',
    best: 'Si quieres el catálogo más grande y vender sin inventario desde el primer día.',
    facts: [
      'Registro gratis y sin mensualidad, según Dropi. Pagas los productos que despachas.',
      'Más de 160.000 productos y unos 2.400 proveedores, según su sitio.',
      'Integraciones: Shopify, WooCommerce, Tiendanube, VTEX, Chatea y Pancake.',
      'Dropi Academy gratuita con el curso "Dropshipper desde cero" (32 lecciones).',
      '10 calculadoras gratuitas: margen, CPA de equilibrio, ROI de anuncios y más.',
      'Conector oficial (MCP) para consultar pedidos, fletes y catálogo desde Claude.'
    ],
    links: [
      { url: 'https://dropi.co/dropi-academy', t: 'Dropi Academy (gratis)' },
      { url: 'https://dropi.co/herramientas', t: 'Calculadoras gratuitas de Dropi' },
      { url: 'https://dropi.co/integraciones', t: 'Integraciones de Dropi' },
      { url: 'https://dropi.co/mcp-claude', t: 'Conector MCP oficial de Dropi' },
      { url: 'https://www.youtube.com/@dropilatam', t: 'Canal de YouTube de Dropi' }
    ]
  },
  mastershop: {
    name: 'Mastershop', site: 'https://mastershop.com/', register: 'https://app.mastershop.com/login',
    best: 'Si quieres reportes de utilidad, control de novedades y automatizaciones de WhatsApp para tus clientes.',
    facts: [
      'Tres tipos de cuenta: dropshipper, proveedor y marca propia.',
      'Mercado de productos: añades productos a "Mis productos". El precio del proveedor no incluye el flete.',
      'Billetera: lo recaudado queda 72 horas como saldo pendiente y luego pasa a disponible.',
      'Reportes de costo y utilidad por pedido, ventas por ciudad y métricas de transportadoras.',
      'Puedes bloquear clientes riesgosos: sus pedidos futuros se cancelan solos.',
      'Apps para Shopify y Tiendanube. Centro de ayuda completo en español.'
    ],
    links: [
      { url: 'https://ayuda.mastershop.com/es/', t: 'Centro de ayuda de Mastershop' },
      { url: 'https://ayuda.mastershop.com/es/article/glosario-de-terminos-mastershop-t3y13r/', t: 'Glosario oficial de Mastershop' },
      { url: 'https://apps.shopify.com/mastershop', t: 'App de Mastershop en Shopify' },
      { url: 'https://www.tiendanube.com/co/tienda-aplicaciones-nube/mastershop', t: 'App de Mastershop en Tiendanube' },
      { url: 'https://www.youtube.com/@MasterShopLat', t: 'Canal de YouTube de Mastershop' }
    ]
  },
  effi: {
    name: 'Effi', site: 'https://effi.com.co/', register: 'https://effi.com.co/registro',
    best: 'Si tienes inventario propio o un proveedor directo y necesitas guías, facturación electrónica e inventario en un solo sistema.',
    facts: [
      'Es un sistema de gestión (ERP) en la nube de Grupo Effi, de Medellín. Tiene prueba gratis y luego plan mensual.',
      'Genera guías con más de 15 transportadoras: Inter Rapidísimo, Coordinadora, Servientrega, Envía, TCC y otras.',
      'Recaudo contraentrega, rastreo público y novedades conciliados con tu cartera.',
      'Dropshipping entre empresas: vendes el inventario de tu proveedor y despacha desde su bodega.',
      'Integraciones: Shopify, WooCommerce y PrestaShop. Facturación electrónica ante la DIAN.',
      'Interfaz para desarrolladores documentada y conexión con asistentes de IA con permisos.'
    ],
    links: [
      { url: 'https://effi.com.co/', t: 'Effi, sitio oficial' },
      { url: 'https://effi.com.co/tracking', t: 'Rastreo público de guías de Effi' },
      { url: 'https://grupoeffi.com/medios', t: 'Formación gratuita de Grupo Effi' },
      { url: 'https://www.effisystems.com/', t: 'EffiSystems' }
    ]
  }
};
window.SM_PLAT_ORDER = ['dropi', 'mastershop', 'effi'];

/* Prueba de ubicación: 0 a 16 puntos. 0–5 principiante, 6–11 intermedio, 12–16 avanzado */
window.SM_PLACEMENT = [
  { q: '¿Has vendido algo por internet?', o: ['Nunca', 'Algunas veces', 'Vendo cada semana'] },
  { q: '¿Tienes cuenta en Dropi, Mastershop o Effi?', o: ['No', 'Sí, pero no he hecho pedidos', 'Sí, y ya despacho pedidos'] },
  { q: '¿Has hecho anuncios en Facebook o Instagram?', o: ['Nunca', 'Solo con el botón "Promocionar"', 'Sí, desde el Administrador de anuncios'] },
  { q: '¿Sabes calcular cuánto puedes pagar como máximo en publicidad por cada pedido?', o: ['No', 'Más o menos', 'Sí, y lo uso para decidir'] },
  { q: '¿Qué haces con un pedido que tiene una novedad de entrega?', o: ['No sé qué es una novedad', 'Sé qué es, pero no la gestiono', 'La gestiono el mismo día'] },
  { q: '¿Cómo está tu portafolio comercial de Meta?', o: ['No sé qué es', 'Lo tengo, pero sin verificar', 'Verificado y con el píxel funcionando'] },
  { q: '¿Cuántos pedidos despachas al mes?', o: ['Ninguno', 'Entre 1 y 50', 'Más de 50'] },
  { q: '¿Usas integraciones o automatizaciones?', o: ['No', 'Mi tienda está conectada a la plataforma', 'Uso APIs, agentes de IA o automatizaciones'] }
];

window.SM_GLOSSARY = [
  ['API', 'Puerta para que dos programas se hablen sin que tú copies datos a mano.'],
  ['API de conversiones (CAPI)', 'Forma de enviar a Meta los eventos de venta desde un servidor.'],
  ['Billetera (wallet)', 'Cuenta dentro de la plataforma donde se acumula tu ganancia de los pedidos entregados.'],
  ['CPA', 'Costo por adquisición: lo que gastas en anuncios para conseguir un pedido.'],
  ['CPA de equilibrio', 'Lo máximo que puedes pagar en anuncios por pedido sin perder dinero.'],
  ['CPM', 'Costo por mil impresiones de un anuncio.'],
  ['CTR', 'Porcentaje de personas que hacen clic en el anuncio.'],
  ['Conjunto de datos', 'Nombre actual del píxel de Meta en el Administrador de eventos.'],
  ['Contraentrega', 'El cliente paga cuando recibe el paquete.'],
  ['ERP', 'Sistema que junta ventas, inventario, facturación y contabilidad. Effi es un ERP.'],
  ['Flete', 'Lo que cobra la transportadora por llevar el paquete.'],
  ['Guía', 'Documento y número de la transportadora para enviar y rastrear un paquete.'],
  ['Indemnización', 'Pago que reclamas a la transportadora por un paquete perdido, roto o cambiado.'],
  ['MCP', 'Conector que deja a un asistente de IA, como Claude, consultar y operar una plataforma con tu permiso.'],
  ['Novedad', 'Problema en la entrega: dirección mala, cliente ausente o rechazo.'],
  ['Portafolio comercial', 'Lugar de Meta donde guardas páginas, Instagram y cuentas publicitarias. Antes se llamaba Business Manager.'],
  ['Recaudo', 'Dinero que cobra la transportadora al entregar un pedido contraentrega.'],
  ['Retracto', 'Derecho del cliente a arrepentirse de una compra en 5 días hábiles desde la entrega.'],
  ['ROAS', 'Ventas divididas por inversión en publicidad.'],
  ['RUT', 'Registro Único Tributario ante la DIAN.'],
  ['Saldo pendiente', 'Dinero de pedidos entregados que todavía no puedes retirar.'],
  ['Tasa de confirmación', 'Pedidos confirmados divididos por pedidos recibidos.'],
  ['Tasa de entrega', 'Pedidos entregados y pagados divididos por pedidos despachados.'],
  ['UVT', 'Unidad de Valor Tributario. Su valor cambia cada año.'],
  ['Webhook', 'Aviso automático que un sistema le manda a otro cuando algo pasa, por ejemplo un pedido nuevo.']
];

window.SM_MODULES = [];
window.YT = function (id, t) { return { url: 'https://www.youtube.com/watch?v=' + id, t: t }; };
window.LK = function (url, t) { return { url: url, t: t }; };
