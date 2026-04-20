# JUST Website - Continuation Prompt

Copy everything below this line into a new conversation:

---

## Context: JUST Institutional Website (wearejust.it)

You are continuing work on the **JUST institutional website**, a React SPA for a Brazilian fintech company. The site is live at **https://wearejust.it** and deployed via GitHub Pages.

### Project Structure

```
just-site/                    ← root (mounted folder)
├── src/
│   └── App.jsx               ← SINGLE source file (~4500+ lines, inline styles, all components)
├── assets/
│   └── index-C0_V6ihM.js     ← GOLDEN production build (398KB) - DO NOT MODIFY
├── public/
│   └── logos/                 ← partner/ecosystem logos (SVG/PNG)
├── vite.config.js             ← base: '/' (NEVER change this)
├── package.json
└── HANDOFF-PROMPT.md          ← this file
```

### Tech Stack
- **React 18** SPA with Vite bundler
- **Single-file architecture**: everything lives in `src/App.jsx` (components, styles, routing, data)
- **Inline styles** with a design token object `T` (colors, spacing, fonts)
- **Key components**: `Reveal` (scroll animation), `Btn`, `Tag`, `SectionTitle`, `ProductIcon`, `ProductMockup`, `JustLogo`, `HeroOrbital`
- **Routing**: custom hash-based via `useState` (`page` state), `nav()` function
- **Deployment**: GitHub Pages on `gh-pages` branch, custom domain `wearejust.it`

### What Has Been Done (completed and verified)
1. Source code fully reconciled with production bundle (40/40 content checks passed)
2. Social proof bar: single row, "Ecossistema e parceiros" label, 9 logos
3. Footer: 2 logo groups (Ecossistema + Parceiros) → disclaimer → copyright
4. HOME button added to desktop nav
5. About page metric badges (Desde 2020, 18+ Clientes, R$900M+ TPV, NPS 76)
6. Hero subtitle, Nossa Tese title, Trajetoria title corrected
7. All CSS classes for about page added
8. Visual verification completed against production - APPROVED by user

### Known Sandbox Limitations
- **Binary files** (.png, .svg, .ico) cannot be copied from mounted dir (Resource deadlock avoided). Workaround: download from production with `curl`.
- **Vite build** fails from mounted dir. Workaround: create a clean build dir at `/sessions/kind-trusting-noether/just-build/`, copy source, `npm install`, build there.
- **Preview server** tends to die between messages. Use `npx vite preview --host 0.0.0.0 --port 4173` from the build dir.

---

## MANDATORY RULES: File Sync & Version Safety

### Rule 1: Always Keep Files Synchronized
The source of truth is always: `just-site/src/App.jsx` (the mounted file).

**Before ANY edit:**
```bash
# Create timestamped backup
cp /sessions/kind-trusting-noether/mnt/Site/just-site/src/App.jsx \
   /sessions/kind-trusting-noether/mnt/Site/just-site/src/App.jsx.bak-$(date +%Y%m%d-%H%M%S)
```

**After ANY edit to App.jsx:**
```bash
# Sync to build directory
cp /sessions/kind-trusting-noether/mnt/Site/just-site/src/App.jsx \
   /sessions/kind-trusting-noether/just-build/src/App.jsx

# Rebuild
cd /sessions/kind-trusting-noether/just-build && npx vite build
```

### Rule 2: Easy Version Rollback
Always maintain rollback capability:

```bash
# List all backups (most recent last)
ls -lt just-site/src/App.jsx.bak-* | head -10

# Rollback to a specific version
cp just-site/src/App.jsx.bak-YYYYMMDD-HHMMSS just-site/src/App.jsx
```

### Rule 3: Before Making Changes
1. **Backup** current App.jsx (timestamped)
2. **Describe** what you're about to change and why
3. **Make** the change
4. **Rebuild** and sync
5. **Verify** the change didn't break anything (content check or visual)

### Rule 4: If Something Goes Wrong
1. List available backups
2. Let the user choose which version to restore
3. Restore, rebuild, and verify

### Rule 5: Never Touch the Golden Build
`assets/index-C0_V6ihM.js` is the production reference. NEVER modify it. Use it only for comparison.

---

## Pending Work (not yet started)

### Mobile Responsiveness Improvements
1. **Hamburger menu** for screens ≤ 900px (currently desktop-only nav)
2. **Hero section** - increase vertical spacing on mobile
3. **"Configure > Personalize > Lance" flow** - smaller step cards on mobile
4. **CTA buttons** - reduce size on mobile
5. **Partner logos** - better distribution/wrapping on mobile

### Reference
- Production site: https://wearejust.it
- Golden build for comparison: `assets/index-C0_V6ihM.js`
- The user (Gabriel) is the founder/CTO, fintech background, prefers direct/pragmatic communication in Portuguese

---

Start by confirming you understand the project state, then ask what task to work on next.
