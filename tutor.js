/* School Mind — Tutor con IA
   Proveedores, en orden:
   1) Claude, cuando la página corre como artefacto de Claude (capacidad "sample"; sin claves en el código).
   2) Un puente propio (window.SM_TUTOR_ENDPOINT, ver tutor-config.js y tutor-proxy/) que llama a Gemini u otro modelo.
   3) Ayuda local: busca en las lecciones y propone el siguiente paso, sin IA.
*/
(function(){
'use strict';
var D=document,W=window;
function $(s,r){return (r||D).querySelector(s)}
function esc(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function load(k,d){try{var v=localStorage.getItem('sm_'+k);return v?JSON.parse(v):d}catch(e){return d}}
function save(k,v){try{localStorage.setItem('sm_'+k,JSON.stringify(v))}catch(e){}}
function sload(k,d){try{var v=sessionStorage.getItem('sm_'+k);return v?JSON.parse(v):d}catch(e){return d}}
function ssave(k,v){try{sessionStorage.setItem('sm_'+k,JSON.stringify(v))}catch(e){}}
var PLN={dropi:'Dropi',mastershop:'Mastershop',effi:'Effi'};
var CN={p:'Principiante',i:'Intermedio',a:'Avanzado'};
var MODS=function(){return W.SM_MODULES||[]};

/* ---------- proveedor ---------- */
var sampleP=null;
function getSample(){
  if(sampleP)return sampleP;
  sampleP=new Promise(function(res){
    if(!W.claude||typeof W.claude.use!=='function')return res(null);
    var t=setTimeout(function(){res(null)},10500);
    W.claude.use('sample').then(function(s){clearTimeout(t);res(s||null)},function(){clearTimeout(t);res(null)});
  });
  return sampleP;
}
getSample();
var CFG=Object.assign({name:'Tutor',prov:'auto',gKey:'',gModel:'gemini-3.8-flash',ep:'',oUrl:'',oKey:'',oModel:''},load('tutorCfg',{}));
function saveCfg(){save('tutorCfg',CFG)}
function tname(){return (CFG.name||'Tutor').trim().slice(0,24)||'Tutor'}
function endpoint(){return CFG.ep||W.SM_TUTOR_ENDPOINT||''}
function mode(){
  var p=CFG.prov;
  if(p==='gemini')return Promise.resolve(CFG.gKey?'gemini':'local');
  if(p==='openai')return Promise.resolve(CFG.oUrl&&CFG.oModel?'openai':'local');
  if(p==='proxy')return Promise.resolve(endpoint()?'proxy':'local');
  if(p==='local')return Promise.resolve('local');
  if(p==='claude')return getSample().then(function(s){return s?'claude':'local'});
  return getSample().then(function(s){return s&&!CFG.claudeDenied?'claude':(endpoint()?'proxy':(CFG.gKey?'gemini':'local'))});
}
var MODE_N={claude:'Claude',proxy:'Puente propio',gemini:'Gemini',openai:'Proveedor compatible',local:'Ayuda de la academia (sin IA)'};

/* ---------- contexto de la pantalla ---------- */
function prog(){return load('prog2',{})}
function parseHash(){var h=(location.hash||'#hoy').slice(1),m;
  if((m=h.match(/^l-([pia]\d\d)-(\d+)$/)))return {kind:'lesson',mod:m[1],n:+m[2]};
  if((m=h.match(/^m-([pia]\d\d)$/)))return {kind:'module',mod:m[1]};
  if((m=h.match(/^ex-([pia]\d\d)$/)))return {kind:'exam',mod:m[1]};
  if((m=h.match(/^c-([pia]\d\d)$/)))return {kind:'cert',mod:m[1]};
  if((m=h.match(/^ruta(?:-([pia]))?$/)))return {kind:'route',course:m[1]};
  return {kind:h||'hoy'};
}
function modById(id){return MODS().filter(function(m){return m.id===id})[0]}
function taskText(x){return typeof x==='string'?x:x.t}
function nextPending(){
  var P=prog(),out=null;
  MODS().some(function(m){return m.lessons.some(function(l,i){var k=m.id+'-'+(i+1);if(P.lessons&&P.lessons[k])return false;out={m:m,l:l,n:i+1};return true})});
  return out;
}
function context(){
  var P=prog(),u=load('user',null),plat=PLN[P.plat]?P.plat:'dropi',h=parseHash(),c=[];
  c.push('Estudiante: '+(u&&u.name?u.name.split(' ')[0]:'sin registrar')+'. Curso: '+(CN[P.course]||'Principiante')+'. Plataforma elegida: '+PLN[plat]+'.');
  var done=P.lessons?Object.keys(P.lessons).length:0;c.push('Lecciones terminadas: '+done+' de 61.');
  var h1=$('main h1');c.push('Pantalla actual: #'+(location.hash.slice(1)||'hoy')+(h1?' — "'+h1.textContent.trim()+'"':'')+'.');
  if(h.mod){var m=modById(h.mod);if(m){c.push('Módulo '+m.id+': '+m.title+'. Objetivo: '+(m.goal||''));
    if(h.kind==='lesson'){var l=m.lessons[h.n-1];if(l){
      c.push('Lección '+h.n+' de '+m.lessons.length+': '+l.t+'.');
      if(l.easy&&l.easy.length)c.push('Lo esencial: '+l.easy.join(' '));
      if(l.body&&l.body.length)c.push('Explicación (resumen): '+l.body.join(' ').slice(0,1400));
      if(l.steps&&l.steps.length)c.push('Paso a paso de la lección: '+l.steps.map(function(s,i){return (i+1)+') '+(typeof s==='string'?s:(s.t||''))}).join(' '));
      var pb=l.plat&&l.plat[plat];if(pb&&pb.body)c.push('En '+PLN[plat]+': '+pb.body.join(' ').slice(0,900));
      var pr=l.practice;if(pr){var tasks=pr.tasks.concat(pr.plat&&pr.plat[plat]?pr.plat[plat]:[]),key=m.id+'-'+h.n+':'+(pr.plat?plat:'all'),dn=(P.practice&&P.practice[key])||[];
        c.push('PRÁCTICA. Objetivo: '+pr.goal+'. Tareas:');
        tasks.forEach(function(x,i){c.push('  Tarea '+(i+1)+(dn[i]?' [HECHA]':' [PENDIENTE]')+': '+taskText(x)+(typeof x==='object'?(x.go?' | Empieza en '+x.go:'')+' | Clics: '+x.s.join(' / ')+' | Listo cuando: '+x.ok:''))});
        c.push('Entrega final: '+pr.deliver+'.');
        c.push('Secciones de esta pantalla que puedes señalar: s-esencial, s-explica'+(l.plat?', s-plat':'')+', s-fuentes, practice.');}
    }}
    if(h.kind==='exam')c.push('ESTÁ PRESENTANDO EL EXAMEN: no des la respuesta de ninguna pregunta; da pistas y dile qué lección repasar.');
  }}
  var np=nextPending();if(np)c.push('Siguiente lección pendiente en orden: '+np.l.t+' (#l-'+np.m.id+'-'+np.n+').');
  return c.join('\n');
}
function courseMap(){
  return MODS().map(function(m){return m.id+' '+m.title+' (#m-'+m.id+', examen #ex-'+m.id+'): '+m.lessons.map(function(l,i){return (i+1)+'. '+l.t+' #l-'+m.id+'-'+(i+1)}).join('; ')}).join('\n');
}
function SYSF(){return [
'Te llamas '+tname()+' y eres el tutor de School Mind, la academia de JadeMind para personas que aprenden a vender por internet con dropshipping contraentrega en Colombia (plataformas Dropi, Mastershop y Effi).',
'Tu trabajo: que el estudiante no se quede perdido y avance. Explica con palabras sencillas, como a alguien que empieza, en español de Colombia y tuteando.',
'Reglas:',
'- Respuestas cortas: máximo 120 palabras. Si es un proceso, usa pasos numerados de una línea.',
'- Usa siempre el CONTEXTO de la pantalla: si está en una práctica, ayúdalo con la primera tarea PENDIENTE y nombra los botones exactos que aparecen en esa tarea.',
'- Si no sabes dónde está un botón en una plataforma, dilo y sugiere el centro de ayuda de esa plataforma. No inventes menús.',
'- Nunca prometas ganancias ni resultados. Nunca pidas contraseñas, códigos ni datos bancarios.',
'- En exámenes da pistas y la lección a repasar, nunca la respuesta.',
'- Si la pregunta no tiene que ver con vender por internet o con la academia, responde breve y vuelve al tema.',
'- Termina con UNA sugerencia de siguiente paso.',
'Acciones: puedes añadir al final hasta 2 botones con este formato exacto, cada uno en su línea:',
'[[ir:#ruta|Texto del botón]] para llevarlo a otra pantalla (usa solo rutas del MAPA o #hoy, #ruta, #buscar, #glosario, #progreso, #constancias).',
'[[ver:seccion|Texto del botón]] para mover la pantalla a una sección de la pantalla actual (solo las secciones listadas en el contexto).'
].join('\n')}

/* ---------- llamada al modelo ---------- */
var hist=sload('tutorHist',[]);
function buildPrompt(q){
  return SYSF()+'\n\nMAPA DEL CURSO:\n'+courseMap()+'\n\nCONTEXTO DE LA PANTALLA:\n'+context()+'\n\nPregunta del estudiante: '+q;
}
function askModel(q,onText){
  return mode().then(function(md){
    var past=hist.slice(-8).map(function(m){return {role:m.r==='u'?'user':'assistant',content:m.t}});
    if(md==='claude')return getSample().then(function(s){
      var msgs=past.concat([{role:'user',content:buildPrompt(q)}]);
      if(msgs[0].role!=='user')msgs.shift();
      return s(msgs,{onText:function(e){onText(e.text)},modelTier:'quick',cache:false}).then(function(r){return r.text});
    });
    if(md==='gemini'){
      var gc=past.concat([{role:'user',content:'CONTEXTO DE LA PANTALLA:\n'+context()+'\n\nPregunta: '+q}]).map(function(m){return {role:m.role==='assistant'?'model':'user',parts:[{text:m.content}]}});
      return fetch('https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(CFG.gModel||'gemini-3.8-flash')+':generateContent',{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':CFG.gKey},
        body:JSON.stringify({systemInstruction:{parts:[{text:SYSF()+'\n\nMAPA DEL CURSO:\n'+courseMap()}]},contents:gc,generationConfig:{temperature:0.4,maxOutputTokens:700}})})
        .then(function(r){if(!r.ok)throw {code:r.status===429?'rate_limited':'http_'+r.status};return r.json()})
        .then(function(j){return ((j.candidates&&j.candidates[0]&&j.candidates[0].content&&j.candidates[0].content.parts)||[]).map(function(p){return p.text||''}).join('')});
    }
    if(md==='openai'){
      var om=[{role:'system',content:SYSF()+'\n\nMAPA DEL CURSO:\n'+courseMap()}].concat(past,[{role:'user',content:'CONTEXTO DE LA PANTALLA:\n'+context()+'\n\nPregunta: '+q}]);
      var hd={'Content-Type':'application/json'};if(CFG.oKey)hd.Authorization='Bearer '+CFG.oKey;
      return fetch(CFG.oUrl.replace(/\/+$/,'')+'/chat/completions',{method:'POST',headers:hd,body:JSON.stringify({model:CFG.oModel,messages:om,temperature:0.4,max_tokens:700})})
        .then(function(r){if(!r.ok)throw {code:r.status===429?'rate_limited':'http_'+r.status};return r.json()})
        .then(function(j){return (j.choices&&j.choices[0]&&j.choices[0].message&&j.choices[0].message.content)||''});
    }
    if(md==='proxy')return fetch(endpoint(),{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({system:SYSF()+'\n\nMAPA DEL CURSO:\n'+courseMap(),messages:past.concat([{role:'user',content:'CONTEXTO DE LA PANTALLA:\n'+context()+'\n\nPregunta: '+q}])})})
      .then(function(r){if(!r.ok)throw {code:'http_'+r.status};return r.json()}).then(function(j){return j.text||''});
    return Promise.resolve(localAnswer(q));
  });
}
function norm(t){return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}
function localAnswer(q){
  var STOP=' para como donde esta este esto tengo tiene hago hacer quiero puedo pueden sobre cual cuales porque pendiente tarea leccion explicame facil ejemplo numeros encuentro boton estoy perdido sigue curso conviene funciona academia modulo empiezo dame pista respuesta repaso '.split(' ');
  var words=norm(q).split(/[^a-z0-9ñ]+/).filter(function(w){return w.length>3&&STOP.indexOf(w)<0}),hits=[];
  var generic=/tarea|que hago|perdido|sigue|boton|paso/.test(norm(q));
  MODS().forEach(function(m){m.lessons.forEach(function(l,i){var txt=norm(l.t+' '+(l.easy||[]).join(' ')+' '+(l.body||[]).join(' ')),s=0;words.forEach(function(w){if(txt.indexOf(w)>=0)s+=norm(l.t).indexOf(w)>=0?3:1});if(s)hits.push({s:s,h:'#l-'+m.id+'-'+(i+1),t:l.t})})});
  hits.sort(function(a,b){return b.s-a.s});
  var h=parseHash(),out=[];
  if(h.kind==='lesson'){var m=modById(h.mod),l=m&&m.lessons[h.n-1];if(l&&l.practice){var P=prog(),plat=PLN[P.plat]?P.plat:'dropi',pr=l.practice,tasks=pr.tasks.concat(pr.plat&&pr.plat[plat]?pr.plat[plat]:[]),dn=(P.practice&&P.practice[m.id+'-'+h.n+':'+(pr.plat?plat:'all')])||[];
    for(var i=0;i<tasks.length;i++)if(!dn[i]){var x=tasks[i];out.push('Tu tarea pendiente es la '+(i+1)+': '+taskText(x)+'.');if(typeof x==='object'){if(x.go)out.push('1. Abre '+x.go);x.s.forEach(function(st,j){out.push((j+(x.go?2:1))+'. '+st)});out.push('Sabrás que terminaste cuando: '+x.ok)}out.push('[[ver:practice|Ir a la práctica]]');break}}}
  if(!out.length){var np=nextPending();if(np)out.push('Tu siguiente paso en orden es la lección "'+np.l.t+'".','[[ir:#l-'+np.m.id+'-'+np.n+'|Ir a esa lección]]')}
  if(hits.length&&!(generic&&out.length))out.splice(0,0,'Esto puede ayudarte con tu pregunta:',hits.slice(0,3).map(function(x){return '• '+x.t}).join('\n'),'[[ir:'+hits[0].h+'|Abrir "'+hits[0].t.slice(0,40)+'"]]');
  out.unshift('(El tutor con IA no está conectado en esta versión. Te ayudo con lo que hay en la academia.)');
  return out.join('\n');
}

/* ---------- acciones ---------- */
var OK_ROUTES=/^#(hoy|ruta(-[pia])?|buscar|glosario|progreso|trofeos|constancias|perfil|ubicacion|m-[pia]\d\d|ex-[pia]\d\d|l-[pia]\d\d-\d{1,2})$/;
var OK_SECT=/^(s-esencial|s-explica|s-plat|s-fuentes|practice)$/;
function parseActions(t){var acts=[];var body=t.replace(/\[\[(ir|ver):([^|\]]+)\|([^\]]+)\]\]/g,function(_,k,v,label){v=v.trim();if((k==='ir'&&OK_ROUTES.test(v))||(k==='ver'&&OK_SECT.test(v)))acts.push({k:k,v:v,label:label.trim()});return ''});return {body:body.trim(),acts:acts.slice(0,3)}}
function fmt(t){
  var lines=esc(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').split(/\n+/),h='',inOl=false;
  lines.forEach(function(ln){var m=ln.match(/^\s*(\d+)[.)]\s+(.*)/);if(m){if(!inOl){h+='<ol>';inOl=true}h+='<li>'+m[2]+'</li>'}else{if(inOl){h+='</ol>';inOl=false}if(ln.trim())h+='<p>'+ln.replace(/^\s*[-•]\s+/,'• ')+'</p>'}});
  if(inOl)h+='</ol>';return h;
}
function doAction(a){
  if(a.k==='ir'){location.hash=a.v;if(isNarrow())close();return}
  var el=D.getElementById(a.v);if(!el){location.hash=location.hash;return}
  el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  el.classList.add('tutor-flash');setTimeout(function(){el.classList.remove('tutor-flash')},2200);
  if(isNarrow())close();
}

