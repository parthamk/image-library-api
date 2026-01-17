```
IMAGE LIBRARY API - DOCUMENTATION WEBSITE ARCHITECTURE
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│                      REACT APPLICATION                       │
│                    (React Router Setup)                      │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
   ┌────▼─────┐              ┌───────▼──────┐
   │  Layout  │              │   Sidebar    │
   │(Main+    │              │ (Navigation) │
   │ Content) │              │              │
   └──────────┘              └──────────────┘
        │
        │ Routes:
        │
  ┌─────┼─────┬──────────┬──────────┐
  │     │     │          │          │
  ▼     ▼     ▼          ▼          ▼
  /     Auth  Live       Code
        |     Demos      Examples
   Introduction
        │
        └─────────────────┐
                          │
┌─────────────────────────▼──────────────────────────────────┐
│              LIVE DEMOS PAGE (Interactive)                 │
├───────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────────────────────────────────┐    │
│  │         Configuration Panel                       │    │
│  │  • API Key Input (password field)                │    │
│  │  • Base URL Input                                │    │
│  │  • [Fetch Categories] Button                     │    │
│  └──────────────────────────────────────────────────┘    │
│                         │                                  │
│  ┌──────────────────────▼──────────────────────────┐    │
│  │      Category Selection Grid                     │    │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐      │    │
│  │  │Category 1│  │Category 2│  │Category 3│      │    │
│  │  │2 subfolders          3 subfolders        │    │
│  │  └──────────┘  └──────────┘  └──────────┘      │    │
│  └──────────────────────────────────────────────────┘    │
│                         │                                  │
│  ┌──────────────────────▼──────────────────────────┐    │
│  │      View Switcher Tabs                         │    │
│  │  [Grid View]  [Slider View]                    │    │
│  └──────────────────────────────────────────────────┘    │
│                         │                                  │
│          ┌──────────────┴──────────────┐                 │
│          │                             │                 │
│     ┌────▼────────┐           ┌───────▼──────┐         │
│     │  Grid View  │           │ Slider View  │         │
│     │             │           │              │         │
│     │ ImageGrid   │           │ImageSlider   │         │
│     │ Component   │           │Component     │         │
│     │             │           │              │         │
│     └─────────────┘           └──────────────┘         │
│                                                             │
└─────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────┐
│          CODE EXAMPLES PAGE (Tab-Based)                    │
├───────────────────────────────────────────────────────────┤
│                                                             │
│  Tabs: [HTML] [React] [Node.js]                           │
│         │       │       │                                  │
│         └───┬───┴───┬───┘                                  │
│             │       │                                      │
│    ┌────────▼──┐    │                                     │
│    │  Static   │    │ "How it works:"                     │
│    │   HTML +  │    │ Description of each impl.          │
│    │   Vanilla │    │                                     │
│    │     JS    │    │ ┌──────────────────────┐           │
│    │           │    │ │  Code Block          │           │
│    │ ┌───────┐ │    │ │  (Copy-paste ready)  │           │
│    │ │Fetch  │ │    │ │                      │           │
│    │ │DOM    │ │    │ │  Complete example    │           │
│    │ │Render │ │    │ │  with comments       │           │
│    │ └───────┘ │    │ └──────────────────────┘           │
│    └───────────┘    │                                     │
│                     ├──────────┐                          │
│                     │           │                         │
│            ┌────────▼──┐   ┌───▼──────┐                  │
│            │  ReactJS  │   │ Node.js  │                  │
│            │  with     │   │ Backend  │                  │
│            │  Hooks    │   │          │                  │
│            │           │   │ Express  │                  │
│            │ ┌───────┐ │   │ Server   │                  │
│            │ │States │ │   │ Proxy    │                  │
│            │ │Effect │ │   │ Pattern  │                  │
│            │ │Render │ │   │          │                  │
│            │ └───────┘ │   └──────────┘                  │
│            └───────────┘                                  │
│                                                             │
│  ┌──────────────────────────────────────────────┐        │
│  │  Common Patterns Section                      │        │
│  │  • Fetching Categories                       │        │
│  │  • Error Handling                            │        │
│  │  • Caching Strategies                        │        │
│  │  • Environment Variables                     │        │
│  └──────────────────────────────────────────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘


COMPONENT HIERARCHY
═════════════════════════════════════════════════════════════

App.jsx (Router)
│
├─ Layout (Main wrapper)
│  │
│  ├─ Sidebar (Navigation)
│  │
│  └─ Routes
│     │
│     ├─ Introduction
│     ├─ Authentication
│     ├─ LiveDemos
│     │  ├─ ImageGrid
│     │  └─ ImageSlider
│     │
│     └─ CodeExamples


DATA FLOW: LIVE DEMOS
═════════════════════════════════════════════════════════════

User Input (API Key + Category)
          │
          ▼
    fetch() to API
          │
          ▼
    Response: { categories: [...], images: [...] }
          │
    ┌─────┴─────┐
    │           │
    ▼           ▼
  Grid View  Slider View
    │           │
    └─────┬─────┘
          │
          ▼
  ImageGrid or ImageSlider Component
          │
          ▼
    Rendered Images


STYLING ARCHITECTURE
═════════════════════════════════════════════════════════════

index.css (Global)
    │
    ├─ @tailwind base
    ├─ @tailwind components
    └─ @tailwind utilities
         │
         ▼
    tailwind.config.js
         │
         ├─ colors (GitHub theme)
         ├─ fontFamily (Inter, Fira Code)
         └─ theme extensions

    ▼
    All Components use:
    • Utility classes
    • Custom components (.nav-link, .code-block)
    • Responsive breakpoints


DEPLOYMENT FLOW
═════════════════════════════════════════════════════════════

npm run build
    │
    ▼
Vite builds dist/
    │
    ├─ Optimized JS
    ├─ CSS (minified)
    ├─ Assets (images, fonts)
    └─ index.html

    ▼
Deploy to:
    • Vercel (recommended)
    • Netlify
    • GitHub Pages
    • Any static host

    ▼
Users access at: https://your-docs-url.com
```

