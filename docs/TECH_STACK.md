# Tech Stack

## Frontend (Touch-Screen UI)

### Core Framework
**React 18**
- **Why:** Component-based, huge ecosystem, team knows it
- **Alternative considered:** Vue 3 → Rejected (team preference)
- **Alternative considered:** Svelte → Rejected (smaller ecosystem)

### Language
**TypeScript 5**
- **Why:** Type-safety, better DX, catches bugs early
- **Alternative:** Plain JavaScript → Rejected (scales poorly)

### Build Tool
**Vite 5**
- **Why:** Fast HMR, modern, optimized builds
- **Alternative:** Create-React-App → Rejected (slow, deprecated)
- **Alternative:** Next.js → Rejected (no SSR needed for terminal)

### Styling
**CSS Modules**
- **Why:** 
  1. **B2B-Context:** Deutsche Firmen/Airports haben oft inhouse-Devs die CSS Modules kennen (Standard in Enterprise-React-Projekten)
  2. **Wartbarkeit:** Andere Devs lesen CSS-File statt 50 Tailwind-Classes in JSX
  3. **Team-Präferenz:** Craftsman bevorzugt Vanilla-CSS-Syntax über Utility-Classes
  4. **Performance:** Nur genutztes CSS im Bundle, kein Tailwind-Compiler nötig
  5. **Professionalität:** Cleaner JSX-Code, bessere Code-Reviews
  6. **Zero Vendor-Lock:** Kein Framework-Dependency, einfache Migration falls nötig

- **Alternative considered:** Tailwind CSS → Rejected (Classname-Spam, Dependenz, Team-Präferenz)
- **Alternative considered:** Styled Components → Rejected (Runtime-Cost, Overkill)
- **Alternative considered:** Vanilla CSS → Rejected (Global-namespace-Probleme)

**Implementation:**
```tsx
// components/Button.tsx
import styles from './Button.module.css';

export const Button = ({ children, onClick }) => (
  <button className={styles.primary} onClick={onClick}>
    {children}
  </button>
);
```
```css
/* components/Button.module.css */
.primary {
  width: 320px;
  height: 320px;
  background: var(--primary);
  /* ... */
}
```

**CSS Variables (globals.css):**
- Colors, spacing, font-sizes als CSS-Custom-Properties
- Import in index.css
- Wiederverwendbar in allen Modules

### State Management
**Zustand**
- **Why:** Simple, less boilerplate than Redux, performant
- **Alternative:** Redux Toolkit → Rejected (overkill for terminal)
- **Alternative:** Context API → Considered (may use for simple cases)

### Routing
**React Router 6**
- **Why:** Standard, mature, type-safe with TS
- **Alternative:** TanStack Router → Rejected (too new)

### UI Components
**Custom (Tailwind-based)**
- No component library (Material-UI, etc.)
- **Why:** Public-terminals need custom large-touch-targets
- Reusable components: Button, Screen, Card, Input

### 3D Visualization (Optional)
**Three.js**
- **Why:** 3D terminal-map (if needed)
- **Alternative:** Babylon.js → Similar, either works
- **Usage:** Only if 3D-map provides value

### QR Code
**Zxing (or html5-qrcode)**
- **Why:** Browser-based QR-scanning
- Accesses device camera

### Animations
**Framer Motion (maybe) or CSS Transitions**
- **Why:** Smooth screen-transitions, button-feedback
- Keep minimal (performance > fancy)

---

## Backend (Fleet Management)

### Runtime
**Node.js 20 LTS**
- **Why:** JavaScript everywhere, large ecosystem
- **Alternative:** Deno → Rejected (less mature ecosystem)
- **Alternative:** Bun → Rejected (too new, stability unknown)

### Framework
**Express 4**
- **Why:** Minimal, flexible, well-known
- **Alternative:** Fastify → Faster but less plugins
- **Alternative:** NestJS → Too heavy for our needs