/* ---------- interfaz ---------- */
var css=[
'.tutor-fab{position:fixed;z-index:60;display:flex;align-items:center;gap:10px;padding:12px 18px 12px 14px;border:0;border-radius:999px;background:var(--night,#1A1F24);color:#fff;font:600 15px/1 Poppins,system-ui,sans-serif;box-shadow:0 12px 32px rgba(0,0,0,.28);cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none}',
'.tutor-fab:focus-visible{outline:3px solid var(--jade,#05AB6C);outline-offset:3px}',
'.tutor-fab .dot{width:30px;height:30px;border-radius:50%;background:var(--jade,#05AB6C);display:grid;place-items:center;flex:none}',
'.tutor-fab .dot svg{width:18px;height:18px;stroke:#20282F}',
'.tutor-fab.dragging{cursor:grabbing;box-shadow:0 18px 44px rgba(0,0,0,.35)}',
'.tutor-fab .grip{width:6px;height:16px;background-image:radial-gradient(circle,rgba(255,255,255,.55) 1px,transparent 1.4px);background-size:6px 5px;margin-left:2px}',
'.tutor-panel{position:fixed;z-index:61;width:min(400px,calc(100vw - 24px));height:min(600px,calc(100vh - 32px));display:flex;flex-direction:column;background:#fff;border:1px solid #E1E8E5;border-radius:22px;box-shadow:0 24px 64px rgba(0,0,0,.22);overflow:hidden;font-family:Poppins,system-ui,sans-serif;color:var(--ink,#20282F)}',
'.tutor-panel[hidden],.tutor-panel [hidden]{display:none!important}',
'.tutor-head{display:flex;align-items:center;gap:10px;padding:14px 14px 12px 18px;border-bottom:1px solid #E6EDEA;cursor:grab;touch-action:none}',
'.tutor-head h2{font-size:16px;margin:0;flex:1}.tutor-head small{display:block;font-weight:500;font-size:12px;color:var(--soft,#3F4A53)}',
'.tutor-head button{border:0;background:var(--mist,#F2F5F4);border-radius:10px;min-width:40px;height:40px;font:600 13px Poppins,sans-serif;color:var(--ink,#20282F);cursor:pointer;padding:0 10px}',
'.tutor-log{flex:1;overflow:auto;padding:16px 16px 8px;display:flex;flex-direction:column;gap:12px;overscroll-behavior:contain}',
'.tmsg{max-width:92%;font-size:14.5px;line-height:1.5}.tmsg p{margin:0 0 6px}.tmsg ol{margin:4px 0 6px;padding-left:20px}.tmsg li{margin:2px 0}',
'.tmsg.u{align-self:flex-end;background:var(--jade-pale,#DCF2E7);border-radius:16px 16px 4px 16px;padding:10px 14px}',
'.tmsg.a{align-self:flex-start;background:var(--mist,#F2F5F4);border-radius:16px 16px 16px 4px;padding:12px 14px}',
'.tacts{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.tacts button{border:0;border-radius:999px;background:var(--night,#1A1F24);color:#fff;font:600 13px Poppins,sans-serif;padding:9px 14px;cursor:pointer}',
'.tchips{display:flex;gap:8px;overflow-x:auto;padding:8px 16px 4px;scrollbar-width:none}.tchips button{flex:none;border:1px solid #D6E0DB;background:#fff;border-radius:999px;padding:8px 12px;font:500 13px Poppins,sans-serif;color:var(--ink,#20282F);cursor:pointer}',
'.tform{display:flex;gap:8px;padding:10px 12px 12px;border-top:1px solid #E6EDEA}.tform textarea{flex:1;resize:none;border:1px solid #D6E0DB;border-radius:14px;padding:10px 12px;font:15px/1.4 Poppins,sans-serif;max-height:110px;min-height:44px}',
'.tform button{border:0;border-radius:14px;background:var(--jade,#05AB6C);color:#20282F;font:600 14px Poppins,sans-serif;padding:0 16px;cursor:pointer}.tform button:disabled{opacity:.5}',
'.tnote{font-size:11.5px;color:var(--soft,#3F4A53);padding:0 16px 10px;margin:0}',
'.typing{display:inline-flex;gap:4px}.typing i{width:6px;height:6px;border-radius:50%;background:#9AA7A1;animation:tb 1s infinite}.typing i:nth-child(2){animation-delay:.15s}.typing i:nth-child(3){animation-delay:.3s}@keyframes tb{0%,60%,100%{opacity:.3}30%{opacity:1}}',
'.tutor-flash{outline:3px solid var(--jade,#05AB6C);outline-offset:6px;border-radius:18px;transition:outline-color .6s}',
'.tset{flex:1;overflow:auto;padding:16px 18px;display:flex;flex-direction:column;gap:14px;font-size:14px}.tset[hidden]{display:none}',
'.tset h3{font-size:15px;margin:0}.tset p{margin:0;color:var(--soft,#3F4A53);font-size:13px;line-height:1.45}',
'.tset label{display:flex;flex-direction:column;gap:6px;font-weight:600;font-size:13px}.tset input[type=text],.tset input[type=password],.tset input[type=url]{border:1px solid #D6E0DB;border-radius:12px;padding:10px 12px;font:15px Poppins,sans-serif}',
'.tset fieldset{border:1px solid #E1E8E5;border-radius:16px;padding:12px 14px;margin:0;display:flex;flex-direction:column;gap:10px}.tset legend{font-weight:600;padding:0 6px}',
'.tset .opt{flex-direction:row!important;align-items:flex-start;gap:10px!important;font-weight:500!important}.tset .opt input{margin-top:3px;accent-color:var(--jade,#05AB6C)}.tset .opt b{display:block}.tset .opt span small{display:block;color:var(--soft,#3F4A53);font-weight:400}',
'.tset .sub{display:none;flex-direction:column;gap:8px;padding:4px 0 2px 26px}.tset .sub.on{display:flex}',
'.tset .row{display:flex;gap:8px;flex-wrap:wrap}.tset .b{border:0;border-radius:12px;padding:10px 14px;font:600 13px Poppins,sans-serif;cursor:pointer;background:var(--mist,#F2F5F4);color:var(--ink,#20282F)}.tset .b.p{background:var(--night,#1A1F24);color:#fff}.tset .b.j{background:var(--jade,#05AB6C);color:#20282F}',
'.tset .st{font-size:13px;padding:8px 12px;border-radius:10px;background:var(--mist,#F2F5F4)}.tset .st.ok{background:var(--jade-pale,#DCF2E7)}.tset .st.no{background:#FDE8E4}',
'body.m-land .tutor-fab,body.m-land .tutor-panel{display:none}',
'@media (max-width:860px){.tutor-fab .lbl{display:none}.tutor-fab{padding:10px}.tutor-panel{left:8px!important;right:8px!important;top:auto!important;bottom:8px!important;width:auto;height:min(82vh,640px);border-radius:22px}.tutor-head{cursor:default}}',
'@media (prefers-reduced-motion:reduce){.typing i{animation:none}}'
].join('\n');
var st=D.createElement('style');st.textContent=css;D.head.appendChild(st);