## File Organization

```
docs/
│
├── src/
│   ├── components/
│   │   ├── Layout.jsx         ← Main layout wrapper
│   │   ├── Sidebar.jsx        ← Navigation menu
│   │   ├── ImageGrid.jsx      ← NEW: Grid component
│   │   └── ImageSlider.jsx    ← NEW: Carousel component
│   │
│   ├── pages/
│   │   ├── Introduction.jsx   ← API overview
│   │   ├── Authentication.jsx ← API key guide
│   │   ├── LiveDemos.jsx      ← ENHANCED: Interactive demos
│   │   └── CodeExamples.jsx   ← ENHANCED: Code snippets
│   │
│   ├── App.jsx                ← Router setup
│   ├── main.jsx               ← Entry point
│   └── index.css              ← Global styles
│
├── index.html                 ← HTML template
├── vite.config.js             ← Build config
├── tailwind.config.js         ← Tailwind config
├── postcss.config.js          ← CSS processing
├── package.json               ← Dependencies
│
├── README.md                  ← Project docs
├── IMPLEMENTATION.md          ← Detailed guide
├── FEATURES.md                ← Feature reference
├── QUICKSTART.md              ← Quick start
│
├── .gitignore
├── .env.example
└── (More config files)
```

## Key Features Summary

```
┌─────────────────────────────────────┐
│   DOCUMENTATION WEBSITE             │
├─────────────────────────────────────┤
│                                     │
│  ✓ Responsive Design                │
│    (Mobile, Tablet, Desktop)        │
│                                     │
│  ✓ Dark Theme (GitHub Inspired)     │
│    (Professional & Easy on Eyes)    │
│                                     │
│  ✓ Interactive Live Demos           │
│    (Grid & Slider Views)            │
│                                     │
│  ✓ Multiple Code Examples           │
│    (HTML, React, Node.js)           │
│                                     │
│  ✓ Best Practices Guide             │
│    (Security, Caching, Errors)      │
│                                     │
│  ✓ Production Ready                 │
│    (Build & Deploy Optimized)       │
│                                     │
└─────────────────────────────────────┘
```
