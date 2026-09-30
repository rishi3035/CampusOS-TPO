# CampusOS-TPO: Training & Placement Officer Command Center

> Autonomous Placement Intelligence, Real-Time Student Analytics, and Deterministic Accreditation Automation for Higher Education Institutions.

Built by **AIVI Intelligence Private Limited** (CIN: `U62099UP2026PTC249169` | DPIIT: `#DIPP271794`).

---

## Overview

**CampusOS-TPO** is the institutional intelligence command center designed for Training & Placement Officers (TPOs), Deans, and Placement Coordinators. It transforms fragmented placement drives, manual spreadsheets, and stressful accreditation preparation into a real-time, telemetry-driven operating system.

The platform bridges institutional leadership with corporate recruiters and student cohorts, tracking 3,420+ students across engineering, management, and technology disciplines with verified skill metrics, interview telemetry, and automated compliance.

---

## Key Modules & Capabilities

### 1. Executive Overview & Placement Analytics
- **Live Institutional KPI Grid:** Real-time visibility into overall placement rate (83.4%), average CTC (₹8.4 LPA), highest offer (₹44.0 LPA), active recruiters (142), and live interview slots.
- **Dynamic 6-Tier Readiness Funnel:** Visual cohort tracking from Initial Enrolled (3,420) through Resume Approved, Skill Assessed, AI Interview Cleared, Corporate Shortlisted, to Final Offers Released (2,852).
- **Placement & Package Distribution Heatmap:** Dual-engine visualizer mapping department-wise placement velocity (CSE, ECE, ME, Civil, IT, AI & Data Science) and salary package tiers (Tier 1 >₹20 LPA, Tier 2 ₹10-20 LPA, Tier 3 ₹5-10 LPA, Core Placement ₹3-5 LPA).
- **Live Activity Feed:** Instant alerts on newly released offer letters, recruiter shortlist submissions, and upcoming drive rounds.

### 2. Student Roster & Live Skill Radar
- **Comprehensive Cohort Roster:** Real-time searchable directory with department filters, year selectors, AES readiness bands, and instant verification status tags.
- **AiVi Employability Score (AES):** Multi-dimensional index combining algorithmic problem solving, core technical aptitude, communication clarity, and resume ATS compatibility.
- **Interactive Slide-Over Drawer:** Full student profiling drawer featuring:
  - Detailed score breakdown across System Design, Coding, and STAR Verbal rubrics.
  - Verified ATS-tested resume download (100% Taleo and Workday compliant).
  - One-click drive nomination and interview scheduling.
  - Direct student alert trigger for remediation and guidance.

### 3. Company Drives & Pipeline CRM
- **Recruitment Pipeline Management:** Stage-by-stage tracking of ongoing corporate drives (Application Open, Online Assessment, Technical Rounds, HR & Final Round, Offers Released).
- **Recruiter Profile Cards:** CTC brackets, role definitions, minimum CGPA / AES eligibility criteria, and real-time applicant tallies.
- **Direct Drive Creation Modal:** Launch new campus recruitment drives with custom eligibility thresholds and automated student notifications.

### 4. AI Interview Lab & Voice Telemetry
- **Sarvam AI Bilingual Voice Telemetry:** Live simulation of mock and technical interviews evaluating speech pace (Words Per Minute), fillers, and structured articulation.
- **Animated Audio Waveform Kinetics:** Real-time CSS speech wave equalizers visualizing active student response streams.
- **STAR Response Rubric:** Automated scoring across Situation, Task, Action, and Result dimensions.
- **Real-Time Coaching Recommendations:** Granular feedback identifying key strengths and specific growth areas for every mock interview session.

