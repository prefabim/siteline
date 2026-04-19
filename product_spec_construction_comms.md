# Product Specification: SiteLine — Construction Communication Platform

> **Version:** 1.0 (Draft)
> **Date:** 2026-04-19
> **Author:** Prefabim / Jakub Dobosz
> **Status:** Concept → MVP Definition

---

## 1. Product Vision

**One-liner:** A communication platform for construction that connects office and field teams with messages tied to BIM models, project locations, and construction workflows — not just people.

**Vision:** Become the default communication layer for the construction industry by solving the fundamental disconnect between office teams (PMs, engineers, estimators) and field teams (foremen, subcontractors, workers) — anchored in the context of what's actually being built.

**Why now:**
- $50B invested in AEC tech (2020–2022), but communication remains the weakest link
- Construction is the last major industry still relying on WhatsApp, phone calls, and paper for daily coordination
- AI translation and BIM adoption are mature enough to enable a truly universal platform
- Workforce diversity (multilingual crews) is increasing across Europe, especially in Poland (Ukrainian, Belarusian, Georgian workers)

---

## 2. Problem Statement

### The Communication Gap

Construction projects involve 100+ different companies (GC, subcontractors, suppliers, designers) who need to coordinate daily. Current communication is:

| Problem | Impact |
|---------|--------|
| **Fragmented channels** — WhatsApp groups, phone calls, emails, paper notes | Information lost, no audit trail, impossible to search |
| **No project context** — messages about "that column near the stairs" with no reference | Misunderstandings, rework, delays |
| **Office ≠ Field** — Slack/Teams work for office, but field crews don't adopt them | Two parallel information streams that don't sync |
| **Language barriers** — multilingual crews can't read safety alerts or instructions | Safety risks, errors, low productivity |
| **No compliance trail** — WhatsApp conversations aren't archived or searchable | Legal/regulatory exposure, dispute resolution failures |
| **High turnover** — workers rotate between projects, per-user licensing doesn't work | Onboarding friction, wasted licenses |

### Quantified Pain
- 52% of rework in construction is caused by poor communication and inadequate project data (PlanGrid/FMI study)
- Average construction project experiences 35% schedule overrun, communication failures are a top-3 cause
- Polish construction market: ~400,000 companies, 1.5M+ workers, growing reliance on foreign workforce

---

## 3. Target Users & Personas

### Primary Personas

#### 🏗️ P1: Site Foreman / Superintendent (Kierownik budowy)
- **Age:** 35–55
- **Tech comfort:** Medium. Uses smartphone, WhatsApp, basic apps
- **Needs:** Quick updates to/from office, photo documentation, daily logs, schedule changes
- **Pain:** Drowning in WhatsApp groups, can't find info from 2 weeks ago, spends 1h/day on paperwork
- **Device:** Personal Android smartphone (usually mid-range)

#### 📋 P2: Project Manager (Kierownik projektu)
- **Age:** 30–50
- **Tech comfort:** High. Uses Slack/Teams, Excel, project management tools
- **Needs:** Overview across all site activities, RFI tracking, decision history, progress photos
- **Pain:** No single source of truth, spends time chasing updates from field, manual report compilation
- **Device:** Laptop + smartphone

#### 🔧 P3: Subcontractor Worker (Pracownik podwykonawcy)
- **Age:** 20–60
- **Tech comfort:** Low to medium. Uses WhatsApp, may speak different language
- **Needs:** Know what to do today, where, and what changed. Safety alerts
- **Pain:** Gets instructions verbally or via chaotic group chats, language barriers
- **Device:** Personal smartphone (often basic Android), sometimes just a basic phone

#### 🏢 P4: Design Engineer / BIM Coordinator
- **Age:** 25–40
- **Tech comfort:** Very high. Uses Tekla, Revit, Allplan daily
- **Needs:** Communicate model changes to site, get field feedback on clashes/issues
- **Pain:** Sends emails with screenshots of models that nobody reads, no feedback loop from field
- **Device:** Desktop workstation + smartphone

### Secondary Personas
- **General Contractor Management** — needs compliance, reporting, multi-project overview
- **Safety Officer (Inspektor BHP)** — needs broadcast alerts, checklist completion tracking
- **Supplier / Logistics** — needs delivery coordination, schedule visibility

---

## 4. Competitive Landscape

### Direct Competitors