var ICON='<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.4V14"/><path d="M12 17h.01"/></svg>';
var fab=D.createElement('button');fab.type='button';fab.className='tutor-fab';fab.setAttribute('aria-haspopup','dialog');fab.setAttribute('aria-expanded','false');
fab.setAttribute('aria-label','Abrir a '+tname()+', el tutor. Puedes arrastrar este botón a cualquier lugar.');
fab.innerHTML='<span class="dot">'+ICON+'</span><span class="lbl">¿Te ayudo?</span><span class="grip" aria-hidden="true"></span>';
var panel=D.createElement('section');panel.className='tutor-panel';panel.hidden=true;panel.setAttribute('role','dialog');panel.setAttribute('aria-label',tname()+', tutor de School Mind');
panel.innerHTML='<div class="tutor-head"><h2><span id="tName">'+esc(tname())+'</span><small id="tMode">Tu ayuda en cada paso</small></h2><button type="button" id="tSet" aria-expanded="false" title="Nombre y modelo de IA">Ajustes</button><button type="button" id="tClear" title="Empezar de nuevo">Nuevo</button><button type="button" id="tClose" aria-label="Cerrar tutor">✕</button></div>'+
 '<div class="tset" id="tSetBox" hidden></div><div class="tutor-log" id="tLog" aria-live="polite"></div><div class="tchips" id="tChips"></div>'+
 '<form class="tform" id="tForm"><label class="sr" for="tIn" style="position:absolute;left:-9999px">Escribe tu pregunta</label><textarea id="tIn" rows="1" placeholder="Escribe tu duda…"></textarea><button type="submit" id="tSend">Enviar</button></form>'+
 '<p class="tnote" id="tNote">El tutor puede equivocarse. Confirma los datos importantes en la plataforma.</p>';