### 5. NAAC 5.2.1 & NIRF 3.a Automated Compliance Engine
- **Deterministic Accreditation Exporter:** Instant generation of audit-ready documentation for NAAC Metric 5.2.1 (Placement of Outgoing Students) and NIRF Parameter 3.a (Graduation Outcome).
- **Cryptographic Verification Proofs:** One-click verifiable digital audit trails mapping enrolled students to authenticated offer letters and corporate GSTIN credentials.
- **SSR / SAR One-Click Export:** Download clean CSV and institutional PDF compliance bundles ready for peer-team visits.

### 6. Placement Automation & Tamper-Proof Offer Letters
- **QR-Sealed Digital Offer Letters:** Automated generation of digitally sealed, tamper-proof offer validation documents.
- **Instant Recruiter Handshake:** Direct corporate confirmation portal verifying authenticity of released offers without manual phone verification.
- **Batch Dispatch Protocol:** Single-click distribution of letters to candidates and respective department heads.

### 7. At-Risk Student Rescue Queue
- **Radar Pulse Alert System:** Automated anomaly detection flagging students with low mock interview scores or below-threshold AES indices.
- **Root Cause Diagnostics:** Granular categorization of risk factors (e.g. conversational hesitation, technical syntax gaps, resume ATS parsing failure).
- **Remediation Action Plans:** One-click assignment to peer-mentorship cohorts, AI booster modules, or personalized 1-on-1 counseling clinics.

### 8. Staff Roles, Permissions & Institutional Audit Trail
- **Granular Role-Based Access Control (RBAC):** Distinct administrative profiles for TPO Head, Department Coordinators, Faculty Mentors, and Student Placement Volunteers.
- **Complete Action Audit Log:** Immutable event log tracking every export, permission adjustment, and eligibility override for institutional transparency.

---

## Motion & Prototype Kinetics

CampusOS-TPO reproduces the interactive feel of the original Figma prototype through custom kinetic design:
- **Tab Cross-Fade & Elevation:** Smooth transitions using cubic-bezier timing curves (`320ms cubic-bezier(0.16, 1, 0.3, 1)`).
- **SVG Donut Score Gauge:** Circular stroke animation (`stroke-dashoffset` transition over 1,300ms) with synchronized count-up counter.
- **Cohort Funnel Growth:** Staggered cylinder expansion with hover elevation and tooltips.
- **Staggered Table Ingestion:** Progressive row entrance animations mimicking fast database rendering.
- **Spring-Physics Slide Drawer:** Smooth side drawer with backdrop blur and dynamic progress bar fills.
- **Live Sound Wave Animation:** 4-bar alternating equalizer representing live bilingual voice telemetry.
- **Radar Alert Pulse:** Pulsing concentric rings on at-risk student records.

---

## Technical Stack & Architecture

- **Web SPA:** Vanilla ES6+ / HTML5 Canvas / Tailwind CSS / Lucide Icons / Chart.js.
- **React / Next.js Component:** Full-featured TypeScript component (`TpoDashboard.tsx`) with strict typing, modular subcomponents, and responsive state hooks.
- **Corporate Entity:** AIVI Intelligence Private Limited
- **Official Domains:**
  - Campus OS Institutional Portal: https://aivicampus.com
  - Corporate Studio: https://aiviintelligence.com

---

## Quick Start

### Option 1: Standalone Web SPA
Simply serve the `index.html` file using any static file server:

```bash
# Using Python 3
python3 -m http.server 3000

# Using Node.js npx serve
npx serve .
```

Open `http://localhost:3000` in your web browser.

### Option 2: React / Next.js Integration
Import the `TpoDashboard.tsx` component into your React or Next.js application:

```tsx
import React from 'react';
import TpoDashboard from './TpoDashboard';

export default function PlacementPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <TpoDashboard />
    </main>
  );
}
```

Ensure Tailwind CSS and Lucide icons are configured in your project dependencies:
```bash
npm install lucide-react clsx tailwind-merge
```

---

## License & Intellectual Property

Copyright (c) 2026 AIVI Intelligence Private Limited. All rights reserved.
Proprietary institutional software developed for higher education campuses and universities.
