# Medifor7 Clone – Frontend Task

**🚀 Live Demo:** https://medifor7clone.netlify.app/

---

## 🎯 Project Overview
Recreate the Medifor7 medication manager clone as a fully responsive frontend using React (or your chosen framework) based on the reference demo above.

---

## 📁 Project Structure
/public
├─ favicon.ico
└─ index.html

/src
├─ assets/ # Images, icons, styles
├─ components/ # Header, Footer, Buttons, Cards, etc.
├─ pages/ # HomePage, AboutPage, ContactPage
├─ App.jsx
└─ index.jsx

/vite.config.js # Config for Vite build tooling
/package.json # Dependencies & scripts
/README.md # This overview


---

## 🛠️ Tech Stack
- **Framework:** React (via Vite)  
- **Styling:** CSS Modules or styled-components (or plain CSS/SCSS)  
- **Build Tool:** Vite  
- **Optional:** React Router, Axios for API calls

---

## 🎨 UI Components
| Component            | Responsibilities |
|----------------------|------------------|
| `Header`             | Logo, navigation, responsive menu |
| `HeroBanner`         | Hero section with title, subtitle, CTA |
| `FeaturesGrid`       | Display Medifor7 features (e.g. dosage alerts) |
| `DeviceShowcase`     | Screenshot/mockup of Medifor7 device |
| `Testimonials`       | User reviews or quotes |
| `Footer`             | Copyright, socials, links |

---

## 📐 Layout & Responsiveness

### Desktop
- **Header:** fixed top with nav links  
- **Hero:** full-screen height section  
- **Sections:** stacked with even padding/margins  
- **Footer:** bottom-aligned

### Mobile / Tablet
- **Hamburger Menu:** collapsible nav  
- **Stacked Layout:** single-column stacking  
- **Images & Text:** center-aligned with fluid widths

---

## ⚙️ Styles & Theming
- Define **CSS variables** in `:root` for primary/secondary colors, fonts, spacing.
- Use **flexbox/grid** for content layout.
- Implement **hover/focus** transitions (e.g. buttons, links).
- Ensure **accessible contrasts** and font sizes.

---

## 🧪 Interactivity & Behavior
- **Navigation scroll:** smooth scroll to page sections  
- **Responsive menu:** toggle open/close on mobile  
- **CTA buttons:** scroll or navigate to contact/sign-up section  
- **Optional:** animate elements on scroll (e.g. fade-in using Intersection Observer)

---

## ✅ Setup & Run

```bash
# Clone and install
git clone <your-repo-url>
cd medifor7-clone
npm install

# Start dev server
npm run dev

# Build for production
npm run build
