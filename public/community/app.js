// ===== MPE Community Shell — app logic (no money-state code, attribution only) =====
const CFG = window.MPE_CONFIG, I18N = window.MPE_I18N;
let lang = localStorage.getItem('mpe_lang') || 'en';
const $ = id => document.getElementById(id);

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
function renderRate(){ $('rateValue').textContent = '₹ ' + Number(CFG.INDICATIVE_RATE_SGD_INR).toFixed(2); }

// ---------- referral codes ----------
function makeCode(){
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; let s = '';
  const rnd = new Uint8Array(4); crypto.getRandomValues(rnd);
  for(let i=0;i<4;i++) s += chars[rnd[i] % chars.length];
  return CFG.REFERRAL_PREFIX + '-' + s;
}

// ---------- enrollment (Supabase when configured; on-device fallback otherwise) ----------
async function submitEnrollment(e){
  e.preventDefault();
  const rec = {
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
  const tmpl = lang === 'ta' ? CFG.WHATSAPP_SHARE_TEXT_TA : CFG.WHATSAPP_SHARE_TEXT_EN;
  const msg = tmpl.replace('{CODE}', code).replace('{URL}', location.origin + location.pathname);
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}

// ---------- desk mode (/#desk) ----------
let deskMode = false;
function checkDesk(){
  deskMode = location.hash === '#desk';
  $('deskBadge').classList.toggle('hidden', !deskMode);
  $('deskOfficerWrap').classList.toggle('hidden', !deskMode);
  if(deskMode) go('s-register');
}
window.addEventListener('hashchange', checkDesk);

// ---------- desk CSV export (type exportCSV() in console, or long-press header logo 3s in desk mode) ----------
function exportCSV(){
  const rows = JSON.parse(localStorage.getItem('mpe_enrollments') || '[]');
  if(!rows.length) return alert('No enrollments on this device.');
  const cols = ['name','phone','employer','lang','referral_code_used','referral_code_issued','desk_officer','desk_mode','synced','created_at'];
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
applyLang(); renderRate(); checkDesk();
