# Puente del Tutor (Gemini gratis)

El tutor de School Mind funciona así:

1. **Dentro del artefacto de Claude**: usa Claude directamente. No hay que configurar nada; la primera vez el estudiante acepta un permiso.
2. **En la versión pública (GitHub Pages u otro hosting)**: llama a este puente, que a su vez llama a Gemini con tu clave. La clave queda guardada en el servidor, nunca en la página.
3. **Sin puente**: el botón sigue funcionando con ayuda local (busca en las lecciones y muestra la tarea pendiente paso a paso).

## Montarlo en Cloudflare Workers (plan gratis)

1. Crea la clave gratis en https://aistudio.google.com → "Get API key" → "Create API key".
2. Entra a https://dash.cloudflare.com → "Workers & Pages" → "Create" → "Create Worker". Nómbralo `schoolmind-tutor` y toca "Deploy".
3. Toca "Edit code", borra lo que hay, pega `worker.js` y toca "Deploy".
4. En "Settings" → "Variables and Secrets" agrega:
   - `GEMINI_API_KEY` (tipo Secret): tu clave.
   - `ALLOWED_ORIGINS`: la dirección de tu sitio, por ejemplo `https://jikewar-crypto.github.io`.
   - `GEMINI_MODEL` (opcional): `gemini-3.8-flash` o `gemini-3.5-flash-lite`.
5. Copia la URL del worker (termina en `.workers.dev`) y pégala en `tutor-config.js`:
   `window.SM_TUTOR_ENDPOINT = 'https://schoolmind-tutor.TU-USUARIO.workers.dev';`

## Ten en cuenta

- El nivel gratuito de Gemini tiene límites por minuto y por día (se ven en AI Studio). Si se superan, el tutor muestra la ayuda local.
- En el nivel gratuito Google puede usar los mensajes para mejorar sus productos. Pide a los estudiantes que no escriban datos personales ni contraseñas en el tutor.
- `ALLOWED_ORIGINS` evita que otros sitios usen tu cuota.
