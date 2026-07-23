// ===== MPE Community Shell — app logic (no money-state code, attribution only) =====
const CFG = window.MPE_CONFIG, I18N = window.MPE_I18N;
let lang = localStorage.getItem('mpe_lang') || 'en';
const $ = id => document.getElementById(id);

// ---------- community programme state ----------
// A visitor picks a community on the selector screen, or arrives deep-linked
// (#kumar from a QR poster / shared referral). All programme branding (banner,
// referral prefix, rate, share text) is scoped to the selected community.
let community = localStorage.getItem('mpe_community');
if (!(community && CFG.PROGRAMMES[community])) community = null;
const PROG = () => (community ? CFG.PROGRAMMES[community] : null);

function selectCommunity(slug){
  if(!CFG.PROGRAMMES[slug]) return;
  community = slug;
  localStorage.setItem('mpe_community', slug);
  applyCommunity();
  go('s-home');
}

function changeCommunity(){
  community = null;
  localStorage.removeItem('mpe_community');
  applyCommunity();
  go('s-communities');
}

function applyCommunity(){
  const p = PROG();
  document.querySelector('nav').classList.toggle('hidden', !p);
  $('commBanner').classList.toggle('hidden', !p);
  if(p){
    renderRate();
    const pair = document.querySelector('.rate-pair');
    if(pair) pair.textContent = p.RATE_PAIR;
  }
}

// ---------- i18n ----------
function applyLang(){
  const t = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if(t[k]) el.textContent = t[k]; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { const k = el.dataset.i18nHtml; if(t[k]) el.innerHTML = t[k]; });
  $('langBtn').textContent = lang === 'en' ? 'தமிழ்' : 'English';
  document.documentElement.lang = lang === 'en' ? 'en' : 'ta';
  renderFAQ();
}
function toggleLang(){ lang = lang === 'en' ? 'ta' : 'en'; localStorage.setItem('mpe_lang', lang); applyLang(); }

// ---------- navigation ----------
function go(id){
  // Everything except the selector requires a chosen community.
  if(!community && id !== 's-communities') id = 's-communities';
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  const nb = $('n-' + id); if(nb) nb.classList.add('active');
  window.scrollTo(0,0);
}

// ---------- FAQ ----------
function renderFAQ(){
  const list = $('faqList'); list.innerHTML = '';
  I18N[lang].faq.forEach(item => {
    const d = document.createElement('details');
    const s = document.createElement('summary'); s.textContent = item.q;
    const p = document.createElement('p'); p.textContent = item.a;
    d.appendChild(s); d.appendChild(p); list.appendChild(d);
  });
}

// ---------- rate ----------
function renderRate(){
  const p = PROG(); if(!p) return;
  $('rateValue').textContent = '₹ ' + Number(p.INDICATIVE_RATE).toFixed(2);
}

// ---------- referral codes ----------
function makeCode(){
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; let s = '';
  const rnd = new Uint8Array(4); crypto.getRandomValues(rnd);
  for(let i=0;i<4;i++) s += chars[rnd[i] % chars.length];
  return PROG().REFERRAL_PREFIX + '-' + s;
}

// ---------- enrollment (Supabase when configured; on-device fallback otherwise) ----------
async function submitEnrollment(e){
  e.preventDefault();
  const rec = {
    community: community,
    name: $('f_name').value.trim(),
    phone: $('f_phone').value.trim(),
    employer: $('f_employer').value.trim(),
    lang: $('f_lang').value,
    referral_code_used: ($('f_ref').value || '').trim().toUpperCase() || null,
    referral_code_issued: makeCode(),
    desk_officer: deskMode ? ($('f_officer').value || '').trim() : null,
    desk_mode: deskMode,
    created_at: new Date().toISOString()
  };
  let synced = false;
  if(CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY){
    try{
      const r = await fetch(CFG.SUPABASE_URL + '/rest/v1/enrollments', {
        method:'POST',
        headers:{ 'Content-Type':'application/json', apikey:CFG.SUPABASE_ANON_KEY, Authorization:'Bearer ' + CFG.SUPABASE_ANON_KEY, Prefer:'return=minimal' },
        body: JSON.stringify(rec)
      });
      synced = r.ok;
    }catch(_){ /* offline — fall back to device queue */ }
  }
  // Always keep a device-side copy (offline-first; desk officers export CSV)
  const q = JSON.parse(localStorage.getItem('mpe_enrollments') || '[]');
  q.push({ ...rec, synced }); localStorage.setItem('mpe_enrollments', JSON.stringify(q));
  $('myCode').textContent = rec.referral_code_issued;
  $('regForm').reset();
  go('s-success');
  return false;
}

// ---------- WhatsApp share ----------
function shareWhatsApp(){
  const code = $('myCode').textContent;
  const p = PROG();
  const tmpl = lang === 'ta' ? p.WHATSAPP_SHARE_TEXT_TA : p.WHATSAPP_SHARE_TEXT_EN;
  // Deep-link the share URL to this community so referred friends land scoped.
  const url = location.origin + location.pathname + '#' + community;
  const msg = tmpl.replace('{CODE}', code).replace('{URL}', url);
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}

// ---------- hash routing: #<slug> selects a community; #desk = Kumar desk tablet ----------
let deskMode = false;
function applyHash(){
  const h = (location.hash || '').replace('#','');
  deskMode = h === 'desk';
  if(deskMode && !community) { community = 'kumar'; localStorage.setItem('mpe_community', community); }
  if(CFG.PROGRAMMES[h]) { community = h; localStorage.setItem('mpe_community', community); }
  $('deskBadge').classList.toggle('hidden', !deskMode);
  $('deskOfficerWrap').classList.toggle('hidden', !deskMode);
  applyCommunity();
  if(deskMode) go('s-register');
  else if(CFG.PROGRAMMES[h]) go('s-home');
}
window.addEventListener('hashchange', applyHash);

// ---------- desk CSV export (type exportCSV() in console, or long-press header logo 3s in desk mode) ----------
function exportCSV(){
  const rows = JSON.parse(localStorage.getItem('mpe_enrollments') || '[]');
  if(!rows.length) return alert('No enrollments on this device.');
  const cols = ['community','name','phone','employer','lang','referral_code_used','referral_code_issued','desk_officer','desk_mode','synced','created_at'];
  const csv = [cols.join(',')].concat(rows.map(r => cols.map(c => JSON.stringify(r[c] ?? '')).join(','))).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], {type:'text/csv'}));
  a.download = 'mpe_enrollments_' + new Date().toISOString().slice(0,10) + '.csv';
  a.click();
}
let pressTimer;
document.querySelector('.brand-logo').addEventListener('touchstart', () => { pressTimer = setTimeout(() => { if(deskMode) exportCSV(); }, 3000); });
document.querySelector('.brand-logo').addEventListener('touchend', () => clearTimeout(pressTimer));

// ---------- init ----------
applyLang(); applyHash();
go(community ? 's-home' : 's-communities');
