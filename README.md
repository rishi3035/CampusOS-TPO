# CampusOS: Dual-Engine Institutional Placement & Student AI Intelligence Platform

> Autonomous Placement Intelligence, Student Career Operating System, and Deterministic Accreditation Automation for Higher Education Institutions.

Built by **AIVI Intelligence Private Limited** (CIN: `U62099UP2026PTC249169` | DPIIT: `#DIPP271794`).

---

## System Architecture

CampusOS provides a synchronized dual-portal architecture:

1. **TPO Command Center (`index.html` | `TpoDashboard.tsx`):**
   - High-velocity administrative dashboard for Training & Placement Officers, Deans, and Placement Volunteers.
   - Cohort telemetry, dynamic readiness funnel, company pipeline CRM, NAAC Metric 5.2.1 and NIRF 3.a automated compliance exporter, offer letter dispatch, and at-risk student rescue queue.

2. **Student OS & AI Career Intelligence Suite (`student.html` | `StudentDashboard.tsx`):**
   - Candidate-facing career operating system for undergraduate and postgraduate students.
   - Corporate drive discovery, ATS resume audits, multi-mode resume studio, deep job fit analysis, bilingual AI voice interview telemetry, skill roadmaps, and LinkedIn optimization.

Both portals are directly linked with a seamless role-switching header for instant demonstration and institutional workflows.

---

## Student OS Modules & Capabilities (`student.html`)

### 1. My Placement Drives (Student Dashboard Home)
- **Live Corporate Opportunity Cards:** Interactive cards for active campus recruiters (TCS Digital, Amazon AWS India, Accenture Tech) with role definitions and verified eligibility badges.
- **Package Brackets & Details:** Clear compensation tiering (₹4.5 LPA to ₹18.0 LPA) with verified batch and specialization criteria.
- **Dedicated Company AI Voice Packs:** 1-click launch of company-specific mock interview simulations directly from the drive card.
- **Direct Job Fit Match:** 1-click bridge sending the company requirements directly into the Job Fit Analyzer.

### 2. 7-Day Sprints & Placement Campaigns
- **Daily Readiness Milestones:** Structured 7-day preparation sprints (e.g. Day 1 Resume Polish, Day 2 DSA Challenge, Day 4 Sarvam Voice Mock).
- **Gamified Progress Tracking:** Live status indicators and sprint completion benchmarks.

### 3. My Verified Resume Vault
- **Institutional Authentication:** Digital resume registry stamped and cryptographically sealed by the university T&P cell.
- **Tamper-Proof QR Validation:** Scannable validation seal for instant recruiter verification.
- **Parser Match Scores:** Verified ATS benchmarks (98% Taleo match, 96% Workday match, 100% action verbs).

### 4. Resume Intelligence & ATS Audit
- **v3.4 Neural Diagnostic Engine:** Automated analysis across 6 dimensions: ATS compatibility, keyword density, technical depth, leadership signals, quantified impact, and clarity.
- **Dual Input Modes:** Paste plain text or drag-and-drop PDF (up to 10MB).
- **Past Scan History & Audit Modal:** Historical audit logs tracking score evolution (e.g. 84/100 Tier A, 78/100 Tier B+) with instant drill-down.

### 5. Resume Studio (4 Phase-1 Entry Paths)
- **Full Rebuild:** Reconstruct existing resumes into clean, role-tailored drafts.
- **Quick Edit:** Guided targeted modifications without forcing full rewrites.
- **JD Tailor:** Align resume bullet points directly with target job descriptions.
- **First Resume for Freshers:** Structured builder for entry-level candidates without prior resume documents.
- **Guided AI Instruction Box:** Prompt-driven adjustments with quick suggestion chips ("Make it more ATS friendly", "Shorten to 1 page", "Add stronger metrics").
- **Tone & Role Selectors:** Custom styling across Impact-driven, Executive, Concise, Technical, and Creative registers.

### 6. Job Fit & Skill Overlap Analyzer
- **Dual-Pane Workstation:** Side-by-side comparison of candidate resume against target job description.
- **Shortlist Probability & Match Scoring:** Instant semantic score calculation (e.g. 88% overall match, 92% technical skills, 85% experience).
- **Severity-Based Gap Detection:** Categorizes missing competencies into critical prerequisites and secondary recommendations.

### 7. AI Interview Lab & Voice Telemetry
- **Full-Duplex Real-Time Voice Studio:** 2-way conversational voice simulation with Sarvam AI bilingual telemetry, live sound wave equalizer kinetics, and sub-second turn latency.
- **Question-by-Question Drill:** Structured turn-by-turn mock sessions with Hinglish / English language context and configurable question counts (3, 6, 10, or 15 questions).
- **Forensic Feedback Scorecard:** Automated grading on speech pace (Words Per Minute), filler words, and STAR articulation.

