# UI Guidelines

## Design Tokens

### Colors
```css
/* Primary Palette */
--primary: #0066CC;      /* Blue - main actions */
--primary-hover: #0052A3;
--primary-active: #003D7A;

/* Semantic Colors */
--success: #00AA00;      /* Green - positive states */
--warning: #FF8800;      /* Orange - warnings */
--error: #CC0000;        /* Red - errors */
--info: #0088CC;         /* Light blue - info */

/* Neutrals */
--bg: #FFFFFF;           /* White - background */
--text: #000000;         /* Black - text */
--gray-light: #F5F5F5;   /* Light gray - disabled */
--gray-medium: #CCCCCC;  /* Medium gray - borders */
--gray-dark: #666666;    /* Dark gray - secondary text */
```

### Typography
```css
/* Font Family */
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;

/* Font Sizes (for touch-screens) */
--text-hero: 128px;      /* Mega-large (rarely used) */
--text-heading: 96px;    /* H1, main headings */
--text-subheading: 64px; /* H2 */
--text-body: 48px;       /* Body text, labels */
--text-small: 32px;      /* Secondary info */
--text-tiny: 24px;       /* Footer, legal (minimum) */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-bold: 700;

/* Line Heights */
--line-height-tight: 1.1;  /* Headings */
--line-height-normal: 1.5; /* Body */
```

### Spacing
```css
/* Touch Targets */
--touch-min: 200px;      /* Minimum for any interactive element */
--touch-primary: 300px;  /* Primary actions (big buttons) */
--touch-secondary: 200px;/* Secondary actions */

/* Spacing Scale */
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 32px;
--space-xl: 48px;        /* Standard gap between elements */
--space-2xl: 64px;
--space-3xl: 96px;

/* Layout */
--container-padding: 48px;
--screen-max-width: 1920px;
--screen-max-height: 1080px;
```

### Borders & Shadows
```css
/* Border Radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;       /* Buttons */
--radius-full: 9999px;   /* Pills, circles */

/* Shadows */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
--shadow-md: 0 4px 12px rgba(0,0,0,0.15);
--shadow-lg: 0 8px 24px rgba(0,0,0,0.2);  /* Buttons */
--shadow-xl: 0 16px 48px rgba(0,0,0,0.3); /* Cards */
```

### Animations
```css
/* Durations */
--duration-instant: 100ms;  /* Micro-interactions */
--duration-fast: 200ms;     /* Standard transitions */
--duration-normal: 300ms;   /* Slower effects */
--duration-slow: 500ms;     /* Rare, heavy animations */

/* Easings */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);     /* Default */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Component Specs

### Button

**Primary Button:**
```tsx
<button className="
  w-80 h-80           /* 320×320px */
  rounded-3xl         /* 24px radius */
  bg-primary 
  text-white 
  text-6xl            /* 60px */
  font-bold
  shadow-lg
  active:scale-95     /* Press feedback */
  transition-transform duration-100
">
  🛫 FLIGHTS
</button>
```

**Secondary Button:**
```tsx
<button className="
  w-60 h-60           /* 240×240px */
  rounded-2xl 
  bg-gray-light 
  text-text 
  text-5xl 
  font-medium
  shadow-md
  active:scale-95
">
  🗺️ MAP
</button>
```

**Back Button:**
```tsx
<button className="
  w-24 h-24           /* 96px - smaller, top-left */
  rounded-xl
  bg-gray-light
  text-4xl
  shadow-md
">
  ← Back
</button>
```

---

### Screen Container
```tsx
<div className="
  w-screen h-screen   /* Full-screen */
  bg-bg
  p-12                /* 48px padding */
  flex flex-col
">
  {/* Back button (if needed) */}
  <button>← Back</button>
  
  {/* Content */}
  <div className="flex-1 flex flex-col items-center justify-center gap-12">
    {children}
  </div>
  
  {/* Footer (optional) */}
  <footer className="text-tiny text-gray-dark text-center">
    AeroGuide v0.1
  </footer>
</div>
```

---

### Input Field

**For manual-entry:**
```tsx
<div className="w-full max-w-4xl">
  <label className="text-5xl font-medium mb-4 block">
    Type flight number:
  </label>
  <input 
    type="text"
    className="
      w-full h-32        /* 128px tall */
      px-8 
      text-6xl 
      border-4 border-gray-medium
      rounded-2xl
      focus:border-primary focus:outline-none
    "
    placeholder="LH 123"
  />
