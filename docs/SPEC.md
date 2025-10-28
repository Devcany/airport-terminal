# AIRPORT INFO-TERMINAL - Software Requirements

## 1. ONE-LINER
Mobile, autonomous info-terminal for airports with touch-UI, providing flight info, wayfinding, and services - controlled via web-based interface.

## 2. PROBLEM & SOLUTION

**Problem:**
- Passengers get lost in large airports (wayfinding issue)
- Static info-boards far away or outdated
- Info-desks understaffed, long queues
- Language barriers for international travelers

**Solution:**
- Mobile robot with large touch-screen navigates to passengers
- Real-time flight info + interactive maps
- Multi-language support (6+ languages)
- Accessible for elderly, disabled, visually impaired

## 3. USER PERSONAS

**Persona 1: "Stressed Business Traveler" (Mark, 42)**
- Context: Running late, connecting flight in 30 min
- Pain: Doesn't know which gate, terminal too big
- Goal: Find gate fast, ideally be guided there

**Persona 2: "Elderly Tourist" (Helga, 68)**
- Context: First time at this airport, overwhelmed
- Pain: Can't read small signs, tech-unsavvy
- Goal: Simple directions to baggage claim

**Persona 3: "Family with Kids" (Sarah, 35)**
- Context: Two kids, stroller, lots of baggage
- Pain: Can't use phone while managing kids
- Goal: Quick info about nearest restroom + food

## 4. USER FLOWS

**Flow 1: Find My Gate**
1. Terminal approaches OR user approaches terminal
2. Large prompt: "Need help?" [YES / NO]
3. User taps YES
4. Options: [FLIGHTS] [MAP] [HELP]
5. User taps FLIGHTS
6. Prompt: "Scan boarding pass OR type flight number"
7. User scans QR code (or types "LH 123")
8. System shows: Gate B12, Boarding 14:30, 8min walk
9. User taps "Guide me there"
10. Robot navigates, user follows

**Success Criteria:**
- Completed in <60 seconds
- Works for 90% of users without staff-help
- Accessible for wheelchair users

**Flow 2: Find Restroom**
1. User taps "MAP"
2. Shows terminal-overview with icons (toilets, food, shops)
3. User taps toilet-icon
4. Shows 3 nearest options with distance
5. User selects one
6. Robot guides OR shows map-directions

**Success Criteria:**
- <30 seconds to nearest option
- Includes accessibility-info (wheelchair-accessible?)

**Flow 3: Multi-Language Support**
1. Home-screen shows flags (DE, EN, FR, ES, CN, AR)
2. User taps flag
3. Entire UI switches language
4. Voice-output also switches (if enabled)

**Success Criteria:**
- Instant language-switch (<200ms)
- All text translated (no English fallbacks)

## 5. FEATURES (MoSCoW)

**MUST HAVE (MVP):**
- [ ] Touch-UI with 3 main options (Flights, Map, Help)
- [ ] Flight-info display (gate, time, status)
- [ ] QR-code scanner for boarding-pass
- [ ] Manual flight-number entry
- [ ] Terminal-map with clickable POIs
- [ ] Multi-language (6 languages minimum)
- [ ] Auto-reset after 45s inactivity
- [ ] Accessibility: High-contrast mode, voice-output

**SHOULD HAVE (Phase 2):**
- [ ] Robot navigation (autonomous follow-me)
- [ ] Voice-control (Whisper + GPT-4)
- [ ] Real-time updates (flight-delay notifications)
- [ ] Service-requests (call staff, wheelchair assistance)

**COULD HAVE (Nice-to-have):**
- [ ] Shopping/dining recommendations
- [ ] Integration with airline-apps (push-notifications)
- [ ] Gamification (kids-mode with animations)

**WON'T HAVE (Out of scope):**
- [ ] User-accounts / login
- [ ] Payment-processing
- [ ] Booking / rebooking flights
- [ ] Social features

## 6. TECH STACK

**Frontend (Touch-Screen-UI):**
- React 18 + TypeScript + Vite
- Tailwind CSS (utility-first, responsive)
- React Router (screen-navigation)
- Zustand (state-management)
- Three.js (optional, for 3D-terminal-map)
- Zxing (QR-code scanner)

