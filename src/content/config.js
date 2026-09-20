export const APP_NAME = "Video Downloader";

export const OPERATOR =
  import.meta.env.VITE_OPERATOR_NAME || "Brixtor Solutions";

export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL ||
  "brixtorsolutions@gmail.com";

export const LAST_UPDATED = "20 September 2026";

export const APP_PLATFORM = "Android (Flutter)";

export const SUPPORTED_PLATFORMS = [
  "YouTube",
  "Instagram",
  "Facebook",
  "TikTok",
  "X (formerly Twitter)"
];

/**
 * Service configuration toggles.
 * These flags allow enabling or disabling disclosures for third-party advertising
 * and analytics SDKs depending on whether they are compiled into the production app.
 */
export const SERVICES_CONFIG = {
  enableAdMob: false, // Set to true if Google AdMob is actively compiled into the Flutter app
  enableFirebaseAnalytics: false, // Set to true if Firebase Analytics is configured
};

export const LEGAL_DISCLAIMER =
  "Notice: This legal document is published for operational transparency and disclosure purposes regarding the architecture and data processing of the application. It does not constitute formal legal counsel or advice.";
