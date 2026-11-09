/* School Mind — explicaciones interactivas (actualizado nov. 2026)
   Fuente principal: investigación de noviembre de 2026 (tarifario Effi 2026-06-30, ayuda Mastershop,
   dropi.co, DIAN, SIC, INVIMA, Ley 1480 / Ley 2439 de 2024, C-192 de 2026, Meta).
   Bloques: V visual animado · D dato con fuente · K calculadora · Q ¿qué harías? · M mito o realidad
            O ordena los pasos · P une cada término · T tabla · S captura real */
(function(){
var SRC={
 effi:['Tarifario Effi Colombia v. 2026-06-30','https://effi.com.co/public/documentos/propuestas_comerciales/propuesta_comercial_logistica_effi_co.pdf'],
 msRet:['Ayuda Mastershop: retiros','https://ayuda.mastershop.com/es/article/cuanto-es-el-monto-minimo-que-puedo-retirar-de-mi-billetera-a18dr6/'],
 msSaldo:['Ayuda Mastershop: saldo líquido','https://ayuda.mastershop.com/es/article/como-entender-el-saldo-comprometido-y-el-saldo-liquido-de-la-billetera-de-mastershop-6yjyrl/'],
 dropi:['dropi.co (nov. 2026)','https://dropi.co/'],
 ccce:['CCCE, informe de cierre 2025 (feb. 2026)','https://ccce.org.co/wp-content/uploads/2017/06/V2-1-PUBLICO-INFORME-DE-CIERRE-2025.pdf'],
 cossio:['SIC: sanción a Grupo Cossio confirmada (abr. 2025)','https://sedeelectronica.sic.gov.co/noticias/la-sic-confirmo-la-sancion-impuesta-grupo-cossio-sas-por-publicidad-enganosa-en-el-curso-metodo-cossio'],
 uvt:['DIAN, Resolución 000238 de 2025 (UVT 2026)','https://www.dian.gov.co/Prensa/Paginas/NG-Comunicado-de-Prensa-128-2025.aspx'],
 l2439:['Ley 2439 de 2024','https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=257116'],
 c192:['Corte Constitucional, C-192 de 2026','http://www.secretariasenado.gov.co/senado/basedoc/c-192_2026.html'],
 inv151:['INVIMA, alerta 151-2024','https://www.invima.gov.co/biblioteca/preview/101366'],
 inv130:['INVIMA, alerta 130-2025','https://www.invima.gov.co/biblioteca/alerta-sanitaria-invima-130-2025-suplementos-fraudulentos'],
 metaIva:['Ayuda de Meta: IVA en Colombia','https://es-la.facebook.com/business/help/133076073434794'],
 dropiShop:['YouTube: Dropi con Shopify (7 mar. 2026)','https://www.youtube.com/watch?v=mgX4od1qTg8'],
 marca:['SIC, Resolución 6167 de 2026 (tasas)','https://www.ramosabogados.co/uncategorized/tasas-actualizadas-sic-2026-cuanto-cuestan-los-tramites-de-propiedad-industrial-en-colombia/'],
 wa:['Tarifas WhatsApp Business API Colombia (jul. 2026)','https://fabian-ruiz.com/tarifas-whatsapp-api/'],
 aprend:['Meta Business Help: Last significant edit','https://rostyslav-marketing.com/en/meta-ads-learning-phase-reset/'],
 msFul:['Blog Mastershop: fulfillment (sep. 2026)','https://mastershop.com/blog/mejores-servicios-fulfillment-colombia'],
 sas:['Buk: costos para crear empresa (2026)','https://www.buk.co/blog/costos-para-crear-una-empresa-en-colombia-gu%C3%ADa-completa']
};
function V(k,cap){return {k:'V',v:k,cap:cap||''}}
function D(fig,label,text,src){return {k:'D',fig:fig,label:label,text:text,src:SRC[src]||src}}
function K(c){return {k:'K',c:c}}
function Q(q,o){return {k:'Q',q:q,o:o}}
function M(p){return {k:'M',p:p}}
function O(t,s){return {k:'O',t:t,s:s}}
function P(t,p){return {k:'P',t:t,p:p}}
function T(cap,h,r,src){return {k:'T',cap:cap,h:h,r:r,src:SRC[src]||src}}
function S(src,cap){return {k:'S',src:src,cap:cap}}
var X={};

/* ---------------- PRINCIPIANTE ---------------- */
X['p01-1']={ideas:[
 'El curso va en orden: primero tus números y la operación, después el tráfico con anuncios y al final el escalado. Saltarse los números es el error más caro.',
 'Cada lección termina con una práctica sobre tus propios datos. Lo que aprendes lo aplicas en tu plataforma el mismo día.',
 'Toda cifra que veas trae su fuente y su fecha. Si algo es una estimación, te lo decimos.'],
b:[V('ruta','Así avanzas: lees, ves cómo se hace, practicas y presentas el examen.'),
 D('$145,4 billones','ventas online en Colombia en 2025','Fueron 684,6 millones de transacciones, con un ticket promedio de $212.373. Un producto contraentrega de $89.900 cuesta menos de la mitad: es una compra de impulso, y por eso confirmar por WhatsApp pesa tanto.','ccce'),
 Q('Quieres ir directo a crear anuncios en Meta. ¿Qué haces?',[['Empiezo por Meta Ads: es donde están las ventas',false,'Sin tu punto de equilibrio no sabrás si un costo por pedido es bueno o te está haciendo perder.'],['Hago primero el módulo "Tus números"',true,'Exacto. Con tus números sabes cuánto puedes pagar por pedido antes de gastar un peso en anuncios.']])]};
X['p01-2']={ideas:[
 'Prometer ingresos con un curso, un método o un producto puede ser publicidad engañosa según los artículos 29 y 30 de la Ley 1480.',
 'Para la SIC, frases como "gana en cinco meses" son afirmaciones objetivas: quien las dice tiene que poder probarlas.',
 'El anunciante responde también por lo que dicen sus influenciadores. Un testimonio de éxito es un caso, no un resultado esperable.'],
b:[D('$813.002.240','multa de la SIC a Grupo Cossio','La SIC sancionó el curso "Método Cossio" por hacer creer que se obtenían resultados económicos significativos en cinco meses. La multa quedó en firme en abril de 2025. Equivale a vender más de 9.000 productos de $89.900.','cossio'),
 Q('Quieres anunciar: "Gana $5 millones al mes con Dropi". ¿Lo publicas?',[['Sí, si pongo "resultados no garantizados"',false,'La letra pequeña no corrige una promesa objetiva sin soporte. Sigue siendo publicidad engañosa.'],['No; lo cambio por "Aprende a operar una tienda contraentrega paso a paso"',true,'Bien. Prometes lo que de verdad entregas: aprendizaje, no dinero.']]),
 M([['Si lo dice el influenciador, la responsabilidad es suya.','La SIC sancionó a la empresa anunciante por lo que se dijo en su publicidad.'],['Con un disclaimer puedo prometer lo que sea.','Una promesa objetiva necesita prueba. El aviso no la reemplaza.']])]};
X['p02-1']={ideas:[
 'Tú consigues al cliente, lo confirmas y pones el precio.',
 'El proveedor guarda el inventario y empaca. La plataforma une catálogo, guías, transportadoras y billetera.',
 'La transportadora entrega, cobra en efectivo y reporta novedades. El cliente paga al recibir y puede rechazar el paquete.',
 'Frente al cliente respondes tú, porque tú vendiste (Ley 1480). Internamente escalas al proveedor.'],
b:[V('actores','Cinco actores y lo que hace cada uno.'),
 P('Une cada actor con su trabajo',[['Vendedor','Consigue y confirma al cliente'],['Proveedor','Guarda inventario y empaca'],['Plataforma','Genera la guía y liquida la billetera'],['Transportadora','Entrega y recauda el efectivo'],['Cliente','Paga al recibir o rechaza']]),
 D('+160.000','productos en el catálogo de Dropi','Dropi dice tener más de 160.000 productos y más de 200 mil vendedores. Son cifras de la empresa: hay mucha oferta y mucha competencia.','dropi'),
 Q('Un producto le llega roto al cliente. ¿Quién le responde?',[['El proveedor, porque él empacó',false,'Frente al consumidor responde quien vendió. Tú atiendes y luego reclamas al proveedor.'],['Yo, y luego escalo al proveedor',true,'Correcto: la Ley 1480 pone la responsabilidad frente al cliente en quien vende.'],['La transportadora',false,'La transportadora responde por el transporte, pero el cliente te compró a ti.']])]};
X['p02-2']={ideas:[
 'Hay cinco fugas de dinero: pedido sin confirmar, dirección mala, cliente ausente o que rechaza, novedad lenta y devolución.',
 'Cuando un pedido se devuelve no recuperas el flete de ida. Con algunas transportadoras también pagas la comisión de recaudo aunque no hubo recaudo.',
 'Servientrega e Interrapidísimo cobran en una devolución el flete de ida completo: flete, manejo y recaudo. Envía y Domina cobran flete y manejo, sin recaudo.',
 'Interrapidísimo solo entrega en casco urbano: un pedido a una vereda no le sirve.',
 'Las tasas de devolución "promedio" que circulan no tienen fuente auditable. La tuya la mides tú.'],
b:[V('recorrido','El recorrido del pedido. Las salidas en rojo son donde se pierde dinero.'),
 K('devolucion'),
 T('Qué te cobran si el pedido vuelve (tarifario Effi 2026)',['Transportadora','En devolución','Comisión de recaudo'],[['Servientrega','Flete + manejo + recaudo','3,5 %, mínimo $4.000'],['Interrapidísimo','Flete + manejo + recaudo','$2.500 o 5 % desde $50.001'],['Envía','Flete + manejo','3,5 % + manejo $3.000'],['Domina','Flete + manejo','3,5 % hasta $165.000']],'effi'),
 M([['En contraentrega casi nadie devuelve.','Un blog dice 1-2 %, pero el mismo sitio de Dropi muestra un testimonio con 35 % de devolución. Mide la tuya.']]),
 Q('Te llega un pedido para una vereda. ¿Qué haces?',[['Lo envío por Interrapidísimo, que es más barato',false,'Interrapidísimo solo entrega en casco urbano: ese pedido vuelve con flete cobrado.'],['Uso una transportadora con cobertura o pido una dirección urbana u oficina',true,'Así evitas una devolución segura.']])]};
X['p02-3']={ideas:[
 'Dropshipping: inviertes poco, ganas menos por pedido y controlas poco.',
 'Inventario con fulfillment: compras mercancía, la guarda un operador y despacha por ti. Más margen, más riesgo.',
 'Marca propia: la mayor inversión y el mayor margen. Solo cuando un producto ya se vende de forma estable.'],
b:[T('Tres modelos de negocio',['Modelo','Inversión','Margen','Control','Plataforma'],[['Dropshipping','Baja','Menor','Bajo','Dropi, Mastershop'],['Inventario + fulfillment','Media','Mayor','Medio','Effi, Mastershop, Dropi'],['Marca propia','Alta','El mayor','Alto','Fulfillment + tienda propia']]),
 K('fulfillment'),
 Q('Un producto vende 20 unidades al día, estable, desde hace 3 meses. ¿Qué evalúas?',[['Seguir igual: si funciona no lo toco',false,'Puedes estar dejando margen en la mesa.'],['Comprar inventario y usar fulfillment',true,'Con demanda estable, comprar por volumen baja el costo y te da control. Lo ves en el módulo de proveedores.']])]};
X['p03-1']={ideas:[
 'Margen bruto = precio menos costo del producto. Utilidad neta = lo que queda después de producto, fletes, devoluciones, anuncios, comisiones e impuestos.',
 'CPA = lo gastado en anuncios dividido entre pedidos. Distingue el CPA por pedido creado del CPA por pedido entregado.',
 'ROAS = ingresos divididos entre lo gastado en anuncios. El que muestra Meta cuenta pedidos, no entregas.',
 'Tasa de confirmación = confirmados ÷ creados. Tasa de entrega = entregados ÷ despachados.'],
b:[P('Une cada palabra con su significado',[['CPA','Anuncios ÷ pedidos'],['ROAS','Ingresos ÷ anuncios'],['Tasa de entrega','Entregados ÷ despachados'],['Recaudo','Efectivo cobrado en la puerta'],['Margen bruto','Precio − costo del producto']]),
 K('cpa'),
 Q('Meta te muestra ROAS 3 y tu tasa de entrega es 70 %. ¿Cuál es tu ROAS real?',[['3, el que dice Meta',false,'Meta cuenta pedidos. Si solo se entrega el 70 %, el ingreso real es menor.'],['Cerca de 2,1',true,'3 × 0,70 = 2,1. Ese es el que paga tus cuentas.'],['4,3',false,'Al revés: las devoluciones bajan el ROAS, no lo suben.']])]};
X['p03-2']={ideas:[
 'En contraentrega pagas el flete y los anuncios de todos los pedidos despachados, pero solo cobras los entregados.',
 'Cada punto de entrega vale $54.900 por cada 100 pedidos en el ejemplo: por eso subir la entrega vale más que bajar un poco el CPA.',
 'Si el CPA baja a $15.000 el equilibrio cae a 54,6 %. Si el precio sube a $99.900, cae a 51,2 %.'],
b:[V('balanza','Con 75 % de entrega ganas; con 60 % pierdes. Mismo producto, misma publicidad.'),
 T('Ejemplo con 100 despachos (hipotético)',['Concepto','Entrega 75 %','Entrega 60 %'],[['Ingresos','$6.742.500','$5.394.000'],['Producto (solo entregados)','−$2.625.000','−$2.100.000'],['Fletes','−$1.500.000','−$1.500.000'],['Anuncios','−$1.800.000','−$1.800.000'],['Utilidad','$817.500','−$6.000']]),
 Q('Tienes 62 % de entrega y Meta muestra buen ROAS. ¿Qué haces?',[['Subo el presupuesto 50 %',false,'Estás apenas encima del equilibrio. Escalar así multiplica el riesgo.'],['Primero mejoro la confirmación para subir la entrega',true,'Cada punto de entrega es dinero directo. Escalas cuando tengas margen de seguridad.']]),
 Q('¿Cuál es el equilibrio si el flete sube de $15.000 a $18.000?',[['Cerca de 60 %',false,'Más flete sube el equilibrio.'],['Cerca de 65,6 %',true,'(18.000 + 18.000) × 100 ÷ (100 × 54.900) ≈ 65,6 %.'],['Cerca de 50 %',false,'Más costo nunca baja el equilibrio.']])]};
X['p03-3']={ideas:[
 'Pagas los anuncios hoy y cobras cuando la transportadora entrega, recauda y la plataforma liquida. Ese hueco lo cubre tu caja.',
 'No todo el saldo es retirable. En Mastershop: saldo líquido = saldo total − saldo comprometido (pagos anticipados y reserva).',
 'Retirar cuesta. En Mastershop: $3.900 fijos + 4×1000, mínimo $4.000, y llega en minutos a Bancolombia o Nequi.',
 'Dropi anuncia "recibe el dinero de tu venta en solo 24 horas". Es una promesa de la empresa; verifica tus tiempos reales.'],
b:[V('dinero','El viaje del dinero: sale hoy, vuelve días después.'),
 K('retiro'),
 Q('Tu saldo total es $3.000.000 y el líquido $1.200.000. ¿Con cuánto planeas los anuncios de la semana?',[['$3.000.000',false,'Una parte está comprometida y no la puedes usar.'],['$1.200.000 o menos',true,'Planea solo con el dinero que de verdad puedes retirar.']])]};
X['p04-1']={ideas:[
 'Dropi: gratis para empezar, 12 países, catálogo grande, MCP oficial con Claude y ROAX para anuncios con IA.',
 'Mastershop: enfoque en Colombia, retiros en minutos y "Inteli-Flete" para elegir transportadora.',
 'Effi: tarifario público, varias transportadoras y descuentos por volumen del 10 % al 25 %. Conviene con inventario propio o volumen.',
 'Las comisiones por venta de Dropi y Mastershop no están publicadas de forma oficial. Desconfía de los "mentores" con enlace de afiliado.'],
b:[T('Comparativa con datos oficiales (nov. 2026)',['Criterio','Dropi','Mastershop','Effi'],[['Para empezar','Gratis','App gratis en Shopify','Tarifario público'],['Países','12','Colombia','Colombia y Ecuador'],['Pago','"Dinero en 24 h"','Minutos; $3.900 + 4×1000','No publicado'],['Descuento por volumen','No publicado','No publicado','10 % a 25 %'],['Fulfillment','Sí','Desde $2.400','$2.200 por paquete']],'effi'),
 Q('Vendes solo en Colombia, unas 50 guías al mes y necesitas catálogo. ¿Qué eliges?',[['Dropi o Mastershop',true,'Ambas te dan catálogo de proveedores para empezar sin inventario.'],['Effi',false,'Effi brilla cuando tienes inventario propio o mucho volumen.']]),
 Q('¿Qué descuento te da Effi con 350 guías al mes?',[['10 %',false,'Ese es el primer escalón (100 a 299 guías).'],['15 %',true,'Según su tarifario 2026.'],['25 %',false,'Ese es para 4.500 guías o más.']])]};
X['p04-2']={ideas:[
 'Usa una cuenta bancaria a tu nombre: a nombre de otro te pueden frenar los retiros.',
 'No compartas tu contraseña con tu equipo: crea usuarios con permisos.',
 'Configura tu dirección de origen y tus transportadoras antes del primer pedido.'],
b:[O('Ordena la creación de tu cuenta',['Registrarte con tu correo','Validar tu identidad','Agregar cuenta bancaria a tu nombre','Configurar la dirección de origen','Elegir transportadoras','Conectar tu tienda o WhatsApp']),
 S('img/dropi/validacion-de-la-cuenta.jpg','Dropi: la franja de validación desaparece al completar tus datos.'),
 Q('Tu primo te presta su cuenta bancaria para recibir pagos. ¿Aceptas?',[['Sí, mientras abro la mía',false,'Las plataformas exigen que la cuenta esté a tu nombre. Pueden bloquear tus retiros.'],['No, abro una cuenta o Nequi a mi nombre',true,'Así tus retiros no se frenan por validación.']])]};
X['p04-3']={ideas:[
 'Todas las plataformas tienen lo mismo con distintos nombres: catálogo, pedidos, novedades, billetera, integraciones y reportes.',
 'Dropi anuncia una "huella del comprador" que estima la probabilidad de entrega de cada cliente.',
 'Antes de vender, recorre el panel sin cambiar nada y ubica cada sección.'],
b:[S('img/dropi/dashboard.jpg','Dashboard de Dropi: utilidad total y estimada.'),
 P('Une cada sección con lo que encuentras',[['Catálogo','Productos y proveedores'],['Novedades','Pedidos con problemas de entrega'],['Billetera','Recaudos, fletes y retiros'],['Integraciones','Conexión con tu tienda']]),
 Q('Un cliente tiene 5 devoluciones en sus últimos 10 pedidos. ¿Qué haces?',[['Lo despacho igual, es otra venta',false,'Su historial dice que hay 50 % de probabilidad de perder el flete.'],['Le pido anticipo o no despacho',true,'Proteges tu flete y tus anuncios.']])]};
X['p05-1']={ideas:[
 'En una ficha revisa: precio del proveedor, precio sugerido, existencias, peso y medidas, videos, datos del proveedor, garantía y registro INVIMA si aplica.',
 'La transportadora cobra el mayor entre el peso real y el peso volumétrico.',
 'Interrapidísimo divide largo × ancho × alto (cm) entre 6.000; Domina entre 5.000.'],
b:[S('img/dropi/ficha-del-producto.jpg','Ficha de producto en Dropi.'),
 K('volumetrico'),
 Q('Una caja de 30×20×20 cm pesa 0,5 kg. ¿Con qué peso te cobra Interrapidísimo?',[['0,5 kg',false,'El volumen manda cuando es mayor.'],['2 kg',true,'30×20×20 = 12.000 cm³ ÷ 6.000 = 2 kg volumétricos.']])]};
X['p05-2']={ideas:[
 'Datos obligatorios: nombre, celular de 10 dígitos, departamento, municipio, dirección con nomenclatura, barrio, referencias, valor a cobrar, producto y cantidad.',
 'Nomenclatura: Calle, Carrera, Diagonal o Transversal, número de placa y complemento (torre, apartamento).',
 'Cuidado con los municipios que se llaman igual en distintos departamentos.'],
b:[O('Ordena una dirección colombiana completa',['Tipo de vía: Carrera','Número: 45','# placa: 32-10','Complemento: Apto 301, Torre 2','Barrio: Laureles','Referencia: frente al parque']),
 Q('El cliente escribe: "Frente a la iglesia, casa azul". ¿Qué haces?',[['Lo envío así, el mensajero pregunta',false,'Es la receta de una novedad o una devolución.'],['Pido nomenclatura, barrio y un segundo teléfono, o lo envío a oficina',true,'Una dirección completa es la mejor prevención.']]),
 S('img/dropi/crear-orden-enviar-a-cliente.jpg','Crear orden en Dropi: "Enviar a cliente".')]};
X['p05-3']={ideas:[
 'Estados típicos: pendiente, confirmado, guía generada, recogido, en tránsito, en reparto y entregado. Si algo falla: novedad, reintento o devolución.',
 'Servientrega (vía Effi) llama al cliente antes de la visita y permite redireccionar sin costo adicional.',
 'Los nombres exactos de los estados cambian por transportadora: apréndelos en tu panel.'],
b:[V('recorrido','Sigue el paquete: cada parada es un estado.'),
 O('Ordena los estados de un pedido exitoso',['Pendiente','Confirmado','Guía generada','Recogido','En tránsito','En reparto','Entregado']),
 S('img/dropi/mis-pedidos.jpg','Mis pedidos en Dropi.')]};
X['p06-1']={ideas:[
 'Un buen producto contraentrega resuelve un problema que se ve en video y causa un efecto "wow".',
 'Regla práctica: que puedas venderlo a unas 2,5 a 3 veces su costo.',
 'Mejor si es liviano, no frágil, sin tallas y sin registro sanitario (o con registro vigente).'],
b:[M([['Ganador es el que otro vende mucho.','Si todos lo venden compites en precio y en costo por pedido. Busca un ángulo propio.'],['Entre más barato, más se vende.','Si no te deja margen para fletes y devoluciones, cada venta te cuesta.']]),
 Q('¿Cuál producto es mejor para contraentrega?',[['Unos zapatos con 8 tallas',false,'Las tallas generan cambios y devoluciones.'],['Un organizador liviano que se entiende en un video de 10 segundos',true,'Liviano, sin tallas y fácil de demostrar.'],['Una lámpara de vidrio',false,'Lo frágil se rompe en el camino y genera reclamos.']])]};
X['p06-2']={ideas:[
 'La Biblioteca de anuncios de Meta muestra anuncios activos y desde cuándo corren. No muestra ventas.',
 'Un anuncio activo hace más de 30 días suele indicar que es rentable para alguien.',
 'TikTok Creative Center muestra tendencias por país; Google Trends, la estacionalidad.'],
b:[O('Ordena tu investigación de un producto',['Buscar anuncios activos en la Biblioteca de Meta','Revisar desde cuándo corren','Mirar la tendencia en Google Trends','Ver ganchos en TikTok Creative Center','Anotar precios de la competencia']),
 Q('Ves 40 anuncios del mismo producto, todos publicados hace 2 días. ¿Qué significa?',[['Es un ganador seguro',false,'Todavía no sabes si funciona: nadie lo ha sostenido.'],['Es una prueba masiva o una tendencia que empieza: hay que ver si siguen activos',true,'Vuelve en una semana: los que sigan activos te dan la señal.']])]};
X['p06-3']={ideas:[
 'Los cosméticos requieren Notificación Sanitaria Obligatoria (Decisión Andina 833).',
 'Los suplementos dietarios requieren registro sanitario para fabricarse, importarse y venderse (Decreto 3249 de 2006).',
 'Los dispositivos médicos también: registro automático (clases I y IIa) o registro sanitario (IIb y III), Decreto 4725 de 2005.',
 'Que un producto esté en el catálogo no lo hace legal: la responsabilidad también es tuya.'],
b:[D('Alerta 151-2024','INVIMA, 5 de junio de 2024','Mantas y fajas térmicas, depiladoras láser y dermawand vendidas por plataformas digitales sin registro son dispositivos médicos fraudulentos. Toda la aparatología estética, incluso la de uso personal, requiere registro sanitario.','inv151'),
 D('Alerta 130-2025','INVIMA, oct. 2025 (modificada ago. 2026)','Suplementos promocionados en redes sociales que no cuentan con registro sanitario.','inv130'),
 Q('El producto más vendido del catálogo es una faja térmica sin registro. ¿La vendes?',[['Sí, si el proveedor la tiene publicada',false,'El INVIMA la considera fraudulenta y tú también respondes.'],['No',true,'Proteges a tus clientes y tu negocio.']]),
 M([['Si está en el catálogo, es legal.','La plataforma no garantiza el registro sanitario. Verifícalo tú.']])]};
X['p07-1']={ideas:[
 'El precio sale de tus costos, no de la competencia: producto + flete por entregado + CPA por entregado + tu utilidad.',
 'Flete por entregado = flete ÷ tasa de entrega. Con $15.000 y 75 % son $20.000.',
 'Si la competencia vende más barato, no la iguales: compite con un combo o un mejor ángulo.'],
b:[K('precio'),
 Q('La competencia vende a $69.900 y tu precio sano es $89.900. ¿Qué haces?',[['Bajo a $69.900',false,'Perderías cerca de $9.100 por cada pedido entregado.'],['Mantengo el precio y compito con un combo',true,'Subes el valor sin regalar tu margen.']])]};
X['p07-2']={ideas:[
 'Los combos suben el ticket y reparten el flete entre más unidades.',
 'Un precio tachado solo es legal si ese precio existió de verdad.',
 'Un contador de "solo hoy" que se reinicia todos los días es información no veraz (Ley 1480, arts. 23 y 30).',
 'En las sanciones del Black Friday 2024 la SIC multó con $3.068.673.280 a 10 empresas, entre otras cosas por no informar condiciones de las promociones.'],
b:[K('combo'),
 Q('Quieres poner "50 % OFF solo hoy" todos los días. ¿Lo haces?',[['Sí, todos lo hacen',false,'Es urgencia falsa: puede ser publicidad engañosa.'],['No; uso urgencia real, como existencias limitadas que sí lo son',true,'Lo que dices tiene que ser verdad.']]),
 M([['Tachar un precio inventado es solo marketing.','Si ese precio nunca existió, engañas al cliente y te expones a sanción.']])]};
X['p08-1']={ideas:[
 'La app gratuita WhatsApp Business tiene perfil, catálogo, etiquetas y respuestas rápidas.',
 'La plataforma de WhatsApp Business (API) es de pago por mensaje y es la que necesitas para agentes de IA.',
 'Usa un número solo para el negocio.'],
b:[O('Ordena la configuración',['Número dedicado al negocio','Perfil de empresa','Catálogo','Etiquetas: Nuevo, Confirmado, Novedad, Entregado','Respuestas rápidas']),
 V('chat','Una conversación ordenada con etiquetas y respuestas rápidas.'),
 Q('Necesitas que un agente de IA responda por ti. ¿Te sirve la app gratuita?',[['Sí',false,'La app gratuita no permite conectar agentes.'],['No; necesitas la plataforma (API) de WhatsApp Business',true,'Se paga por mensaje y se conecta a tu agente.']])]};
X['p08-2']={ideas:[
 'Confirma nombre, dirección, producto, valor y forma de pago. Luego envía un resumen escrito y pide un "Sí, confirmo".',
 'No despaches hasta tener todos los datos.',
 'Dropi afirma que su confirmación con IA reduce las devoluciones evitables entre 20 % y 40 % (dato de la empresa).'],
b:[V('chat','Guion de confirmación: resumen y "Sí, confirmo".'),
 K('equilibrio'),
 Q('El cliente dice "sí" pero no te da el barrio. ¿Despachas?',[['Sí, ya confirmó',false,'Sin barrio la probabilidad de novedad sube.'],['No, completo los datos primero',true,'Cada dato que falta es una novedad posible.']])]};
X['p08-3']={ideas:[
 '"¿Es confiable?": pagas al recibir. "Está caro": ofrece el combo. "Lo pienso": seguimiento a las 24 horas.',
 '"¿Tiene garantía?": explica la garantía legal.',
 'No hagas seguimiento masivo a personas que no te autorizaron: Ley 1581.'],
b:[P('Une cada objeción con su respuesta',[['¿Es confiable?','Pagas cuando lo recibes'],['Está caro','Te ofrezco el combo'],['Lo pienso','Te escribo mañana con un video'],['¿Tiene garantía?','Sí, la garantía legal']]),
 Q('Tienes 2.000 números de clientes de otra tienda. ¿Les escribes?',[['Sí, un mensaje no hace daño',false,'Sin autorización violas la Ley 1581 y arriesgas tu número.'],['No, solo a quien me escribió o me autorizó',true,'Correcto.']])]};
X['p09-1']={ideas:[
 'UVT 2026: $52.374.',
 'Régimen Simple: lo puedes elegir si tus ingresos brutos del año anterior fueron menores a 100.000 UVT.',
 'Tarifas para comercio (art. 908): 1,6 % hasta 6.000 UVT; 2,0 % de 6.000 a 15.000; 3,5 % de 15.000 a 30.000; 4,5 % de 30.000 a 100.000. Hay portales con tablas distintas: confírmalo con tu contador.',
 'Si tu ingreso bruto es el precio total o solo tu margen lo define tu contador.',
 'Sin NIT, Meta te cobra 19 % de IVA sobre tus anuncios.'],
b:[K('simple'),
 Q('Vendes $25 millones al mes y no tienes RUT. ¿Qué haces?',[['Nada, nadie se entera',false,'Superas los topes y además pagas 19 % de IVA en Meta sin poder descontarlo.'],['Me formalizo con ayuda de un contador',true,'Ordenas impuestos y facturación antes de que sea un problema.']])]};
X['p09-2']={ideas:[
 'Retracto: 5 días hábiles desde la entrega. El cliente paga el envío de devolución.',
 'El dinero se devuelve en máximo 15 días calendario (Ley 2439 de 2024). La C-192 de 2026 dijo que ese plazo aplica a todas las modalidades del artículo 47.',
 'Si no informaste plazo de entrega, el máximo es 30 días calendario.',
 'La reversión del pago solo existe con pagos electrónicos: no aplica al efectivo contraentrega.'],
b:[V('retracto','Línea de tiempo del retracto.'),
 Q('El cliente pagó en efectivo y pide "reversión del pago". ¿Qué le dices?',[['Que tiene derecho a reversión',false,'La reversión es para pagos electrónicos.'],['Que puede ejercer el retracto si está en plazo, o la garantía',true,'Correcto.']]),
 M([['En contraentrega no hay retracto.','El artículo 47 cubre las ventas a distancia, también las contraentrega.']]),
 Q('¿En cuánto tiempo devuelves el dinero de un retracto?',[['30 días',false,'Ese es el plazo de entrega cuando no se informó.'],['15 días calendario',true,'Ley 2439 de 2024.'],['5 días hábiles',false,'Ese es el plazo que tiene el cliente para retractarse.']])]};
X['p09-3']={ideas:[
 'Necesitas autorización previa, expresa e informada para usar datos personales, y una política de tratamiento publicada.',
 'Usa los datos solo para lo que dijiste: gestionar el pedido.',
 'Prohibido: productos sin INVIMA cuando lo requieren, réplicas, y lo que las transportadoras no llevan (Interrapidísimo: líquidos, efectivo, animales).'],
b:[Q('Te ofrecen una base de 5.000 números comprada. ¿La usas?',[['Sí, es barata',false,'No tienes autorización de esas personas.'],['No',true,'Correcto: violarías la Ley 1581.']]),
 M([['Si un número está en internet, puedo escribirle.','Necesitas autorización para tratar sus datos con fines comerciales.']])]};

/* ---------------- INTERMEDIO ---------------- */
X['i01-1']={ideas:[
 'Estructura de un video que vende: gancho (0-3 s), problema, demostración, prueba, oferta y llamado a la acción.',
 'Subtítulos siempre: muchos lo ven sin sonido.',
 'No hay umbrales oficiales de retención. Compara cada video contra tus propios videos.'],
b:[O('Ordena las partes de un video que vende',['Gancho (0-3 s)','Problema','Demostración','Prueba','Oferta','Llamado a la acción']),
 Q('Tu video tiene buen CTR pero pocas ventas. ¿Qué revisas?',[['Subo el presupuesto',false,'Más gasto no arregla un mensaje que no cumple.'],['Si el video promete algo que la landing o el producto no cumplen',true,'Esa promesa rota también genera devoluciones.']])]};
X['i01-2']={ideas:[
 'Meta pone la etiqueta "Info de IA" cuando usas generación de fondo, de imagen o animación para editar mucho una imagen o video, y detecta herramientas externas con estándares como C2PA.',
 'Dropi ROAX crea videos UGC y carruseles con IA desde un producto de Dropi.',
 'UGC = contenido de clientes reales. Pide autorización para usarlo.'],
b:[Q('Creas con IA el testimonio de una clienta que no existe. ¿Está bien?',[['Sí, si se ve real',false,'Es una afirmación falsa (Ley 1480, art. 30).'],['No; uso testimonios reales con autorización',true,'Correcto.']]),
 M([['Si el video es de IA nadie lo nota.','Meta detecta y etiqueta contenido generado con IA.']])]};
X['i02-1']={ideas:[
 'Partes: título con beneficio, demostración, beneficios, prueba real, oferta, preguntas frecuentes (envío, contraentrega, garantía, retracto), formulario corto y datos legales.',
 'Muestra el precio total desde el inicio, no sumes el envío al final.',
 'Conversión = pedidos ÷ visitas. No hay promedio confiable: mide la tuya.'],
b:[V('landing','Las partes de una landing, de arriba abajo.'),
 O('Ordena los bloques de la landing',['Título con beneficio','Demostración','Beneficios','Prueba real','Oferta','Preguntas frecuentes','Formulario']),
 Q('¿Dónde muestras el costo de envío?',[['Al final del formulario',false,'Sorprender con costos al final genera abandonos y quejas.'],['Desde el inicio, dentro del precio total',true,'Información clara y completa (art. 50).']])]};
X['i02-2']={ideas:[
 'Shopify: formularios contraentrega e integración con Dropi y Mastershop.',
 'WooCommerce tiene plugin de Dropi; Tiendanube tiene app de Mastershop.',
 '"Control Contraentrega Colombia" (Shopify, US$5 al mes) limita el pago contraentrega por municipio.'],
b:[T('Herramientas para tu tienda',['Herramienta','Con qué se conecta','Nota'],[['Shopify','Dropi (Dropify), Mastershop, Effi','Muchas apps de formulario COD'],['WooCommerce','Plugin de Dropi','Necesitas hosting'],['Tiendanube','App de Mastershop','Informe 2025-2026 con +4.000 tiendas en Colombia']]),
 Q('Quieres bloquear el pago contraentrega en municipios con muchas devoluciones. ¿Qué usas en Shopify?',[['Una app que limite el COD por municipio',true,'Por ejemplo "Control Contraentrega Colombia".'],['Nada, no se puede',false,'Sí se puede con apps.']])]};
X['i02-3']={ideas:[
 'Pasos: instalar la app, autorizar, importar productos, mapear variantes, hacer un pedido de prueba y verificar que llegue completo.',
 'Revisa que la variante (color, talla) llegue igual a la plataforma.'],
b:[O('Ordena la conexión de tu tienda',['Instalar la app','Autorizar la conexión','Importar productos','Mapear variantes','Hacer un pedido de prueba','Verificar que llegue completo']),
 D('7 mar. 2026','tutorial Dropi + Shopify','Video paso a paso de la conexión con Dropify, con fecha verificada.','dropiShop')]};
X['i03-1']={ideas:[
 'Tu perfil personal de Facebook es la llave de todo: que sea real y con autenticación en dos pasos.',
 'La página debe estar completa: logo, portada, descripción, WhatsApp.',
 'Instagram profesional vinculado a la página.'],
b:[O('Ordena la preparación',['Perfil real con autenticación en dos pasos','Crear la página','Completar la página','Instagram profesional','Vincular Instagram a la página']),
 Q('¿Puedes anunciar desde un perfil falso para proteger el tuyo?',[['Sí',false,'Los perfiles falsos se bloquean y arrastran tus activos.'],['No; uso mi perfil real protegido',true,'Correcto.']])]};
X['i03-2']={ideas:[
 'El portafolio comercial agrupa página, Instagram, cuentas publicitarias, conjuntos de datos y WhatsApp.',
 'Ten al menos dos administradores.',
 'Los activos deben ser tuyos, no de la agencia.'],
b:[V('portafolio','Todo lo de tu negocio vive dentro del portafolio.'),
 Q('Tu agencia creó la página y la cuenta publicitaria en su portafolio. ¿Problema?',[['No, ellos saben',false,'Si terminas con la agencia puedes perder tus activos.'],['Sí; los activos deben estar en mi portafolio y darles acceso como socios',true,'Tú eres el dueño; ellos, invitados.']])]};
X['i03-3']={ideas:[
 'Se verifica con RUT o certificado de Cámara de Comercio: el nombre debe coincidir letra por letra.',
 'Causas frecuentes de bloqueo: promesas de salud o dinero, pagos fallidos, accesos sospechosos y saltos de gasto.'],
b:[Q('Te rechazan un anuncio que dice "pierde 10 kg en un mes". ¿Qué haces?',[['Lo publico de nuevo igual',false,'Repetir rechazos daña la calidad de tu cuenta.'],['Quito la promesa de salud',true,'Correcto.']]),
 P('Une cada causa de bloqueo con cómo evitarla',[['Promesas de salud o dinero','Habla de uso, no de resultados'],['Pagos fallidos','Método de pago con saldo'],['Accesos sospechosos','Autenticación en dos pasos'],['Saltos de gasto','Sube el presupuesto poco a poco']])]};
X['i04-1']={ideas:[
 'Si tu dirección es de Colombia y no agregaste NIT ni régimen de IVA, Meta te suma 19 % de IVA.',
 'Si eres responsable de IVA, lo autoliquidas y lo descuentas (Alegra, 2026).',
 'Pon un límite de gasto de la cuenta: es tu freno de seguridad.'],
b:[K('iva'),
 Q('Tu CPA es $18.000 y no tienes NIT registrado en Meta. ¿Cuál es tu CPA real?',[['$18.000',false,'Falta el IVA.'],['$21.420',true,'18.000 × 1,19.']])]};
X['i04-2']={ideas:[
 'El píxel mide en el navegador; la API de conversiones (CAPI) envía desde el servidor y no la bloquean los navegadores.',
 'En contraentrega, envía eventos de confirmación o entrega para que Meta aprenda de compradores reales y no solo de formularios.'],
b:[V('pixel','Navegador y servidor envían el evento a Meta.'),
 Q('Meta optimiza por "Compra" pero el 30 % no recibe. ¿Qué mejoras?',[['Nada',false,'Meta aprende de gente que no compra de verdad.'],['Envío por la API un evento de pedido confirmado o entregado',true,'Así Meta busca gente que sí recibe.']])]};
X['i05-1']={ideas:[
 'Campaña = objetivo. Conjunto = presupuesto, público y optimización. Anuncio = lo que ve la gente.',
 'Objetivos: Ventas, Clientes potenciales, Interacción, Tráfico, Reconocimiento y Apps.',
 'Advantage+ automatiza público, ubicaciones y presupuesto.'],
b:[V('campana','Campaña, conjuntos y anuncios.'),
 P('Une cada nivel con lo que decides ahí',[['Campaña','El objetivo'],['Conjunto','Presupuesto y público'],['Anuncio','Video y texto']])]};
X['i05-2']={ideas:[
 'La métrica clave es el costo por conversación.',
 'Solo actívala si puedes responder en minutos.',
 'Si usas la API: en Colombia el mensaje de marketing cuesta US$0,0125 y el de utilidad US$0,0008 (Meta, julio 2026).'],
b:[V('chat','Del anuncio al chat: así llega el cliente.'),
 Q('¿WhatsApp o landing para un producto que necesita explicación?',[['WhatsApp, si tengo quien responda',true,'La conversación resuelve dudas y confirma de una vez.'],['Landing siempre',false,'Una landing sirve más para productos que se explican solos.']])]};
X['i05-3']={ideas:[
 'La campaña a landing optimiza por el evento que llega del píxel o la API.',
 'Revisa que el precio del anuncio coincida con el de la landing.'],
b:[Q('Tu producto se entiende solo y quieres escalar. ¿Qué eliges?',[['Landing',true,'Sin depender de que alguien responda cada chat.'],['WhatsApp',false,'Funciona, pero tu capacidad de responder limita el escalado.']])]};
X['i06-1']={ideas:[
 'CPM: costo por mil impresiones. CTR: % que hace clic. CPC: costo por clic. CPA: costo por pedido.',
 'Frecuencia: cuántas veces vio tu anuncio la misma persona.',
 'No hay promedios oficiales de Meta para Colombia. Algunos sitios dicen que el CPM subió 18-25 % entre 2025 y 2026, con datos no auditables.'],
b:[V('embudo','Del anuncio al pedido entregado.'),
 K('embudo')]};
X['i06-2']={ideas:[
 'Meta recomienda esperar unos 50 eventos de optimización desde el último cambio significativo antes de juzgar un conjunto.',
 'Cambio significativo: pausar, cambiar evento, público o creativo. Cambios grandes de presupuesto también pueden serlo.',
 'Regla del curso: no apagues antes de gastar 2-3 veces tu CPA objetivo.'],
b:[K('aprendizaje'),
 Q('Día 2: tu CPA va en $30.000 y tu objetivo es $18.000, con $25.000 gastados. ¿Apagas?',[['Sí, ya',false,'Aún no gastas ni 2 veces tu CPA objetivo.'],['Espero a gastar 2-3 veces el CPA objetivo',true,'Con tan poco gasto los datos todavía no dicen nada.']])]};
X['i07-1']={ideas:[
 'Rutina: pedidos nuevos, confirmar, validar direcciones, generar guías antes del corte, novedades, revisar anuncios y conciliar.',
 'El horario de corte depende de cada bodega: pregúntalo a tu proveedor.'],
b:[O('Ordena tu mañana',['Revisar pedidos nuevos','Confirmar por WhatsApp','Validar direcciones','Generar guías antes del corte','Resolver novedades','Revisar anuncios']),
 V('reloj','Una mañana ordenada, hora por hora.')]};
X['i07-2']={ideas:[
 'Tipos de novedad: dirección incompleta, ausente, rechazo, sin cobertura y reprogramación.',
 'Resuélvela el mismo día: cada día de espera acerca la devolución.'],
b:[P('Une cada novedad con su solución',[['Dirección incompleta','Pedir nomenclatura y barrio'],['Cliente ausente','Acordar día y hora'],['No contesta','Escribir y llamar desde otro número'],['Rechazo','Preguntar la razón y ofrecer solución']]),
 Q('Te llega una novedad a las 4 p. m. ¿Cuándo la resuelves?',[['Mañana temprano',false,'Puede salir a devolución antes.'],['Hoy mismo',true,'Correcto.']])]};
X['i08-1']={ideas:[
 'Exporta los entregados, crúzalos con la billetera (recaudo − flete − comisiones) y reclama con número de guía lo que no cuadre.',
 'Mastershop muestra el pedido relacionado con cada movimiento.'],
b:[V('dinero','Lo que recaudas, menos fletes y comisiones, es lo que llega.'),
 O('Ordena la conciliación',['Exportar entregados','Exportar movimientos','Cruzar por guía','Marcar diferencias','Reclamar con número de guía'])]};
X['i08-2']={ideas:[
 'La garantía es legal: no la puedes negar.',
 'Atiende reclamos con número de radicado (Ley 2439).',
 'Un cliente que recompra no cuesta anuncios.'],
b:[K('recompra'),
 Q('Un cliente reclama por defecto al día 20. ¿Qué haces?',[['Le digo que ya pasó el retracto',false,'El retracto es otro derecho; la garantía sigue vigente.'],['Tramito la garantía',true,'Correcto.']])]};

/* ---------------- AVANZADO ---------------- */
X['a01-1']={ideas:[
 'El flete local y el nacional cambian mucho: una misma venta puede ganar en tu ciudad y perder lejos.',
 'Si una zona da utilidad negativa tras 100 pedidos, desactiva el pago contraentrega allí o pide anticipo.'],
b:[T('Flete 1 kg: local frente a nacional (Effi 2026)',['Transportadora','Local o urbano','Nacional'],[['Servientrega','$9.300','$17.200'],['Interrapidísimo','$7.900','$17.600'],['Coordinadora (1-2 kg)','$8.600','$18.200']],'effi'),
 K('equilibrio')]};
X['a01-2']={ideas:[
 'Tablero semanal: pedidos, % de confirmación, % de entrega, CPA por entregado, utilidad, saldo líquido y días de caja.',
 'Caja necesaria = anuncios diarios × días que tarda en volver el dinero.'],
b:[K('caja')]};
X['a02-1']={ideas:[
 'Prueba varios ganchos a la vez y cambia uno solo por prueba.',
 'Renueva cuando sube la frecuencia y cae el CTR.',
 'No hay un número oficial de creativos ni una frecuencia máxima: define la tuya con datos.'],
b:[Q('La frecuencia sube a 4 y el CTR cae a la mitad. ¿Qué haces?',[['Subo el presupuesto',false,'Le muestras más veces lo mismo a la misma gente.'],['Lanzo nuevos ganchos',true,'Es fatiga creativa.']])]};
X['a02-2']={ideas:[
 'La "regla del 20 %" es práctica del sector, no regla de Meta. Los cambios grandes pueden reiniciar el aprendizaje.',
 'Escalado vertical: más presupuesto en el mismo conjunto. Horizontal: duplicar a otros públicos.'],
b:[K('escala'),
 P('Une cada tipo de escalado',[['Vertical','Más presupuesto al mismo conjunto'],['Horizontal','Duplicar a otro público']])]};
X['a03-1']={ideas:[
 'Despacha solo pedidos confirmados.',
 'Pide anticipo a clientes de riesgo y lleva una lista interna de riesgo.',
 'Filtra municipios con muchas devoluciones.',
 'Un anticipo por Nequi sí tiene reversión (art. 51), porque es pago electrónico.'],
b:[Q('Un cliente nuevo de un municipio con 40 % de devolución pide 3 unidades. ¿Qué haces?',[['Despacho',false,'Alto riesgo: si lo rechaza pierdes el flete y los anuncios de ese pedido.'],['Pido un anticipo de $10.000',true,'Cubre parte del flete si se devuelve.']])]};
X['a03-2']={ideas:[
 'Servientrega asegura hasta $2.400.000 con recaudo; el manejo es 1 % (mínimo $500).',
 'Envía: 0 % de manejo si declaras hasta $10.000 y 1 % por encima. Domina: 1 % desde $100.001.',
 'Lo que declares es lo máximo que te indemnizan.'],
b:[Q('Declaras $10.000 para ahorrar en un producto de $89.900. ¿Qué pasa si se pierde?',[['Me pagan $89.900',false,'Te pagan lo declarado.'],['Me pagan como máximo $10.000',true,'Por eso declara el valor real.']])]};
X['a04-1']={ideas:[
 'API: una ventanilla entre programas.',
 'Webhook: un timbre que avisa cuando pasa algo.',
 'MCP: un estándar para que un agente de IA use herramientas.',
 'Dropi tiene un MCP oficial para consultar órdenes, cotizar envíos y buscar productos hablando con tu agente de IA.'],
b:[V('api','Ventanilla, timbre y agente.'),
 P('Une cada palabra con su ejemplo',[['API','Pido mis pedidos de hoy'],['Webhook','Me avisan cuando hay una novedad'],['MCP','Le pregunto a Claude por mis pedidos']])]};
X['a04-2']={ideas:[
 'Colombia, desde el 1 de julio de 2026: marketing US$0,0125 y utilidad US$0,0008 por mensaje.',
 'Desde el 1 de octubre de 2026 también se cobran los de servicio, con 1.000 gratis al mes por número.',
 'A eso súmale lo que cobre tu proveedor de la API.'],
b:[K('whatsapp')]};
X['a05-1']={ideas:[
 'Evalúa: despacho a tiempo, devoluciones, empaque, existencias y garantías.',
 'Un proveedor barato que despacha tarde te cuesta más.'],
b:[Q('Proveedor A: $3.000 más barato y despacha tarde. B: puntual. ¿Cuál?',[['A',false,'Los retrasos generan devoluciones y quejas.'],['B',true,'La puntualidad cuida tu tasa de entrega.']])]};
X['a05-2']={ideas:[
 'Registrar una marca en la SIC en 2026 cuesta $1.347.500 la primera clase y $673.500 cada adicional; Mipyme $970.000 y $485.000. Dura 10 años.',
 'Algunos portales publican $1.348.500: confirma al radicar.'],
b:[K('marca')]};
X['a06-1']={ideas:[
 'La S.A.S. limita tu responsabilidad al capital (Ley 1258 de 2008) y se crea por documento privado.',
 'Costos 2026 (fuentes secundarias): inscripción de 6 UVB ($72.660), impuesto de registro 0,7 % del capital y matrícula según activos. Total típico $250.000-$500.000.'],
b:[K('sas')]};
X['a06-2']={ideas:[
 'Emite factura electrónica validada por la DIAN.',
 'Guarda soportes y separa las cuentas del negocio de las personales.',
 'El tope para no ser responsable de IVA suele ser 3.500 UVT: confírmalo con tu contador.'],
b:[O('Ordena tu cierre mensual',['Descargar ventas y recaudos','Descargar facturas de Meta','Separar gastos personales','Conciliar billetera','Entregar al contador'])]};
X['a07-1']={ideas:[
 'Un SOP tiene: nombre, objetivo, cuándo se usa, pasos, plantillas, indicador y excepciones.',
 'Primeros SOP: confirmación, guías, novedades, conciliación y reclamos.'],
b:[O('Ordena las partes de un SOP',['Nombre','Objetivo','Cuándo se usa','Pasos','Plantillas','Indicador','Excepciones'])]};
X['a07-2']={ideas:['Cada rol tiene un indicador y solo los permisos que necesita.','Los retiros de dinero solo los hace el dueño.'],
b:[T('Roles, indicador y permisos',['Rol','Indicador','Permisos'],[['Confirmador','% de confirmación','Pedidos y WhatsApp'],['Logística','% de novedades resueltas','Guías'],['Anuncios','CPA por entregado','Anunciante en Meta'],['Dueño','Utilidad y saldo líquido','Retiros (solo él)']]),
 P('Une cada rol con su indicador',[['Confirmador','% de confirmación'],['Logística','% de novedades resueltas'],['Anuncios','CPA por entregado'],['Dueño','Utilidad y saldo líquido']])]};
X['a08-1']={ideas:['JadeMind conecta un agente de IA a WhatsApp, Instagram, Facebook y tu plataforma de dropshipping.'],b:[V('api','El agente conversa con tus clientes y consulta tu plataforma.')]};
X['a08-2']={ideas:[
 'Los 10 errores más caros: despachar sin confirmar; medir ROAS por pedido y no por entrega; escalar bajo el equilibrio; vender sin INVIMA; prometer dinero; precios tachados falsos; declarar valor bajo; no conciliar; olvidar el 19 % de IVA; depender de un solo perfil de Meta.'],
b:[Q('¿Cuál de estos errores te puede costar una multa de la SIC?',[['Prometer ingresos en tus anuncios',true,'Recuerda el caso Cossio: $813 millones.'],['No conciliar la billetera',false,'Te cuesta dinero, pero no es una infracción.']]),
 M([['Si Meta muestra buen ROAS, estoy ganando.','Meta cuenta pedidos, no entregas.'],['Declarar valor bajo es un ahorro inteligente.','Si se pierde el paquete, eso es todo lo que recuperas.']])]};
X['a08-3']={ideas:['Tu plan une todo: producto validado, costeo y equilibrio, plataforma y transportadora, oferta legal, guion y SOP, anuncios, caja a 8 semanas, formalización y tablero.','Cada número de tu plan debe tener una fuente: tu panel, un tarifario o una norma.'],
b:[O('Ordena tu plan de negocio',['Producto y validación legal','Costeo y equilibrio','Plataforma y transportadora','Oferta legal','Guion y SOP','Anuncios','Caja a 8 semanas','Formalización','Tablero'])]};

/* ---------------- CALCULADORAS ---------------- */
function cop(n){return '$'+Math.round(n).toLocaleString('es-CO')}
var CALC={
 devolucion:{t:'¿Cuánto pierdes si un pedido vuelve?',in:[['p','Precio de venta',39900,199900,1000,89900,'cop'],['f','Flete',7000,30000,100,17200,'cop'],['a','Anuncios por pedido',0,40000,500,18000,'cop'],['r','Transportadora','sel',[['Servientrega o Interrapidísimo (cobran recaudo)',1],['Envía o Domina (sin recaudo)',0]],1]],
  out:function(v){var rec=Math.max(v.p*0.035,4000),man=v.p*0.01,loss=v.f+man+(v.r?rec:0)+v.a;return [['Comisión de recaudo',cop(rec)],['Manejo (1 %)',cop(man)],['Pierdes por devolución',cop(loss),'bad'],['Equivale a',(loss/(v.p)*100).toFixed(0)+' % del precio']]},note:'Recaudo 3,5 % con mínimo $4.000 y manejo 1 %, como Servientrega en el tarifario Effi 2026. Cambia según transportadora.',bar:function(v){var rec=Math.max(v.p*0.035,4000),man=v.p*0.01;return [['Flete',v.f],['Manejo',man],['Recaudo',v.r?rec:0],['Anuncios',v.a]]}},
 retiro:{t:'¿Cuánto te llega al retirar? (Mastershop)',in:[['m','Monto a retirar',4000,5000000,1000,2000000,'cop'],['n','Retiros al mes',1,30,1,4,'n']],
  out:function(v){var c=3900+v.m*0.004;return [['Te llega',cop(v.m-c),'ok'],['Costo de este retiro',cop(c)],['Costo fijo al mes',cop(3900*v.n),v.n>8?'bad':'']]},note:'$3.900 + 4×1000 por retiro, mínimo $4.000 (ayuda oficial de Mastershop).'},
 cpa:{t:'CPA y ROAS: los de Meta y los reales',in:[['g','Gasto en anuncios',100000,5000000,50000,1800000,'cop'],['o','Pedidos',1,500,1,100,'n'],['e','Entregados',0,500,1,75,'n'],['p','Precio',39900,199900,1000,89900,'cop']],
  out:function(v){var e=Math.min(v.e,v.o);return [['CPA por pedido',cop(v.g/v.o)],['CPA por entregado',cop(v.g/Math.max(e,1)),'bad'],['ROAS que ve Meta',(v.p*v.o/v.g).toFixed(1)],['ROAS real',(v.p*e/v.g).toFixed(1),'ok']]}},
 volumetrico:{t:'Peso que te cobran',in:[['l','Largo (cm)',5,80,1,30,'n'],['w','Ancho (cm)',5,80,1,20,'n'],['h','Alto (cm)',2,80,1,20,'n'],['k','Peso real (kg)',0.1,10,0.1,0.5,'kg'],['d','Transportadora','sel',[['Interrapidísimo (÷ 6.000)',6000],['Domina (÷ 5.000)',5000]],6000]],
  out:function(v){var vol=v.l*v.w*v.h/v.d,c=Math.max(vol,v.k);return [['Peso volumétrico',vol.toFixed(1)+' kg'],['Te cobran por',c.toFixed(1)+' kg',vol>v.k?'bad':'ok']]},note:'Divisores del tarifario Effi 2026.'},
 precio:{t:'Tu precio desde los costos',in:[['c','Costo del producto',5000,100000,500,35000,'cop'],['f','Flete',7000,30000,500,15000,'cop'],['e','Tasa de entrega',40,95,1,75,'%'],['a','CPA por entregado',5000,50000,500,24000,'cop'],['u','Utilidad que quieres',0,50000,1000,10000,'cop']],
  out:function(v){var fe=v.f/(v.e/100),raw=v.c+fe+v.a+v.u,r=Math.ceil((raw-900)/1000)*1000+900;return [['Flete por entregado',cop(fe)],['Precio mínimo',cop(raw)],['Precio sugerido',cop(r),'ok']]}},
 combo:{t:'Una unidad o combo',in:[['p1','Precio 1 unidad',39900,199900,1000,89900,'cop'],['pc','Precio combo 2 unidades',59900,299900,1000,149900,'cop'],['c','Costo por unidad',5000,100000,500,35000,'cop']],
  out:function(v){var a=v.p1-v.c,b=v.pc-2*v.c;return [['Margen 1 unidad',cop(a)],['Margen combo',cop(b),b>a?'ok':'bad'],['Diferencia por pedido',cop(b-a),b>a?'ok':'bad']]},note:'El flete es casi el mismo, así que el margen extra del combo queda casi completo.'},
 simple:{t:'Régimen Simple: estimación',in:[['y','Ventas al año',10000000,2000000000,5000000,300000000,'cop']],
  out:function(v){var u=v.y/52374,t=u<6000?1.6:u<15000?2:u<30000?3.5:u<100000?4.5:null;return [['En UVT 2026',Math.round(u).toLocaleString('es-CO')+' UVT'],['Tarifa comercio',t?t+' %':'Supera el tope'],['Impuesto estimado',t?cop(v.y*t/100):'—',t?'':'bad']]},note:'UVT 2026 $52.374; tarifas art. 908 para comercio. Valídalo con tu contador.'},
 iva:{t:'Lo que de verdad pagas en Meta',in:[['g','Anuncios al mes',100000,10000000,50000,1000000,'cop'],['a','CPA',5000,60000,500,18000,'cop'],['n','¿NIT registrado en Meta?','sel',[['No',0],['Sí, responsable de IVA',1]],0]],
  out:function(v){var k=v.n?1:1.19;return [['Pagas al mes',cop(v.g*k),v.n?'ok':'bad'],['CPA real',cop(v.a*k),v.n?'ok':'bad']]},note:'Sin NIT, Meta suma 19 % de IVA (ayuda de Meta).'},
 embudo:{t:'Del anuncio al pedido',in:[['m','CPM',3000,40000,500,12000,'cop'],['c','CTR',0.3,5,0.1,1.5,'%'],['v','Conversión',0.5,20,0.5,5,'%']],
  out:function(v){var cpc=v.m/(1000*v.c/100),cpa=cpc/(v.v/100);return [['CPC',cop(cpc)],['CPA',cop(cpa),cpa<=18000?'ok':'bad']]},note:'Ilustrativo: compara el CPA con tu equilibrio.'},
 aprendizaje:{t:'Presupuesto para salir de aprendizaje',in:[['a','CPA objetivo',5000,60000,500,20000,'cop'],['n','Conjuntos',1,10,1,1,'n']],
  out:function(v){var d=v.a*50/7;return [['Por conjunto al día',cop(d)],['Total al día',cop(d*v.n),'ok']]},note:'Unos 50 eventos en 7 días por conjunto (lectura práctica de la guía de Meta).'},
 escala:{t:'Escalar 20 % cada 3 días',in:[['b','Presupuesto inicial al día',20000,2000000,10000,200000,'cop'],['p','Aumento',5,50,5,20,'%'],['d','Días',3,30,3,9,'n']],
  out:function(v){var s=Math.floor(v.d/3),f=v.b*Math.pow(1+v.p/100,s);return [['Aumentos',s],['Presupuesto final',cop(f),'ok']]}},
 caja:{t:'Caja que necesitas',in:[['a','Anuncios al día',20000,3000000,10000,500000,'cop'],['d','Días hasta que vuelve el dinero',1,20,1,5,'n']],
  out:function(v){return [['Caja mínima',cop(v.a*v.d),'ok']]},note:'Mide tus días reales en tu billetera.'},
 whatsapp:{t:'Costo de WhatsApp API al mes',in:[['m','Mensajes de marketing',0,50000,100,3000,'n'],['u','Mensajes de utilidad',0,100000,500,10000,'n'],['t','Dólar (pon el del día)',3000,5500,10,4000,'cop']],
  out:function(v){var usd=v.m*0.0125+v.u*0.0008;return [['En dólares','US$'+usd.toFixed(2)],['En pesos',cop(usd*v.t),'ok']]},note:'Tarifas Colombia desde el 1 de julio de 2026. Sin el cobro del proveedor de la API.'},
 marca:{t:'Tasas para registrar tu marca',in:[['n','Clases',1,10,1,2,'n'],['y','¿Mipyme?','sel',[['No',0],['Sí',1]],0]],
  out:function(v){var a=v.y?970000:1347500,b=v.y?485000:673500;return [['Total de tasas',cop(a+b*(v.n-1)),'ok']]},note:'SIC 2026, solicitud en línea.'},
 sas:{t:'Costos de crear una S.A.S.',in:[['c','Capital',1000000,100000000,500000,10000000,'cop']],
  out:function(v){return [['Impuesto de registro (0,7 %)',cop(v.c*0.007)],['Inscripción (6 UVB)',cop(72660)],['Subtotal sin matrícula',cop(v.c*0.007+72660),'ok']]},note:'Fuentes secundarias 2026. La matrícula depende de tus activos.'},
 fulfillment:{t:'Fulfillment con Effi',in:[['n','Despachos al mes',10,3000,10,300,'n'],['x','Unidades extra por paquete',0,5,1,0,'n']],
  out:function(v){return [['Costo al mes',cop(v.n*(2200+400*v.x)),'ok']]},note:'$2.200 por paquete de hasta 5 unidades y $400 por unidad adicional, antes de descuento por volumen.'},
 equilibrio:{t:'Tu utilidad por cada 100 despachos',in:[['p','Precio',39900,199900,1000,89900,'cop'],['c','Costo del producto',5000,100000,500,35000,'cop'],['f','Flete',7000,30000,500,15000,'cop'],['a','Anuncios por despacho',0,40000,500,18000,'cop'],['e','Tasa de entrega',30,100,1,65,'%']],
  out:function(v){var u=100*(v.e/100)*(v.p-v.c)-100*v.f-100*v.a,be=(v.f+v.a)/(v.p-v.c)*100;return [['Utilidad',cop(u),u>=0?'ok':'bad'],['Equilibrio',be.toFixed(1)+' %']]},bar:function(v){return [['Ingresos netos',100*(v.e/100)*(v.p-v.c)],['Fletes + anuncios',100*(v.f+v.a)]]},barMode:'vs'},
 recompra:{t:'Valor de la recompra',in:[['r','Clientes que recompran',0,60,1,15,'%'],['p','Precio de recompra',9900,199900,1000,49900,'cop']],
  out:function(v){return [['Valor extra por cliente',cop(v.p*v.r/100),'ok']]}}
};
window.SM_EXPLAIN=X;window.SM_CALC=CALC;window.SM_COP=cop;
})();
