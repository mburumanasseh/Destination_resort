# Destination Resort Centre — Website

Modern prototype website for **Destination Resort Centre** (Makutano, Kirinyaga County, Kenya).

Built as a pitch-ready upgrade to the resort’s online presence: clean design, clear conversion paths, and a working frontend booking flow.

**Live:** [https://destination-resort.vercel.app](https://destination-resort.vercel.app)

---

## About the project

Destination Resort Centre is a multi-purpose venue offering:

- Conference & meeting spaces  
- Weddings and private events  
- Guest accommodation  
- Restaurant, swimming pool, gardens (Alcaria Garden)  
- Kichakani Park (picnic & camping)

This repository contains a full frontend prototype intended for management review and as a foundation for a production site.

---

## Features

| Area | What’s included |
|------|------------------|
| **Pages** | Home, Conferences, Weddings & Events, Accommodation, Facilities, About, Contact, Book Now |
| **Design** | Responsive hospitality design, brand green + gold accents, custom SVG logo |
| **Booking** | Multi-step frontend booking flow (Room / Conference / Wedding / Day visit) — generates a reference code and stores requests in `localStorage` |
| **Conversion** | Prominent CTAs, enquiry form, clear value propositions |
| **Stack** | Vite · React · React Router · Tailwind CSS v4 |

> **Note:** Booking is frontend-only. A real backend (availability, payments, notifications) can be added later.

---

## Tech stack

- **Framework:** React 19  
- **Build tool:** Vite 8  
- **Routing:** React Router 7  
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)  
- **Deploy:** Vercel  

Project lives under `frontend/`.

---

## Getting started

### Prerequisites

- Node.js 18+  
- npm  

### Install & run

```bash
cd frontend
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
cd frontend
npm run build
npm run preview   # optional local preview of the build
```

---

## Project structure

```
Destination_resort/
├── frontend/
│   ├── public/
│   │   ├── logo.svg          # Full logo
│   │   ├── logo-mark.svg     # Compact mark (nav / favicon)
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/       # Navbar, Footer, Hero, SectionHeading
│   │   ├── pages/            # Home, Conferences, Weddings, Accommodation,
│   │   │                     # Facilities, About, Contact, Booking
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css         # Tailwind + brand theme
│   ├── package.json
│   └── vite.config.js
├── .trackers/                # Engineer Mode session continuity
└── README.md
```

---

## Booking flow (frontend)

1. **Type** — Guest Room / Conference / Wedding / Day Visit  
2. **Dates & details** — check-in/out, rooms, guests, attendees  
3. **Contact** — name, email, phone, notes  

On submit:

- A reference code is generated (e.g. `DRC-A1B2C3`)  
- The request is saved to `localStorage` under `drc_bookings`  
- A confirmation screen is shown  

This is intentionally backend-free so the prototype can be demoed immediately. Wire to an API when ready.

---

## Deployment

The site is deployed on **Vercel**.

- Production: pushes to `main`  
- Previews: pull request deployments  

Root directory for the Vercel project should be set to `frontend` (or configure the build command accordingly).

---

## Brand

- **Primary green:** `#245c47` (brand-700)  
- **Accent gold:** `#c4922e` (accent-500)  
- **Logo:** Custom SVG — mountain silhouette + nature/hospitality cues  

---

## Roadmap (possible next steps)

- [ ] Backend for real availability & booking storage  
- [ ] Email / WhatsApp notifications on new requests  
- [ ] Professional photography (replace Unsplash placeholders)  
- [ ] SEO content & meta  
- [ ] Google Business Profile / analytics  
- [ ] CMS or simple admin for content updates  

---

## Licence

Private prototype for Destination Resort Centre management review.  
Not licensed for public redistribution without permission.
