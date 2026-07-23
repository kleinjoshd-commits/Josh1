// ===== MPE Community Shell — programme configuration =====
// Everything a non-engineer might need to change lives here.
window.MPE_CONFIG = {
  PROGRAMME_NAME: "MPE Community",
  COMMUNITY_PARTNER: "Kumar & the Eyota community",
  LICENSED_PARTNER_NAME: "our MAS-licensed partner institution", // replace with legal name once rails agreement is signed
  RAIL_HANDOFF_URL: "",          // paste the licensed partner's transfer-flow URL when available; empty = handoff button hidden
  INDICATIVE_RATE_SGD_INR: 63.20, // update daily (ops task) until a rate feed exists
  WELCOME_CREDIT_SGD: 10,
  REFERRAL_PREFIX: "KUM",
  SUPABASE_URL: "",              // night 2: fill both and enrollments sync to Supabase (falls back to on-device storage when empty)
  SUPABASE_ANON_KEY: "",
  WHATSAPP_SHARE_TEXT_EN: "I just joined the MPE Community Programme — the legal, digital way to send money home. Join with my code {CODE} and we both get a credit: {URL}",
  WHATSAPP_SHARE_TEXT_TA: "நான் MPE Community Programme-இல் சேர்ந்துவிட்டேன் — பணம் அனுப்ப சட்டப்பூர்வமான, டிஜிட்டல் வழி. என் குறியீடு {CODE} உடன் சேருங்கள்: {URL}"
};
