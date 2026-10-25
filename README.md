# MetricFlow — Business Analytics & Decision Intelligence SaaS

> **Tagline:** Turn your data into your next big decision.  
> **Status:** Portfolio Concept & Frontend Engineering Demonstration.

---

## 1. Project Overview & Intent

**MetricFlow** is an analytics and business intelligence web application designed for small businesses, startup founders, and independent operators. It addresses the common pain point of fragmented operational data (payment gateways, web traffic, billing streams) by unifying them into clear, high-signal decision briefings without the configuration complexity of enterprise tools like Tableau or Looker.

This repository represents an independent, portfolio-quality frontend application built from scratch to showcase:
- **Product & UX Design:** Deliberate visual hierarchy, 60-30-10 color distribution, zero-pill metadata discipline, and anti-slop aesthetic restraint.
- **Frontend Architecture:** Modern, fast React 19 SPA running on Vite, Tailwind CSS v4, and native SVG data visualization.
- **Accessible Interactions:** WCAG AA contrast compliance, keyboard-navigable accordions, focus traps, Esc key handling, and responsive mobile drawers.
- **Honest Communication:** Clear labeling of all synthetic demo datasets, local client validation, and explicit portfolio disclaimers.

---

## 2. Core Features Built & Verified

### A. Navigation Bar (Top Bar Contract)
- Strict 1-row, 3-zone layout: Single-line brand wordmark (`MetricFlow`), 5 concise nav links (`Overview`, `Live Demo`, `Capabilities`, `Pricing`, `FAQ`), and primary action buttons.
- Responsive mobile drawer with keyboard ESC listener and touch-friendly targets.
- Fixed header height strictly under 15% of mobile viewport to prevent screen occlusion.

### B. Hero Section
- Balanced display headline with `text-wrap: balance` to eliminate orphan words.
- Unboxed editorial metadata using typographic separators (`·`) rather than generic pill enclosures.
- Direct dual calls-to-action: "Explore Live Sandbox" and "Take 2-Min Product Tour".

### C. Live Interactive Analytics Sandbox
- **Metric Switcher:** Switch between 4 core SaaS business metrics:
  - Monthly Recurring Revenue (MRR)
  - Net Revenue Retention (NRR)
  - Trial-to-Paid Conversion Rate
  - Customer Acquisition Cost (CAC)
- **Time Horizon Filter:** Toggle between `7 Days`, `30 Days`, and `Quarter (90d)` with instantaneous chart re-rendering.
- **Native SVG Chart:** Responsive vector path generation with smooth cubic bezier curves, gradient area fill, and interactive hover tooltips that display precise date, value, and delta percentages.
- **Simulate Anomaly Switch:** An interactive trigger that simulates unexpected cohort drops or spikes, demonstrating how MetricFlow flags root causes in plain English.
- **Client-Side CSV Export:** Click "Export CSV" to trigger an in-browser generation and download of formatted `.csv` reports.

### D. Capabilities & Ingestion Architecture (Bento Grid)
- **01. Zero-ETL Ingestion:** Pre-mapped connectors for Stripe, Shopify, PostgreSQL, and Google Sheets.
- **02. Plain-English Variance Explainer:** Automated diagnostic narratives instead of cryptic scatter plots.
- **03. Scheduled Executive Briefings:** Automated Monday morning digests delivered to Slack and Email.
- **04. Cohort Retention Matrix:** Tabular retention decay matrix across rolling user cohorts.

### E. Tiered Pricing & Annual Savings Calculation
- 3 distinct tiers: **Starter ($0/mo)**, **Growth ($19/mo)**, and **Scale ($49/mo)**.
- Working **Monthly / Annual** toggle switch with mathematically accurate ~20% annual discount calculations (e.g., Growth is $15/mo billed annually at $180/yr; Scale is $39/mo billed annually at $468/yr).
- "Select Plan" buttons that automatically scroll to and populate the Demo Form with the selected tier.

### F. Accessible FAQ Accordion
- Complete `aria-expanded` and `aria-controls` bindings.
- Smooth expansion states with keyboard accessibility (`Enter` / `Space`).
- Honest answers addressing product concept, data privacy, and comparison with legacy tools.

### G. Interactive Demo Intake Form
- Fields: Full Name, Work Email, Company Size, Target Plan, and Primary Analytics Priority.
- Client-side regex email validation and required field feedback.
- Interactive success screen with simulation summary and one-click reset.
- Zero data transmission: 100% of data is validated in browser memory.

### H. Interactive Product Tour Modal
- Step-by-step 4-stage walkthrough with keyboard navigation (`Escape` closes modal, left/right arrows navigate steps).
- Progress indicator dots and direct action buttons.

---

## 3. Technology Stack & Design Decisions

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | React 19 + TypeScript | Strict component modularity, type safety, and state isolation. |
| **Bundler / Dev Server** | Vite 8 | Near-instant startup, sub-millisecond HMR, and clean static builds. |
| **Styling** | Tailwind CSS v4 | High-performance CSS compilation, responsive utilities, and custom design tokens. |
| **Typography** | Plus Jakarta Sans & JetBrains Mono | Characterful geometric display paired with tabular figures for metrics. |
| **Icons** | Lucide React | Lightweight, consistent SVG icon set. |
| **Hosting Compatibility** | GitHub Pages & Static Hosts | Zero backend, zero database, zero API keys required. |

---

## 4. Local Development & Setup

This project runs smoothly on any modern machine (including Windows 10 with limited RAM) using standard Node.js:

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation Steps
```bash
# 1. Clone or extract the repository
git clone https://github.com/your-username/metricflow.git
cd metricflow

# 2. Install dependencies
npm install

# 3. Start local development server (runs on port 3000)
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production
```bash
# Generates optimized static assets in the dist/ folder
npm run build

# Preview the production build locally
npm run preview
```

---

## 5. Deploying to GitHub Pages

MetricFlow is configured for automated deployment via GitHub Actions:

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "feat: initial commit of MetricFlow landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/metricflow.git
git push -u origin main
```

### Step 2: Configure GitHub Repository Settings
1. Go to your GitHub repository in your browser.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.

### Step 3: Automated Workflow Execution
- The included `.github/workflows/deploy.yml` will automatically trigger on push to `main`.
- It installs dependencies via `npm ci`, runs `npm run build`, and publishes the `/dist` directory to GitHub Pages.
- Your live site will be accessible at: `https://<your-username>.github.io/metricflow/`

*(Note: If hosting on a GitHub project sub-path like `/metricflow/`, configure `base: './'` in `vite.config.ts`, which is already set up for relative asset bundling).*

---

## 6. Demonstration & Portfolio Disclosure

To maintain absolute professional integrity:
- **MetricFlow is a fictional concept project** developed for portfolio demonstration purposes.
- **No real customer reviews or commercial endorsements** have been fabricated.
- **All charts and metrics** represent synthetic, realistic sample models.
- **The pricing table** demonstrates interactive billing cadence math and plan selection UX; no real charges or payment processors exist.
- **The demo inquiry form** runs 100% locally in the browser sandbox. No personal data is stored or transmitted.

---

## 7. License

Distributed under the Apache-2.0 License. Free for portfolio demonstration, review, and personal modification.
