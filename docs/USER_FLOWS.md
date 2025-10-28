# User Flows

## Flow 1: Find My Gate

### Persona
**Primary:** Mark (Business Traveler, 42)  
**Secondary:** Helga (Elderly Tourist, 68)

### Scenario
User has boarding pass, needs to find gate quickly.

### Steps

1. **Approach**
   - Terminal is idle at central location
   - User approaches OR terminal detects user and approaches
   - Screen shows: "Need help?" (large, friendly)

2. **Greeting Screen**
```
   ┌─────────────────────────────────────┐
   │                                     │
   │        Need help?                   │
   │                                     │
   │   ┌───────────────────────────┐    │
   │   │   👍 YES                  │    │
   │   │   (300×300px, green)      │    │
   │   └───────────────────────────┘    │
   │                                     │
   │   ┌───────────────────────────┐    │
   │   │   👋 NO, THANKS           │    │
   │   │   (200×200px, gray)       │    │
   │   └───────────────────────────┘    │
   │                                     │
   └─────────────────────────────────────┘
```

3. **Main Menu**
   - User taps YES
   - Transitions to main options (200ms slide-in)
```
   ┌─────────────────────────────────────┐
   │   How can we help?                  │
   │                                     │
   │   ┌───────────────────────────┐    │
   │   │   🛫 FLIGHTS              │    │
   │   └───────────────────────────┘    │
   │                                     │
   │   ┌───────────────────────────┐    │
   │   │   🗺️  MAP                 │    │
   │   └───────────────────────────┘    │
   │                                     │
   │   ┌───────────────────────────┐    │
   │   │   ℹ️  HELP                │    │
   │   └───────────────────────────┘    │
   └─────────────────────────────────────┘
```

4. **Flight Search**
   - User taps FLIGHTS
   - Shows input options
```
   ┌─────────────────────────────────────┐
   │  ← Back          Find your flight   │
   │                                     │
   │   ┌───────────────────────────┐    │
   │   │   📱 SCAN BOARDING PASS   │    │
   │   │   (Quick & easy)          │    │
   │   └───────────────────────────┘    │
   │                                     │
   │   OR                                │
   │                                     │
   │   Type flight number:               │
   │   ┌─────────────────────┐          │
   │   │ LH___               │          │
   │   └─────────────────────┘          │
   │                                     │
   │   [Numeric Keyboard]                │
   └─────────────────────────────────────┘
```

5. **Input Method**
   - **Option A:** QR-Scanner aktiviert
   - **Option B:** User tippt "LH 123"
   - As-you-type filtering (shows results after 2 chars)

6. **Search Results**
```
   ┌─────────────────────────────────────┐
   │  ← Back                             │
   │                                     │
   │  Results for "LH 1":                │
   │                                     │
   │  ┌─────────────────────────────┐   │
   │  │ LH 123  →  Frankfurt        │   │
   │  │ Gate B12  |  14:30          │   │
   │  │ ✓ On Time                   │   │
   │  └─────────────────────────────┘   │
   │                                     │
   │  ┌─────────────────────────────┐   │
   │  │ LH 156  →  Munich           │   │
   │  │ Gate A5   |  15:45          │   │
   │  │ ⚠️ Delayed 20 min           │   │
   │  └─────────────────────────────┘   │
   └─────────────────────────────────────┘
```

7. **Flight Details**
   - User selects flight
```
   ┌─────────────────────────────────────┐
   │  ← Back                             │
   │                                     │
   │  ✈️ LH 123 to Frankfurt            │
   │                                     │
   │  🚪 Gate B12                        │
   │  🕐 Boarding 14:30                  │
   │  ⏱️  8 minutes walk                 │
   │  ✓ On Time                          │
   │                                     │
   │  ┌───────────────────────────┐     │
   │  │  🗺️  SHOW ON MAP          │     │
   │  │  (Guide me there)         │     │
   │  └───────────────────────────┘     │
   │                                     │
   │  ┌───────────────────────────┐     │
   │  │  🔔 SET ALERT             │     │
   │  │  (Notify before boarding) │     │
   │  └───────────────────────────┘     │
   └─────────────────────────────────────┘
```

8. **Map/Navigation (Optional)**
   - If user taps "Show on Map"
   - Terminal displays route OR starts following-mode
   - Robot navigates to gate, user follows

9. **Auto-Reset**
   - After 45s inactivity: "Still there?" warning
   - After 10s more: Reset to home

### Success Metrics
- **Time:** <60 seconds from start to gate-info
- **Success Rate:** 90%+ complete without help
- **Accessibility:** Works for wheelchair-users, elderly
- **Error Recovery:** Back-button always available

