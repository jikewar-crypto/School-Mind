/* School Mind — motor de explicaciones interactivas y animadas */
(function(){
'use strict';
var D=document;
function esc(t){return String(t==null?'':t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function load(){try{return JSON.parse(localStorage.getItem('sm_ix')||'{}')}catch(e){return {}}}
function save(v){try{localStorage.setItem('sm_ix',JSON.stringify(v))}catch(e){}}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var CHK='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

/* ---------- visuales animados (HTML + CSS, legibles por lectores de pantalla) ---------- */
function flow(nodes,o){o=o||{};return '<ol class="vflow'+(o.v?' vert':'')+'">'+nodes.map(function(n,i){return '<li style="--i:'+i+'"><span class="vf-dot">'+(i+1)+'</span><span class="vf-t"><b>'+esc(n[0])+'</b>'+(n[1]?'<small>'+esc(n[1])+'</small>':'')+(n[2]?'<em class="vf-bad">'+esc(n[2])+'</em>':'')+'</span></li>'}).join('')+'</ol>'}
var VIS={
 ruta:function(){return flow([['Lee','Lo esencial y las ideas'],['Mira','Cómo se hace en tu plataforma'],['Practica','Clic a clic y actividades'],['Examen','Con 70 % recibes tu constancia']])},
 actores:function(){return flow([['Vendedor','Anuncia, confirma y fija el precio'],['Plataforma','Genera la guía y liquida'],['Proveedor','Empaca y despacha'],['Transportadora','Entrega y recauda'],['Cliente','Paga al recibir o rechaza']])},
 recorrido:function(){return flow([['Pedido','Llega del anuncio','Sin confirmar'],['Confirmado','Por WhatsApp','Dirección mala'],['Guía','La plataforma la genera'],['En tránsito','Viaja a la ciudad'],['En reparto','El mensajero sale','Ausente o rechazo'],['Entregado','Recaudo en efectivo'],['Billetera','Te liquidan','Si vuelve: pierdes el flete']])},
 dinero:function(){return flow([['Día 0','Pagas los anuncios'],['Día 1','Despachas'],['Días 2 a 5','Entrega y recaudo'],['Liquidación','Recaudo − flete − comisiones'],['Retiro','A tu banco o Nequi']])},
 retracto:function(){return flow([['Entrega','Empieza a contar'],['5 días hábiles','El cliente puede retractarse'],['Devuelve el producto','Él paga ese envío'],['15 días calendario','Máximo para devolver el dinero']])},
 reloj:function(){return flow([['7:00','Pedidos nuevos'],['8:00','Confirmar por WhatsApp'],['9:00','Validar direcciones'],['10:00','Guías antes del corte'],['11:00','Novedades'],['12:00','Revisar anuncios']])},
 pixel:function(){return flow([['El cliente compra','En tu tienda'],['Navegador','El píxel envía el evento'],['Servidor','La API de conversiones lo confirma'],['Meta','Aprende quién sí compra']])},
 api:function(){return flow([['API','La ventanilla: un programa le pide datos a otro'],['Webhook','El timbre: te avisan cuando pasa algo'],['MCP','El puente: un agente de IA usa tus herramientas']])},
 balanza:function(){
   function col(t,inc,cost,res){var mx=6742500*1.02;return '<div class="vb-col"><b class="vb-t">'+t+'</b><div class="vb-bars"><span class="vb-bar ok" style="--h:'+(inc/mx*100)+'%"><i>'+inc.toLocaleString('es-CO')+'</i></span><span class="vb-bar bad" style="--h:'+(cost/mx*100)+'%"><i>'+cost.toLocaleString('es-CO')+'</i></span></div><p class="vb-res '+(res>=0?'ok':'bad')+'">Utilidad '+(res<0?'−':'')+'$'+Math.abs(res).toLocaleString('es-CO')+'</p></div>'}
   return '<div class="vbal">'+col('Entrega 75 %',6742500,5925000,817500)+col('Entrega 60 %',5394000,5400000,-6000)+'<p class="vb-key"><span class="k ok"></span>Ingresos <span class="k bad"></span>Costos (producto, fletes y anuncios)</p></div>'},
 embudo:function(){var r=[['Impresiones','100.000',100],['Clics (CTR 1,5 %)','1.500',72],['Pedidos (5 %)','75',46],['Entregados (75 %)','56',34]];return '<ol class="vfun">'+r.map(function(x,i){return '<li style="--i:'+i+';--w:'+x[2]+'%"><span><b>'+x[1]+'</b> '+x[0]+'</span></li>'}).join('')+'</ol>'},
 chat:function(){var m=[['c','Hola, ¿cuánto vale el organizador?'],['v','¡Hola! Vale $89.900 con envío. Pagas al recibir. ¿Para qué ciudad lo quieres?'],['c','Para Bello'],['v','Perfecto. Te confirmo: Ana Pérez, Cra 45 # 32-10, barrio Niquía, 1 organizador, $89.900 contraentrega. ¿Me confirmas con un "Sí, confirmo"?'],['c','Sí, confirmo'],['t','Etiqueta: Confirmado']];return '<div class="vchat">'+m.map(function(x,i){return '<p class="b-'+x[0]+'" style="--i:'+i+'">'+esc(x[1])+'</p>'}).join('')+'</div>'},
 landing:function(){var b=['Título con beneficio','Demostración en video','Beneficios','Prueba real','Oferta y precio total','Preguntas frecuentes','Formulario corto'];return '<div class="vland"><div class="vl-phone">'+b.map(function(x,i){return '<span style="--i:'+i+'">'+x+'</span>'}).join('')+'</div></div>'},
 portafolio:function(){var b=['Página','Instagram','Cuenta publicitaria','Conjunto de datos','WhatsApp','Personas y socios'];return '<div class="vbox"><b>Portafolio comercial</b><div>'+b.map(function(x,i){return '<span style="--i:'+i+'">'+x+'</span>'}).join('')+'</div></div>'},
 campana:function(){return '<div class="vtree"><div class="vt-n l0" style="--i:0"><b>Campaña</b><small>Objetivo: Interacción</small></div><div class="vt-row">'+[1,2].map(function(c){return '<div class="vt-g"><div class="vt-n l1" style="--i:'+c+'"><b>Conjunto '+c+'</b><small>Presupuesto y público</small></div><div class="vt-row">'+[1,2].map(function(a){return '<div class="vt-n l2" style="--i:'+(2+c+a)+'"><b>Anuncio</b><small>Video '+(c*2+a-2)+'</small></div>'}).join('')+'</div></div>'}).join('')+'</div></div>'}
};

/* ---------- calculadoras ---------- */
function fmtIn(v,f){return f==='cop'?window.SM_COP(v):f==='%'?(Math.round(v*10)/10)+' %':f==='kg'?v+' kg':String(v)}
function calcHTML(key,id){var C=window.SM_CALC[key];if(!C)return '';var h='<div class="ix-calc" data-calc="'+key+'"><div class="kc-in">';
  C.in.forEach(function(x){var nm=id+'-'+x[0];
    if(x[2]==='sel')h+='<label class="kc-f"><span>'+esc(x[1])+'</span><select data-k="'+x[0]+'" id="'+nm+'">'+x[3].map(function(o){return '<option value="'+o[1]+'"'+(o[1]===x[4]?' selected':'')+'>'+esc(o[0])+'</option>'}).join('')+'</select></label>';
    else h+='<label class="kc-f"><span>'+esc(x[1])+' <output for="'+nm+'">'+fmtIn(x[5],x[6])+'</output></span><input type="range" id="'+nm+'" data-k="'+x[0]+'" data-f="'+x[6]+'" min="'+x[2]+'" max="'+x[3]+'" step="'+x[4]+'" value="'+x[5]+'"></label>'});
  h+='</div><div class="kc-out" aria-live="polite"></div></div>'+(C.note?'<p class="ix-note">'+esc(C.note)+'</p>':'');return h}
function runCalc(el){var C=window.SM_CALC[el.dataset.calc],v={};[].forEach.call(el.querySelectorAll('[data-k]'),function(i){v[i.dataset.k]=parseFloat(i.value);var o=i.parentNode.querySelector('output');if(o)o.textContent=fmtIn(parseFloat(i.value),i.dataset.f)});
  var out=C.out(v),h='<dl>'+out.map(function(r){return '<div class="'+(r[2]||'')+'"><dt>'+esc(r[0])+'</dt><dd>'+esc(r[1])+'</dd></div>'}).join('')+'</dl>';
  if(C.bar){var b=C.bar(v),mx=Math.max.apply(null,b.map(function(x){return x[1]}).concat(1)),tot=b.reduce(function(s,x){return s+x[1]},0);
    if(C.barMode==='vs')h+='<div class="kc-vs">'+b.map(function(x,i){return '<div><span>'+esc(x[0])+'</span><i class="'+(i?'bad':'ok')+'" style="width:'+(x[1]/mx*100)+'%"></i></div>'}).join('')+'</div>';
    else h+='<div class="kc-stack" aria-hidden="true">'+b.filter(function(x){return x[1]>0}).map(function(x,i){return '<i class="s'+i+'" style="flex:'+x[1]+'" title="'+esc(x[0])+'"><span>'+esc(x[0])+'</span></i>'}).join('')+'</div>'}
  el.querySelector('.kc-out').innerHTML=h}

/* ---------- render ---------- */
var TITLES={V:'Míralo',D:'Dato verificado',K:'Haz la cuenta',Q:'¿Qué harías?',M:'¿Mito o realidad?',O:'Ordena los pasos',P:'Une cada pareja',T:'Compara',S:'Así se ve en la plataforma'};
function counts(b){return b.k==='Q'||b.k==='M'||b.k==='O'||b.k==='P'||b.k==='K'}
function block(b,i,key){var id='ix'+i,h='<section class="ix ix-'+b.k+'" data-ix="'+i+'" aria-labelledby="'+id+'h"><h3 class="ix-h" id="'+id+'h">'+(TITLES[b.k])+'</h3>';
  if(b.k==='V')h+='<div class="ix-vis" data-vis="'+b.v+'">'+(VIS[b.v]?VIS[b.v]():'')+'</div>'+(b.cap?'<p class="ix-cap">'+esc(b.cap)+'</p>':'')+'<button type="button" class="ix-replay">Ver de nuevo</button>';
  if(b.k==='D')h+='<div class="ix-dato"><p class="dd-fig" data-fig="'+esc(b.fig)+'">'+esc(b.fig)+'</p><div><p class="dd-l">'+esc(b.label)+'</p><p>'+esc(b.text)+'</p>'+(b.src?'<p class="ix-src">Fuente: <a href="'+b.src[1]+'" target="_blank" rel="noopener">'+esc(b.src[0])+'</a></p>':'')+'</div></div>';
  if(b.k==='K'){var C=window.SM_CALC[b.c];h=h.replace(TITLES.K,'Haz la cuenta: '+esc(C?C.t.toLowerCase().replace(/^¿/,'¿'):''));h+='<p class="ix-lead">Mueve los valores y mira cómo cambia el resultado.</p>'+calcHTML(b.c,key+'-'+i)}
  if(b.k==='Q')h+='<p class="ix-q">'+esc(b.q)+'</p><div class="q-opts">'+b.o.map(function(o,j){return '<button type="button" class="q-o" data-j="'+j+'">'+esc(o[0])+'</button>'}).join('')+'</div><p class="q-fb" aria-live="polite" hidden></p>';
  if(b.k==='M')h+='<p class="ix-lead">Toca cada tarjeta para descubrir la realidad.</p><div class="m-grid">'+b.p.map(function(p,j){return '<button type="button" class="m-card" data-j="'+j+'" aria-pressed="false"><span class="m-f"><small>Mito</small>'+esc(p[0])+'</span><span class="m-b"><small>Realidad</small>'+esc(p[1])+'</span></button>'}).join('')+'</div>';
  if(b.k==='O'){var sh=shuffle(b.s.map(function(s,j){return [s,j]}));if(sh.every(function(x,j){return x[1]===j})&&sh.length>1)sh.push(sh.shift());h+='<p class="ix-lead">'+esc(b.t)+'. Toca los pasos en el orden correcto.</p><ol class="o-ans" aria-label="Tu orden"></ol><div class="o-pool">'+sh.map(function(x){return '<button type="button" class="o-i" data-j="'+x[1]+'">'+esc(x[0])+'</button>'}).join('')+'</div><div class="ix-row"><button type="button" class="ix-btn o-reset">Empezar de nuevo</button></div><p class="q-fb" aria-live="polite" hidden></p>'}
  if(b.k==='P'){var L=b.p.map(function(p,j){return [p[0],j]}),R=shuffle(b.p.map(function(p,j){return [p[1],j]}));h+='<p class="ix-lead">'+esc(b.t)+'. Toca una palabra y luego su pareja.</p><div class="p-grid"><div class="p-col">'+L.map(function(x){return '<button type="button" class="p-i" data-s="l" data-j="'+x[1]+'">'+esc(x[0])+'</button>'}).join('')+'</div><div class="p-col">'+R.map(function(x){return '<button type="button" class="p-i" data-s="r" data-j="'+x[1]+'">'+esc(x[0])+'</button>'}).join('')+'</div></div><p class="q-fb" aria-live="polite" hidden></p>'}
  if(b.k==='T')h+='<div class="ix-tw" tabindex="0"><table><caption>'+esc(b.cap)+'</caption><thead><tr>'+b.h.map(function(x){return '<th scope="col">'+esc(x)+'</th>'}).join('')+'</tr></thead><tbody>'+b.r.map(function(r){return '<tr>'+r.map(function(c,j){return j?'<td>'+esc(c)+'</td>':'<th scope="row">'+esc(c)+'</th>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>'+(b.src?'<p class="ix-src">Fuente: <a href="'+b.src[1]+'" target="_blank" rel="noopener">'+esc(b.src[0])+'</a></p>':'');
  if(b.k==='S')h+='<figure class="ix-shot"><a href="'+esc(b.src)+'" target="_blank" rel="noopener"><img src="'+esc(b.src)+'" alt="'+esc(b.cap)+'" loading="lazy"></a><figcaption>'+esc(b.cap)+'</figcaption></figure>';
  return h+'</section>'}
function ideasHTML(list){if(!list.length)return '';return '<div class="ideas" data-n="'+list.length+'"><div class="id-top"><p class="id-k">Idea <b class="id-i">1</b> de '+list.length+'</p><button type="button" class="id-all" aria-pressed="false">Ver todas</button></div><div class="id-bar"><i></i></div><ol class="id-list">'+list.map(function(t,i){return '<li'+(i?' hidden':'')+'><p>'+esc(t)+'</p></li>'}).join('')+'</ol><div class="id-nav"><button type="button" class="ix-btn id-prev" disabled>Anterior</button><button type="button" class="ix-btn dark id-next">Siguiente idea</button></div></div>'}

function render(key,lesson){
  var X=(window.SM_EXPLAIN||{})[key]||{ideas:[],b:[]},ideas=(lesson.body||[]).concat(X.ideas||[]),blocks=X.b||[],n=blocks.filter(counts).length+(ideas.length>1?1:0);
  var h='<div class="ixwrap" data-key="'+key+'" data-total="'+n+'">';
  if(n)h+='<div class="ix-prog"><span>Actividades <b class="ixp-n">0</b> de '+n+'</span><div class="ix-pbar"><i></i></div></div>';
  h+=ideasHTML(ideas);
  return {top:h,blocks:blocks.map(function(b,i){return block(b,i,key)}).join('')+'</div>'};
}
function wire(root){
  var wrap=root.querySelector('.ixwrap');if(!wrap)return;var key=wrap.dataset.key,total=+wrap.dataset.total,st=load(),done=st[key]||{};
  function mark(id){if(done[id])return;done[id]=1;st=load();st[key]=done;save(st);upd()}
  function upd(){var c=Object.keys(done).length,p=root.querySelector('.ix-prog');if(!p)return;c=Math.min(c,total);p.querySelector('.ixp-n').textContent=c;p.querySelector('i').style.width=(total?c/total*100:0)+'%';p.classList.toggle('full',c>=total);if(c>=total)p.querySelector('span').innerHTML='Actividades completas: '+c+' de '+total}
  upd();
  /* ideas */
  var I=root.querySelector('.ideas');if(I){var items=I.querySelectorAll('.id-list li'),k=0,nI=items.length,all=false;
    function show(j){k=Math.max(0,Math.min(nI-1,j));[].forEach.call(items,function(li,x){li.hidden=!all&&x!==k;li.classList.toggle('in',x===k)});I.querySelector('.id-i').textContent=k+1;I.querySelector('.id-bar i').style.width=((k+1)/nI*100)+'%';I.querySelector('.id-prev').disabled=k===0;var nx=I.querySelector('.id-next');nx.textContent=k===nI-1?'Listo':'Siguiente idea';if(k===nI-1)mark('ideas')}
    I.querySelector('.id-prev').addEventListener('click',function(){show(k-1)});
    I.querySelector('.id-next').addEventListener('click',function(){if(k===nI-1){var nxt=root.querySelector('.ix');if(nxt)nxt.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});return}show(k+1)});
    I.querySelector('.id-all').addEventListener('click',function(){all=!all;this.setAttribute('aria-pressed',all);this.textContent=all?'Una a la vez':'Ver todas';I.classList.toggle('all',all);I.querySelector('.id-nav').hidden=all;if(all)mark('ideas');show(k)});
    show(0)}
  /* bloques */
  [].forEach.call(root.querySelectorAll('.ix'),function(s){var i=s.dataset.ix,b=((window.SM_EXPLAIN||{})[key]||{b:[]}).b[i];if(!b)return;
    if(b.k==='K'){var el=s.querySelector('.ix-calc');runCalc(el);el.addEventListener('input',function(){runCalc(el);mark(i)});el.addEventListener('change',function(){runCalc(el);mark(i)})}
    if(b.k==='Q'){var fb=s.querySelector('.q-fb');s.querySelector('.q-opts').addEventListener('click',function(e){var o=e.target.closest('.q-o');if(!o)return;var j=+o.dataset.j,op=b.o[j];[].forEach.call(s.querySelectorAll('.q-o'),function(x){x.classList.remove('sel')});o.classList.add('sel',op[1]?'right':'wrong');fb.hidden=false;fb.className='q-fb '+(op[1]?'ok':'no');fb.innerHTML='<b>'+(op[1]?'Bien pensado.':'Piénsalo otra vez.')+'</b> '+esc(op[2]);if(op[1]){mark(i);[].forEach.call(s.querySelectorAll('.q-o'),function(x){x.disabled=true})}})}
    if(b.k==='M'){var flipped={};s.addEventListener('click',function(e){var c=e.target.closest('.m-card');if(!c)return;var on=c.getAttribute('aria-pressed')!=='true';c.setAttribute('aria-pressed',on);c.classList.toggle('flip',on);flipped[c.dataset.j]=1;if(Object.keys(flipped).length>=b.p.length)mark(i)})}
    if(b.k==='O'){var ans=s.querySelector('.o-ans'),pool=s.querySelector('.o-pool'),fb2=s.querySelector('.q-fb'),seq=[];
      pool.addEventListener('click',function(e){var it=e.target.closest('.o-i');if(!it||it.disabled)return;var j=+it.dataset.j;if(j!==seq.length){it.classList.add('shake');setTimeout(function(){it.classList.remove('shake')},450);fb2.hidden=false;fb2.className='q-fb no';fb2.innerHTML='<b>Ese no va todavía.</b> ¿Qué pasa antes?';return}
        seq.push(j);it.disabled=true;it.classList.add('used');ans.insertAdjacentHTML('beforeend','<li class="pop">'+esc(b.s[j])+'</li>');fb2.hidden=true;
        if(seq.length===b.s.length){fb2.hidden=false;fb2.className='q-fb ok';fb2.innerHTML='<b>¡Orden perfecto!</b> Así es el proceso completo.';mark(i)}});
      s.querySelector('.o-reset').addEventListener('click',function(){seq=[];ans.innerHTML='';fb2.hidden=true;[].forEach.call(pool.querySelectorAll('.o-i'),function(x){x.disabled=false;x.classList.remove('used')})})}
    if(b.k==='P'){var selL=null,ok=0,fb3=s.querySelector('.q-fb');s.addEventListener('click',function(e){var it=e.target.closest('.p-i');if(!it||it.classList.contains('done'))return;
        if(it.dataset.s==='l'){[].forEach.call(s.querySelectorAll('.p-i[data-s=l]'),function(x){x.classList.remove('sel')});it.classList.add('sel');selL=it;return}
        if(!selL){fb3.hidden=false;fb3.className='q-fb no';fb3.textContent='Primero toca una palabra de la izquierda.';return}
        if(selL.dataset.j===it.dataset.j){selL.classList.remove('sel');selL.classList.add('done');it.classList.add('done');selL.disabled=it.disabled=true;ok++;selL=null;fb3.hidden=true;if(ok===b.p.length){fb3.hidden=false;fb3.className='q-fb ok';fb3.innerHTML='<b>¡Todas unidas!</b>';mark(i)}}
        else{it.classList.add('shake');setTimeout(function(){it.classList.remove('shake')},450);fb3.hidden=false;fb3.className='q-fb no';fb3.textContent='No es su pareja. Intenta con otra.'}})}
    if(b.k==='V'){var r=s.querySelector('.ix-replay');r.addEventListener('click',function(){var v=s.querySelector('.ix-vis');v.classList.remove('on');void v.offsetWidth;v.classList.add('on')})}
  });
  /* animar al entrar en pantalla */
  var targets=root.querySelectorAll('.ix-vis,.ix,.ideas');
  if(RM||!('IntersectionObserver' in window)){[].forEach.call(targets,function(t){t.classList.add('on')});countUps(root,true);return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');if(e.target.classList.contains('ix-D'))countUp(e.target.querySelector('.dd-fig'));io.unobserve(e.target)}})},{threshold:.25});
  wrap.classList.add('anim');[].forEach.call(targets,function(t){io.observe(t)});
}
function countUps(root){}
function countUp(el){if(!el)return;var raw=el.dataset.fig,m=raw.match(/^([^\d]*)([\d.]+)(.*)$/);if(!m||RM)return;var target=parseFloat(m[2].replace(/\./g,'')),dec=m[2].indexOf('.')>=0,t0=null,dur=900;
  if(!isFinite(target)||target<10)return;
  function step(ts){if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/dur),e=1-Math.pow(1-p,3),v=Math.round(target*e);el.textContent=m[1]+(dec?v.toLocaleString('es-CO'):v)+m[3];if(p<1)requestAnimationFrame(step);else el.textContent=raw}
  requestAnimationFrame(step)}

/* ---------- estilos ---------- */
var css=`
.ixwrap{margin-top:8px}
.ix-prog{display:flex;align-items:center;gap:14px;margin:4px 0 18px;font-size:14px;color:var(--soft)}
.ix-prog b{color:var(--ink)}
.ix-pbar{flex:1;max-width:260px;height:8px;border-radius:99px;background:var(--mist-2);overflow:hidden}
.ix-pbar i{display:block;height:100%;width:0;background:var(--jade);border-radius:inherit;transition:width .5s cubic-bezier(.2,.8,.2,1)}
.ix-prog.full span{color:var(--jade-deep);font-weight:600}
.ideas{background:var(--mist);border-radius:22px;padding:22px 24px 20px;margin-bottom:28px}
.id-top{display:flex;justify-content:space-between;align-items:center;gap:12px}
.id-k{margin:0;font-size:14px;color:var(--soft)}.id-k b{color:var(--ink)}
.id-all{border:0;background:none;font:inherit;font-size:14px;font-weight:600;color:var(--jade-deep);cursor:pointer;text-decoration:underline;text-underline-offset:3px;min-height:40px}
.id-bar{height:6px;border-radius:99px;background:#fff;margin:10px 0 16px;overflow:hidden}.id-bar i{display:block;height:100%;width:0;background:var(--jade);transition:width .4s cubic-bezier(.2,.8,.2,1)}
.id-list{list-style:none;margin:0;padding:0}
.id-list p{margin:0;font-size:calc(20px*var(--fs,1));line-height:1.5;color:var(--ink);font-weight:500;min-height:3em}
.id-list li.in{animation:idIn .45s cubic-bezier(.2,.8,.2,1)}
.ideas.all .id-list{display:flex;flex-direction:column;gap:14px}.ideas.all .id-list li{animation:none}.ideas.all .id-list p{font-size:calc(17px*var(--fs,1));min-height:0;font-weight:400}
.ideas.all .id-list li{padding-left:16px;border-left:3px solid var(--jade)}
@keyframes idIn{from{opacity:0;transform:translateX(18px)}to{opacity:1;transform:none}}
.id-nav{display:flex;gap:10px;margin-top:18px;flex-wrap:wrap}
.ix-btn{min-height:44px;padding:0 18px;border:0;border-radius:12px;background:#fff;font:inherit;font-size:15px;font-weight:600;color:var(--ink);cursor:pointer;transition:transform .15s,background-color .15s}
.ix-btn:active{transform:scale(.97)}.ix-btn:disabled{opacity:.45;cursor:default}
.ix-btn.dark{background:var(--night);color:#fff}
.ix{margin:0 0 26px;padding:22px 24px;border-radius:22px;background:#fff;border:1px solid #E1E8E5}
.ixwrap.anim .ix:not(.on){opacity:0}
.ix.on{animation:ixIn .5s cubic-bezier(.2,.8,.2,1) both}
@keyframes ixIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
.ix-h{margin:0 0 10px;font-size:calc(19px*var(--fs,1))}
.ix-lead,.ix-q{margin:0 0 14px;color:var(--ink)}.ix-q{font-size:calc(18px*var(--fs,1));font-weight:600;line-height:1.4}
.ix-note,.ix-cap,.ix-src{margin:12px 0 0;font-size:13.5px;color:var(--soft)}.ix-src a{color:var(--jade-deep)}
.ix-Q{background:var(--night);border:0;color:#fff}.ix-Q .ix-h{color:var(--jade)}.ix-Q .ix-q{color:#fff}
.q-opts{display:flex;flex-direction:column;gap:10px}
.q-o{text-align:left;min-height:52px;padding:12px 16px;border-radius:14px;border:2px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#fff;font:inherit;font-size:15.5px;cursor:pointer;transition:background-color .15s,border-color .15s,transform .15s}
.q-o:hover:not(:disabled){border-color:var(--jade)}.q-o:active{transform:scale(.99)}
.q-o.right{background:var(--jade);border-color:var(--jade);color:var(--ink);font-weight:600}
.q-o.wrong{border-color:#F08A7A;background:rgba(240,138,122,.14)}
.q-o:disabled:not(.right){opacity:.55}
.q-fb{margin:14px 0 0;padding:12px 14px;border-radius:12px;font-size:15px;line-height:1.5;animation:ixIn .35s both}
.q-fb.ok{background:var(--jade-pale);color:var(--ink)}.q-fb.no{background:#FDE8E4;color:#5A1D12}
.ix-D{background:var(--jade-pale);border:0}
.ix-dato{display:grid;grid-template-columns:minmax(0,auto) minmax(0,1fr);gap:22px;align-items:start}
.dd-fig{margin:0;font-size:clamp(30px,4.2vw,46px);font-weight:600;line-height:1;color:var(--jade-deep);letter-spacing:-.02em;white-space:nowrap;font-variant-numeric:tabular-nums}
.dd-l{margin:0 0 6px;font-weight:600}.ix-dato p{margin:0 0 6px}
.ix-calc{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:22px;background:var(--mist);border-radius:18px;padding:18px}
.kc-in,.kc-out{min-width:0}.kc-in{display:flex;flex-direction:column;gap:14px}
.kc-f{display:flex;flex-direction:column;gap:6px;font-size:14px;font-weight:500}
.kc-f span{display:flex;justify-content:space-between;gap:10px}.kc-f output{font-weight:600;font-variant-numeric:tabular-nums}
.kc-f input[type=range]{width:100%;accent-color:var(--jade);height:28px}
.kc-f select{width:100%;max-width:100%;min-height:44px;border-radius:12px;border:1px solid #D6E0DB;padding:0 10px;font:inherit;background:#fff}
.kc-out dl{margin:0;display:flex;flex-direction:column;gap:8px}
.kc-out dl div{display:flex;justify-content:space-between;align-items:baseline;gap:12px;background:#fff;border-radius:12px;padding:10px 14px}
.kc-out dt{font-size:14px;color:var(--soft)}.kc-out dd{margin:0;font-weight:600;font-size:18px;font-variant-numeric:tabular-nums;transition:color .2s}
.kc-out .ok dd{color:var(--jade-deep)}.kc-out .bad dd{color:#B4361F}
.kc-out .ok,.kc-out .bad{box-shadow:inset 3px 0 0 currentColor}.kc-out .ok{color:var(--jade)}.kc-out .bad{color:#E0533A}.kc-out .ok dt,.kc-out .bad dt{color:var(--soft)}
.kc-stack{display:flex;height:28px;border-radius:8px;overflow:hidden;margin-top:12px;gap:2px}
.kc-stack i{min-width:6px;transition:flex .35s cubic-bezier(.2,.8,.2,1);position:relative}.kc-stack span{position:absolute;left:6px;top:5px;font-size:11.5px;font-style:normal;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;max-width:calc(100% - 8px)}
.kc-stack .s0{background:var(--night)}.kc-stack .s1{background:#5B6B75}.kc-stack .s2{background:#E0533A}.kc-stack .s3{background:#9AA7A1}
.kc-vs{display:flex;flex-direction:column;gap:8px;margin-top:12px}.kc-vs div{display:grid;grid-template-columns:110px 1fr;align-items:center;gap:10px;font-size:13px;color:var(--soft)}
.kc-vs i{display:block;height:16px;border-radius:6px;transition:width .35s cubic-bezier(.2,.8,.2,1)}.kc-vs i.ok{background:var(--jade)}.kc-vs i.bad{background:#E0533A}
.m-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px}
.m-card{display:grid;min-height:150px;border:0;padding:0;background:none;cursor:pointer;perspective:900px;font:inherit;text-align:left}
.m-card>span{grid-area:1/1;border-radius:18px;padding:18px;display:flex;flex-direction:column;gap:8px;backface-visibility:hidden;transition:transform .55s cubic-bezier(.2,.8,.2,1);font-size:15.5px;line-height:1.45}
.m-card small{font-size:13px;font-weight:600}
.m-f{background:#FDE8E4;color:#5A1D12}.m-f small{color:#B4361F}
.m-b{background:var(--jade-pale);color:var(--ink);transform:rotateY(180deg)}.m-b small{color:var(--jade-deep)}
.m-card.flip .m-f{transform:rotateY(-180deg)}.m-card.flip .m-b{transform:none}
.m-f::after{content:"Toca para ver la realidad";margin-top:auto;font-size:13px;font-weight:600;color:#B4361F}
.o-ans{list-style:none;counter-reset:o;margin:0 0 12px;padding:0;display:flex;flex-direction:column;gap:6px;min-height:8px}
.o-ans li{counter-increment:o;display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:12px;background:var(--jade-pale);font-weight:500}
.o-ans li::before{content:counter(o);width:26px;height:26px;flex:none;border-radius:50%;background:var(--jade);color:var(--ink);display:grid;place-items:center;font-size:13px;font-weight:600}
.o-ans li.pop{animation:pop .35s cubic-bezier(.2,.8,.2,1.3)}
@keyframes pop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}
.o-pool,.p-col{display:flex;flex-wrap:wrap;gap:8px}
.o-i,.p-i{min-height:44px;padding:8px 14px;border-radius:12px;border:1px solid #D6E0DB;background:#fff;font:inherit;font-size:15px;color:var(--ink);cursor:pointer;text-align:left;transition:background-color .15s,border-color .15s,opacity .2s,transform .15s}
.o-i:hover,.p-i:hover{border-color:var(--jade)}.o-i.used{opacity:.25;cursor:default}
.shake{animation:shake .4s}@keyframes shake{20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
.ix-row{margin-top:12px}
.p-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.p-col{flex-direction:column}
.p-i.sel{background:var(--night);color:#fff;border-color:var(--night)}
.p-i.done{background:var(--jade-pale);border-color:var(--jade-pale);color:var(--jade-deep);font-weight:600;animation:pop .35s}
.ix-tw{overflow-x:auto}.ix-tw table{border-collapse:collapse;width:100%;min-width:480px;font-size:14.5px}
.ix-tw caption{text-align:left;font-weight:600;padding-bottom:10px}
.ix-tw th,.ix-tw td{padding:10px 12px;text-align:left;border-bottom:1px solid #E6EDEA;vertical-align:top}
.ix-tw thead th{background:var(--mist);font-size:13.5px}
.ix-tw tbody th{font-weight:600}
.ix-shot{margin:0}.ix-shot img{width:100%;height:auto;border-radius:14px;border:1px solid #E1E8E5;display:block}.ix-shot figcaption{font-size:13.5px;color:var(--soft);margin-top:8px}
.ix-replay{margin-top:10px;border:0;background:none;font:inherit;font-size:14px;font-weight:600;color:var(--jade-deep);text-decoration:underline;text-underline-offset:3px;cursor:pointer;min-height:40px;padding:0}
/* visuales */
.vflow{list-style:none;margin:0;padding:4px 0;display:flex;gap:0;overflow-x:auto}
.vflow li{flex:1 1 0;min-width:120px;position:relative;padding:0 8px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px}
.vflow li::before{content:"";position:absolute;top:21px;left:-50%;width:100%;height:4px;background:var(--mist-2);z-index:0}
.vflow li:first-child::before{display:none}
.vflow li::after{content:"";position:absolute;top:21px;left:-50%;width:100%;height:4px;background:var(--jade);z-index:0;transform:scaleX(0);transform-origin:left}
.vflow li:first-child::after{display:none}
.vf-dot{position:relative;z-index:1;width:44px;height:44px;border-radius:50%;background:#fff;border:3px solid var(--mist-2);display:grid;place-items:center;font-weight:600;color:var(--soft);transition:background-color .3s,border-color .3s,color .3s}
.vf-t b{display:block;font-size:14.5px}.vf-t small{display:block;font-size:12.5px;color:var(--soft);line-height:1.35;margin-top:2px}
.vf-bad{display:inline-block;margin-top:6px;font-style:normal;font-size:12px;font-weight:600;color:#B4361F;background:#FDE8E4;border-radius:8px;padding:3px 8px;opacity:0}
.on .vflow li::after{animation:vfLine .5s calc(var(--i)*.55s) forwards}
.on .vflow .vf-dot{animation:vfDot .4s calc(var(--i)*.55s + .3s) forwards}
.on .vf-bad{animation:fadeIn .4s calc(var(--i)*.55s + .6s) forwards}
@keyframes vfLine{to{transform:scaleX(1)}}
@keyframes vfDot{0%{transform:scale(1)}50%{transform:scale(1.18)}100%{transform:scale(1);background:var(--jade);border-color:var(--jade);color:var(--ink)}}
@keyframes fadeIn{to{opacity:1}}
.vbal{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.vb-t{display:block;margin-bottom:8px}
.vb-bars{height:190px;display:flex;align-items:flex-end;gap:10px;padding:28px 6px 0;background:var(--mist);border-radius:14px}
.vb-bar{flex:1;height:0;border-radius:10px 10px 0 0;position:relative;transition:height .9s cubic-bezier(.2,.8,.2,1)}
.vb-bar.ok{background:var(--jade)}.vb-bar.bad{background:#E0533A;transition-delay:.15s}
.vb-bar i{position:absolute;top:-22px;left:0;right:0;text-align:center;font-style:normal;font-size:11.5px;font-weight:600;color:var(--ink);opacity:0;transition:opacity .3s .8s}
.on .vb-bar{height:var(--h)}.on .vb-bar i{opacity:1}
.vb-res{margin:10px 0 0;font-weight:600}.vb-res.ok{color:var(--jade-deep)}.vb-res.bad{color:#B4361F}
.vb-key{grid-column:1/-1;margin:0;font-size:13px;color:var(--soft);display:flex;align-items:center;gap:6px;flex-wrap:wrap}.vb-key .k{width:12px;height:12px;border-radius:3px;display:inline-block}.vb-key .ok{background:var(--jade)}.vb-key .bad{background:#E0533A;margin-left:10px}
.vfun{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;align-items:center;gap:6px}
.vfun li{width:var(--w);transform:scaleX(.2);opacity:0;background:var(--night);color:#fff;border-radius:12px;padding:12px;text-align:center;font-size:14px}
.vfun li:nth-child(4){background:var(--jade);color:var(--ink)}
.on .vfun li{animation:fun .55s calc(var(--i)*.35s) cubic-bezier(.2,.8,.2,1) forwards}
@keyframes fun{to{transform:none;opacity:1}}
.vchat{background:#ECE5DD;border-radius:18px;padding:16px;display:flex;flex-direction:column;gap:8px;max-width:440px}
.vchat p{margin:0;max-width:82%;padding:9px 12px;border-radius:12px;font-size:14px;line-height:1.4;opacity:0;transform:translateY(8px)}
.vchat .b-c{background:#fff;align-self:flex-start}.vchat .b-v{background:#DCF8C6;align-self:flex-end}
.vchat .b-t{align-self:center;background:var(--night);color:#fff;font-size:12.5px;font-weight:600;border-radius:99px}
.on .vchat p{animation:chatIn .4s calc(var(--i)*.9s) forwards}
@keyframes chatIn{to{opacity:1;transform:none}}
.vland{display:flex;justify-content:center}
.vl-phone{width:240px;border:10px solid var(--night);border-radius:30px;padding:10px;display:flex;flex-direction:column;gap:6px;background:#fff}
.vl-phone span{display:block;padding:10px;border-radius:10px;background:var(--mist);font-size:13px;font-weight:600;opacity:.35;transition:background-color .3s,opacity .3s}
.on .vl-phone span{animation:land .5s calc(var(--i)*.45s) forwards}
@keyframes land{to{opacity:1;background:var(--jade-pale)}}
.vbox{border:3px solid var(--night);border-radius:20px;padding:16px}.vbox>b{display:block;margin-bottom:12px}
.vbox div{display:flex;flex-wrap:wrap;gap:8px}.vbox span{padding:10px 14px;border-radius:12px;background:var(--jade-pale);font-weight:600;font-size:14px;opacity:0;transform:scale(.85)}
.on .vbox span{animation:pop2 .4s calc(var(--i)*.25s) forwards}@keyframes pop2{to{opacity:1;transform:none}}
.vtree{display:flex;flex-direction:column;align-items:center;gap:12px}
.vt-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}.vt-g{display:flex;flex-direction:column;align-items:center;gap:10px}
.vt-n{padding:10px 14px;border-radius:12px;text-align:center;opacity:0;transform:translateY(-8px)}
.vt-n b{display:block;font-size:14px}.vt-n small{font-size:12px}
.vt-n.l0{background:var(--night);color:#fff}.vt-n.l1{background:var(--jade);color:var(--ink)}.vt-n.l2{background:var(--mist)}
.on .vt-n{animation:chatIn .4s calc(var(--i)*.3s) forwards}
@media (max-width:860px){
 .ideas,.ix{padding:18px 16px;border-radius:18px}
 .ix-dato{grid-template-columns:1fr;gap:10px}
 .ix-calc{grid-template-columns:1fr;padding:14px}
 .p-grid{grid-template-columns:1fr 1fr;gap:8px}.p-i{font-size:14px;padding:8px 10px}
 .vflow{flex-direction:column;gap:14px;overflow:visible}
 .vflow li{flex-direction:row;text-align:left;align-items:flex-start;min-width:0;padding:0}
 .vflow li::before,.vflow li::after{top:-14px;left:20px;width:4px;height:14px}
 .vflow li::after{transform:scaleY(0);transform-origin:top}
 @keyframes vfLine{to{transform:scaleY(1)}}
 .vbal{grid-template-columns:1fr 1fr;gap:10px}.vb-bars{height:160px;gap:6px}.vb-bar i{font-size:10px}
 .vfun li{width:calc(var(--w) * .9 + 10%)}
}
@media (prefers-reduced-motion:reduce){
 .ix.on,.id-list li.in,.o-ans li.pop,.p-i.done,.q-fb{animation:none}
 .on .vflow li::after,.on .vflow .vf-dot,.on .vf-bad,.on .vfun li,.on .vchat p,.on .vl-phone span,.on .vbox span,.on .vt-n{animation:none;opacity:1;transform:none}
 .on .vflow li::after{transform:none}.on .vflow .vf-dot{background:var(--jade);border-color:var(--jade);color:var(--ink)}
 .vb-bar,.m-card>span{transition:none}
}`;
var st=D.createElement('style');st.textContent=css;D.head.appendChild(st);
window.SM_IX={render:render,wire:wire};
})();