</div>
```

---

### Card (Result Item)
```tsx
<div className="
  w-full 
  p-8 
  bg-white 
  border-4 border-gray-medium
  rounded-2xl 
  shadow-md
  active:scale-98
  transition-transform
">
  <div className="flex justify-between items-center">
    <div>
      <h3 className="text-6xl font-bold">LH 123</h3>
      <p className="text-5xl text-gray-dark">Frankfurt</p>
    </div>
    <div className="text-right">
      <p className="text-5xl font-bold">Gate B12</p>
      <p className="text-4xl text-success">✓ On Time</p>
    </div>
  </div>
</div>
```

---

### Modal/Alert
```tsx
<div className="
  fixed inset-0 
  bg-black bg-opacity-50 
  flex items-center justify-center
  z-50
">
  <div className="
    w-3/4 max-w-4xl
    bg-white 
    rounded-3xl 
    p-12 
    shadow-xl
  ">
    <h2 className="text-7xl font-bold mb-8">⚠️ Warning</h2>
    <p className="text-5xl mb-8">
      Still there? Returning to home in 10 seconds...
    </p>
    <button className="w-full h-24 rounded-2xl bg-primary text-white text-5xl">
      I'm here
    </button>
  </div>
</div>
```

---

## Interaction Patterns

### Button Press Feedback
```tsx
// Audio (Web Audio API)
const playClick = () => {
  const audioCtx = new AudioContext();
  const oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = 800; // Hz
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.05); // 50ms
};

// Visual
<button 
  onTouchStart={playClick}
  className="active:scale-95 transition-transform duration-100"
>
  ...
</button>
```

---

### Screen Transitions
```tsx
// Framer Motion or CSS
<div className="
  animate-in 
  slide-in-from-right 
  duration-200
">
  {/* Screen content */}
</div>
```

**CSS:**
```css
@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.screen-enter {
  animation: slideIn 200ms ease-out;
}
```

---

### Loading States

**Skeleton Card:**
```tsx
<div className="w-full h-48 bg-gray-light rounded-2xl animate-pulse" />
```

**Spinner (if needed):**
```tsx
<div className="w-32 h-32 border-8 border-gray-light border-t-primary rounded-full animate-spin" />
```

---

## Accessibility

### WCAG Compliance

**Color Contrast:**
- Text on background: 7:1 (AAA)
- Large text (48px+): 4.5:1 minimum
- Use tools: WebAIM Contrast Checker

**ARIA Labels:**
```tsx
<button aria-label="Search for flights">
  🛫
</button>

<input aria-label="Flight number" placeholder="LH 123" />
```

**Focus States:**
```css
button:focus-visible {
  outline: 4px solid var(--primary);
  outline-offset: 4px;
}
```

---

### Voice Output
```tsx
const speak = (text: string, lang = 'en-US') => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9; // Slightly slower
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
};

// Usage:
<button onClick={() => speak("Your gate is B12")}>
  Gate B12
</button>
```

---

### High-Contrast Mode
```css
@media (prefers-contrast: high) {
  :root {
    --primary: #0052A3;
    --text: #000000;
    --bg: #FFFFFF;
    /* Increase all contrasts */
  }
}

/* Or manual toggle */
.high-contrast {
  --primary: #000000;
  --bg: #FFFFFF;
  --text: #000000;
  /* All UI elements become pure black/white */
}
```

---

## Responsive Considerations

**Primary Target:** 1920×1080 (landscape)

**Fallback for smaller screens:**
```css
@media (max-width: 1280px) {
  :root {
    --text-heading: 64px;
    --text-body: 32px;
    --touch-primary: 200px;
  }
}

@media (max-width: 768px) {
  /* Stack buttons vertically */
  .button-group {
    flex-direction: column;
  }
}
```

---

## Performance Guidelines

- **Keep animations under 200ms** (feels instant)
- **Avoid heavy shadows on many elements** (GPU cost)
- **Use CSS transforms** (scale, translate) over width/height
- **Lazy-load images** if any
- **Debounce input** (300ms)
- **Target 60fps** always

---

## File Structure
```
src/
├── styles/
│   ├── globals.css       # Tailwind base + tokens
│   └── animations.css    # Custom animations
├── components/
│   ├── Button.tsx        # Reusable button
│   ├── Screen.tsx        # Screen container
│   ├── Card.tsx          # Result cards
│   └── Input.tsx         # Input fields
```

---

**Document Owner:** The Craftsman  
**Version:** 0.1  
**Last Updated:** 2025-01-26