| Platform | Strengths | Weaknesses | Funding |
|----------|-----------|------------|---------|
| **Beekeeper** | Mobile-first, 100+ language translation, AI chatbot, frontline focus | Generic (not construction-specific), expensive, no BIM context | $100M+ |
| **Fieldchat** | Construction-specific, SMS fallback, daily reports | Small/niche, limited integrations, no BIM | Undisclosed |
| **Yourco** | SMS-first, 135+ languages, HRIS integration | Basic messaging only, no construction workflows, no BIM | Early stage |
| **Pebb** | Modern UI, tasks + messaging | Very new, not construction-focused | Early stage |
| **Procore Correspondence** | Deep project context, audit trail | Only works in Procore ecosystem, expensive, no field messaging | Part of Procore ($10B+) |

### Indirect Competitors
- **WhatsApp** — free, universal, but no project context, no compliance, no admin control
- **Slack / Microsoft Teams** — great for office, dead on arrival for field workers
- **Fieldwire** — blueprint messaging, but communication is a side feature
- **Autodesk Construction Cloud** — collaboration tied to Autodesk models, but not a messaging platform

### White Space (Our Opportunity)
**Nobody combines:**
1. ✅ Real-time messaging that works for field AND office
2. ✅ BIM model context (messages/issues linked to 3D elements)
3. ✅ Multilingual translation for diverse crews
4. ✅ Construction-specific workflows (daily logs, safety, deliveries)
5. ✅ Works without a smartphone (SMS fallback)

---

## 5. Feature Specification

### 5.1 MVP (v1.0) — "Get field and office talking"

