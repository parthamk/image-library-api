# 🚀 Quick Reference - Documentation Website

## File Locations Quick Access

| Component | Location | Purpose |
|-----------|----------|---------|
| **ImageGrid** | `src/components/ImageGrid.jsx` | Responsive image grid |
| **ImageSlider** | `src/components/ImageSlider.jsx` | Auto-cycling carousel |
| **Layout** | `src/components/Layout.jsx` | Main app layout |
| **Sidebar** | `src/components/Sidebar.jsx` | Navigation menu |
| **Introduction** | `src/pages/Introduction.jsx` | API overview |
| **Authentication** | `src/pages/Authentication.jsx` | API key guide |
| **LiveDemos** | `src/pages/LiveDemos.jsx` | Interactive testing |
| **CodeExamples** | `src/pages/CodeExamples.jsx` | Code samples |
| **App.jsx** | `src/App.jsx` | Router setup |
| **Styles** | `src/index.css` | Global CSS |

---

## Component Exports

### ImageGrid Component
```jsx
import ImageGrid from '../components/ImageGrid'

// Usage
<ImageGrid images={imagesArray} />

// Props
- images: Array of image objects with { name, url }
```

### ImageSlider Component
```jsx
import ImageSlider from '../components/ImageSlider'

// Usage
<ImageSlider images={imagesArray} autoplay={true} interval={3000} />

// Props
- images: Array of image objects
- autoplay: Boolean (default: true)
- interval: Number in milliseconds (default: 3000)
```

---

## Live Demos Features

| Feature | How to Use |
|---------|-----------|
| **Enter API Key** | Type in password field |
| **Set Base URL** | Modify the base URL input |
| **Fetch Categories** | Click button to load |
| **Select Category** | Click any category card |
| **Grid View** | Tab to show all images grid |
| **Slider View** | Tab to show carousel |
| **Navigate Slider** | Click prev/next or thumbnails |

---

## Code Examples Languages

| Language | Tab Name | Tech Stack |
|----------|----------|-----------|
| **HTML** | Static HTML + Vanilla JS | Pure Fetch + DOM |
| **React** | ReactJS with Hooks | useState + useEffect |
| **Node** | Node.js Backend | Express + Proxy |

---

## Page Navigation

```
Home (/)
├── Introduction
├── Authentication
├── Live Demos
└── Code Examples
```

### URL Routes
- `/` → Introduction
- `/authentication` → Authentication
- `/live-demos` → Live Demos
- `/code-examples` → Code Examples

---

## Styling Classes (Tailwind + Custom)

### Custom CSS Classes
- `.code-block` - Styled code container
- `.nav-link` - Navigation link style
- `.nav-link.active` - Active nav link

### Color Classes
- `bg-github-dark` - Main background (#0d1117)
- `text-github-text` - Main text (#c9d1d9)
- `border-github-border` - Border color (#30363d)
- `bg-github-subtle` - Subtle background (#161b22)

---

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Common Use Cases

### "I want to show images from a category"
→ Use `ImageGrid` component with `imagesArray`

### "I want an auto-cycling gallery"
→ Use `ImageSlider` component with autoplay enabled

### "I want to let users test the API"
→ Direct them to Live Demos page (/live-demos)

### "I want the HTML code example"
→ Visit Code Examples page, select HTML tab

### "I want to add a new documentation page"
→ Create file in `src/pages/`, add route in `App.jsx`, add nav in `Sidebar.jsx`

---

## API Endpoints Reference

```
GET /api/directories
→ Returns all categories

GET /api/images/:category
→ Returns images and subfolders in category

GET /api/images/:category/:subfolder
→ Returns images in subfolder
```

All require header: `x-api-key: YOUR_KEY`

---

## Responsive Breakpoints

| Screen | Columns | Sidebar |
|--------|---------|---------|
| Mobile (<768px) | 1 | Collapsible |
| Tablet (768-1024px) | 2 | Visible |
| Desktop (>1024px) | 3 | Fixed |

---

## Deployment Checklist

- [ ] `npm install` - Install dependencies
- [ ] `npm run build` - Create dist folder
- [ ] Review `dist/` folder contents
- [ ] Deploy `dist/` to hosting:
  - [ ] Vercel: `vercel`
  - [ ] Netlify: `netlify deploy --prod --dir=dist`
  - [ ] GitHub Pages: Commit `dist/`
- [ ] Test all pages
- [ ] Test Live Demos with API key
- [ ] Test Code Examples tabs

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Dependencies not installing | Clear npm cache: `npm cache clean --force` |
| Port 3000 in use | Change in `vite.config.js` |
| Live Demos shows error | Check API key and base URL |
| Grid not responsive | Ensure Tailwind CSS loaded in browser |
| Slider not auto-playing | Check `autoplay` prop is `true` |

---

## Color Palette Reference

```
Dark Background:     #0d1117 (rgb(13, 17, 23))
Light Text:          #c9d1d9 (rgb(201, 209, 217))
Subtle Border:       #30363d (rgb(48, 54, 61))
Subtle Background:   #161b22 (rgb(22, 27, 34))
Primary Accent:      #3b82f6 (rgb(59, 130, 246) - Blue)
Success:             #238636 (rgb(35, 134, 54) - Green)
Warning:             #d29922 (rgb(210, 153, 34) - Yellow)
Error:               #da3633 (rgb(218, 54, 51) - Red)
```

---

## Important Directories

```
/src              → Source code
/src/components   → Reusable components
/src/pages        → Page components
/dist             → Production build (generated)
/node_modules     → Dependencies (generated)
```

---

## Environment Variables

```
# .env.local (create from .env.example)
VITE_API_BASE_URL=https://image-library-api.vercel.app
```

Access in React:
```jsx
const baseUrl = import.meta.env.VITE_API_BASE_URL
```

---

## File Size Reference (Approximate)

| File | Lines | Purpose |
|------|-------|---------|
| App.jsx | 25 | Router |
| Layout.jsx | 60 | Main layout |
| Sidebar.jsx | 120 | Navigation |
| ImageGrid.jsx | 45 | Grid component |
| ImageSlider.jsx | 100 | Carousel component |
| Introduction.jsx | 80 | Introduction page |
| Authentication.jsx | 100 | Auth page |
| LiveDemos.jsx | 180 | Live demos page |
| CodeExamples.jsx | 300 | Code examples page |

---

## Key Dependencies

```json
{
  "react": "^18.2.0",           // UI library
  "react-dom": "^18.2.0",       // React DOM renderer
  "react-router-dom": "^6.20.0" // Routing
}
```

Dev Dependencies:
```json
{
  "vite": "^5.0.8",              // Build tool
  "tailwindcss": "^3.4.1",       // Utility CSS
  "@vitejs/plugin-react": "^4.2.1" // React support
}
```

---

## Next Steps After Deployment

1. Share documentation URL with developers
2. Direct them to Live Demos to test with their API key
3. Share appropriate code example link
4. Collect feedback on documentation quality
5. Update documentation as API changes

---

**Last Updated:** January 17, 2026
**Status:** ✅ Complete and Production Ready
