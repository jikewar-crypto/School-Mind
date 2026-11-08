/* Curso Principiante: desde cero */
(function () {
var YT = window.YT, LK = window.LK;
window.SM_MODULES.push(

{ id: 'p01', course: 'p', hours: 2, title: 'Bienvenida: cómo aprender aquí',
  goal: 'Sabes cómo funciona la escuela, defines tu tiempo y tu presupuesto de aprendizaje, y reconoces las promesas falsas.',
  lessons: [
  { t: 'Cómo funciona School Mind',
    easy: ['Cada lección tiene teoría corta, videos y una práctica.', 'La práctica se hace en la vida real y tiene una pregunta de comprobación.', 'Cada módulo termina con un examen.', 'Si apruebas, recibes una constancia.'],
    body: [
      'School Mind tiene tres cursos: Principiante, Intermedio y Avanzado. Si no sabes cuál tomar, haz la prueba de ubicación. Puedes cambiar de curso cuando quieras.',
      'En las lecciones que dependen de una plataforma eliges la tuya: Dropi, Mastershop o Effi. El contenido cambia según tu elección, porque cada plataforma tiene pantallas y reglas distintas.',
      'Cada lección tiene cuatro partes: "En pocas palabras" (lo esencial en frases cortas), la explicación completa, el paso a paso y la práctica guiada. La práctica no es para leer: es para hacerla con el celular o el computador al lado.',
      'Al final de cada práctica hay una pregunta de comprobación. Solo la puedes responder bien si hiciste el ejercicio. Así sabes que aprendiste y no solo que leíste.',
      'El examen del módulo no tiene tiempo límite. Apruebas con 70 % y puedes repetirlo. La constancia lleva tu nombre, el módulo, las horas y un código.'
    ],
    steps: ['Elige tu curso', 'Elige tu plataforma', 'Lee la lección', 'Haz la práctica', 'Responde la comprobación', 'Presenta el examen'],
    tip: 'Estudia en bloques de 45 minutos. La constancia de lo que haces vale más que maratones de un día.',
    videos: [], links: [],
    practice: {
      goal: 'Dejar listo tu espacio de estudio en la academia.',
      tasks: ['Toca Accesibilidad, arriba, y elige el tamaño de letra que leas sin esfuerzo.', 'Abre "Mi ruta" y elige tu plataforma en el selector: Dropi, Mastershop o Effi. Si no sabes cuál, deja Dropi por ahora: en el módulo 4 las comparas.', 'Abre el calendario de tu celular y crea un evento que se repita: "School Mind", 2 días por semana, 45 minutos.'],
      deliver: 'Plataforma elegida y dos espacios de estudio en tu calendario.',
      check: [{ q: '¿Qué pasa con la lección si cambias de plataforma en el selector?', o: ['Nada, todo es igual', 'Cambian los pasos y las prácticas de esa plataforma', 'Se borra tu avance', 'Se cierra la academia'], a: 1, e: 'Las partes que dependen de la plataforma se muestran para la que elegiste.' }]
    } },
  { t: 'La regla de oro: sin promesas de dinero',
    easy: ['Nadie puede garantizarte ganancias.', 'Aprender cuesta: define cuánto puedes arriesgar.', 'Decide antes cuándo vas a parar.'],
    body: [
      'Vender por internet es un negocio real, con costos y riesgos. Cualquier curso, video o anuncio que prometa "ganar X millones al mes" está prometiendo algo que no puede cumplir.',
      'En Colombia la Superintendencia de Industria y Comercio (SIC) ha sancionado cursos por publicidad engañosa sobre ingresos. Si alguien te promete dinero fácil, desconfía.',
      'Tu presupuesto de aprendizaje es el dinero que aceptas perder mientras aprendes: anuncios de prueba, una muestra de producto, una herramienta. Si lo pierdes todo, tu vida sigue igual. Si no puedes perderlo, todavía no es el momento de pautar.',
      'Define reglas de parada antes de empezar, cuando estás tranquilo. Por ejemplo: "Si gasto $300.000 en anuncios de un producto y no tengo 10 pedidos entregados, lo cambio".',
      'Muchos videos y blogs de dropshipping ganan comisión si te registras con su enlace. Eso no los hace malos, pero su consejo no es neutral. Verifica en la fuente oficial.'
    ],
    steps: ['Define tu presupuesto de aprendizaje', 'Escribe tres reglas de parada', 'Desconfía de promesas de ingresos', 'Verifica en fuentes oficiales'],
    warn: 'No uses préstamos, tarjetas de crédito ni el dinero del arriendo para aprender. El riesgo es real.',
    videos: [],
    links: [LK('https://www.ambitojuridico.com/noticias/mercantil/administrativo-y-contratacion/sic-sanciona-grupo-cossio-por-publicidad-enganosa', 'Ámbito Jurídico: SIC sanciona curso por publicidad engañosa')],
    practice: {
      goal: 'Aprender a reconocer una promesa engañosa y fijar tus límites.',
      tasks: ['Abre https://www.facebook.com/ads/library/, elige Colombia y "Todos los anuncios", y busca "curso dropshipping".', 'Abre 3 anuncios y copia en tus notas cada frase que prometa una cifra de dinero o un tiempo ("en 30 días", "$10 millones").', 'Escribe tu presupuesto de aprendizaje con un número exacto.', 'Escribe tus 3 reglas de parada con números: gasto máximo por producto, pedidos mínimos esperados y fecha límite.'],
      deliver: 'Lista de frases engañosas encontradas y tus tres reglas de parada con números.',
      check: [{ q: '¿Cuál de estas es una regla de parada bien escrita?', o: ['"Voy a intentarlo hasta que funcione"', '"Si gasto $300.000 en un producto y no tengo 10 entregas, lo cambio"', '"Paro cuando me canse"', '"Invierto todo lo que tenga"'], a: 1, e: 'Una regla de parada tiene un número y una acción. Así decides con la cabeza, no con la emoción.' }]
    } }
  ],
  exam: [
    { q: '¿Con qué porcentaje apruebas un examen?', o: ['50 %', '70 %', '90 %', '100 %'], a: 1, e: 'Apruebas con 70 % y puedes repetir el examen.' },
    { q: '¿Para qué sirve la pregunta de comprobación de la práctica?', o: ['Para adornar', 'Para saber si hiciste el ejercicio y entendiste', 'Para cobrar', 'Para cambiar de curso'], a: 1, e: 'Solo se responde bien si hiciste la práctica.' },
    { q: 'Un anuncio dice "Gana $10 millones al mes con dropshipping". ¿Qué es?', o: ['Una garantía', 'Una promesa que nadie puede cumplir', 'Un dato oficial', 'Una ley'], a: 1, e: 'Nadie puede garantizar ingresos. La SIC sanciona la publicidad engañosa.' },
    { q: '¿Qué es el presupuesto de aprendizaje?', o: ['El dinero que aceptas perder mientras aprendes', 'Tu sueldo', 'Un préstamo', 'El dinero del arriendo'], a: 0, e: 'Es dinero que puedes perder sin afectar tu vida.' },
    { q: '¿Por qué verificar en la fuente oficial lo que dice un blog?', o: ['Porque muchos ganan comisión por referidos', 'Porque los blogs son ilegales', 'No hace falta', 'Porque la fuente oficial es más larga'], a: 0, e: 'Un consejo con comisión no es neutral.' },
    { q: '¿Dónde eliges tu plataforma en la academia?', o: ['En el selector de "Mi ruta" o de la lección', 'En el examen', 'En Instagram', 'No se puede'], a: 0, e: 'El selector cambia los pasos y prácticas según tu plataforma.' }
  ] },

{ id: 'p02', course: 'p', hours: 4, title: 'El negocio contraentrega',
  goal: 'Entiendes quién hace qué, cómo viaja un pedido, dónde se pierde el dinero y qué modelo de negocio te sirve.',
  lessons: [
  { t: 'Quién hace qué en el dropshipping',
    easy: ['Tú vendes y atiendes al cliente.', 'El proveedor guarda, empaca y despacha.', 'La transportadora entrega y cobra.', 'La plataforma conecta a todos y te paga.'],
    body: [
      'Dropshipping es vender un producto que no tienes en tu casa. Cuando alguien te compra, un proveedor lo empaca y lo despacha directo al cliente.',
      'En Colombia la mayoría de compras por este modelo son contraentrega: el cliente paga en efectivo al recibir. Esto genera confianza en el comprador, pero también riesgo para ti: si no recibe, no hay pago y el flete igual se cobra.',
      'Hay cuatro actores. Tú, el vendedor (dropshipper): consigues clientes con anuncios o contenido, atiendes, confirmas el pedido y respondes reclamos. El proveedor: tiene el inventario, empaca y entrega a la transportadora. La transportadora (Inter Rapidísimo, Servientrega, Coordinadora, Envía, TCC y otras): lleva el paquete y cobra el recaudo. La plataforma (Dropi, Mastershop o Effi): conecta todo, genera las guías y te liquida la ganancia.',
      'Tu ganancia es la diferencia entre el precio que cobras y todo lo que cuesta: producto, flete, comisiones y publicidad. La plataforma descuenta los costos y te deja el resto en tu billetera.',
      'Aunque no tocas el producto, ante el cliente el responsable eres tú. La ley de protección al consumidor te ve como el vendedor.'
    ],
    steps: ['Cliente ve tu anuncio', 'Te escribe o llena el formulario', 'Confirmas el pedido', 'Proveedor despacha', 'Transportadora entrega y cobra', 'Plataforma te paga'],
    tip: 'Piensa en ti como el dueño de la relación con el cliente. Eso es lo único que el proveedor no puede hacer por ti.',
    videos: [YT('mL6363r_z1w', 'Cómo hacer dropshipping en Colombia desde cero con Dropi'), YT('G31zSQtQzyQ', 'Dropi Colombia: cómo funciona paso a paso')],
    links: [LK('https://dropi.co/blog/pago-contra-entrega-colombia/', 'Dropi: pago contraentrega en Colombia'), LK('https://ayuda.mastershop.com/es/article/que-es-mastershop-1jg51fh/', 'Mastershop: qué es y cómo opera el dropshipper')],
    practice: {
      goal: 'Ubicar cada responsabilidad en el actor correcto.',
      tasks: ['En tus notas haz 4 columnas: Yo, Proveedor, Transportadora, Plataforma.', 'Pon cada tarea en su columna: hacer el anuncio, empacar, cobrar el efectivo, generar la guía, responder un reclamo, liquidar la ganancia, confirmar la dirección, guardar el inventario.', 'Lee el artículo "Qué es Mastershop" del centro de ayuda (enlace abajo) y revisa si tu tabla coincide con el flujo que describen.'],
      deliver: 'Tabla de 4 columnas con las 8 tareas ubicadas.',
      check: [{ q: '¿Quién cobra el dinero al cliente en un pedido contraentrega?', o: ['Tú', 'El proveedor', 'La transportadora', 'Meta'], a: 2, e: 'La transportadora entrega y recauda. Luego el dinero pasa a la plataforma y a tu billetera.' },
              { q: 'Un cliente reclama porque el producto llegó roto. ¿Quién le responde?', o: ['El proveedor', 'Tú, porque eres el vendedor', 'Nadie', 'La DIAN'], a: 1, e: 'Ante el cliente respondes tú. Luego gestionas la garantía con el proveedor.' }]
    } },
  { t: 'El recorrido del pedido y dónde se pierde dinero',
    easy: ['Un pedido pasa por 8 estados.', 'En cada paso algo puede fallar.', 'Los fallos más caros: datos malos y clientes que no reciben.'],
    body: [
      'Un pedido contraentrega pasa por estos pasos: 1) el cliente pide, 2) tú confirmas sus datos, 3) la plataforma genera la guía, 4) el proveedor empaca y despacha, 5) el paquete viaja, 6) la transportadora intenta entregar, 7) entrega y cobra, 8) la plataforma liquida tu ganancia.',
      'En el paso 2 se pierde dinero si confirmas con datos incompletos: sin barrio, sin referencias o con un celular equivocado. Eso genera novedades.',
      'En el paso 6 aparece la "novedad": la transportadora no pudo entregar porque no encontró la dirección, el cliente no estaba o lo rechazó. Si no la resuelves rápido, el paquete se devuelve.',
      'Una devolución es la peor pérdida: pagaste el flete de ida (y en muchos casos el de regreso), pagaste el anuncio que trajo ese pedido y no recibiste ni un peso.',
      'Por eso el trabajo diario del vendedor no es solo vender. Es confirmar bien, vigilar las novedades cada mañana y aprender qué ciudades, productos y transportadoras te devuelven más.'
    ],
    steps: ['Pedido', 'Confirmación', 'Guía', 'Despacho', 'Tránsito', 'Intento de entrega', 'Entrega y recaudo', 'Liquidación'],
    warn: 'Un pedido despachado sin confirmar es una apuesta. En contraentrega la confirmación es una decisión financiera.',
    videos: [YT('Wfng4PYQHSU', 'Cómo enviar tu primer pedido en Dropi')],
    links: [LK('https://ayuda.mastershop.com/es/article/solucion-de-novedad-con-reintento-de-entrega-1prokso/', 'Mastershop: solucionar una novedad con reintento de entrega')],
    practice: {
      goal: 'Calcular cuánto cuesta una devolución y diseñar cómo prevenirla.',
      tasks: ['Caso: vendes a $79.900. El flete de ida es $13.000, el de devolución $13.000 y pagaste $18.000 en anuncios por ese pedido.', 'Calcula en tus notas cuánto pierdes si ese pedido se devuelve.', 'Escribe al lado de cada uno de los 8 pasos qué puede fallar y una acción para evitarlo.'],
      deliver: 'El costo de una devolución y una acción de prevención por paso.',
      check: [{ q: 'Con los datos del caso, ¿cuánto pierdes si el pedido se devuelve?', o: ['$13.000', '$31.000', '$44.000', '$79.900'], a: 2, e: '$13.000 de ida + $13.000 de regreso + $18.000 de anuncios = $44.000 perdidos, sin ningún ingreso.' }]
    } },
  { t: 'Tres modelos de negocio y su plataforma',
    easy: ['Dropshipping: vendes sin inventario.', 'Inventario propio: compras y guardas mercancía.', 'Marca propia: producto con tu nombre.', 'Cada modelo encaja mejor con una plataforma.'],
    body: [
      'Dropshipping puro: no compras nada antes de vender. Arriesgas poco dinero en mercancía, pero el margen es menor y compites con muchos vendedores del mismo producto. Dropi y Mastershop están hechos para esto: tienen catálogo de proveedores.',
      'Inventario propio: compras unidades a un importador o fabricante, las guardas tú o un operador logístico, y despachas. Ganas más por unidad, pero arriesgas dinero en mercancía. Aquí necesitas guías, inventario y a veces facturación: Effi es un sistema de gestión (ERP) pensado para esto, y Dropi y Mastershop también ofrecen servicios para productos propios.',
      'Marca propia: tu logo, tu empaque, tu nombre. Es el modelo con más margen y más valor a largo plazo, pero requiere más inversión y trámites. Mastershop tiene un tipo de cuenta para marca propia y Dropi tiene una ruta en su academia.',
      'La mayoría empieza con dropshipping para aprender a vender con poco riesgo, y cuando encuentra un producto que se vende bien, pasa a inventario propio o marca propia para ganar más margen.',
      'No hay plataforma "mejor". Hay una que encaja con tu modelo. En el módulo 4 las comparas a fondo y eliges.'
    ],
    steps: ['Empieza con dropshipping', 'Encuentra un producto ganador', 'Negocia o compra inventario', 'Crea tu marca'],
    tip: 'Puedes usar más de una plataforma. Muchos vendedores tienen productos en Dropi y llevan su inventario propio en Effi.',
    videos: [YT('dTbLPsgNAyA', 'Master Class: cómo hacer dropshipping con Effi')],
    links: [LK('https://dropi.co/soluciones-para-marca-propia', 'Dropi: soluciones para marca propia')],
    practice: {
      goal: 'Elegir el modelo con el que vas a empezar y justificarlo con tu situación real.',
      tasks: ['Responde en tus notas: ¿cuánto dinero tienes para mercancía? ¿Tienes espacio para guardar? ¿Tienes un proveedor directo?', 'Con esas respuestas elige: dropshipping, inventario propio o marca propia.', 'Escribe qué plataforma encaja con ese modelo y por qué, usando lo que leíste.'],
      deliver: 'Tu modelo de inicio, tu plataforma probable y la razón en 3 líneas.',
      check: [{ q: 'Tienes 200 unidades de un producto en tu bodega y necesitas generar guías y facturar. ¿Qué te sirve más?', o: ['Solo el catálogo de un proveedor', 'Un sistema de gestión con guías e inventario, como Effi', 'Instagram', 'Nada'], a: 1, e: 'Con inventario propio necesitas guías, inventario y facturación. Ese es el fuerte de un ERP como Effi.' }]
    } }
  ],
  exam: [
    { q: '¿Qué hace el proveedor en dropshipping?', o: ['Hace los anuncios', 'Guarda, empaca y despacha', 'Cobra al cliente', 'Responde reclamos'], a: 1, e: 'El proveedor tiene el inventario y despacha.' },
    { q: '¿Qué es una novedad?', o: ['Un producto nuevo', 'Un problema en la entrega', 'Una promoción', 'Un anuncio'], a: 1, e: 'Dirección mala, cliente ausente o rechazo.' },
    { q: '¿Por qué una devolución es tan cara?', o: ['Porque pagas fletes y anuncios sin recibir ingreso', 'Porque la multa es alta', 'No es cara', 'Porque el cliente paga doble'], a: 0, e: 'Pierdes fletes y publicidad, y no cobras.' },
    { q: '¿Qué modelo arriesga menos dinero en mercancía?', o: ['Marca propia', 'Inventario propio', 'Dropshipping', 'Todos igual'], a: 2, e: 'En dropshipping no compras antes de vender.' },
    { q: '¿Cuál plataforma es un sistema de gestión (ERP) con guías, inventario y facturación?', o: ['Effi', 'Instagram', 'Google Trends', 'TikTok'], a: 0, e: 'Effi es un ERP en la nube.' },
    { q: 'Ante la ley, ¿quién responde al cliente?', o: ['El proveedor', 'La transportadora', 'Tú, el vendedor', 'La plataforma'], a: 2, e: 'Tú le vendiste: tú respondes.' }
  ] },

{ id: 'p03', course: 'p', hours: 5, title: 'Tus números: ganancia real por pedido', calculator: true,
  goal: 'Calculas cuánto ganas o pierdes de verdad por pedido, tu CPA máximo y cuánto dinero necesitas para aguantar mientras llegan los recaudos.',
  lessons: [
  { t: 'Las palabras de los números',
    easy: ['Precio menos costos es tu ganancia.', 'No todos los pedidos se entregan.', 'Confirmación y entrega son tus dos tasas clave.', 'El ROAS solo no dice si ganas.'],
    body: [
      'Costo del producto: lo que te cobra el proveedor. Flete: lo que cobra la transportadora por llevarlo. Comisión de recaudo: un porcentaje por cobrar el efectivo (si tu plataforma lo cobra). Publicidad por pedido o CPA: lo que gastas en anuncios dividido por los pedidos que te llegan.',
      'Tasa de confirmación: de cada 100 pedidos que recibes, cuántos confirman sus datos y quieren el producto. Si recibes 100 y confirman 80, es 80 %.',
      'Tasa de entrega: de los pedidos despachados, cuántos se entregan y pagan. Si despachas 80 y se entregan 60, es 75 %.',
      'ROAS: ventas divididas por inversión en anuncios. Un ROAS de 3 parece bueno, pero no cuenta el costo del producto, los fletes ni las devoluciones. Puedes tener ROAS 3 y perder dinero.',
      'CPA de equilibrio: lo máximo que puedes pagar en anuncios por cada pedido recibido sin perder. Si tu CPA real está por encima, pierdes en cada pedido.'
    ],
    steps: ['Precio de venta', 'Menos producto', 'Menos flete', 'Menos comisión', 'Menos publicidad', 'Ganancia'],
    tip: 'Revisa en tu plataforma si el flete de ida se cobra aunque el pedido no se entregue. En la mayoría de casos sí.',
    videos: [], links: [LK('https://dropi.co/herramientas/margen', 'Dropi: calculadora de margen y precio de venta'), LK('https://dropi.co/herramientas/breakeven', 'Dropi: calculadora de CPA de equilibrio')],
    practice: {
      goal: 'Calcular las dos tasas clave y la ganancia bruta de un caso real.',
      tasks: ['Caso: en una semana recibiste 50 pedidos. Confirmaron 40. Despachaste los 40. Se entregaron 30.', 'Calcula tu tasa de confirmación y tu tasa de entrega.', 'Abre https://dropi.co/herramientas/margen, pon precio $69.900, costo $25.000 y flete $12.000, y mira el margen que te da.'],
      deliver: 'Tus dos tasas calculadas y el margen de la calculadora.',
      check: [{ q: 'Con el caso, ¿cuál es la tasa de entrega?', o: ['60 %', '75 %', '80 %', '30 %'], a: 1, e: '30 entregados de 40 despachados = 75 %.' },
              { q: 'Y la tasa de confirmación?', o: ['80 %', '60 %', '75 %', '50 %'], a: 0, e: '40 confirmados de 50 recibidos = 80 %.' }]
    } },
  { t: 'El ejemplo que lo cambia todo',
    easy: ['Mismo producto, mismo precio.', 'Con 70 % de entrega pierdes.', 'Con 85 % de entrega ganas.', 'La confirmación es la que mueve la entrega.'],
    body: [
      'Ejemplo con cifras ilustrativas: precio $89.900, producto $35.000, flete $14.000, publicidad $20.000 por pedido recibido, comisión de recaudo 3 %. Recibes 100 pedidos y confirmas 80.',
      'Si se entregan 70 % de los despachados (56 pedidos), el resultado es una pérdida de $196.632 por cada 100 pedidos. Si se entregan 85 % (68 pedidos), es una ganancia de $429.804.',
      'Nada cambió en el producto ni en el anuncio. Solo cambió cuántos pedidos llegaron y se pagaron. Por eso confirmar por WhatsApp, pedir la dirección completa y resolver novedades el mismo día son decisiones de dinero, no de servicio.',
      'La fórmula de la calculadora es: ganancia por pedido recibido = confirmación × entrega × (precio − producto − comisión) − confirmación × flete − publicidad. Así incluye que pagas flete por todo lo despachado, se entregue o no.',
      'Las tasas de entrega que circulan en internet (de 50 % a 80 %) vienen de vendedores y plataformas. No son estadísticas independientes. Usa las tuyas en cuanto las tengas.'
    ],
    steps: ['Pon tus datos en la calculadora', 'Mueve la tasa de entrega', 'Encuentra tu punto de equilibrio', 'Calcula tu CPA máximo', 'Decide'],
    warn: 'Si con tus números reales la calculadora da pérdida, no lo arregla vender más. Más pedidos con pérdida es más pérdida.',
    videos: [], links: [LK('https://dropi.co/herramientas/roi', 'Dropi: calculadora de ROI de anuncios')],
    practice: {
      goal: 'Usar la calculadora para encontrar en qué punto un producto pasa de perder a ganar.',
      tasks: ['Baja a la calculadora de esta lección. Deja los valores del ejemplo y mira el resultado.', 'Sube la tasa de entrega de 1 en 1 hasta que el resultado pase a positivo. Anota ese número.', 'Vuelve a 70 % de entrega y ahora baja la publicidad por pedido hasta que el resultado sea positivo. Anota ese valor.', 'Ahora pon: precio $79.900, costo $30.000, flete $13.000. Anota el CPA máximo.'],
      deliver: 'La tasa de entrega de equilibrio, la publicidad máxima a 70 % y el CPA máximo del segundo producto.',
      check: [{ q: 'Con los valores del ejemplo y 70 % de entrega, ¿la calculadora muestra ganancia o pérdida?', o: ['Ganancia', 'Pérdida', 'Cero exacto', 'No calcula'], a: 1, e: 'Muestra −$196.632 por cada 100 pedidos. Con 85 % pasa a ganancia.' },
              { q: 'Con precio $79.900, costo $30.000 y flete $13.000 (80 % confirmación, 70 % entrega, 3 % recaudo), ¿cuál es el CPA máximo aproximado?', o: ['Cerca de $15.000', 'Cerca de $16.200', 'Cerca de $30.000', 'Cerca de $50.000'], a: 1, e: '0,8 × 0,7 × (79.900 − 30.000 − 2.397) − 0,8 × 13.000 ≈ $16.200.' }]
    } },
  { t: 'El flujo de caja y la billetera',
    easy: ['Pagas los anuncios hoy.', 'El dinero de las entregas llega días después.', 'Necesitas caja para aguantar ese tiempo.', 'Cada plataforma libera el dinero a un ritmo distinto.'],
    body: [
      'Flujo de caja es cuándo entra y cuándo sale el dinero. En contraentrega pagas los anuncios cada día con tu tarjeta, pero el dinero de un pedido llega a tu billetera solo después de que se entrega y la plataforma lo liquida.',
      'Si un pedido tarda 3 días en entregarse y la plataforma tarda 3 días más en liberar el saldo, entre el anuncio y el dinero disponible pasa casi una semana. Si vendes mucho, necesitas mucho dinero para cubrir esa semana.',
      'Cálculo simple de caja mínima: gasto diario en anuncios × días entre el anuncio y el dinero disponible. Si gastas $50.000 al día y pasan 7 días, necesitas al menos $350.000 de caja, más un colchón.',
      'Las plataformas manejan el saldo de forma distinta. Lee en tu plataforma cómo funciona la tuya antes de pautar.',
      'Error común: ver mucho "saldo total" en la billetera y gastarlo. Parte de ese saldo son pedidos que todavía pueden devolverse.'
    ],
    steps: ['Mide días hasta la entrega', 'Mide días hasta liberar el saldo', 'Multiplica por tu gasto diario', 'Suma un colchón', 'Solo retira el saldo disponible'],
    plat: {
      dropi: { body: ['Según su sitio, Dropi paga a tu cuenta bancaria o billetera digital registrada 24 horas después de la entrega confirmada.', 'Para retirar debes tener tu identidad validada y tus datos bancarios completos.'], steps: ['Valida tu identidad', 'Registra tu cuenta bancaria', 'Revisa la billetera en el panel', 'Retira solo lo disponible'] },
      mastershop: { body: ['En Mastershop lo recaudado entra como "saldo pendiente" y pasa a "saldo disponible" a las 72 horas. Solo el disponible se retira.', 'El "saldo total" incluye pedidos que las transportadoras aún no han entregado o liquidado.', 'Existe un "adelanto de saldo" para liberar antes de las 72 horas, con requisitos. Los retiros a bancos en Colombia tienen costo.'], steps: ['Billetera', 'Balance y movimientos', 'Revisa saldo pendiente y disponible', 'Solicita retiro del disponible'] },
      effi: { body: ['En Effi el recaudo contraentrega llega a tu EffiWallet, que es un menú propio (no está dentro de Tesorería). En EffiWallet > Movimientos de wallets ves cada recaudo de venta y cada flete que se descuenta: con recaudo, sin recaudo y de devolución.', 'El Dashboard resume recaudos, retiros, flete pendiente de devoluciones y utilidad. Para sacar la plata usas EffiWallet > Solicitudes de retiro de wallet.'], steps: ['EffiWallet > Wallets', 'Movimientos de wallets', 'Cruza con las guías entregadas', 'Solicitud de retiro'], shots: [{ src: 'img/effi/wallet-movimientos.jpg', cap: 'EffiWallet > Movimientos de wallets: cada recaudo y cada flete descontado. Datos tapados.' }, { src: 'img/effi/wallet-retiros.jpg', cap: 'EffiWallet > Solicitudes de retiro de wallet: botón Crear para pedir tu plata.' }] }
    },
    videos: [],
    links: [LK('https://ayuda.mastershop.com/es/article/como-entender-el-saldo-comprometido-y-el-saldo-liquido-de-la-billetera-de-mastershop-6yjyrl/', 'Mastershop: saldo comprometido y saldo líquido'), LK('https://ayuda.mastershop.com/es/article/a-que-hace-referencia-el-saldo-pendiente-sld6rp/', 'Mastershop: qué es el saldo pendiente')],
    practice: {
      goal: 'Calcular la caja mínima que necesitas antes de pautar.',
      tasks: ['Caso: gastas $40.000 diarios en anuncios. La entrega tarda 4 días y tu plataforma libera el saldo 3 días después.', 'Calcula la caja mínima: gasto diario × días totales.', 'Abre la sección de billetera o tesorería de tu plataforma (o su artículo de ayuda) y anota cómo libera el dinero.'],
      plat: { dropi: ['En Dropi, entra a tu billetera desde el menú y revisa si tus datos bancarios están completos.'], mastershop: ['En Mastershop, abre Billetera > Balance y movimientos y ubica el saldo pendiente y el disponible.'], effi: ['En Effi, abre EffiWallet > Wallets y luego Movimientos de wallets; ubica un recaudo de venta y un flete descontado.'] },
      deliver: 'Tu caja mínima calculada y cómo libera el dinero tu plataforma.',
      check: [{ q: 'Con el caso, ¿cuál es la caja mínima sin colchón?', o: ['$120.000', '$160.000', '$280.000', '$40.000'], a: 2, e: '4 + 3 = 7 días. 7 × $40.000 = $280.000.' }]
    } }
  ],
  exam: [
    { q: 'Recibes 100 pedidos y confirman 75. ¿Tasa de confirmación?', o: ['25 %', '75 %', '100 %', '50 %'], a: 1, e: '75 de 100.' },
    { q: '¿Por qué un ROAS de 3 puede ser pérdida?', o: ['No cuenta producto, fletes ni devoluciones', 'Porque 3 es poco', 'Porque Meta miente', 'No puede'], a: 0, e: 'El ROAS solo mira ventas contra anuncios.' },
    { q: '¿Qué es el CPA de equilibrio?', o: ['Lo máximo que puedes pagar en anuncios por pedido sin perder', 'El precio del producto', 'El flete', 'La comisión'], a: 0, e: 'Por encima de ese valor pierdes.' },
    { q: 'En el ejemplo, ¿qué convirtió la pérdida en ganancia?', o: ['Bajar el precio', 'Subir la tasa de entrega', 'Cambiar el logo', 'Más pedidos'], a: 1, e: 'De 70 % a 85 % de entrega.' },
    { q: 'Gastas $30.000 diarios y pasan 6 días hasta tener el dinero. ¿Caja mínima?', o: ['$30.000', '$90.000', '$180.000', '$360.000'], a: 2, e: '6 × $30.000.' },
    { q: 'En Mastershop, ¿cuándo pasa el saldo pendiente a disponible?', o: ['De inmediato', 'A las 72 horas', 'Cada mes', 'Nunca'], a: 1, e: 'Según su centro de ayuda, a las 72 horas.' }
  ] },

{ id: 'p04', course: 'p', hours: 4, title: 'Elige y abre tu plataforma: Dropi, Mastershop o Effi',
  goal: 'Comparas las tres plataformas con información oficial, eliges la tuya, creas tu cuenta y sabes moverte por su panel.',
  lessons: [
  { t: 'Comparar las tres plataformas',
    easy: ['Dropi: el catálogo más grande, gratis para empezar.', 'Mastershop: reportes, novedades y automatizaciones.', 'Effi: sistema de gestión con guías, inventario y facturación.', 'Elige según tu modelo, no según la publicidad.'],
    body: [
      'Dropi es una plataforma colombiana de dropshipping que hoy opera en varios países. Según su sitio, el registro es gratis, no tiene mensualidad y tiene más de 160.000 productos de unos 2.400 proveedores. Se integra con Shopify, WooCommerce, Tiendanube y VTEX, y con herramientas de chat como Chatea y Pancake. Tiene academia gratuita y diez calculadoras de libre uso.',
      'Mastershop conecta proveedores, dropshippers y marcas propias. Tiene un "Mercado de productos", gestión de pedidos con estados y contadores, módulo de novedades, garantías, requerimientos a transportadoras, billetera con saldo pendiente y disponible, reportes de utilidad por pedido y por ciudad, y automatizaciones que avisan al cliente por WhatsApp el estado de su envío. Tiene apps para Shopify y Tiendanube.',
      'Effi, de Grupo Effi (Medellín), es un sistema de gestión empresarial (ERP) en la nube. Genera guías con transportadoras como Inter Rapidísimo, Servientrega, Coordinadora, Envía, TCC y Domina, maneja recaudo contraentrega con su billetera EffiWallet, inventario y bodegas, facturación electrónica ante la DIAN, una bandeja de chat (EffiChat) y dropshipping entre empresas. Tiene prueba gratis y luego un plan mensual. Se integra con Shopify, WooCommerce y Mercado Libre, entre otras.',
      'Cómo decidir: si no tienes inventario y quieres el catálogo más amplio, empieza en Dropi. Si quieres reportes detallados y automatizar avisos a tus clientes, mira Mastershop. Si tienes mercancía propia, un proveedor directo o necesitas facturar, Effi te da el control.',
      'Las comisiones, tarifas y plazos cambian. Lo que leas aquí es lo que publican hoy en sus sitios. Antes de pautar, revisa las condiciones vigentes dentro de la plataforma.'
    ],
    steps: ['Define tu modelo', 'Revisa catálogo o inventario', 'Revisa integraciones', 'Revisa cómo te pagan', 'Elige'],
    tip: 'No necesitas casarte con una. Lo que aprendes de pedidos, novedades y billetera sirve en las tres.',
    videos: [YT('h-pxQLSHOT4', 'Dropshipping rápido y local con Mastershop'), YT('WwxbgKvki7k', 'Dropshipping desde Effi, contraentrega y pago anticipado')],
    links: [LK('https://dropi.co/soluciones-para-dropshippers', 'Dropi: soluciones para dropshippers'), LK('https://ayuda.mastershop.com/es/', 'Centro de ayuda de Mastershop'), LK('https://effi.com.co/', 'Effi, sitio oficial')],
    practice: {
      goal: 'Comparar con datos reales y elegir tu plataforma.',
      tasks: ['Abre los tres sitios oficiales: https://dropi.co/, https://mastershop.com/ y https://effi.com.co/.', 'Arma en tus notas una tabla con 5 filas: costo para empezar, catálogo o inventario, integraciones, cómo te pagan, ayuda y formación.', 'Llena cada casilla con lo que encuentres en los sitios y en esta lección.', 'Elige tu plataforma y ponla en el selector de la academia.'],
      deliver: 'Tabla comparativa con 15 casillas llenas y tu plataforma elegida en el selector.',
      check: [{ q: 'Tienes un proveedor directo con bodega y necesitas facturar electrónicamente. ¿Cuál encaja mejor?', o: ['Dropi', 'Mastershop', 'Effi', 'Ninguna'], a: 2, e: 'Effi es un ERP con facturación electrónica e inventario, y permite despachar desde la bodega del proveedor.' },
              { q: 'Según Mastershop, ¿el precio del proveedor incluye el flete?', o: ['Sí', 'No, el flete se paga aparte', 'Solo los lunes', 'Depende del color'], a: 1, e: 'Su centro de ayuda indica que el precio del proveedor cubre solo el producto.' }]
    } },
  { t: 'Crear tu cuenta',
    easy: ['Regístrate en el sitio oficial, no con enlaces de terceros.', 'Ten a la mano tu cédula, correo y celular.', 'Valida tu identidad y tus datos bancarios.', 'Activa la seguridad de tu cuenta.'],
    body: [
      'Registrarte en el sitio oficial te protege de páginas falsas. Escribe tú mismo la dirección en el navegador.',
      'Necesitas: cédula, correo que revises a diario, celular con WhatsApp y, para recibir dinero, una cuenta bancaria a tu nombre. Algunas plataformas piden RUT para ciertas funciones.',
      'Usa una contraseña única y anótala en un lugar seguro. Activa la verificación en dos pasos si la plataforma la ofrece.',
      'Al terminar el registro, completa tu perfil al 100 %: datos de la tienda, dirección y cuenta bancaria. Un perfil incompleto suele bloquear retiros o ciertas funciones.'
    ],
    steps: ['Abre el sitio oficial', 'Regístrate', 'Confirma el código', 'Completa el perfil', 'Valida identidad y banco'],
    plat: {
      dropi: { body: ['En Colombia el registro está en app.dropi.co. Eliges el perfil de dropshipper y confirmas tu correo y celular.', 'Para retirar dinero Dropi pide identidad validada y datos bancarios completos.'], steps: ['Entra a dropi.co', 'Toca Regístrate', 'Elige dropshipper', 'Confirma código', 'Valida identidad', 'Registra cuenta bancaria'] },
      mastershop: { body: ['En Mastershop solicitas una cuenta gratuita según tu perfil: dropshipper, proveedor o marca propia.', 'Si el código de verificación no llega, revisa que el correo no esté ya registrado en otra plataforma de la familia Master. Si dice "código inválido", recupera la cuenta en vez de registrarte de nuevo.', 'El ingreso es en app.mastershop.com/login.'], steps: ['Solicita cuenta gratuita', 'Elige perfil', 'Confirma el código', 'Ingresa en app.mastershop.com', 'Completa Configuración del negocio'] },
      effi: { body: ['En Effi tocas "Prueba gratis" y eliges el tipo de cuenta (emprendedor o empresa registrada), el país, el plan y la moneda.', 'Luego registras los datos de la empresa y del usuario principal. El equipo de Effi acompaña la configuración por WhatsApp.', 'Si alguien entra desde un lugar inusual, Effi envía un código al correo y al WhatsApp del usuario principal.'], steps: ['Entra a effi.com.co/registro', 'Tipo de cuenta, país y plan', 'Datos de empresa', 'Usuario principal', 'Configura la empresa'] }
    },
    videos: [YT('icrDg9SV-vI', 'Crear y configurar tu cuenta Dropi (validación, banco, transportadora)'), YT('JWf1umrhftc', 'Cómo crear una cuenta en Dropi')],
    links: [LK('https://ayuda.mastershop.com/es/article/como-solicito-una-cuenta-gratuita-en-mastershop-4og44o/', 'Mastershop: solicitar una cuenta gratuita'), LK('https://effi.com.co/registro', 'Effi: crear cuenta')],
    practice: {
      goal: 'Tener tu cuenta creada, segura y con el perfil completo.',
      tasks: ['Escribe tú mismo en el navegador la dirección oficial de tu plataforma.'],
      plat: {
        dropi: ['Abre https://app.dropi.co/auth/register y regístrate como dropshipper.', 'Confirma el código del correo y entra.', 'En tu perfil sube tu documento para la validación de identidad.', 'Registra tu cuenta bancaria a tu nombre.'],
        mastershop: ['Lee https://ayuda.mastershop.com/es/article/como-solicito-una-cuenta-gratuita-en-mastershop-4og44o/ y solicita tu cuenta como dropshipper.', 'Confirma el código y entra por https://app.mastershop.com/login.', 'Abre Configuraciones > Configuración del negocio y completa el nombre y los datos de tu tienda.'],
        effi: ['Abre https://effi.com.co/registro y toca Prueba gratis.', 'Elige tipo de cuenta Emprendedor, país Colombia y moneda COP.', 'Registra los datos de tu empresa y del usuario principal.', 'Escribe al WhatsApp de soporte de Effi (+57 320 569 5371) para que te acompañen en la configuración inicial.']
      },
      deliver: 'Cuenta creada, perfil completo y contraseña guardada en un lugar seguro.',
      check: [{ q: '¿Por qué conviene escribir tú mismo la dirección oficial en el navegador?', o: ['Para evitar páginas falsas y enlaces de terceros', 'Porque es más rápido', 'Porque lo pide la DIAN', 'No importa'], a: 0, e: 'Así evitas sitios falsos y enlaces con intereses comerciales.' }]
    } },
  { t: 'Recorrer el panel',
    easy: ['Ubica dónde están los productos.', 'Ubica dónde están los pedidos.', 'Ubica la billetera o tesorería.', 'Ubica la ayuda.'],
    body: [
      'Todas las plataformas tienen las mismas zonas, aunque con nombres distintos: productos o catálogo, pedidos u operación, novedades, billetera o tesorería, reportes y configuración.',
      'Recorrer el panel antes de vender te ahorra errores cuando llega el primer pedido con el cliente esperando.',
      'Ubica también el canal de soporte: chat, correo o WhatsApp. Cuando tengas un problema con un pedido, el tiempo cuenta.'
    ],
    steps: ['Productos', 'Pedidos', 'Novedades', 'Billetera', 'Reportes', 'Configuración', 'Soporte'],
    plat: {
      dropi: { body: ['En Dropi encontrarás el catálogo de productos, tus pedidos, la billetera y la sección de integraciones con tu tienda.', 'Dropi Academy tiene un curso gratuito "Dropshipper desde cero" con certificación. Úsalo como complemento.'], steps: ['Catálogo', 'Pedidos', 'Billetera', 'Integraciones', 'Dropi Academy'] },
      mastershop: { body: ['En Mastershop el menú lateral tiene Productos (Mercado de productos y Mis productos), Operación (Gestión de pedidos, novedades, garantías, requerimientos), Ventas (reportes, clientes), Billetera y Configuraciones.', 'Cada estado de la gestión de pedidos tiene un contador que te ayuda a ver pedidos represados.'], steps: ['Productos', 'Operación', 'Ventas', 'Billetera', 'Configuraciones'] },
      effi: { body: ['El menú de Effi tiene, entre otros: Ventas, Inventario, Dropshipping, Logística (guías, novedades, transportadoras, remitentes), EffiWallet (recaudos y retiros), Tesorería, CONTAEFFI (contabilidad), Gestión comercial CRM y EffiChat.', 'Para operar contraentrega trabajas sobre todo en Ventas, Logística > Guías de transporte, Logística > Novedades de guías y EffiWallet.'], steps: ['Ventas', 'Inventario', 'Logística', 'EffiWallet', 'EffiChat'], shots: [{ src: 'img/effi/guias-lista.jpg', cap: 'Menú lateral con Logística abierto: Guías de transporte, Relaciones de despacho, Novedades de guías.' }, { src: 'img/effi/wallet-movimientos.jpg', cap: 'EffiWallet es un menú propio: Wallets, Movimientos, Solicitudes de retiro y Transferencias.' }] }
    },
    videos: [], links: [],
    practice: {
      goal: 'Saber dónde está cada cosa antes de tu primer pedido.',
      tasks: ['Entra a tu plataforma y recorre el menú completo sin hacer cambios.'],
      plat: {
        dropi: ['Ubica y anota en tus notas el nombre exacto de: catálogo, pedidos, billetera e integraciones.', 'Abre https://dropi.co/dropi-academy e inscríbete en "Dropshipper desde cero".'],
        mastershop: ['Ubica y anota: Mercado de productos, Gestión de pedidos, Gestión de novedades, Billetera y Reportes.', 'Abre https://ayuda.mastershop.com/es/article/para-que-sirve-el-contador-del-modulo-de-gestion-de-pedidos-nehbod/ y lee para qué sirve el contador de estados.'],
        effi: ['Ubica y anota en el menú: Ventas, Inventario > Artículos, Logística > Guías de transporte, Logística > Transportadoras y EffiWallet.', 'Abre https://effi.com.co/tracking y mira cómo se ve el rastreo público de una guía.']
      },
      deliver: 'Mapa de tu panel: el nombre exacto de cada sección.',
      check: [{ q: '¿Qué sección revisas cuando un cliente pregunta dónde está su paquete?', o: ['Billetera', 'Pedidos o guías, con el número de guía', 'Configuración', 'Reportes de nicho'], a: 1, e: 'El estado del envío está en el pedido o la guía.' }]
    } }
  ],
  exam: [
    { q: 'Según Dropi, ¿cuánto cuesta empezar?', o: ['Es gratis, sin mensualidad', 'Una mensualidad fija', 'Un pago anual', 'Depende del producto'], a: 0, e: 'Pagas los productos que despachas.' },
    { q: '¿Qué es Effi?', o: ['Una red social', 'Un sistema de gestión (ERP) con guías, inventario y facturación', 'Un banco', 'Una transportadora'], a: 1, e: 'Effi es un ERP en la nube.' },
    { q: 'En Mastershop, ¿dónde ves si hay pedidos represados?', o: ['En el contador de estados de Gestión de pedidos', 'En Instagram', 'En la billetera', 'No se puede'], a: 0, e: 'Cada estado tiene un contador.' },
    { q: '¿Con qué tiendas se integra Effi?', o: ['Shopify, WooCommerce y Mercado Libre, entre otras', 'Solo Instagram', 'Ninguna', 'Solo TikTok'], a: 0, e: 'Se conectan en Integraciones > Integraciones Ecommerce.' },
    { q: 'Te llega "código de verificación inválido" en Mastershop. ¿Qué haces?', o: ['Te registras con otro nombre', 'Recuperas la cuenta: el correo puede estar ya registrado', 'Esperas un mes', 'Cambias de celular'], a: 1, e: 'Es lo que recomienda su centro de ayuda.' },
    { q: '¿Qué ofrece Dropi Academy?', o: ['Cursos gratuitos con certificación', 'Préstamos', 'Productos gratis', 'Anuncios gratis'], a: 0, e: 'Tiene cursos básicos gratuitos.' }
  ] },

{ id: 'p05', course: 'p', hours: 5, title: 'Catálogo y tu primer pedido',
  goal: 'Lees una ficha de producto como profesional, creas un pedido manual con datos completos y sigues su estado hasta la entrega.',
  lessons: [
  { t: 'Leer una ficha de producto',
    easy: ['Mira costo, existencias y proveedor.', 'Revisa fotos, videos y garantía.', 'El precio sugerido no es obligatorio.', 'Pide muestra si puedes.'],
    body: [
      'Cada producto del catálogo muestra el costo para ti, el precio sugerido de venta, las existencias (stock), el proveedor, las fotos y videos, la descripción y la política de garantía.',
      'Existencias: si un producto tiene pocas unidades y tu anuncio funciona, te quedarás sin producto en dos días. Para pautar busca productos con stock suficiente o confirma con el proveedor.',
      'Proveedor: revisa su reputación, su tiempo de despacho y su garantía. Un buen producto con un mal proveedor genera devoluciones y reclamos.',
      'Precio sugerido: es una referencia del proveedor, no una obligación. Tu precio lo defines con tus números (módulo 3) y con la competencia.',
      'Material de promoción: muchos proveedores dan fotos y videos para tus anuncios. Úsalos de base, pero los anuncios con contenido propio suelen funcionar mejor porque no los ve todo el mundo.'
    ],
    steps: ['Costo', 'Existencias', 'Proveedor', 'Garantía', 'Material', 'Muestra'],
    plat: {
      dropi: { body: ['En el catálogo de Dropi filtras por categoría, ves costo, precio sugerido y existencias, y entras a la ficha del proveedor.', 'Dropi tiene un evaluador gratuito con IA y un comparador de productos en dropi.co/herramientas.'], steps: ['Catálogo', 'Filtra por categoría', 'Abre la ficha', 'Revisa proveedor y stock', 'Compara en Herramientas'] },
      mastershop: { body: ['En Mastershop entras a Productos > Mercado de productos y añades los que te interesan a "Mis productos".', 'Desde la ficha puedes ver anuncios relacionados, descargar material publicitario, solicitar una muestra al proveedor y usar el estudio de mercado con IA.'], steps: ['Mercado de productos', 'Abre el producto', 'Material publicitario', 'Estudio de mercado IA', 'Añadir a Mis productos'] },
      effi: { body: ['En Effi trabajas con artículos: los creas tú o los recibes de tu proveedor para dropshipping entre empresas. Cada artículo tiene categoría, marca, tarifas de precio e inventario por bodega.', 'Si tienes muchos artículos, Effi permite importarlos de forma masiva.'], steps: ['Artículos', 'Crear artículo', 'Categoría y marca', 'Tarifa de precio', 'Inventario por bodega'], shots: [{ src: 'img/effi/articulos.jpg', cap: 'Inventario > Artículos: Crear, Importar artículos, Actualizar tarifas de precios y Vincular masivamente con Ecommerce.' }] }
    },
    videos: [], links: [LK('https://ayuda.mastershop.com/es/article/como-anadir-un-producto-del-mercado-a-tus-productos-179w3vb/', 'Mastershop: añadir un producto del mercado'), LK('https://ayuda.mastershop.com/es/article/como-solicitar-la-muestra-de-un-producto-al-proveedor-1yvdv9t/', 'Mastershop: solicitar muestra al proveedor'), LK('https://dropi.co/herramientas/comparador', 'Dropi: comparador de productos')],
    practice: {
      goal: 'Evaluar 3 productos con criterios de profesional.',
      tasks: ['Haz una tabla con columnas: producto, costo, precio sugerido, existencias, proveedor, garantía, ¿tiene videos?'],
      plat: {
        dropi: ['En el catálogo de Dropi elige 3 productos de una misma categoría y llena la tabla.', 'Abre https://dropi.co/herramientas/comparador y compara los 3.'],
        mastershop: ['En Mercado de productos elige 3 productos de un mismo nicho y llena la tabla.', 'En el mejor, abre el estudio de mercado con IA y anota 2 datos que te dé.'],
        effi: ['Crea en Effi 1 artículo de prueba con nombre, categoría, precio y 10 unidades en una bodega.', 'Llena la tabla con 3 productos de tu proveedor o de tu inventario.']
      },
      deliver: 'Tabla de 3 productos y el que elegirías, con la razón.',
      check: [{ q: 'Un producto tiene 15 unidades en stock y piensas pautar fuerte. ¿Qué haces?', o: ['Pauto igual', 'Confirmo con el proveedor que puede reponer antes de pautar', 'Subo el precio', 'Lo ignoro'], a: 1, e: 'Sin stock suficiente, un anuncio exitoso se convierte en pedidos que no puedes cumplir.' }]
    } },
  { t: 'Crear un pedido manual',
    easy: ['Pedido manual es el que tú subes con los datos del cliente.', 'Se usa cuando vendes por WhatsApp o redes.', 'Dirección completa con barrio y referencias.', 'Revisa todo antes de confirmar.'],
    body: [
      'Cuando vendes por WhatsApp, Instagram o en persona, el pedido no entra solo: lo creas tú en la plataforma. Es la tarea más común del vendedor que empieza.',
      'Datos que nunca deben faltar: nombre completo, celular con WhatsApp, departamento, ciudad, dirección exacta, barrio, referencias ("casa esquinera, portón verde"), producto, variante (talla, color), cantidad y valor total a cobrar.',
      'Antes de guardar revisa: que el valor a cobrar sea el que acordaste, que la ciudad tenga cobertura de la transportadora y que el flete esté calculado.',
      'Un error en el celular o en la dirección es una novedad casi segura. Lee los datos en voz alta antes de confirmar.'
    ],
    steps: ['Nuevo pedido', 'Datos del cliente', 'Dirección y barrio', 'Producto y variante', 'Valor a cobrar', 'Revisar', 'Confirmar'],
    plat: {
      dropi: { body: ['En Dropi creas el pedido desde la sección de pedidos o desde el producto en el catálogo. Eliges la transportadora y ves el flete antes de confirmar.'], steps: ['Pedidos', 'Crear pedido', 'Datos del cliente', 'Producto', 'Transportadora y flete', 'Confirmar'] },
      mastershop: { body: ['En Mastershop vas a Operación > Gestión de pedidos y tocas "+ Nuevo pedido", arriba a la derecha.', 'Después confirmas el pedido y generas la guía, uno por uno o de forma masiva. Los confirmados quedan en "Por preparar".'], steps: ['Operación', 'Gestión de pedidos', '+ Nuevo pedido', 'Confirmar', 'Generar guía'] },
      effi: { body: ['En Effi el pedido es una orden de venta o una remisión de venta (si tu tienda está conectada, entra sola). El cliente queda en Terceros > Clientes.', 'La guía se crea en Logística > Guías de transporte > Crear: eliges el remitente (desde dónde sale el paquete), una transportadora "con recaudo" y el valor a recaudar.'], steps: ['Terceros > Clientes', 'Orden o remisión de venta', 'Remitente', 'Guía con recaudo', 'Imprimir rótulo'], shots: [{ src: 'img/effi/remisiones-venta.jpg', cap: 'Ventas > Remisiones de venta: aquí queda el pedido (también puede ser una orden de venta).' }, { src: 'img/effi/guia-crear-1.jpg', cap: 'Logística > Guías de transporte > Crear: transportadora, tipo de servicio y forma de pago del flete.' }, { src: 'img/effi/guia-crear-2.jpg', cap: 'Más abajo: valor declarado, valor del flete, remitente, destinatario y su dirección.' }] }
    },
    videos: [YT('Wfng4PYQHSU', 'Cómo enviar tu primer pedido en Dropi')],
    links: [LK('https://ayuda.mastershop.com/es/article/como-crear-un-pedido-manual-en-mastershop-unzlgy/', 'Mastershop: crear un pedido manual'), LK('https://ayuda.mastershop.com/es/article/como-generar-la-guia-de-un-pedido-manualmente-1vh6nx/', 'Mastershop: generar la guía manualmente')],
    practice: {
      goal: 'Practicar la captura de datos sin errores, con un caso.',
      tasks: ['Caso: un cliente te escribe "mándamelo a la casa, vivo en Bello, por el parque". Escribe en tus notas las 4 preguntas que le harías para completar la dirección.', 'Escribe el pedido completo con datos de ejemplo: nombre, celular, departamento, ciudad, dirección, barrio, referencia, producto, variante, valor.'],
      plat: {
        dropi: ['En Dropi abre el formulario de crear pedido y recorre los campos sin guardar. Anota cuáles son obligatorios.'],
        mastershop: ['Lee https://ayuda.mastershop.com/es/article/como-crear-un-pedido-manual-en-mastershop-unzlgy/ y abre "+ Nuevo pedido" para ver los campos sin guardar.'],
        effi: ['En Effi crea un cliente de prueba en Terceros > Clientes con todos los datos de dirección y una remisión de venta de prueba sin generar guía.']
      },
      deliver: 'Las 4 preguntas para completar la dirección y un pedido de ejemplo completo.',
      check: [{ q: '¿Cuál dirección genera menos novedades?', o: ['"Bello, por el parque"', '"Cra 50 # 45-20, barrio Niquía, Bello, casa esquinera portón verde"', '"Donde siempre"', '"Cerca al centro"'], a: 1, e: 'Dirección exacta, barrio, ciudad y referencia.' }]
    } },
  { t: 'Estados del pedido y seguimiento',
    easy: ['Cada pedido tiene un estado.', 'Revisa los estados cada día.', 'Comparte el número de guía con tu cliente.', 'Actúa rápido si algo se atasca.'],
    body: [
      'Los estados más comunes son: pendiente o por confirmar, confirmado, guía generada o por preparar, despachado, en tránsito, en reparto, con novedad, entregado, devuelto y cancelado.',
      'Un pedido "atascado" (varios días en el mismo estado) necesita que tú preguntes a soporte o a la transportadora.',
      'Comparte con el cliente su número de guía y el enlace de rastreo. Un cliente que sabe cuándo llega su paquete tiene más probabilidad de estar en casa y pagar.',
      'Revisa los estados a la misma hora cada día. Es una rutina de 15 minutos que salva pedidos.'
    ],
    steps: ['Revisa a la misma hora', 'Filtra por estado', 'Atiende novedades primero', 'Avisa al cliente', 'Escala a soporte'],
    plat: {
      dropi: { body: ['En Dropi filtras tus pedidos por estado y ves la guía. El conector MCP oficial permite consultar estados de pedidos en lenguaje natural desde Claude.'], steps: ['Pedidos', 'Filtrar por estado', 'Ver guía', 'Novedades'] },
      mastershop: { body: ['En Mastershop los confirmados aparecen en "Por preparar" con el subestado "Pendiente". Usa los contadores para priorizar. Si necesitas, puedes cambiar la transportadora de un pedido ya creado.', 'Mastershop puede enviar al cliente mensajes automáticos por WhatsApp con su guía y cada cambio de estado.'], steps: ['Gestión de pedidos', 'Revisa contadores', 'Por preparar', 'Cambiar transportadora si hace falta'] },
      effi: { body: ['En Effi sigues cada guía hasta la entrega, con indicadores por transportadora y por estado. El cliente puede rastrear en effi.com.co/tracking.'], steps: ['Guías de transporte', 'Filtra por estado', 'Rastreo público', 'Novedades de guías'], shots: [{ src: 'img/effi/guias-lista.jpg', cap: 'Guías de transporte: Cambiar estados en lote, Reporte de alistamiento, rótulos en PDF y estado global de cada guía.' }] }
    },
    videos: [], links: [LK('https://ayuda.mastershop.com/es/article/como-cambiar-la-transportadora-de-un-pedido-1vrd6ds/', 'Mastershop: cambiar la transportadora de un pedido'), LK('https://effi.com.co/tracking', 'Effi: rastreo público de guías')],
    practice: {
      goal: 'Crear tu mensaje de seguimiento y tu rutina diaria.',
      tasks: ['Escribe un mensaje de WhatsApp para enviar al cliente cuando se genera su guía: saludo, producto, valor a pagar, transportadora, número de guía y fecha estimada.', 'Pon una alarma diaria de 15 minutos para revisar estados.'],
      plat: {
        dropi: ['En Dropi ubica el filtro por estado de los pedidos y anota los nombres exactos de los estados que aparecen.'],
        mastershop: ['En Gestión de pedidos anota los nombres de cada estado y su contador actual.'],
        effi: ['En guías de transporte ubica el filtro por estado y la opción de rastreo.']
      },
      deliver: 'Mensaje de seguimiento listo y alarma diaria creada.',
      check: [{ q: 'Un pedido lleva 4 días "en tránsito" a una ciudad cercana. ¿Qué haces?', o: ['Esperar un mes', 'Consultar a soporte o a la transportadora y avisar al cliente', 'Cancelarlo sin avisar', 'Nada'], a: 1, e: 'Un pedido atascado necesita gestión activa.' }]
    } }
  ],
  exam: [
    { q: '¿Qué datos no deben faltar en un pedido?', o: ['Solo el nombre', 'Nombre, celular, ciudad, dirección, barrio, referencia y valor', 'El correo', 'El cumpleaños'], a: 1, e: 'Los datos completos evitan novedades.' },
    { q: '¿El precio sugerido es obligatorio?', o: ['Sí', 'No, es una referencia', 'Solo en diciembre', 'Lo decide la DIAN'], a: 1, e: 'Tu precio lo defines con tus números.' },
    { q: 'En Mastershop, ¿dónde creas un pedido manual?', o: ['Operación > Gestión de pedidos > + Nuevo pedido', 'Billetera', 'Referidos', 'Glosario'], a: 0, e: 'Según su centro de ayuda.' },
    { q: 'En Effi, ¿cómo queda un pedido contraentrega?', o: ['Una orden o remisión de venta con una guía "con recaudo"', 'Un anuncio', 'Una factura de compra', 'Un traslado'], a: 0, e: 'La guía lleva el valor a recaudar y la transportadora con recaudo.' },
    { q: '¿Por qué compartir la guía con el cliente?', o: ['Para que esté pendiente y reciba', 'Por obligación de Meta', 'Para cobrar más', 'No sirve'], a: 0, e: 'Un cliente informado recibe más.' },
    { q: '¿Por qué revisar el stock antes de pautar?', o: ['Para no vender lo que no hay', 'Por estética', 'Porque lo pide Meta', 'No importa'], a: 0, e: 'Sin stock no hay entregas.' }
  ] },

{ id: 'p06', course: 'p', hours: 5, title: 'Encontrar y validar productos',
  goal: 'Encuentras productos con evidencia de demanda, los calificas con criterios y descartas los que no pasan la prueba legal o de margen.',
  lessons: [
  { t: 'Qué hace bueno a un producto',
    easy: ['Resuelve un problema o genera deseo.', 'Se entiende en un video de 15 segundos.', 'Deja margen después de fletes y anuncios.', 'Es legal y no necesita registros que no tengas.'],
    body: [
      'Un buen producto para contraentrega cumple seis criterios: 1) resuelve un problema claro o genera un deseo fuerte, 2) se demuestra en video corto, 3) no se consigue fácil en la tienda del barrio, 4) deja margen para pagar flete y publicidad, 5) es liviano y no se rompe fácil, y 6) es legal sin trámites complejos.',
      'Margen: como regla práctica, el precio de venta debería ser al menos 2,5 a 3 veces el costo del producto para soportar flete, devoluciones y anuncios. Compruébalo siempre con la calculadora.',
      'Productos que mejor evitar al empezar: suplementos, cosméticos, medicamentos y alimentos (requieren registro sanitario o notificación INVIMA), electrónicos frágiles o caros, ropa con muchas tallas (más cambios) y réplicas de marcas (es ilegal).',
      'Califica cada producto de 1 a 5 en cada criterio. Los que sumen menos de 20 de 30, descártalos.'
    ],
    steps: ['Problema o deseo', 'Video corto', 'Difícil de conseguir', 'Margen', 'Logística', 'Legalidad'],
    warn: 'Vender réplicas de marcas registradas es ilegal y te pueden cerrar cuentas y anuncios.',
    videos: [YT('Xp9tDqRhiG4', 'Cómo encontrar productos para dropshipping')],
    links: [LK('https://dropi.co/herramientas/evaluador', 'Dropi: evaluador de productos con IA')],
    practice: {
      goal: 'Calificar productos con una matriz y descartar con criterio.',
      tasks: ['Elige 5 productos de tu plataforma o de tu proveedor.', 'Haz una matriz: 5 filas (productos) por 6 columnas (criterios). Califica de 1 a 5.', 'Suma cada fila y descarta los que tengan menos de 20.', 'Pasa el mejor por https://dropi.co/herramientas/evaluador (sirve aunque uses otra plataforma) y compara su resultado con tu matriz.'],
      deliver: 'Matriz de 5 productos calificada y tus finalistas.',
      check: [{ q: 'Un producto cuesta $40.000. Con la regla práctica, ¿desde qué precio empezarías a evaluarlo?', o: ['$50.000', '$60.000', 'Entre $100.000 y $120.000', '$40.000'], a: 2, e: '2,5 a 3 veces el costo: $100.000 a $120.000. Luego lo confirmas con la calculadora.' }]
    } },
  { t: 'Herramientas para investigar demanda',
    easy: ['Biblioteca de anuncios de Meta: qué anuncian otros.', 'Google Trends: si el interés sube o baja.', 'TikTok Creative Center: tendencias.', 'Tu plataforma: estudio de mercado y anuncios relacionados.'],
    body: [
      'Biblioteca de anuncios de Meta (facebook.com/ads/library): muestra todos los anuncios activos. Un anuncio que lleva más de 30 días activo y tiene varias versiones probablemente está vendiendo: nadie paga un mes por un anuncio que pierde.',
      'Google Trends (trends.google.com): compara el interés de búsqueda en Colombia en el tiempo. Sirve para ver si un producto está creciendo, es estacional o va en caída.',
      'TikTok Creative Center: muestra anuncios y tendencias de TikTok por país y categoría.',
      'Las plataformas también ayudan: Mastershop muestra anuncios relacionados con un producto y tiene estudio de mercado con IA; Dropi tiene un evaluador con IA y un comparador.',
      'Investiga en orden: idea, evidencia de anuncios, tendencia, competencia, números. Si falla un paso, no sigas.'
    ],
    steps: ['Idea', 'Biblioteca de anuncios', 'Google Trends', 'Competencia', 'Números'],
    videos: [YT('Vc6PGLJsn14', 'Cómo usar la Biblioteca de anuncios de Meta'), YT('1Dkp26Ejlow', 'Encontrar productos con la Biblioteca de anuncios')],
    links: [LK('https://www.facebook.com/ads/library/', 'Biblioteca de anuncios de Meta'), LK('https://trends.google.com/', 'Google Trends'), LK('https://ads.tiktok.com/business/creativecenter/', 'TikTok Creative Center'), LK('https://ayuda.mastershop.com/es/article/como-utilizar-ia-en-mastershop-para-el-estudio-de-mercado-de-tu-producto-1awva8x/', 'Mastershop: estudio de mercado con IA')],
    practice: {
      goal: 'Encontrar evidencia real de que tu producto se vende.',
      tasks: ['Abre https://www.facebook.com/ads/library/, elige Colombia y "Todos los anuncios" y busca tu producto finalista.', 'Encuentra 3 anuncios con fecha de inicio de hace más de 30 días. Toma captura y anota la fecha de cada uno.', 'Abre https://trends.google.com/, elige Colombia, últimos 12 meses, y busca el nombre genérico del producto. Anota si sube, baja o es estable.', 'Anota el precio al que lo venden tus 3 competidores.'],
      deliver: '3 capturas con fecha, la tendencia de 12 meses y 3 precios de competencia.',
      check: [{ q: '¿Qué indica que un anuncio lleva más de 30 días activo?', o: ['Que probablemente está vendiendo', 'Que es gratis', 'Que está prohibido', 'Nada'], a: 0, e: 'Nadie mantiene un mes un anuncio que pierde dinero.' }]
    } },
  { t: 'Validar con números y con la ley',
    easy: ['Pasa el producto por la calculadora.', 'Verifica si necesita INVIMA.', 'Revisa que no sea réplica.', 'Solo entonces lo pautas.'],
    body: [
      'Con los datos que reuniste, pon el producto en la calculadora: precio de la competencia, costo, flete y una tasa de entrega prudente (por ejemplo 70 %). Si el CPA máximo es muy bajo (por ejemplo, menos de $12.000), será difícil que los anuncios sean rentables.',
      'Verifica en la consulta de registros del INVIMA si el producto necesita registro sanitario o notificación sanitaria. Si es un suplemento, cosmético, alimento o dispositivo médico y no tiene registro, descártalo.',
      'Verifica que no sea una réplica de marca. Si tiene logo de una marca famosa a precio bajo, es casi seguro una réplica.',
      'Solo cuando pasa números, ley y logística, el producto está listo para probarse con anuncios.'
    ],
    steps: ['Calculadora', 'INVIMA', 'Marca', 'Logística', 'Listo para probar'],
    videos: [], links: [LK('https://consultaregistro.invima.gov.co', 'INVIMA: consulta de registros sanitarios'), LK('https://www.invima.gov.co/alertas-sanitarias/productos-fraudulentos-comercializados-en-comercio-electronico', 'INVIMA: alertas de productos en comercio electrónico')],
    practice: {
      goal: 'Aprobar o descartar tu producto con evidencia.',
      tasks: ['Pon tu producto finalista en la calculadora del módulo 3 con el precio promedio de la competencia y 70 % de entrega. Anota el CPA máximo.', 'Si es cosmético, suplemento, alimento o dispositivo, búscalo en https://consultaregistro.invima.gov.co.', 'Decide: aprobado o descartado, y escribe la razón en una línea.'],
      deliver: 'Ficha de validación: CPA máximo, estado INVIMA y decisión.',
      check: [{ q: 'Un suplemento dietario no aparece en la consulta del INVIMA. ¿Qué haces?', o: ['Lo vendo sin decir nada', 'Lo descarto', 'Lo vendo como "natural"', 'Le cambio el nombre'], a: 1, e: 'Un suplemento sin registro se considera fraudulento.' }]
    } }
  ],
  exam: [
    { q: '¿Qué producto es mejor para empezar?', o: ['Un suplemento sin registro', 'Un objeto liviano que resuelve un problema y se demuestra en video', 'Una réplica de marca', 'Un televisor'], a: 1, e: 'Cumple los criterios.' },
    { q: '¿Para qué sirve Google Trends?', o: ['Ver si el interés sube o baja', 'Crear anuncios', 'Cobrar', 'Despachar'], a: 0, e: 'Muestra el interés de búsqueda en el tiempo.' },
    { q: 'Un producto cuesta $30.000. ¿Precio mínimo con la regla práctica?', o: ['$45.000', '$75.000 a $90.000', '$30.000', '$200.000'], a: 1, e: '2,5 a 3 veces el costo.' },
    { q: '¿Qué productos necesitan registro o notificación INVIMA?', o: ['Suplementos, cosméticos, alimentos y dispositivos médicos', 'Organizadores de cocina', 'Cables', 'Juguetes de madera'], a: 0, e: 'Son productos de salud y consumo.' },
    { q: 'Un CPA máximo de $8.000 indica...', o: ['Que los anuncios serán muy difíciles de pagar', 'Que es excelente', 'Nada', 'Que el producto es ilegal'], a: 0, e: 'Un CPA máximo bajo deja poco espacio para la publicidad.' },
    { q: '¿Qué herramienta de Mastershop te ayuda a investigar un producto?', o: ['Estudio de mercado con IA', 'Recogida fija', 'Referidos', 'Billetera'], a: 0, e: 'Está en la ficha del producto.' }
  ] },

{ id: 'p07', course: 'p', hours: 3, title: 'Oferta, precio y combos',
  goal: 'Defines tu precio desde los costos y la competencia, y diseñas ofertas que suben el valor del pedido sin engañar.',
  lessons: [
  { t: 'Precio desde los costos',
    easy: ['Empieza en tu precio mínimo.', 'Mira la competencia.', 'Precios como $89.900 se leen mejor.', 'No compitas solo por precio.'],
    body: [
      'Tu precio mínimo es el que, con tus tasas prudentes, deja un CPA máximo suficiente para anunciar. Calcúlalo en la calculadora subiendo el precio hasta que el resultado sea positivo con un CPA realista.',
      'Luego mira la competencia. Si todos venden a $79.900 y tu mínimo es $89.900, necesitas una oferta que justifique la diferencia: un regalo, mejor garantía, envío más rápido o un combo.',
      'Precios psicológicos: $89.900 se percibe más bajo que $90.000. La calculadora de precios psicológicos de Dropi ayuda a elegirlos.',
      'Bajar el precio para vender más casi nunca funciona en contraentrega: baja tu margen y no cambia tu costo por devolución.'
    ],
    steps: ['Precio mínimo', 'Precio de la competencia', 'Diferencial', 'Precio final'],
    videos: [], links: [LK('https://dropi.co/herramientas/pricing', 'Dropi: calculadora de precios psicológicos')],
    practice: {
      goal: 'Fijar el precio de tu producto con método.',
      tasks: ['En la calculadora, con tu producto, sube el precio hasta que el CPA máximo sea al menos $18.000. Ese es tu precio mínimo.', 'Compáralo con los 3 precios de la competencia del módulo anterior.', 'Abre https://dropi.co/herramientas/pricing y elige tu precio final terminado en 900.'],
      deliver: 'Precio mínimo, precio de competencia y precio final.',
      check: [{ q: 'Tu mínimo es $89.900 y la competencia vende a $79.900. ¿Qué haces?', o: ['Bajo a $79.900 aunque pierda', 'Mantengo y agrego un diferencial: regalo, garantía o combo', 'Subo a $150.000', 'Me rindo'], a: 1, e: 'Necesitas justificar la diferencia sin perder margen.' }]
    } },
  { t: 'Combos y urgencia honesta',
    easy: ['Un combo sube el valor del pedido.', 'El flete es uno solo.', 'La urgencia debe ser real.', 'Nada de "solo hoy" falso.'],
    body: [
      'El valor promedio del pedido sube cuando el cliente lleva más de una unidad. Como el flete es uno solo, cada unidad extra deja casi todo su margen.',
      'Ofertas típicas: 1 unidad a $89.900; 2 unidades a $149.900; combo con un complemento a $119.900. Calcula el margen de cada una: costo de las unidades, un solo flete, misma publicidad.',
      'La urgencia funciona cuando es verdad: "quedan 20 unidades de este lote", "promoción hasta el domingo". Si es falsa, es publicidad engañosa y la SIC la sanciona.',
      'Muestra siempre el precio total final con todo incluido.'
    ],
    steps: ['1 unidad', '2 unidades', 'Combo', 'Calcula margen', 'Urgencia real'],
    warn: 'Un contador regresivo que se reinicia cada vez que entras es engañoso.',
    videos: [], links: [LK('https://dropi.co/herramientas/ingresos', 'Dropi: calculadora de ingresos mensuales')],
    practice: {
      goal: 'Diseñar tres ofertas y saber cuál deja más.',
      tasks: ['Caso: costo $30.000 por unidad, flete $13.000, publicidad $18.000 por pedido.', 'Oferta A: 1 unidad a $89.900. Oferta B: 2 unidades a $149.900.', 'Calcula la ganancia bruta de cada oferta (sin devoluciones): precio − costo de unidades − flete − publicidad.'],
      deliver: 'Ganancia de la oferta A y de la B.',
      check: [{ q: '¿Cuánto deja la oferta B (2 unidades a $149.900)?', o: ['$28.900', '$58.900', '$88.900', '$149.900'], a: 1, e: '149.900 − 60.000 − 13.000 − 18.000 = $58.900. La A deja $28.900.' }]
    } }
  ],
  exam: [
    { q: '¿Por qué un combo de 2 unidades deja más?', o: ['Porque el flete y la publicidad son uno solo', 'Porque es ilegal', 'No deja más', 'Porque el cliente paga el flete doble'], a: 0, e: 'Cada unidad extra conserva casi todo su margen.' },
    { q: '¿Cuál urgencia es legal?', o: ['"Solo hoy" todos los días', '"Quedan 20 unidades" cuando es verdad', 'Un contador que se reinicia', 'Precio tachado inventado'], a: 1, e: 'La urgencia debe ser real.' },
    { q: '¿Qué precio se percibe más bajo?', o: ['$90.000', '$89.900', 'Igual', '$100.000'], a: 1, e: 'Es un precio psicológico.' },
    { q: '¿Bajar el precio arregla un producto con pérdida?', o: ['Siempre', 'Casi nunca: baja el margen y no cambia el costo de devolución', 'Sí, en diciembre', 'Solo en Dropi'], a: 1, e: 'Más pedidos con pérdida es más pérdida.' },
    { q: '¿Qué precio debe ver el cliente?', o: ['El precio total final', 'Sin flete', 'Sin impuestos', 'Ninguno'], a: 0, e: 'La ley pide informar el precio total.' },
    { q: '¿Qué es el precio mínimo?', o: ['El que deja un CPA máximo suficiente para anunciar', 'El más bajo del mercado', 'El sugerido', 'El costo'], a: 0, e: 'Sale de tus números.' }
  ] },

{ id: 'p08', course: 'p', hours: 5, title: 'Vender por WhatsApp',
  goal: 'Configuras WhatsApp Business, vendes con un guion, confirmas pedidos para que se entreguen y manejas objeciones.',
  lessons: [
  { t: 'Configurar WhatsApp Business',
    easy: ['La app WhatsApp Business es gratis.', 'Perfil, catálogo, respuestas rápidas y etiquetas.', 'Usa un número solo para el negocio.', 'Para volumen alto existe la plataforma (API).'],
    body: [
      'WhatsApp Business (la app) es gratuita. Tiene perfil de empresa, catálogo, mensajes de bienvenida y ausencia, respuestas rápidas y etiquetas. Sirve muy bien cuando atiendes tú.',
      'Usa un número dedicado al negocio. Si mezclas el personal, pierdes orden y privacidad.',
      'Etiquetas recomendadas: Nuevo, Interesado, Pedido tomado, Confirmado, Despachado, Novedad, Entregado. Así ves en un vistazo en qué va cada cliente.',
      'Respuestas rápidas: /precio, /envio, /garantia, /confirmar. Ahorran tiempo y evitan errores al escribir valores.',
      'WhatsApp Business Platform (la API) permite varios asesores, CRM y agentes de IA como JadeMind. Desde julio de 2025 Meta cobra por mensaje de plantilla entregado según categoría y país. Revisa la página oficial de precios.'
    ],
    steps: ['Instala la app', 'Perfil de empresa', 'Catálogo', 'Respuestas rápidas', 'Etiquetas', 'Mensaje de bienvenida'],
    videos: [YT('aVb2wcUzSjA', 'Tutorial WhatsApp Business: catálogo, pagos y mensajes automáticos'), YT('1iLH5Ccl07o', 'Cómo usar WhatsApp Business para vender')],
    links: [LK('https://business.whatsapp.com/', 'WhatsApp Business, sitio oficial')],
    practice: {
      goal: 'Dejar tu WhatsApp listo para vender.',
      tasks: ['Instala WhatsApp Business desde Play Store o App Store con el número del negocio.', 'En Herramientas para la empresa > Perfil de empresa llena nombre, categoría, horario y descripción.', 'En Catálogo agrega tu producto con foto, precio total y descripción.', 'En Respuestas rápidas crea /precio, /envio, /garantia y /confirmar.', 'En Etiquetas crea las 7 etiquetas de la lección.'],
      deliver: 'Perfil completo, 1 producto en catálogo, 4 respuestas rápidas y 7 etiquetas.',
      check: [{ q: '¿Para qué sirven las etiquetas?', o: ['Para ver en qué etapa va cada cliente', 'Para decorar', 'Para cobrar', 'Para bloquear'], a: 0, e: 'Te ordenan el embudo de ventas.' }]
    } },
  { t: 'Guion de venta y confirmación',
    easy: ['Saluda, pregunta, ofrece, pide datos, confirma.', 'Confirma dirección, valor y fecha.', 'Pide que respondan SÍ.', 'Confirmar sube tu tasa de entrega.'],
    body: [
      'Un guion simple: 1) saludo con tu nombre y la tienda, 2) pregunta qué necesita, 3) beneficio principal del producto, 4) oferta con precio total, 5) pedir datos completos, 6) confirmación.',
      'Mensaje de confirmación: "Hola, [nombre]. Soy [tienda]. Recibimos tu pedido de [producto] por $[valor total], pago al recibir. ¿Confirmas la dirección [dirección], barrio [barrio], [ciudad]? Llega entre [fecha] y [fecha]. Responde SÍ para enviarlo."',
      'Pedir un "SÍ" escrito compromete al cliente. Si no responde en unas horas, llama una vez. Si no contesta, no despaches: guarda el pedido como pendiente.',
      'Esta confirmación es la herramienta más poderosa para subir tu tasa de entrega, y en el módulo 3 viste cuánto dinero vale eso.'
    ],
    steps: ['Saludo', 'Pregunta', 'Beneficio', 'Oferta', 'Datos', 'Confirmación SÍ'],
    tip: 'Un agente de IA en WhatsApp responde las 24 horas y confirma pedidos automáticamente. Lo ves en el curso avanzado con JadeMind.',
    videos: [YT('I5TTHAQGmkM', 'Cómo vender por WhatsApp con Meta Ads')],
    links: [LK('https://dropi.co/blog/como-vender-por-whatsapp-sin-inventario', 'Dropi: vender por WhatsApp sin inventario')],
    practice: {
      goal: 'Escribir y ensayar tu guion completo.',
      tasks: ['Copia el guion de 6 pasos en tus notas y adáptalo a tu producto y precio.', 'Guarda el mensaje de confirmación como respuesta rápida /confirmar.', 'Pídele a alguien que te escriba como cliente y responde solo con tu guion. Cronometra cuánto tardas hasta tener los datos completos.'],
      deliver: 'Guion adaptado, /confirmar guardado y tiempo del ensayo.',
      check: [{ q: 'El cliente no responde la confirmación en 6 horas y no contesta la llamada. ¿Qué haces?', o: ['Despacho igual', 'No despacho; lo dejo pendiente', 'Le cobro', 'Lo bloqueo'], a: 1, e: 'Sin confirmación el riesgo de devolución es alto.' }]
    } },
  { t: 'Objeciones y seguimiento',
    easy: ['"¿Es confiable?": muestra pruebas reales.', '"Está caro": explica el valor u ofrece combo.', '"No estaré": otra persona u otra dirección.', 'Haz seguimiento sin presionar.'],
    body: [
      '"¿Es confiable?": envía fotos reales del producto, reseñas reales de clientes (con permiso) y explica que paga al recibir. Muestra tu política de garantía.',
      '"Está caro": no bajes el precio de una. Explica el beneficio, compara con la alternativa ("una visita al técnico cuesta más") u ofrece el combo.',
      '"No voy a estar": acuerda que reciba otra persona, una dirección de trabajo o una fecha diferente.',
      '"Lo pienso": pregunta qué duda tiene. Haz un seguimiento a las 24 horas con algo útil (un video de uso), no con presión.',
      'Nunca inventes reseñas ni urgencias. Además de ilegal, cuando el cliente lo descubre, no recibe.'
    ],
    steps: ['Escucha la objeción', 'Pregunta la duda real', 'Responde con prueba', 'Ofrece alternativa', 'Seguimiento a 24 h'],
    videos: [], links: [],
    practice: {
      goal: 'Tener respuestas listas para las objeciones más comunes.',
      tasks: ['Escribe una respuesta para cada objeción: confiable, caro, no estaré, lo pienso.', 'Guárdalas como respuestas rápidas /confiable, /valor, /recibe y /duda.', 'Escribe tu mensaje de seguimiento a 24 horas con un video o una foto de uso.'],
      deliver: '4 respuestas rápidas nuevas y un mensaje de seguimiento.',
      check: [{ q: 'El cliente dice "está caro". ¿Cuál es la mejor primera respuesta?', o: ['Bajar el precio 30 %', 'Explicar el beneficio y ofrecer el combo', 'Ignorarlo', 'Inventar que se acaba hoy'], a: 1, e: 'Defiendes el margen y das una alternativa real.' }]
    } }
  ],
  exam: [
    { q: '¿Qué confirmas antes de despachar?', o: ['Nombre, dirección con barrio, valor y fecha', 'Su signo', 'Su correo', 'Nada'], a: 0, e: 'Datos completos y valor acordado.' },
    { q: '¿Por qué pedir que respondan SÍ?', o: ['Compromete al cliente', 'Es obligatorio por ley', 'Para cobrar más', 'No sirve'], a: 0, e: 'Un compromiso escrito sube la entrega.' },
    { q: '¿Qué es WhatsApp Business Platform?', o: ['La versión API para varios asesores y agentes de IA', 'Una red social', 'Un banco', 'Un juego'], a: 0, e: 'Permite volumen, CRM y agentes.' },
    { q: 'Desde julio de 2025, ¿cómo cobra Meta en la plataforma?', o: ['Por mensaje de plantilla entregado', 'Gratis siempre', 'Por foto', 'Por emoji'], a: 0, e: 'Revisa la página oficial de precios.' },
    { q: '"¿Es confiable?" ¿Cómo respondes?', o: ['Con fotos reales, reseñas reales y pago al recibir', 'Con reseñas inventadas', 'Bloqueando', 'Subiendo el precio'], a: 0, e: 'Pruebas reales.' },
    { q: '¿Para qué un número dedicado al negocio?', o: ['Orden y privacidad', 'Es más barato', 'Lo exige la DIAN', 'No importa'], a: 0, e: 'Separas lo personal del negocio.' }
  ] },

{ id: 'p09', course: 'p', hours: 5, title: 'Legal básico para vender en Colombia',
  goal: 'Sabes qué trámites necesitas, qué derechos tiene tu cliente y qué productos no puedes vender.',
  lessons: [
  { t: 'RUT, facturación y Régimen Simple',
    easy: ['El RUT es gratis en la DIAN.', 'Para comercio por internet se usa la actividad 4791.', 'Una persona natural factura si supera 3.500 UVT al año.', 'El Régimen Simple es opcional: simúlalo con un contador.'],
    body: [
      'El RUT (Registro Único Tributario) se tramita gratis en la DIAN. Para comercio por internet normalmente se usa la actividad económica CIIU 4791.',
      'Una persona natural debe facturar electrónicamente si sus ingresos brutos superan 3.500 UVT al año. Con la UVT de 2026 ($52.374) son $183.309.000. Las sociedades (por ejemplo una S.A.S.), los responsables de IVA y los inscritos en el Régimen Simple facturan siempre.',
      'Ojo: en contraentrega tus "ingresos brutos" pueden ser el valor total que cobras, no solo tu ganancia. Esto cambia mucho el cálculo. Pregúntale a un contador cómo aplica en tu caso.',
      'El Régimen Simple de Tributación es opcional y paga sobre ingresos brutos. Si tu margen es bajo puede no convenirte.',
      'Effi incluye facturación electrónica ante la DIAN, y la DIAN tiene un facturador gratuito.'
    ],
    steps: ['Saca o actualiza el RUT', 'Calcula tus ingresos brutos anuales', 'Compáralos con 3.500 UVT', 'Pregunta a un contador'],
    tip: 'La UVT cambia cada año. Revisa el valor vigente antes de calcular.',
    videos: [], links: [LK('https://www.dian.gov.co/impuestos/factura-electronica/Documents/Abece-FE-Facturador.pdf', 'DIAN: abecé del facturador electrónico')],
    practice: {
      goal: 'Saber si hoy estarías obligado a facturar.',
      tasks: ['Caso: vendes 120 pedidos al mes de $89.900 cobrados al cliente.', 'Calcula cuánto cobras en un año: pedidos × precio × 12.', 'Compáralo con $183.309.000 (3.500 UVT de 2026).', 'Abre https://www.dian.gov.co, busca "RUT" y guarda la página de inscripción.'],
      deliver: 'Tu cálculo anual y si superas el tope.',
      check: [{ q: 'Con el caso, ¿cuánto cobras al año y superas el tope?', o: ['$10.788.000, no', '$129.456.000, no', '$129.456.000, sí', '$300.000.000, sí'], a: 1, e: '120 × 89.900 × 12 = $129.456.000, por debajo de $183.309.000. Con 170 pedidos al mes ya lo superarías.' }]
    } },
  { t: 'Los derechos de tu cliente (Ley 1480)',
    easy: ['Informa quién eres, el precio total y el tiempo de entrega.', 'Retracto: 5 días hábiles desde que recibe.', 'Devuelves el dinero en máximo 30 días.', 'Nunca "sin garantía".'],
    body: [
      'El Estatuto del Consumidor (Ley 1480 de 2011) te obliga a informar tu identidad, el precio total, los medios de pago, el tiempo de entrega y el derecho de retracto.',
      'Retracto: el cliente puede arrepentirse dentro de los 5 días hábiles desde que recibe el producto. Debes devolver el dinero en máximo 30 días calendario. El transporte de la devolución lo paga el consumidor, aunque puedes ofrecerlo gratis.',
      'Garantía: el producto debe funcionar como lo prometiste. Nunca vendas "sin garantía".',
      'Publicidad engañosa: no prometas lo que el producto no hace. Las multas pueden llegar a 2.000 salarios mínimos.'
    ],
    steps: ['Publica tus datos', 'Precio total', 'Explica el retracto', 'Publica tu garantía'],
    warn: 'Un testimonio inventado o una urgencia falsa es publicidad engañosa.',
    videos: [], links: [LK('https://sedeelectronica.sic.gov.co/noticias/se-arrepintio-de-una-compra-y-no-sabe-que-hacer', 'SIC: derecho de retracto'), LK('http://www.secretariasenado.gov.co/senado/basedoc/ley_1480_2011_pr001.html', 'Texto de la Ley 1480 de 2011')],
    practice: {
      goal: 'Escribir tu política de retracto y garantía.',
      tasks: ['Abre el artículo de la SIC sobre retracto (enlace abajo) y lee los plazos.', 'Escribe tu política en 5 líneas: quién eres, cómo pedir el retracto, plazo, cómo devuelves el dinero y garantía.', 'Revisa la garantía que ofrece el proveedor de tu producto en tu plataforma y ajústala.'],
      deliver: 'Tu política de retracto y garantía lista para publicar.',
      check: [{ q: 'Un cliente recibió el lunes y pide el retracto el jueves de la misma semana. ¿Procede?', o: ['No', 'Sí, está dentro de 5 días hábiles', 'Solo con bono', 'Solo si paga multa'], a: 1, e: 'Está dentro del plazo. Devuelves el dinero en máximo 30 días.' }]
    } },
  { t: 'Datos personales y productos prohibidos',
    easy: ['Pide autorización para usar datos.', 'Publica tu política de datos.', 'Productos de salud y belleza necesitan INVIMA.', 'Sin registro, no vendas.'],
    body: [
      'La Ley 1581 de 2012 pide autorización previa e informada para tratar datos personales, por ejemplo una casilla en el formulario, y una política de tratamiento de datos publicada.',
      'Necesitan registro sanitario INVIMA los suplementos dietarios, medicamentos, fitoterapéuticos, alimentos procesados y dispositivos médicos. Los cosméticos necesitan Notificación Sanitaria Obligatoria (NSO), también para vender en redes.',
      'Un suplemento sin registro sanitario se considera fraudulento. El INVIMA publica alertas frecuentes sobre productos vendidos por internet.',
      'Además, Meta rechaza o bloquea anuncios de productos de salud con promesas. Un producto prohibido te cuesta dinero, cuentas y reputación.'
    ],
    steps: ['Casilla de autorización', 'Política de datos', 'Verificar INVIMA', 'Descartar sin registro'],
    warn: 'Vender salud o belleza sin registro te expone a sanciones y a bloqueos de anuncios.',
    videos: [], links: [LK('https://consultaregistro.invima.gov.co', 'INVIMA: consulta de registros'), LK('https://www.invima.gov.co/alertas-sanitarias/productos-fraudulentos-comercializados-en-comercio-electronico', 'INVIMA: alertas de comercio electrónico')],
    practice: {
      goal: 'Dejar listo tu texto de datos y revisar tu catálogo.',
      tasks: ['Escribe el texto de tu casilla: "Autorizo a [tienda] a tratar mis datos para gestionar mi pedido, según su política de datos y la Ley 1581 de 2012".', 'Revisa los productos que guardaste: marca cuáles necesitarían INVIMA.', 'Busca 1 de ellos en https://consultaregistro.invima.gov.co.'],
      deliver: 'Texto de autorización y lista de productos revisada.',
      check: [{ q: '¿Qué necesita un cosmético para venderse, incluso en redes?', o: ['Nada', 'Notificación Sanitaria Obligatoria (NSO)', 'Un hashtag', 'Un RUT del cliente'], a: 1, e: 'Los cosméticos necesitan NSO del INVIMA.' }]
    } }
  ],
  exam: [
    { q: '¿Cuánto cuesta el RUT?', o: ['Es gratis', '$100.000', '$1.000.000', 'Depende'], a: 0, e: 'Se tramita gratis en la DIAN.' },
    { q: 'Plazo del retracto', o: ['5 días hábiles desde que recibe', '30 días', '1 año', 'No existe'], a: 0, e: 'Ley 1480.' },
    { q: '¿En cuánto tiempo devuelves el dinero de un retracto?', o: ['Máximo 30 días calendario', '1 año', 'Cuando quieras', 'Nunca'], a: 0, e: 'Plazo legal.' },
    { q: 'Una persona natural factura electrónicamente si supera...', o: ['3.500 UVT de ingresos al año', '1 venta', '10 UVT', 'Nunca'], a: 0, e: 'Con la UVT 2026, $183.309.000.' },
    { q: '¿Qué ley protege los datos personales?', o: ['Ley 1581 de 2012', 'Ley 100', 'Ley 1480', 'Ninguna'], a: 0, e: 'Pide autorización previa.' },
    { q: '¿Un suplemento sin registro INVIMA?', o: ['Se considera fraudulento', 'Es legal si es natural', 'Se puede vender en redes', 'Es mejor'], a: 0, e: 'No lo vendas.' }
  ] }
);
})();