### Database
**PostgreSQL 15 (via Supabase)**
- **Why:** Relational data (flights, terminals), ACID, mature
- **Alternative:** MongoDB → Rejected (prefer SQL for structured data)
- **Alternative:** SQLite → Rejected (doesn't scale for multi-terminal)
- **Supabase:** Managed Postgres, auth, real-time, good DX

### Real-Time Communication
**WebSockets (via Socket.io or native)**
- **Why:** Real-time terminal-status, flight-updates
- **Alternative:** Server-Sent Events → One-way only
- **Alternative:** Polling → Inefficient

### API Style
**REST (for now)**
- **Why:** Simple, standard
- **Later:** GraphQL if query complexity grows

### Authentication (Fleet-Management only)
**JWT (for admin-dashboard)**
- Terminals = no auth (public-facing)
- Admin-dashboard = JWT-based

---

## Robot Control

### Middleware
**ROS2 Humble**
- **Why:** Industry-standard, huge community, battle-tested
- **Alternative:** Custom → Reinventing wheel
- **Alternative:** ROS1 → Deprecated

### Navigation Stack
**Nav2 (ROS2 Navigation)**
- **Why:** Mature, handles SLAM, path-planning, obstacle-avoidance
- Lidar + Camera-based

### Programming Language
**Python 3.10+ (for ROS2 nodes)**
- **Why:** Fast prototyping, ROS2 has great Python-bindings
- **C++:** For performance-critical nodes (motor-control)

### Sensors
- **Lidar:** 2D (cheap) or 3D (expensive) - TBD
- **Cameras:** Intel RealSense (depth) or similar
- **IMU:** For localization

### Compute (on Robot)
**NVIDIA Jetson Orin Nano or similar**
- **Why:** GPU for vision, enough CPU for ROS2
- **Alternative:** Raspberry Pi → Too weak for vision
- **Alternative:** Intel NUC → No GPU

### Communication (Robot ↔ Backend)
**MQTT or ROS2-Bridge**
- **Why:** Lightweight, works over WiFi
- Robot publishes status, receives commands

---

## DevOps & Hosting

### Frontend Hosting
**Vercel**
- **Why:** Zero-config, fast CDN, auto-deploy from Git
- **Alternative:** Netlify → Similar, either works
- **Alternative:** Cloudflare Pages → Also good

### Backend Hosting
**Railway or Render**
- **Why:** Easy Node.js hosting, auto-scaling
- **Alternative:** AWS EC2 → More setup, overkill for start
- **Alternative:** Heroku → More expensive

### Database
**Supabase (managed Postgres)**
- **Why:** Includes auth, real-time, storage
- **Alternative:** Self-hosted Postgres → More maintenance

### CI/CD
**GitHub Actions**
- **Why:** Integrated with GitHub, free for public repos
- Auto-tests, auto-deploy on push

### Monitoring (Later)
**Sentry (errors) + Vercel Analytics (performance)**

---

## Development Tools

### Code Editor
**Cursor or VS Code**
- **Why:** AI-assist, TypeScript support, extensions

### Version Control
**Git + GitHub**
- **Why:** Industry-standard, collaboration

### Package Manager
**npm or pnpm**
- **Why:** Standard, works
- **pnpm:** Faster, disk-efficient (preferred)

### Linting/Formatting
**ESLint + Prettier**
- **Why:** Code-quality, consistency

### Testing (Later, not MVP)
**Vitest (unit) + Playwright (e2e)**

---

## Decision Log

| Date | Decision | Reason | Alternatives |
|------|----------|--------|--------------|
| 2025-01-26 | React over Vue | Team knows React | Vue 3 |
| 2025-01-26 | Vite over CRA | Speed, modern | CRA (deprecated) |
| 2025-01-26 | Supabase over Firebase | Prefer Postgres, open-source | Firebase |
| 2025-01-26 | ROS2 over custom | Industry-standard | Custom middleware |
| 2025-01-26 | Tailwind over CSS-in-JS | Utility-first, performance | Styled Components |
| 2025-01-26 | Zustand over Redux | Simplicity | Redux Toolkit |

---

## Tech-Debt & Future Considerations

### Known Trade-Offs
- **No tests in MVP:** Speed > coverage (add later)
- **REST over GraphQL:** Simpler now, may migrate if needed
- **Monorepo vs separate repos:** Start separate, consider monorepo at scale

### Migration Paths
- **If scaling to 100+ airports:** Microservices, Kubernetes
- **If query complexity grows:** GraphQL
- **If mobile-app needed:** React Native (code-reuse)

---

**Document Owner:** The Craftsman  
**Version:** 0.1  
**Last Updated:** 2025-01-26