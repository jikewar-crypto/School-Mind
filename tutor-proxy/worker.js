/* Puente del Tutor de School Mind → Gemini (nivel gratuito).
   Cloudflare Worker. La clave nunca llega al navegador.
   Variables (Settings → Variables and Secrets):
     GEMINI_API_KEY   (secreto) clave de Google AI Studio
     GEMINI_MODEL     (texto, opcional) por defecto gemini-3.8-flash; también sirve gemini-3.5-flash-lite
     ALLOWED_ORIGINS  (texto) orígenes permitidos separados por coma, ej.: https://jikewar-crypto.github.io */
export default {
  async fetch(req, env) {
    const origin = req.headers.get('Origin') || '';
    const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
    const ok = allowed.includes(origin);
    const cors = { 'Access-Control-Allow-Origin': ok ? origin : 'null', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Vary': 'Origin' };
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (req.method !== 'POST' || !ok) return new Response('No permitido', { status: 403, headers: cors });
    let body;
    try { body = await req.json(); } catch { return new Response('JSON inválido', { status: 400, headers: cors }); }
    const system = String(body.system || '').slice(0, 20000);
    const messages = Array.isArray(body.messages) ? body.messages.slice(-10) : [];
    if (!messages.length) return new Response('Sin mensajes', { status: 400, headers: cors });
    const contents = messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: String(m.content || '').slice(0, 12000) }] }));
    const model = env.GEMINI_MODEL || 'gemini-3.8-flash';
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_API_KEY },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents, generationConfig: { temperature: 0.4, maxOutputTokens: 700 } })
    });
    if (!r.ok) return new Response(JSON.stringify({ text: '', error: r.status }), { status: r.status === 429 ? 429 : 502, headers: { ...cors, 'Content-Type': 'application/json' } });
    const j = await r.json();
    const text = (j.candidates?.[0]?.content?.parts || []).map(p => p.text || '').join('');
    return new Response(JSON.stringify({ text }), { headers: { ...cors, 'Content-Type': 'application/json' } });
  }
};
