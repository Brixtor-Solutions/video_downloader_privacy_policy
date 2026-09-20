# Video Downloader - Legal Website

Official privacy policy and terms & conditions portal for the **Video Downloader** Android (Flutter) application, operated by **Brixtor Solutions**.

Built with **React**, **Vite**, **Tailwind CSS**, and **React Router**. Ready for deployment on **Vercel**.

---

## 📁 Project Structure

```
src/
├── content/
│   ├── config.js      # App name, operator, contact email, last updated date, toggles
│   ├── privacy.js     # Privacy policy structured content & architecture flow
│   └── terms.js       # Terms & Conditions structured content & disclaimers
├── pages/
│   ├── PrivacyPolicy.jsx  # Interactive privacy policy with TOC & architecture flow
│   └── Terms.jsx          # Interactive terms and conditions with TOC
├── App.jsx            # Landing page and router configuration
├── main.jsx           # App entrypoint
└── index.css          # Tailwind CSS styles & custom scrollbars
```

---

## 🌐 Public Routes

| Route | Description |
| :--- | :--- |
| `/` | Legal portal homepage with summary cards and architecture flow |
| `/privacy` | Complete Privacy Policy document |
| `/privacy-policy` | Alias for Privacy Policy (for store listing compliance) |
| `/terms` | Complete Terms & Conditions document |
| `/terms-and-conditions` | Alias for Terms & Conditions |

---

## ⚙️ Configuration

You can easily customize company information and toggles in `src/content/config.js`:

```javascript
export const APP_NAME = "Video Downloader";

export const OPERATOR =
  import.meta.env.VITE_OPERATOR_NAME || "Brixtor Solutions";

export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL || "brixtorsolutions@gmail.com";

export const LAST_UPDATED = "20 September 2026";
```

### Optional Services (AdMob & Firebase Analytics)
To toggle disclosures for optional SDKs without editing JSX:
```javascript
export const SERVICES_CONFIG = {
  enableAdMob: false,            // Set to true when AdMob is included in the APK
  enableFirebaseAnalytics: false // Set to true when Firebase Analytics is active
};
```

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset: **Vite** (detected automatically).
5. Build Command: `npm run build` or `vite build`.
6. Output Directory: `dist`.
7. Client-side routing is pre-configured via `vercel.json`:
   ```json
   {
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```
8. Click **Deploy**.

---

## 📄 License & Transparency Notice

This portal is maintained by **Brixtor Solutions** (`brixtorsolutions@gmail.com`). All documents are provided for architectural transparency and disclosure purposes and do not constitute formal legal counsel.
