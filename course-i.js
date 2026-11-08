/* Curso Intermedio: vender con método */
(function () {
var YT = window.YT, LK = window.LK;
window.SM_MODULES.push(

{ id: 'i01', course: 'i', hours: 4, title: 'Contenido que vende en redes',
  goal: 'Armas el perfil de tu tienda, produces videos verticales con ganchos distintos y mides cuál funciona.',
  lessons: [
  { t: 'Perfil y videos que venden',
    easy: ['Perfil claro: qué vendes y cómo comprar.', 'Videos verticales de 15 a 30 segundos.', 'Los primeros 3 segundos deciden.', 'Prueba varios ganchos del mismo producto.'],
    body: [
      'Tu perfil en Instagram o TikTok debe responder en 3 segundos: qué vendes, por qué confiar y cómo comprar (enlace a WhatsApp o a tu landing). Usa cuenta profesional para ver estadísticas.',
      'El formato que más vende hoy es el video vertical corto. Estructura: gancho (0–3 s), problema (3–8 s), demostración del producto (8–20 s), oferta y llamado a la acción (20–30 s).',
      'El gancho es lo más importante. Ejemplos: mostrar el resultado primero, una pregunta ("¿Todavía limpias así?"), o un error común. Graba el mismo video con 3 ganchos distintos y deja que los datos elijan.',
      'Métricas para decidir: retención a los 3 segundos, reproducciones completas, comentarios y mensajes. Un video con muchas vistas y cero mensajes no vende.',
      'El contenido orgánico te enseña qué gancho funciona antes de gastar en anuncios. Lo que gana en orgánico suele ser tu mejor primer anuncio.'
    ],
    steps: ['Perfil profesional', 'Biografía con enlace', 'Graba 3 ganchos', 'Publica', 'Mide a las 48 h', 'Repite el ganador'],
    videos: [YT('MwWi51QsjcA', 'Dropshipping en Colombia sin pagar publicidad')],
    links: [LK('https://ads.tiktok.com/business/creativecenter/', 'TikTok Creative Center')],
    practice: {
      goal: 'Probar 3 ganchos y elegir con datos.',
      tasks: ['Cambia tu Instagram o TikTok a cuenta profesional y pon en la biografía qué vendes y el enlace a tu WhatsApp (wa.me/57tunúmero).', 'Graba 3 videos verticales de 15–20 segundos del mismo producto, con 3 ganchos distintos.', 'Publícalos en días distintos a la misma hora.', 'A las 48 horas anota de cada uno: vistas, % que vio completo y mensajes recibidos.'],
      deliver: 'Tabla de los 3 videos con sus métricas y el ganador.',
      check: [{ q: 'El video A tiene 10.000 vistas y 0 mensajes. El B tiene 2.000 vistas y 12 mensajes. ¿Cuál anunciarías primero?', o: ['El A', 'El B', 'Ninguno', 'Los dos igual'], a: 1, e: 'Los mensajes son intención de compra. Las vistas solas no venden.' }]
    } },
  { t: 'Contenido con IA y de clientes',
    easy: ['La IA te da ideas de ganchos y guiones.', 'Revisa que no prometa salud ni dinero.', 'El contenido de clientes reales convence más.', 'Pide permiso para usarlo.'],
    body: [
      'Un asistente de IA te ayuda a generar 20 ganchos en un minuto, escribir guiones y variar textos. Dale contexto: producto, para quién es, qué problema resuelve y en qué país vendes.',
      'Revisa siempre lo que genera: elimina promesas de salud ("cura", "elimina el dolor"), de dinero y comparaciones falsas. Meta las rechaza y la SIC las sanciona.',
      'El contenido de clientes reales (UGC) convence más que cualquier anuncio: un video del cliente usando el producto. Pídelo después de la entrega y pide autorización para publicarlo.',
      'Algunas plataformas ofrecen herramientas de contenido con IA: Dropi tiene un generador de descripciones y su herramienta ROAX para videos UGC y carruseles.'
    ],
    steps: ['Contexto a la IA', 'Pide 20 ganchos', 'Filtra promesas', 'Elige 3', 'Pide UGC a clientes'],
    videos: [], links: [LK('https://dropi.co/herramientas/descripciones', 'Dropi: generador de descripciones con IA')],
    practice: {
      goal: 'Crear un banco de ganchos seguros.',
      tasks: ['Escribe a una IA (por ejemplo Claude): "Dame 20 ganchos de máximo 8 palabras para un video vertical que venda [producto] a [público] en Colombia. Sin promesas de salud ni de dinero."', 'Tacha los que prometan algo que el producto no garantiza.', 'Elige tus 5 mejores y guárdalos.', 'Escribe el mensaje que enviarás a clientes entregados para pedir un video, con la autorización de uso.'],
      deliver: '5 ganchos aprobados y tu mensaje para pedir UGC.',
      check: [{ q: '¿Cuál gancho debes tachar?', o: ['"¿Todavía organizas así tu cocina?"', '"Elimina el dolor de espalda en 3 días"', '"Mira lo que cabe aquí"', '"El truco que nadie te contó"'], a: 1, e: 'Es una promesa de salud. Meta la rechaza y es publicidad engañosa.' }]
    } }
  ],
  exam: [
    { q: '¿Qué parte del video decide si la gente se queda?', o: ['Los primeros 3 segundos', 'El final', 'La música', 'El logo'], a: 0, e: 'El gancho.' },
    { q: '¿Qué métrica indica intención de compra?', o: ['Mensajes', 'Vistas', 'Seguidores', 'Me gusta'], a: 0, e: 'Los mensajes son clientes interesados.' },
    { q: '¿Qué haces con un gancho de la IA que promete curar?', o: ['Lo uso', 'Lo elimino', 'Lo pauto', 'Lo duplico'], a: 1, e: 'Es engañoso y prohibido.' },
    { q: '¿Qué necesitas para usar el video de un cliente?', o: ['Su autorización', 'Nada', 'Un RUT', 'Pagar a Meta'], a: 0, e: 'Pide permiso.' },
    { q: '¿Para qué publicar orgánico antes de pautar?', o: ['Aprender qué gancho funciona sin gastar', 'Es obligatorio', 'No sirve', 'Para tener seguidores'], a: 0, e: 'El ganador orgánico suele ser el mejor primer anuncio.' },
    { q: 'Estructura de un video que vende', o: ['Gancho, problema, demostración, oferta', 'Logo, música, fin', 'Precio, precio, precio', 'Solo texto'], a: 0, e: 'En 15 a 30 segundos.' }
  ] },

{ id: 'i02', course: 'i', hours: 5, title: 'Landing page y tienda conectada',
  goal: 'Construyes una landing contraentrega legal y la conectas con tu plataforma para que los pedidos entren solos.',
  lessons: [
  { t: 'Las partes de una landing que vende',
    easy: ['Una página, un producto.', 'Titular con el beneficio.', 'Formulario corto.', 'Retracto, garantía y datos visibles.'],
    body: [
      'Una landing contraentrega es una página de un solo producto. Orden recomendado: titular con el beneficio; video corto; 3 beneficios; prueba con reseñas reales; oferta y precio total; formulario corto (nombre, celular, departamento, ciudad, dirección, barrio); preguntas frecuentes; política de retracto y garantía; casilla de autorización de datos.',
      'Cada anuncio debe llevar a la página de su producto, no a un catálogo general. Lo que promete el anuncio debe verse en la landing: si no coinciden, Meta puede rechazar el anuncio.',
      'Formulario corto: cada campo extra baja las conversiones. Pero no quites la dirección completa ni el barrio: ahorrar un campo que causa devoluciones es mal negocio.',
      'La velocidad importa: en celular la página debe cargar en menos de 3 segundos. Comprime imágenes y evita videos pesados al inicio.'
    ],
    steps: ['Titular', 'Video', 'Beneficios', 'Reseñas reales', 'Oferta', 'Formulario', 'Preguntas', 'Retracto y datos'],
    videos: [], links: [],
    practice: {
      goal: 'Diseñar el contenido completo de tu landing antes de construirla.',
      tasks: ['Abre en tu celular la landing de un anuncio que encontraste en la Biblioteca de anuncios y toma captura de cada bloque.', 'En un documento escribe el texto de cada uno de los 9 bloques para tu producto.', 'Revisa tu texto contra el módulo de legal básico: precio total, retracto, garantía y casilla de datos.'],
      deliver: 'Documento con los 9 bloques escritos.',
      check: [{ q: '¿A dónde debe llevar el anuncio de un producto?', o: ['A la página de ese producto', 'Al catálogo general', 'A Google', 'A tu perfil personal'], a: 0, e: 'Una página, un producto, alineada con el anuncio.' }]
    } },
  { t: 'Herramientas para tu tienda',
    easy: ['Shopify: flexible, con mensualidad.', 'WooCommerce: sobre WordPress.', 'Tiendanube: fácil y local.', 'O solo WhatsApp, sin tienda.'],
    body: [
      'Shopify es la más flexible y tiene costo mensual. Para contraentrega usas apps de formulario como Releasit COD Form o EasySell, que crean el pedido con un formulario corto sin pasar por el carrito.',
      'WooCommerce funciona sobre WordPress: no tiene mensualidad de la plataforma, pero pagas hosting y tú mantienes el sitio.',
      'Tiendanube es fácil de usar y tiene apps oficiales de Dropi y Mastershop.',
      'También puedes vender solo por WhatsApp, sin tienda, o usar landings simples que ofrecen las plataformas y JadeMind.',
      'Elige según tu plataforma: la integración con tu proveedor es lo que hace que los pedidos entren solos, sin copiarlos a mano.'
    ],
    steps: ['Elige la tienda', 'Instala el formulario contraentrega', 'Crea la página del producto', 'Conecta tu plataforma', 'Pedido de prueba'],
    videos: [YT('0x3uw9hy1wk', 'Formulario de pago contraentrega en Shopify (Releasit)'), YT('dKgIgCpNSR0', 'Formulario contraentrega con EasySell en Shopify')],
    links: [],
    practice: {
      goal: 'Elegir tu herramienta con criterio.',
      tasks: ['Haz una tabla: Shopify, WooCommerce, Tiendanube, solo WhatsApp. Filas: costo mensual, facilidad, integración con tu plataforma.', 'Llénala con lo que ves en esta lección y en la siguiente.', 'Elige una y escribe por qué.'],
      deliver: 'Tabla y herramienta elegida.',
      check: [{ q: '¿Qué hace una app como Releasit COD Form en Shopify?', o: ['Crea el pedido contraentrega con un formulario corto', 'Hace anuncios', 'Factura', 'Despacha'], a: 0, e: 'Reemplaza el carrito por un formulario.' }]
    } },
  { t: 'Conectar tu tienda con tu plataforma',
    easy: ['La integración trae los pedidos solos.', 'Cada plataforma se conecta distinto.', 'Haz siempre un pedido de prueba.', 'Revisa que el pedido llegue completo.'],
    body: [
      'Sin integración copias cada pedido a mano: lento y con errores. Con integración, el pedido de tu tienda aparece en tu plataforma y, en muchos casos, el estado del envío se actualiza en tu tienda.',
      'Después de conectar, haz siempre un pedido de prueba con tus datos y revisa que lleguen todos los campos: dirección, barrio, ciudad, variante y valor.',
      'Si algo no llega bien, revisa el mapeo de campos (qué campo de la tienda va a qué campo de la plataforma) antes de pautar.'
    ],
    steps: ['Instala la app o plugin', 'Autoriza', 'Vincula productos', 'Pedido de prueba', 'Revisa campos'],
    plat: {
      dropi: { body: ['Dropi se integra con Shopify, WooCommerce, Tiendanube y VTEX.', 'En WooCommerce: creas tu tienda en Dropi para obtener un token y lo pegas en "Dropify - Configuraciones de WooCommerce".', 'En Shopify: verificas la conexión en el plugin Dropify, en "Dropify - Productos": si cargan los productos de Dropi, funcionó.', 'En Tiendanube: instalas Dropify desde la tienda de aplicaciones.'], steps: ['Crea tu tienda en Dropi', 'Instala Dropify', 'Pega el token o autoriza', 'Importa productos', 'Pedido de prueba'] },
      mastershop: { body: ['Mastershop tiene apps oficiales para Shopify y Tiendanube que sincronizan pedidos, productos e inventario.', 'En Tiendanube: instalas la app, aceptas permisos y haces un pedido de prueba para confirmar el flujo completo.'], steps: ['Instala la app', 'Acepta permisos', 'Vincula productos', 'Pedido de prueba'] },
      effi: { body: ['En Effi conectas tu tienda en Integraciones > Integraciones Ecommerce: WooCommerce, Shopify, Mercado Libre y también herramientas de chat como LucidBot o Pancake.', 'Al crear la conexión eliges si cada pedido entra como orden de venta o como remisión de venta, la forma de pago y el vendedor. La pantalla tiene su manual de ayuda.'], steps: ['Integraciones > Integraciones Ecommerce', 'Crear', 'Elige la plataforma', 'Tipo de transacción de venta', 'Pedido de prueba'], shots: [{ src: 'img/effi/integraciones-ecommerce.jpg', cap: 'Integraciones > Integraciones Ecommerce: tus tiendas conectadas.' }, { src: 'img/effi/integraciones-crear.jpg', cap: 'Crear integración: eliges la plataforma (WooCommerce, Shopify, Mercado Libre…).' }] }
    },
    videos: [YT('BFnPJc71Udw', 'Curso gratis: dropshipping con Dropi y Shopify'), YT('GyD3w8M-BRQ', 'Dropshipping con Tiendanube y Mastershop')],
    links: [LK('https://dropi.co/integraciones', 'Dropi: integraciones'), LK('https://www.tiendanube.com/co/tienda-aplicaciones-nube/mastershop', 'Mastershop en Tiendanube'), LK('https://apps.shopify.com/mastershop', 'Mastershop en Shopify'), LK('https://apps.shopify.com/effi', 'Effi en Shopify')],
    practice: {
      goal: 'Conectar tu tienda y comprobar que un pedido llega completo.',
      tasks: ['Si aún no tienes tienda, crea una de prueba en la herramienta que elegiste.'],
      plat: {
        dropi: ['Abre https://dropi.co/integraciones y lee el paso de tu tienda.', 'Instala Dropify en tu tienda y conéctala con tu cuenta (token o autorización).', 'Importa 1 producto y haz un pedido de prueba con tus datos.', 'Revisa en Dropi que el pedido llegó con dirección, barrio y variante.'],
        mastershop: ['Instala la app de Mastershop en Shopify o Tiendanube y acepta los permisos.', 'Vincula 1 producto.', 'Haz un pedido de prueba y revisa en Gestión de pedidos que llegó completo.'],
        effi: ['En Effi ve a Integraciones > Integraciones Ecommerce, toca Crear y conecta tu tienda Shopify o WooCommerce siguiendo el Manual de ayuda de esa pantalla.', 'Elige el tipo de transacción: orden de venta o remisión de venta.', 'Haz un pedido de prueba y revisa que se creó la venta en Effi con todos los datos.']
      },
      deliver: 'Tienda conectada y un pedido de prueba revisado campo por campo.',
      check: [{ q: 'El pedido de prueba llegó sin barrio. ¿Qué haces antes de pautar?', o: ['Pauto igual', 'Reviso el formulario y el mapeo de campos hasta que llegue completo', 'Borro la tienda', 'Nada'], a: 1, e: 'Un campo perdido se convierte en novedades.' }]
    } }
  ],
  exam: [
    { q: '¿Qué no debes quitar del formulario aunque quieras hacerlo corto?', o: ['Dirección completa y barrio', 'El correo', 'La fecha de nacimiento', 'La cédula'], a: 0, e: 'Evitan novedades.' },
    { q: '¿Qué debe coincidir para que Meta no rechace?', o: ['Lo que promete el anuncio y lo que muestra la landing', 'El color', 'La fuente', 'Nada'], a: 0, e: 'Anuncio y página alineados.' },
    { q: 'En WooCommerce con Dropi, ¿dónde pegas el token?', o: ['Dropify - Configuraciones de WooCommerce', 'En Meta', 'En la DIAN', 'En WhatsApp'], a: 0, e: 'Según Dropi.' },
    { q: '¿Con qué tiendas se integra Effi?', o: ['Shopify, WooCommerce y Mercado Libre, entre otras', 'Solo Instagram', 'Ninguna', 'Solo VTEX'], a: 0, e: 'Están en Integraciones > Integraciones Ecommerce.' },
    { q: '¿Qué haces después de conectar la tienda?', o: ['Un pedido de prueba', 'Pautar de inmediato', 'Cerrar sesión', 'Nada'], a: 0, e: 'Siempre prueba.' },
    { q: '¿Cuánto debe tardar la landing en cargar en celular?', o: ['Menos de 3 segundos', '30 segundos', '1 minuto', 'No importa'], a: 0, e: 'La velocidad vende.' }
  ] },

{ id: 'i03', course: 'i', hours: 5, title: 'Meta Ads 1: cuentas, portafolio y verificación',
  goal: 'Dejas tu perfil, página, Instagram y portafolio comercial listos, seguros y verificados.',
  lessons: [
  { t: 'Antes de empezar: perfil, página e Instagram',
    easy: ['Tu perfil personal debe ser real y seguro.', 'Activa verificación en dos pasos.', 'Crea la página de la tienda.', 'Conecta Instagram profesional.'],
    body: [
      'Para anunciar necesitas un perfil personal real de Facebook (Meta bloquea perfiles falsos), una página de Facebook de la tienda y, si quieres, un Instagram profesional conectado.',
      'Activa la autenticación en dos pasos en el Centro de cuentas. Es lo que más protege de robos de cuenta, que son comunes en anunciantes.',
      'La página debe tener nombre, foto, portada, descripción, horario y datos de contacto. Una página vacía genera desconfianza en clientes y en Meta.',
      'Conecta Instagram a la página desde la configuración de la página (Cuentas vinculadas).'
    ],
    steps: ['Perfil real', 'Dos pasos', 'Página de la tienda', 'Instagram profesional', 'Vincular'],
    videos: [], links: [],
    practice: {
      goal: 'Tener tus activos básicos listos y protegidos.',
      tasks: ['Abre https://accountscenter.facebook.com > Contraseña y seguridad > Autenticación en dos pasos y actívala.', 'Crea la página de la tienda (Crear > Página) con logo, portada, descripción y WhatsApp.', 'Pasa Instagram a cuenta profesional y vincúlalo desde la configuración de la página.'],
      deliver: 'Dos pasos activos, página completa e Instagram vinculado.',
      check: [{ q: '¿Qué es lo que más protege tu cuenta de robos?', o: ['La autenticación en dos pasos', 'Una foto bonita', 'Tener muchos amigos', 'Cambiar el nombre'], a: 0, e: 'Es la medida más efectiva.' }]
    } },
  { t: 'Crear tu portafolio comercial',
    easy: ['Antes se llamaba Business Manager.', 'Guarda página, Instagram y cuentas publicitarias.', 'Nombre igual al de tus documentos.', 'Usa un correo del negocio.'],
    body: [
      'El portafolio comercial (antes Business Manager) es donde Meta guarda tus activos de negocio: páginas, cuentas de Instagram, cuentas publicitarias, conjuntos de datos (píxel) y números de WhatsApp.',
      'Se crea en business.facebook.com. Usa el nombre legal del negocio exactamente como aparece en tu RUT o Cámara de Comercio: lo vas a necesitar para la verificación.',
      'Usa un correo del negocio que revises a diario. Meta envía ahí avisos de seguridad y rechazos.',
      'Después agrega tu página y tu Instagram en Configuración > Cuentas.'
    ],
    steps: ['business.facebook.com', 'Crear portafolio', 'Nombre legal', 'Correo del negocio', 'Agregar página e Instagram'],
    videos: [YT('AW7UmJqZc6g', 'Crear un portafolio comercial en Meta Business Suite 2026'), YT('YBZxXx4wM3E', 'Meta Business Suite: crea tu portafolio comercial')],
    links: [LK('https://www.facebook.com/business/help/1710077379203657', 'Meta: crear un portafolio comercial')],
    practice: {
      goal: 'Crear el portafolio con los datos correctos.',
      tasks: ['Abre https://business.facebook.com y crea el portafolio.', 'Escribe el nombre exactamente como en tu RUT.', 'Confirma el correo del negocio desde el enlace que llega.', 'En Configuración > Cuentas agrega tu página y tu Instagram.'],
      deliver: 'Portafolio creado con página e Instagram.',
      check: [{ q: '¿Por qué el nombre del portafolio debe ser igual al del RUT?', o: ['Para pasar la verificación del negocio', 'Por estética', 'No importa', 'Para pagar menos'], a: 0, e: 'Meta compara letra por letra.' }]
    } },
  { t: 'Verificación del negocio y accesos',
    easy: ['Verificar desbloquea funciones.', 'Datos exactos a tus documentos.', 'Puede tardar hasta 14 días hábiles.', 'Ten dos administradores.'],
    body: [
      'La verificación del negocio desbloquea funciones de publicidad, pagos y desarrollo, por ejemplo la API de WhatsApp. No es lo mismo que la insignia azul de Meta Verified.',
      'Pasos oficiales: entra al Centro de seguridad; Iniciar verificación; escribe nombre legal, dirección, teléfono y sitio web exactamente como en tus documentos; sube documentos oficiales (en Colombia, RUT o certificado de Cámara de Comercio); elige cómo confirmar (correo, teléfono, SMS, WhatsApp o dominio).',
      'Meta puede tardar hasta 14 días hábiles. Si cambias los datos del negocio, debes verificar de nuevo.',
      'Accesos: agrega al menos dos administradores de confianza con dos pasos activos. A agencias o a JadeMind dales acceso como socio solo a los activos que necesitan. Revisa los accesos cada mes.'
    ],
    steps: ['Centro de seguridad', 'Iniciar verificación', 'Datos exactos', 'Documentos', 'Confirmación', 'Segundo administrador'],
    warn: 'Si el nombre del documento no coincide con el del portafolio, te rechazan.',
    videos: [YT('IHfnxT9exOE', 'Cómo verificar tu portafolio comercial en Meta'), YT('XSmHdTtUShY', 'Enviar la verificación del portafolio comercial'), YT('iUf3SLCRz2Y', 'Configuración del portafolio comercial en Meta')],
    links: [LK('https://www.facebook.com/business/help/2058515294227817', 'Meta: verificar tu negocio'), LK('https://es-la.facebook.com/business/help/2342133782492969', 'Meta: problemas de verificación')],
    practice: {
      goal: 'Iniciar la verificación sin errores y asegurar los accesos.',
      tasks: ['Escanea tu RUT o certificado de Cámara de Comercio en PDF.', 'Abre https://business.facebook.com/settings > Información del negocio y compara letra por letra con el documento.', 'Abre el Centro de seguridad y, si aparece Iniciar verificación, síguelo.', 'En Usuarios > Personas agrega un segundo administrador de confianza.'],
      deliver: 'Verificación enviada (o lista para enviar) y dos administradores.',
      check: [{ q: '¿Cuánto puede tardar Meta en verificar?', o: ['Hasta 14 días hábiles', '5 minutos', '1 año', 'Nunca verifica'], a: 0, e: 'Según la guía oficial.' }]
    } }
  ],
  exam: [
    { q: '¿Cómo se llamaba antes el portafolio comercial?', o: ['Business Manager', 'Fan page', 'Ads Center', 'Meta Pay'], a: 0, e: 'Cambió de nombre.' },
    { q: '¿Qué documento sirve en Colombia para verificar?', o: ['RUT o certificado de Cámara de Comercio', 'Tarjeta de cumpleaños', 'Recibo de luz de otro', 'Ninguno'], a: 0, e: 'Documentos oficiales del negocio.' },
    { q: '¿La verificación del negocio es la insignia azul?', o: ['No, son cosas distintas', 'Sí', 'A veces', 'Solo en Instagram'], a: 0, e: 'Meta Verified es otra cosa.' },
    { q: '¿Cuántos administradores mínimo?', o: ['Dos de confianza', 'Uno', 'Diez', 'Ninguno'], a: 0, e: 'Para no perder acceso.' },
    { q: '¿Qué pasa si cambias los datos del negocio?', o: ['Debes verificar de nuevo', 'Nada', 'Te pagan', 'Se borra la página'], a: 0, e: 'La verificación se pierde.' },
    { q: '¿Dónde activas los dos pasos?', o: ['Centro de cuentas, Contraseña y seguridad', 'En el anuncio', 'En WhatsApp', 'En Dropi'], a: 0, e: 'accountscenter.facebook.com.' }
  ] },

{ id: 'i04', course: 'i', hours: 4, title: 'Meta Ads 2: cuenta publicitaria, pago, píxel y API',
  goal: 'Creas la cuenta publicitaria con los datos correctos, controlas el gasto y mides ventas con píxel y API de conversiones.',
  lessons: [
  { t: 'Cuenta publicitaria y método de pago',
    easy: ['Zona horaria Bogotá y moneda COP.', 'No se pueden cambiar después.', 'Pon un límite de gasto.', 'Revisa la facturación cada semana.'],
    body: [
      'En la configuración del portafolio, en Cuentas publicitarias, crea una cuenta nueva. Elige zona horaria America/Bogota y moneda peso colombiano: después no se pueden cambiar.',
      'En Facturación y pagos agrega tu tarjeta o el método local disponible. Pon un límite de gasto de la cuenta igual a tu presupuesto de pruebas: Meta no gastará más de eso.',
      'Revisa la facturación cada semana. Un cobro rechazado detiene tus anuncios y puede limitar la cuenta.',
      'Si una agencia o JadeMind te ayuda, dales acceso a la cuenta publicitaria desde el portafolio, nunca tu contraseña personal.'
    ],
    steps: ['Cuentas publicitarias', 'Crear cuenta', 'Bogotá y COP', 'Método de pago', 'Límite de gasto'],
    tip: 'La zona horaria y la moneda no se pueden cambiar. Revísalas antes de guardar.',
    videos: [YT('L9tMV3tGbow', 'Cómo configurar el método de pago en Meta Ads'), YT('djpvrRM4HqE', 'Cómo agregar un método de pago con Meta Business')],
    links: [LK('https://es-la.facebook.com/business/help/530540643805698', 'Meta: configuración del negocio')],
    practice: {
      goal: 'Tener una cuenta publicitaria lista y con tope de gasto.',
      tasks: ['En https://business.facebook.com/settings abre Cuentas > Cuentas publicitarias > Agregar > Crear.', 'Elige America/Bogota y COP.', 'Agrega tu método de pago.', 'Pon un límite de gasto igual a tu presupuesto de aprendizaje.'],
      deliver: 'Cuenta creada con zona, moneda, pago y límite.',
      check: [{ q: '¿Qué no se puede cambiar después de crear la cuenta?', o: ['Zona horaria y moneda', 'El nombre', 'El método de pago', 'El límite'], a: 0, e: 'Por eso se revisan antes.' }]
    } },
  { t: 'Píxel, conjunto de datos y API de conversiones',
    easy: ['El píxel mide desde el navegador.', 'La API de conversiones mide desde el servidor.', 'Usa los dos con el mismo event_id.', 'En contraentrega reporta la compra al confirmar.'],
    body: [
      'En el Administrador de eventos creas un conjunto de datos (antes píxel). El píxel mide lo que pasa en el navegador: visitas, formularios, compras.',
      'La API de conversiones (CAPI) envía los eventos desde tu servidor o tu plataforma. Es más confiable porque no la bloquean los navegadores ni los bloqueadores de anuncios.',
      'Si mandas el mismo evento por ambos, Meta lo cuenta una sola vez cuando coinciden el nombre del evento y el event_id dentro de 48 horas. Sin eso verás compras duplicadas.',
      'En contraentrega conviene reportar la compra cuando el pedido se confirma, no cuando se llena el formulario. Así Meta aprende a buscar clientes que sí reciben.',
      'Siempre prueba con la pestaña "Probar eventos" antes de pautar.'
    ],
    steps: ['Administrador de eventos', 'Conjunto de datos', 'Instalar en la landing', 'Activar CAPI', 'Probar eventos'],
    videos: [YT('bxr_ZtfFNn4', 'Cómo se crea el conjunto de datos o píxel'), YT('ysffB0XT-BU', 'Meta Pixel y API de conversiones paso a paso')],
    links: [LK('https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events', 'Meta: deduplicar eventos del píxel y del servidor')],
    practice: {
      goal: 'Ver un evento real llegando a Meta.',
      tasks: ['Abre https://business.facebook.com/events_manager2 > Conectar orígenes de datos > Web.', 'Nómbralo como tu tienda y pon la URL de tu landing.', 'Instálalo en tu tienda (Shopify y Tiendanube lo piden en su configuración de Meta).', 'Abre Probar eventos, haz un pedido de prueba y mira qué eventos aparecen.'],
      deliver: 'Captura de "Probar eventos" con tu evento recibido.',
      check: [{ q: '¿Qué evita que Meta cuente dos veces la misma compra?', o: ['El mismo nombre de evento y event_id en píxel y CAPI', 'Borrar el píxel', 'Pagar más', 'Nada'], a: 0, e: 'Es la deduplicación.' }]
    } }
  ],
  exam: [
    { q: '¿Dónde se crea el píxel hoy?', o: ['Administrador de eventos, como conjunto de datos', 'En WhatsApp', 'En la DIAN', 'En Dropi'], a: 0, e: 'Se llama conjunto de datos.' },
    { q: '¿Por qué usar la API de conversiones?', o: ['Mide desde el servidor y no la bloquean los navegadores', 'Es obligatoria por ley', 'Es más barata', 'No sirve'], a: 0, e: 'Más confiable.' },
    { q: '¿Cuándo reportar la compra en contraentrega?', o: ['Al confirmar el pedido', 'Al ver el anuncio', 'Nunca', 'Al año'], a: 0, e: 'Así Meta aprende a buscar compradores reales.' },
    { q: '¿Para qué el límite de gasto?', o: ['Para no pasarte de tu presupuesto', 'Para gastar más', 'Es decorativo', 'Para Meta'], a: 0, e: 'Controla el riesgo.' },
    { q: '¿Qué pasa si se rechaza un cobro?', o: ['Se detienen los anuncios', 'Nada', 'Te regalan crédito', 'Se borra la página'], a: 0, e: 'Revisa la facturación.' },
    { q: '¿Cómo das acceso a una agencia?', o: ['Desde el portafolio, como socio', 'Con tu contraseña', 'Por correo', 'No se puede'], a: 0, e: 'Nunca compartas la contraseña.' }
  ] },

{ id: 'i05', course: 'i', hours: 5, title: 'Meta Ads 3: tu primera campaña',
  goal: 'Armas una campaña con estructura de prueba, la lanzas a WhatsApp o a tu landing y sabes qué revisar el primer día.',
  lessons: [
  { t: 'Cómo está armada una campaña',
    easy: ['Campaña: el objetivo.', 'Conjunto: público, presupuesto y ubicación.', 'Anuncio: lo que ve la persona.', 'Empieza con 1 campaña, 1 conjunto, 3 anuncios.'],
    body: [
      'Una campaña tiene tres niveles. Campaña: eliges el objetivo (Interacción para WhatsApp o Ventas para la landing). Conjunto de anuncios: defines público, presupuesto diario, ubicaciones y dónde ocurre la conversión. Anuncio: el video o imagen, el texto y el botón.',
      'Estructura de prueba recomendada para empezar: 1 campaña, 1 conjunto con público amplio en Colombia (o tus ciudades con buena entrega), y 3 anuncios con ganchos distintos. Así Meta reparte y te muestra cuál funciona.',
      'Público: los algoritmos actuales funcionan mejor con públicos amplios. Restringe solo por país, ciudades con cobertura y edad mínima si tu producto lo requiere.',
      'Presupuesto: define un diario que puedas sostener al menos 3 días sin tocar. Cambiar todo cada pocas horas no deja aprender al sistema.'
    ],
    steps: ['Objetivo', 'Conjunto amplio', 'Presupuesto diario', '3 anuncios', 'Revisión', 'Publicar'],
    videos: [], links: [LK('https://dropi.co/blog/facebook-ads-dropshipping-metricas', 'Dropi: Facebook Ads para dropshipping, métricas y rentabilidad')],
    practice: {
      goal: 'Diseñar tu campaña en papel antes de gastar.',
      tasks: ['Escribe: objetivo, ciudades, edad, presupuesto diario y por cuántos días.', 'Escribe los 3 ganchos de tus 3 anuncios (usa los ganadores del módulo de contenido).', 'Calcula: presupuesto diario × 3 días. ¿Cabe en tu presupuesto de aprendizaje?'],
      deliver: 'Plan de campaña de una página.',
      check: [{ q: '¿Cuál es la estructura recomendada para empezar?', o: ['1 campaña, 1 conjunto, 3 anuncios', '10 campañas de 1 anuncio', '1 anuncio y ya', '5 conjuntos con públicos mínimos'], a: 0, e: 'Concentra el presupuesto y compara ganchos.' }]
    } },
  { t: 'Campaña a WhatsApp paso a paso',
    easy: ['Conecta WhatsApp a la página.', 'Objetivo Interacción, destino WhatsApp.', 'Mensaje de bienvenida con pregunta.', 'Responde rápido.'],
    body: [
      'Primero conecta tu número de WhatsApp Business a la página de Facebook (Configuración de la página > Cuentas vinculadas > WhatsApp).',
      'En el Administrador de anuncios: Crear > Interacción > en el conjunto, lugar de la conversión: Apps de mensajes > WhatsApp.',
      'Escribe un mensaje de bienvenida con una pregunta fácil ("¿Para qué ciudad lo quieres?"). Una pregunta abre la conversación mejor que un saludo vacío.',
      'Una campaña a WhatsApp solo funciona si respondes en minutos. Si no puedes atender en horario de anuncios, no la actives o usa un agente de IA.'
    ],
    steps: ['Vincular WhatsApp', 'Crear > Interacción', 'Destino WhatsApp', 'Presupuesto', '3 anuncios', 'Mensaje de bienvenida', 'Publicar'],
    videos: [YT('og1AaATEeQU', 'Cómo crear una campaña de WhatsApp en Meta Ads'), YT('gjvI_O4MEyU', 'Cómo conectar WhatsApp a Facebook Ads'), YT('I5TTHAQGmkM', 'Campañas de WhatsApp en Meta Ads paso a paso')],
    links: [],
    practice: {
      goal: 'Dejar la campaña lista para publicar.',
      tasks: ['Vincula tu WhatsApp a la página desde Cuentas vinculadas.', 'Abre https://adsmanager.facebook.com > Crear > Interacción. En el conjunto elige WhatsApp.', 'Pon el presupuesto de tu plan, sube tus 3 anuncios y escribe un mensaje de bienvenida con pregunta.', 'Revisa y publica solo si puedes responder en minutos. Anota fecha y hora.'],
      deliver: 'Campaña creada (publicada o en borrador) con 3 anuncios.',
      check: [{ q: '¿Qué hace que una campaña a WhatsApp fracase aunque el anuncio sea bueno?', o: ['Responder tarde', 'Tener 3 anuncios', 'Usar público amplio', 'Tener página'], a: 0, e: 'Sin respuesta rápida, el interés se enfría.' }]
    } },
  { t: 'Campaña a tu landing',
    easy: ['Objetivo Ventas.', 'El píxel debe estar probado.', 'Evento: la compra al confirmar.', 'Landing igual al anuncio.'],
    body: [
      'Si vendes con landing, usa el objetivo Ventas y elige tu conjunto de datos y el evento de conversión (por ejemplo Purchase). Sin píxel probado no lances: Meta no sabrá a quién buscar.',
      'Al principio, si tienes pocas compras, puedes optimizar a un evento anterior (por ejemplo, "Iniciar compra" o el envío del formulario) y luego pasar a compra cuando tengas volumen.',
      'Revisa que el texto del anuncio, la oferta y el precio sean los mismos en la landing.',
      'El primer día no toques nada salvo errores evidentes. Revisa a las 24 y 48 horas.'
    ],
    steps: ['Objetivo Ventas', 'Conjunto de datos', 'Evento', 'Presupuesto', 'Anuncios con URL', 'Publicar'],
    videos: [], links: [],
    practice: {
      goal: 'Configurar una campaña de ventas en borrador.',
      tasks: ['En el Administrador de anuncios crea una campaña Ventas en borrador.', 'Elige tu conjunto de datos y el evento que viste en "Probar eventos".', 'Agrega 1 anuncio con la URL de tu landing y revisa que el precio coincida.'],
      deliver: 'Campaña de ventas en borrador con el evento correcto.',
      check: [{ q: '¿Qué necesitas sí o sí antes de una campaña de ventas?', o: ['Un píxel o conjunto de datos probado', 'Mil seguidores', 'Una tienda física', 'Nada'], a: 0, e: 'Sin medición, Meta no optimiza.' }]
    } }
  ],
  exam: [
    { q: '¿Qué se define en el conjunto de anuncios?', o: ['Público, presupuesto y ubicación', 'El color del logo', 'El RUT', 'La factura'], a: 0, e: 'Es el nivel medio.' },
    { q: 'Objetivo para campaña a WhatsApp', o: ['Interacción con destino WhatsApp', 'Alcance', 'Reconocimiento', 'Tráfico a Google'], a: 0, e: 'Apps de mensajes > WhatsApp.' },
    { q: '¿Cuántos días mínimo sin tocar?', o: ['Al menos 3', '1 hora', '0', '30'], a: 0, e: 'Deja aprender al sistema.' },
    { q: '¿Qué público funciona mejor hoy al empezar?', o: ['Amplio, con restricciones mínimas', 'Muy pequeño', 'Solo amigos', 'Solo seguidores'], a: 0, e: 'El algoritmo encuentra al comprador.' },
    { q: '¿Qué abre mejor la conversación en WhatsApp?', o: ['Una pregunta fácil', 'Un saludo vacío', 'Nada', 'Un precio sin contexto'], a: 0, e: 'Ejemplo: "¿Para qué ciudad?"' },
    { q: 'Con pocas compras, ¿a qué puedes optimizar al inicio?', o: ['Un evento anterior, como el formulario', 'A nada', 'A me gusta', 'A seguidores'], a: 0, e: 'Luego pasas a compra.' }
  ] },

{ id: 'i06', course: 'i', hours: 4, title: 'Meta Ads 4: leer resultados y decidir',
  goal: 'Lees CPM, CTR y costo por resultado, los cruzas con tus entregas y decides qué apagar, corregir o mantener.',
  lessons: [
  { t: 'Las métricas que importan',
    easy: ['CPM: cuánto cuesta mostrarte.', 'CTR: si el anuncio atrae.', 'Costo por resultado: cuánto pagas por conversación o pedido.', 'Lo que manda: costo por pedido entregado.'],
    body: [
      'CPM es el costo por mil impresiones. Si sube mucho, compites con más anunciantes o tu público es pequeño.',
      'CTR es el porcentaje de personas que hacen clic. Un CTR bajo dice que el gancho o la imagen no atrae.',
      'Costo por resultado: lo que pagas por conversación (WhatsApp) o por compra (landing). Es tu CPA de anuncios.',
      'La métrica que manda en contraentrega es el costo por pedido entregado: inversión ÷ pedidos entregados. Meta no la conoce: tú la calculas con los datos de tu plataforma.',
      'Los benchmarks de internet cambian mucho mes a mes. Úsalos como referencia, no como meta.'
    ],
    steps: ['CPM', 'CTR', 'Costo por resultado', 'Pedidos entregados', 'Costo por entregado'],
    videos: [], links: [LK('https://www.superads.ai/facebook-ads-costs/cpm-cost-per-mille/colombia', 'Superads: CPM en Colombia'), LK('https://dropi.co/herramientas/roi', 'Dropi: calculadora de ROI de anuncios')],
    practice: {
      goal: 'Calcular tu métrica real con datos de Meta y de tu plataforma.',
      tasks: ['Caso: invertiste $300.000. Meta reporta 40 conversaciones. Tomaste 25 pedidos, confirmaste 20, se entregaron 15.', 'Calcula: costo por conversación, CPA por pedido recibido y costo por pedido entregado.', 'Compara el costo por pedido entregado con tu CPA de equilibrio del módulo de números.'],
      deliver: 'Las tres métricas calculadas y tu conclusión.',
      check: [{ q: '¿Cuál es el costo por pedido entregado del caso?', o: ['$7.500', '$12.000', '$15.000', '$20.000'], a: 3, e: '$300.000 ÷ 15 entregados = $20.000. Meta te mostraría $7.500 por conversación.' }]
    } },
  { t: 'Decidir: apagar, corregir o mantener',
    easy: ['Revisa cada 48 horas.', 'Apaga lo que no trae resultados.', 'Corrige el gancho si el CTR es bajo.', 'Mantén lo que trae pedidos entregados.'],
    body: [
      'Regla de 48 horas: después de 2 días con presupuesto suficiente, cada anuncio ya mostró tendencia.',
      'Apaga un anuncio que gastó más de tu CPA de equilibrio sin traer un solo pedido.',
      'Corrige (con un anuncio nuevo, no editando el viejo) cuando el CTR es bajo: cambia el gancho o los primeros segundos.',
      'Mantén los que traen pedidos por debajo de tu CPA de equilibrio. No los toques: cambiar un anuncio que funciona reinicia su aprendizaje.',
      'Lleva un registro: fecha, anuncio, gasto, resultados, pedidos entregados y decisión. Ese registro es tu mejor maestro.'
    ],
    steps: ['48 horas', 'Compara con tu CPA', 'Apaga', 'Corrige con anuncio nuevo', 'Mantén', 'Registra'],
    videos: [], links: [LK('https://www.facebook.com/business/help/254088759757736', 'Meta: estado de tus cuentas y políticas')],
    practice: {
      goal: 'Tomar decisiones con una regla, no con la emoción.',
      tasks: ['Caso: CPA de equilibrio $18.000. Anuncio A: gastó $40.000 y trajo 0 pedidos. B: CTR 0,4 % y CPA $25.000. C: CPA $12.000 con 70 % de entrega.', 'Escribe la decisión para cada uno: apagar, corregir o mantener.', 'Crea tu hoja de registro con las columnas de la lección.'],
      deliver: 'Decisiones del caso y hoja de registro.',
      check: [{ q: '¿Qué haces con el anuncio C?', o: ['Lo apago', 'Lo mantengo sin tocar', 'Le cambio el texto', 'Lo duplico 10 veces'], a: 1, e: 'Está por debajo del CPA de equilibrio. Cambiarlo reinicia el aprendizaje.' }]
    } }
  ],
  exam: [
    { q: '¿Qué indica un CTR bajo?', o: ['El gancho no atrae', 'Todo va bien', 'El flete es caro', 'Meta falla'], a: 0, e: 'Cambia el gancho.' },
    { q: 'La métrica que manda en contraentrega', o: ['Costo por pedido entregado', 'Me gusta', 'CPM', 'Seguidores'], a: 0, e: 'La calculas con tu plataforma.' },
    { q: '¿Cada cuánto revisar para decidir?', o: ['48 horas', '1 hora', '1 mes', 'Nunca'], a: 0, e: 'Regla de 48 horas.' },
    { q: '¿Cómo corriges un anuncio?', o: ['Con un anuncio nuevo', 'Editando el que funciona', 'Borrando la cuenta', 'Subiendo el precio'], a: 0, e: 'No reinicies lo que funciona.' },
    { q: 'Invertiste $200.000 y se entregaron 10. ¿Costo por entregado?', o: ['$20.000', '$10.000', '$2.000', '$200.000'], a: 0, e: '200.000 ÷ 10.' },
    { q: '¿Cuándo apagas un anuncio?', o: ['Gastó más que tu CPA de equilibrio sin pedidos', 'Cuando tiene buen CPA', 'Siempre a las 2 horas', 'Nunca'], a: 0, e: 'Regla clara.' }
  ] },

{ id: 'i07', course: 'i', hours: 5, title: 'Operación diaria: confirmar, despachar y resolver novedades',
  goal: 'Montas tu rutina diaria en tu plataforma: confirmas y despachas sin errores, y resuelves novedades el mismo día.',
  lessons: [
  { t: 'La rutina de la mañana',
    easy: ['Primero novedades.', 'Luego confirmaciones.', 'Luego despachos.', 'Al final, registro.'],
    body: [
      'Orden de la rutina diaria: 1) novedades de ayer (cada hora perdida baja la probabilidad de entrega), 2) confirmar pedidos nuevos, 3) generar guías y despachar, 4) responder clientes, 5) registrar indicadores.',
      'Las novedades primero porque son pedidos que ya pagaste (flete y anuncio) y están a punto de devolverse.',
      'Confirma en bloques: mensajes de /confirmar a todos los nuevos, llamada a los que no responden, despacho solo a confirmados.',
      'Una rutina de 45 a 60 minutos cada mañana vale más que horas sueltas durante el día.'
    ],
    steps: ['Novedades', 'Confirmaciones', 'Guías y despacho', 'Respuestas', 'Registro'],
    plat: {
      dropi: { body: ['En Dropi filtras los pedidos por estado y revisas las novedades desde tu panel. El conector MCP oficial permite pedirle a Claude, por ejemplo, "lista mis pedidos con novedad de hoy" o "compara fletes a Pasto".'], steps: ['Filtra novedades', 'Filtra pendientes', 'Confirma', 'Genera despacho'] },
      mastershop: { body: ['En Mastershop: Operación > Gestión de novedades para resolver; Gestión de pedidos para confirmar (uno a uno o masivo) y generar guías (uno a uno o masivo).', 'Usa los contadores de cada estado para ver si algo se represó.'], steps: ['Gestión de novedades', 'Confirmación masiva', 'Generación masiva de guías', 'Revisa contadores'] },
      effi: { body: ['En Effi: revisas Logística > Novedades de guías, creas las guías en Logística > Guías de transporte (Crear; para mover varias a la vez está Cambiar estados en lote), sacas el Reporte de alistamiento y los rótulos en PDF, las agrupas en Relaciones de despacho y, si la transportadora recoge, la pides en Recolecciones de transportadoras.'], steps: ['Novedades de guías', 'Guías de transporte > Crear', 'Relaciones de despacho', 'Recolecciones', 'Imprimir guías'], shots: [{ src: 'img/effi/guias-lista.jpg', cap: 'Guías de transporte: Crear, Cambiar estados en lote, Reporte de alistamiento y Exportar rótulos.' }, { src: 'img/effi/relaciones-despacho.jpg', cap: 'Logística > Relaciones de despacho: agrupa las guías que le entregas a la transportadora.' }] }
    },
    videos: [], links: [LK('https://ayuda.mastershop.com/es/article/como-confirmar-un-pedido-masivamente-dqjjtt/', 'Mastershop: confirmar pedidos masivamente'), LK('https://ayuda.mastershop.com/es/article/como-generar-la-guia-de-un-pedido-masivamente-1lmcvqg/', 'Mastershop: generar guías masivamente')],
    practice: {
      goal: 'Crear tu procedimiento diario escrito.',
      tasks: ['Escribe tu rutina con hora de inicio y tiempo para cada paso.'],
      plat: {
        dropi: ['En Dropi anota qué filtros usas para ver novedades y pedidos pendientes.', 'Opcional: lee https://dropi.co/mcp-claude para ver cómo consultar pedidos desde Claude.'],
        mastershop: ['Lee los artículos de confirmación y guías masivas (enlaces abajo) y anota los pasos en tu rutina.'],
        effi: ['Anota en tu rutina los pasos de Effi: Novedades de guías, Guías de transporte, Relaciones de despacho, Recolecciones e impresión.']
      },
      deliver: 'Procedimiento diario de una página.',
      check: [{ q: '¿Qué atiendes primero en la mañana?', o: ['Novedades', 'Anuncios nuevos', 'Redes', 'Reportes del mes'], a: 0, e: 'Son pedidos a punto de devolverse.' }]
    } },
  { t: 'Resolver novedades',
    easy: ['Contacta al cliente el mismo día.', 'Corrige el dato o pide reintento.', 'Registra la causa.', 'Aprende qué ciudades fallan.'],
    body: [
      'Tipos de novedad: dirección errada o incompleta, cliente ausente, cliente no contesta, rechazo, zona de difícil acceso, paquete averiado.',
      'Para cada una: contacta al cliente por WhatsApp y llamada, obtén el dato correcto o una nueva fecha, y regístralo en la plataforma como solución: reintento de entrega, cambio de dirección o devolución.',
      'Registra la causa de cada novedad en tu hoja. En un mes sabrás qué ciudades, transportadoras y productos te generan más problemas.',
      'Si un cliente rechaza sin razón, es una señal para revisar tu confirmación: probablemente no confirmó de verdad.'
    ],
    steps: ['Identifica el tipo', 'Contacta al cliente', 'Obtén solución', 'Registra en la plataforma', 'Anota la causa'],
    plat: {
      dropi: { body: ['En Dropi gestionas la novedad desde el pedido: registras la solución que acordaste con el cliente para que la transportadora intente de nuevo.'], steps: ['Pedido con novedad', 'Contacta al cliente', 'Registra solución', 'Seguimiento'] },
      mastershop: { body: ['Mastershop tiene dos soluciones documentadas: "Reintento de entrega" (pides a la transportadora que vuelva a entregar) y "Cambio de dirección" dentro de la misma ciudad.'], steps: ['Gestión de novedades', 'Elige solución', 'Reintento o cambio de dirección', 'Confirma'] },
      effi: { body: ['En Effi las ves en Logística > Novedades de guías (el Dashboard te avisa cuántas tienes pendientes) y registras lo que hiciste en Logística > Soluciones de novedades.'], steps: ['Novedades de guías', 'Contacta al cliente', 'Soluciones de novedades', 'Seguimiento'], shots: [{ src: 'img/effi/novedades.jpg', cap: 'Logística > Novedades de guías: filtra por tipo "Requiere solución de la empresa".' }, { src: 'img/effi/soluciones-novedades.jpg', cap: 'Logística > Soluciones de novedades: el registro de cómo resolviste cada una.' }] }
    },
    videos: [], links: [LK('https://ayuda.mastershop.com/es/article/solucion-de-novedad-con-reintento-de-entrega-1prokso/', 'Mastershop: reintento de entrega'), LK('https://ayuda.mastershop.com/es/article/solucion-de-novedad-cambio-de-direccion-1if649d/', 'Mastershop: cambio de dirección')],
    practice: {
      goal: 'Responder las novedades más comunes sin pensar.',
      tasks: ['Escribe un mensaje de WhatsApp para cada tipo: dirección errada, ausente, no contesta, rechazo.', 'Guárdalos como respuestas rápidas /dir, /ausente, /nocontesta, /rechazo.', 'Crea en tu hoja de registro una pestaña "Novedades" con: fecha, guía, ciudad, transportadora, tipo, solución, resultado.'],
      deliver: '4 respuestas rápidas y la pestaña de novedades.',
      check: [{ q: 'El cliente cambió de dirección pero sigue en la misma ciudad. En Mastershop, ¿qué solución usas?', o: ['Cambio de dirección', 'Devolución', 'Bloquear cliente', 'Nada'], a: 0, e: 'El cambio de dirección aplica dentro de la misma ciudad.' }]
    } }
  ],
  exam: [
    { q: '¿Por qué las novedades van primero?', o: ['Ya pagaste flete y anuncio y están por devolverse', 'Son más fáciles', 'Por costumbre', 'No van primero'], a: 0, e: 'Cada hora cuenta.' },
    { q: '¿Qué es un reintento de entrega?', o: ['Pedir a la transportadora que vuelva a entregar', 'Un descuento', 'Un anuncio', 'Una factura'], a: 0, e: 'Solución de novedad.' },
    { q: 'En Effi, ¿dónde registras cómo resolviste una novedad?', o: ['Soluciones de novedades', 'Tablas maestras', 'Por WhatsApp', 'No se puede'], a: 0, e: 'Está en Logística, junto a Novedades de guías.' },
    { q: '¿Para qué registrar la causa de cada novedad?', o: ['Aprender qué ciudades, productos y transportadoras fallan', 'Por gusto', 'Para la DIAN', 'No sirve'], a: 0, e: 'Datos para decidir.' },
    { q: 'Un cliente rechaza sin razón. ¿Qué revisas?', o: ['Tu proceso de confirmación', 'El color del empaque', 'Tu foto de perfil', 'Nada'], a: 0, e: 'Probablemente no confirmó de verdad.' },
    { q: '¿Despachas pedidos sin confirmar?', o: ['No', 'Sí, siempre', 'Solo los viernes', 'Depende del clima'], a: 0, e: 'Solo confirmados.' }
  ] },

{ id: 'i08', course: 'i', hours: 4, title: 'Billetera, garantías y postventa',
  goal: 'Controlas tu dinero en la plataforma, gestionas garantías y reclamos según la ley y conviertes clientes en recompra.',
  lessons: [
  { t: 'Controlar la billetera',
    easy: ['Revisa la billetera cada semana.', 'Distingue saldo total y disponible.', 'Concilia con tus pedidos entregados.', 'Retira con un plan.'],
    body: [
      'Cada semana compara: pedidos entregados según tu hoja contra lo acreditado en la billetera. Si no cuadra, reclama con el número de guía.',
      'No confundas saldo total con saldo disponible. El total incluye dinero que aún no se puede retirar o que puede revertirse.',
      'Plan de retiro: deja en la plataforma lo que necesitas para fletes o recargas, separa la caja de anuncios de la próxima semana y retira el resto. Retirar todo y quedarte sin caja para anuncios frena el negocio.',
      'Ten en cuenta los costos de retiro: algunas plataformas cobran por transferencia. Retirar menos veces y en montos mayores puede salir más barato.'
    ],
    steps: ['Concilia entregados vs. acreditado', 'Revisa disponible', 'Separa caja de anuncios', 'Retira el resto'],
    plat: {
      dropi: { body: ['En Dropi tu ganancia va a la billetera y de ahí a tu cuenta bancaria o billetera digital registrada. Según su sitio, el pago llega 24 horas después de la entrega confirmada.', 'Necesitas identidad validada y datos bancarios completos para retirar.'], steps: ['Billetera', 'Historial', 'Concilia', 'Retira'] },
      mastershop: { body: ['En Mastershop: saldo pendiente (72 horas), saldo disponible (retirable) y saldo total. Hay recarga de billetera, adelanto de saldo con requisitos y retiros a cuenta bancaria con costo y monto mínimo.', 'Si aparece "no hay saldo suficiente", revisa que tengas saldo positivo para cubrir fletes y servicios.'], steps: ['Billetera', 'Balance y movimientos', 'Pendiente vs disponible', 'Solicitar retiro'] },
      effi: { body: ['En Effi el recaudo llega a tu EffiWallet. En EffiWallet > Movimientos de wallets cruzas cada recaudo de venta con sus fletes (con recaudo, sin recaudo, devolución) y retiras con Solicitudes de retiro de wallet. Como es un ERP, el registro contable va en CONTAEFFI.'], steps: ['EffiWallet > Movimientos', 'Filtra recaudos y fletes', 'Cruza con guías entregadas', 'Solicitud de retiro'], shots: [{ src: 'img/effi/wallet-movimientos.jpg', cap: 'EffiWallet > Movimientos de wallets: cruza recaudos y fletes. Datos tapados.' }, { src: 'img/effi/wallet-retiros.jpg', cap: 'EffiWallet > Solicitudes de retiro de wallet.' }] }
    },
    videos: [], links: [LK('https://ayuda.mastershop.com/es/article/como-solicitar-retiros-de-mi-billetera-3ttqdh/', 'Mastershop: solicitar retiros'), LK('https://ayuda.mastershop.com/es/article/cuanto-es-el-monto-minimo-que-puedo-retirar-de-mi-billetera-a18dr6/', 'Mastershop: monto mínimo de retiro'), LK('https://ayuda.mastershop.com/es/article/que-es-el-adelanto-de-saldo-16w8ik3/', 'Mastershop: adelanto de saldo')],
    practice: {
      goal: 'Hacer tu primera conciliación semanal.',
      tasks: ['Caso: tu hoja dice 18 pedidos entregados esta semana, con ganancia esperada de $25.000 cada uno. La billetera muestra $400.000 acreditados.', 'Calcula la diferencia y escribe qué harías.'],
      plat: {
        dropi: ['En Dropi abre la billetera y ubica el historial de movimientos.'],
        mastershop: ['En Mastershop abre Billetera > Balance y movimientos y lee el artículo del monto mínimo de retiro.'],
        effi: ['En Effi abre EffiWallet > Movimientos de wallets y filtra por tipo "Recaudo de venta".']
      },
      deliver: 'Diferencia calculada y acción.',
      check: [{ q: '¿Cuál es la diferencia del caso?', o: ['$0', '$50.000 a favor tuyo', '$50.000 que faltan', '$450.000'], a: 2, e: '18 × 25.000 = $450.000 esperados vs. $400.000 acreditados: faltan $50.000. Revisa guía por guía y reclama.' }]
    } },
  { t: 'Garantías, reclamos y recompra',
    easy: ['Respondes tú, gestionas con el proveedor.', 'Cumple el retracto y la garantía.', 'Mensaje a los 3 días.', 'Pide reseña y ofrece complemento.'],
    body: [
      'Ante un reclamo respondes tú al cliente, por escrito y rápido. Luego gestionas la garantía con el proveedor por la plataforma.',
      'Si el cliente ejerce el retracto a tiempo, acepta y devuelve el dinero en máximo 30 días calendario. La SIC ha dicho que no puedes obligarlo a aceptar un bono cuando procede devolver el dinero.',
      'Si el paquete llegó roto, incompleto o cambiado, además de la garantía puedes reclamar a la transportadora.',
      'Postventa: a los 3 días pregunta cómo le fue, pide una reseña o un video y ofrece un complemento. Un cliente satisfecho que recompra cuesta mucho menos que uno nuevo. Para promociones necesitas su autorización de datos.'
    ],
    steps: ['Responde por escrito', 'Gestiona con el proveedor', 'Cumple el plazo', 'Mensaje a 3 días', 'Reseña', 'Complemento'],
    plat: {
      dropi: { body: ['En Dropi gestionas la garantía con el proveedor del producto desde la plataforma. Revisa la política de garantía en la ficha antes de vender.'], steps: ['Pedido', 'Garantía', 'Proveedor', 'Respuesta al cliente'] },
      mastershop: { body: ['En Mastershop usas el módulo de garantías con "+ Solicitar Garantía" para productos incompletos, averiados o equivocados.', 'Para pérdidas o daños de la transportadora usas requerimientos y puedes pedir indemnización.'], steps: ['Garantías', '+ Solicitar Garantía', 'Evidencias', 'Seguimiento'] },
      effi: { body: ['En Effi registras la devolución de venta y, si aplica, el ajuste de inventario. Si trabajas con un proveedor, gestionas el cambio con él.'], steps: ['Devolución de venta', 'Ajuste de inventario', 'Nueva guía si hay cambio'] }
    },
    videos: [], links: [LK('https://ayuda.mastershop.com/es/article/como-solicitar-una-garantia-por-producto-incompleto-averiado-o-equivocado-183fn6p/', 'Mastershop: solicitar una garantía'), LK('https://sedeelectronica.sic.gov.co/noticias/se-arrepintio-de-una-compra-y-no-sabe-que-hacer', 'SIC: derecho de retracto')],
    practice: {
      goal: 'Tener respuestas modelo y tu secuencia de postventa.',
      tasks: ['Escribe 3 respuestas modelo: producto defectuoso, retracto, demora.', 'Guárdalas como /defecto, /retracto, /demora.', 'Escribe tu mensaje de postventa de 3 días con pedido de reseña y oferta de complemento.'],
      deliver: '3 respuestas y el mensaje de postventa.',
      check: [{ q: 'Un cliente pide su dinero dentro del plazo de retracto y le ofreces un bono. Él insiste en el dinero. ¿Qué haces?', o: ['Le niegas', 'Le devuelves el dinero en máximo 30 días', 'Le das otro bono', 'Lo bloqueas'], a: 1, e: 'No puedes obligarlo a aceptar un bono.' }]
    } }
  ],
  exam: [
    { q: '¿Qué saldo puedes retirar?', o: ['El disponible', 'El total', 'El pendiente', 'Cualquiera'], a: 0, e: 'El total incluye dinero no liberado.' },
    { q: '¿Para qué conciliar cada semana?', o: ['Detectar diferencias y reclamarlas', 'Por gusto', 'Para Meta', 'No sirve'], a: 0, e: 'Cada peso cuenta.' },
    { q: 'En Mastershop, ¿cómo pides una garantía?', o: ['Módulo de garantías > + Solicitar Garantía', 'Por Instagram', 'En la billetera', 'No se puede'], a: 0, e: 'Según su ayuda.' },
    { q: '¿Quién responde al cliente en un reclamo?', o: ['Tú', 'El proveedor', 'La transportadora', 'Nadie'], a: 0, e: 'Luego gestionas con el proveedor.' },
    { q: '¿Por qué no retirar todo el saldo?', o: ['Necesitas caja para anuncios y fletes', 'Es ilegal', 'Lo cobra Meta', 'No importa'], a: 0, e: 'Sin caja se frena el negocio.' },
    { q: '¿Qué necesitas para enviar promociones?', o: ['Autorización de datos', 'Nada', 'Un RUT del cliente', 'Su clave'], a: 0, e: 'Ley 1581.' }
  ] }
);
})();