### Edge Cases
- **QR won't scan:** Fallback to manual entry
- **Flight not found:** "Flight not found. Try again?" + search again
- **User walks away:** Auto-reset after 45s
- **Multiple results:** Show max 5, sorted by relevance

---

## Flow 2: Find Restroom

### Persona
**Primary:** Sarah (Family with kids, 35)  
**Secondary:** Any urgent need

### Scenario
User needs nearest restroom quickly.

### Steps

1. **Main Menu**
   - User taps MAP

2. **Map Overview**
```
   ┌─────────────────────────────────────┐
   │  ← Back          Terminal Map       │
   │                                     │
   │  [Interactive Map with Icons]       │
   │                                     │
   │  🚻 Restrooms                       │
   │  🍴 Food & Drinks                   │
   │  🛍️  Shops                          │
   │  🚪 Gates                           │
   │  ℹ️  Information                    │
   │                                     │
   │  Tap any icon to see locations      │
   └─────────────────────────────────────┘
```

3. **Category Selection**
   - User taps 🚻 Restroom icon

4. **Nearest Options**
```
   ┌─────────────────────────────────────┐
   │  ← Back          Restrooms          │
   │                                     │
   │  Nearest to you:                    │
   │                                     │
   │  ┌─────────────────────────────┐   │
   │  │ 🚻 Terminal 1, Level 2      │   │
   │  │ 50m away (1 min walk)       │   │
   │  │ ♿ Wheelchair accessible     │   │
   │  │ 🚼 Baby changing station     │   │
   │  └─────────────────────────────┘   │
   │                                     │
   │  ┌─────────────────────────────┐   │
   │  │ 🚻 Near Gate B12            │   │
   │  │ 120m away (2 min walk)      │   │
   │  │ ♿ Accessible                │   │
   │  └─────────────────────────────┘   │
   │                                     │
   │  ┌─────────────────────────────┐   │
   │  │ 🚻 Food Court Area          │   │
   │  │ 180m away (3 min walk)      │   │
   │  └─────────────────────────────┘   │
   └─────────────────────────────────────┘
```

5. **Selection & Directions**
   - User taps closest option
   - Shows map with highlighted route
   - OR robot guides user there

### Success Metrics
- **Time:** <30 seconds to nearest option
- **Accuracy:** Distance ±10m
- **Accessibility:** Clearly indicates wheelchair-access

---

## Flow 3: Multi-Language Support

### Persona
**Primary:** International travelers (non-German speakers)

### Scenario
User doesn't speak German or English well.

### Steps

1. **Language Detection**
   - Home screen shows flags (top-right corner)
```
   ┌─────────────────────────────────────┐
   │  🇩🇪 🇬🇧 🇫🇷 🇪🇸 🇨🇳 🇸🇦          │
   │                                     │
   │         Need help?                  │
   │              ...                    │
   └─────────────────────────────────────┘
```

2. **Language Switch**
   - User taps flag (e.g., 🇫🇷 French)
   - Instant switch (<200ms)
   - All text updates

3. **Confirmation**
   - Brief flash: "Langue changée en Français ✓"
   - Then continues to main menu in French

### Supported Languages (MVP)
- 🇩🇪 German (Deutsch)
- 🇬🇧 English
- 🇫🇷 French (Français)
- 🇪🇸 Spanish (Español)
- 🇨🇳 Chinese (中文)
- 🇸🇦 Arabic (العربية)

### Technical Implementation
- i18n library (react-i18next)
- JSON translation files
- RTL support for Arabic
- Voice-output switches language too

### Success Metrics
- **Speed:** Language-switch <200ms
- **Completeness:** 100% UI translated (no fallbacks)
- **Consistency:** Same flow in all languages

---

## Common Elements Across All Flows

### Back Button
- Always top-left
- 100×100px minimum
- ← icon + "Back" text
- Returns to previous screen

### Auto-Reset Timer
- Starts after any user-interaction
- 45 seconds inactivity → Warning
- 10 seconds more → Home screen
- Prevents: next user seeing previous data

### Audio Feedback
- Button press: subtle "click" (50ms, 800Hz)
- Success: pleasant "ding" (100ms, 1000Hz)
- Error: soft buzz (100ms, 400Hz)
- Toggle-able (mute button)

### Accessibility
- High-contrast mode (toggle)
- Voice-output (reads screen content)
- Large touch-targets (200×200px min)
- Screen-reader compatible (ARIA)

---

**Document Owner:** The Craftsman  
**Version:** 0.1  
**Last Updated:** 2025-01-26