function mount(){D.body.appendChild(fab);D.body.appendChild(panel);requestAnimationFrame(place);if(D.fonts&&D.fonts.ready)D.fonts.ready.then(place);setTimeout(place,600);renderLog();}
if(D.readyState==='loading')D.addEventListener('DOMContentLoaded',mount);else mount();

/* posición arrastrable, recordada */
function isNarrow(){return innerWidth<=860}
var pos=load('tutorPos',null);
function bottomGap(){var tb=$('.tabbar');return tb&&getComputedStyle(tb).display!=='none'?tb.offsetHeight+12:24}
function place(){
  var w=fab.offsetWidth||150,h=fab.offsetHeight||54,x,y;
  if(pos){x=pos.x*innerWidth;y=pos.y*innerHeight}else{x=innerWidth-w-24;y=innerHeight-h-bottomGap()}
  x=Math.max(8,Math.min(innerWidth-w-8,x));y=Math.max(8,Math.min(innerHeight-h-bottomGap()+12,y));
  fab.style.left=x+'px';fab.style.top=y+'px';placePanel();
}
function placePanel(){
  if(panel.hidden||isNarrow()){panel.style.left=panel.style.top='';return}
  var r=fab.getBoundingClientRect(),pw=panel.offsetWidth,ph=panel.offsetHeight;
  var left=r.left+r.width/2>innerWidth/2?r.right-pw:r.left;
  var top=r.top>ph+16?r.top-ph-12:Math.min(r.bottom+12,innerHeight-ph-16);
  if(ppos){left=ppos.x;top=ppos.y}
  panel.style.left=Math.max(12,Math.min(innerWidth-pw-12,left))+'px';
  panel.style.top=Math.max(12,Math.min(innerHeight-ph-12,top))+'px';
}
addEventListener('resize',place);
var drag=null,ppos=null;
fab.addEventListener('pointerdown',function(e){if(e.button)return;var r=fab.getBoundingClientRect();drag={sx:e.clientX,sy:e.clientY,ox:r.left,oy:r.top,moved:false};fab.setPointerCapture(e.pointerId)});
fab.addEventListener('pointermove',function(e){if(!drag)return;var dx=e.clientX-drag.sx,dy=e.clientY-drag.sy;if(!drag.moved&&Math.abs(dx)+Math.abs(dy)<6)return;drag.moved=true;fab.classList.add('dragging');
  fab.style.left=Math.max(8,Math.min(innerWidth-fab.offsetWidth-8,drag.ox+dx))+'px';fab.style.top=Math.max(8,Math.min(innerHeight-fab.offsetHeight-8,drag.oy+dy))+'px';ppos=null;placePanel()});
