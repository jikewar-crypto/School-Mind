/* School Mind — prácticas guiadas clic a clic (actualizado nov. 2026)
   Cada tarea: t = qué vas a lograr, go = enlace donde empiezas, s = clics en orden, ok = cómo sabes que terminaste.
   Las tareas por plataforma reemplazan a las anteriores. Los nombres de botones van entre comillas como aparecen en pantalla. */
(function(){
function T(t,go,s,ok){return {t:t,go:go||'',s:s||[],ok:ok||''}}
var AL='https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=CO';
var BS='https://business.facebook.com/latest/settings';
var AM='https://adsmanager.facebook.com';
var EM='https://business.facebook.com/events_manager2';
var WAB_A='En Android: toca ⋮ (arriba a la derecha) → "Herramientas para la empresa". En iPhone: "Configuración" → "Herramientas para la empresa".';
var G={};

/* ===================== PRINCIPIANTE ===================== */
G['p01-1']={tasks:[
 T('Ajustar la letra para leer sin esfuerzo','',[
  'En el menú de la izquierda (o en "Menú" si estás en el celular) toca "Accesibilidad".',
  'En "Tamaño de letra" elige la opción que leas sin acercarte a la pantalla.',
  'Si te cansa la vista, activa también "Alto contraste".',
  'Cierra el panel con la X.'],'Las lecciones se ven con la letra que elegiste.'),
 T('Elegir tu plataforma de trabajo','',[
  'En el menú de la izquierda busca la caja "Tu plataforma".',
  'Ábrela y elige Dropi, Mastershop o Effi. Si no sabes, deja Dropi: en el módulo 4 las comparas.',
  'Abre cualquier lección: la sección "En tu plataforma" y la práctica ya muestran esa plataforma.'],'La caja "Tu plataforma" muestra tu elección.'),
 T('Reservar tus horas de estudio','',[
  'Abre la app de Calendario de tu celular (Google Calendar o Calendario de iPhone).',
  'Toca "+" → "Evento".',
  'Título: School Mind. Duración: 45 minutos.',
  'Toca "No se repite" (o "Repetir") → "Personalizado" → elige 2 días fijos de la semana.',
  'Agrega una notificación 10 minutos antes y toca "Guardar".'],'Ves dos bloques de School Mind cada semana en tu calendario.')
]};
G['p01-2']={tasks:[
 T('Encontrar promesas engañosas en anuncios reales',AL,[
  'Abre el enlace: ya trae país Colombia, "Todos los anuncios" y solo activos.',
  'En el buscador escribe curso dropshipping y presiona Enter.',
  'Toca "Ver detalles del anuncio" en 3 anuncios distintos.',
  'Copia en tus notas cada frase con cifra de dinero o tiempo ("gana $10 millones", "en 30 días").'],'Tienes al menos 3 frases engañosas anotadas.'),
 T('Fijar tu presupuesto y tus reglas de parada','',[
  'Abre las notas de tu celular y crea una nota llamada "Mis límites".',
  'Escribe tu presupuesto de aprendizaje con un número exacto (ej.: $800.000).',
  'Regla 1: gasto máximo por producto antes de descartarlo (ej.: $200.000).',
  'Regla 2: pedidos mínimos que esperas con ese gasto (ej.: 8).',
  'Regla 3: fecha límite para decidir si sigues.'],'La nota tiene un presupuesto y tres reglas con números.')
]};
G['p02-1']={tasks:[
 T('Armar la tabla de responsabilidades','',[
  'Abre https://sheets.google.com y toca "+" (Hoja en blanco).',
  'En la fila 1 escribe: Yo | Proveedor | Transportadora | Plataforma.',
  'Ubica cada tarea en su columna: hacer el anuncio, empacar, cobrar el efectivo, generar la guía, responder un reclamo, liquidar la ganancia, confirmar la dirección, guardar el inventario.'],'Las 8 tareas están en una columna cada una.'),
 T('Comparar tu tabla con el flujo oficial','https://ayuda.mastershop.com/es/article/que-es-mastershop-1jg51fh/',[
  'Lee el artículo "Qué es Mastershop" del centro de ayuda.',
  'Lee la parte que explica quién despacha y quién cobra.',
  'Corrige en tu tabla lo que no coincida.'],'Tu tabla coincide con el flujo descrito.')
]};
G['p02-2']={tasks:[
 T('Calcular cuánto cuesta una devolución','',[
  'Caso: vendes a $79.900; flete de ida $13.000; flete de devolución $13.000; anuncios $18.000 por pedido.',
  'En tu hoja escribe en una celda =13000+13000+18000.',
  'Ese resultado es lo que pierdes si el pedido vuelve (más el tiempo de tu equipo).'],'Tienes el valor de la pérdida por devolución ($44.000).'),
 T('Prevenir fallas en cada paso','',[
  'En una columna escribe los 8 pasos del recorrido del pedido.',
  'Al lado de cada uno escribe qué puede fallar.',
  'En una tercera columna escribe una acción concreta para evitarlo.'],'Cada paso tiene una falla y una acción.')
]};
G['p02-3']={tasks:[
 T('Elegir tu modelo de inicio','',[
  'Responde en tus notas: ¿cuánto tienes para mercancía? ¿Tienes dónde guardarla? ¿Tienes proveedor directo?',
  'Si la mercancía es menor a $1.000.000 o no tienes espacio, marca "dropshipping".',
  'Si tienes proveedor y espacio, marca "inventario propio". Si tienes producto diferenciado, "marca propia".'],'Tu modelo está escrito.'),
 T('Escoger la plataforma que encaja','',[
  'Relee la tabla de esta lección (Dropi, Mastershop, Effi).',
  'Escribe en 3 líneas qué plataforma encaja con tu modelo y por qué.',
  'Cámbiala en "Tu plataforma" del menú si es distinta.'],'Tu modelo, tu plataforma y la razón están escritos.')
]};
G['p03-1']={tasks:[
 T('Calcular tus dos tasas clave','',[
  'Caso: 50 pedidos recibidos, 40 confirmados, 40 despachados, 30 entregados.',
  'Tasa de confirmación = 40 ÷ 50 = escribe el resultado en %.',
  'Tasa de entrega = 30 ÷ 40 = escribe el resultado en %.'],'Tienes 80 % de confirmación y 75 % de entrega.'),
 T('Ver el margen en una calculadora real','https://dropi.co/herramientas/margen',[
  'En "Precio de venta" escribe 69900.',
  'En "Costo del producto" escribe 25000 y en "Flete" 12000.',
  'Pulsa calcular y anota el margen que muestra.'],'Tienes el margen anotado.')
]};
G['p03-2']={tasks:[
 T('Encontrar la entrega de equilibrio','',[
  'Baja hasta la calculadora de esta lección (debajo de la explicación).',
  'Deja los valores del ejemplo y mira el resultado.',
  'Sube "Tasa de entrega" de 1 en 1 hasta que el resultado se ponga verde. Anota ese %.'],'Tienes tu tasa de entrega de equilibrio.'),
 T('Encontrar la publicidad máxima','',[
  'Vuelve a poner 70 % de entrega.',
  'Baja "Publicidad por pedido" hasta que el resultado sea positivo. Anota el valor.'],'Tienes la publicidad máxima a 70 %.'),
 T('Calcular el CPA máximo de otro producto','',[
  'Cambia a precio 79900, costo 30000 y flete 13000.',
  'Anota el "CPA máximo" que muestra la calculadora.'],'Tienes el CPA máximo del segundo producto.')
]};
G['p03-3']={tasks:[
 T('Calcular tu caja mínima','',[
  'Caso: $40.000 diarios en anuncios; la entrega tarda 4 días y la plataforma libera 3 días después.',
  'Días totales = 4 + 3 = 7.',
  'Caja mínima = 40000 × 7. Escríbelo en tu hoja.'],'Tu caja mínima es $280.000.')
],plat:{
 dropi:[T('Ver cómo libera Dropi tu dinero','https://app.dropi.co',[
  'Inicia sesión y en el menú izquierdo abre "Historial de Cartera".',
  'Filtra por fechas del último mes.',
  'Lee el aviso de órdenes Sin Recaudo y escribe con tus palabras qué significa.',
  'Toca "Descargar" para bajar el Excel de movimientos.'],'Sabes qué es Sin Recaudo y tienes el Excel.')],
 mastershop:[T('Ver el saldo pendiente y disponible','https://app.mastershop.com',[
  'Inicia sesión y abre "Billetera" en el menú.',
  'Entra a "Balance y Movimientos".',
  'Ubica el saldo pendiente y el disponible y anota la diferencia.'],'Tienes ambos saldos anotados.')],
 effi:[T('Ver recaudos y fletes en EffiWallet','https://effi.com.co',[
  'Inicia sesión y abre "EffiWallet" → "Wallets".',
  'Entra a "Movimientos de wallets".',
  'Ubica un movimiento de recaudo de venta y uno de flete descontado.'],'Sabes leer un recaudo y un flete.')]
}};
G['p04-1']={tasks:[
 T('Abrir los tres sitios oficiales','',[
  'Escribe tú mismo en el navegador: dropi.co, mastershop.com y effi.com.co (una pestaña por cada uno).',
  'En cada sitio busca precios o planes, catálogo e integraciones.'],'Tienes las tres pestañas abiertas.'),
 T('Llenar la tabla comparativa','https://sheets.google.com',[
  'Crea una hoja con columnas Dropi | Mastershop | Effi.',
  'Filas: costo para empezar, catálogo o inventario, integraciones, cómo te pagan, ayuda y formación.',
  'Llena las 15 casillas con lo que viste y con esta lección.'],'Las 15 casillas están llenas.'),
 T('Dejar tu plataforma en la academia','',[
  'En el menú izquierdo abre "Tu plataforma" y elige la ganadora.'],'La academia muestra tu plataforma.')
]};
G['p04-2']={tasks:[
 T('Entrar solo por la dirección oficial','',[
  'Escribe tú mismo la dirección en el navegador. No uses enlaces de anuncios ni de grupos.',
  'Guarda la página en favoritos (estrella en la barra de direcciones).'],'Tienes el favorito oficial.')
],plat:{
 dropi:[T('Crear y validar tu cuenta de Dropi','https://app.dropi.co/auth/register',[
  'Llena nombre, correo, celular y contraseña y toca "Registrarme".',
  'Confirma el correo con el enlace que te llega.',
  'Inicia sesión: arriba verás una franja amarilla. Toca "Datos completos".',
  'Completa "Datos personales", sube tu documento en "Validación de identidad" y registra tu "Cuenta bancaria".',
  'Guarda la contraseña en un gestor (Google o iCloud).'],'La franja amarilla desaparece y tu cuenta queda validada.')],
 mastershop:[T('Crear tu cuenta y terminar el onboarding','https://app.mastershop.com',[
  'Toca "Regístrate", llena tus datos y confirma el correo.',
  'Al entrar verás el onboarding de 5 pasos.',
  'En "Ingresa los datos del negocio" toca "Completar" y llena "Configuración del Negocio".',
  'Registra "Información Fiscal" (cédula o NIT) y "Cuenta Bancaria".',
  'Completa tu "Perfil Público".'],'Los 5 pasos del onboarding aparecen completos.')],
 effi:[T('Crear tu cuenta de Effi','https://effi.com.co/registro',[
  'Toca "Prueba gratis".',
  'Elige tipo de cuenta "Emprendedor", país Colombia y moneda COP.',
  'Llena los datos de la empresa y del usuario principal y toca "Registrar".',
  'Escribe al WhatsApp de soporte de Effi (+57 320 569 5371) para la configuración inicial.'],'Entras al panel de Effi con tu usuario.')]
}};
G['p04-3']={tasks:[
 T('Recorrer el menú sin cambiar nada','',[
  'Abre tu plataforma en el computador.',
  'Toca cada opción del menú izquierdo una por una.',
  'Anota el nombre exacto de cada sección y para qué sirve en una línea.'],'Tienes el mapa de tu panel.')
],plat:{
 dropi:[T('Leer el Dashboard de Dropi','https://app.dropi.co',[
  'Abre "Dashboard".',
  'Recorre en orden: "Productos", "Mis Pedidos", "Historial de Cartera", "Reportes" y "Soporte".',
  'Vuelve al Dashboard y anota la diferencia entre "Utilidad Total" y la utilidad "Estimada".'],'Sabes dónde está cada sección.')],
 mastershop:[T('Recorrer los paneles de Mastershop','https://app.mastershop.com',[
  'Abre en orden: "Inicio", "Productos", "Operación", "Ventas", "Billetera" y "Configuraciones".',
  'En cada uno anota el nombre de 2 secciones internas.'],'Tienes 2 secciones anotadas por panel.')],
 effi:[T('Ubicar las secciones clave de Effi','https://effi.com.co',[
  'Abre "Ventas", luego "Inventario" → "Artículos".',
  'Abre "Logística" → "Guías de transporte" y "Logística" → "Transportadoras".',
  'Abre "EffiWallet".',
  'En otra pestaña abre https://effi.com.co/tracking y mira cómo se ve el rastreo público.'],'Tienes las 5 secciones anotadas.')]
}};
G['p05-1']={tasks:[
 T('Preparar la tabla de evaluación','https://sheets.google.com',[
  'Crea columnas: producto, costo, precio sugerido, existencias, proveedor, garantía, ¿tiene videos?'],'La tabla está lista.')
],plat:{
 dropi:[T('Evaluar 3 productos en el catálogo de Dropi','https://app.dropi.co',[
  'Abre "Productos" → "Catálogo".',
  'Toca "Filtros": pon un stock mínimo (ej.: 100) y la ciudad de bodega más cercana a tus clientes.',
  'Abre la ficha de 3 productos y llena la tabla.',
  'En el mejor toca "Calculadora de flete", pon una ciudad real y anota la ganancia al precio sugerido.'],'Tabla con 3 productos y la ganancia del mejor.')],
 mastershop:[T('Evaluar 3 productos en el Mercado','https://app.mastershop.com',[
  'Abre "Productos" → "Mercado de Productos".',
  'Filtra por "Recomendados".',
  'Abre 3 fichas y anota reputación del proveedor y horas de despacho.',
  'En el mejor toca "Añadir a mis productos".'],'Tabla con 3 productos y uno en Mis Productos.')],
 effi:[T('Crear un artículo de prueba en Effi','https://effi.com.co',[
  'Abre "Inventario" → "Artículos" → "Crear".',
  'Llena nombre, categoría y marca.',
  'En "Tarifa de precio" pon el precio de venta.',
  'En inventario por bodega pon 10 unidades y guarda.',
  'Llena la tabla con 3 productos de tu proveedor.'],'El artículo aparece en la lista y la tabla tiene 3 productos.')]
}};
G['p05-2']={tasks:[
 T('Completar una dirección incompleta','',[
  'Caso: "mándamelo a la casa, vivo en Bello, por el parque".',
  'Escribe las 4 preguntas: dirección exacta con número, barrio, punto de referencia y quién recibe.'],'Tienes las 4 preguntas.'),
 T('Escribir un pedido completo de ejemplo','',[
  'Escribe: nombre, celular, departamento, ciudad, dirección, barrio, referencia, producto, variante y valor.'],'El pedido de ejemplo tiene los 10 datos.')
],plat:{
 dropi:[T('Simular un pedido en Dropi sin enviarlo','https://app.dropi.co',[
  'Abre "Productos" → "Catálogo" y entra a un producto.',
  'Toca "Enviar a cliente".',
  'Llena los datos del cliente de ejemplo y marca "Con Recaudo".',
  'Elige transportadora y lee el resumen con la ganancia.',
  'Anota la ganancia y sal sin tocar "Enviar al cliente".'],'Tienes la ganancia anotada y no creaste ningún pedido.')],
 mastershop:[T('Simular un pedido en Mastershop sin crearlo','https://app.mastershop.com',[
  'Abre "Operación" → "Gestión de Pedidos" → "Nuevo Pedido".',
  'Elige el producto y llena los datos del cliente.',
  'Método de pago: contraentrega. Elige transportadora.',
  'Lee el "Resumen" y anota la utilidad estimada. No toques "Crear Pedido".'],'Tienes la utilidad anotada sin crear el pedido.')],
 effi:[T('Crear cliente y remisión de prueba en Effi','https://effi.com.co',[
  'Abre "Terceros" → "Clientes" → "Crear" y llena todos los datos de dirección.',
  'Abre "Ventas" → "Remisión de venta" → "Crear", elige ese cliente y el artículo de prueba.',
  'Guarda la remisión sin generar guía.'],'La remisión existe y no tiene guía.')]
}};
G['p05-3']={tasks:[
 T('Escribir tu mensaje de guía generada','',[
  'Escribe: saludo, producto, valor a pagar, transportadora, número de guía y fecha estimada.',
  'Guárdalo en WhatsApp Business como respuesta rápida /guia ('+WAB_A+' → "Respuestas rápidas" → "+").'],'/guia está guardada.'),
 T('Programar tu revisión diaria','',[
  'Abre la app Reloj → "Alarma" → "+".',
  'Pon la hora, repetir de lunes a sábado y nombre "Revisar estados".'],'La alarma suena todos los días.')
],plat:{
 dropi:[T('Crear etiquetas para tus pedidos','https://app.dropi.co',[
  'Abre "Mis Pedidos" → "Etiquetas".',
  'Crea "Confirmado por WhatsApp" y "Llamar".',
  'Filtra "Mis Pedidos" por fechas y lee el estatus de 3 pedidos.'],'Ves las 2 etiquetas al marcar un pedido.')],
 mastershop:[T('Recorrer las etapas de un pedido','https://app.mastershop.com',[
  'Abre "Gestión de Pedidos".',
  'Recorre las pestañas: "Por preparar", "En preparación", "En tránsito" y "Finalizadas".',
  'Anota en cuál ya no se puede editar el pedido.'],'Sabes en qué etapa se bloquea la edición.')],
 effi:[T('Filtrar y rastrear guías','https://effi.com.co',[
  'Abre "Logística" → "Guías de transporte".',
  'Usa el filtro por estado.',
  'Copia un número de guía y búscalo en https://effi.com.co/tracking.'],'Sabes filtrar y rastrear.')]
}};
G['p06-1']={tasks:[
 T('Calificar 5 productos con una matriz','https://sheets.google.com',[
  'Elige 5 productos de tu plataforma.',
  'Crea una hoja: filas = productos; columnas = los 6 criterios de la lección.',
  'Califica de 1 a 5 y en la última columna escribe =SUMA(B2:G2).',
  'Descarta los que sumen menos de 20.'],'Tienes tus finalistas.'),
 T('Contrastar con el evaluador','https://dropi.co/herramientas/evaluador',[
  'Llena los datos del mejor producto (sirve aunque uses otra plataforma).',
  'Compara el resultado con tu matriz y anota si coinciden.'],'Tienes la comparación anotada.')
]};
G['p06-2']={tasks:[
 T('Buscar anuncios activos de tu producto',AL,[
  'Escribe el nombre genérico de tu producto y presiona Enter.',
  'Toca "Filtros" → en fecha elige desde hace más de 30 días.',
  'Abre 3 anuncios, toma captura y anota la fecha "Comenzó a circular el…".'],'Tienes 3 capturas con fecha.'),
 T('Revisar la tendencia en Google','https://trends.google.com/trends/explore?geo=CO&date=today%2012-m',[
  'El enlace ya trae Colombia y últimos 12 meses.',
  'Escribe el nombre genérico del producto en "Agregar un término de búsqueda".',
  'Mira la curva: anota si sube, baja o es estable.',
  'Baja a "Interés por subregión" y anota los 3 departamentos con más interés.'],'Tienes la tendencia y las regiones.'),
 T('Mirar anuncios ganadores en TikTok','https://ads.tiktok.com/business/creativecenter/',[
  'Abre "Inspiración" → "Anuncios principales" (Top Ads).',
  'Filtra Región: Colombia; Industria: comercio electrónico; Objetivo: conversiones.',
  'Busca tu producto o categoría y anota 1 gancho que se repita.'],'Tienes un gancho de referencia.'),
 T('Anotar precios de la competencia','',[
  'Abre las páginas de los 3 anuncios que guardaste.',
  'Anota el precio final de cada uno.'],'Tienes 3 precios.')
],plat:{
 dropi:[T('Usar Caza productos de Dropi','https://app.dropi.co',[
  'Abre "Caza productos".',
  'Busca tu producto y compara proveedores.'],'Tienes el proveedor más conveniente.')],
 mastershop:[T('Pedir el estudio de mercado con IA','https://app.mastershop.com',[
  'Abre la ficha del producto en "Mercado de Productos".',
  'Toca "Estudio de Mercado con IA" y léelo.'],'Tienes el estudio leído.')],
 effi:[T('Revisar convenios de dropshipping','https://effi.com.co',[
  'Abre "Terceros" → "Convenios de Dropshipping".',
  'Revisa qué proveedores tienen tu producto.'],'Sabes quién lo despacha.')]
}};
G['p06-3']={tasks:[
 T('Calcular el CPA máximo con precio real','',[
  'Abre la lección "El ejemplo que lo cambia todo" (módulo 3) y baja a la calculadora.',
  'Pon el precio promedio de la competencia y 70 % de entrega.',
  'Anota el CPA máximo.'],'Tienes el CPA máximo.'),
 T('Consultar el registro INVIMA','https://consultaregistro.invima.gov.co',[
  'Solo si es cosmético, suplemento, alimento o dispositivo médico.',
  'Busca por nombre del producto o por número de registro de la etiqueta.',
  'Anota si está "Vigente".'],'Sabes si tiene registro vigente.'),
 T('Decidir','',[
  'Escribe en una línea: aprobado o descartado, y la razón.'],'La decisión está escrita.')
]};
G['p07-1']={tasks:[
 T('Encontrar tu precio mínimo','',[
  'En la calculadora del módulo 3 pon los datos de tu producto.',
  'Sube el precio hasta que el CPA máximo sea al menos $18.000.',
  'Ese es tu precio mínimo. Compáralo con los 3 precios de la competencia.'],'Tienes precio mínimo y de competencia.'),
 T('Ajustar el precio final','https://dropi.co/herramientas/pricing',[
  'Llena costo, flete y margen deseado.',
  'Elige tu precio final terminado en 900.'],'Tu precio final está escrito.')
]};
G['p07-2']={tasks:[
 T('Comparar dos ofertas','https://sheets.google.com',[
  'Datos: costo $30.000 por unidad, flete $13.000, publicidad $18.000 por pedido.',
  'Oferta A (1 unidad a $89.900): =89900-30000-13000-18000.',
  'Oferta B (2 unidades a $149.900): =149900-60000-13000-18000.',
  'Marca la que deja más por pedido.'],'A deja $28.900 y B $58.900.')
]};
G['p08-1']={tasks:[
 T('Instalar WhatsApp Business','',[
  'Abre Play Store o App Store y busca "WhatsApp Business".',
  'Toca "Instalar" y regístrate con el número del negocio.',
  'Escribe el nombre de tu tienda y elige la categoría.'],'La app abre con el nombre de tu tienda.'),
 T('Completar el perfil de empresa','',[
  WAB_A,'Toca "Perfil de empresa".',
  'Llena descripción, horario, correo y sitio web. Toca "Guardar".'],'Tu perfil muestra horario y descripción.'),
 T('Subir tu producto al catálogo','',[
  'En "Herramientas para la empresa" toca "Catálogo" → "Añadir artículo nuevo".',
  'Sube la foto, escribe el nombre, el precio total y la descripción.',
  'Toca "Guardar".'],'El producto aparece en tu catálogo.'),
 T('Crear las respuestas rápidas','',[
  'En "Herramientas para la empresa" toca "Respuestas rápidas" → "+".',
  'Crea /precio, /envio, /garantia y /confirmar con su texto.'],'Al escribir "/" en un chat aparecen las 4.'),
 T('Crear las etiquetas','',[
  'En Chats toca ⋮ → "Etiquetas" → "+" (en iPhone: "Configuración" → "Herramientas para la empresa" → "Etiquetas").',
  'Crea las 7 etiquetas de la lección.'],'Ves las 7 etiquetas.')
]};
G['p08-2']={tasks:[
 T('Adaptar el guion','',[
  'Copia los 6 pasos del guion en tus notas.',
  'Cambia producto, precio y beneficios por los tuyos.'],'El guion está adaptado.'),
 T('Guardar el mensaje de confirmación','',[
  WAB_A,'Toca "Respuestas rápidas" → "+".',
  'Atajo: /confirmar. Mensaje: el de confirmación del guion. Toca "Guardar".'],'/confirmar está guardada.'),
 T('Ensayar con alguien','',[
  'Pídele a alguien que te escriba como cliente.',
  'Responde solo con tu guion y cronometra hasta tener todos los datos.'],'Tienes el tiempo del ensayo.')
]};
G['p08-3']={tasks:[
 T('Responder las 4 objeciones','',[
  'Escribe una respuesta para: ¿es confiable?, está caro, no estaré, lo pienso.'],'Las 4 respuestas están escritas.'),
 T('Guardarlas como respuestas rápidas','',[
  WAB_A,'"Respuestas rápidas" → "+": crea /confiable, /valor, /recibe y /duda.'],'Las 4 aparecen al escribir "/".'),
 T('Preparar el seguimiento a 24 horas','',[
  'Escribe un mensaje corto con un video o foto de uso del producto.',
  'Guárdalo como /seguimiento.'],'/seguimiento está guardada.')
]};
G['p09-1']={tasks:[
 T('Calcular tus ingresos anuales','',[
  'Caso: 120 pedidos al mes a $89.900.',
  'En tu hoja: =120*89900*12.',
  'Compáralo con $183.309.000 (3.500 UVT de 2026).'],'Sabes si superas el tope.'),
 T('Ubicar la inscripción del RUT','https://www.dian.gov.co',[
  'En la página principal busca y toca "Inscripción virtual RUT" (sección RUT o "Temas de interés").',
  'Elige "Persona natural" y mira qué datos te pide (cédula y fecha de expedición).',
  'Guarda la página en favoritos. Si ya tienes RUT, descárgalo desde https://muisca.dian.gov.co.'],'Tienes el acceso guardado.')
]};
G['p09-2']={tasks:[
 T('Leer el derecho de retracto','https://www.sic.gov.co',[
  'En el buscador de la SIC escribe "derecho de retracto".',
  'Abre el artículo y anota el plazo (5 días hábiles) y cómo se devuelve el dinero.'],'Tienes plazos anotados.'),
 T('Escribir tu política','',[
  'En 5 líneas: quién eres, cómo pedir el retracto, plazo, cómo devuelves el dinero y garantía.'],'La política está escrita.')
],plat:{
 dropi:[T('Revisar la garantía del proveedor','https://app.dropi.co',['Abre la ficha de tu producto en "Catálogo" y lee la garantía.','Ajusta tu política a ese plazo.'],'Tu política no promete más que el proveedor.')],
 mastershop:[T('Revisar la garantía del proveedor','https://app.mastershop.com',['Abre la ficha en "Mercado de Productos" y lee la garantía.','Ajusta tu política.'],'Tu política no promete más que el proveedor.')],
 effi:[T('Revisar la garantía de tu proveedor','https://effi.com.co',['Abre "Terceros" → "Proveedores" y revisa las condiciones pactadas.','Ajusta tu política.'],'Tu política no promete más que el proveedor.')]
}};
G['p09-3']={tasks:[
 T('Escribir tu casilla de datos','',[
  'Copia: "Autorizo a [tienda] a tratar mis datos para gestionar mi pedido, según su política de datos y la Ley 1581 de 2012".',
  'Cambia [tienda] por tu nombre comercial.'],'El texto está listo.'),
 T('Revisar tu catálogo','https://consultaregistro.invima.gov.co',[
  'Marca en tu lista qué productos necesitarían INVIMA.',
  'Busca 1 de ellos por nombre y anota el estado.'],'Tu lista está revisada.')
]};

/* ===================== INTERMEDIO ===================== */
G['i01-1']={tasks:[
 T('Pasar Instagram a cuenta profesional','',[
  'En Instagram toca tu foto de perfil → ☰ (arriba a la derecha).',
  'Toca "Tipo de cuenta y herramientas" → "Cambiar a cuenta profesional" → "Empresa".',
  'Toca "Editar perfil" y en la biografía escribe qué vendes.',
  'En "Enlaces" agrega wa.me/57TUNUMERO.'],'Tu perfil dice "Empresa" y el enlace abre tu WhatsApp.'),
 T('Grabar 3 videos con 3 ganchos','',[
  'Graba en vertical, 15–20 segundos, el mismo producto.',
  'Cambia solo los primeros 3 segundos (el gancho) en cada video.'],'Tienes 3 videos.'),
 T('Publicar y medir','',[
  'Publica uno por día a la misma hora.',
  'A las 48 horas toca "Ver estadísticas" en cada video.',
  'Anota vistas, % que vio completo y mensajes recibidos.'],'Tienes el ganador.')
]};
G['i01-2']={tasks:[
 T('Generar ganchos con IA','https://claude.ai',[
  'Escribe: "Dame 20 ganchos de máximo 8 palabras para un video vertical que venda [producto] a [público] en Colombia. Sin promesas de salud ni de dinero."',
  'Tacha los que prometan algo que el producto no garantiza.',
  'Guarda tus 5 mejores.'],'Tienes 5 ganchos aprobados.'),
 T('Pedir videos a clientes','',[
  'Escribe el mensaje para clientes entregados pidiendo un video y la autorización de uso.',
  'Guárdalo en WhatsApp Business como /video.'],'/video está guardada.')
],plat:{
 dropi:[T('Probar ROAX de Dropi','https://app.dropi.co',['Abre "Marketing" → "ROAX" → "Nueva Campaña".','Revisa que los textos no hagan promesas falsas.'],'Sabes generar y revisar con ROAX.')],
 mastershop:[T('Revisar el contenido del proveedor','https://app.mastershop.com',['Abre la ficha del producto y descarga imágenes y videos.','Elige uno para tu primer anuncio.'],'Tienes material base.')],
 effi:[T('Guardar fotos en el artículo','https://effi.com.co',['Abre "Inventario" → "Artículos" y edita tu artículo.','Sube las fotos que usarás.'],'Tu artículo tiene fotos.')]
}};
G['i02-1']={tasks:[
 T('Estudiar una landing real',AL,[
  'Busca tu producto y abre un anuncio activo hace más de 30 días.',
  'Toca el botón del anuncio para abrir su página.',
  'Toma captura de cada bloque.'],'Tienes las capturas.'),
 T('Escribir tus 9 bloques','https://docs.google.com',[
  'Crea un documento y escribe el texto de cada bloque para tu producto.',
  'Revisa: precio total, retracto, garantía y casilla de datos.'],'El documento tiene los 9 bloques.')
]};
G['i02-2']={tasks:[
 T('Comparar herramientas','https://sheets.google.com',[
  'Columnas: Shopify, WooCommerce, Tiendanube, solo WhatsApp.',
  'Filas: costo mensual, facilidad, integración con tu plataforma.',
  'Revisa precios vigentes en shopify.com/co/precios y tiendanube.com/co/precios.',
  'Elige una y escribe por qué.'],'Tienes la herramienta elegida.')
]};
G['i02-3']={tasks:[
 T('Crear la tienda de prueba','https://www.shopify.com/co',[
  'Toca "Comenzar prueba gratis" y crea la tienda.',
  'En el admin abre "Productos" → "Agregar producto" y crea uno de prueba.'],'Tu tienda tiene un producto.')
],plat:{
 dropi:[T('Conectar Shopify con Dropi (Dropify)','https://app.dropi.co',[
  'En Dropi abre "Mis Integraciones" → "+ Agregar".',
  'Nombre: el de tu tienda. Tipo: Shopify. Guarda.',
  'Copia el token que aparece.',
  'En Shopify: "Configuración" → "Aplicaciones" → "Shopify App Store", busca Dropify e instálala.',
  'En Dropify pega el token, verifica la conexión y guarda en configuración general.',
  'Haz un pedido de prueba en tu tienda y revisa en "Mis Pedidos" dirección, barrio y variante.'],'El pedido de prueba llega completo a Mis Pedidos.')],
 mastershop:[T('Conectar Shopify con Mastershop','https://apps.shopify.com/mastershop',[
  'Toca "Instalar" y elige tu tienda.',
  'Inicia sesión con tu cuenta Mastershop cuando la app lo pida.',
  'En Mastershop revisa "Configuraciones" → "Integraciones": la tienda debe aparecer conectada.',
  'Vincula tu producto y haz un pedido de prueba.',
  'Revisa que llegue a "Gestión de Pedidos" con todos los datos.'],'El pedido llega completo.')],
 effi:[T('Conectar tu tienda con Effi','https://effi.com.co',[
  'Abre "Integraciones" → "Integraciones Ecommerce" → "Crear".',
  'Elige Shopify o WooCommerce y sigue el "Manual de ayuda" de esa pantalla.',
  'Elige el tipo de transacción: orden de venta o remisión de venta.',
  'Haz un pedido de prueba y revisa la venta creada en Effi.'],'La venta de prueba tiene todos los datos.')]
}};
G['i03-1']={tasks:[
 T('Activar la autenticación en dos pasos','https://accountscenter.facebook.com/password_and_security',[
  'Toca "Autenticación en dos pasos" y elige tu cuenta.',
  'Elige "App de autenticación" (Google Authenticator) y escanea el código.',
  'Guarda los códigos de recuperación.'],'Dice "Activada".'),
 T('Crear la página de la tienda','https://www.facebook.com/pages/create',[
  'Escribe nombre y categoría y toca "Crear página".',
  'Sube logo y portada, escribe descripción y agrega tu WhatsApp.'],'La página está completa.'),
 T('Vincular Instagram a la página','',[
  'En la página toca "Configuración" → "Cuentas vinculadas" → "Instagram" → "Conectar cuenta".',
  'Inicia sesión en tu Instagram profesional y confirma.'],'Instagram aparece vinculado.')
]};
G['i03-2']={tasks:[
 T('Crear el portafolio comercial','https://business.facebook.com',[
  'Toca el selector de cuenta (arriba a la izquierda) → "Crear un portafolio comercial".',
  'Escribe el nombre exactamente como en tu RUT, tu nombre y el correo del negocio. Toca "Crear".',
  'Abre el correo de Meta y confirma con el enlace.'],'El portafolio aparece en el selector.'),
 T('Agregar página e Instagram','https://business.facebook.com/latest/settings',[
  'Abre "Cuentas" → "Páginas" → "Agregar" → "Agregar una página existente" y elige la tuya.',
  'Abre "Cuentas" → "Cuentas de Instagram" → "Agregar" y conecta tu Instagram.'],'Ambos aparecen en el portafolio.')
]};
G['i03-3']={tasks:[
 T('Revisar los datos del negocio','https://business.facebook.com/latest/settings',[
  'Escanea tu RUT o Cámara de Comercio en PDF.',
  'En Configuración abre "Información del negocio".',
  'Compara nombre, dirección y teléfono letra por letra con el documento y corrige.'],'Todo coincide con tu documento.'),
 T('Iniciar la verificación','https://business.facebook.com/latest/settings/security_center',[
  'En "Centro de seguridad" busca "Verificación del negocio".',
  'Si aparece "Iniciar verificación", tócalo → "Empezar".',
  'Confirma los datos, sube el documento y elige cómo recibir el código (correo, SMS o WhatsApp).',
  'Si dice "No apto", no hace falta por ahora.'],'Ves "En revisión" o "No apto".'),
 T('Agregar un segundo administrador','https://business.facebook.com/latest/settings',[
  'Abre "Usuarios" → "Personas" → "Invitar personas".',
  'Escribe el correo de alguien de confianza y dale acceso total.'],'La persona acepta y aparece como administrador.')
]};
G['i04-1']={tasks:[
 T('Crear la cuenta publicitaria',BS,[
  'Abre "Cuentas" → "Cuentas publicitarias" → "Agregar" → "Crear una nueva cuenta publicitaria".',
  'Nombre: tu tienda. Zona horaria: America/Bogota. Moneda: COP. Toca "Siguiente".',
  'Elige tu portafolio, acepta las condiciones y toca "Crear".'],'La cuenta aparece en la lista.'),
 T('Agregar el método de pago',AM,[
  'Abre el menú ☰ → "Facturación y pagos".',
  'Toca "Configuración de pagos" → "Agregar método de pago".',
  'Agrega tarjeta o el método disponible y guarda.'],'El método aparece como principal.'),
 T('Poner el límite de gasto','',[
  'En "Configuración de pagos" baja a "Límite de gasto de la cuenta".',
  'Toca "Establecer límite" (o ⋯ → "Cambiar").',
  'Escribe tu presupuesto de aprendizaje y guarda.'],'Ves el límite con lo gastado en 0.')
]};
G['i04-2']={tasks:[
 T('Crear el conjunto de datos (píxel)',EM,[
  'Toca "Conectar datos" → "Web" → "Conectar".',
  'Nombre: tu tienda. Toca "Crear".',
  'Escribe la URL de tu tienda o landing.'],'El conjunto aparece en "Orígenes de datos".'),
 T('Conectarlo con Shopify','https://apps.shopify.com/facebook',[
  'Instala "Facebook & Instagram" en tu tienda.',
  'Inicia sesión y elige tu portafolio y el conjunto de datos que creaste.',
  'En la configuración de "Compartir datos" elige el nivel "Máximo".'],'La app dice "Conectado".'),
 T('Ver un evento real llegando',EM,[
  'Abre tu conjunto de datos → pestaña "Probar eventos".',
  'Escribe la URL de tu tienda y toca "Abrir sitio web".',
  'Agrega al carrito y haz un pedido de prueba.',
  'Vuelve a "Probar eventos" y toma captura.'],'Ves PageView, AddToCart y Purchase en la lista.')
]};
G['i05-1']={tasks:[
 T('Planear la campaña en papel','',[
  'Escribe: objetivo, ciudades, edad, presupuesto diario y días.',
  'Escribe los 3 ganchos ganadores del módulo de contenido.',
  'Calcula presupuesto diario × 3 y compáralo con tu presupuesto de aprendizaje.'],'El plan cabe en tu presupuesto.')
]};
G['i05-2']={tasks:[
 T('Conectar WhatsApp a la página','',[
  'En tu página: "Configuración" → "Cuentas vinculadas" → "WhatsApp" → "Conectar".',
  'Escribe el número de WhatsApp Business y el código que te llega.'],'WhatsApp aparece vinculado.'),
 T('Crear la campaña de clic a WhatsApp',AM,[
  'Toca "+ Crear" → objetivo "Interacción" → "Continuar".',
  'Nombra la campaña y toca "Siguiente".',
  'En el conjunto, "Ubicación de la conversión": "Apps de mensajes" → "WhatsApp". Elige tu página y número.',
  'Pon el presupuesto diario del plan y en "Público" tus ciudades y edades.',
  'Toca "Siguiente".'],'Estás en el nivel de anuncio.'),
 T('Crear los anuncios y publicar','',[
  'Sube el primer video y escribe el texto principal.',
  'En "Plantilla de mensaje" escribe una bienvenida con una pregunta.',
  'Duplica el anuncio 2 veces y cambia el video.',
  'Toca "Publicar" solo si puedes responder en minutos. Si no, "Guardar borrador". Anota fecha y hora.'],'La campaña tiene 3 anuncios.')
]};
G['i05-3']={tasks:[
 T('Crear la campaña de ventas en borrador',AM,[
  'Toca "+ Crear" → "Ventas" → "Continuar" → "Campaña de ventas manual".',
  'En el conjunto, "Ubicación de la conversión": "Sitio web".',
  'Elige tu conjunto de datos y el evento que viste en "Probar eventos" (Purchase).',
  'Pon presupuesto y público.'],'El conjunto muestra tu evento.'),
 T('Agregar el anuncio con tu landing','',[
  'Sube el creativo y en "Destino" pega la URL de tu landing.',
  'Abre la vista previa y revisa que el precio coincida.',
  'Toca "Cerrar" para dejarla en borrador.'],'La campaña queda en borrador.')
]};
G['i06-1']={tasks:[
 T('Configurar tus columnas',AM,[
  'Toca "Columnas: Rendimiento" → "Personalizar columnas".',
  'Busca y marca: Importe gastado, CPM, CTR (porcentaje de clics en el enlace), CPC, Conversaciones con mensajes iniciadas, Costo por conversación, Compras, Costo por compra.',
  'Marca "Guardar como predeterminado", nombre "Mi tablero" y toca "Aplicar".'],'Ves tus columnas en las 3 pestañas.'),
 T('Calcular tus métricas reales','',[
  'Caso: $300.000; 40 conversaciones; 25 pedidos; 20 confirmados; 15 entregados.',
  'Costo por conversación = 300000 ÷ 40. CPA por pedido = ÷ 25. Costo por entregado = ÷ 15.',
  'Compara el costo por entregado con tu CPA de equilibrio.'],'Tienes las 3 métricas y tu conclusión.')
]};
G['i06-2']={tasks:[
 T('Decidir sobre el caso','',[
  'Equilibrio $18.000. A: $40.000 y 0 pedidos. B: CTR 0,4 % y CPA $25.000. C: CPA $12.000 con 70 % de entrega.',
  'Escribe para cada uno: apagar, corregir o mantener.'],'Las 3 decisiones están escritas.'),
 T('Crear tu hoja de registro','https://sheets.google.com',[
  'Crea una pestaña con las columnas de la lección.',
  'Llena una fila de ejemplo.'],'La hoja está lista.'),
 T('Crear una regla automática de protección',AM,[
  'Marca un conjunto de anuncios y toca "Reglas" (o "Más") → "Crear una regla nueva" → "Regla personalizada".',
  'Aplicar a: conjuntos de anuncios activos. Acción: "Desactivar conjuntos de anuncios".',
  'Condición: Importe gastado mayor que tu CPA de equilibrio × 2 y Resultados = 0.',
  'Programación: "Continuamente". Toca "Crear".'],'La regla aparece en "Reglas".')
]};
G['i07-1']={tasks:[
 T('Escribir tu rutina de la mañana','https://docs.google.com',[
  'Escribe cada paso con hora de inicio y minutos.'],'La rutina cabe en una página.')
],plat:{
 dropi:[T('Activar la normalización de direcciones','https://app.dropi.co',[
  'Abre "Mis Pedidos" → "Configuración de pedidos".',
  'Activa "Normalización de direcciones" y guarda.',
  'Agrega a tu rutina: "Novedades" → "Mis Pedidos".'],'La opción queda activada.')],
 mastershop:[T('Configurar reglas y avisos','https://app.mastershop.com',[
  'Abre "Configuraciones" → "Reglas de Confirmación".',
  'Pon tu presupuesto máximo de envío y elige tu regla de confirmación.',
  'Abre "Reglas de Automatizaciones": escribe tu WhatsApp de servicio y activa 3 avisos, incluido "Tu pedido llega hoy".'],'Las reglas y avisos quedan guardados.')],
 effi:[T('Anotar tu ruta diaria en Effi','https://effi.com.co',[
  'Abre en orden: "Novedades de guías", "Guías de transporte" → "Crear", "Relaciones de despacho", "Recolecciones" e "Imprimir guías".',
  'Escribe esa ruta en tu rutina.'],'Tu rutina tiene la ruta de Effi.')]
}};
G['i07-2']={tasks:[
 T('Escribir los 4 mensajes de novedad','',[
  'Uno para: dirección errada, ausente, no contesta, rechazo.',
  WAB_A+' → "Respuestas rápidas" → "+": guárdalos como /dir, /ausente, /nocontesta, /rechazo.'],'Las 4 aparecen al escribir "/".'),
 T('Crear la pestaña de novedades','https://sheets.google.com',[
  'Columnas: fecha, guía, ciudad, transportadora, tipo, solución, resultado.'],'La pestaña existe.')
],plat:{
 dropi:[T('Registrar una solución en Dropi','https://app.dropi.co',['Abre "Novedades".','Busca por guía o celular.','Registra la solución y revisa el historial.'],'Sabes registrar soluciones.')],
 mastershop:[T('Gestionar una novedad en Mastershop','https://app.mastershop.com',['Abre "Gestión de Novedades".','Ordena por días.','Registra la solución.'],'Sabes registrar soluciones.')],
 effi:[T('Gestionar una novedad en Effi','https://effi.com.co',['Abre "Novedades de guías".','Contacta al cliente.','Registra en "Soluciones de novedades".'],'Sabes registrar soluciones.')]
}};
G['i08-1']={tasks:[
 T('Conciliar la semana','',[
  'Caso: 18 entregados × $25.000 = $450.000 esperados. La billetera muestra $400.000.',
  'Calcula la diferencia ($50.000) y escribe qué revisarías.'],'Tienes la diferencia y la acción.')
],plat:{
 dropi:[T('Bajar los movimientos de Dropi','https://app.dropi.co',['Abre "Historial de Cartera".','Filtra la semana y toca "Descargar".','Cruza con tus entregados.'],'Tienes el Excel cruzado.')],
 mastershop:[T('Revisar Balance y Movimientos','https://app.mastershop.com',['Abre "Billetera" → "Balance y Movimientos".','Filtra la semana y cruza con entregados.','Lee en el centro de ayuda el monto mínimo de retiro.'],'Sabes la diferencia y el mínimo de retiro.')],
 effi:[T('Filtrar recaudos en EffiWallet','https://effi.com.co',['Abre "EffiWallet" → "Movimientos de wallets".','Filtra por tipo "Recaudo de venta".','Cruza con guías entregadas.'],'Tienes la conciliación.')]
}};
G['i08-2']={tasks:[
 T('Preparar respuestas de postventa','',[
  'Escribe: producto defectuoso, retracto, demora.',
  'Guárdalas como /defecto, /retracto, /demora.',
  'Escribe el mensaje del día 3: reseña + complemento.'],'Las 3 respuestas y el mensaje están listos.')
],plat:{
 dropi:[T('Ubicar garantías en Dropi','https://app.dropi.co',['Abre "Mis Garantías".','Revisa "Recolecciones".'],'Sabes dónde solicitar una garantía.')],
 mastershop:[T('Ubicar garantías en Mastershop','https://app.mastershop.com',['Abre "Garantías" → "+ Solicitar Garantía".','Mira qué evidencias pide y cierra sin enviar.'],'Sabes qué evidencias pedir.')],
 effi:[T('Ubicar devoluciones en Effi','https://effi.com.co',['Abre "Ventas" → "Devolución de venta".','Mira el ajuste de inventario.'],'Sabes registrar una devolución.')]
}};

/* ===================== AVANZADO ===================== */
G['a01-1']={tasks:[
 T('Calcular la entrega por ciudad','https://sheets.google.com',[
  'Medellín 120/102, Cali 80/52, Pasto 40/18. Equilibrio: 68 %.',
  'Columna tasa = entregados ÷ despachados.',
  'Decide por ciudad: mantener, reforzar confirmación o pago anticipado.'],'Cada ciudad tiene tasa y decisión.')
],plat:{
 dropi:[T('Leer la Torre logística','https://app.dropi.co',['Abre "Reportes" → "Torre logística".','Elige la vista "Mi operación" y filtra por departamento.','Anota la transportadora con mejor efectividad.'],'Tienes la mejor transportadora por departamento.')],
 mastershop:[T('Exportar tus finalizados','https://app.mastershop.com',['Abre "Ventas" → "Reportes".','Exporta "Finalizadas" a Excel.','Calcula entrega y utilidad por despacho.'],'Tienes tasa y utilidad.')],
 effi:[T('Revisar gráficos de guías','https://effi.com.co',['Abre el "Dashboard" → gráficos de guías.','Exporta a Excel.','Anota la transportadora de peor entrega.'],'Sabes cuál evitar.')]
}};
G['a01-2']={tasks:[
 T('Construir tablero y caja','https://sheets.google.com',[
  'Crea las pestañas "Tablero" (8 indicadores por semana) y "Caja" (4 semanas).',
  'Caso: saldo $1.000.000; entradas $600.000/semana; anuncios $700.000; herramientas $50.000.',
  'Saldo semana n = saldo anterior + entradas − anuncios − herramientas.'],'El saldo de la semana 4 es $400.000.')
]};
G['a02-1']={tasks:[
 T('Planear 4 semanas de pruebas','https://sheets.google.com',[
  'Crea la pestaña "Creativos": fecha, gancho, formato, oferta, gasto, CPA, entregados, decisión.',
  'Escribe qué variable pruebas cada semana y cuántos creativos.',
  'Escribe 5 ganchos nuevos para la semana 1.'],'El plan y los ganchos están escritos.'),
 T('Duplicar para probar',AM,[
  'Marca el anuncio ganador y toca "Duplicar".',
  'Cambia solo el gancho y publica.'],'Tienes la variante activa.')
]};
G['a02-2']={tasks:[
 T('Planear incrementos de 20 %','',[
  'Caso: $100.000/día; costo por entregado $15.000; equilibrio $20.000.',
  'Escribe: 120.000, 144.000, 172.800, 207.360.'],'El plan está escrito.'),
 T('Revisar el presupuesto seguro','https://dropi.co/herramientas/breakeven',[
  'Llena tus números y anota el presupuesto diario sugerido.'],'Tienes el tope seguro.'),
 T('Automatizar el escalado con reglas',AM,[
  'Toca "Reglas" → "Crear una regla nueva" → "Regla personalizada".',
  'Acción: "Aumentar el presupuesto diario" 20 %, una vez cada 72 horas, con tope.',
  'Condición: costo por resultado menor que tu equilibrio.',
  'Crea la regla opuesta para bajar 20 %.'],'Ves las dos reglas.'),
 T('Revisar la calidad de la cuenta','https://www.facebook.com/accountquality',[
  'Abre "Calidad de la cuenta" y elige tu portafolio.',
  'Revisa si hay anuncios rechazados o restricciones.'],'Todo aparece sin problemas.')
]};
G['a03-1']={tasks:[
 T('Escribir 3 reglas logísticas','',[
  'Con tu análisis por ciudad escribe: transportadora por zona, confirmación reforzada y pago anticipado.'],'Las 3 reglas están escritas.')
],plat:{
 dropi:[T('Ordenar transportadoras','https://app.dropi.co',['Abre "Configuraciones" → "Preferencias".','Ordena las transportadoras según la Torre logística.','Define una por departamento y guarda.'],'El orden queda guardado.')],
 mastershop:[T('Aplicar reglas de transportadoras','https://app.mastershop.com',['Abre "Configuración Avanzada" → "Transportadoras".','Cotiza tus 5 ciudades con 2 transportadoras.','En "Reglas de Transportadoras" apaga la que más devuelve.'],'La regla queda activa.')],
 effi:[T('Revisar clientes riesgosos','https://effi.com.co',['Abre "Terceros" y el historial de 3 clientes.','Anota devoluciones.'],'Tienes los clientes riesgosos.')]
}};
G['a03-2']={tasks:[
 T('Preparar evidencias y registro','https://sheets.google.com',[
  'Escribe el mensaje para pedir fotos del paquete y del contenido.',
  'Crea la pestaña "Reclamos": fecha, guía, tipo, evidencias, estado, valor recuperado.'],'Mensaje y pestaña listos.')
],plat:{
 dropi:[T('Abrir un caso con evidencias','https://app.dropi.co',['Abre "Soporte" → "Bandeja".','Mira cómo crear un nuevo caso y qué adjuntos pide.','Revisa "Tickets".'],'Sabes el procedimiento.')],
 mastershop:[T('Ver cómo crear un requerimiento','https://app.mastershop.com',['Abre "Requerimientos" → "+ Nuevo requerimiento".','Mira los tipos y las evidencias.','Cierra sin enviar.'],'Sabes el procedimiento.')],
 effi:[T('Ubicar indemnizaciones','https://effi.com.co',['En "Guías de transporte" filtra el estado "Indemnización por siniestro".','En "EffiWallet" → "Movimientos" ubica dónde verías el abono.'],'Sabes dónde ver la indemnización.')]
}};
G['a04-1']={tasks:[
 T('Elegir 3 tareas para automatizar','',[
  'Durante un día anota cada tarea que repites más de 5 veces.',
  'Elige las 3 que más tiempo te quitan.'],'Tienes 3 tareas.')
],plat:{
 dropi:[T('Conectar el MCP de Dropi a Claude','https://dropi.co/mcp-claude#pasos',[
  'Sigue los pasos de la página para conectar el conector.',
  'En Claude pregunta: "¿Cuántos pedidos tengo en novedad hoy?".'],'Claude responde con tus datos.')],
 mastershop:[T('Ubicar tu API Key','https://app.mastershop.com',['Abre "Configuraciones" → "Herramientas" → "API Keys".','Escribe para qué servirá. No la compartas por chat.'],'Sabes dónde está la llave.')],
 effi:[T('Revisar la API de Effi','https://effi.com.co',['Abre "Integraciones" → "Documentación API".','Ubica los endpoints de Logística y EffiWallet.','Revisa "Conectores MCP para IA".'],'Sabes qué puedes automatizar.')]
}};
G['a04-2']={tasks:[
 T('Construir la base del agente','https://docs.google.com',[
  'Crea "Base del agente": productos, envíos, retracto, garantía, preguntas frecuentes.',
  'Escribe 8 situaciones que pasan a humano.',
  'Escribe 5 preguntas difíciles de clientes reales.'],'El documento tiene las 3 partes.')
]};
G['a05-1']={tasks:[
 T('Calificar proveedores','https://dropi.co/herramientas/proveedor',[
  'Califica 2 proveedores de tu producto principal.',
  'Anota los puntajes.'],'Tienes los 2 puntajes.'),
 T('Preparar la negociación','',[
  'Escribe: pedidos al mes, proyección, qué pides y qué ofreces.',
  'Calcula: pedidos al mes × $3.000.'],'La propuesta está escrita.')
]};
G['a05-2']={tasks:[
 T('Evaluar la compra de un lote','https://sheets.google.com',[
  'Caso: 500 unidades a $18.000 (antes $30.000); 25 entregadas por día.',
  'Inversión = 500 × 18000. Días = 500 ÷ 25. Ahorro = 500 × 12000.'],'Inversión $9.000.000; 20 días; ahorro $6.000.000.')
],plat:{
 dropi:[T('Revisar fulfillment en Dropi','https://app.dropi.co',['Busca "Fulfillment" en el menú y lee condiciones.','En Dropi Academy busca "marca propia".'],'Sabes cómo empezar.')],
 mastershop:[T('Crear producto propio en borrador','https://app.mastershop.com',['Abre "Mis Productos" → "Nuevo Producto".','Completa los 3 pasos con 2 variantes e imágenes de menos de 2 MB, sin publicar.','En "Almacenamiento y Despacho" compara 2 proveedores de fulfillment.'],'Tienes el borrador y la comparación.')],
 effi:[T('Preparar bodega y artículos','https://effi.com.co',['Abre "Inventario" → "Bodegas" y crea una.','Revisa conteos y traslados.'],'Tu bodega está lista.')]
}};
G['a06-1']={tasks:[
 T('Proyectar tus ingresos','https://sheets.google.com',[
  'Suma lo cobrado en 3 meses y multiplícalo por 4.'],'Tienes la proyección anual.'),
 T('Preparar preguntas al contador','',[
  'Escribe 5 preguntas: régimen, ingreso bruto en contraentrega, IVA, sociedad y facturación.'],'Las 5 preguntas están listas.'),
 T('Ubicar el trámite de S.A.S.','https://www.vue.gov.co',[
  'En la Ventanilla Única Empresarial mira si tu ciudad está habilitada.',
  'Si no, abre la página de la Cámara de Comercio de tu ciudad y busca "constitución de sociedades".'],'Sabes dónde se hace.')
]};
G['a06-2']={tasks:[
 T('Crear la pestaña de cierre','https://sheets.google.com',[
  'Columnas: ventas, recaudos, retiros, anuncios, fletes, herramientas, ganancia.'],'La pestaña existe.'),
 T('Descargar facturas de Meta',AM,[
  'Abre ☰ → "Facturación y pagos" → "Actividad de pagos".',
  'Filtra el último mes y descarga las facturas.'],'Tienes los PDF.'),
 T('Conocer la facturación gratuita DIAN','https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/facturacion-gratuita-dian/',[
  'Lee los 5 pasos: registro, habilitación, rangos, prefijos y facturar.',
  'Revisa que tu RUT tenga el correo correcto: allí llega el token.'],'Sabes los pasos.')
],plat:{
 dropi:[T('Exportar órdenes de Dropi','https://app.dropi.co',['Abre "Facturas" y exporta a Excel.','En "Reportes" → "Descargas" baja las órdenes del mes.','Llena la pestaña.'],'El cierre tiene datos reales.')],
 mastershop:[T('Descargar histórico de Mastershop','https://app.mastershop.com',['Descarga el histórico de órdenes.','Descarga el reporte de utilidad.','Llena la pestaña.'],'El cierre tiene datos reales.')],
 effi:[T('Exportar movimientos de Effi','https://effi.com.co',['En el "Dashboard" revisa el bloque Wallets del mes.','Exporta "Movimientos de wallets".','Llena la pestaña.'],'El cierre tiene datos reales.')]
}};
G['a07-1']={tasks:[
 T('Escribir el SOP de novedades','https://docs.google.com',[
  'Pasos numerados con capturas de tu plataforma.',
  'Agrega su indicador.'],'El SOP está escrito.'),
 T('Probarlo con alguien','',[
  'Pide que lo siga sin ayuda.',
  'Anota dónde se confundió y corrige.'],'El SOP está corregido.')
]};
G['a07-2']={tasks:[
 T('Diseñar roles','https://sheets.google.com',[
  'Tabla: rol, tareas, herramientas, permisos, indicador.',
  'Llena confirmación, logística y anuncios.'],'La tabla tiene 3 roles.')
],plat:{
 dropi:[T('Revisar permisos en Dropi','https://app.dropi.co',['Abre "Mis usuarios" → "Agregar".','En "Permisos Globales" revisa "Cobrar orden con recaudo".','Anota quién debería tenerlo.'],'Sabes quién tiene ese permiso.')],
 mastershop:[T('Crear rol de confirmación','https://app.mastershop.com',['Abre "Perfil" → "Colaboradores".','Crea el rol "Confirmación" con permisos solo de pedidos y clientes.'],'El rol aparece creado.')],
 effi:[T('Crear perfil de logística','https://effi.com.co',['Abre "Perfiles de usuario".','Crea "Logística" con guías y sin tesorería.'],'El perfil aparece creado.')]
}};
G['a08-1']={tasks:[
 T('Verificar accesos','',[
  'Entra a WhatsApp Business, a https://business.facebook.com y a tu plataforma.',
  'Ten a mano tu "Base del agente".'],'Entras a los tres.'),
 T('Agendar tu implementación','https://jademind.com.co',[
  'Toca el botón de contacto y escribe tu plataforma y tu volumen de pedidos.'],'Recibes confirmación.')
]};
G['a08-2']={tasks:[
 T('Convertir errores en reglas','',[
  'Marca los 3 errores que más te podrían pasar.',
  'Escribe una regla con número para cada uno.',
  'Agrégalas a tu tablero como chequeo semanal.'],'Tu tablero tiene 3 reglas.')
]};
G['a08-3']={tasks:[
 T('Escribir tu plan','https://docs.google.com',[
  'Crea "Plan - [tu tienda]".',
  'Copia los 8 títulos y llénalos con tus prácticas.',
  'Revísalo contra tus 3 reglas.'],'El plan tiene 8 secciones.'),
 T('Compartirlo','',[
  'Toca "Compartir", escribe el correo de JadeMind y elige "Comentarista".'],'JadeMind tiene acceso.')
]};

/* aplicar */
var mods=window.SM_MODULES||[];
mods.forEach(function(m){m.lessons.forEach(function(l,i){var g=G[m.id+'-'+(i+1)];if(!g||!l.practice)return;l.practice.tasks=g.tasks;if(g.plat)l.practice.plat=g.plat;else delete l.practice.plat;});});
window.SM_GUIDES_UPDATED='2026-11';
})();