#### 5.1.1 Core Messaging
| Feature | Description | Priority |
|---------|-------------|----------|
| **Project-based channels** | Auto-organized by project/site. Each project has default channels: General, Safety, Deliveries, Issues | P0 |
| **Trade-specific channels** | Channels per trade/subcontractor within a project (e.g., #electrical, #concrete, #plumbing) | P0 |
| **Direct messages** | 1:1 and small group DMs | P0 |
| **Rich media** | Photos, videos, voice messages, documents. Geotagged + timestamped automatically | P0 |
| **Broadcast / Announcements** | One-way channel for management → all. With read receipts | P0 |
| **SMS fallback** | Workers without the app receive messages via SMS. Can reply via SMS | P0 |
| **Offline mode** | Messages queue locally, auto-sync when connectivity returns | P0 |
| **Push notifications** | Configurable per channel. Priority levels: normal, urgent (safety), critical (emergency) | P0 |
| **Search** | Full-text search across all messages, photos, documents within a project | P1 |
| **Message translation** | Auto-translate messages to recipient's preferred language (AI-powered) | P1 |
| **Voice-to-text** | Record voice message → auto-transcribed + translated | P1 |

#### 5.1.2 Construction Workflows
| Feature | Description | Priority |
|---------|-------------|----------|
| **Daily log** | Foreman fills: weather, crew count, activities, photos. Auto-generates daily report | P0 |
| **Issue reporting** | Report issue with photo + location + severity. Assign to person/trade | P0 |
| **Safety alerts** | Broadcast safety warnings with confirmation receipt (mandatory read) | P0 |
| **Checklists** | Configurable checklists (safety inspection, quality check, delivery verification) | P1 |
| **Delivery notifications** | Mark deliveries as scheduled/arrived/verified. Notify relevant channels | P1 |
| **Schedule change alerts** | Push notification when schedule changes affect a worker/trade | P1 |

#### 5.1.3 User Management & Onboarding
| Feature | Description | Priority |
|---------|-------------|----------|
| **Phone number signup** | No email required. Sign up with phone number + SMS verification | P0 |
| **QR code onboarding** | Print QR code poster at site entrance → scan → join project | P0 |
| **Role-based access** | Admin, PM, Foreman, Worker, Subcontractor, Read-only | P0 |
| **Auto-deactivation** | Workers auto-removed from project channels when project ends or they leave | P1 |
| **Guest access** | Suppliers, inspectors get limited access to specific channels | P1 |

#### 5.1.4 Admin & Compliance
| Feature | Description | Priority |
|---------|-------------|----------|
| **Message archive** | All messages archived and exportable per project | P0 |
| **Audit trail** | Who said what, when, about which issue — searchable history | P0 |
| **Export** | Export project communications as PDF/CSV for legal/compliance | P1 |
| **Analytics dashboard** | Message volume, response times, active users per project | P1 |

### 5.2 v2.0 — "BIM-Connected Communication" (The Moat)

| Feature | Description | Priority |
|---------|-------------|----------|
| **BIM Viewer** | Lightweight 3D/2D viewer in the app (IFC file support) | P0 |
| **Element-linked messages** | Tap on a BIM element → open/create conversation thread about that element | P0 |
| **Issue pins on model** | Report issue → pin it to exact location on 2D plan or 3D model | P0 |
| **Model change notifications** | BIM model updated → auto-notify affected trades ("Rebar changed in slab P-12") | P1 |
| **Clash detection alerts** | Clash found in model → auto-create issue thread with linked elements | P1 |
| **Element history** | Full communication + decision history per BIM element | P1 |
| **Tekla/Revit plugin** | Send messages from within Tekla/Revit → linked to selected element | P1 |
| **AR overlay** | Point phone camera at element on site → see linked messages/issues (future) | P2 |

### 5.3 v3.0 — "AI-Powered Construction Intelligence"

| Feature | Description |
|---------|-------------|
| **AI Daily Summary** | Auto-generate daily report from all channel activity, photos, issues |
| **Predictive delays** | AI analyzes communication patterns to predict schedule risks |
| **Smart routing** | AI routes issues to the right person based on trade, availability, history |
| **Knowledge base** | AI-powered search across all past project communications ("How did we solve this on Project X?") |
| **Voice assistant** | Hands-free operation: "Report issue on column B-7, cracking in concrete, severity high" |
| **Automated compliance** | Auto-flag missing daily logs, unsigned checklists, overdue issues |

---

## 6. Key User Flows

### Flow 1: Field Worker Reports an Issue
```
Worker opens app → taps "Report Issue"
→ Takes photo of problem
→ App auto-detects location (GPS) or worker selects on floor plan
→ Selects severity: Low / Medium / High / Critical
→ Voice-records description (auto-transcribed, auto-translated)
→ Selects trade/person responsible
→ Issue posted to project #issues channel + DM to assigned person
→ Push notification sent (priority based on severity)
→ Issue tracked until resolved with full audit trail
```

### Flow 2: Foreman Completes Daily Log
```
Foreman opens app → taps "Daily Log"
→ Weather auto-filled (GPS + weather API)
→ Crew count: taps per trade (electricians: 4, concrete: 8, ...)
→ Activities: quick-select from common activities + free text
→ Adds photos from today (auto-timestamped, geotagged)
→ Notes any incidents, delays, deliveries
→ Submits → auto-formatted PDF generated
→ PDF shared to #daily-log channel + emailed to PM/management
→ Data feeds into project timeline/analytics
```

### Flow 3: BIM Change Notification (v2)
```
BIM Coordinator updates model in Tekla/Revit
→ Plugin detects changed elements
→ Auto-creates notification: "Rebar layout changed for Slab P-12, Level 3"
→ Notification sent to #concrete channel + assigned foreman
→ Foreman opens notification → sees 3D diff (before/after)
→ Can comment, ask questions, or confirm receipt
→ Full change history tracked per element
```

### Flow 4: Subcontractor Onboarding
```
GC admin generates QR code for project "Osiedle Toruńskie"
→ QR code printed and posted at site entrance
→ New subcontractor worker scans QR with phone camera
→ Enters: name, phone number, trade, company
→ SMS verification
→ Auto-added to: project #general, their trade channel, #safety
→ Receives welcome message in their language with key contacts & safety rules
→ When worker leaves project → admin deactivates → removed from all channels
```

---

## 7. Technical Architecture (High-Level)

### 7.1 Stack Recommendation

```
┌─────────────────────────────────────────────────────┐
│                    CLIENT LAYER                      │
├─────────────────┬──────────────┬────────────────────┤
│  Mobile App     │  Web App     │  Desktop Plugin    │
│  (React Native  │  (React/     │  (Tekla/Revit      │
│   or Flutter)   │   Next.js)   │   API extension)   │
├─────────────────┴──────────────┴────────────────────┤
│                    API GATEWAY                        │
│              (REST + WebSocket + GraphQL)             │
├──────────────────────────────────────────────────────┤
│                  SERVICE LAYER                        │
├──────────┬──────────┬───────────┬───────────────────┤
│ Messaging│ Projects │ BIM       │ AI / Translation  │
│ Service  │ Service  │ Service   │ Service           │
│          │          │ (IFC      │ (LLM + NMT)      │
│          │          │  parser)  │                   │
├──────────┼──────────┼───────────┼───────────────────┤
│ Users &  │ Files &  │ Workflow  │ Notifications     │
│ Auth     │ Media    │ Engine    │ Service           │
│ Service  │ Service  │           │ (Push + SMS)      │
├──────────┴──────────┴───────────┴───────────────────┤
│                  DATA LAYER                          │
├──────────┬──────────┬───────────┬───────────────────┤
│PostgreSQL│ S3/Minio │ Redis     │ Elasticsearch     │
│(core DB) │(files)   │(realtime) │(search)           │
└──────────┴──────────┴───────────┴───────────────────┘
```

### 7.2 Key Technical Decisions

| Decision | Recommendation | Rationale |
|----------|---------------|-----------|
| **Mobile framework** | Flutter or React Native | Cross-platform, single codebase, good offline support |
| **Real-time messaging** | WebSocket + Redis pub/sub | Low latency, scalable, proven pattern |
| **SMS gateway** | Twilio or local provider (e.g., SMSAPI.pl for Poland) | SMS fallback is critical, need local number support |
| **Translation** | Google Cloud Translation API or DeepL API | Best quality for European languages, especially PL/UA/RU |
| **BIM viewer** | IFC.js / xeokit (open-source WebGL IFC viewers) | No licensing cost, runs in browser/WebView |
| **IFC parsing** | IfcOpenShell (Python) | Open-source, mature IFC parser for server-side processing |
| **File storage** | S3-compatible (AWS S3 / MinIO) | Photos/videos/documents need scalable blob storage |
| **Auth** | Phone number + OTP (no email required) | Lowest friction for field workers |
| **Offline sync** | SQLite local DB + sync protocol (CRDT or last-write-wins) | Must work in basements, rural sites, steel buildings |
| **Hosting** | AWS / GCP with EU region (Frankfurt/Warsaw) | GDPR compliance, low latency for Polish market |

### 7.3 Data Model (Core Entities)

```
Organization (company)
├── Project (construction site)
│   ├── Channel (general, safety, trade-specific, issues)
│   │   ├── Message (text, media, voice, system)
│   │   │   ├── Translation (per language)
│   │   │   ├── Attachment (photo, video, document)
│   │   │   └── Reaction / Read receipt
│   │   └── Pinned items
│   ├── BIM Model (IFC file, version history)
│   │   ├── Element (wall, slab, column, beam...)
│   │   │   ├── Linked messages / issues
│   │   │   └── Change history
│   │   └── View / Sheet (2D plans)
│   ├── Issue (reported problem)
│   │   ├── Location (GPS + model pin)
│   │   ├── Status (open, in progress, resolved, closed)
│   │   ├── Assigned to (user / trade)
│   │   └── Thread (discussion)
│   ├── Daily Log
│   │   ├── Weather, crew, activities, photos
│   │   └── Generated PDF report
│   ├── Checklist (safety, quality, delivery)
│   │   └── Checklist items (with signatures)
│   └── Schedule (milestones, deliveries)
├── Member (user within org)
│   ├── Role (admin, PM, foreman, worker, guest)
│   ├── Trade (electrician, concrete, steel, ...)
│   ├── Language preference
│   └── Device / notification settings
└── Subscription / Billing
```

---

## 8. Business Model

### Pricing Strategy

| Tier | Price | Target | Includes |
|------|-------|--------|----------|
| **Free** | €0 | Small contractors, pilot projects | 1 project, up to 30 users, core messaging, daily logs |
| **Pro** | €99–199/project/month | Mid-size GCs, specialty contractors | Unlimited users, 5 projects, all workflows, SMS fallback, translation |
| **Business** | €49–99/project/month (min 10 projects) | Large GCs, developers | Unlimited projects + users, BIM integration, API access, analytics, SSO |
| **Enterprise** | Custom | National/international contractors | Custom integrations, on-premise option, dedicated support, SLA |

**Key pricing principle:** Per-project, NOT per-user. Construction has high turnover — per-user pricing is a dealbreaker.

### Revenue Streams
1. **SaaS subscriptions** (primary) — per project/month
2. **SMS costs** — pass-through with margin for SMS fallback usage
3. **BIM integration add-on** — premium feature (v2)
4. **API access** — for companies wanting to integrate with their own systems
5. **Storage** — included tier + overage for heavy photo/video usage

### Go-to-Market (Poland First)
1. **Phase 1 (0–6 months):** 3–5 pilot projects with friendly GCs in Poland (leverage Prefabim network, Pekabex contacts)
2. **Phase 2 (6–12 months):** Polish market launch, target top 50 GCs. Free tier drives field adoption
3. **Phase 3 (12–24 months):** Expand to DACH region (Germany, Austria, Switzerland) — similar BIM maturity, multilingual workforce needs
4. **Phase 4 (24+ months):** Nordics, UK, broader EU

### Growth Loop
```
GC deploys on project → subcontractors forced to use it → 
subcontractors bring it to OTHER projects → those GCs adopt it →
network effect across the industry
```

---

## 9. MVP Development Roadmap

### Phase 1: Foundation (Weeks 1–6)
- [ ] Project/channel/messaging data model
- [ ] Real-time messaging (WebSocket)
- [ ] Mobile app shell (Flutter/RN) with offline support
- [ ] Phone number auth (OTP)
- [ ] Photo/video capture with geo-tag + timestamp
- [ ] Push notifications
- [ ] Basic web admin panel

### Phase 2: Construction Core (Weeks 7–12)
- [ ] Daily log workflow
- [ ] Issue reporting with photo + location
- [ ] Safety broadcast with read receipts
- [ ] SMS fallback integration
- [ ] QR code onboarding flow
- [ ] Role-based access control
- [ ] Message search

### Phase 3: Intelligence (Weeks 13–18)
- [ ] AI translation (real-time message translation)
- [ ] Voice-to-text for messages
- [ ] Checklists (safety, quality, delivery)
- [ ] Export (project archive as PDF/CSV)
- [ ] Analytics dashboard (basic)
- [ ] Delivery notification workflow

### Phase 4: BIM Integration (Weeks 19–26)
- [ ] IFC file upload + lightweight 3D viewer
- [ ] Element-linked messaging
- [ ] Issue pins on 2D plans / 3D model
- [ ] Tekla/Revit plugin (basic: send message linked to element)
- [ ] Model change notifications

---

## 10. Success Metrics

### Product Metrics
| Metric | Target (6 months post-launch) |
|--------|-------------------------------|
| DAU / MAU ratio | > 60% (indicates daily habit) |
| Messages per active user per day | > 5 |
| Photo uploads per project per day | > 10 |
| Daily log completion rate | > 80% |
| Average time to resolve issue | < 48 hours |
| SMS fallback usage | < 20% of messages (means app adoption is working) |

### Business Metrics
| Metric | Target (12 months) |
|--------|---------------------|
| Active projects | 50+ |
| Active organizations | 20+ |
| Paying customers | 10+ |
| MRR | €5,000+ |
| NPS | > 40 |
| Churn (monthly) | < 5% |

### Key Leading Indicators
- Subcontractor cross-pollination rate (do subs bring it to other projects?)
- Time from install to first message (should be < 5 minutes)
- Field vs. office usage ratio (target: 60% field, 40% office)

---

## 11. Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Field workers won't adopt another app | High | Critical | SMS fallback, QR onboard, simpler than WhatsApp, zero email requirement |
| WhatsApp is "good enough" | High | High | Differentiate on: project context, search, compliance, BIM. Target PM pain point first |
| Long B2B sales cycles | High | Medium | Free tier to prove value, bottom-up adoption via field, target innovation-friendly GCs first |
| BIM integration is complex | Medium | Medium | Start with IFC viewer only (open-source), add Tekla/Revit plugins in v2 |
| Translation quality for construction terminology | Medium | Medium | Fine-tune with construction glossary, allow user corrections |
| Scaling real-time messaging | Low | High | Use proven stack (Redis + WebSocket), horizontal scaling from day 1 |
| GDPR compliance with multilingual workers | Medium | High | Data stored in EU, clear consent flow, right to deletion, minimal PII required |

---

## 12. Appendix

### A. Construction-Specific Terminology for Translation Model
Key terms that must translate correctly across PL/UA/RU/EN/DE:
- Zbrojenie / Армирование / Rebar / Bewehrung
- Szalunek / Опалубка / Formwork / Schalung
- Strop / Перекриття / Floor slab / Geschossdecke
- Kierownik budowy / Прораб / Site manager / Bauleiter
- Odbiór / Приймання / Acceptance / Abnahme
- Usterka / Дефект / Defect / Mangel
- Dziennik budowy / Будівельний журнал / Construction diary / Bautagebuch

### B. Polish Market Context
- ~400,000 construction companies in Poland (mostly micro: <10 employees)
- Top GCs: Budimex, Strabag, Skanska, Erbud, Unibep, Pekabex (precast)
- Growing regulatory push for digitalization (e-CRUB, digital construction diary planned)
- Estimated 500,000+ Ukrainian workers in Polish construction
- BIM mandate coming for public projects (following EU BIM directive trends)

### C. Comparable Exit Valuations
- Procore IPO (2021): ~$12B valuation
- PlanGrid acquired by Autodesk (2018): $875M
- Fieldwire acquired by Hilti (2022): $300M
- Beekeeper: $100M+ raised, valued ~$500M+
- Construction communication is a proven value pool

---

*This document is designed to be actionable for development. Each feature is scoped with priority levels. The MVP can be built in ~6 months with a small team (2–3 engineers + 1 designer). The BIM integration (the moat) builds on Prefabim's existing Tekla/BIM expertise.*