fab.addEventListener('pointerup',function(){if(!drag)return;var mv=drag.moved;drag=null;fab.classList.remove('dragging');
  if(mv){pos={x:parseFloat(fab.style.left)/innerWidth,y:parseFloat(fab.style.top)/innerHeight};save('tutorPos',pos);fab.dataset.justDragged='1';setTimeout(function(){delete fab.dataset.justDragged},50)}});
fab.addEventListener('click',function(){if(fab.dataset.justDragged)return;panel.hidden?open():close()});
fab.addEventListener('keydown',function(e){var k={ArrowLeft:[-20,0],ArrowRight:[20,0],ArrowUp:[0,-20],ArrowDown:[0,20]}[e.key];if(!k||!e.altKey)return;e.preventDefault();var x=parseFloat(fab.style.left)+k[0],y=parseFloat(fab.style.top)+k[1];pos={x:x/innerWidth,y:y/innerHeight};save('tutorPos',pos);place()});
/* el panel también se arrastra desde su encabezado (escritorio) */
var head=null,hd=null;
panel.addEventListener('pointerdown',function(e){if(isNarrow()||!e.target.closest('.tutor-head')||e.target.closest('button'))return;var r=panel.getBoundingClientRect();hd={sx:e.clientX,sy:e.clientY,ox:r.left,oy:r.top};panel.setPointerCapture(e.pointerId)});
panel.addEventListener('pointermove',function(e){if(!hd)return;ppos={x:hd.ox+e.clientX-hd.sx,y:hd.oy+e.clientY-hd.sy};placePanel()});
panel.addEventListener('pointerup',function(){hd=null});