### 8. Skill Roadmap Section
- **Personalized 30 / 60 / 90-Day Learning Tracks:** Generates structured learning milestones based on selected skill gaps and optional resume context.
- **Curated Resource Recommendations:** Staged guides covering Docker, AWS, Redis caching, microservices, and system design.

### 9. LinkedIn Optimizer
- **Public Profile Conversion Surface:** Evaluates LinkedIn profile positioning from a recruiter discovery perspective.
- **Search Visibility & Authority Scoring:** 86/100 authority benchmark with keyword density metrics.
- **AI Rewrite Layer:** Generates high-impact headline and summary rewrites tailored for campus hiring cycles.

---

## TPO Command Center Modules (`index.html`)

1. **Executive Overview & Placement Analytics:** Real-time KPI cards, 6-pillar readiness funnel, package distribution heatmaps, and live activity feed.
2. **Student Roster & Skill Radar:** Searchable cohort directory, AES score indices, and interactive slide-over student profiles.
3. **Company Drives CRM:** Pipeline stages (Application Open to Offers Released), eligibility filters, and drive scheduler.
4. **AI Interview Lab (TPO Oversight):** Cohort mock interview statistics and speech telemetry analysis.
5. **NAAC 5.2.1 & NIRF 3.a Automated Compliance Engine:** 1-click deterministic SSR/SAR export bundles with verifiable audit trails.
6. **Placement Automation & Offer Letters:** Tamper-proof digital offer letters with cryptographic QR seals.
7. **At-Risk Student Rescue Queue:** Automated anomaly detection and remediation clinic allocation.
8. **Staff Roles & RBAC:** Granular role profiles and tamper-proof action audit logging.

---

## Prototype Motion & Animation Kinetics

CampusOS reproduces the interactive kinetics of the original Figma prototype:
- **Tab Cross-Fade & Elevation:** Smooth transitions using cubic-bezier timing curves (`320ms cubic-bezier(0.16, 1, 0.3, 1)`).
- **SVG Donut Score Gauge:** Circular stroke animation (`stroke-dashoffset` transition over 1,300ms) with synchronized count-up counter.
- **Cohort Funnel Growth:** Staggered cylinder expansion with hover elevation and tooltips.
- **Live Sound Wave Animation:** 4-bar alternating equalizer representing live bilingual voice telemetry.
- **Radar Alert Pulse:** Pulsing concentric rings on at-risk student records and active voice recruiters.
- **Spring-Physics Slide Drawer:** Smooth side drawer with backdrop blur and dynamic progress bar fills.

---

## Technical Stack & Architecture

- **Web SPAs:** Vanilla ES6+ / HTML5 Canvas / Tailwind CSS / Lucide Icons / Chart.js.
  - `index.html`: TPO Command Center
  - `student.html`: Student OS & AI Career Intelligence Suite
- **React / Next.js Components:**
  - `TpoDashboard.tsx`: Production TypeScript component for TPO Command Center.
  - `StudentDashboard.tsx`: Production TypeScript component for Student OS.
- **Corporate Entity:** AIVI Intelligence Private Limited
- **Official Domains:**
  - Campus OS Institutional Portal: https://aivicampus.com
  - Corporate Studio: https://aiviintelligence.com

---

## Quick Start

### Option 1: Standalone Web SPAs
Run the built-in static HTTP server:

```bash
# Using Python 3
python3 -m http.server 3000

# Using Node.js npx serve
npx serve .
```

- Access **TPO Command Center**: `http://localhost:3000/` or `http://localhost:3000/index.html`
- Access **Student OS Portal**: `http://localhost:3000/student.html`
- Use the **Switch to Student Portal / Switch to TPO Command** buttons in either header to toggle seamlessly!

### Option 2: React / Next.js Integration
Import either component into your React or Next.js pages:

```tsx
import React from 'react';
import TpoDashboard from './TpoDashboard';
import StudentDashboard from './StudentDashboard';

export default function CampusOSPage() {
  const [role, setRole] = React.useState<'tpo' | 'student'>('student');

  return (
    <main className="min-h-screen bg-[#080d1a]">
      {role === 'tpo' ? <TpoDashboard /> : <StudentDashboard />}
    </main>
  );
}
```

Ensure Tailwind CSS and Lucide icons are installed:
```bash
npm install lucide-react clsx tailwind-merge
```

---

## License & Intellectual Property

Copyright (c) 2026 AIVI Intelligence Private Limited. All rights reserved.
Proprietary institutional software developed for higher education campuses and universities.
