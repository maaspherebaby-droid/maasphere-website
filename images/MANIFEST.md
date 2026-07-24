# Screenshot manifest

Drop real MaaSphere app screenshots into this folder using the **exact filenames**
below. The site's Phase 2 build (Home hero, Features, Dhruv AI, Doctors pages)
references these paths directly, so filenames must match exactly (case-sensitive).

General capture guidance:
- Same device/resolution for every shot (keeps phone-mockup framing consistent).
- PNG, portrait orientation.
- Populate with realistic demo data, not empty states.
- Use **one consistent demo persona** (same name/due date/week) across every
  mother-side screen so the site tells one coherent story.
- Don't crop on any tile currently showing an in-app "Coming Soon" placeholder
  (e.g. Partner "Support Score", Doctor "Today's Patients", Partner "Emergency
  Contacts" fallback).

## Tier 1 — required for Home hero, Features page, Dhruv AI page

| Filename | Screen | Notes |
|---|---|---|
| `home-mother-dashboard.png` | Home (mother, pregnancy mode) | Glass hero "journey" card, mood check-in, health snapshot visible |
| `baby-3d-viewer.png` | 3D Baby Viewer | A later-week model (e.g. week 28/32), nicely rotated, week stats visible |
| `dhruv-ai-chat.png` | Dhruv AI chat | A normal, helpful exchange — not the emergency screen |
| `timeline-week-detail.png` | Timeline | Week detail sheet open (trimester / size / tips) |
| `kick-counter-active.png` | Kick Counter | Mid-session, counter + timer visible |
| `kick-history-trend.png` | Kick History | Trend chart + stats populated |
| `medicine-tracker-today.png` | Medicine Tracker | Today/Upcoming/Completed view, progress ring populated |

## Tier 2 — required for Doctors page + Home's doctor/partner sections

| Filename | Screen | Notes |
|---|---|---|
| `doctor-home.png` | Doctor Home | Identity card, quick stats, recent activity |
| `doctor-my-patients.png` | My Patients | A few demo patients in the list |
| `doctor-patient-detail.png` | Patient Detail | "Pregnancy EMR" style read-only view |
| `partner-dashboard-connected.png` | Partner Dashboard | Connected state: progress ring, daily mission, today's meds/appointments, weekly stats |

## Tier 3 — optional polish

| Filename | Screen | Notes |
|---|---|---|
| `profile-screen.png` | Profile / account | Settings, role, language |
| `home-drawer-nav.png` | Nav drawer (open) | Shows the color-coded Track / Explore / You / Care Team sections |

Until a given file exists, the site shows a soft placeholder card in its place
(no fake screenshots) — drop the file in and it renders automatically on the
next build, no code changes needed.
