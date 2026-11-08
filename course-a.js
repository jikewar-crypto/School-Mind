/* Curso Avanzado: escalar y automatizar */
(function () {
var YT = window.YT, LK = window.LK;
window.SM_MODULES.push(

{ id: 'a01', course: 'a', hours: 5, title: 'Finanzas del vendedor que escala',
  goal: 'Mides rentabilidad por ciudad, transportadora y producto, proyectas caja y diriges el negocio con un tablero semanal.',
  lessons: [
  { t: 'Rentabilidad por ciudad y transportadora',
    easy: ['El promedio esconde pérdidas.', 'Mide entrega por ciudad.', 'Mide entrega por transportadora.', 'Apaga lo que pierde.'],
    body: [
      'Un 75 % de entrega promedio puede ser 90 % en Medellín y 50 % en una ciudad lejana. Si anuncias igual a todas, la ciudad mala se come la ganancia de la buena.',
      'Exporta tus pedidos de los últimos 60 días y haz una tabla dinámica: ciudad (o departamento) por estado final. Calcula la tasa de entrega de cada una.',
      'Haz lo mismo por transportadora. Las plataformas te dejan elegir o cambiar la transportadora: usar la que mejor entrega en cada zona sube tu tasa sin gastar más en anuncios.',
      'Con esos datos: excluye de tus anuncios las ciudades con entrega por debajo de tu punto de equilibrio, o pide pago anticipado para ellas.',
      'Repite el análisis cada mes. La logística cambia con las temporadas.'
    ],
    steps: ['Exporta 60 días', 'Tabla por ciudad', 'Tabla por transportadora', 'Compara con tu equilibrio', 'Excluye o ajusta'],
    plat: {
      dropi: { body: ['Exporta tus órdenes desde Dropi para analizarlas en una hoja de cálculo. Con el conector MCP puedes pedir a Claude comparar costos y tiempos de transportadoras por destino.'], steps: ['Exportar órdenes', 'Hoja de cálculo', 'Tabla dinámica', 'Comparar transportadoras'] },
      mastershop: { body: ['Mastershop trae reportes listos: Ventas por ciudad, Ventas por departamento, Métricas de transportadoras, Utilidad por pedidos y Costo por pedido. Están en Ventas > Reportes.'], steps: ['Ventas', 'Reportes', 'Ventas por ciudad', 'Métricas de transportadoras', 'Utilidad por pedidos'] },
      effi: { body: ['Effi muestra en el Dashboard y en Logística > Guías de transporte > Ver más gráficos las guías por transportadora y por estado, los días promedio de entrega y las devoluciones a origen. El bloque Wallets muestra recaudos, fletes y utilidad. Todo se exporta a Excel.'], steps: ['Dashboard', 'Gráficos de guías', 'Exportar a Excel', 'Analizar'] }
    },
    videos: [], links: [LK('https://ayuda.mastershop.com/es/article/donde-encuentro-el-reporte-de-metricas-de-transportadoras-1w6l33h/', 'Mastershop: métricas de transportadoras'), LK('https://ayuda.mastershop.com/es/article/como-puedo-ver-el-reporte-de-utilidad-por-pedidos-2ulg3a/', 'Mastershop: utilidad por pedidos')],
    practice: {
      goal: 'Encontrar dónde ganas y dónde pierdes.',
      tasks: ['Caso: Medellín 120 despachados, 102 entregados. Cali 80 despachados, 52 entregados. Pasto 40 despachados, 18 entregados. Tu entrega de equilibrio es 68 %.', 'Calcula la tasa de cada ciudad y decide qué haces con cada una.'],
      plat: {
        dropi: ['Exporta tus pedidos reales de Dropi y repite el ejercicio con tus ciudades.'],
        mastershop: ['Abre Ventas > Reportes > Ventas por ciudad y Métricas de transportadoras y anota tus 3 peores ciudades.'],
        effi: ['Abre los indicadores por transportadora de tus guías y anota la de peor entrega.']
      },
      deliver: 'Tabla de entrega por ciudad y decisión para cada una.',
      check: [{ q: 'Con el caso, ¿qué ciudad está por debajo del equilibrio?', o: ['Medellín (85 %)', 'Cali (65 %) y Pasto (45 %)', 'Solo Pasto', 'Ninguna'], a: 1, e: 'Medellín 85 %, Cali 65 %, Pasto 45 %. Las dos últimas están por debajo de 68 %.' }]
    } },
  { t: 'Proyección de caja y tablero semanal',
    easy: ['Proyecta 4 semanas.', 'Incluye anuncios, fletes y retiros.', 'Un tablero con 8 indicadores.', 'Decide los lunes.'],
    body: [
      'Proyección de caja a 4 semanas: para cada semana escribe el saldo inicial, lo que entrará (pedidos entregados que se liberarán) y lo que saldrá (anuncios, recargas, herramientas, tu sueldo). Si alguna semana queda negativa, baja el gasto antes de que pase.',
      'Tablero semanal con 8 indicadores: inversión en anuncios, pedidos recibidos, tasa de confirmación, tasa de entrega, costo por pedido entregado, ganancia neta, novedades sin resolver y saldo disponible.',
      'Revisa el tablero cada lunes y toma máximo 3 decisiones. Escribe cuáles fueron y revisa el lunes siguiente si funcionaron.',
      'Separa siempre tu sueldo de la ganancia del negocio. Reinvertir todo sin pagarte hace que abandones antes de tiempo.'
    ],
    steps: ['Saldo inicial', 'Entradas', 'Salidas', 'Saldo final', 'Tablero', '3 decisiones'],
    videos: [], links: [LK('https://dropi.co/herramientas/recuperacion', 'Dropi: calculadora de recuperación de inversión')],
    practice: {
      goal: 'Construir tu tablero y tu proyección.',
      tasks: ['En https://sheets.google.com crea una hoja con 2 pestañas: "Tablero" (8 indicadores por semana) y "Caja" (4 semanas).', 'Caso para probar: saldo inicial $1.000.000, entradas por semana $600.000, anuncios $700.000 por semana, herramientas $50.000.', 'Calcula el saldo al final de la semana 4.'],
      deliver: 'Hoja con las dos pestañas y el caso calculado.',
      check: [{ q: 'Con el caso, ¿cuál es el saldo al final de la semana 4?', o: ['$1.000.000', '$600.000', '$400.000', '−$200.000'], a: 2, e: 'Cada semana baja $150.000 (600.000 − 750.000). 1.000.000 − 4 × 150.000 = $400.000. Si sigues así, en la semana 7 quedas en negativo.' }]
    } }
  ],
  exam: [
    { q: '¿Por qué medir entrega por ciudad?', o: ['El promedio esconde ciudades que pierden', 'Por gusto', 'Lo exige Meta', 'No sirve'], a: 0, e: 'Te deja excluir o ajustar.' },
    { q: 'En Mastershop, ¿dónde ves métricas de transportadoras?', o: ['Ventas > Reportes', 'Billetera', 'Referidos', 'Configuraciones'], a: 0, e: 'Reportes de ventas.' },
    { q: '¿Qué haces con una ciudad bajo tu equilibrio?', o: ['Excluirla o pedir pago anticipado', 'Anunciar más ahí', 'Nada', 'Bajar precio'], a: 0, e: 'Deja de perder.' },
    { q: '¿Cuántas decisiones por semana recomienda la lección?', o: ['Máximo 3', '20', 'Ninguna', '1 por hora'], a: 0, e: 'Foco.' },
    { q: '¿Por qué separar tu sueldo?', o: ['Para sostenerte y no abandonar', 'Es ilegal no hacerlo', 'Por Meta', 'No importa'], a: 0, e: 'La constancia sostiene el negocio.' },
    { q: 'Si la proyección queda negativa en la semana 3...', o: ['Bajas el gasto antes', 'Esperas', 'Pides un préstamo', 'Ignoras'], a: 0, e: 'Para eso proyectas.' }
  ] },

{ id: 'a02', course: 'a', hours: 5, title: 'Escalar campañas en Meta',
  goal: 'Escalas presupuesto y creativos sin romper la rentabilidad, y proteges tu cuenta de bloqueos.',
  lessons: [
  { t: 'Sistema de pruebas creativas',
    easy: ['El creativo es la palanca más grande.', 'Prueba ganchos cada semana.', 'Un cambio a la vez.', 'Guarda lo que gana.'],
    body: [
      'Con públicos amplios, el creativo (video, gancho, oferta) es lo que más cambia tus resultados. Escalar es, sobre todo, encontrar nuevos creativos ganadores.',
      'Sistema semanal: 1 campaña de pruebas con presupuesto fijo; cada semana 3 a 5 creativos nuevos; los que bajen del CPA de equilibrio pasan a la campaña de escala.',
      'Cambia una variable por prueba: el gancho, el formato o la oferta. Si cambias todo a la vez no sabes qué funcionó.',
      'Banco de creativos: guarda cada ganador con su gancho, su CPA y la fecha. Los creativos se cansan: cuando la frecuencia sube y el CTR baja, prepara el reemplazo.'
    ],
    steps: ['Campaña de pruebas', '3 a 5 creativos por semana', 'Una variable', 'Ganadores a escala', 'Banco de creativos'],
    videos: [], links: [],
    practice: {
      goal: 'Diseñar tu calendario de pruebas de 4 semanas.',
      tasks: ['En tu hoja crea la pestaña "Creativos": fecha, gancho, formato, oferta, gasto, CPA, entregados, decisión.', 'Planea 4 semanas: qué variable pruebas cada semana y con cuántos creativos.', 'Escribe 5 ganchos nuevos para la semana 1.'],
      deliver: 'Pestaña de creativos y plan de 4 semanas.',
      check: [{ q: '¿Por qué probar una sola variable a la vez?', o: ['Para saber qué causó el resultado', 'Es más barato', 'Lo exige Meta', 'No importa'], a: 0, e: 'Si cambias todo, no aprendes nada.' }]
    } },
  { t: 'Escalar presupuesto y evitar bloqueos',
    easy: ['Sube de a 20 % cuando el costo por entregado está bajo el equilibrio.', 'Escala horizontal con creativos nuevos.', 'Sin promesas de salud ni antes y después.', 'Ten respaldo de activos.'],
    body: [
      'Escalado vertical: sube el presupuesto del conjunto ganador de a 20 % cada 2 o 3 días, solo si el costo por pedido entregado sigue por debajo del equilibrio.',
      'Escalado horizontal: duplica el ganador en nuevos conjuntos o lleva nuevos creativos a la campaña de escala. Advantage+ y las campañas con presupuesto de campaña pueden repartir mejor cuando tienes varios ganadores.',
      'Escalar consume caja: más anuncios hoy, más dinero en tránsito. Revisa tu proyección antes de duplicar presupuesto.',
      'Para evitar bloqueos: sin afirmaciones de salud, sin "antes y después", sin atributos personales ("¿Tienes diabetes?"), sin productos prohibidos y con la landing igual al anuncio. Ten un segundo administrador y una segunda cuenta publicitaria dentro del portafolio verificado.',
      'Si te restringen, apela por los canales oficiales en el servicio de ayuda para empresas. No crees cuentas nuevas falsas: empeora todo.'
    ],
    steps: ['Confirma rentabilidad', 'Sube 20 %', 'Espera 2 a 3 días', 'Agrega creativos', 'Revisa caja', 'Cumple políticas'],
    warn: 'Escalar sin caja para esperar los recaudos puede dejarte sin dinero para pagar los anuncios.',
    videos: [], links: [LK('https://www.facebook.com/business-support-home', 'Meta: servicio de ayuda para empresas'), LK('https://dropi.co/herramientas/breakeven', 'Dropi: presupuesto diario seguro y CPA de equilibrio')],
    practice: {
      goal: 'Planear un escalado seguro con números.',
      tasks: ['Caso: tu conjunto ganador gasta $100.000 al día con costo por entregado de $15.000 y equilibrio de $20.000.', 'Escribe el presupuesto de los próximos 4 incrementos de 20 %.', 'Abre https://dropi.co/herramientas/breakeven con tus números y anota el presupuesto diario seguro que sugiere.'],
      deliver: 'Plan de incrementos y presupuesto diario seguro.',
      check: [{ q: 'Después de dos incrementos de 20 % desde $100.000, ¿cuánto gastas al día?', o: ['$120.000', '$140.000', '$144.000', '$200.000'], a: 2, e: '100.000 × 1,2 = 120.000; × 1,2 = $144.000.' }]
    } }
  ],
  exam: [
    { q: '¿Qué palanca cambia más los resultados con públicos amplios?', o: ['El creativo', 'La hora', 'El nombre de la campaña', 'El color de la página'], a: 0, e: 'Gancho, formato, oferta.' },
    { q: '¿Cuánto subir el presupuesto por vez?', o: ['Alrededor de 20 %', '300 %', '1 %', 'Todo de una'], a: 0, e: 'Escalado gradual.' },
    { q: '¿Cuándo escalas?', o: ['Con costo por entregado bajo el equilibrio', 'Cuando hay muchos me gusta', 'Siempre', 'Nunca'], a: 0, e: 'Rentabilidad confirmada.' },
    { q: '¿Qué anuncio puede ser rechazado?', o: ['"¿Tienes diabetes? Prueba esto"', '"Organiza tu cocina"', '"Envío a todo Colombia"', '"Paga al recibir"'], a: 0, e: 'Atributo personal y salud.' },
    { q: 'Te restringen la cuenta. ¿Qué haces?', o: ['Apelar por canales oficiales', 'Crear cuentas falsas', 'Comprar cuentas', 'Nada'], a: 0, e: 'Las cuentas falsas empeoran todo.' },
    { q: '¿Qué indica creativo cansado?', o: ['Sube la frecuencia y baja el CTR', 'Más ventas', 'Menor CPM', 'Nada'], a: 0, e: 'Prepara el reemplazo.' }
  ] },

{ id: 'a03', course: 'a', hours: 4, title: 'Logística avanzada y control de riesgo',
  goal: 'Reduces devoluciones con reglas por zona, bloqueas clientes riesgosos y recuperas dinero con requerimientos e indemnizaciones.',
  lessons: [
  { t: 'Reglas para bajar devoluciones',
    easy: ['Transportadora por zona.', 'Confirmación reforzada en zonas difíciles.', 'Bloquea clientes que siempre devuelven.', 'Usa datos, no intuición.'],
    body: [
      'Con tu análisis por ciudad y transportadora define reglas: qué transportadora usar en cada zona, qué ciudades requieren llamada además del WhatsApp y cuáles requieren pago anticipado.',
      'Clientes riesgosos: un cliente con varias devoluciones seguidas probablemente devolverá otra vez. Algunas plataformas te dejan bloquearlo o te muestran su probabilidad de entrega antes de despachar.',
      'Confirmación reforzada: en zonas difíciles pide una referencia extra y una hora en la que estará en casa, y envía la guía apenas se genere.',
      'Mide cada regla: si después de un mes la tasa no mejora, cámbiala.'
    ],
    steps: ['Transportadora por zona', 'Confirmación reforzada', 'Pago anticipado donde aplique', 'Bloqueo de riesgosos', 'Medir'],
    plat: {
      dropi: { body: ['El conector MCP de Dropi incluye la "huella digital del comprador": estima la probabilidad de entrega de un cliente antes de despachar. También compara costo y tiempo de transportadoras por destino.'], steps: ['Conecta el MCP', 'Consulta la huella del comprador', 'Compara transportadoras', 'Decide antes de despachar'] },
      mastershop: { body: ['En Mastershop, en Ventas > Clientes, puedes bloquear a un cliente riesgoso: sus pedidos futuros se cancelan automáticamente. También puedes cambiar la transportadora de un pedido.'], steps: ['Ventas', 'Clientes', 'Bloquear cliente', 'Cambiar transportadora'] },
      effi: { body: ['En Effi defines la transportadora al crear cada guía y tienes indicadores por transportadora para elegir. Como ERP, el historial del cliente (tercero) te muestra sus compras y devoluciones.'], steps: ['Terceros', 'Historial del cliente', 'Elegir transportadora', 'Indicadores'] }
    },
    videos: [], links: [LK('https://ayuda.mastershop.com/es/article/como-gestionar-a-mis-clientes-en-mastershop-wt1alr/', 'Mastershop: gestionar clientes'), LK('https://dropi.co/mcp-claude', 'Dropi: conector MCP oficial')],
    practice: {
      goal: 'Escribir tus reglas logísticas.',
      tasks: ['Con tu análisis por ciudad del módulo anterior, escribe 3 reglas: transportadora por zona, confirmación reforzada y pago anticipado.'],
      plat: {
        dropi: ['Lee https://dropi.co/mcp-claude y anota qué herramientas te ayudarían a aplicar tus reglas.'],
        mastershop: ['Abre Ventas > Clientes y revisa si tienes clientes con más de una devolución.'],
        effi: ['Revisa el historial de 3 clientes en Terceros y sus devoluciones.']
      },
      deliver: '3 reglas escritas y los clientes riesgosos identificados.',
      check: [{ q: 'En Mastershop, ¿qué pasa al bloquear a un cliente?', o: ['Sus pedidos futuros se cancelan automáticamente', 'Se le cobra multa', 'Nada', 'Se borra la tienda'], a: 0, e: 'Según su centro de ayuda.' }]
    } },
  { t: 'Requerimientos e indemnizaciones',
    easy: ['Paquete perdido, roto o cambiado: reclama.', 'Guarda evidencias.', 'Usa el canal formal de la plataforma.', 'Haz seguimiento.'],
    body: [
      'Cuando una transportadora pierde, daña o cambia un paquete, puedes pedir una indemnización. Si no reclamas, pierdes producto, flete y la venta.',
      'Evidencias: número de guía, fotos del paquete y del contenido al recibir (pídelas al cliente), fecha y descripción.',
      'Usa siempre el canal formal de la plataforma: así queda registro y tiempos de respuesta.',
      'Lleva una pestaña de reclamos con el estado de cada uno. El dinero recuperado se suma a tu margen.'
    ],
    steps: ['Detecta el problema', 'Reúne evidencias', 'Abre el requerimiento', 'Seguimiento', 'Registra lo recuperado'],
    plat: {
      dropi: { body: ['En Dropi, la plataforma actúa como intermediario con las transportadoras. Abre el caso desde soporte con la guía y las evidencias.'], steps: ['Soporte', 'Guía y evidencias', 'Seguimiento'] },
      mastershop: { body: ['En Mastershop usas el módulo de requerimientos con "+ Nuevo requerimiento" para retrasos, daños o pérdidas, y para pedir información de una guía. Las indemnizaciones aplican a productos extraviados, rotos, incompletos o cambiados.'], steps: ['Requerimientos', '+ Nuevo requerimiento', 'Tipo', 'Evidencias', 'Seguimiento'] },
      effi: { body: ['En Effi, cuando procede, la guía pasa al estado "Indemnización por siniestro". El reclamo se gestiona con Effi a partir de la guía y su novedad, y el abono se revisa en EffiWallet > Movimientos de wallets.'], steps: ['Guía', 'Novedad', 'Reclamo', 'Estado indemnización', 'Movimientos de wallet'] }
    },
    videos: [], links: [LK('https://ayuda.mastershop.com/es/article/como-solicitar-una-indemnizacion-a-la-transportadora-por-un-producto-extraviado-roto-incompleto-o-cambiado-1kyhlt3/', 'Mastershop: solicitar indemnización'), LK('https://ayuda.mastershop.com/es/article/como-solicitar-un-requerimientos-a-una-transportadora-mg0y70/', 'Mastershop: requerimientos a transportadora')],
    practice: {
      goal: 'Estar listo para reclamar con evidencias.',
      tasks: ['Escribe el mensaje que enviarás al cliente para pedir fotos del paquete y del contenido.', 'Crea la pestaña "Reclamos": fecha, guía, tipo, evidencias, estado, valor recuperado.'],
      plat: {
        dropi: ['Ubica en Dropi el canal de soporte para reclamos y anota el procedimiento.'],
        mastershop: ['Lee el artículo de indemnizaciones (enlace) y anota los pasos.'],
        effi: ['Ubica en Guías de transporte el estado "Indemnización por siniestro" y anota dónde verías el abono en EffiWallet.']
      },
      deliver: 'Mensaje de evidencias y pestaña de reclamos.',
      check: [{ q: '¿Qué evidencia es clave para una indemnización?', o: ['Número de guía y fotos del paquete y contenido', 'Tu foto de perfil', 'Un audio largo', 'Nada'], a: 0, e: 'Sin evidencias, no hay reclamo.' }]
    } }
  ],
  exam: [
    { q: '¿Qué es la huella del comprador en el MCP de Dropi?', o: ['Una estimación de probabilidad de entrega', 'Una foto', 'Una factura', 'Un anuncio'], a: 0, e: 'Te ayuda a decidir antes de despachar.' },
    { q: '¿Para qué el módulo de requerimientos de Mastershop?', o: ['Retrasos, daños, pérdidas e información de guías', 'Hacer anuncios', 'Facturar', 'Crear productos'], a: 0, e: 'Gestión con transportadoras.' },
    { q: '¿Qué haces en una zona con entrega muy baja?', o: ['Confirmación reforzada o pago anticipado', 'Más anuncios', 'Nada', 'Bajar precio'], a: 0, e: 'Reglas por zona.' },
    { q: '¿Por qué reclamar a la transportadora?', o: ['Recuperas dinero perdido', 'Por venganza', 'No sirve', 'Por la DIAN'], a: 0, e: 'Se suma a tu margen.' },
    { q: '¿Cada cuánto revisar las reglas?', o: ['Cada mes', 'Nunca', 'Cada hora', 'Cada año'], a: 0, e: 'Mide y ajusta.' },
    { q: '¿Qué canal usar para reclamar?', o: ['El formal de la plataforma', 'Comentarios en Instagram', 'Ninguno', 'Un correo cualquiera'], a: 0, e: 'Deja registro.' }
  ] },

{ id: 'a04', course: 'a', hours: 5, title: 'Automatización, APIs e inteligencia artificial',
  goal: 'Entiendes qué son una API, un webhook y un MCP, sabes qué ofrece cada plataforma y automatizas tus tareas repetitivas.',
  lessons: [
  { t: 'API, webhook y MCP en palabras sencillas',
    easy: ['API: puerta para que dos programas se hablen.', 'Webhook: aviso automático cuando algo pasa.', 'MCP: conector para que una IA use una plataforma.', 'Todo esto reemplaza copiar y pegar.'],
    body: [
      'Una API es una puerta por la que un programa le pide datos o acciones a otro. Ejemplo: tu tienda le dice a la plataforma "crea este pedido" sin que tú lo copies.',
      'Un webhook es un aviso automático: cuando pasa algo (pedido nuevo, guía entregada), un sistema le avisa a otro al instante.',
      'Un MCP (Model Context Protocol) es un conector que deja a un asistente de IA como Claude consultar y operar una plataforma con tu permiso. En vez de entrar al panel, le preguntas en lenguaje natural.',
      'Herramientas sin código como Make o Zapier conectan apps con webhooks y APIs: por ejemplo, "cuando entra un pedido en la tienda, agrégalo a mi hoja y envíame un WhatsApp".',
      'Regla de seguridad: las llaves de API y tokens son como contraseñas. No las compartas por chat, no las pegues en páginas públicas y dales el menor permiso posible.'
    ],
    steps: ['Identifica la tarea repetida', 'Busca si hay integración nativa', 'Si no, API o webhook', 'Prueba con datos falsos', 'Activa y vigila'],
    plat: {
      dropi: { body: ['Dropi no publica una API abierta en su sitio. Ofrece integraciones nativas (Shopify, WooCommerce con token, Tiendanube, VTEX, Chatea, Pancake) y un MCP oficial en mcp.dropi.co/mcp.', 'El MCP expone: crear y listar pedidos, ver detalle y estados, cotizar envíos y comparar transportadoras, buscar productos y categorías, y la huella del comprador. Se autentica en oauth.dropi.co y cada cuenta tiene una sesión activa a la vez.'], steps: ['Claude > Configuración > Conectores', 'Agregar conector personalizado', 'URL mcp.dropi.co/mcp', 'Inicia sesión en oauth.dropi.co', 'Autoriza'] },
      mastershop: { body: ['Mastershop tiene un módulo de Integraciones para flujos automáticos con tiendas, CRM y contabilidad, apps para Shopify y Tiendanube, y automatizaciones de WhatsApp que envían al cliente su guía y cada cambio de estado. No publica una API abierta en su centro de ayuda: consulta con soporte.'], steps: ['Integraciones', 'Conecta tu tienda', 'Activa automatizaciones de WhatsApp', 'Consulta a soporte por API'] },
      effi: { body: ['Effi publica su documentación de API dentro de la app, en Integraciones > Documentación API (con colección de Postman): consulta y crea terceros, inventario, ventas, logística, EffiWallet y más. Integraciones > Webhooks avisa de cada cambio.', 'Para conectar Claude, ChatGPT u otra IA usa Inteligencia artificial > Conectores MCP para IA con la API key de un usuario (Administración > Usuarios del sistema > Ver más detalles). La conexión no tiene costo por plan y cada uso queda registrado.'], steps: ['Integraciones > Documentación API', 'Usuario con perfil de permisos mínimos', 'Copia su API key', 'Conecta tu IA o sistema', 'Revisa Conectores MCP para IA'], shots: [{ src: 'img/effi/documentacion-api.jpg', cap: 'Integraciones > Documentación API: autenticación con la API key del usuario, límites y endpoints.' }, { src: 'img/effi/conectores-mcp.jpg', cap: 'Inteligencia artificial > Conectores MCP para IA: consumo del mes y aplicaciones autorizadas.' }] }
    },
    videos: [], links: [LK('https://dropi.co/mcp-claude', 'Dropi: MCP para Claude'), LK('https://dropi.co/blog/mcp-de-dropi-guia-oficial', 'Dropi: guía oficial del MCP'), LK('https://ayuda.mastershop.com/es/article/glosario-de-terminos-mastershop-t3y13r/', 'Mastershop: glosario (integraciones y automatizaciones)'), LK('https://effi.com.co/#ia', 'Effi: inteligencia artificial')],
    practice: {
      goal: 'Encontrar tus 3 tareas más automatizables y conectar tu primera automatización.',
      tasks: ['Durante un día anota cada tarea que repites más de 5 veces (copiar pedidos, enviar guías, responder precios).', 'Elige las 3 que más tiempo te quitan.'],
      plat: {
        dropi: ['Si usas Claude, conecta el MCP de Dropi siguiendo https://dropi.co/mcp-claude#pasos y pregúntale: "¿Cuántos pedidos tengo en novedad hoy?".'],
        mastershop: ['Activa las automatizaciones de WhatsApp de seguimiento de envío en tu cuenta y haz un pedido de prueba para ver el mensaje.'],
        effi: ['Abre Integraciones > Documentación API en Effi y ubica los endpoints de Logística y de EffiWallet.']
      },
      deliver: 'Lista de 3 tareas y una automatización probada o solicitada.',
      check: [{ q: '¿Qué es un webhook?', o: ['Un aviso automático cuando algo pasa', 'Un anuncio', 'Una contraseña', 'Un producto'], a: 0, e: 'Un sistema avisa a otro al instante.' },
              { q: '¿Dónde se autentica el MCP de Dropi?', o: ['En oauth.dropi.co', 'En cualquier página', 'Por WhatsApp', 'No se autentica'], a: 0, e: 'Tu contraseña solo se pide en ese dominio oficial.' }]
    } },
  { t: 'Agentes de IA para vender y operar',
    easy: ['Un agente atiende 24 horas.', 'Responde, confirma y registra pedidos.', 'Pasa a humano cuando hace falta.', 'Tú defines sus reglas.'],
    body: [
      'Un agente de IA en WhatsApp responde preguntas sobre productos y políticas, envía fotos, arma el pedido, confirma datos y lo registra en tu plataforma. Pasa la conversación a una persona ante quejas o casos especiales.',
      'Funciona con la plataforma oficial de WhatsApp (API) y una llave de un proveedor de IA. Pagas el consumo de IA y los mensajes de plantilla de Meta.',
      'La calidad depende de lo que le enseñas: catálogo con precios y variantes, políticas de envío, retracto y garantía, tono y palabras que lo obligan a pasar a humano.',
      'Mide al agente como a un vendedor: tasa de respuesta, pedidos tomados, tasa de confirmación y entregas.'
    ],
    steps: ['Catálogo y políticas', 'Reglas de traspaso', 'Conectar WhatsApp', 'Conectar plataforma', 'Probar', 'Medir'],
    tip: 'En el módulo de JadeMind ves cómo montarlo paso a paso.',
    videos: [], links: [LK('https://jademind.com.co', 'JadeMind')],
    practice: {
      goal: 'Preparar el conocimiento que necesitará tu agente.',
      tasks: ['Crea un documento "Base del agente" con: productos (precio, variantes, fotos), envíos (tiempos y costos), retracto, garantía y preguntas frecuentes.', 'Escribe 8 palabras o situaciones que obligan a pasar a humano.', 'Escribe 5 preguntas difíciles de clientes reales para probar al agente.'],
      deliver: 'Documento base, lista de traspaso y preguntas de prueba.',
      check: [{ q: '¿Cuándo debe el agente pasar a una persona?', o: ['Ante quejas o casos especiales definidos', 'Nunca', 'Siempre', 'Solo los domingos'], a: 0, e: 'Tú defines las reglas de traspaso.' }]
    } }
  ],
  exam: [
    { q: '¿Qué es una API?', o: ['Puerta para que dos programas se hablen', 'Un anuncio', 'Una ley', 'Un banco'], a: 0, e: 'Evita copiar y pegar.' },
    { q: '¿Qué es un MCP?', o: ['Conector para que una IA use una plataforma con permiso', 'Una transportadora', 'Un impuesto', 'Una red social'], a: 0, e: 'Model Context Protocol.' },
    { q: '¿Qué ofrece el MCP de Dropi?', o: ['Pedidos, fletes, catálogo y huella del comprador', 'Solo fotos', 'Facturación', 'Nada'], a: 0, e: 'Según su página.' },
    { q: '¿Qué permite la API de Effi?', o: ['Consultar y crear terceros, inventario, ventas, guías y más', 'Solo ver el logo', 'Anunciar', 'Nada'], a: 0, e: 'Está en Integraciones > Documentación API.' },
    { q: '¿Cómo tratas una llave de API?', o: ['Como una contraseña, con permisos mínimos', 'La publico', 'La comparto por chat', 'No importa'], a: 0, e: 'Seguridad.' },
    { q: '¿Qué automatización de WhatsApp tiene Mastershop?', o: ['Avisos de guía y estado al cliente', 'Bloqueo de Meta', 'Facturas', 'Nada'], a: 0, e: 'Según su sitio.' }
  ] },

{ id: 'a05', course: 'a', hours: 4, title: 'Proveedores, acuerdos y marca propia',
  goal: 'Evalúas y negocias con proveedores, aprovechas acuerdos comerciales y preparas el paso a inventario propio o marca propia.',
  lessons: [
  { t: 'Evaluar y negociar con proveedores',
    easy: ['Califica tiempo, precio, garantía y stock.', 'Negocia con datos de volumen.', 'Pide precio especial o exclusividad.', 'Ten un proveedor de respaldo.'],
    body: [
      'Califica a cada proveedor en: tiempo de despacho, precio, pedido mínimo, calidad, garantía y stock. Dropi tiene un "Scorecard de proveedores" gratuito para esto.',
      'Cuando vendes volumen, tienes poder de negociación. Lleva datos: pedidos al mes, tasa de entrega, proyección. Pide precio especial, prioridad de despacho o exclusividad de un producto.',
      'Ten siempre un proveedor de respaldo para tu producto principal. Si el proveedor se queda sin stock, tus anuncios siguen gastando.',
      'Pide muestras antes de escalar: el producto que recibe el cliente es tu reputación.'
    ],
    steps: ['Califica', 'Muestra', 'Datos de volumen', 'Negocia', 'Respaldo'],
    plat: {
      dropi: { body: ['Dropi tiene más de 2.400 proveedores y un scorecard gratuito en dropi.co/herramientas/proveedor para comparar tiempo de envío, precio, pedido mínimo, calificación y garantía.'], steps: ['Busca proveedores del producto', 'Scorecard', 'Contacta', 'Negocia'] },
      mastershop: { body: ['Mastershop tiene acuerdos comerciales: Comisión, Privatización del producto (exclusividad) y Precio especial. El vendedor los acepta desde Ventas. El precio especial no se ve en la ficha: se aplica en la cotización al crear el pedido.', 'Puedes contactar al proveedor y solicitar muestras desde la plataforma.'], steps: ['Contacta al proveedor', 'Propón acuerdo', 'Acepta en Ventas', 'Verifica en el pedido'] },
      effi: { body: ['En Effi registras a tu proveedor en Terceros > Proveedores y manejas órdenes, remisiones y devoluciones de compra y anticipos a proveedores. Con el menú Dropshipping (Catálogo de proveedores, Catálogo de artículos y Convenios de Dropshipping) vendes inventario de otra empresa Effi que despacha desde su bodega.'], steps: ['Terceros > Proveedores', 'Orden de compra', 'Remisión de compra', 'Anticipos', 'Convenios de Dropshipping'], shots: [{ src: 'img/effi/convenios-dropshipping.jpg', cap: 'Dropshipping > Convenios de Dropshipping: proveedor, bodega y distribuidor de cada convenio. Datos tapados.' }] }
    },
    videos: [], links: [LK('https://dropi.co/herramientas/proveedor', 'Dropi: scorecard de proveedores'), LK('https://ayuda.mastershop.com/es/article/como-crear-un-acuerdo-comercial-de-precio-especial-1g75jk4/', 'Mastershop: acuerdo de precio especial'), LK('https://ayuda.mastershop.com/es/article/como-crear-un-acuerdo-comercial-de-privatizacion-del-producto-blg7df/', 'Mastershop: acuerdo de privatización')],
    practice: {
      goal: 'Preparar una negociación con datos.',
      tasks: ['Califica 2 proveedores de tu producto principal en https://dropi.co/herramientas/proveedor (sirve con datos de cualquier plataforma).', 'Escribe tu propuesta: pedidos actuales al mes, proyección, qué pides (precio, prioridad o exclusividad) y qué ofreces.', 'Calcula cuánto ganas al mes si te bajan $3.000 por unidad con tus pedidos actuales.'],
      deliver: 'Scorecard de 2 proveedores y propuesta escrita.',
      check: [{ q: 'Vendes 400 unidades al mes y te bajan $3.000 por unidad. ¿Cuánto ganas de más al mes?', o: ['$120.000', '$400.000', '$1.200.000', '$3.000'], a: 2, e: '400 × $3.000 = $1.200.000.' }]
    } },
  { t: 'Del dropshipping a inventario y marca propia',
    easy: ['Compra inventario solo de ganadores probados.', 'Calcula el punto de equilibrio del lote.', 'Marca propia: más margen, más trámites.', 'Elige dónde guardar y despachar.'],
    body: [
      'Pasar a inventario propio tiene sentido cuando un producto lleva semanas con ventas estables y rentables. Comprar en volumen baja tu costo por unidad.',
      'Calcula el riesgo del lote: cuántas unidades necesitas vender para recuperar la compra y en cuánto tiempo, con tu ritmo actual.',
      'Marca propia: tu logo, empaque y nombre. Más margen y más valor de marca. Requiere registro de marca (SIC), empaques, a veces registros sanitarios y más capital.',
      'Dónde guardar y despachar: en tu casa (barato, limitado), en un operador logístico o servicio de fulfillment (Dropi y Mastershop ofrecen opciones) o con un ERP como Effi si llevas tu bodega.'
    ],
    steps: ['Producto ganador estable', 'Cotiza el lote', 'Punto de equilibrio', 'Dónde guardar', 'Marca'],
    plat: {
      dropi: { body: ['Dropi ofrece servicio logístico y fulfillment con bodegas propias para quien tiene inventario, y una ruta de "Marca propia desde cero" en su academia.'], steps: ['Fulfillment', 'Recolección', 'Marca propia en Academy'] },
      mastershop: { body: ['Mastershop tiene tipo de cuenta para marca propia, configuración de bodegas, edición de inventario y solicitudes de recogida fija o eventual a transportadoras.'], steps: ['Configurar bodegas', 'Inventario', 'Recogida fija o eventual'] },
      effi: { body: ['Effi está hecho para inventario propio: bodegas, lotes y series, ajustes, traslados, conteos, despachos y recepciones de inventario, guías, facturación electrónica y contabilidad (CONTAEFFI).'], steps: ['Bodegas', 'Artículos', 'Conteos y traslados', 'Guías', 'Facturación'] }
    },
    videos: [], links: [LK('https://dropi.co/fulfillment', 'Dropi: fulfillment'), LK('https://ayuda.mastershop.com/es/article/como-configurar-bodegas-en-mastershop-1rjk0lo/', 'Mastershop: configurar bodegas'), LK('https://ayuda.mastershop.com/es/article/como-solicitar-una-recogida-fija-para-proveedores-15a6l73/', 'Mastershop: recogida fija')],
    practice: {
      goal: 'Evaluar la compra de un lote con números.',
      tasks: ['Caso: compras 500 unidades a $18.000 (antes pagabas $30.000 en dropshipping). Vendes 25 entregadas por día.', 'Calcula: inversión del lote, días para vender el lote y ahorro total frente a dropshipping.'],
      deliver: 'Inversión, días y ahorro calculados.',
      check: [{ q: 'Con el caso, ¿cuál es el ahorro total del lote frente a dropshipping?', o: ['$600.000', '$6.000.000', '$9.000.000', '$15.000.000'], a: 1, e: '500 × ($30.000 − $18.000) = $6.000.000. Inversión $9.000.000, se vende en 20 días.' }]
    } }
  ],
  exam: [
    { q: '¿Qué acuerdo de Mastershop da exclusividad?', o: ['Privatización del producto', 'Comisión', 'Referido', 'Billetera'], a: 0, e: 'Privatizas el producto.' },
    { q: '¿Dónde se aplica el precio especial en Mastershop?', o: ['En la cotización al crear el pedido', 'En la ficha', 'En Meta', 'No se aplica'], a: 0, e: 'Según su ayuda.' },
    { q: '¿Cuándo comprar inventario?', o: ['Con un ganador estable y rentable', 'Antes de vender', 'Nunca', 'Con un producto nuevo'], a: 0, e: 'Reduce el riesgo.' },
    { q: '¿Por qué un proveedor de respaldo?', o: ['Si el principal se queda sin stock, sigues vendiendo', 'Por moda', 'Lo exige la DIAN', 'No sirve'], a: 0, e: 'Continuidad.' },
    { q: '¿Qué plataforma es más fuerte para bodega propia y facturación?', o: ['Effi', 'Instagram', 'TikTok', 'Google Trends'], a: 0, e: 'Es un ERP.' },
    { q: '¿Qué llevas a una negociación?', o: ['Datos de volumen y proyección', 'Promesas', 'Nada', 'Quejas'], a: 0, e: 'Negocia con datos.' }
  ] },

{ id: 'a06', course: 'a', hours: 4, title: 'Formalización para crecer',
  goal: 'Sabes cuándo pasar a sociedad, cómo facturar electrónicamente y cómo ordenar tu contabilidad con tu plataforma.',
  lessons: [
  { t: 'Persona natural o sociedad',
    easy: ['Persona natural: simple, respondes con tu patrimonio.', 'S.A.S.: separa tu patrimonio.', 'La sociedad factura siempre.', 'Decide con un contador.'],
    body: [
      'Como persona natural es más simple empezar, pero respondes con tu patrimonio personal y, al crecer, tus impuestos pueden subir.',
      'Una S.A.S. separa tu patrimonio del de la empresa, da más confianza a proveedores y plataformas, y facilita la verificación en Meta y la apertura de cuentas. A cambio, factura siempre electrónicamente y lleva contabilidad.',
      'En contraentrega el volumen que pasa por tus manos puede ser alto aunque tu ganancia sea pequeña. Revisa con un contador cómo se calcula tu ingreso según tu modelo: no es lo mismo vender a nombre propio que actuar como intermediario.',
      'La Cámara de Comercio de tu ciudad tiene el trámite de constitución y orientación gratuita.'
    ],
    steps: ['Calcula tu volumen anual', 'Compara opciones', 'Consulta a un contador', 'Constituye si conviene'],
    videos: [], links: [LK('https://www.dian.gov.co/impuestos/factura-electronica/Documents/Abece-FE-Facturador.pdf', 'DIAN: abecé del facturador electrónico')],
    practice: {
      goal: 'Preparar la conversación con tu contador.',
      tasks: ['Calcula lo cobrado a clientes en los últimos 3 meses y proyéctalo a 12.', 'Escribe 5 preguntas para tu contador: régimen, ingreso bruto en contraentrega, IVA, sociedad y facturación.', 'Busca en la página de la Cámara de Comercio de tu ciudad el trámite de constitución de S.A.S.'],
      deliver: 'Proyección anual y 5 preguntas.',
      check: [{ q: '¿Qué ventaja principal da una S.A.S.?', o: ['Separa tu patrimonio del de la empresa', 'No paga impuestos', 'No factura', 'Es gratis siempre'], a: 0, e: 'Además da confianza a proveedores y plataformas.' }]
    } },
  { t: 'Facturación electrónica y contabilidad',
    easy: ['Factura desde un sistema autorizado.', 'Effi factura ante la DIAN.', 'Concilia ventas, recaudos y retiros.', 'Cierra cada mes.'],
    body: [
      'Si estás obligado, cada venta necesita factura electrónica validada por la DIAN. Puedes usar el facturador gratuito de la DIAN o un sistema como Effi, que factura y lleva inventario y contabilidad juntos.',
      'Concilia cada mes: ventas facturadas, recaudos acreditados en la plataforma, retiros a tu banco y gastos (anuncios, herramientas, fletes).',
      'Guarda las facturas de Meta (anuncios) y de las plataformas: son tus gastos deducibles.',
      'Algunas plataformas se conectan con software contable: Mastershop ha mostrado integración con Siigo según testimonios de usuarios.'
    ],
    steps: ['Elige facturador', 'Factura cada venta', 'Guarda gastos', 'Concilia', 'Cierre mensual'],
    plat: {
      dropi: { body: ['Desde Dropi exportas tus órdenes y movimientos de billetera para entregarlos a tu contador o cargarlos en tu software contable.'], steps: ['Exporta órdenes', 'Exporta movimientos', 'Entrega al contador'] },
      mastershop: { body: ['Mastershop tiene reportes de histórico de órdenes, costo y utilidad por pedido, y un módulo de integraciones para conectar contabilidad.'], steps: ['Histórico de órdenes', 'Utilidad por pedidos', 'Integraciones'] },
      effi: { body: ['Effi factura electrónicamente ante la DIAN (y el SRI en Ecuador), lleva contabilidad de partida doble, cartera, tesorería y nómina. El reporte de documentos electrónicos se cobra aparte.'], steps: ['Configura resolución', 'Factura', 'Contabilidad', 'Cierre'] }
    },
    videos: [], links: [LK('https://effi.com.co/#ventas', 'Effi: ventas y facturación electrónica'), LK('https://ayuda.mastershop.com/es/article/donde-encuentro-el-reporte-de-historico-de-ordenes-8pm572/', 'Mastershop: histórico de órdenes')],
    practice: {
      goal: 'Montar tu cierre mensual.',
      tasks: ['Crea en tu hoja una pestaña "Cierre" con: ventas, recaudos, retiros, anuncios, fletes, herramientas y ganancia.', 'Descarga las facturas del último mes de Meta (Facturación y pagos).'],
      plat: {
        dropi: ['Exporta tus órdenes del último mes desde Dropi y llena la pestaña.'],
        mastershop: ['Descarga el histórico de órdenes y el reporte de utilidad del último mes.'],
        effi: ['Revisa en el Dashboard de Effi el bloque Wallets del mes (recaudos, retiros, fletes y utilidad) y exporta Movimientos de wallets.']
      },
      deliver: 'Pestaña de cierre con un mes real o de ejemplo.',
      check: [{ q: '¿Por qué guardar las facturas de Meta?', o: ['Son gastos deducibles', 'Por recuerdo', 'No sirven', 'Para el cliente'], a: 0, e: 'Reducen tu base gravable según tu régimen.' }]
    } }
  ],
  exam: [
    { q: '¿Quién factura siempre electrónicamente?', o: ['Las sociedades como una S.A.S.', 'Nadie', 'Solo los bancos', 'Solo el proveedor'], a: 0, e: 'Además responsables de IVA y Régimen Simple.' },
    { q: '¿Qué sistema de esta escuela factura ante la DIAN?', o: ['Effi', 'TikTok', 'Google Trends', 'WhatsApp'], a: 0, e: 'Es un ERP.' },
    { q: '¿Qué concilias cada mes?', o: ['Ventas, recaudos, retiros y gastos', 'Solo likes', 'Nada', 'Solo anuncios'], a: 0, e: 'Cierre mensual.' },
    { q: '¿Dónde inicias la constitución de una S.A.S.?', o: ['Cámara de Comercio', 'Meta', 'Dropi', 'INVIMA'], a: 0, e: 'Trámite de constitución.' },
    { q: 'En contraentrega el volumen cobrado puede ser...', o: ['Alto aunque la ganancia sea pequeña', 'Siempre igual a la ganancia', 'Cero', 'Irrelevante'], a: 0, e: 'Consulta con un contador.' },
    { q: '¿Qué gasto es clave guardar?', o: ['Facturas de anuncios y plataformas', 'Fotos', 'Memes', 'Nada'], a: 0, e: 'Gastos del negocio.' }
  ] },

{ id: 'a07', course: 'a', hours: 4, title: 'Equipo, procesos y delegación',
  goal: 'Escribes procedimientos, defines roles con permisos y delegas sin perder control.',
  lessons: [
  { t: 'Procedimientos (SOP) que cualquiera puede seguir',
    easy: ['Un SOP es una receta del trabajo.', 'Primero escribe lo que ya haces.', 'Pasos cortos con capturas.', 'Mide el resultado.'],
    body: [
      'Un SOP (procedimiento operativo estándar) es una receta: qué se hace, cuándo, cómo, con qué herramienta y cómo se sabe que quedó bien.',
      'Empieza por las tareas diarias: confirmar pedidos, resolver novedades, generar guías, responder clientes. Ya tienes la rutina escrita del curso intermedio: conviértela en SOP con capturas de pantalla.',
      'Cada SOP debe tener un indicador: por ejemplo, "novedades resueltas el mismo día: 90 %".',
      'Un SOP bien escrito te deja delegar y tomar vacaciones sin que el negocio se caiga.'
    ],
    steps: ['Elige la tarea', 'Escribe los pasos', 'Agrega capturas', 'Define el indicador', 'Prueba con otra persona'],
    videos: [], links: [],
    practice: {
      goal: 'Escribir tu primer SOP y probarlo.',
      tasks: ['Escribe el SOP de "Resolver novedades" con pasos numerados y capturas de tu plataforma.', 'Agrega su indicador.', 'Pídele a alguien que lo siga sin ayuda y anota dónde se confundió.'],
      deliver: 'SOP de novedades probado y corregido.',
      check: [{ q: '¿Qué hace bueno a un SOP?', o: ['Que otra persona lo siga sin ayuda', 'Que sea largo', 'Que solo tú lo entiendas', 'Que no tenga pasos'], a: 0, e: 'Por eso se prueba con otra persona.' }]
    } },
  { t: 'Roles, permisos y tablero del equipo',
    easy: ['Cada persona con su usuario.', 'Permiso mínimo necesario.', 'Nunca compartas tu contraseña.', 'Reunión semanal con el tablero.'],
    body: [
      'Cada colaborador debe tener su propio usuario en la plataforma, en Meta y en WhatsApp (si usas la plataforma API). Así sabes quién hizo qué y puedes quitar accesos sin cambiar todo.',
      'Da el permiso mínimo: quien confirma pedidos no necesita retirar dinero de la billetera.',
      'Roles típicos al crecer: confirmación y atención, operación logística, creativos y anuncios, y dirección (tú: números, proveedores, decisiones).',
      'Reúnete cada semana 30 minutos con el tablero: indicadores de cada rol, problemas y una mejora por persona.'
    ],
    steps: ['Usuarios individuales', 'Roles', 'Permisos mínimos', 'Tablero', 'Reunión semanal'],
    plat: {
      dropi: { body: ['Revisa en la configuración de tu cuenta de Dropi las opciones de usuarios. Para Meta, los accesos se dan desde el portafolio comercial.'], steps: ['Configuración', 'Usuarios', 'Permisos'] },
      mastershop: { body: ['Mastershop permite crear colaboradores, crear roles, editar los permisos de cada rol y cambiar el rol de un usuario.'], steps: ['Crear colaborador', 'Crear rol', 'Editar permisos', 'Asignar rol'] },
      effi: { body: ['Effi maneja usuarios y perfiles con permisos por función (consultar, crear, modificar, anular o autorizar), multiempresa y multisucursal. Cada usuario adicional tiene un costo mensual.'], steps: ['Perfiles de usuario', 'Permisos por función', 'Usuarios del sistema'], shots: [{ src: 'img/effi/perfiles-usuario.jpg', cap: 'Administración > Perfiles de usuario: crea un perfil por rol con permisos mínimos.' }] }
    },
    videos: [], links: [LK('https://ayuda.mastershop.com/es/article/como-crear-un-colaborador-1fnpq19/', 'Mastershop: crear un colaborador'), LK('https://ayuda.mastershop.com/es/article/como-crear-un-nuevo-rol-para-un-colaborador-1564a1u/', 'Mastershop: crear un rol')],
    practice: {
      goal: 'Diseñar los roles de tu equipo.',
      tasks: ['Haz una tabla: rol, tareas, herramientas, permisos, indicador.', 'Llena 3 roles: confirmación, logística y anuncios.'],
      plat: {
        dropi: ['Revisa en Dropi qué opciones de usuarios tiene tu cuenta y anótalas.'],
        mastershop: ['Crea en Mastershop un rol "Confirmación" con permisos solo de pedidos y clientes.'],
        effi: ['Crea en Effi un perfil "Logística" con permisos de guías y sin acceso a tesorería.']
      },
      deliver: 'Tabla de roles y un rol creado en tu plataforma.',
      check: [{ q: '¿Quien confirma pedidos debe poder retirar dinero?', o: ['No, permiso mínimo', 'Sí', 'Solo los viernes', 'Da igual'], a: 0, e: 'Cada rol con lo que necesita.' }]
    } }
  ],
  exam: [
    { q: '¿Qué es un SOP?', o: ['Una receta escrita de una tarea', 'Un anuncio', 'Una factura', 'Un producto'], a: 0, e: 'Procedimiento operativo estándar.' },
    { q: '¿Por qué usuarios individuales?', o: ['Saber quién hizo qué y quitar accesos fácil', 'Por moda', 'Es más caro', 'No sirve'], a: 0, e: 'Control.' },
    { q: 'En Mastershop, ¿puedes crear roles?', o: ['Sí, con permisos editables', 'No', 'Solo uno', 'Solo en Meta'], a: 0, e: 'Colaboradores y roles.' },
    { q: 'En Effi, ¿cómo se definen permisos?', o: ['Por función: consultar, crear, modificar, anular, autorizar', 'No hay permisos', 'Por color', 'Por edad'], a: 0, e: 'Perfiles de usuario.' },
    { q: '¿Cada cuánto la reunión de equipo?', o: ['Semanal, 30 minutos', 'Diaria de 3 horas', 'Anual', 'Nunca'], a: 0, e: 'Con el tablero.' },
    { q: '¿Qué debe tener cada SOP?', o: ['Un indicador de resultado', 'Música', 'Nada', 'Emojis'], a: 0, e: 'Para saber si funciona.' }
  ] },

{ id: 'a08', course: 'a', hours: 6, title: 'Operar con JadeMind y proyecto final',
  goal: 'Sabes montar tu agente en JadeMind, evitas los errores más caros y presentas tu plan de lanzamiento o escalado.',
  lessons: [
  { t: 'Qué es JadeMind y cómo conectarlo',
    easy: ['Un agente de IA atiende tus canales.', 'Usa las APIs oficiales de Meta.', 'Registra pedidos en tu plataforma.', 'Tú pones tu llave de IA.'],
    body: [
      'JadeMind pone un agente de IA a atender tus canales de mensajería por las APIs oficiales de Meta: responde sobre productos, precios y políticas, envía fotos y videos, arma y registra pedidos, entiende notas de voz e imágenes y pasa la conversación a una persona cuando hace falta.',
      'Cada negocio trae su propia llave de IA (Anthropic, OpenAI, Google o DeepSeek) y paga ese consumo directamente al proveedor.',
      'WhatsApp se conecta desde Integraciones con la ventana oficial de Facebook. Si ya usas la app WhatsApp Business, existe la opción de coexistencia: el mismo número sigue en tu celular y lo atiende el agente. Después agrega un método de pago en tu cuenta de WhatsApp Business en Meta: sin él, Meta deja de entregar mensajes.',
      'Para despachar conectas Dropi, Effi o Mastershop. Para que Meta optimice tus anuncios conectas tu píxel y la API de conversiones: JadeMind reporta la compra al confirmar el pedido.',
      'Lo que pruebas en "Probar agente" es lo mismo que hará en WhatsApp.'
    ],
    steps: ['Crea tu cuenta', 'Formulario de implementación', 'Llave de IA', 'Conecta WhatsApp', 'Método de pago en Meta', 'Conecta tu plataforma', 'Píxel y CAPI', 'Prueba'],
    tip: 'Al terminar School Mind tienes beneficios de egresado para implementar tu agente en JadeMind.',
    videos: [], links: [LK('https://jademind.com.co', 'JadeMind, sitio oficial')],
    practice: {
      goal: 'Dejar todo listo para tu implementación.',
      tasks: ['Comprueba que puedes entrar a: tu WhatsApp Business, https://business.facebook.com y tu cuenta de Dropi, Mastershop o Effi.', 'Ten a mano tu "Base del agente" del módulo de automatización.', 'Escribe a JadeMind desde https://jademind.com.co para agendar tu implementación.'],
      deliver: 'Accesos verificados y solicitud enviada.',
      check: [{ q: '¿Qué pasa si no agregas un método de pago en WhatsApp Business en Meta?', o: ['Meta deja de entregar mensajes', 'Nada', 'Se borra el agente', 'Es gratis siempre'], a: 0, e: 'Por eso es un paso obligatorio.' }]
    } },
  { t: 'Los errores más caros',
    easy: ['Pautar sin números.', 'Despachar sin confirmar.', 'Ignorar novedades.', 'Escalar sin caja.'],
    body: [
      '1) Pautar sin calcular el CPA de equilibrio. 2) Despachar sin confirmar. 3) Dejar novedades para mañana. 4) Vender productos sin registro sanitario. 5) Prometer en anuncios lo que el producto no hace. 6) Escalar sin caja para esperar los recaudos.',
      '7) Retirar todo el saldo y quedarte sin caja para anuncios. 8) No medir por ciudad ni transportadora. 9) Depender de un solo proveedor. 10) Compartir contraseñas y perder la cuenta publicitaria.',
      'Cada uno tiene una solución que ya practicaste. El problema no es no saberla: es no aplicarla cuando hay prisa. Por eso existen las reglas escritas, los SOP y el tablero.'
    ],
    steps: ['Lee los 10 errores', 'Marca los tuyos', 'Escribe la regla que lo evita', 'Agrégala a tu tablero'],
    videos: [], links: [],
    practice: {
      goal: 'Convertir los errores en reglas.',
      tasks: ['Marca los 3 errores que más te podrían pasar.', 'Para cada uno escribe una regla con número ("no despacho sin SÍ escrito"; "no subo más de 20 % el presupuesto").', 'Agrégalas a tu tablero como chequeo semanal.'],
      deliver: '3 reglas con número en tu tablero.',
      check: [{ q: '¿Cuál es una regla bien escrita?', o: ['"Trataré de confirmar"', '"No despacho sin un SÍ escrito del cliente"', '"Ojalá no haya novedades"', '"Veremos"'], a: 1, e: 'Una regla es concreta y verificable.' }]
    } },
  { t: 'Proyecto final: tu plan',
    easy: ['Junta todo en un plan.', 'Producto, números, canal, anuncios, operación.', 'Riesgos y reglas.', 'Preséntalo como prefieras.'],
    body: [
      'El proyecto final reúne todo: modelo y plataforma elegida; producto con validación legal y de demanda; números (precio, CPA de equilibrio, caja mínima); canal de venta y tienda conectada; 3 creativos y estructura de campaña; guion de WhatsApp y confirmación; rutina diaria y SOP; tablero semanal; plan de riesgos con reglas.',
      'Si ya vendes, conviértelo en plan de escalado: ciudades a excluir, transportadoras por zona, calendario de pruebas creativas, proyección de caja y equipo.',
      'Puedes presentarlo como documento, video, audio o presentación. Es la base para implementar tu negocio con JadeMind.'
    ],
    steps: ['Modelo y plataforma', 'Producto', 'Números', 'Canal', 'Anuncios', 'Operación', 'Tablero', 'Riesgos'],
    videos: [], links: [],
    practice: {
      goal: 'Entregar tu plan completo.',
      tasks: ['Abre un documento nuevo en https://docs.google.com y titúlalo "Plan - [tu tienda]".', 'Copia los 8 títulos del paso a paso y llena cada uno con lo que hiciste en las prácticas.', 'Revísalo contra tus 3 reglas de errores.', 'Compártelo con JadeMind.'],
      deliver: 'Plan de 8 secciones completo.',
      check: [{ q: '¿Qué sección convierte el plan de lanzamiento en plan de escalado?', o: ['Ciudades a excluir, transportadoras por zona, pruebas creativas, caja y equipo', 'El logo', 'La música', 'Nada'], a: 0, e: 'Es lo que viste en el curso avanzado.' }]
    } }
  ],
  exam: [
    { q: '¿Quién paga el consumo de IA en JadeMind?', o: ['El negocio, con su propia llave', 'Meta', 'La DIAN', 'Nadie'], a: 0, e: 'Directo al proveedor de IA.' },
    { q: '¿Qué es la coexistencia de WhatsApp?', o: ['El mismo número sigue en tu celular y lo atiende el agente', 'Tener dos celulares', 'Un anuncio', 'Nada'], a: 0, e: 'App y plataforma juntas.' },
    { q: '¿Cuándo reporta JadeMind la compra a Meta?', o: ['Al confirmar el pedido', 'Al ver el anuncio', 'Nunca', 'Al año'], a: 0, e: 'Ideal para contraentrega.' },
    { q: '¿Qué plataformas conectas para despachar?', o: ['Dropi, Effi o Mastershop', 'Solo Instagram', 'Ninguna', 'Solo Google'], a: 0, e: 'Las tres de esta escuela.' },
    { q: '¿Cuál es un error caro?', o: ['Escalar sin caja', 'Confirmar pedidos', 'Medir por ciudad', 'Tener SOP'], a: 0, e: 'Te quedas sin dinero para anuncios.' },
    { q: '¿Para qué sirve el proyecto final?', o: ['Base para implementar tu negocio con JadeMind', 'Decorar', 'Nada', 'Cobrar'], a: 0, e: 'Junta todo.' }
  ] }
);
})();