**Backend (Fleet-Management):**
- Node.js 20 + Express
- PostgreSQL (via Supabase)
- WebSockets (real-time updates)
- REST API (CRUD operations)

**Robot-Control:**
- ROS2 Humble (C++/Python)
- Nav2 (navigation-stack)
- Lidar + Camera (sensors)

**DevOps:**
- Frontend: Vercel
- Backend: Railway / Render
- Database: Supabase (managed Postgres)
- CI/CD: GitHub Actions

## 7. UI/UX CONSTRAINTS

**Design-System:**
- Touch-Targets: min 200×200px (300×300px for primary)
- Font-Sizes: 
  - Headings: 96px
  - Body: 48px
  - Minimum: 32px
- Color-Contrast: WCAG AAA (7:1 ratio)
- Colors:
  - Primary: #0066CC (Blue)
  - Success: #00AA00 (Green)
  - Error: #CC0000 (Red)
  - Background: #FFFFFF (White)
  - Text: #000000 (Black)
- Spacing: min 48px between interactive elements

**Performance:**
- Initial load: <2s
- Screen transitions: <200ms
- Touch-response: <100ms (perceived)
- Offline-capable: Cache flight-data for 1h

**Accessibility:**
- Screen-reader compatible (ARIA-labels)
- Voice-output (toggle-able)
- High-contrast mode
- No animation for motion-sensitivity (toggle)

## 8. NON-FUNCTIONAL REQUIREMENTS

**Performance:**
- Handles 50 concurrent terminal-users
- API-response: <500ms (p95)
- UI-framerates: 60fps (no jank)

**Security:**
- HTTPS only
- No PII storage (GDPR-compliant)
- Session-data auto-deleted after 45s
- No tracking / cookies

**Reliability:**
- Uptime: 99.5% (allowing for maintenance)
- Graceful degradation (offline-mode if backend down)
- Auto-recovery from crashes

**Scalability:**
- Supports 100+ terminals per airport
- Cloud-backend scales horizontally

## 9. RISKS & MITIGATIONS

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Airport-API unavailable | High | High | Use mock-data for MVP, manual-fallback |
| Touch-screen unresponsive | Medium | High | Debouncing, large buttons, audio-feedback |
| Robot-hardware delays | High | Medium | Develop UI first, robot-integration later |
| Slow-network at airport | High | Medium | Offline-first, cache all critical data |
| Accessibility not met | Medium | High | WCAG audit early, test with real users |
| Language-translations wrong | Medium | Medium | Professional translators, native-speaker review |

## 10. ACCEPTANCE CRITERIA

**MVP is DONE when:**
- [ ] User finds gate-info in <60s (tested with 10 real users)
- [ ] UI works flawlessly on 1920×1080 touch-screen
- [ ] No crashes during 2h continuous usage
- [ ] Passes WCAG 2.1 AA audit (WAVE tool)
- [ ] Loads in <2s on 3G network
- [ ] 6 languages fully translated and functional
- [ ] Auto-reset works (tested: inactive for 45s → resets)

## 11. OUT OF SCOPE

- User-authentication / accounts
- E-commerce (shopping, dining-orders)
- Integration with airline-loyalty-programs
- Mobile-app (only terminal-version)
- Video-calling to staff

---

## APPENDIX A: DATA STRUCTURES
```typescript
interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  destination: string;
  origin: string;
  gate: string;
  terminal: string;
  scheduledTime: string;
  boardingTime: string;
  status: 'on-time' | 'delayed' | 'boarding' | 'departed' | 'cancelled';
  delay?: number;
}

interface POI {
  id: string;
  type: 'gate' | 'restroom' | 'food' | 'shop' | 'exit' | 'checkin';
  name: string;
  coordinates: { x: number; y: number };
  accessible: boolean;
}

interface RobotStatus {
  id: string;
  location: { x: number; y: number; floor: number };
  battery: number;
  status: 'idle' | 'moving' | 'charging' | 'assisting';
}
```

---

**Document Owner:** The Craftsman  
**Version:** 0.1  
**Last Updated:** 2025-01-26  
**Status:** Foundation Phase