function setHTML(){
  var c=CFG,ck=function(v){return c.prov===v?' checked':''},on=function(v){return c.prov===v?' on':''};
  return '<h3>Ajustes del tutor</h3>'+
  '<label>Nombre del tutor<input type="text" id="sName" maxlength="24" value="'+esc(c.name)+'" placeholder="Ej.: Jade, Profe Ana, Mentor"></label>'+
  '<fieldset><legend>Modelo de inteligencia artificial</legend>'+
  '<label class="opt"><input type="radio" name="sProv" value="auto"'+ck('auto')+'><span><b>Automático</b><small>Usa Claude si está disponible; si no, el puente o tu clave de Gemini; si no, la ayuda de la academia.</small></span></label>'+
  '<label class="opt"><input type="radio" name="sProv" value="claude"'+ck('claude')+'><span><b>Claude</b><small>Funciona dentro de la página de Claude. Te pide un permiso la primera vez.</small></span></label>'+
  '<div class="sub'+(c.prov==='claude'||c.prov==='auto'?' on':'')+'" data-for="claude auto"><div class="row"><button type="button" class="b p" id="sClaude">Conectar Claude</button></div><p class="st" id="sClaudeSt">Toca "Conectar Claude" para pedir el permiso de nuevo.</p></div>'+
  '<label class="opt"><input type="radio" name="sProv" value="gemini"'+ck('gemini')+'><span><b>Gemini (gratis con tu clave)</b><small>Crea una clave gratis en aistudio.google.com. Se guarda solo en este navegador.</small></span></label>'+
  '<div class="sub'+on('gemini')+'" data-for="gemini"><label>Clave de API<input type="password" id="sGKey" autocomplete="off" value="'+esc(c.gKey)+'" placeholder="AIza…"></label><label>Modelo<input type="text" id="sGModel" value="'+esc(c.gModel)+'"></label></div>'+
  '<label class="opt"><input type="radio" name="sProv" value="proxy"'+ck('proxy')+'><span><b>Puente propio</b><small>La URL del puente de tu academia (la clave queda en el servidor).</small></span></label>'+
  '<div class="sub'+on('proxy')+'" data-for="proxy"><label>URL del puente<input type="url" id="sEp" value="'+esc(c.ep||W.SM_TUTOR_ENDPOINT||'')+'" placeholder="https://…workers.dev"></label></div>'+
  '<label class="opt"><input type="radio" name="sProv" value="openai"'+ck('openai')+'><span><b>Otra herramienta de IA</b><small>Cualquier servicio compatible con OpenAI (OpenRouter, Groq, Ollama…).</small></span></label>'+
  '<div class="sub'+on('openai')+'" data-for="openai"><label>URL base<input type="url" id="sOUrl" value="'+esc(c.oUrl)+'" placeholder="https://openrouter.ai/api/v1"></label><label>Modelo<input type="text" id="sOModel" value="'+esc(c.oModel)+'"></label><label>Clave (si la pide)<input type="password" id="sOKey" autocomplete="off" value="'+esc(c.oKey)+'"></label></div>'+
  '<label class="opt"><input type="radio" name="sProv" value="local"'+ck('local')+'><span><b>Sin IA</b><small>Solo la ayuda de la academia: tu tarea pendiente y lecciones relacionadas.</small></span></label>'+
  '</fieldset><p>No escribas contraseñas ni datos personales en el tutor.</p>'+
  '<div class="row"><button type="button" class="b j" id="sSave">Guardar</button><button type="button" class="b" id="sTest">Probar conexión</button><button type="button" class="b" id="sBack">Volver al chat</button></div><p class="st" id="sMsg" hidden></p>';
}
function showSet(on){var b=$('#tSetBox');b.hidden=!on;$('#tLog').hidden=on;$('#tChips').hidden=on;$('#tForm').hidden=on;$('#tSet').setAttribute('aria-expanded',on?'true':'false');$('#tSet').textContent=on?'Chat':'Ajustes';
  if(on){b.innerHTML=setHTML();$('#sName').focus()}}
