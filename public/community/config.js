// ===== MPE Community Shell — programme configuration =====
// Everything a non-engineer might need to change lives here.
// Each community programme is an entry in PROGRAMMES. The app shows a
// community selector until one is chosen (or deep-linked via #slug).
window.MPE_CONFIG = {
  PROGRAMME_NAME: "MPE Community",
  LICENSED_PARTNER_NAME: "our MAS-licensed partner institution", // replace with legal name once rails agreement is signed
  RAIL_HANDOFF_URL: "",          // paste the licensed partner's transfer-flow URL when available; empty = handoff button hidden
  WELCOME_CREDIT_SGD: 10,
  SUPABASE_URL: "",              // night 2: fill both and enrollments sync to Supabase (falls back to on-device storage when empty)
  SUPABASE_ANON_KEY: "",

  PROGRAMMES: {
    kumar: {
      label: "Kumar & the Eyota community",
      sublabel: "Singapore · Tamil & English",
      region: "Singapore",
      langs: ["en", "ta"],
      RATE_PAIR: "SGD → INR",
      INDICATIVE_RATE: 63.20,     // update daily (ops task) until a rate feed exists
      REFERRAL_PREFIX: "KUM",
      WHATSAPP_SHARE_TEXT_EN: "I just joined the MPE Community Programme — the legal, digital way to send money home. Join with my code {CODE} and we both get a credit: {URL}",
      WHATSAPP_SHARE_TEXT_TA: "நான் MPE Community Programme-இல் சேர்ந்துவிட்டேன் — பணம் அனுப்ப சட்டப்பூர்வமான, டிஜிட்டல் வழி. என் குறியீடு {CODE} உடன் சேருங்கள்: {URL}"
    }
    // Next programmes slot in here, e.g.:
    // manila: { label: "...", sublabel: "Singapore · Filipino & English", RATE_PAIR: "SGD → PHP", ... }
  }
};
