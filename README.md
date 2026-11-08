# School Mind

Academia para emprendedores de JadeMind S.A.S. Enseña a vender por internet con pago contraentrega, desde cero hasta escalar, con tres cursos (Principiante, Intermedio y Avanzado) y las plataformas Dropi, Mastershop y Effi.

## Qué incluye

- 25 módulos, 61 lecciones y unas 111 horas de formación.
- Prueba de ubicación para elegir curso.
- Selector de plataforma: los pasos y las prácticas cambian según Dropi, Mastershop o Effi.
- Prácticas guiadas con pregunta de comprobación, exámenes por módulo y constancia descargable.
- Progreso, trofeos, glosario y opciones de accesibilidad (tamaño de letra, contraste alto y lectura en voz alta).
- Capturas reales de los paneles de Dropi y Effi, con los datos personales difuminados.

## Cómo verla

Es un sitio estático: no necesita servidor ni base de datos.

- **En tu computador:** abre `index.html` en el navegador o, desde la carpeta, ejecuta `python3 -m http.server` y entra a `http://localhost:8000`.
- **En internet:** actívala con GitHub Pages (Settings → Pages → rama `main`, carpeta raíz) o súbela a cualquier hosting, por ejemplo Hostinger.

## Archivos

| Archivo | Contenido |
| --- | --- |
| `index.html` | Diseño, navegación y lógica de la academia |
| `core.js` | Cursos, plataformas, prueba de ubicación y glosario |
| `course-p.js`, `course-i.js`, `course-a.js` | Contenido de los cursos Principiante, Intermedio y Avanzado |
| `plat-live.js` | Pasos de Dropi y Mastershop verificados en sus paneles el 8 de noviembre de 2026 |
| `img/dropi`, `img/effi` | Capturas de los paneles |

## Importante

- El avance, los trofeos y los datos del estudiante se guardan solo en su navegador. Para un registro central de estudiantes hace falta un servidor con base de datos.
- Curso de educación informal: no conduce a título ni a certificado de aptitud ocupacional. Al aprobar cada módulo se expide una constancia.
- School Mind no está afiliada a Dropi, Mastershop, Effi ni Meta. Las plataformas cambian sus pantallas: revisa las capturas cada cierto tiempo.