function readSet(){
  var r=$('input[name=sProv]:checked');CFG.prov=r?r.value:'auto';
  CFG.name=($('#sName').value||'Tutor').trim().slice(0,24);
  CFG.gKey=$('#sGKey').value.trim();CFG.gModel=$('#sGModel').value.trim()||'gemini-3.8-flash';
  CFG.ep=$('#sEp').value.trim();CFG.oUrl=$('#sOUrl').value.trim();CFG.oModel=$('#sOModel').value.trim();CFG.oKey=$('#sOKey').value.trim();
  if(CFG.prov==='claude')CFG.claudeDenied=false;
  saveCfg();$('#tName').textContent=tname();panel.setAttribute('aria-label',tname()+', tutor de School Mind');updMode();
}
function smsg(t,ok){var m=$('#sMsg');m.hidden=false;m.textContent=t;m.className='st '+(ok?'ok':'no')}
function connectClaude(){
  var st=$('#sClaudeSt');st.className='st';st.textContent='Pidiendo el permiso…';
  getSample().then(function(s){
    if(!s){st.className='st no';st.textContent='Claude solo está disponible cuando abres la academia desde su enlace de Claude. Aquí usa Gemini, un puente u otra herramienta.';return}
    return s('Responde solo con la palabra: listo',{modelTier:'quick',cache:false}).then(function(){CFG.claudeDenied=false;if(CFG.prov==='local')CFG.prov='auto';saveCfg();updMode();st.className='st ok';st.textContent='Claude está conectado.'},
      function(e){st.className='st no';st.textContent=e&&e.code==='not_granted'?'El permiso sigue sin aceptarse. Recarga la página y toca de nuevo "Conectar Claude": cuando Claude te pregunte, elige permitir. Si no vuelve a preguntar, usa Gemini u otra opción de abajo.':(e&&e.code==='rate_limited'?'Claude está ocupado. Intenta en un minuto.':'No se pudo conectar ahora. Intenta de nuevo.')});
  });
}
function testConn(){readSet();smsg('Probando…',true);var saved=hist;hist=[];
  askModel('Responde solo: conexión lista',function(){}).then(function(t){hist=saved;mode().then(function(m){smsg(m==='local'?'Estás en modo sin IA. Elige un modelo para usar inteligencia artificial.':'Funciona con '+MODE_N[m]+'.',m!=='local')})},
    function(e){hist=saved;smsg('No funcionó ('+(e&&e.code||'error')+'). Revisa la clave, la URL o el modelo.',false)});
}
panel.addEventListener('change',function(e){if(e.target.name!=='sProv')return;[].forEach.call(panel.querySelectorAll('.tset .sub'),function(d){d.classList.toggle('on',d.dataset.for.split(' ').indexOf(e.target.value)>=0)})});
function open(){panel.hidden=false;fab.setAttribute('aria-expanded','true');placePanel();renderChips();updMode();if(!hist.length)greet();setTimeout(function(){$('#tIn').focus()},30)}
function close(){panel.hidden=true;fab.setAttribute('aria-expanded','false');fab.focus()}
D.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden)close()});
panel.addEventListener('click',function(e){
  if(e.target.id==='tClose')close();
  if(e.target.id==='tSet')showSet($('#tSetBox').hidden);
  if(e.target.id==='sBack')showSet(false);
  if(e.target.id==='sSave'){readSet();smsg('Guardado. Ahora te atiende '+tname()+'.',true)}
  if(e.target.id==='sTest')testConn();
  if(e.target.id==='sClaude')connectClaude();
  if(e.target.id==='tClear'){hist=[];ssave('tutorHist',hist);renderLog();greet()}
  var a=e.target.closest('[data-act]');if(a)doAction(JSON.parse(a.dataset.act));
  var c=e.target.closest('[data-q]');if(c)send(c.dataset.q);
});
function updMode(){mode().then(function(m){$('#tMode').textContent=m==='local'?'Ayuda de la academia · sin IA':'Con IA · '+MODE_N[m]})}
addEventListener('hashchange',function(){if(!panel.hidden)renderChips()});

