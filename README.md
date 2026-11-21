# Maison Karima — Sito Web Ufficiale (Fase 1: Architettura e Struttura)

Architettura frontend modulare per **Maison Karima**, boutique di abbigliamento femminile e caftani marocchini a Borgosesia (VC).

## Stack Tecnologico

- **React 19** + **TypeScript**
- **Vite 8** (build statico ad alte prestazioni)
- **Tailwind CSS v4** (design system mobile-first con token dedicati)
- **Lucide React** (iconografia essenziale)
- **Architettura Zero-Database / Zero-API a pagamento** (hosting statico gratuito e commerciale compatibile con Cloudflare Pages, Vercel, Netlify, GitHub Pages con DNS su `maisonkarima.com`)

## Struttura Principale

- `src/types/` — Interfacce TypeScript per dati aziendali, catalogo prodotti (`schema_dati_prodotto`), servizi e localizzazione (`it` / `fr`).
- `src/data/` — Archivio dati separato basato esclusivamente sul brief `maison_karima_brief_web_developer_v1.1.json`.
- `src/utils/` — Logica pura e testabile per routing (`it` e futuro `/fr`), URL dinamici WhatsApp, metadati SEO / Schema.org `ClothingStore` e query catalogo.
- `src/components/ui/` — Componenti riutilizzabili coerenti con l'identità visiva (`Avorio #FAF8F5`, `Oro #C5A059`, `Bordeaux #5C1E2E`, `Antracite #222222`).
- `src/components/layout/` — Componenti condivisi (`Header`, `Navigation`, `Footer`, `WhatsAppButton`, `Layout`, `SeoHead`).
- `src/pages/` — Struttura delle 5 pagine principali (`Home`, `Collezioni`, `Servizi`, `Chi siamo`, `Contatti`).

## Avvio Locale

```bash
npm install
npm run dev
```

## Verifica e Build

```bash
npm run lint
npx tsx --test src/utils/*.test.ts
npm run build
```

## Collegamento Repository GitHub (`maison-karima-website`)

```bash
git remote add origin https://github.com/<tuo-utente>/maison-karima-website.git
git branch -M main
git push -u origin main
```