function chips(){
  var h=parseHash(),c=[];
  if(h.kind==='lesson'){c.push('¿Qué hago en mi tarea pendiente?','Explícame esta lección más fácil','Dame un ejemplo con números','No encuentro el botón')}
  else if(h.kind==='exam'){c.push('Dame una pista sin la respuesta','¿Qué lección repaso?')}
  else if(h.kind==='module'){c.push('¿De qué trata este módulo?','¿Por dónde empiezo?')}
  else{c.push('Estoy perdido, ¿qué sigue?','¿Qué curso me conviene?','¿Cómo funciona la academia?')}
  return c;
}
function renderChips(){$('#tChips').innerHTML=chips().map(function(q){return '<button type="button" data-q="'+esc(q)+'">'+esc(q)+'</button>'}).join('')}
function greet(){var u=load('user',null);var n=u&&u.name?' '+u.name.split(' ')[0]:'';addMsg('a','Hola'+n+'. Soy '+tname()+', tu tutor. Puedo explicarte la lección que tienes en pantalla, guiarte en tu práctica clic a clic o decirte qué sigue. Puedes arrastrar mi botón a donde te estorbe menos. En "Ajustes" puedes cambiar mi nombre o el modelo de IA.',false)}
function msgHTML(m){var p=m.r==='a'?parseActions(m.t):{body:m.t,acts:[]};
  return '<div class="tmsg '+m.r+'">'+(m.r==='a'?fmt(p.body):'<p>'+esc(p.body)+'</p>')+(p.acts.length?'<div class="tacts">'+p.acts.map(function(a){return '<button type="button" data-act=\''+esc(JSON.stringify(a))+'\'>'+esc(a.label)+'</button>'}).join('')+'</div>':'')+'</div>'}
function renderLog(){var L=$('#tLog');if(!L)return;L.innerHTML=hist.map(msgHTML).join('');L.scrollTop=L.scrollHeight}
function addMsg(r,t,keep){var m={r:r,t:t};if(keep!==false){hist.push(m);ssave('tutorHist',hist.slice(-30))}var L=$('#tLog');L.insertAdjacentHTML('beforeend',msgHTML(m));L.scrollTop=L.scrollHeight}
var busy=false,lastAsk=0;
function send(q){
  q=(q||'').trim();if(!q||busy)return;
  if(Date.now()-lastAsk<1500)return;lastAsk=Date.now();
  busy=true;$('#tSend').disabled=true;$('#tIn').value='';
  addMsg('u',q);
  var L=$('#tLog');L.insertAdjacentHTML('beforeend','<div class="tmsg a" id="tLive"><span class="typing" aria-label="Escribiendo"><i></i><i></i><i></i></span></div>');L.scrollTop=L.scrollHeight;
  var live=$('#tLive');
  askModel(q,function(txt){if(live&&txt&&txt!=='Thinking...'){live.innerHTML=fmt(parseActions(txt).body);L.scrollTop=L.scrollHeight}})
  .then(function(t){live.remove();addMsg('a',t||'No tengo una respuesta ahora. Intenta preguntarlo de otra forma.')},
   function(err){live.remove();var c=err&&err.code;
     if(c==='not_granted'){CFG.claudeDenied=true;saveCfg();updMode()}
     addMsg('a',c==='not_granted'?'No tengo permiso para usar Claude. Para activarlo toca "Ajustes" (arriba) → "Conectar Claude", o elige otro modelo. Mientras tanto:\n'+localAnswer(q):
       c==='rate_limited'?'Hiciste muchas preguntas seguidas. Espera un minuto y vuelve a intentarlo.':localAnswer(q))})
  .then(function(){busy=false;$('#tSend').disabled=false});
}
D.addEventListener('submit',function(e){if(e.target.id!=='tForm')return;e.preventDefault();send($('#tIn').value)});
D.addEventListener('keydown',function(e){if(e.target.id==='tIn'&&e.key==='Enter'&&!e.shiftKey){e.preventDefault();send(e.target.value)}});
})();
